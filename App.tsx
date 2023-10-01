import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CalendarModule from './CalendarModule';

export default function App() {
  const [androidResult, setAndroidResult] = useState('');
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.label
        }>{`Event Data From Android : ${androidResult}`}</Text>
      <Button
        title="Press me"
        onPress={() => {
          CalendarModule.createCalendarEvent('Party', 'My House', eventId => {
            setAndroidResult(eventId);
            console.log(`Created a new event with id ${eventId}`);
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
  },
});
