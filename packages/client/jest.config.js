import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/CSSStub.js',
    "^@types": "<rootDir>/src/types",
    "^@utils": "<rootDir>/src/utils",
    "^@ui/components": "<rootDir>/src/ui/components",
    "^@containers": "<rootDir>/src/containers",
    "^@api": "<rootDir>/src/api",
    "^@controllers": "<rootDir>/src/controllers",
    "^@static": "<rootDir>/src/static",
  },
}
