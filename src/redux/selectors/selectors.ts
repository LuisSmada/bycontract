import { IGlobalState, TLanguageApplication } from "../../core/model/entities";

export const getLanguage = (state: IGlobalState): string => {
  return state.appliState.core.language;
};
