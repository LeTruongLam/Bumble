export type IUserInfoState = {
  id: number;
  email: string;
  name: string;
};

export interface IAuthState {
  token: string;
  expiresAt: any;
  account: IUserInfoState;
}
