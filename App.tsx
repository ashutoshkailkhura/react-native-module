import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CalendarModule from './CalendarModule';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[{fontSize: 33, fontWeight: '600'}]}>Ashutosh</Text>
      <Button
        title="Press me"
        onPress={() => {
          CalendarModule.createCalendarEvent('Party', 'My House', eventId => {
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
});
