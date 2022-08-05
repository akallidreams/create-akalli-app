# One Tax Docs

This is a basic documentation to explain the decisions, utilities and reuse of special components in this app.

## Code style:

1. We decided to make our components with const instead of functions.

```ts
interface Props {
  myProp: string
}

const MyComponent = (props: Props) => <Text>{props.myProp}</Text>
```

2. This app is made with strong typing using Typescript for files and components.

3. We are using standardJS with ESLint and Prettier to style the code.

4. We are using NativeBase and file pattern instead of folders.

## Architecture

#### components

1. **What is it for...**
   Our components were made to be reused as much as possible, since all the pages are very similar and follow the same color pattern, paddings, sizes and infos.

#### hooks

1. **What is it for...**

- This folder is meant to contain all custom hooks

#### intl

1. **What is it for...**

- This folder is meant for the App's internationalization/translation, so every string is put on there.

#### schemas

1. **What is it for...**

- What we call schemas are organized objects in a very easy and logical way. The error messages, the regexpatterns, the placeholders, firebase errors etc.

#### screens

1. **What is it for and what does each one...**

- This folder is for organizing each screen in a file with its name.

#### services

1. **What is it for...**

- Are the controller files that integrate the FE with the APIs.

#### store

1. **What is it for...**

- Is meant for storing all state, actions and slices.

#### theme

1. **What is it for...**

- Is meant to have all possible themes with the font colors, component colors, etc. Light theme, dark theme, original theme, screen theme etc.

#### utils

1. **What is it for...**

- Is meant to have all auxiliary functions (utils), like Regex Patterns.

_Made with love, enjoy._

<!--
useEffect(() => {
    const connectRevenueCat = async () => {
      Purchases.setDebugLogsEnabled(true)
      if (Platform.OS === 'android') {
        await Purchases.setup('goog_gAKcYnmjaKvTKEGgjKrTaMTpiQd')
      }
    }
    connectRevenueCat()
  }) -->
