import { UseQueryResult, useQuery } from 'react-query';
import { GoogleCredentialsService } from '../../services/GoogleCredentialsService';

export const useGetInboxGoogleMessages = ({
  credentialsId,
  amount,
}: {
  credentialsId: string | undefined;
  amount: number | undefined;
}): UseQueryResult<any> => {
  return useQuery(
    '',
    () =>
      GoogleCredentialsService.getInboxMessages({
        credentialsId: credentialsId as string,
        amount: amount as number,
      }),
    {
      enabled: !!amount && !!credentialsId,
    }
  );
};
