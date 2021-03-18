import userImage from '../images/user.jpg';
import * as React from 'react';
import { Avatar, Card } from 'react-native-paper';
import bgImage from '../images/backgroundprofile.jpg';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function profil({ navigation }) {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                source={userImage}
                style={styles.image} 
                resizeMode="cover"
                />
            </View>

            <View>
            <Text style={styles.headerText}>Majdi Toumi</Text>
            </View>
            
            <View>
            <Card>
            <Card.Content>
                <Text style={styles.userData}>Username : </Text>
                <View style={styles.separator}/>
                <Text style={styles.userData}>Email adress : </Text>
                <View style={styles.separator}/>
                <Text style={styles.userData}>Birthdate :</Text>
                <View style={styles.separator}/>
                <Text style={styles.userData}>Gender :</Text>
                <View style={styles.separator}/>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('todolist')}>
                <Icon style={styles.btnBack} name={'arrow-left'} color={'black'}/>
                </TouchableOpacity>
                </View>
            </Card.Content>
            </Card>
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    top: 40,
    backgroundColor: '#E8EAED',
    borderRadius: 60,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 200,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    headerText: {
        fontSize: 40,
        marginVertical: 5,
    },
    userData: {
        right: -10,
    },
        separator: {
        borderWidth: 1,
        borderColor:'#737373',
        margin:10,
        width: 250,
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnBack: {
        width: 60,
        height: 60,
        fontSize: 40,
        alignSelf: 'flex-end',
        top: 3,
        right: 90,
      },
})

export default profil;
