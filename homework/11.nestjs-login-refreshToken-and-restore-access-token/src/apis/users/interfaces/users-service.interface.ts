export interface IUsersServiceCreate {
  password: string;
  email: string;
  name: string;
  age: number;
}

export interface IUsersServiceFindOneByEmail {
  email: string;
}

export interface IUserServiceDelete {
  email: string;
}

export interface IUserServiceFindOne {
  email: string;
}

export interface IUserServiceUpdateUserPwd {
  email: string;
  password: string;
}
