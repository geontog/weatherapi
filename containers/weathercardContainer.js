import { connect } from 'react-redux';
import { WeatherCard } from '../components';
import { doSearch, writeSearch } from '../models/weather';
import {
    unixConverter,
    datetime
  } from '../lib'

const mapStateToProps = state => {
    const { 
        name,   
        sys, 
        weather, 
        main, 
        wind, 
        timezone, 
        clouds 
    } = state.weatherInfo;
    const tzdiv = timezone/3600
    return {
        name, 
        country: sys["country"], 
        weather: weather[0]["main"], 
        temp: main["temp"],
        maxtemp: main["temp_max"],
        mintemp: main["temp_min"],
        windspeed: wind["speed"],
        winddeg: wind["deg"],
        clouds: clouds["all"],
        sunrise: unixConverter(sys["sunrise"]),
        sunset: unixConverter(sys["sunset"]),
        humidity: main["humidity"],
        pressure: main["pressure"]/10,
        tz: tzdiv > 0 ? "+" + tzdiv : tzdiv,
        datetime
    }
}

export default connect(
    mapStateToProps
)(WeatherCard)