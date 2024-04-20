import { Typography } from 'antd';
import styled from 'styled-components';

export const MessagePlankRoot = styled.div`
  display: flex;
  height: fit-content;
  gap: 1rem;

  border: 1px solid black;
  align-items: center;
`;

export const MessagePlankFromContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 10rem;
  width: 10rem;
  max-width: 10rem;
`;

export const MessagePlankFrom = styled(Typography)``;

export const MessagePlankSubjectContainer = styled.div`
  display: flex;
  align-items: center;

  min-width: 10rem;
  width: 10rem;
  max-width: 10rem;
`;

export const MessagePlankSubject = styled(Typography)``;

export const MessagePlankSnippetContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MessagePlankSnippet = styled(Typography)``;

export const MessagePlankDate = styled(Typography)`
  font-weight: 600;
  white-space: nowrap;
`;
