
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BlogDetail = ({ route }) => {
  const blog = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.date}>
        {new Date(blog.date).toLocaleDateString()}
      </Text>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <Text style={styles.description}>{blog.content || blog.summary}</Text>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 10,
    textAlign: 'center',
  },
  date: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
});

export default BlogDetail;
