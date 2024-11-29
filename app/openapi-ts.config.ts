import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: '../backend/presentation/express/swagger_output.json',
  output: 'api/',
  plugins: [
    '@hey-api/schemas',
    '@hey-api/services',
    {
        name: '@hey-api/types'
    }
  ]
});