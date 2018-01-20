import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import api from '../../services/api';
import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkAndSaveUser = async () => {
    const response = await api.get(`/users/${this.state.username}`);
    if (!response.ok) throw Error();
    await AsyncStorage.setItem('@Githuber:username', this.state.username);
  };

  navigateToUser = () => {
    if (this.state.username.length === 0) return;
    this.setState({ loading: true, error: false });
    this.checkAndSaveUser()
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });
        dispatch(resetAction);
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Bem-Vindo!</Text>
        <Text style={styles.welcomeDescription}>
          Informe seu usuário no GitHub.
        </Text>

        { this.state.error && <Text style={styles.error}>Usuário não encontrado</Text> }

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Digite seu usuário"
          onChangeText={(username) => { this.setState({ username }); }}
        />
        <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
          { this.state.loading
            ? <ActivityIndicator size="small" color="#FFF" />
            : <Text style={styles.buttonText}>Continuar</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}
