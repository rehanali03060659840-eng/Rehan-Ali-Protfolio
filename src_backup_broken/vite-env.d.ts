/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_CONTACT_SERVICE_ID: string
  readonly VITE_CONTACT_TEMPLATE_ID: string
  readonly VITE_CONTACT_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
