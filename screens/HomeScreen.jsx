import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { COLORS } from "../utils/theme";
import { useDispatch } from "react-redux";
import { CMC_API_KEY } from "@env";
import Listing from "../components/Listing";
import { useSelector } from "react-redux";
import { selectNOfListings } from "../slices/navSlice";

const HomeScreen = () => {
  const [apiData, setApiData] = useState();

  let nOfListings = useSelector(selectNOfListings);

  console.log(`${nOfListings} LISTINGSSSS`);

  useEffect(() => {
    if (nOfListings >= 7) {
      nOfListings += 2;
    }
    const getCMCData = async () => {
      console.log("fetching...");
      fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${CMC_API_KEY}&limit=${nOfListings}&start=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
        });
    };
    getCMCData();
  }, [nOfListings]);

  return (
    <SafeAreaView>
      <View>
        <Text
          style={[tw`text-center p-5 text-[30px]`, { color: COLORS.primary }]}
        >
          Live Crypto Prizes
        </Text>
      </View>
      <View style={tw`flex-row justify-between p-10`}>
        <Text style={tw`text-xl`}>Name</Text>
        <Text style={tw`text-xl`}>Prize</Text>
      </View>

      <ScrollView>
        {apiData ? (
          apiData.data.map((item, key) => (
            <Listing
              symbol={item.symbol}
              price={item.quote.USD.price}
              key={key}
            />
          ))
        ) : (
          <></>
        )}
      </ScrollView>

      <StatusBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
