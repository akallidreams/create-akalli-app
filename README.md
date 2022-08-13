# Warning

This is a beta test and it may need some work until be good enough to trust, use it testing if everything works as expected and if you find any bug or have doubts create an issue on this repository.

# Quick start

This is a framework that uses a colection of libraries to solve the most common configuration problems in the UI of an expo/react-native app. It already starts with a intermediate configuration and a folder structure that organizes and makes easier to scale. If you want to create a small project this may not be necessary, but you can use some or all of the libraries independent of this template.

## Libraries available:

- [**@akalli/state**](https://github.com/akallidreams/state) - Used to manage state and persistence with redux toolkit.

- [**@akalli/navigation**](https://github.com/akallidreams/navigation) - Easier way to implement routes using react-navigation.

- [**@akalli/components**](https://github.com/akallidreams/components) - Smart components that makes easier and descriptive the construction of UIs.

- [**@akalli/icons**](https://github.com/akallidreams/icons) - Some icons available to use, following our design system.

## Instalation

`npx create-akalli-app my-app-name`

## Archtecture

This repository has been dividing in two important categories `config` and `features`.

### config

The `config` folder has the most vital configurations such as router, store and theming.

### features

The `features` folder is were you gonna work more. It subdivides in 3 independent categories that are `main`, `auth` and `assistant`. Each one of these folders are its own nucleus of code, with `helpers`, `intl`, `tests`, `services`, `schemas`, `types`, `redux slices`, `screens`, `components` and `styling`. It is up to you choose wich files will be created to help the screens flow. you can also create new files inside helpers or delete not used ones, remember everything here except the config folder is a **suggestion**. But i highly recommend follow the design patterns implemented here, due the fact they have prooved many times be good up scale challenges.

1. main - has the main features of the app and should be the most important screens like `dashboard`, `home`, `profile` and etc.
2. Assistant - Has the assistant screens, like `account`, `therms` and etc
3. Auth - Has the not authenticated screens and should be used on the screens out of the app.

### Example of a screen using @akalli/components

Example:

```tsx
import { HSection, Text } from "@akalli/components";

export const MyComponent = () => {
  return (
    <HSection bg="secondary" mt="10px">
      <Text color="grey" fontSize="lg">
        My text
      </Text>
      <Text color="primary" fontSize="14px">
        My text
      </Text>
    </HSection>
  );
};
```

## Scripts

This template has EAS configuration set for expo projects. If you run `npm start` you gonna run the `expo start --clear --dev-client` and will only work if you generate a build and install the app using `npm run build:dev`.
