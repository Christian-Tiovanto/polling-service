import { Socket } from 'socket.io';

export interface AuthPayload {
  id: number;
  fullname: string;
  email: string;
}

export interface AuthenticatedSocket extends Socket {
  user: AuthPayload;
}
