import { Menu, MenuItem } from '@mui/material';
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

export default function Header(): JSX.Element {
  const [anchorElement, setAnchorElement] = useState<HTMLElement>();
  const [accountId, setAccountId] = useState<string>();

  const { data } = useGetGoogleLoginUrl();
  const { data: account } = useGetGoogleCredentialsById({ id: accountId });

  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(undefined);
  };

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

  return (
    <HeaderRoot>
      <PlatformInfoContainer>
        <PlatformIcon />
        <PlatformTitle>Peregrine Mail</PlatformTitle>
      </PlatformInfoContainer>

      {/* <UserMenu /> */}
      <AvatarIcon src={account?.picture} onClick={handleClick} />

      <Menu
        anchorEl={anchorElement}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 0px 2px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={connectNewAccount}>
          {account ? 'Connect another account' : 'Connect new account'}
        </MenuItem>
      </Menu>
    </HeaderRoot>
  );
}
