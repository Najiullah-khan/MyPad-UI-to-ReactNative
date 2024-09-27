import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import box2 from '../images/que.png'; // Ensure the path to the image is correct
import box1 from '../images/coin.png'; 

const GradientImageComponent = () => {
  return (
    <View style={styles.container}>
      {/* First Image with Gradient */}
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['rgba(214, 16, 170, 0.9)', 'rgba(84, 58, 120, 0.199995)', 'rgba(80, 65, 122, 0)']}
          start={{ x: 0.5, y: 0 }} // Adjust this for the direction
          end={{ x: 0.5, y: 1 }}   // Adjust this for the direction
          style={styles.gradient}
        >
          <Image source={box2} style={styles.image} />
        </LinearGradient>
        <View style={[styles.label, { marginTop: 10,paddingTop:10 }]}>
        <Text style={styles.TEXT}>LOCKED</Text>

</View>
      </View>

      {/* Second Image with Gradient Background and Positioned Text */}
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['rgba(214, 182, 16, 0.9)', 'rgba(84, 58, 120, 0.199995)', 'rgba(80, 65, 122, 0)']}
          start={{ x: 0, y: 0 }} // Gradient direction
          end={{ x: 1, y: 0 }}
          style={styles.box1Gradient}
        >
          <Image source={box1} style={styles.image} />
        </LinearGradient>

        {/* Gradient Text */}
        <LinearGradient
          colors={['#7A0164', '#DB0775', '#FF0A71', '#7A0164']}
          start={{ x: 0, y: 0 }} // Gradient from left to right
          end={{ x: 1, y: 0 }}
          style={styles.textGradient}
        >
          <Text style={styles.gradientText}>+30</Text>
        </LinearGradient>
<View style={styles.label}> 
<Text style={styles.TEXT}>GOLDEN</Text>
<Text style={styles.TEXT}>POINTS</Text>

</View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    paddingBottom :10,
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    borderRadius: 20, // Adjust as needed
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: 'center', // Center image and text together
    position: 'relative', // For absolute positioning of text
  },
  image: {
    width: 60,
    height: 80,
  },
  label: {
    marginTop: 8, // Space between image and text
    fontSize: 16,
    alignItems: 'center', // Center horizontally
  },
  TEXT: {
    fontSize: 16,
    
  },
  box1Gradient: {
    width: 100,
    height: 100,
    borderRadius: 20, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1, // Fully visible
    position: 'relative',
  },
  textGradient: {
    position: 'absolute',
    top: -8, // Adjusted position of the gradient text
    right: -8, // Adjust as needed for positioning
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  gradientText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default GradientImageComponent;
