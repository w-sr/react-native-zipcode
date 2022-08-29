# Simple React Native app to get zip code information

![N|Solid](https://miro.medium.com/max/1024/1*DgaDlJD8Hoq1lj5vUV4KiA.png)

## Tech

- [Redux toolkit] Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more
- [Redux Saga] An intuitive Redux side effect manager
- [Navigation] Routing and navigation
- [React Hook Form] Performant, flexible and extensible forms with easy-to-use validation
- [Yup] Schema builder for runtime value parsing and validation
- [Toast Message] Toast message component for React Native
- [Styled components] Allow to write actual CSS code to style components
- [Axios] Promise-based HTTP Client for node.js and the browser.

## Installation and run

```sh
cd react-native-zipcode
yarn && cd ios && pod install
yarn ios
```

## Folder Structure

- components/: The `components` directory contains customized components like button, input, indicator to be used on multiple screens.
- config/: The `config` directory contains constant variables like API base url, etc.
- hooks/: The `hooks` directory contains custom hooks.
- libs/: The `libs` directory contains utility functions.
- routes/: The `routes` directory contains routes for navigation between screens.
- screens/: The `screens` directory contains screen components.
- store/: The `store` directory contains redux store to manage statement.
- theme/: The `theme` directory contains colors, fonts, sizes to be used for overall looking.

[redux toolkit]: https://redux-toolkit.js.org/
[redux saga]: https://redux-saga.js.org/
[navigation]: https://reactnavigation.org/
[react hook form]: https://react-hook-form.com/
[yup]: https://github.com/jquense/yup/
[toast message]: https://www.npmjs.com/package/react-native-toast-message/
[styled components]: https://styled-components.com/
[axios]: https://axios-http.com/docs/intro
