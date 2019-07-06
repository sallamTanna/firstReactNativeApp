import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Carousel from 'react-native-carousel';

class CustomCarousel extends Component {
  state = {
    data: [
      {
        firstText: 'GET 15% CASHBACK',
        secondText: '@ CHICKPEA SALAD',
      },
      {
        firstText: 'GET 15% CASHBACK',
        secondText: '@ CHICKPEA SALAD',
      },
      {
        firstText: 'GET 15% CASHBACK',
        secondText: '@ CHICKPEA SALAD',
      },
      {
        firstText: 'GET 15% CASHBACK',
        secondText: '@ CHICKPEA SALAD',
      },
    ]
  }
  render() {
    const data = this.state.data.map((item, index) => <View style={styles.imageContainer}>
                                                        <Image style={styles.image} source={require('../assets/images/product.png')} />
                                                        <View style={styles.texts}>
                                                          <Text style={styles.firstText}>{item.firstText}</Text>
                                                          <Text style={styles.secondText}>{item.secondText}</Text>
                                                        </View>
                                                    </View> )
    return  <Carousel width={'375'}
                        loop={false}
                        animate={false }
                        indicatorAtBottom={false}
                        indicatorColor="#9804C3"
                        inactiveIndicatorColor='#828282'
                        >

            {data}
            </Carousel>
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '85%',
    height: '80%',
    borderRadius: 10,
  },
  firstText: {
    fontSize: 10.57,
  },
  secondText: {
    fontSize: 17.36,
  },
  texts: {
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'center',
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

AppRegistry.registerComponent('CustomCarousel', () => CustomCarousel);

export default CustomCarousel;
