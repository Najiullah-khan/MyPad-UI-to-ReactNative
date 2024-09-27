import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header1 from './component/Header1';  // Import Header1
import Header2 from './component/Header2';  // Import Header2
import Banner from './component/Banner';
import ProgressComponent from './component/ProgressComponent';
import GradientImageComponent from './component/GradientImageComponent';
import VansSeasonComponent from './component/VansSeasonComponent';
import CreatorsList from './component/CreatorsList';
import Leaderboard from './component/Leaderboard';
import Scoreboard from './component/Scoreboard';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        stickyHeaderIndices={[0]} // Make Header1 sticky
      >
        <Header1 /> 
        <Header2 /> 
        <Banner />
        <ProgressComponent />
        <GradientImageComponent />
        <VansSeasonComponent />
        <CreatorsList />
        <Leaderboard />
        <Scoreboard /> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
  },
  scrollView: {
    flexGrow: 1, // Allows ScrollView to grow with content
  },
});
