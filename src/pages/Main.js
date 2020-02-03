import React from 'react'

import { StyleSheet, Text, SafeAreaView, ScrollView, View, ImageBackground, Alert, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'//ícones do expo
import { Card } from 'react-native-shadow-cards';



function handleBotao() {
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
    );

}



function Main({ navigation }) {
    return (
        <>

            <SafeAreaView >
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>


                        <Card style={{ padding: 0, margin: 3, }}>
                            <View style={styles.label}>

                                <TouchableHighlight
                                    style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}>

                                    <ImageBackground
                                        style={styles.avatar}
                                        source={require('../../assets/caverna.jpg')}>
                                    </ImageBackground>

                                </TouchableHighlight>


                                <Text style={styles.CompanyName}>Caverna</Text>
                                <Text style={styles.CompanyCategoria}>Hamburgueria</Text>
                            </View>
                            <View style={styles.Open} >
                                <Text style={styles.OpenText}> ABERTO </Text>
                            </View>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate('Cardapio')
                            }}>
                                <ImageBackground
                                    style={styles.cardImg}
                                    source={require('../../assets/Card.jpg')}>
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>





                    </View>
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

/*
<TouchableOpacity onPress={(handleBotao)} style={styles.loadButton}>
    <MaterialIcons name="my-location" size={20} color="#fff" />
</TouchableOpacity>
*/



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    CompanyName: {
        fontSize: 20,
        textAlign: 'right',
        top: 17,
        right: 20,
        color: '#fff'
    },
    CompanyCategoria: {
        fontSize: 11,
        textAlign: 'right',
        top: 16,
        right: 20,
        color: '#fff'
    },
    avatar1: {
        position: 'absolute',
        width: 54,
        height: 54,
        overflow: 'hidden',
        borderRadius: 4,
        marginLeft: 4,
        borderWidth: 4,
        borderColor: '#fff',
        marginTop: 5,

        //ficar por cima do mapa

    },
    profileImgContainer: {
        marginTop: 10,
        marginLeft: 4,
        height: 54,
        width: 54,
        borderRadius: 40,
        overflow: 'hidden',
        position: 'absolute',
    },
    avatar: {
        height: 54,
        width: 54,
        borderRadius: 40,
        marginLeft: -1,
        marginTop: -2

    },
    cardImg: {
        top: 0,
        marginLeft: 0,
        width: 320,
        height: 320,
        bottom: 100,

    },
    loadButton: {
        top: 20,
        position: 'absolute',//ficar por cima do mapa
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        flexDirection: 'row',
    },
    label: {
        flex: 1,
        backgroundColor: '#000',
        width: 320,
        height: 70,
        top: 0,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,

    },
    Open: {
        top: 0,
        marginLeft: 0,
        width: 320,
        height: 15,
        top: 0,
        backgroundColor: '#008000',
    },
    scrollView: {
        backgroundColor: "#fff"
    },
    OpenText: {
        borderRadius: 25,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        bottom: 2
    },
});






export default Main;