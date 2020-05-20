import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends Component{
  constructor(props){
      super(props);
      this.state={
          title:'PhotoClicker',
          photo:''
          
      }
  }

  render(){
  let photo=(this.state.photo||'');  

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
      alignSelf:'center'
  },
  button:{
    margin:20
  }
});
