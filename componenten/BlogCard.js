import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const BlogCard = ({ blog, navigation }) => {
  return (
    <View style={styles.blogCard}>
      <Image
        source={{ uri: blog.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.summary} numberOfLines={3}>
        {blog.summary}
      </Text>
      <Button
        title="Lees meer"
        onPress={() => navigation.navigate("BlogDetail", blog)}
        color="#FF0000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30, 
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  summary: {
    color: '#333',
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default BlogCard;
