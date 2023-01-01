import { Role } from './role.enum';

export type JwtPayload = {
  sub: string;
  username: string;
  role: Role;
};
