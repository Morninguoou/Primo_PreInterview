# Primo assignment

## Install for Test
1. Install TypeScript, Jest for unit testing :
    ```bash
    npm install typescript ts-jest jest @types/jest --save-dev
    ```
3. Generate a tsconfig.json file for TypeScript :
   ```bash
    npx tsc --init
   ```
5. Generate a Jest configuration file :
   ```bash
   npx ts-jest config:init
   ```

7. Update the scripts section in package.json :
   ```bash
   "scripts": {
    "test": "jest"
    }
   ```

# Run Test
    ```bash
    npm test
    ```
