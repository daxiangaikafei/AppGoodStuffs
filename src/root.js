
//modules
import React, { Component } from 'react';
import CodePush from "react-native-code-push";
// import PropTypes                from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

//configs
import Navigator from './configs/navigator';

/**
 * the root entry
 */
class Root extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        CodePush.sync({
            installMode: CodePush.InstallMode.IMMEDIATE,
            updateDialog: true
        });
    }

    render() {
        return <Navigator  { ...this.props} />
    }
}

/**
 * props needed value require here
 */
// Root.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     // routInfo: PropTypes.object.isRequired,
// };

/**
 * state connect
 * @param {* storage in react-native} store 
 */
function mapStateToProps(store) {

    return {
        isFirstLogin: store.wlcmStore.isFirstLogin
    }
}

export default connect(mapStateToProps)(Root);
