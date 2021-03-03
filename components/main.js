import React from 'react';
import { 
    CityFormContainer, 
    StartContainer, 
    WeatherCardContainer 
} from '../containers'

function Main({ weatherInfo }) {
  if (weatherInfo === "") {
    return <StartContainer />;
  }
  return (
    <div>
      <CityFormContainer />
      {weatherInfo ?
        <WeatherCardContainer />
        : <h1 className="needsAligning">City doesn't exist.</h1>
      }
    </div>
  );
}

export default Main;




