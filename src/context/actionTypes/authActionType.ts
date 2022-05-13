export enum ActionType {
  AUTHENTICATE = 'AUTHENTICATE',
  DEAUTHENTICATE = 'DEAUTHENTICATE',
}

interface authenticateAction {
  type: ActionType.AUTHENTICATE;
}

interface deauthenticateAction {
  type: ActionType.DEAUTHENTICATE;
}

export type Action = authenticateAction | deauthenticateAction;
