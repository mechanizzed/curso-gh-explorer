import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Organization extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars2.githubusercontent.com/u/4992281?s=460&v=4' }}
        />
        <Text style={styles.title}>Title</Text>
      </View>
    );
  }
}
