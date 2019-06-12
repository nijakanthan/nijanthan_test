import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class SignIn extends Component {

    state = {
        email: '',
        password: '',
        error: false,
        errorMsg: ''
    }

    onEmailChange = (email) => {
        this.setState({
            email: email
        });
    }

    onPasswordChange = (password) => {
        this.setState({
            password: password
        });
    }

    validateEmail = (email) => {
        // Email validation regex got from the internet...
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    }

    onSignIn = () => {
        let email = this.state.email;
        let password = this.state.password;

        if(email === '') {
            this.setState({
                error: true,
                errorMsg: 'Email field cannot be empty..'
            });
        } else if (!this.validateEmail(email)) {
            this.setState({
                error: true,
                errorMsg: 'Invaild email format..'
            });
        } else if(password === '') {
            this.setState({
                error: true,
                errorMsg: 'Password field cannot be empty..'
            });
        } else {
            this.setState({
                error: false,
                errorMsg: ''
            });
            // Navigate to home page
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>SignIn</Text>
                <View style={styles.signInElementContainer}>
                    <Text style={styles.signInElementText} placeholder={'Email'} onChangeText={this.onEmailChange} value={this.state.email}>Email</Text>
                    <TextInput />
                </View>
                <View style={styles.signInElementContainer}>
                    <Text style={styles.signInElementText}>Password</Text>
                    <TextInput style={styles.signInElementText} secureTextEntry={true} placeholder={'Password'} onChangeText={this.onPasswordChange} value={this.state.password}/>
                </View>
                <View style={styles.signInElementContainer}>
                    <Button style={styles.signInElementButton} title={'Sign-in'} onPress={this.onSignIn}/>
                </View>
                {
                    error ? <Text style={styles.errorMsg}>{this.state.errorMsg}</Text> : null
                }
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
    },
    errorMsg: {
        fontSize: 12,
        textAlign: 'center',
        color: '#e21414'
    },
});