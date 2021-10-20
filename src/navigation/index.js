import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Part from '../screens/Part';
import Sale from '../screens/Sale';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Part">
                <Stack.Screen
                    name="Part"
                    component={Part}
                    options={{title: 'Peças'}}
                />
                <Stack.Screen
                    name="Sale"
                    component={Sale}
                    options={{title: 'Vendas'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
