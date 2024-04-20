import {
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  StarOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import {
  MessagesNavigationBarItem,
  MessagesNavigationBarItemTypography,
  MessagesNavigationBarRoot,
} from './MessagesNavigationBar.styles';
import { useLocation } from 'react-router-dom';

export default function MessagesNavigationBar(): JSX.Element {
  const { pathname } = useLocation();

  console.log('location', pathname);

  return (
    <MessagesNavigationBarRoot>
      <MessagesNavigationBarItem isActive={pathname === '/dashboard/inbox'}>
        <MailOutlined />
        <MessagesNavigationBarItemTypography>Inbox</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem isActive={false}>
        <StarOutlined />
        <MessagesNavigationBarItemTypography>Starred</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem isActive={false}>
        <EditOutlined />
        <MessagesNavigationBarItemTypography>Drafts</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem isActive={false}>
        <WarningOutlined />
        <MessagesNavigationBarItemTypography>Spam</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem isActive={false}>
        <DeleteOutlined />
        <MessagesNavigationBarItemTypography>Trash</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>
    </MessagesNavigationBarRoot>
  );
}
