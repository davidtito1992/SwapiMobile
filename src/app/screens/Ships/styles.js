import { StyleSheet, Dimensions } from 'react-native';
let { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  shipContainer: {
    justifyContent: 'center',
    paddingVertical: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    height: 40,
    width: width - 30,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 6,
    marginHorizontal: 4,
    marginVertical: 16,
  },
  shipContent: {
    fontSize: 24,
    color: 'rgb(255,232,31)',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
