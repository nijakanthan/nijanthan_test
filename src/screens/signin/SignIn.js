import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>SignIn</Text>
                <View style={styles.signInElementContainer}>
                    <Text style={styles.signInElementText} placeholder={'Email'}>Email</Text>
                    <TextInput />
                </View>
                <View style={styles.signInElementContainer}>
                    <Text style={styles.signInElementText}>Password</Text>
                    <TextInput style={styles.signInElementText} secureTextEntry={true} placeholder={'Password'}/>
                </View>
                <View style={styles.signInElementContainer}>
                    <Button style={styles.signInElementButton} title={'Sign-in'}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    signInElementContainer: {
        display: flex,
        flexDirection: row
    },
    signInElementText: {
        flex: '0 0 25%',
    },
    signInElementInput: {
        flex: '1 1 auto',
        borderColor: '#333333',
        borderWidth: 2
    },
    signInElementButton: {
        marginLeft: 'auto',
        borderColor: '#333333',
        backgroundColor: '#dedede',
        borderWidth: 2
    }
});