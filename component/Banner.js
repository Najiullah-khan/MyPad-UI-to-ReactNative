import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import end1 from '../images/End-1.jpg'; // Ensure the path is correct
import Lavorazione from '../images/Lavorazione.png';

const Banner = () => {
  return (
   <View style={{backgroundColor:'rgba(236, 27, 227, 0.36)'}}>
     <View style={styles.banner}>
      <Image
        source={end1}
        style={styles.bannerImage}
      />
      <Image
        source={Lavorazione} // Add the Lavorazione image
        style={styles.lavorazioneImage}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gioca ora</Text>
      </TouchableOpacity>
    </View>
    
   </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    paddingTop:30,
    backgroundColor:'black',
    alignItems: 'center',
    position: 'relative', // Relative position for absolute positioning of other components
    borderBottomLeftRadius: 20, // Adjust this value for more or less roundness
    borderBottomRightRadius: 20, // Adjust this value for more or less roundness
    overflow: 'hidden', // Ensur
  },
  bannerImage: {
    width: 375, // Set width to 375px
    height: 310,
    
  },
  lavorazioneImage: {
    position: 'absolute', // Positioning the Lavorazione image absolutely
    width: 200.7, // Set width to 552.7px
    height: 100.88, // Set height to 117.88px
    top: '4%', // Position 2% from the top of the parent view
    // left: '50%', // Position -93px from the left
    // opacity: 0, // Set opacity to 0 as specified
    transform: [{ rotate: '-6.38deg' }], // Rotate the image by -6.38 degrees
  },
  button: {
    position: 'absolute', // Positioning the button absolutely
    top: '100%', // Positioning near the bottom of the banner
    left: '50%', // Centering horizontally
    transform: [{ translateX: -70 }, { translateY: -43 }], // Adjusting to center correctly
    width: 167,
    height: 42,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderRadius: 8,
    backgroundColor: '#5e2dd7', // Button background color
    // Shadow properties for iOS
    shadowColor: '#FFFFFF', // Shadow color
    shadowOffset: { width: 0, height: 5 }, // Shadow offset
    shadowOpacity: 0.36, // Shadow opacity
    shadowRadius: 14, // Shadow radius
    // Elevation for Android
    elevation: 10, // Elevation for Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Set font size to 18px
    fontWeight: '700', // Font weight set to 700
    lineHeight: 24, // Line height set to 24px
    letterSpacing: 0.005, // Letter spacing set to 0.005em
    textAlign: 'left', // Text aligned to the left
  },
});

export default Banner;
