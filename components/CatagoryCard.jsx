import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CatagoryCard = ({imgUrl,title}) => {
  return (
    
    <TouchableOpacity className='m-2'>
      
      <Image
        source={{
            uri: imgUrl
        }}
        className='h-20 w-20 rounded'
        />
  
      <Text className='font-bold'>{title}</Text>
    </TouchableOpacity>
   
  )
}

export default CatagoryCard