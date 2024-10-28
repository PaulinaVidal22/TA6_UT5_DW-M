import { StyleSheet, View, Text} from "react-native";
import { RectButton} from 'react-native-gesture-handler';
// import ReanimatedSwipeable from 'react-native-reanimated';
import { Swipeable } from 'react-native-gesture-handler/ReanimatedSwipeable';


export const ListItem = ( {item, index, onDelete}) => {
    
    const renderRightActions = () => {
        return (
          <RectButton style={styles.deleteButton} onPress={() => onDelete(index)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </RectButton>
        );
      };
    
    return ( 
        <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.itemContainer}>
            <View style={styles.item}>
            <Text style={styles.name}>{item}</Text>
            </View>
        </View>
    </Swipeable>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        paddingTop:10,
        paddingBottom:10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        rowGap: 10,
        alignContent:'center'
    },
    name : {
        fontWeight: 'bold',
        fontSize: 20,
        paddingEnd: 10
    },
    deleteButton: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: '100%',
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });