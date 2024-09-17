export interface IGlobalState {
  appliState: IApplicationState;
  entities: IEntities;
}

export interface IApplicationState {
  core: ICoreApplicationState;
}

export interface ICoreApplicationState {
  language: string;
}

export interface IEntities {}

export interface ILanguageApplication {
  language: TLanguageApplication;
}

export type TLanguageApplication = "en" | "fr";
