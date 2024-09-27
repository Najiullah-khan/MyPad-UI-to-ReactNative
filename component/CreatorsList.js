import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CreatorCard from './CreatorCard';
import coscu from '../images/coscu.png';
import rubius from '../images/rubius.png';
import slakun10 from '../images/slakun10.png';

const cardsData = [
  { id: '1', name: 'Coscu', status: 'live', image: coscu },
  { id: '2', name: 'Rubius', status: 'live', image: rubius },
  { id: '3', name: 'SLAKUN10', status: 'live', image: slakun10 },
  { id: '4', name: 'SLAKUN10', status: 'offline', image: slakun10 },
  { id: '5', name: 'Coscu', status: 'offline', image: coscu },
  { id: '6', name: 'Rubius', status: 'live', image: rubius },
];

const CreatorsList = () => {
  const renderCard = ({ item }) => <CreatorCard item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Creators</Text>
      <FlatList
        data={cardsData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
        scrollEnabled={false}
      />
      <Text style={styles.discoverMore}>Discover more {'>'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    flex: 1,
    marginLeft: 5,
    alignItems:'center',
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    justifyContent: 'space-between',
  },
  discoverMore: {
    color: '#3F83F8',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CreatorsList;
