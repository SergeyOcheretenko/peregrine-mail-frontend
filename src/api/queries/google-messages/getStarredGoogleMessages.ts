import { UseQueryResult, useQuery } from 'react-query';
import { GoogleCredentialsService } from '../../services/GoogleCredentialsService';

export const useGetStarredGoogleMessages = ({
  credentialsId,
  amount,
}: {
  credentialsId: string | undefined;
  amount: number | undefined;
}): UseQueryResult<any> => {
  return useQuery(
    'get_starred_messages',
    () =>
      GoogleCredentialsService.getStarredMessages({
        credentialsId: credentialsId as string,
        amount: amount as number,
      }),
    {
      enabled: !!amount && !!credentialsId,
      cacheTime: 0,
    }
  );
};
