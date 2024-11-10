// SingleChannel.jsx

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSelectedChannel} from '../redux/action';

const SingleChannel = ({channel}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    // Dispatch action to set selected channel
    dispatch(setSelectedChannel(channel));
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Text style={styles.channelNumber}>{channel.number}</Text>
        <Image
          source={{
            uri: 'https://static-00.iconduck.com/assets.00/radio-icon-2048x1658-8oegga5f.png',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{channel.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleChannel;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    width: 140,
    height: 200,
    marginHorizontal: 5,
    padding: 10,
  },
  channelNumber: {
    marginVertical: 5,
    fontSize: 14,
  },
  image: {
    height: 70,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  title: {
    marginVertical: 5,
    textAlign: 'center',
  },
});
