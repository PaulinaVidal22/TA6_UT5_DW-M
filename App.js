import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Separator } from './components/separator';
import { InputArea } from './components/inputArea';
import { List } from './components/list';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
   const [inputValue, setInputValue] = useState('');
   const [items, setItems] = useState([]);

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  }

  const addItem =  (newItem) => {
    setItems([...items, newItem]);
  };


  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      addItem(inputValue);
      setInputValue("");
    }
  };

  const handleDelete =  (itemIndex) => {
    const updatedList = items.filter((_, index) => index !== itemIndex);
    setItems(updatedList);
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <View style={styles.container}>
      <Text style={styles.title}>Tasks list</Text>
      
      <Separator/>
      
      < InputArea onChangeText={handleInputChange} text={inputValue} handlePress={handleSubmit} />

      <List items={items} onDelete={handleDelete} />
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 16,  
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    letterSpacing: 10,
    fontStyle: 'italic'
  },
});
