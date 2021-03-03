const refreshState = state => {
    return { 
        searchVal: "", 
        weatherInfo: "",
    }
}

/*
{
    "coord": {
        "lon":23.7162,
        "lat":37.9795
    },
    "weather": [
        {
            "id":802,
            "main":"Clouds",
            "description":"scattered clouds",
            "icon":"03d"
        }
    ],
    "base":"stations",
    "main": {
        "temp":11.74,
        "feels_like":5.87,
        "temp_min":10.56,
        "temp_max":12.78,
        "pressure":1027,
        "humidity":54
    },
    "visibility":10000,
    "wind": {
        "speed":6.17,
        "deg":330
    },
    "clouds": {
        "all":40
    },
    "dt":1613915780,
    "sys": {
        "type":1,
        "id":6613,
        "country":"GR",
        "sunrise":1613884074,
        "sunset":1613923797
    },
    "timezone":7200,
    "id":264371,
    "name":"Athens",
    "cod":200}
*/

export { refreshState };