import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'
import indexStyles from '../../../app/indexStyle'

const Search = () => {
  const [search, setSearch] = useState('')
  const handleSearch =()=>{
    console.log(search)
  }
  return (
    <View style={indexStyles.rowCont}>
      <SearchBar
        style={indexStyles.inp2}
        placeholder="Search..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        onSubmitEditing={handleSearch}
        platform="default" // 'ios' or 'android'
        cancelButtonTitle="X" // Text for the cancel button
        clearIcon={true} // Set to 'true' to show clear icon
      />
    </View> 
  )
}

export default Search