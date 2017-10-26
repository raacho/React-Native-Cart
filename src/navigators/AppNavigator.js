import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from '../containers/home';
import CartScreen from '../containers/cart';
import SettingsScreen from '../containers/settings';

const rootRoutes = {
  Home: {
    screen: HomeScreen,
    path: '',
  },
  Cart: {
    screen: CartScreen,
    path: 'cart',
  },
  Settings: {
    screen: SettingsScreen,
    path: 'settings',
  },
}
const navConfig = {}

export const AppNavigator = TabNavigator(rootRoutes, navConfig);


class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };
    render() {
      return (
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })} />
      );
    }
  }
  
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
