import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FlexContainer from './components/flexContainer'


const RaisedButton = props => <Button raised {...props} />;

const renderFlexContainer = e => {
  return (
    <FlexContainer />
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      display: false,
    }
  }


  handleDisplay = e => {
    this.setState({
      display: true
    })
  }


  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <RaisedButton
            title="Press Me"
            buttonStyle={styles.button}
            type="outline"
            onPress={this.handleDisplay}
          />
        </View>
        {display ? <FlexContainer/> : <View/>}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'red'
  }
});
