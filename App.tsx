/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Banner from './components/Banner';
import ChannelsList from './components/ChannelsList';
import LinearGradient from 'react-native-linear-gradient';
import PlayingSpace from './components/PlayingSpace';
import {Provider} from 'react-redux';
import store from './redux/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const {height: screenHeight} = Dimensions.get('window');

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <LinearGradient
        colors={['#ff5757', '#8c52ff']}
        style={styles.background}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Banner />
        <ChannelsList />
        <PlayingSpace />
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    opacity: 1,
    maxHeight: screenHeight,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
