
# Nightly - lastminute.com recruitment task

The project was created using the React Native CLI bootstrap.

It contains the following structure:

```
- app
    - api           # connect to external services
    - assets        # icons, illustrations, fonts, overall assets that are exported from figma
    - components    # reusable components to be used throught the application
    - constants     # constants to be used through the application
    - hooks         # hooks to be used through the application
    - modules       # screens and logical modules of the application  (e.g. authentication modules, checkout modules)
    - navigation    # navigators and related
    - state         # local state managment and configuration
    - storage       # persistance of data configuration
    - translations  # all of translations of the app and i18next configuration
    - types         # types to be used through the application
    - utils         # utils to be used through the application
```

## Third-party libraries

The following libraries were used to build the app. Not all are listed, but this are the most noteworthy:

- @gorhom/bottom-sheet bottomSheet
- react-navigation
- i18next
- react-native-bootsplash
- react-native-mmkv-storage
- react-native-reanimated
- react-native-safe-area-context
- react-native-svg
- react-native-unistyles
- zustand

### Notes:

The project is using Unistyles version 3, which is on beta. There are some bugs noticeable in switching between light to dark theme.
Since this is a recruitment project, I decided to use it, as it's expected soon to transition to a stable release.

It is also using the new architecture with Fabric.
In my opinion, is still not production ready, but I decided to give a shot, since it's the future of React Native.


# Features

- List hotels (Card and list view modes)
- Sorting by default (order that is returned by the server), price, stars, user rating
- Hotel details
- Add/remove hotel to favorites
- List favorites
- Hotel images carousel
- Dark/light theme
- Open map on clicking address
- Open contacts on tapping


### Code styling

#### Functions

For components and hooks the normal function should be used. 

```ts

function ComponentX() {
  
}

function useHook() {
  
}
```

Functions outside the React realm are free to be normal or arrow functions. But arrow functions are preferable.


#### Components

Component types should be named as ComponentName + Props.

```ts
type ComponentProps = {}

function Component(props: ComponentProps) {
  
}
```

Hook types should be name as HookNameWithoutUse + "Args".

```ts
type HookArgs = {}

function useHook(props: HookArgs) {
  
}
```

#### Exporting modules

All modules should use named exports, the only exception is for `App.tsx`.
Named exports are easier to import and debug.

```ts

export function X() {
  
}
```

#### Notes:
TouchableOpacity is being used to save time. Ideally, Pressable should be used instead, and create a custom animation.

There are some features I would have liked to have implemented, but due to lack of time I had to cut down:
    
- A floating header on details screen that would change based on the scroll. This would require context API to connect the header in the navigator, with the scrollview in the screen
- Full gallery. Opening an image in full screen with gesture support (e.g. zoom to pitch)

What could be improved:
- Pagination in the listing
- Overall structure of components and modules. The lack of designs makes it hard to predict how components can be partitioned.
# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install all dependencies

```sh

# Install node dependencies
yarn

# Installs bundle dependencies and Pod dependencies
yarn pods

```

## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
yarn android

# Release mode
yarn android --mode release
```

### iOS

```sh
yarn run ios

# Release mode
yarn run ios --mode Release
```

If everything is set up correctly, you should see the app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.
