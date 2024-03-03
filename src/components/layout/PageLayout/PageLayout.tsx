import Header from '../Header/Header';
import MessagesNavigationBar from '../MessagesNavigationBar/MessagesNavigationBar';
import { PageLayoutContent, PageLayoutRoot } from './PageLayout.styles';

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <PageLayoutRoot>
      <Header />
      <PageLayoutContent>
        <MessagesNavigationBar />
        {children}
      </PageLayoutContent>
    </PageLayoutRoot>
  );
}
