import Cookies from 'js-cookie';
import { useMemo } from 'react';
import { useGetInboxGoogleMessages } from '../../../api/queries/google-messages/getInboxGoogleMessages';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';

export default function DashboardInbox(): JSX.Element {
  const accountId = useMemo(() => {
    return Cookies.get('account');
  }, []);

  const { data } = useGetInboxGoogleMessages({ credentialsId: accountId, amount: 2 });

  return <PageLayout>{data && <div>{JSON.stringify(data)}</div>}</PageLayout>;
}
