import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const images = {
  BTC: require("../images/BTC.png"),
  ETH: require("../images/ETH.png"),
  USDT: require("../images/USDT.png"),
  USDC: require("../images/USDC.png"),
  BNB: require("../images/BNB.png"),
  BUSD: require("../images/BUSD.png"),
  XRP: require("../images/XRP.png"),
  ADA: require("../images/ADA.png"),
  SOL: require("../images/SOL.png"),
  DOGE: require("../images/DOGE.png"),
  DOT: require("../images/DOT.png"),
  SHIB: require("../images/SHIBA.png"),
  DAI: require("../images/DAI.png"),
  MATIC: require("../images/MATIC.png"),
  AVAX: require("../images/AVAX.png"),
};

const Listing = ({ symbol, price }) => {
  return (
    <View style={tw`flex-row justify-between p-6`}>
      <View style={tw`flex-row items-center`}>
        <Text style={tw`mr-5 text-lg`}>
          {symbol.length < 4 ? symbol + "  " : symbol}
        </Text>
        <Image source={images[symbol]} style={{ width: 40, height: 40 }} />
      </View>

      <Text>{price.toFixed(6)}</Text>
    </View>
  );
};

export default Listing;
