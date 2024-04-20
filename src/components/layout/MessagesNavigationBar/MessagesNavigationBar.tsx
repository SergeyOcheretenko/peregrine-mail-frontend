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
import { useLocation, useNavigate } from 'react-router-dom';

export default function MessagesNavigationBar(): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const items = [
    {
      key: 'inbox',
      label: 'Inbox',
      pathname: '/dashboard/inbox',
      icon: <MailOutlined />,
    },
    {
      key: 'starred',
      label: 'Starred',
      pathname: '/dashboard/starred',
      icon: <StarOutlined />,
    },
    {
      key: 'drafts',
      label: 'Drafts',
      pathname: '/dashboard/drafts',
      icon: <EditOutlined />,
    },
    {
      key: 'spam',
      label: 'Spam',
      pathname: '/dashboard/spam',
      icon: <WarningOutlined />,
    },
    {
      key: 'trash',
      label: 'Trash',
      pathname: '/dashboard/trash',
      icon: <DeleteOutlined />,
    },
  ];

  return (
    <MessagesNavigationBarRoot>
      {items.map((item) => (
        <MessagesNavigationBarItem
          isActive={pathname === item.pathname}
          onClick={() => navigate(item.pathname)}
        >
          {item.icon}
          <MessagesNavigationBarItemTypography>{item.label}</MessagesNavigationBarItemTypography>
        </MessagesNavigationBarItem>
      ))}
    </MessagesNavigationBarRoot>
  );
}
