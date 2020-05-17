import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FlexContainer from './components/flexContainer'
import Weather from './components/weather'


const RaisedButton = props => <Button raised {...props} />;
const KEY = 'ea994d1c1b70d1af6f2108212ae8b988'

export default class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      display: false,
      isLoading: true,
      error: null,
      weatherCondition: null,
      temperature: null
    }
  }



  componentDidMount = () => {
    return (
      navigator.geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: 'Error Retrieving Weather Conditions'
          });
        }
      )
    )
  }

  handleDisplay = e => {
    this.setState({
      display: !this.state.display
    })
  }

  renderComponent = () => {
    this.setState({
      isLoading: false
    })
  }

  fetchWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?  
     lat=${lat}&lon=${lon}&APPID=${KEY}&units=imperial`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        temperature: data.main.temp,
        weatherCondition: data.weather[0].main,
        isLoading: false
       });
     });
    }


  render() {

    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <>
        <View style={styles.container}>
          {isLoading ? (<Text>Fetching app info</Text>) : (
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
        {this.state.display ? <FlexContainer /> : null}
        <Weather 
        weather={weatherCondition}
        temperature={temperature}
        />
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
