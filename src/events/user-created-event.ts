import { Subjects } from './subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    _id: string;
    uid: string;
    firebaseUID: string;
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
}
