// import * as actionCreators from './actionCreators'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import JsonPrinter from '../ui/JsonPrinter'

function mapStateToProps(state) {
    return { state }
}

// function mapDispatchToProps(dispatch) {
//     return { actions: bindActionCreators(actionCreators, dispatch) }
// }

export default connect(mapStateToProps)(JsonPrinter)