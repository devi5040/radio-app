import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import bannerImage from '../assets/banner.png';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={bannerImage}
        alt="image-rj"
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#fff',
    flex: 2,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 70,
  },
});
