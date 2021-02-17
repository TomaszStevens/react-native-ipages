# What is this?

A basic react-native version of SwiftUI's "iPages".

Quickly implement swipable page views in React Native!

# Installation

`npm i react-native-ipages`

## Example

```
import IPages from 'react-native-ipages';
import { View, Text } from "react-native";

const Component_1 = () => (
    <View style={{ backgroundColor: "red", height: "100%" }} />
  );
const Component_2 = () => (
  <View style={{ backgroundColor: "blue", height: "100%" }} />
);
const Component_3 = () => (
  <View style={{ backgroundColor: "green", height: "100%" }} />
);

<IPages 
  components={[Component_1, Component_2, Component_1, Component_2]} 
  dotsFocusedColor={"cyan"}
/>
```

## Options

### Required

* *components* - An array of react-native components that will be rendered as individual pages.

### Optional

* *dotsFocusedColor* - Colour of dot corresponding to current page. Any valid JavaScript colour.
* *dotsFocusedColor* - Colour of dots corresponding to all pages other than the current. Any valid JavaScript colour.
* *hideDots* - Hide the page indicator dots. `true`/`false`.