import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity className='bg-gray-300 m-2 p-2 rounded'>
      <Image source={{
        uri: imgUrl
      }} className='w-50 h-20 rounded' />
      <Text className='font-bold'>{title}</Text>
      <View className='flex-row justify-start items-center'>
        <StarIcon color="green" size={20}/>
        <Text>
          <Text> {rating} </Text> {genre}</Text>
      </View>
      <View>
        <Text>Near by :- {address}</Text>
      </View>

    </TouchableOpacity>
    
  )
}

export default ResturantCard