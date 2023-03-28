npx create-expo-app <name>
cd <name>
code.

tailwindcss/nativewind

> yarn add nativewind
> yarn add --dev tailwindcss

npx tailwindcss init

> content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

in babel.config.js

> plugins: ["nativewind/babel"],

react-native-navigation

> npm install @react-navigation/native
> npx expo install react-native-screens react-native-safe-area-context
> import { NavigationContainer } from '@react-navigation/native';
> npm install @react-navigation/native-stack
> import { createNativeStackNavigator } from '@react-navigation/native-stack';

safeAreaView

> expo install react-native-safe-area-context
> import { SafeAreaProvider } from 'react-native-safe-area-context'; -----in App.js

import { SafeAreaView } from 'react-native-safe-area-context';---------in screens

react-native-heroicons
npm i react-native-heroicons react-native-svg
