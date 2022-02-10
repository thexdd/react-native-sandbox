import type { FC } from 'react';
import React from 'react';
import Megapowered from 'react-native-megapowered';

import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';


const App: FC = () => {

  const megapowered = new Megapowered();

  const onPlayPressed = (): void => {
    megapowered.play();
  }

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title='Play' onPress={onPlayPressed} />
    </SafeAreaView>
  );
};

export default App;
