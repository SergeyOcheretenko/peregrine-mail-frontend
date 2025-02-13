import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GoogleCredentialsService {
  private static readonly baseUrl: string = process.env.REACT_APP_API_BASE_URL || '';

  public static getById({ id }: { id: string }): CancelablePromise<any> {
    return __request({
      method: 'GET',
      baseUrl: GoogleCredentialsService.baseUrl,
      path: `/google-credentials/${id}`,
    });
  }

  public static getInboxMessages({
    credentialsId,
    amount,
  }: {
    credentialsId: string;
    amount: number;
  }): CancelablePromise<any> {
    return __request({
      method: 'GET',
      baseUrl: GoogleCredentialsService.baseUrl,
      path: `/google-messages/${credentialsId}/inbox-messages/${amount}`,
    });
  }

  public static getSpamMessages({
    credentialsId,
    amount,
  }: {
    credentialsId: string;
    amount: number;
  }): CancelablePromise<any> {
    return __request({
      method: 'GET',
      baseUrl: GoogleCredentialsService.baseUrl,
      path: `/google-messages/${credentialsId}/spam-messages/${amount}`,
    });
  }

  public static getStarredMessages({
    credentialsId,
    amount,
  }: {
    credentialsId: string;
    amount: number;
  }): CancelablePromise<any> {
    return __request({
      method: 'GET',
      baseUrl: GoogleCredentialsService.baseUrl,
      path: `/google-messages/${credentialsId}/starred-messages/${amount}`,
    });
  }

  public static getTrashMessages({
    credentialsId,
    amount,
  }: {
    credentialsId: string;
    amount: number;
  }): CancelablePromise<any> {
    return __request({
      method: 'GET',
      baseUrl: GoogleCredentialsService.baseUrl,
      path: `/google-messages/${credentialsId}/trash-messages/${amount}`,
    });
  }

  public static getDraftMessages({
    credentialsId,
    amount,
  }: {
    credentialsId: string;
    amount: number;
  }): CancelablePromise<any> {
    return __request({
      method: 'GET',
      baseUrl: GoogleCredentialsService.baseUrl,
      path: `/google-messages/${credentialsId}/draft-messages/${amount}`,
    });
  }
}
