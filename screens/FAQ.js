// screens/FAQ.js
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Shipping takes 2-5 business days within Belgium and the Netherlands.",
  },
  {
    question: "Can I return an item?",
    answer: "Yes, you can return any unused item within 14 days of delivery.",
  },
  {
    question: "How do I choose the right size?",
    answer: "We recommend checking the size chart on each product page.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the EU.",
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, we only sell official gear from brands like Fairtex, Twins, and Booster.",
  },
];

const FAQ = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5c2522',
    marginBottom: 8,
  },
  answer: {
    fontSize: 16,
    color: '#5c2522',
  },
});

export default FAQ;
