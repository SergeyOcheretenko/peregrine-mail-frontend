import {
  AvatarIcon,
  HeaderRoot,
  PlatformIcon,
  PlatformInfoContainer,
  PlatformTitle,
} from './Header.styles';
import { useEffect, useState } from 'react';
import { useGetGoogleLoginUrl } from '../../../api/queries/auth/useGetGoogleLoginUrl';
import { useGetGoogleCredentialsById } from '../../../api/queries/google-credentials/getGetGoogleCredentialsById';
import { Dropdown, MenuProps } from 'antd';

export default function Header(): JSX.Element {
  const [accountId, setAccountId] = useState<string>();

  const { data } = useGetGoogleLoginUrl();
  const { data: account } = useGetGoogleCredentialsById({ id: accountId });

  const connectNewAccount = () => {
    if (!data) return;

    window.location.href = data.url;
  };

  useEffect(() => {
    const account = document.cookie
      .split('; ')
      .filter((row) => row.startsWith('account='))
      .map((c) => c.split('=')[1])[0];

    if (account) {
      setAccountId(account);
    }
  }, []);

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <span onClick={connectNewAccount}>
          {account ? 'Connect another account' : 'Connect new account'}
        </span>
      ),
    },
  ];

  return (
    <HeaderRoot>
      <PlatformInfoContainer>
        <PlatformIcon />
        <PlatformTitle>Peregrine Mail</PlatformTitle>
      </PlatformInfoContainer>

      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <AvatarIcon src={account?.picture} />
      </Dropdown>
    </HeaderRoot>
  );
}
