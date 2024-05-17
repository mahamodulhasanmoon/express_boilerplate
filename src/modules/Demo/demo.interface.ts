import {} from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export interface IDemo {
  id: string;
  name: UserName;
  email: string;
  avatar?: string;
  gender: 'male' | 'female';
}
