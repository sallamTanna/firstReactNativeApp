import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import CustomCarousel from '../components/CustomCarousel'
import colors from '../constants/Colors';

class CustomHeader extends Component {
  
  render() {
    return (<View style={styles.viewContainer}>
      <ImageBackground source={require('../assets/images/background.png')} style={{height: '60%'}}>
        <Text style={styles.text}>{this.props.text}</Text>
      </ImageBackground>
      <View style={{width: '100%', height: '45%', position: 'absolute', top: 60}}>
        <CustomCarousel  />
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: colors.noticeText,
    paddingLeft: 22,
    paddingTop: 15,
    fontWeight: 'bold',
  }
})

export default CustomHeader;
