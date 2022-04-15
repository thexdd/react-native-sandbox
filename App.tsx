import type { FC } from 'react';
import React from 'react';
import Megapowered from './node_modules/react-native-megapowered'

import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';


const App: FC = () => {

  const testAsync = async(): Promise<void> => {
    await Megapowered.construct('testPath')
    let result = await Megapowered.isPlaying()
    console.log('RESULT: '+result)
  }

  const onPlayPressed = (): void => {
    testAsync()
  }

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title='Play' onPress={onPlayPressed} />
    </SafeAreaView>
  );
};

export default App;
