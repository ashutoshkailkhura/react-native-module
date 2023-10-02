import React, {useState} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import CalendarModule from './CalendarModule';

export default function App() {
  const [androidResult, setAndroidResult] = useState('');
  const [iosResult, setIosResult] = useState('');
  const [commonResult, setCommonResult] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.android}>
        <Text style={styles.label}>{`From Android : ${androidResult}`}</Text>
        <Button
          style={styles.button}
          title="Press me"
          onPress={() => {
            if (Platform.OS === 'android') {
              const random = Math.floor(Math.random() * 100);
            }
          }}
        />
      </View>
      <View style={styles.ios}>
        <Text style={styles.label}>{`From IOs : ${iosResult}`}</Text>
        <Button
          style={styles.button}
          title="Press me"
          onPress={() => {
            if (Platform.OS === 'ios') {
              const random = Math.floor(Math.random() * 100);
              CalendarModule.createCalendarEvent('testName', 'testLocation');
            }
          }}
        />
      </View>
      <View style={styles.both}>
        <Text style={styles.label}>{`Common : ${commonResult}`}</Text>
        <Button
          style={styles.button}
          title="Press me"
          onPress={() => {
            console.log(`random ${random}`);
            CalendarModule.createCalendarEvent('testName', 'testLocation');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  android: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  ios: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  both: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
  },
  button: {},
});
