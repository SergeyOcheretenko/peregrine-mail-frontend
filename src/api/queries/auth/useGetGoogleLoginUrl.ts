import { UseQueryResult, useQuery } from 'react-query';
import { AuthService } from '../../services/AuthService';

export const useGetGoogleLoginUrl = (): UseQueryResult<{ url: string }> => {
  return useQuery(['get_google_login_url'], AuthService.getGoogleLoginUrl);
};
