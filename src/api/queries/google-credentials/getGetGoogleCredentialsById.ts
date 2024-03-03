import { UseQueryResult, useQuery } from 'react-query';
import { GoogleCredentialsService } from '../../services/GoogleCredentialsService';

export const useGetGoogleCredentialsById = ({
  id,
}: {
  id: string | undefined;
}): UseQueryResult<any> => {
  return useQuery(
    ['get_google_credentials_' + id],
    () => GoogleCredentialsService.getById({ id: id as string }),
    { enabled: !!id }
  );
};
