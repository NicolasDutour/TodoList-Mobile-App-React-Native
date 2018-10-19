import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Note extends React.Component {

  render() {
    return (
      <View style={ styles.note }>
        <Text style={ styles.noteText }>{ this.props.note }</Text>
        <TouchableOpacity onPress={this.props.delete}>
          <Text style={ styles.deleteIcon }>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth:2,
    borderBottomColor: '#ededed'
  },
  noteText: {
    fontSize: 20
  },
  deleteIcon: {
    color: "#FF9800",
    fontSize: 22,
    paddingRight: 10
  }
});
