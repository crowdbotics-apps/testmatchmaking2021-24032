import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile195959Navigator from '../features/UserProfile195959/navigator';
import Settings195958Navigator from '../features/Settings195958/navigator';
import Settings195956Navigator from '../features/Settings195956/navigator';
import SignIn2195954Navigator from '../features/SignIn2195954/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile195959: { screen: UserProfile195959Navigator },
Settings195958: { screen: Settings195958Navigator },
Settings195956: { screen: Settings195956Navigator },
SignIn2195954: { screen: SignIn2195954Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
