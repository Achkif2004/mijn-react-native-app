import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';



const BlogCard = ({ blog, navigation }) => {
  return (
    <View style={styles.productCard}>
      <Image
        source={{ uri: blog.image || "https://via.placeholder.com/300x200.png?text=No+Image" }}
        style={styles.image}
       />

      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.summary} numberOfLines={2}>
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
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
  },
  summary: {
    color: 'black',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default BlogCard;
