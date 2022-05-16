
import { StyleSheet, View, } from 'react-native';
import TextAndImage from './compo/pictxt'

export default function App() {
    let picVar = require("./assets/rover.jpg");
    return (
        <View style={styles.container}>
            <TextAndImage pic={picVar} label='I used props'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});
