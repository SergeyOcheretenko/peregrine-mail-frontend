import { Typography, styled } from '@mui/material';

export const MessagesNavigationBarRoot = styled('div')`
  width: 20rem;
  min-width: 20rem;
  border-right: 0.25rem solid #f7fbfc;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const MessagesNavigationBarItem = styled('div')`
  width: 14rem; // will be 16rem with padding
  background-color: #f4fdfc;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`;

export const MessagesNavigationBarItemTypography = styled(Typography)``;
