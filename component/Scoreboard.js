import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Importing local images
import rudy92 from '../images/rudy92.png';
import ironpat from '../images/ironpat.png';
import ronominon from '../images/ronomino.png';
import conisama from '../images/conisama.png';
import eliodea76 from '../images/eliodea76.png';
import soberunicorn from '../images/conisama.png'; // Corrected path for soberunicorn
import boxImage from '../images/box1.png'; // The box image for header

// Data for the players
const playerData = [
  { rank: 1, playerName: "IronPatt", points: 28, avatar: ironpat },
  { rank: 2, playerName: "RonRemain", points: 26, avatar: ronominon },
  { rank: 3, playerName: "rudy92sale", points: 20, avatar: rudy92 },
  { rank: 4, playerName: "elioidea76", points: 18, avatar: eliodea76 },
  { rank: 5, playerName: "Conisama", points: 15, avatar: conisama },
  { rank: 6, playerName: "SoberUnicorn", points: 10, avatar: soberunicorn },
  { rank: 7, playerName: "Conisam", points: 15, avatar: rudy92 },
];

// Main component
const Scoreboard = () => {
  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={styles.headerText}>POS</Text>
      <Text style={styles.headerText}>UTENTE</Text>
      <Image source={boxImage} style={styles.boxImage} />
    </View>
  );

  return (
    <LinearGradient 
      colors={['#1b1b1b', '#2c2c2c']} // Change to your desired colors
      style={styles.scoreboardContainer}
    >
      <FlatList
        data={playerData}
        keyExtractor={(item) => item.playerName}
        renderItem={({ item, index }) => (
          <View style={[styles.scoreRow, index === playerData.length - 1 ? styles.lastScoreRow : {}]}>
            <Text style={styles.rank}>{item.rank}</Text>
            <Image source={item.avatar} style={styles.playerAvatar} />
            <Text style={styles.playerName}>{item.playerName}</Text>
            <Text style={styles.points}>{item.points}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false} // Disable scrolling on FlatList
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scoreboardContainer: {
    flex: 1,
    backgroundColor: '#737373', // This will be covered by the gradient
    width: '90%',
    borderRadius: 15, // Rounded corners
    overflow: 'hidden', // Important for rounded corners
    alignSelf: 'center', // Center the scoreboard horizontally
    justifyContent: 'center', // Center the contents vertically
    alignItems: 'center', // Align items center horizontally
  },
  headerRow: {
    backgroundColor: '#4c4c4c',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 0,
    justifyContent: 'space-between', // Aligns header items evenly
    width: '100%', // Make sure the header takes full width
    borderRadius: 8,
    borderTopWidth: 1, // Optional: Add a top border if needed
    paddingVertical: 10, // Add some vertical padding for better spacing
    marginBottom: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginLeft: 2,
  },
  boxImage: {
    width: 24,
    height: 24,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    justifyContent: 'center', // Center score row items horizontally
    width: '100%', // Make sure score row takes full width
    backgroundColor: '#1b1b1b', // Default background color
  },
  lastScoreRow: {
    backgroundColor: '#7F56FF', // Red background for the last entry
    borderBottomLeftRadius: 15, // Round bottom left corner
    borderBottomRightRadius: 15, // Round bottom right corner
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  playerName: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center', // Center text
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default Scoreboard;
