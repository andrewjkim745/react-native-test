import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FlexContainer from './components/flexContainer'
import Weather from './components/weather'
import { StateButtons } from './components/buttons'
import { DailyWeather } from './components/DailyWeather'
import { HourlyWeather } from './components/HourlyWeather'


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
      dailyWeather: '',
      dayTemp: '',
      minTemp: '',
      maxTemp: '',
      feelsLike: '',
      hourlyTemperature: '',
      windSpeed: '',
      hourlyWeather: ''
    }
  }



  componentDidMount = () => {
    return (
      navigator.geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
          this.fetchDailyWeather(position.coords.latitude, position.coords.longitude)
          this.fetchHourlyWeather(position.coords.latitude, position.coords.longitude)
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
  }

  handleHourly = e => {
    this.setState({
      hourly: !this.state.hourly
    })
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
          hourlyTemperature: data.hourly[0].temp,
          hourlyweatherCondition: data.hourly.weather[0].main,
          windSpeed: data.hourly.wind_speed,
          isLoading: false,
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
        dailyWeather: data.daily.weather[0].main,
        dayTemp: data.daily.temp.day,
        minTemp: data.daily.temp.min,
        maxTemp: data.daily.temp.max,
        feelsLike: data.daily.feels_like.day,
        isLoading: false  
      });
      console.log(this.state.temperature)
      console.log(this.state.weatherCondition)
    });
  }


  render() {

    const { isLoading, weatherCondition, temperature, dayTemp, minTemp, maxTemp, feelsLike, hourlyTemperature, hourlyWeather, windSpeed } = this.state;
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
        {this.state.current ? <Weather
            weather={weatherCondition}
            temperature={temperature}
          /> : null}
        {this.state.hourly ? <HourlyWeather
        hourlyWeather={hourlyWeather}
        windSpeed={windSpeed}
        hourlyTemperature={hourlyTemperature}/> : null
        }
        {this.state.daily ? <DailyWeather 
        dayTemp={dayTemp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        feelsLike={feelsLike}/> : null}
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
    backgroundColor: 'lightblue'
  },
  button: {
    textDecorationStyle: 'none',
    marginTop: 10
  }
});
