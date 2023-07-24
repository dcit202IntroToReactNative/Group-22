import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Search } from "../components/search.component";
import { TopDishesCard } from "../components/topDishes.component";
import { client } from "./../lib/client";
import { urlFor } from "./../lib/client";
import { Container, CatText, Spacer, Scroll } from "./style/styles.style";

export const HomeScreen = ({ navigation }) => {
  const sampleRecipes = [
    {
      title: "Spaghetti Carbonara",
      image: "https://example.com/spa.jpg",
      ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper"],
      steps: "Cook spaghetti; Fry bacon; Beat eggs; Mix everything together.",
    },
    {
      title: "Chicken Stir Fry",
      image: "https://example.com/stir-fry.jpg",
      ingredients: ["Chicken", "Bell peppers", "Broccoli", "Soy sauce", "Garlic"],
      steps: "Cut chicken and vegetables; Stir-fry everything in a pan.",
    },
    {
      title: "Fired rice",
      image: "https://example.com/stir-fry.jpg",
      ingredients: ["Chicken", "Bell peppers", "Broccoli", "Soy sauce", "Garlic"],
      steps: "Cut chicken and vegetables; Stir-fry everything in a pan.",
    },
    {
      title: "Ghanaian Jollof rice",
      image: "https://example.com/stir-fry.jpg",
      ingredients: ["Chicken", "Bell peppers", "Broccoli", "Soy sauce", "Garlic"],
      steps: "Cut chicken and vegetables; Stir-fry everything in a pan.",
    },
    {
      title: "Chili sauce",
      image: "https://example.com/stir-fry.jpg",
      ingredients: ["Chicken", "Bell peppers", "Broccoli", "Soy sauce", "Garlic"],
      steps: "Cut chicken and vegetables; Stir-fry everything in a pan.",
    },
    {
      title: "French Fries",
      image: "https://example.com/stir-fry.jpg",
      ingredients: ["Chicken", "Bell peppers", "Broccoli", "Soy sauce", "Garlic"],
      steps: "Cut chicken and vegetables; Stir-fry everything in a pan.",
    },
    {
      title: "Greek Asian ",
      image: "https://example.com/stir-fry.jpg",
      ingredients: ["Chicken", "Bell peppers", "Broccoli", "Soy sauce", "Garlic"],
      steps: "Cut chicken and vegetables; Stir-fry everything in a pan.",
    },
  ];
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const query = '*[_type == "recipes"]';
      const fetchedRecipes = await client.fetch(query);
      setRecipes(fetchedRecipes);
    };

    fetchRecipes();
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Search placeholder="Search recipes" />
        <Spacer />
        <Scroll>
          <CatText>Latest Dishes</CatText>
          <Spacer />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recipes.length > 0 ? (
              // If fetched recipes are available, render them
              recipes.map((recipe) => {
                return (
                  <View key={recipe._id}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Detail", {
                          uri: urlFor(recipe.image).url(),
                          ingredients: recipe.ingredients,
                          steps: recipe.steps,
                        });
                      }}
                    >
                      <TopDishesCard
                        title={recipe.title}
                        image={urlFor(recipe.image).url()}
                      />
                    </TouchableOpacity>
                    <Spacer />
                  </View>
                );
              })
            ) : (
              // If fetched recipes are not available, render the sample recipes
              sampleRecipes.map((recipe) => {
                return (
                  <View key={recipe.title}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Detail", {
                          uri: recipe.image,
                          ingredients: recipe.ingredients,
                          steps: recipe.steps,
                        });
                      }}
                    >
                      <TopDishesCard title={recipe.title} image={recipe.image} />
                    </TouchableOpacity>
                    <Spacer />
                  </View>
                );
              })
            )}
          </ScrollView>
          <Spacer />
        </Scroll>
      </Container>
    </SafeAreaView>
  );
};
