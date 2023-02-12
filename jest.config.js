const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
  collectCoverage: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `<rootDir>/${compilerOptions.baseUrl}/`,
  }),
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
}

module.exports = createJestConfig(customJestConfig)
