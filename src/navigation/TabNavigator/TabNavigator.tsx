import {FC} from 'react';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/src/types';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Routes} from '../Routes';

interface TabNavigatorProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
}

export const TabNavigator: FC<TabNavigatorProps> = ({navigation}) => {
  return <></>;
};

const styles = StyleSheet.create({
  navigator: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  // viewArea: {
  //   height: 26,
  //   width: 64,
  //   borderBottomStartRadius: 16,
  //   borderBottomEndRadius: 16,
  //   position: 'absolute',
  //   right: 20,
  //   bottom: 24,
  //   backgroundColor: 'red',
  //   overflow: 'hidden',
  // },
  fab: {
    backgroundColor: '#FFFFFF',
    width: 56,
    height: 56,
    borderRadius: 12,
    position: 'absolute',
    right: 24,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
