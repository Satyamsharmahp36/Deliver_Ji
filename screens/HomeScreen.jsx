import { View, Text ,Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView  } from 'react-native-safe-area-context';
import {AdjustmentsVerticalIcon, ChevronDownIcon, ServerIcon, UserIcon} from 'react-native-heroicons/outline';
import Category from '../components/Category';
import MainCard from '../components/MainCard';
const HomeScreen = () => {
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
    <SafeAreaView className='bg-slate-300 mb-36'>
      <View className='py-3 pt-4 '>
        <View className="pb-3 flex-row items-center mx-2 space-x-2">
        <Image
        source={{
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1mzVlZsasZR6f65ult0AUanke-m2tO3uzjOCHUW-iw&s'
        }}
        className='h-12 w-12 flex-row rounded-3xl bg-slate-700'
        />
        
        <View className='flex-1'>
          <Text>Deliver Now</Text>
          <View className='flex-row items-center'>
          <Text className='font-extrabold text-xl'>
          Current Location
          </Text>
          <ChevronDownIcon size={20} color='black'/>
          
          </View>
        </View>
        <UserIcon size={28} color='black' />
        </View>
        <View className='flex-row justify-between items-center mx-2'>
            <View className='flex-row bg-white rounded-xl items-center '>
              <Text className='px-1'>&#128269;</Text>
              <TextInput placeholder='Restaurants and DriveAways'
              keyboardType='default' className='px-1 h-10'/>
            </View>
            <AdjustmentsVerticalIcon color='black'/>
        </View>
        </View>
        <ScrollView className='bg-slate-100'>
          <Category/>

          <MainCard
          id="1"
           title='Featured 1'
           decription='This is description 1'
           featured="this is featured 1"
          />

          <MainCard
          id='2'
           title='Featured 2 '
           decription='This is description 2'
           featured="this is featured 2"
          />

          <MainCard
          id='3'
           title='Featured 3'
           decription='This is description 3'
           featured="this is featured 3"
          />
        </ScrollView>
          

    </SafeAreaView>
  )
}

export default HomeScreen