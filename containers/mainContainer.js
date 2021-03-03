import { connect } from 'react-redux';
import { Main } from '../components';

const mapStateToProps = state => {
    const { weatherInfo } = state
    return {
        weatherInfo
    }
}

export default connect(
    mapStateToProps
)(Main)