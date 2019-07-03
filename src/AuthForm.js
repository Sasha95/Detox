import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';
import {AuthHelper} from "./common/helpers/authHelper";

export class AuthForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showMoreText: false,
        };
    }

    render() {
        const {email, password} = this.state;

        return (
            <View>
                <TextInput
                    testID={"email"}
                    style={styles.input}
                    value={email}
                    keyboardType={"email-address"}
                    onChangeText={this.onChangeEmail}
                />
                <TextInput
                    testID={"password"}
                    style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={this.onChangePassword}
                />
                <Button testID="button" onPress={this.onButtonPress}>
                    <Text>
                        {"Show more text"}
                    </Text>
                </Button>
                {this.renderMoreText()}
            </View>
        );
    }

    onButtonPress = () => {
        try {
            AuthHelper.checkEmail(this.state.email);
            AuthHelper.checkPassword(this.state.password);
            this.setState({showMoreText: true});
        } catch (error) {
            this.setState({showMoreText: false});
            alert(error.message);
        }
    };

    renderMoreText = () => {
        if (this.state.showMoreText) {
            return (
                <Text testID="moreText" style={styles.instructions}>
                    More information you can find on the React-Native website
                </Text>
            );
        } else {
            return null;
        }
    };

    onChangeEmail = (text) => {
        this.setState({email: text});
    };

    onChangePassword = (text) => {
        this.setState({password: text});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        marginBottom: 10,
    },
});
