import { connect } from 'react-redux';
import { Start } from '../components';
import { doSearch, writeSearch } from '../models/weather';

const mapStateToProps = state => {
    const { searchVal } = state
    return {
        searchVal
    }
}

const mapDispatchToProps = dispatch => ({
    handleChange: event => dispatch(
        writeSearch(event.target.value)
    ),
    handleSubmit: () => dispatch(
        doSearch()
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Start)