import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const Header1 = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>FIFA22 / PS4</Text>
        <Icon2 name="change-circle" size={20} color="#181A1F" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#21222A',  // Background color

    flexDirection: 'row',        // Aligns children in a row
    justifyContent: 'center',     // Centers children horizontally
    alignItems: 'center',        // Centers children vertically
    padding:3,  
    marginTop:10,
                   // Optional: Padding around the header
  },
  headerTextView: {
    backgroundColor: '#424242',  // Background color
    width: 155,                  // Fixed width
    height: 45,
    padding: 12,
    flexDirection: 'row',        // Align icon and text in a row
    alignItems: 'center',        // Center vertically
    borderRadius: 8,             // Rounded corners
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,             // Added spacing between the icon and text
  },
  icon: {
    marginRight: 10,             // Added spacing between the icon and text
  },
});

export default Header1;
