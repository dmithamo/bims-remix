/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
  readonly VITE_GOOGLE_OAUTH_CLIENT_ID: string;
  readonly VITE_GOOGLE_OAUTH_CLIENT_SECRET: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
