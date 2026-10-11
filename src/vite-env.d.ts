/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Formspree endpoint that receives inquiry-form submissions,
   * e.g. "https://formspree.io/f/xxxxxxxx".
   * Set it in `.env` locally and in the Vercel project settings.
   */
  readonly VITE_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
