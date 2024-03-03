import { Menu, MenuItem } from '@mui/material';
import {
  AvatarIcon,
  HeaderRoot,
  PlatformIcon,
  PlatformInfoContainer,
  PlatformTitle,
} from './Header.styles';
import { useState } from 'react';

export default function Header(): JSX.Element {
  const [anchorElement, setAnchorElement] = useState<HTMLElement>();

  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(undefined);
  };

  return (
    <HeaderRoot>
      <PlatformInfoContainer>
        <PlatformIcon />
        <PlatformTitle>Peregrine Mail</PlatformTitle>
      </PlatformInfoContainer>

      {/* <UserMenu /> */}
      <AvatarIcon onClick={handleClick} />

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
        <MenuItem onClick={handleClose}>Connect new account</MenuItem>
      </Menu>
    </HeaderRoot>
  );
}
