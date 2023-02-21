import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  element: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContent: {
    paddingVertical: 8,
  },
  tabView: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    right: 24,
    top: -30,
  },
  fab: {
    backgroundColor: '#FEFEFE',
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
