import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  principalItem: {
    backgroundColor: '#FFFFF',
  },
  item: {
    height: '15%',
    width: '95%',
    padding: 15,
    backgroundColor: 'lightgrey', //E2F1F1
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  ImgHouse: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  Row: {
    flexDirection: 'row',
  },
  Col: {
    flexDirection: 'column',
  },
  Imginfo: {
    width: 20,
    height: 20,
    left: 20,
  },
  titleText: {
    left: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  rate: {
    color: '#7A6229',
    backgroundColor: '#FBEDB7',
    width: 50,
    height: 23,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    left: 50,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {flex: 1},
  textWrapper: {
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
  },
});
