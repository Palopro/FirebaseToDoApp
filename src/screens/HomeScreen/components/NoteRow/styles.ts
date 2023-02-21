import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  element: {
    paddingVertical: 12,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 16,
    maxHeight: 205,
  },
  titleText: {
    fontWeight: '500',
    color: 'rgba(0,0,0,0.87)',
  },
  noteText: {
    fontWeight: '400',
    color: 'rgba(0,0,0,0.7)',
    marginTop: 8,
  },
});
