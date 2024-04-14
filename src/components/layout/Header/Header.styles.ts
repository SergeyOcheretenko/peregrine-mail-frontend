import styled from 'styled-components';
import { ReactComponent as PeregrineSvg } from '../../../assets/icons/svg/peregrine.svg';
import { Avatar } from 'antd';

export const HeaderRoot = styled('header')`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  border-bottom: 0.25rem solid #f7fbfc;
  padding: 0 2rem;
`;

export const PlatformInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PlatformIcon = styled(PeregrineSvg)`
  width: 2.5rem;
  height: 2.5rem;
  fill: #60c3c5;
`;

export const PlatformTitle = styled('h1')`
  font-size: 1.6rem;
`;

export const AvatarIcon = styled(Avatar)`
  cursor: pointer;

  width: 2.5rem;
  height: 2.5rem;
`;
