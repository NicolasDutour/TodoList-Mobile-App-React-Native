import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

export default class Header extends React.Component {

  render() {
    return (
      <View style={ styles.header }>
        <Text style={ styles.headerText }>{ this.props.title }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.5
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    padding: 26
  }
});
