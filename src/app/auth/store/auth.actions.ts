import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start'
export const LOGIN = '[Auth] LOGIN';
export const LOGOUT = '[Auth] LOGOUT';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId;
      token: string;
      expirationDate: Date;
    }
  ) {}
}


export class Logout implements Action {
    readonly type = LOGOUT;
    // no need to set data to anything.
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email: string, password: string}) {}
}

export type AuthActions = Login | Logout;
// Authactions union type 

