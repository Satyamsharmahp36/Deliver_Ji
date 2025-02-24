import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCards'

const mainCard = ({id,title,decription,featured}) => {
  return (
    <View className='m-2'>
      <View className='flex-row justify-between items-center'>
        <Text className='font-bold text-2xl'>
        {title}
        </Text>
        <ArrowRightIcon color="black"/>
        </View>
        <Text>{decription}</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='p-2'
        >
          <ResturantCard
            id={123}
            imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s'
            title="this is tittle"
            rating={4.5}
            genre="indian"
            address="odc cnid xcq 23"
            short_description='Short Description'
            dishes={[]}
            long={20}
            lat={0}
          />
                    <ResturantCard
            id={123}
            imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzb0IFD9i42VcxKBRLdtzQsQHEKrXWJuqBEw&s'
            title="this is tittle"
            rating={4.5}
            genre="indian"
            address="odc cnid xcq 23"
            short_description='Short Description'
            dishes={[]}
            long={20}
            lat={0}
          />
                    <ResturantCard
            id={123}
            imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEohHFHn6DWDt_ybyLDMjX4ykvt4lvw1kkA&s'
            title="this is tittle"
            rating={4.5}
            genre="indian"
            address="odc cnid xcq 23"
            short_description='Short Description'
            dishes={[]}
            long={20}
            lat={0}
          />
                    <ResturantCard
            id={123}
            imgUrl='https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0='
            title="this is tittle"
            rating={4.5}
            genre="indian"
            address="odc cnid xcq 23"
            short_description='Short Description'
            dishes={[]}
            long={20}
            lat={0}
          />
                    <ResturantCard
            id={123}
            imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s'
            title="this"
            rating={4.1}
            genre="indian"
            address="odc cnid xcq 23"
            short_description='Short Description'
            dishes={[]}
            long={20}
            lat={0}
          />

        </ScrollView>
        
    </View>
  )
}

export default mainCard