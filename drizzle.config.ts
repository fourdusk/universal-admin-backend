import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './src/db/schemas/**/*.ts',
  out: './src/db/migrations',
  verbose: true,
  strict: true,
  migrations: {
    prefix: 'supabase'
  },
  dbCredentials: {
    url: 'sqlite.db'
  }
})
