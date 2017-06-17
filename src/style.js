import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  photoPicker: {
    flex: 1,
    // backgroundColor: '#C8E6C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  image: {
    width: 280,
    height: 280
  },
  checkboxRow: {
    flexDirection: 'row'
  },
  checkbox: {
    // backgroundColor: "#C8E6C9"
  },
  mainFont: {
    // fontFamily: 'Thonburi'
    backgroundColor: 'rgba(0,0,0,0)',
  },
  mainText: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
  },
  mainTextSmall: {
    fontSize: 24,
    marginTop: 28,
    marginBottom: 10,
  }
});

export default styles;
