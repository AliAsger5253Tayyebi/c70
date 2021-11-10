import * as React from "react";
import { View, Text,StyleSheet } from "react-native";

export default class Search extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.text}>SEARCH</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
