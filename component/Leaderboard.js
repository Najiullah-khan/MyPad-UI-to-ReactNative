import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';

// Import your images
import base from '../images/base.png';
import rudy92 from '../images/rudy92.png';
import ironpat from '../images/ironpat.png';
import ronominon from '../images/ronomino.png';
import bgForRudyAndRono from '../images/bgForRudyAndRono.png';
import bgForIron from '../images/bgForRudyAndRono.png';

const Leaderboard = () => {
  return (
    <LinearGradient
      colors={[
        'rgba(105, 44, 187, 0.8)', 
        'rgba(135, 32, 129, 0.8)', 
        'rgba(43, 13, 109, 0)'
      ]}
      style={styles.background}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      {/* Header Buttons */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon1 name="notebook" size={20} color="#fff" />
          <Text style={styles.buttonText}>Consulta regolamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="bell" size={20} color="#fff" />
          <Text style={styles.buttonText}>Disattiva notifiche</Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard Section */}
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTextOutline}>SEASON</Text>
        <Text style={styles.leaderboardTextOutline}>LEADERBOARD</Text>

        {/* <Text style={styles.leaderboardText}>SEASON LEADERBOARD</Text> */}

        {/* Base Image */}
        <View style={styles.baseContainer}>
          <Image source={base} style={styles.baseImage} />

          {/* Podium Avatars on Base */}
          <View style={styles.avatarsContainer}>
            {/* Rudy Avatar */}
            <View style={styles.podium}>
              <Image source={bgForRudyAndRono} style={styles.backgroundImage} />
              <Image source={rudy92} style={styles.avatarImage} />
              <Text style={[styles.podiumText, {paddingLeft: 33}]}>rudy92sale</Text>
            </View>

            {/* IronPatt Avatar */}
            <View style={[styles.podium, styles.centerPodium]}>
              <Image source={bgForIron} style={styles.backgroundImagecenter} />
              <Image source={ironpat} style={styles.centereravatarImage} />
              <Text style={[styles.podiumText, styles.absoluteText]}>IronPatt</Text>
            </View>

            {/* Ron Avatar */}
            <View style={styles.podium}>
              <Image source={bgForRudyAndRono} style={styles.backgroundImage} />
              <Image source={ronominon} style={styles.avatarImage} />
              <Text style={[styles.podiumText, {paddingRight: 30}]}>RonRemain</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7F56FF',
    padding: 10,
    borderRadius: 20,
  },
  absoluteText: {
    position: 'absolute', // Use absolute positioning
    bottom: 15, // Adjust this value based on where you want it positioned
    textAlign: 'center', // Center align the text
    color: '#fff', // Change color as needed
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  leaderboardContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  leaderboardTextOutline: {
    color: '#3c1275', // Text color
    opacity: 1, // Full opacity for text
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 0,
    textShadowColor: 'white', // Border color
    textShadowOffset: { width: 12, height: 12 }, // Adjust shadow offset for thicker border
    textShadowRadius: 3, // No blur for solid border effect
    opacity:0.5,
},

  baseContainer: {
    position: 'relative', // Allows absolute positioning for children
    width: '100%', // Adjust size as necessary to match base image width
    height: 200, // Adjust height for your design
    alignItems: 'center', // Center horizontally
  },
  baseImage: {
    marginTop: 5,
    width: 400, // Adjust width as per design
    height: '100%',
  },
  avatarsContainer: {
    flexDirection: 'row',
    position: 'absolute', // Layer avatars on top of base image
    bottom: 15, // Align avatars with the bottom of the base image
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  podium: {
    alignItems: 'center',
  },
  centerPodium: {
    marginBottom: 18, // Elevate the center podium
    height: 180,
  },
  backgroundImage: {
    width: 90,
    height: 100,
    resizeMode: 'contain',
  },
  backgroundImagecenter: {
    width: 170,
    height: 100,
  },
  centereravatarImage: {
    width: 80,
    height: 120,
    position: 'absolute',
    top: -16,
    resizeMode: 'contain',
  },
  avatarImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 10,
    resizeMode: 'contain',
  },
  podiumText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Leaderboard;
