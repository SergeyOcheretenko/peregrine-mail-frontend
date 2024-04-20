import {
  MessagePlankDate,
  MessagePlankFrom,
  MessagePlankFromContainer,
  MessagePlankRoot,
  MessagePlankSnippet,
  MessagePlankSnippetContainer,
  MessagePlankSubject,
  MessagePlankSubjectContainer,
} from './MessagePlank.styles';

type MessagePlankProps = {
  from: string;
  subject: string;
  snippet: string;
  date: string;
};

export default function MessagePlank({
  from,
  subject,
  snippet,
  date,
}: MessagePlankProps): JSX.Element {
  return (
    <MessagePlankRoot>
      <MessagePlankFromContainer>
        <MessagePlankFrom>{from}</MessagePlankFrom>
      </MessagePlankFromContainer>

      <MessagePlankSubjectContainer>
        <MessagePlankSubject>{subject}</MessagePlankSubject>
      </MessagePlankSubjectContainer>

      <MessagePlankSnippetContainer>
        <MessagePlankSnippet>{snippet}</MessagePlankSnippet>
      </MessagePlankSnippetContainer>

      <MessagePlankDate>{date}</MessagePlankDate>
    </MessagePlankRoot>
  );
}
