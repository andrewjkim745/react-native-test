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
      isLoading: true
    }
  }


  handleDisplay = e => {
    this.setState({
      display: !this.state.display
    })
  }


  render() {

    const { isLoading } = this.state;
    return (
      <>
        <View style={styles.container}>
          { isLoading ? (<Text>Fetching app info</Text> ) : (
            <>
          <Text>I hate React Native and I want to go back to React</Text>
          <RaisedButton
            title="Press Me"
            buttonStyle={styles.button}
            type="outline"
            onPress={this.handleDisplay}
          />
          </>
          )}
        </View>
        {this.state.display ? <FlexContainer/> : null }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 10
  }
});
