import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ships from './Ships';
import Ship from './Ship';
import Pilots from './Pilots';
import Pilot from './Pilot';
import Films from './Films';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ShipsStack = ({ route, navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Ships">
      <Stack.Screen
        name="Ships"
        component={Ships}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                alignSelf: 'center',
              }}>
              Star Wars: Naves
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      />
      <Stack.Screen
        name="Ship"
        component={Ship}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
              Star Wars: Bio-Nave
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerTintColor: 'rgb(255,232,31)',
        }}
      />
      <Stack.Screen
        name="Pilot"
        component={Pilot}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
              Star Wars: Bio-Piloto
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerTintColor: 'rgb(255,232,31)',
        }}
      />
    </Stack.Navigator>
  );
};

const PilotsStack = ({ route, navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Pilots">
      <Stack.Screen
        name="Pilots"
        component={Pilots}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
              Star Wars: Pilotos
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      />
      <Stack.Screen
        name="Pilot"
        component={Pilot}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
              Star Wars: Bio-Piloto
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerTintColor: 'rgb(255,232,31)',
        }}
      />
      <Stack.Screen
        name="Ship"
        component={Ship}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
              Star Wars: Bio-Nave
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerTintColor: 'rgb(255,232,31)',
        }}
      />
    </Stack.Navigator>
  );
};

const Screens = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Ships"
      drawerStyle={{
        backgroundColor: 'black',
        color: 'white',
      }}
      drawerContentOptions={{
        activeTintColor: 'rgb(255,232,31)',
        inactiveTintColor: 'rgb(255,232,31)',
      }}>
      <Drawer.Screen
        name="Ships"
        component={ShipsStack}
        options={{ drawerLabel: 'Listado de naves' }}
      />
      <Drawer.Screen
        name="Pilots"
        component={PilotsStack}
        options={{ drawerLabel: 'Listado de Pilotos' }}
      />
      <Drawer.Screen
        name="Films"
        component={Films}
        options={{ drawerLabel: 'Recomendacion de peliculas' }}
      />
    </Drawer.Navigator>
  );
};

export default Screens;
