import Cookies from 'js-cookie';
import { useMemo } from 'react';
import { useGetInboxGoogleMessages } from '../../../api/queries/google-messages/getInboxGoogleMessages';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';
import MessagePlank from '../components/MessagePlank/MessagePlank';

export default function DashboardInbox(): JSX.Element {
  const accountId = useMemo(() => {
    return Cookies.get('account');
  }, []);

  const { data } = useGetInboxGoogleMessages({ credentialsId: accountId, amount: 10 });

  return (
    <PageLayout>
      <div>
        {data &&
          data.map((message: any) => (
            <MessagePlank
              from={
                message.data.payload.headers.find((header: any) => header.name === 'From').value
              }
              subject={
                message.data.payload.headers.find((header: any) => header.name === 'Subject').value
              }
              snippet={message.data.snippet}
              date={
                message.data.payload.headers.find((header: any) => header.name === 'Date').value
              }
            />
          ))}
      </div>
    </PageLayout>
  );
}
