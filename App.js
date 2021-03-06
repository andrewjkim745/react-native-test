import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FlexContainer from './components/flexContainer'
import Weather from './components/weather'
import { StateButtons } from './components/buttons'
import DailyWeather from './components/DailyWeather'
import HourlyWeather from './components/HourlyWeather'


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
      hourlyWeather: '',
      timezone: ''
    }
  }

  componentDidMount = () => {
    return (
      navigator.geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude)
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
        console.log(data.daily)
        this.setState({
          temperature: Math.round(data.current.temp * 1.8 - 459.67),
          weatherCondition: data.current.weather[0].main,
          isLoading: false,
          timezone: data.timezone,
          dailyWeather: data.daily[0].weather[0].main,
          dayTemp: data.daily,
          minTemp: Math.round(data.daily[0].temp.min * 1.8 - 459.67),
          // maxTemp: data.daily.temp.max,
          feelsLike: Math.round(data.daily[0].feels_like.day * 1.8 - 459.67),
          hourlyTemperature: Math.round(data.hourly[0].temp * 1.8 - 459.67),
          hourlyweatherCondition: data.hourly[0].weather[0].main
          // windSpeed: data.hourly.wind_speed,
        });
      });
  }


  render() {

    const { isLoading, timezone, weatherCondition, temperature, dailyWeather, dayTemp, minTemp, maxTemp, feelsLike, hourlyTemperature, hourlyWeather, windSpeed } = this.state;
    return (
      <>
        <View style={styles.container}>
          {isLoading ? (<Text>Fetching current weather info</Text>) : (
            <>
              <StateButtons
                current={this.handleCurrent}
                daily={this.handleDaily}
                hourly={this.handleHourly}
              />
            </>
          )}
        </View>
        <Text>{timezone}</Text>
        {this.state.current ? <Weather
          weather={weatherCondition}
          temperature={temperature}
        /> : null}
        {this.state.hourly ? <HourlyWeather
          hourlyWeather={hourlyWeather}
          windSpeed={windSpeed}
          hourlyTemperature={hourlyTemperature} /> : null
        }
        {this.state.daily ? dayTemp.map(day => {
          return (
            <DailyWeather
              // dayTemp={dayTemp}
              minTemp={day.temp.min}
              maxTemp={day.temp.max}
              dailyWeather={day.weather.main}
              feelsLike={day.feels_like.day} />
          )
        }) : null}
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
    marginTop: 10
  }
});
