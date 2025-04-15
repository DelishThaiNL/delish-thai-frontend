export type Locale = 'en' | 'nl'

export interface MessageSchema {
  [key: string]: string | MessageSchema
}
