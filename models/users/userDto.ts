export interface UserDto {
  id: number;
  creationDate: Date;
  name: string;
  family: string;
  phoneNumber: string;
  email: string;
  password: string;
  avatarName: string;
  isActive: boolean;
  gender: Gender;
  roles: Role[];
}
export enum Gender {
  نامشخص = 0,
  آقا = 1,
  خانم = 2,
}
export interface Role {
  roleId: number;
  roleTitle: string;
}
``;
