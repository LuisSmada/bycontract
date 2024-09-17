export enum ENotifType {
  info,
  warn,
  success,
  error,
}

export interface INotificationMessage {
  type: ENotifType;
  title: string;
  message: string;
}
