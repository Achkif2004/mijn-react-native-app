import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BlogCard from "../componenten/BlogCard";

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67b3ba347aedccc54bb3e03c/collections/6808db4d3ce58eac19a11b51/items", {
      headers: {
        Authorization: "Bearer 85ecafcc713b395a3ec259f4b515d2c44228db90f58fce4eda53e7f5ef6391ca",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("GEKREGEN DATA:", data); 
        if (data && data.items) {
        const items = data.items.map((item) => ({
            id: item._id || item.id,
            title: item.fieldData.name,
            date: item.fieldData.date,
            summary: item.fieldData.paragraph?.slice(0, 100) + "...", 
            content: item.fieldData.paragraph,
            image: item.fieldData.image?.url || "https://via.placeholder.com/300x200.png?text=No+Image",
        }));
          
          setBlogs(items);
        } else {
          console.warn("Ongeldige response:", data);
        }
      })
      .catch((err) => console.error("Fout bij het ophalen van blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze Blogposts</Text>
      {loading ? (
        <Text>Bezig met laden...</Text>
      ) : (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} navigation={navigation} />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default BlogScreen;