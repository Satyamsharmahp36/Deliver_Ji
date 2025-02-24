import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold mb-2">Sahayog</Text>
        <Text className="text-sm mb-8">a support</Text>
        <TouchableOpacity
          className="bg-blue-400 py-2 px-4 rounded-full mb-4 w-32"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-400 py-2 px-4 rounded-full w-32"
          onPress={() => navigation.navigate('Register')}
        >
          <Text className="text-white text-center">Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;