import update from 'immutability-helper';
import { refreshState } from './selectors';
import {
    writeSearch,
    updateWeatherInfo,
} from './actions';

const reducer = (state = refreshState(), { type, payload }) => {
    console.log("PREVIOUS STATE:", state)
    switch(type) {
        case writeSearch.type: 
          return update(state, {
              searchVal: { $set: payload.value }
          })
        case updateWeatherInfo.type:
            return update(state, {
                weatherInfo: { $set: payload.value }
            })
        default:
          return state
      }
}

export default reducer;
