import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FlexContainer from './components/flexContainer'
import Weather from './components/weather'
import { StateButtons } from './components/buttons'


const RaisedButton = props => <Button raised {...props} />;
const KEY = 'ea994d1c1b70d1af6f2108212ae8b988'

export default class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      display: false,
      isLoading: true,
      error: null,
      weatherCondition: '',
      temperature: null,
      current: true,
      hourly: false,
      daily: false,
      dayTemp: '',
      minTemp: '',
      maxTemp: '',
      feelsLike: ''
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

  handleCurrent = e => {
    this.setState({
      current: !this.state.current
    })
  }

  handleDaily = e => {
    this.setState({
      daily: !this.state.daily
    })
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchDailyWeather(position.coords.latitude, position.coords.longitude);
      },
    )
  }

  handleHourly = e => {
    this.setState({
      hourly: !this.state.hourly
    })
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchHourlyWeather(position.coords.latitude, position.coords.longitude);
      },
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
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=hourly,daily&appid=${KEY}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          temperature: Math.round(data.current.temp * 1.8 - 459.67),
          weatherCondition: data.current.weather[0].main,
          isLoading: false
        });
      });
  }

  fetchHourlyWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=hourly,daily&appid=${KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hourly[0].temp)
        this.setState({
          temperature: data.hourly[0].temp,
          weatherCondition: data.hourly.weather[0].main,
          isLoading: false
        });
      });
  }

  fetchDailyWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=hourly,daily&appid=${KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.daily[0].temp.day)
      this.setState({
        temperature: data.daily[0].temp.day,
        weatherCondition: data.daily.weather[0].main,
        isLoading: false
      });
      console.log(this.state.temperature)
      console.log(this.state.weatherCondition)
    });
  }


  render() {

    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <>
        <View style={styles.container}>
          {isLoading ? (<Text>Fetching app info</Text>) : (
            <>
              <Text>This is an advanced Weather App</Text>
              <RaisedButton
                title="Display Current Weather"
                buttonStyle={styles.button}
                type="outline"
                onPress={this.handleDisplay}
              />
               <StateButtons
              current={this.handleCurrent}
              daily={this.handleDaily}
              hourly={this.handleHourly}
              />
            </>
           )}
        </View>
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
