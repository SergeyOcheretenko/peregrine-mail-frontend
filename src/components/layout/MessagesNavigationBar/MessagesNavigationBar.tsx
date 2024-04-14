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

export default function MessagesNavigationBar(): JSX.Element {
  return (
    <MessagesNavigationBarRoot>
      <MessagesNavigationBarItem>
        <MailOutlined />
        <MessagesNavigationBarItemTypography>Inbox</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <StarOutlined />
        <MessagesNavigationBarItemTypography>Starred</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <EditOutlined />
        <MessagesNavigationBarItemTypography>Drafts</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <WarningOutlined />
        <MessagesNavigationBarItemTypography>Spam</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <DeleteOutlined />
        <MessagesNavigationBarItemTypography>Trash</MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>
    </MessagesNavigationBarRoot>
  );
}
