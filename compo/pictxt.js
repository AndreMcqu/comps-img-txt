import { StyleSheet, Text, View, Image } from 'react-native';

const TextAndImage = (props) => {
    const { label, pic } = props;
    return (
        <View style={styles.container}>
            <View style={styles.photocontainer}>
                <Image
                    style={styles.photo}
                    source={pic} />
            </View>
            <View style={styles.labelbox}>
                <Text style={styles.labelst}>{label}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photocontainer: {
        flex: 1,
    },
    photo: {
        flex: 1,
        width: "100%",

    },
    labelbox: {
        flex: 1,
    },
    labelst: {
        flex: 1,
        color: 'black',
    },
});

export default TextAndImage;