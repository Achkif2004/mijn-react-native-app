import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Text, TextInput } from 'react-native';
import ProductCard from '../componenten/ProductCard';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import logo from '../images/StrikeGear.png';




const categoryNames = {
  "": "Alle categorieën",
  "68482b6f94cd47f19bd2bff1": "shorts",
  "684824fb9ca6a767f27eaf68": "shinguards",
  "684823525ed86d115e2d0bcd": "Box Gloves",
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('price-asc');

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67b3ba347aedccc54bb3e03c/products", {
      headers: {
        Authorization: "Bearer 5fe0e5474b442e227afe19d9dd6757a3df87aca37ad53967b7d6b47f8ae1aef0",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: item.skus[0]?.fieldData["main-image"]?.url || "",
            imageUrl: item.skus[0]?.fieldData["main-image"]?.url || "",
            category: categoryNames[item.product.fieldData.category?.[0]] || "Onbekend",
          }))
        )
      )
      .catch((err) => console.error("Error", err));
  }, []);


  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === categoryNames[selectedCategory]) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>


        
        {/* Zoekveld */}
        <TextInput
          style={styles.searchInput}
          placeholder="Zoek een model..."
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Categorie Filter */}
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          style={styles.picker}
        >
          {Object.entries(categoryNames).map(([id, name]) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>

        {/* Sorteeropties */}
        <Picker
          selectedValue={sortOption}
          onValueChange={(value) => setSortOption(value)}
          style={styles.picker}
        >
          <Picker.Item label="Prijs (laag → hoog)" value="price-asc" />
          <Picker.Item label="Prijs (hoog → laag)" value="price-desc" />
          <Picker.Item label="Naam (A → Z)" value="name-asc" />
          <Picker.Item label="Naam (Z → A)" value="name-desc" />
        </Picker>

        {/* Producten tonen */}
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            imageUrl={product.image}
            onPress={() => navigation.navigate("Details", product)}
          />
        ))}
        <TouchableOpacity style={styles.blogButton} onPress={() => navigation.navigate('Blogs')}>
          <Text style={styles.blogButtonText}>Take a look at our blogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqButton} onPress={() => navigation.navigate('FAQ')}>
          <Text style={styles.faqButtonText}>Frequently Asked Questions</Text>
        </TouchableOpacity>


      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    width: '90%',
    color: '#000',
  },
  picker: {
    height: 50,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  blogButton: {
  backgroundColor: '#fff',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 30,
},
blogButtonText: {
  color: '#8B0000',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},

logo: {
  width: 200,
  height: 120,
  resizeMode: 'contain',
  alignSelf: 'flex-start',
  marginTop: 20,
  marginLeft: 0,
  marginBottom: 20,
},
faqButton: {
  backgroundColor: '#fff',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 10,
  marginBottom: 40,
},
faqButtonText: {
  color: '#8B0000',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},



});

export default HomeScreen;
