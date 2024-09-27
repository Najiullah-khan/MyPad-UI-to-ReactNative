import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Header2 = () => {
  return (
    <View style={styles.notification}>
      <Icon name="bell" size={30} color="white" />
      <Text style={styles.notificationText}>Notifiche attive</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    flexDirection: 'row',        // Align items in a row
    alignItems: 'center',        // Center vertically
    justifyContent: 'center',    // Center horizontally
    width: 375,                  // Fixed width
    height: 40,                  // Fixed height
    paddingVertical: 7,          // Padding top and bottom
    backgroundColor: '#B94FC6',  // Background color
  },
  notificationText: {
    marginLeft: 8,               // Space between icon and text
    color: '#fff',               // Text color
  },
});

export default Header2;
