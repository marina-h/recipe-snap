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
  },
  badge: {
    color: '#FFFFFF',
    fontSize: 10
  },
  ingredients: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    // flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
    width: 350,
    height: 350,
  },
  cardView: {
    marginTop: 140,
  },
  cardImage: {
    // flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
    width: 340,
    height: 345,
  },
  cardTitle: {
    position: 'absolute',
    left: 15,
    bottom: 10,
    fontSize: 24,
  },
  cardAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'repeat'
  },
  savedRecipeButtons: {
    height: 40,
    width: 100,
    marginBottom: 40
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})

export default styles;
