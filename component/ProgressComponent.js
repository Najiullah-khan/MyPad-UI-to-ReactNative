import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // You can use this for progress
import box1 from '../images/box1.png'; // Ensure the path is correct
import box2 from '../images/box2.png';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

const ProgressComponent = () => {

  return (
    <LinearGradient 
    colors={['rgba(236, 27, 227, 0.36)', 'rgba(236, 27, 227, 0)']} 
    style={styles.gradient} 
    start={{ x: 0, y: -0.062 }} 
    end={{ x: 0, y: 1 }}

  >
    <View style={styles.container}>
    
      {/* Box 1 Image */}
      <View style={styles.boxContainer}>
        <Image source={box1} style={styles.boxImage} />
        <Text style={styles.boxText}></Text>
      </View>

      {/* Progress Bar */}
      <ProgressBar progress={1650 / 2000} color="#4CAF50" style={styles.progressBar} />

      {/* Box 2 Image */}
      <View style={styles.boxContainer}>
        <Image source={box2} style={styles.boxImage2} />
        <Text style={styles.boxText}>$ 1650/2000</Text>
      </View>
      <ProgressBar progress={0} color="#4CAF50" style={styles.progressBar} />

      {/* Box 3 Image */}
      <View style={styles.boxContainer}>
        <Image source={box1} style={styles.boxImage} />
        <Text style={styles.boxText}>$ 3000</Text>
      </View>

    </View>
    
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
    gradient: {
        borderTopLeftRadius: -20, // Adjust this value for more or less roundness
        borderTopRightRadius: -20, // Adjust this value for more or less roundness
      },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  boxContainer: {
    alignItems: 'center',
  },
  boxImage: {
    width: 70,
    height: 60,
    resizeMode: 'contain',
  },
  boxImage2: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
  },
  boxText: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  progressBar: {
    height: 10,
    width: 40, // Adjust based on your layout needs
    borderRadius: 5,
    backgroundColor: 'gray',
  },
});

export default ProgressComponent;
