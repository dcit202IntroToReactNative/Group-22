import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import { DetailScroll, ArrowHolder, CatHolder, SpacerLess, DescriptionButton, DescriptionButtonHolder, ButtonText } from "./style/styles.style";
import { Ionicons } from "expo-vector-icons";

export const DetailScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState(false);

  const { uri, ingredients, steps } = route.params;

  return (
    <SafeAreaView>
      <DetailScroll>
        <ArrowHolder>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="md-arrow-down" size={30} color="grey" />
          </TouchableOpacity>
        </ArrowHolder>
        <Image source={{ uri }} style={{ width: 200, height: 200 }} />
        <SpacerLess />
        {description ? (
          <CatHolder>Steps</CatHolder>
        ) : (
          <CatHolder>Ingredients ({ingredients.length})</CatHolder>
        )}
        <SpacerLess />
        {description ? (
          <Text>{steps}</Text>
        ) : (
          <>
            {ingredients.map((ingredient, index) => (
              <View key={index}>
                <Text>{ingredient}</Text>
                <SpacerLess />
              </View>
            ))}
          </>
        )}
        <SpacerLess />
        <DescriptionButtonHolder>
          <TouchableOpacity
            onPress={() => {
              setDescription(!description);
            }}
          >
            <DescriptionButton>
              <ButtonText>{description ? "Ingredients" : "Steps"}</ButtonText>
            </DescriptionButton>
          </TouchableOpacity>
        </DescriptionButtonHolder>
      </DetailScroll>
    </SafeAreaView>
  );
};
