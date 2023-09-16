import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FlatList } from 'react-native';
import indexStyles from '../../../app/indexStyle';
import { useNavigation } from 'expo-router';

const CardLayout = () => {
  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1' },
    { id: '2', title: 'Card 2', description: 'Description for Card 2' },
    { id: '3', title: 'Card 3', description: 'Description for Card 3' },
    { id: '4', title: 'Card 4', description: 'Description for Card 4' },
    { id: '5', title: 'Card 5', description: 'Description for Card 5' },
    { id: '6', title: 'Card 6', description: 'Description for Card 6' },
    { id: '7', title: 'Card 7', description: 'Description for Card 7' },
    { id: '8', title: 'Card 8', description: 'Description for Card 8' },
    { id: '9', title: 'Card 9', description: 'Description for Card 9' },
  ];
  const navigation = useNavigation()
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{flex:1}}>
      <Card onPress={() => { navigation.navigate('CoursePage') }} style={styles.card}>
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={[indexStyles.fontA]}>
        Heading
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2} // Set the number of columns to 2
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flex: 1,
    margin: 8,
  },
});

export default CardLayout;
