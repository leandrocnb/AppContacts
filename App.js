import {createStackNavigator, createAppContainer} from 'react-navigation';
import capitalizeFirstLetter from './src/util/captalizeFirstLetter';
import PeoplePage from './src/screens/PeoplePage';
import PersonDetail from './src/screens/PersonDatail';

const StackNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PersonDetail': {
        screen: PersonDetail,
        navigationOptions: ({navigation}) => {
            const personName = navigation.state.params.person.name.first;
            
            return({
                title: capitalizeFirstLetter(personName),
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 35,
                }
            })
        }
    }
}, {
    defaultNavigationOptions: {
        title: 'Contatos',
        headerTitleStyle: {
            color: 'white',
            fontSize: 35,
            flexGrow: 1,
            textAlign: 'center'
        },
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 0,
            borderBottomColor: '#C5C5C5',
        }
    }
}

);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;