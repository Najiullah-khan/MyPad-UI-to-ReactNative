import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import bag from '../images/bag.png'; // Ensure the path is correct
import bagpack from '../images/bagpack.png';
import cap from '../images/cap.png';

const VansSeasonBanner = () => {
  return (
    <LinearGradient
      colors={['#612DB8', '#EC1BE3']}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.container}
    >
      {/* Top Label */}
      <View style={styles.label}>
        <Text style={styles.labelText}>EXCLUSIVE DROPS</Text>
      </View>

      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Vans season</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet</Text>

        {/* Shop Button */}
        <TouchableOpacity style={styles.shopButton}>
          <Text style={styles.shopButtonText}>Vai allo shop</Text>
        </TouchableOpacity>
      </View>

      {/* Product Images with Absolute Positioning */}
      <Image source={bag} style={[styles.bag]} />
      <Image source={bagpack} style={[styles.bagpack]} />
      <Image source={cap} style={[styles.cap]} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 174,
    borderRadius: 16,
    padding: 16,
    margin:6,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Parent is relative for absolute positioning of children
  },
  label: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'black',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  labelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    paddingLeft:6,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#C8A2F8',
    fontSize: 12,
    marginVertical: 5,
  },
  shopButton: {
    width:150,
    backgroundColor: '#D200F4',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  shopButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  // Individual Image Styles with separate width and height
  bag: {
    width: 65,  // Adjust width for bag
    height: 118, // Adjust height for bag
    position: 'absolute',
    bottom: 35,
    right: 10,
    transform: [{ rotate: '6.38deg' }], // Rotate the image by 6.38 degrees


  },
  bagpack: {
    width: 55,  // Adjust width for bagpack
    height: 150, // Adjust height for bagpack
    position: 'absolute',
    bottom: 10,
    left: 230,
    transform: [{ rotate: '-6.38deg' }], // Rotate the image by -6.38 degrees

  },
  cap: {
    width: 60,  // Adjust width for cap
    height: 60, // Adjust height for cap
    position: 'absolute',
    bottom: 124,
    right: 38,
    transform: [{ rotate: '10.38deg' }], // Rotate the image by 10.38 degrees

  },
});

export default VansSeasonBanner;
