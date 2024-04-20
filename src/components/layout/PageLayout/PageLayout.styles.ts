import styled from 'styled-components';

export const PageLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  max-width: 100vw;
`;

export const PageLayoutContent = styled.div`
  display: flex;
  background-color: #fff;

  height: 100%;
  width: 100%;
`;

export const PageLayoutChildren = styled.div`
  display: flex;
`;
