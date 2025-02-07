export type ConfigState = {
  language: Nightly.Language;
};

export type ConfigAction = {
  setLanguage: (language: string) => void;
};

export type Config = ConfigState & ConfigAction;
