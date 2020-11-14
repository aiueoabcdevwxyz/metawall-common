import { Subjects } from './subjects';
import { UserSchema, SubwallSchema, PostSchema, WhoCanReplyType } from '../schemaTypes';

export interface PostCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    _id: string;
    uid: string;
    createdAt: Date;
    updatedAt: Date;
    postedAt: Date;
  
    content: string;
    imageURLs: string[];
    videoURL: string;
    gifURL: string;
    parentPostUID: string;
    createdBy: UserSchema;
    subwall?: SubwallSchema;
    quotedPost?: PostSchema;
    repostedBy?: UserSchema;
    whoCanReply: WhoCanReplyType;
    isDeleted: boolean;
    isPinnedToProfile: boolean;
  };
}
