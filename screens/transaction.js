import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";
import { TapGestureHandler } from "react-native-gesture-handler";
export default class Transaction extends React.Component {
  constructor() {
    super();
    this.state = { hasCameraPermission: null, scanned: false, scanData: "" ,buttonState:'normal'};
  }
getCameraPermission= async ()=>{
  const {status}=await Permissions.askAsync(Permissions.CAMERA)
  this.setState({hasCameraPermission:status==='granted'})
  this.setState({buttonState:'clicked'})
} 
handleBarCodeScanned = async({data})=>{
this.setState({scanData:data,scanned:true,buttonState:'normal'})
}
  render() {
    const hasCameraPermission=this.state.hasCameraPermission
    if(this.state.buttonState==='clicked'&& hasCameraPermission){
      return(
        <BarCodeScanner
        onBarCodeScanned={this.state.scanned? undefined : this.handleBarCodeScanned }
style={StyleSheet.absoluteFillObject}
        />

      )
    }
    else if(this.state.buttonState==='normal'){
    return (
      <View style={style.container}>
        <Text   style={style.text}>
          {
            hasCameraPermission===true?
            this.state.scanData:'requst camera permission'
          }
        </Text>
        <TouchableOpacity
          style={style.button}
          onPress={this.getCameraPermission}
        >
         
          <Text style={{ textAlign: "center" }}> Scan QR Code </Text>
        </TouchableOpacity>
      </View>
    );}
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "green",
    width: 80,
    borderRadius: 50,
    marginTop: 50,
  },
});
