import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AuthService {
  private static readonly baseUrl: string = process.env.REACT_APP_API_BASE_URL || '';

  public static getGoogleLoginUrl(): CancelablePromise<{ url: string }> {
    return __request({
      method: 'GET',
      baseUrl: AuthService.baseUrl,
      path: `/auth/google/login`,
    });
  }
}
