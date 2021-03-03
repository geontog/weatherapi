import { combineEpics, ofType } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';
import {
    updateWeatherInfo,
    doSearch,
} from './actions';

const submitEpic = (action$, state$) =>
  action$.pipe(
    ofType(doSearch.type),
    mergeMap(() => {
      const {
        searchVal
      } = state$.value;
      const link = 
        'https://api.openweathermap.org/data/2.5/weather?q=' 
        + searchVal
        + '&units=metric&appid=fad9dbe67308feb587fc101438a10795';
      const promise = fetch(link).then(response => response.json())
        .then(data => updateWeatherInfo(data))
        .catch(error => updateWeatherInfo(error));
      return promise
    })
  )

export default combineEpics(
  submitEpic
)