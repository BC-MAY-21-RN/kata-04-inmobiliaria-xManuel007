import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {styles} from './Appstyles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <ScrollView>
          <View style={styles.item}>
            <Image style={styles.ImgHouse} source={require('./src/bob.png')} />
            <View style={styles.rate}>
              <Text>4.7</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.titleText}>Pinapple</Text>
              <View style={styles.Row}>
                <Image
                  style={styles.Imginfo}
                  source={require('./src/loca.png')}
                />
                <Text>Bikini Bottom</Text>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.ImgHouse}
              source={require('./src/patrk.png')}
            />
            <View style={styles.rate}>
              <Text>4.7</Text>
            </View>
            <View style={styles.Col}>
              <Text style={styles.titleText}>Rock PentHouse</Text>
              <View style={styles.Row}>
                <Image
                  style={styles.Imginfo}
                  source={require('./src/loca.png')}
                />
                <Text>Bikini Bottom</Text>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <Image style={styles.ImgHouse} source={require('./src/cala.png')} />
            <View style={styles.rate}>
              <Text>4.7</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Moai</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image style={styles.ImgHouse} source={require('./src/sand.png')} />
            <View style={styles.rate}>
              <Text>4.7</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Bubble Mansion</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.ImgHouse}
              source={require('./src/balde.png')}
            />
            <View style={styles.rate}>
              <Text>4.7</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Bucket Hills</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.ImgHouse}
              source={require('./src/homer.png')}
            />
            <View style={styles.rate}>
              <Text>4.7</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Spring House</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default App;
