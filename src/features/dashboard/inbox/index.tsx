import Cookies from 'js-cookie';
import { useMemo } from 'react';
import { useGetLastGoogleMessages } from '../../../api/queries/google-messages/getLastGoogleMessages';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';

export default function DashboardInbox(): JSX.Element {
  const accountId = useMemo(() => {
    return Cookies.get('account');
  }, []);

  const { data } = useGetLastGoogleMessages({ credentialsId: accountId, amount: 2 });

  return <PageLayout>{data && <div>{JSON.stringify(data)}</div>}</PageLayout>;
}
