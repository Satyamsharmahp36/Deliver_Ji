import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatagoryCard from './CatagoryCard'

export default function Category() {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    className='p-4'
    >
      <CatagoryCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJfzFjVVumyxfxiNZNAF6NmTKPm5IgOOQgA&s' title='cata' />
      <CatagoryCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXTedOTjFB2yhVRNIylkhk4sZOIgmk6XZ4A&s' title='cata2'/>
      <CatagoryCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVRxmqDmjnj1z-0t7eKDIHljusT2dEG9OnQ&s' title='cata3' />
      <CatagoryCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQKcan7GuzM6ocFr6BhslWbRDOjJExMBh0g&s' title='cata4' />
      <CatagoryCard imgUrl='https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' title='cata5' />
    </ScrollView>
      
   
  )
}