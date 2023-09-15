import {ScrollView , View} from 'react-native'
import React from 'react'
import Search from '../../public/components/Parts/Search'
import Categories from '../../public/components/Parts/Categories'
import Recommended from '../../public/components/Parts/Recommended'
import indexStyles from '../../app/indexStyle'
import PopularCourses from '../../public/components/Parts/PopularCourses'

const ContentScreen = () => {
  return (
    <ScrollView style={[indexStyles.BGwhite]}>
      <Search/>
      <Categories/>
      <Recommended/>
      <PopularCourses/>
    </ScrollView>
  )
}

export default ContentScreen