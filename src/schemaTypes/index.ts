export type UserSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  displayName: string;
  biography: string;
  location: string;
  externalLink: string;
  profileImageURL: string;
  profileHeaderImageURL: string;
};

export type PostSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  postedAt: Date;
  content: string;
  imageURLs: string[];
  videoURL: string;
  gifURL: string;
  subwall?: SubwallSchema;
  parentPostUID: string;
  createdBy: UserSchema;
  repostedBy?: UserSchema;
  quotedPost?: PostSchema;
  whoCanReply: WhoCanReplyType;
  isDeleted: boolean;
  isPinnedToProfile: boolean;
};

export type SubwallSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  subwallImageURL: string;
  subwallHeaderImageURL: string;
  subwallName: string;
  slug: string;
  description: string;
  externalLink: string;
  isPrivate: boolean;
  createdBy: UserSchema;
};

export type ChatRoomSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  chatRoomName: string;
  imageURL: string;
  members: UserSchema[];
};

export type ChatMessageSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  chatRoom: ChatRoomSchema;
  content: string;
  imageURL: string;
  videoURL: string;
  gifURL: string;
  createdBy: UserSchema;
};

export type ListSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  imageURL: string;
  headerImageURL: string;
  isPrivate: boolean;
  isPinned: boolean;
  createdBy: UserSchema;
  members: UserSchema[];
};

type NotificationType =
  | 'USER_FOLLOW'
  | 'POST_LIKE'
  | 'POST_REPLY'
  | 'POST_REPOST'
  | 'POST_QUOTE';

export type NotificationSchema = {
  _id: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  people: UserSchema[];
  notifyTo: UserSchema;
  notificationType: NotificationType;
  targetPost?: PostSchema;
  supplementalPost?: PostSchema;
  // isRead: boolean;
};

export type WhoCanReplyType =
  | 'EVERYONE'
  | 'PEOPLE_YOU_FOLLOW'
  | 'ONLY_PEOPLE_YOU_MENTION';

export type SettingsPageType =
  | 'ACCOUNT'
  | 'SECURITY'
  | 'PRIACY_AND_SAFETY'
  | 'NOTIFICATIONS'
  | 'ACCESSIBILITY'
  | 'ADDITIONAL_RESOURCES';
