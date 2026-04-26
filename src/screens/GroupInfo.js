import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const developers = [
  { id: '1', name: 'João Marcelo Dapper', ra: '1135024' },
  { id: '2', name: 'Nicolly Torra', ra: '1134784' },
  { id: '3', name: 'Pedro Sena Modernel', ra: '1134686' },
];

export default function GroupInfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre os Desenvolvedores</Text>
        <Text style={styles.description}>
          Estudantes do curso de Ciência da Computação da Atitus Educação.
        </Text>
      </View>

      <View style={styles.membersContainer}>
        <Text style={styles.subtitle}>Equipe</Text>
        {developers.map(dev => (
          <View key={dev.id} style={styles.card}>
            <Text style={styles.name}>{dev.name}</Text>
            <Text style={styles.ra}>RA: {dev.ra}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  membersContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  ra: {
    fontSize: 14,
    color: '#666',
  },
});
