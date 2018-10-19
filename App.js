import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';

import Header from './Components/Header';
import Note from './Components/Note';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      textInput: ''
    }
  }

  _onChangeTextHandler = textInput => {
    this.setState({ textInput: textInput });
  };

  _addTaskHandler = () => {
      const newTasks = [...this.state.tasks, this.state.textInput];
      this.setState({
        textInput: '',
        tasks: newTasks
      })
  }

  _onDeleteTaskHandler = (taskIndex) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(taskIndex, 1);
    this.setState({
      tasks: newTasks
    });
  }

  render() {

    return (
      <KeyboardAvoidingView style={ styles.container } behavior="padding" enabled>

        <Header title="ToDo List"/>

        <ScrollView style={ styles.scrollContainer }>
          <FlatList
            style={styles.list}
            data={this.state.tasks}
            renderItem={({ item, index }) =>
              <Note
                note={ item }
                delete={ () => this._onDeleteTaskHandler(index)}/>
            }
          />
        </ScrollView>

        <View style={ styles.footer }>
          <TextInput
            style={ styles.textInput }
            value={ this.state.textInput }
            placeholder="Add Task"
            placeholderTextColor= "#000"
            onChangeText={ textInput => this._onChangeTextHandler(textInput) }>
          </TextInput>

          <TouchableOpacity
            onPress={ () => this._addTaskHandler() } style={ styles.addButton }>
            <Text style={ styles.addButtonText }>+</Text>
          </TouchableOpacity>
        </View >

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
  },
  footer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FF9800"
  },
  textInput: {
    flex: 4,
    color: '#000',
    padding: 20,
    fontSize: 18
  },
  addButton: {
    flex: 1,
    height: 65,
    backgroundColor: '#00C853',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25
  }
});
