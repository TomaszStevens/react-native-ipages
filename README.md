# What is this?

A basic react-native version of SwiftUI's "iPages".

Quickly implement swipable page views in React Native!

# Installation

`npm i react-native-ipages`

## Example

```
import React from "react";
import { View } from "react-native";
import IPages from 'react-native-ipages';

const App = () => {

  const Component_1 = () => (
    <View style={{ backgroundColor: "pink", height: "100%" }} />
  );
  const Component_2 = () => (
    <View style={{ backgroundColor: "green", height: "100%" }} />
  );
  const Component_3 = () => (
    <View style={{ backgroundColor: "teal", height: "100%" }} />
  );
  
  return(
    <IPages
      components={[Component_1, Component_2, Component_3]}
      dotsFocusedColor={"purple"}
    />
  );
};

export default App;

```

## Options

### Required

* *components* - An array of react-native components that will be rendered as individual pages.

### Optional

* *dotsFocusedColor* - Colour of dot corresponding to current page. Any valid JavaScript colour (defaults to `"black"`).
* *dotsUnfocusedColor* - Colour of dots corresponding to all pages other than the current. Any valid JavaScript colour (defaults to `"white"`).
* *hideDots* - Hide the page indicator dots. `true`/`false` (defaults to `false`).
