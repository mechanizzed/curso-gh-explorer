import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

import Repository from './components/Repository';

import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  state = {
    repositories: [],
    loading: false,
  };

  componentWillMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ loading: true });
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);
    this.setState({ repositories: response.data, loading: false });
  };

  renderRepositories = () => (
    this.state.repositories.map(repository => (
      <Repository key={repository.id} repository={repository} />
    ))
  );

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : <Text style={styles.empty}>Nenhum repositório encontrado.</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
          ? <ActivityIndicator size="small" color="#999" />
          : this.renderList()
        }
      </View>
    );
  }
}
