import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Camera} from 'expo-camera';


export default class Came extends Component{
  constructor(props){
      super(props);
      this.state={
          hasPermission:null,
          type:Camera.Constants.Type.back,
          isFlashLight:Camera.Constants.FlashMode.off
      };
      this.flipNow=this.flipNow.bind(this);
      this.flashon=this.flashon.bind(this);
      this.cap=this.cap.bind(this);
  }

  async componentDidMount(){
    let {status}=await Camera.requestPermissionsAsync();
    this.setState({hasPermission:status==='granted'});
  }

flipNow=()=>this.setState(
  {type:((this.state.type==Camera.Constants.Type.back)?
    Camera.Constants.Type.front:Camera.Constants.Type.back)})

flashon=()=>this.setState(
    {type:((this.state.isFlashLight==Camera.Constants.FlashMode.off)?
        Camera.Constants.FlashMode.on:Camera.Constants.FlashMode.off)})

cap=async ()=>{
    if(this.camera){
    let photo=await this.camera.takePictureAsync();
    this.props.navigation.navigate('Home',{photo});
}
}

  render(){
  return (
    (this.state.hasPermission!==false)?    
    <Camera style={styles.container} ref={ref=>this.camera=ref}
    type={this.state.type} flashMode={this.state.isFlashLight}>
    <Button title='Flip Camera Mode' onPress={this.flipNow}/>
    <Button title='Capture' onPress={this.cap}/>
    </Camera>:
    <Text>No access provided</Text>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
