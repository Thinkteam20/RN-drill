import {useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation, PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface NavRoutes {
  key: string;
  title: string;
  focusedIcon: string;
}

function App(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState<NavRoutes[]>([
    {
      key: 'chat',
      title: 'Chats',
      focusedIcon: 'chat',
    },
    {key: 'calls', title: 'Calls', focusedIcon: 'video'},
    {key: 'people', title: 'People', focusedIcon: 'account'},
    {key: 'stories', title: 'Stories', focusedIcon: 'book'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chat: () => <Text>Chats</Text>,
    calls: () => <Text>Calls</Text>,
    people: () => <Text>People</Text>,
    stories: () => <Text>Stories</Text>,
  });

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
