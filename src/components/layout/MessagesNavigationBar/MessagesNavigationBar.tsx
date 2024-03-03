import React from 'react';
import {
  MessagesNavigationBarItem,
  MessagesNavigationBarItemTypography,
  MessagesNavigationBarRoot,
} from './MessagesNavigationBar.styles';
import {
  DeleteOutline,
  EditOutlined,
  EmailOutlined,
  MessageOutlined,
  ReportGmailerrorredOutlined,
  StarOutline,
  StopOutlined,
  WarningOutlined,
} from '@mui/icons-material';

export default function MessagesNavigationBar(): JSX.Element {
  return (
    <MessagesNavigationBarRoot>
      <MessagesNavigationBarItem>
        <EmailOutlined />
        <MessagesNavigationBarItemTypography>
          Inbox
        </MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <StarOutline />
        <MessagesNavigationBarItemTypography>
          Starred
        </MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <EditOutlined />
        <MessagesNavigationBarItemTypography>
          Drafts
        </MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <ReportGmailerrorredOutlined />
        <MessagesNavigationBarItemTypography>
          Spam
        </MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>

      <MessagesNavigationBarItem>
        <DeleteOutline />
        <MessagesNavigationBarItemTypography>
          Trash
        </MessagesNavigationBarItemTypography>
      </MessagesNavigationBarItem>
    </MessagesNavigationBarRoot>
  );
}
