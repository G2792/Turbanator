import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import TurbanatorCard from "./TurbanatorCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [turbanators, setTurbanators] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
            ...,
           turbanators[]->{
             ...,
             styles[]->,
             type-> {
                name
             }
           },
          }[0]
        `,
        { id }
      )
      .then((data) => {
        setTurbanators(data?.turbanators);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {turbanators?.map((turbanator) => (
          <TurbanatorCard
            key={turbanator._id}
            id={turbanator._id}
            imgUrl={turbanator.image}
            address={turbanator.address}
            title={turbanator.name}
            style={turbanator.style}
            rating={turbanator.rating}
            short_description={turbanator.short_description}
            genre={turbanator.type?.name}
            long={turbanator.long}
            lat={turbanator.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
