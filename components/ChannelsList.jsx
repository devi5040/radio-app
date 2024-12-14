import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleChannel from './SingleChannel';

const ChannelsList = () => {
  const data = [
    {
      title: 'NPR Radio',
      url: 'https://media-ice.musicradio.com/ClassicFMMP3',
      channelNumber: '1.0',
    },

    {
      title: 'BBC Radio',
      url: 'https://stream.radioparadise.com/mp3-192',
      channelNumber: '1.3',
    },
    {
      title: 'Chilltraxxx',
      url: 'https://strm112.1.fm/blues_mobile_mp3',
      channelNumber: '1.4',
    },
  ];
  return (
    <View style={styles.channelContainer}>
      <Text style={{height: '10%', backgroundColor: '#000'}}>Hello</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <SingleChannel channel={item} />}
        keyExtractor={item => item.channelNumber}
        horizontal={true}
      />
      <Text
        style={{
          marginVertical: 10,
          fontSize: 40,
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        add channel
      </Text>
    </View>
  );
};

export default ChannelsList;

const styles = StyleSheet.create({
  channelContainer: {
    flex: 2,
    borderTopLeftRadius: 70,
    backgroundColor: '#fff',
    padding: 20,
    paddingVertical: 70,
  },
});
