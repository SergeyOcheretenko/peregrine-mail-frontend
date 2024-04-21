import Cookies from 'js-cookie';
import { useMemo } from 'react';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';
import MessagePlank from '../components/MessagePlank/MessagePlank';
import { Spin } from 'antd';
import { useGetStarredGoogleMessages } from '../../../api/queries/google-messages/getStarredGoogleMessages';

export default function DashboardStarred(): JSX.Element {
  const accountId = useMemo(() => {
    return Cookies.get('account');
  }, []);

  const { data, isLoading } = useGetStarredGoogleMessages({ credentialsId: accountId, amount: 10 });

  return (
    <PageLayout>
      {isLoading ? (
        <Spin />
      ) : (
        <div>
          {data &&
            data.map((message: any) => (
              <MessagePlank
                from={
                  message.data.payload.headers.find((header: any) => header.name === 'From').value
                }
                subject={
                  message.data.payload.headers.find((header: any) => header.name === 'Subject')
                    .value
                }
                snippet={message.data.snippet}
                date={
                  message.data.payload.headers.find((header: any) => header.name === 'Date').value
                }
              />
            ))}
        </div>
      )}
    </PageLayout>
  );
}
