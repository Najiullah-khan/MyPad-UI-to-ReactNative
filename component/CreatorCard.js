import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CreatorCard = ({ item }) => {
  return (
    <View style={styles.cardWrapper}>
      <LinearGradient
        colors={item.name === 'Coscu' ? ['rgba(22, 14, 43, 0.3)', 'rgba(98, 51, 186, 0.3)'] : ['#1E1E1E', '#1E1E1E']}
        style={styles.card}
        start={{ x: 0.04, y: 0.1 }}
        end={{ x: 0.8, y: 1 }}
      >
        <Image source={item.image} style={styles.image} />
        <View style={[styles.statusBadge, item.status === 'live' ? styles.live : styles.offline]}>
          <View style={[styles.circle, item.status === 'live' ? styles.circleLive : styles.circleOffline]} />
          <Text style={styles.statusText}>{item.status === 'live' ? 'Live' : 'Offline'}</Text>
        </View>
      </LinearGradient>
      <Text style={styles.outsideName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '33.333%',
    marginBottom: 16,
    position: 'relative',
  },
  card: {
    borderRadius: 10,
    padding: 10,
    position: 'relative',
    alignItems: 'center',
  },
  statusBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 2,
    flexDirection: 'row', // Aligns the circle and text horizontally
    alignItems: 'center', // Centers them vertically
  },
  live: {
    backgroundColor: '#FF0000',
  },
  offline: {
    backgroundColor: '#6E6E6E',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5, // Adds space between the circle and text
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 5, // Makes the circle
  },
  circleLive: {
    backgroundColor: 'white', // Color for live status
  },
  circleOffline: {
    backgroundColor: 'white', // Color for offline status
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  outsideName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    paddingLeft: 6,
  },
});

export default CreatorCard;
