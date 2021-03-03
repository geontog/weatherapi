import Action from '../../lib/Action';

const WRITE_SEARCH = 'WRITE_SEARCH';
const writeSearch = value => ({
    type: 'WRITE_SEARCH',
    payload: {
        value
    }
})
writeSearch.type = 'WRITE_SEARCH';
// const writeSearch = Action('WRITE_SEARCH');

const DO_SEARCH = 'DO_SEARCH';
const doSearch = () => ({
    type: 'DO_SEARCH'
})
doSearch.type = DO_SEARCH

const UPDATE_WEATHER_INFO = 'UPDATE_WEATHER_INFO';
const updateWeatherInfo = value => ({
    type: 'UPDATE_WEATHER_INFO',
    payload: {
        value
    }
})
updateWeatherInfo.type = UPDATE_WEATHER_INFO;

export {
    writeSearch,
    updateWeatherInfo,
    doSearch
};