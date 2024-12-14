import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import speakerImage from '../assets/speaker.png';
import playBtnImage from '../assets/playBtn.png';
import pauseBtnImage from '../assets/pauseBtn.png';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';

const PlayingSpace = () => {
  const [playingState, setPlayingState] = useState(false);
  const soundRef = useRef(null);

  // Access the selected channel from Redux
  const selectedChannel = useSelector(state => state.selectedChannel);

  const initializeSound = () => {
    if (selectedChannel.url) {
      soundRef.current = new Sound(selectedChannel.url, null, error => {
        if (error) {
          Alert.alert('Failed to load the sound', JSON.stringify(error));
          return;
        }
        Alert.alert('Stream loaded successfully');
      });
    }
  };

  useEffect(() => {
    // Initialize sound for the first time
    if (selectedChannel.url) {
      initializeSound();
    }

    // Cleanup sound when component is unmounted
    return () => {
      if (soundRef.current) {
        soundRef.current.release();
      }
    };
  }, [selectedChannel]);

  const playRadio = () => {
    if (soundRef.current && !playingState) {
      setPlayingState(true);
      soundRef.current.play(
        success => {
          if (success) {
            Alert.alert('Streaming started');
          }
        },
        error => {
          Alert.alert('Error occured', error);
        },
      );
    }
  };

  const stopRadio = () => {
    if (soundRef.current && playingState) {
      setPlayingState(false);
      soundRef.current.stop(() => {
        console.log('Streaming stopped');
        soundRef.current.release();
        initializeSound();
      });
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff5757', '#8c52ff']}
        style={styles.innerContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.imageContainer}>
          <Image style={styles.leftImage} source={speakerImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{selectedChannel.title}</Text>
          <Text style={styles.channelNumber}>
            {selectedChannel.channelNumber}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={playingState ? stopRadio : playRadio}>
          <Image
            style={styles.rightImage}
            source={playingState ? pauseBtnImage : playBtnImage}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default PlayingSpace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 15,
    padding: 10,
    borderColor: '#d3d3d3',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center', // Ensures items are centered vertically
    justifyContent: 'space-between', // Spaces out items properly
    flexWrap: 'wrap', // Prevents overflow by wrapping content
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  leftImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  channelNumber: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  rightImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});
