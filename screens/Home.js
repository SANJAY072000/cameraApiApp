import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends Component{
  render(){
    let photo;
    if(this.props.route.params)
    photo = this.props.route.params.photo; 
    else photo='';
  return (
    <View style={styles.container}>
      <Image resizeMode='center' style={styles.imageHolder} 
      source={(photo==='')?require('../assets/email.png'):photo}/>
      <Button title='Take Photo' style={styles.button} 
      onPress={()=>this.props.navigation.navigate('Camera')}/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder:{
      alignSelf:'center',
      height:500,
      margin:20
  },
  button:{
    margin:20
  }
});
