export type Notification =
  | {
      type: 'POST_REACT';
      id: number;
      user: {
        name: string;
        avatar: string;
      };
      message: string;
      relative_timestamp: string;
      unread: boolean;
      post: { title: string; url: string };
    }
  | {
      type: 'FOLLOW';
      id: number;
      user: {
        name: string;
        avatar: string;
      };
      message: string;
      relative_timestamp: string;
      unread: boolean;
    }
  | {
      type: 'PRIVATE_MESSAGE';
      id: number;
      user: {
        name: string;
        avatar: string;
      };
      message: string;
      relative_timestamp: string;
      unread: boolean;
      message_preview: string;
    }
  | {
      type: 'PICTURE_COMMENT';
      id: number;
      user: {
        name: string;
        avatar: string;
      };
      message: string;
      relative_timestamp: string;
      unread: boolean;
      picture: string;
    }
  | {
      type: 'GROUP';
      id: number;
      user: {
        name: string;
        avatar: string;
      };
      message: string;
      relative_timestamp: string;
      unread: boolean;
      group: { title: string; url: string };
    };

export default [
  {
    id: 0,
    type: 'POST_REACT',
    user: {
      name: 'Mark Webber',
      avatar: '/avatar-mark-webber.webp'
    },
    message: 'reacted to your recent post',
    post: {
      title: 'My first tournament today!',
      url: '/'
    },
    relative_timestamp: '1m ago',
    unread: true
  },
  {
    id: 1,
    type: 'FOLLOW',
    user: {
      name: 'Angela Gray',
      avatar: '/avatar-angela-gray.webp'
    },
    message: 'followed you',
    relative_timestamp: '5m ago',
    unread: true
  },
  {
    id: 2,
    type: 'GROUP',
    user: {
      name: 'Jacob Thompson',
      avatar: '/avatar-jacob-thompson.webp'
    },
    message: 'has joined your group',
    group: {
      title: 'Chess Club',
      url: '/'
    },
    relative_timestamp: '1 day ago',
    unread: true
  },
  {
    id: 3,
    type: 'PRIVATE_MESSAGE',
    user: {
      name: 'Rizky Hasanuddin',
      avatar: '/avatar-rizky-hasanuddin.webp'
    },
    message: 'sent you a private message',
    message_preview:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    relative_timestamp: '5 days ago',
    unread: false
  },
  {
    id: 4,
    type: 'PICTURE_COMMENT',
    user: {
      name: 'Kimberly Smith',
      avatar: '/avatar-kimberly-smith.webp'
    },
    message: 'commented on your picture',
    picture: '/image-chess.webp',
    relative_timestamp: '1 week ago',
    unread: false
  },
  {
    id: 5,
    type: 'POST_REACT',
    user: {
      name: 'Nathan Peterson',
      avatar: '/avatar-nathan-peterson.webp'
    },
    message: 'reacted to your recent post',
    post: {
      title: '5 end-game strategies to increase your win rate',
      url: '/'
    },
    relative_timestamp: '2 weeks ago',
    unread: false
  },
  {
    id: 6,
    type: 'GROUP',
    user: {
      name: 'Anna Kim',
      avatar: '/avatar-anna-kim.webp'
    },
    message: 'left the group',
    group: {
      title: 'Chess Club',
      url: '/'
    },
    relative_timestamp: '2 weeks ago',
    unread: false
  }
] as Notification[];
