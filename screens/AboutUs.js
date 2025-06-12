
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import logo from '../images/StrikeGear.png';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Powered by Passion, Driven by Fight</Text>
      <Text style={styles.paragraph}>
        Welcome to our webshop – the go-to place for everyone who lives and breathes Muay Thai and kickboxing.
        Whether you're a beginner or a seasoned fighter, we're here to equip you with top-quality gear straight from Thailand.
        {"\n\n"}We believe in the power of authentic brands like Fairtex, Twins, and Booster. Our mission? To provide you with
        the best gear so you can get the most out of every training session or fight. Every product in our range is carefully
        selected for its quality, comfort, and durability.
        {"\n\n"}For us, it's not just about selling equipment – it's about supporting the sport. We share the same passion you do
        and are committed to offering fair prices, expert advice, and fast service. Step into the ring with confidence – we've got your back.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5c2522',
    textAlign: 'center',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#5c2522',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutUs;
