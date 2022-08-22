import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import NumericInput from "react-native-numeric-input";
import { setNumberOfListings } from "../slices/navSlice";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState(6);

  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-center p-10 text-[30px]`}>Settings</Text>
      </View>

      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-lg p-5`}>Number of Cryptos ?</Text>
        <View style={tw`p-5`}>
          <NumericInput
            onChange={(value) => {
              setVal(value);
              dispatch(setNumberOfListings(value));
            }}
            rightButtonBackgroundColor="#A9A9A9"
            leftButtonBackgroundColor="#A9A9A9"
            rounded
            minValue={0}
            maxValue={15}
            value={val}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
