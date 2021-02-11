import React from 'react';
import { Alert, Text, View, StyleSheet, ViewStyle } from 'react-native';

const lightThema = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    backgroundColor: 'white',
    color: 'black',
  },
})

const darkThema = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
  },
})

type Thema = typeof lightThema | typeof darkThema;
interface Context {
  thema: Thema;
  setThema: (newThema: Thema) => void;
}

const ThemaContext = React.createContext<Context>({
  thema: lightThema,
  setThema: (_: typeof lightThema | typeof darkThema) => {},
});

export default function App() {
  const [thema, setThema] = React.useState(lightThema);

  return (
    <ThemaContext.Provider value={{thema, setThema}}>
      <View style={thema.container}>
        <Text onPress={() => {
          setThema(thema === lightThema ? darkThema : lightThema)
        }}
        style={thema.label}>
          切り替え
        </Text>
        <Profile name="knagai" />
      </View>
    </ThemaContext.Provider>
  );
}

interface Props {
  name: string
}
function Profile(props: Props) {
  const {thema} = React.useContext(ThemaContext)
  return <Text style={thema.label}>{props.name}</Text>
}
