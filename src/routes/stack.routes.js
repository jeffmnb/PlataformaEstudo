import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Main } from '../pages/Main';
import { ScreenTeacher } from '../pages/ScreenTeacher';
import { ScreenStudent } from '../pages/ScreenStudent';


export const StackRoute = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='ScreenTeacher' component={ScreenTeacher} />
            <Stack.Screen name='ScreenStudent' component={ScreenStudent} />
        </Stack.Navigator>
    )

}
