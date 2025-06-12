
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductCard = ({ imageUrl, title, subtitle, price, onPress }) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="See details" onPress={onPress} color="#FF0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
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
  subtitle: {
    color: 'black',
    fontSize: 12,
    marginTop: 10,
  },
  price: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProductCard;
