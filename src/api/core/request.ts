import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';

function isDefined<T>(
  value: T | null | undefined
): value is Exclude<T, null | undefined> {
  return value !== undefined && value !== null;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

function isBlob(value: any): value is Blob {
  return (
    typeof value === 'object' &&
    typeof value.type === 'string' &&
    typeof value.stream === 'function' &&
    typeof value.arrayBuffer === 'function' &&
    typeof value.constructor === 'function' &&
    typeof value.constructor.name === 'string' &&
    /^(Blob|File)$/.test(value.constructor.name) &&
    /^(Blob|File)$/.test(value[Symbol.toStringTag])
  );
}

function isFormData(value: any): value is FormData {
  return value instanceof FormData;
}

function getQueryString(params: Record<string, any>): string {
  const qs: string[] = [];

  const append = (key: string, value: any) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };

  Object.entries(params)
    .filter(([_, value]) => isDefined(value))
    .forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => append(key, v));
      } else {
        append(key, value);
      }
    });

  if (qs.length > 0) {
    return `?${qs.join('&')}`;
  }

  return '';
}

function getUrl(options: ApiRequestOptions): string {
  const url = `${options.baseUrl}${options.path}`;

  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }

  return url;
}

function getFormData(options: ApiRequestOptions): FormData | undefined {
  if (options.formData) {
    const formData = new FormData();

    const append = (key: string, value: any) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };

    Object.entries(options.formData)
      .filter(([_, value]) => isDefined(value))
      .forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => append(key, v));
        } else {
          append(key, value);
        }
      });

    return formData;
  }
  return;
}

async function getHeaders(options: ApiRequestOptions): Promise<Headers> {
  const defaultHeaders = Object.entries({
    Accept: 'application/json',
    ...options.headers,
  })
    .filter(([_, value]) => isDefined(value))
    .reduce(
      (headers, [key, value]) => ({
        ...headers,
        [key]: String(value),
      }),
      {} as Record<string, string>
    );

  const headers = new Headers(defaultHeaders);

  if (options.body) {
    if (options.mediaType) {
      headers.append('Content-Type', options.mediaType);
    } else if (isBlob(options.body)) {
      headers.append(
        'Content-Type',
        options.body.type || 'application/octet-stream'
      );
    } else if (isString(options.body)) {
      headers.append('Content-Type', 'text/plain');
    } else if (!isFormData(options.body)) {
      headers.append('Content-Type', 'application/json');
    }
  }

  return headers;
}

function getRequestBody(options: ApiRequestOptions): BodyInit | undefined {
  if (options.body) {
    if (options.mediaType?.includes('/json')) {
      return JSON.stringify(options.body);
    } else if (
      isString(options.body) ||
      isBlob(options.body) ||
      isFormData(options.body)
    ) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return;
}

async function sendRequest(
  options: ApiRequestOptions,
  url: string,
  formData: FormData | undefined,
  body: BodyInit | undefined,
  headers: Headers,
  onCancel: OnCancel
): Promise<Response> {
  const controller = new AbortController();

  const request: RequestInit = {
    headers,
    body: body || formData,
    method: options.method,
    signal: controller.signal,
  };

  onCancel(() => controller.abort());

  return await fetch(url, request);
}

function getResponseHeader(
  response: Response,
  responseHeader?: string
): string | undefined {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return;
}

async function getResponseBody(response: Response): Promise<any> {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get('Content-Type');
      if (contentType) {
        const isJSON = contentType.toLowerCase().startsWith('application/json');
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return;
}

function catchErrors(options: ApiRequestOptions, result: ApiResult): void {
  const errors: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    ...options.errors,
  };

  const error = errors[result.status];
  if (error) {
    throw new ApiError(result, error);
  }

  if (!result.ok) {
    throw new ApiError(result, 'Generic Error');
  }
}

export function request<T>(options: ApiRequestOptions): CancelablePromise<T> {
  return new CancelablePromise(async (resolve, reject, onCancel) => {
    try {
      const url = getUrl(options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(options);

      if (!onCancel._isCancelled) {
        const response = await sendRequest(
          options,
          url,
          formData,
          body,
          headers,
          onCancel
        );
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(
          response,
          options.responseHeader
        );

        const result: ApiResult = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader || responseBody,
        };

        catchErrors(options, result);

        resolve(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
}
