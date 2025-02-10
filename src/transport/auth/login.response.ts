export interface LoginResponse {
  loggedUser: LoggedUser;
}

export interface LoggedUser {
  id?: number;
  firstName: string;
  lastName: string;
  roles?: string[];
  roleNames?: string[];
  tokenType?: string;
  username: string;
  preferredLanguage: string;
  accessToken: string;
}
