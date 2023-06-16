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

export interface IUserServiceUpdate {
  password: string;
  email: string;
  name: string;
  age: number;
}

export interface IUserServiceFindOne {
  email: string;
}
