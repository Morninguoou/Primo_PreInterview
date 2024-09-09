# Primo_PreInterview

# Install for Test
Install TypeScript, Jest for unit testing, and the necessary types for Jest:
npm install typescript ts-jest jest @types/jest --save-dev

Generate a tsconfig.json file for TypeScript:
npx tsc --init

Generate a Jest configuration file:
npx ts-jest config:init

Update the scripts section in package.json:
"scripts": {
    "test": "jest"
}

# Run Test
npm test
