import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.principalItem}>
      <ScrollView>
        <Text>{''}</Text>

        <View style={styles.item}>
          <Image style={styles.ImgHouse} source={require('./src/bob.png')} />
          <View style={styles.info}>
            <Text style={styles.titleText}>Pinapple</Text>
            <View style={styles.infoRow}>
              <Image
                style={styles.Imginfo}
                source={require('./src/loca.png')}
              />
              <Text>Bikini Bottom</Text>
            </View>
          </View>
        </View>

        <Text>{''}</Text>

        <View style={styles.item}>
          <Image style={styles.ImgHouse} source={require('./src/patrk.png')} />
          <View style={styles.infoCol}>
            <Text style={styles.titleText}>Rock PentHouse</Text>
            <View style={styles.infoRow}>
              <Image
                style={styles.Imginfo}
                source={require('./src/loca.png')}
              />
              <Text>Bikini Bottom</Text>
            </View>
          </View>
        </View>

        <Text>{''}</Text>

        <View style={styles.item}>
          <Image style={styles.ImgHouse} source={require('./src/cala.png')} />
          <View>
            <Text style={styles.titleText}>Moai</Text>
          </View>
        </View>

        <Text>{''}</Text>

        <View style={styles.item}>
          <Image style={styles.ImgHouse} source={require('./src/sand.png')} />
          <View>
            <Text style={styles.titleText}>Bubble Mansion</Text>
          </View>
        </View>

        <Text>{''}</Text>

        <View style={styles.item}>
          <Image style={styles.ImgHouse} source={require('./src/balde.png')} />
          <View>
            <Text style={styles.titleText}>Bucket Hills</Text>
          </View>
        </View>

        <Text>{''}</Text>

        <View style={styles.item}>
          <Image style={styles.ImgHouse} source={require('./src/homer.png')} />
          <View>
            <Text style={styles.titleText}>Spring House</Text>
          </View>
        </View>

        <Text>{''}</Text>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  principalItem: {
    backgroundColor: '#FFFFF',
  },
  item: {
    height: 200,
    width: '95%',
    padding: 20,
    backgroundColor: '#E2F1F1',
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ImgHouse: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  infoRow: {
    flexDirection: 'row',
  },
  infoCol: {
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
});
