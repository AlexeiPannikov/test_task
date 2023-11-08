import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from "dotenv"
dotenv.config()

const config: CodegenConfig = {
    schema: process.env.REACT_APP_BASE_URL,
    // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/shared/api/schema/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;