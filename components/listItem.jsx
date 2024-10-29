import { StyleSheet, View, Text} from "react-native";
import { RectButton} from 'react-native-gesture-handler';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ListItem = ( {item, index, onDelete}) => {
    
    const renderRightActions = () => {
        return (
          <RectButton style={styles.deleteButton} onPress={() => onDelete(index)}>
            <Icon name="trash" size={24} color="white" />
          </RectButton>
        );
      };
    
    return ( 
        <Swipeable renderRightActions={renderRightActions} containerStyle={styles.swipeableContainer}>
        <View style={styles.itemContainer}>
            <View style={styles.item}>
            <Text style={styles.name}>{item}</Text>
            </View>
        </View>
    </Swipeable>
    );
}

const styles = StyleSheet.create({
  swipeableContainer: {
    width: '100%',  
    flex: 1,         
  },
    itemContainer:{
      flex: 1, 
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    name : {
        fontWeight: 'bold',
        fontSize: 20,
    },
    deleteButton: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: '100%',
      width: '100%',
    },
  });