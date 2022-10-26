import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'

const App = () => {
  const [ state , setState]= useState({
    pickupCords :{
      latitude: 37.3317876,
      longitude: -122.0054812,
    },
    droplocationCords :{
      latitude: 37.771707,
      longitude: -122.4053769,
    }
  })
  return (
    <View style = {styles.container}>
      <MapView
      style={StyleSheet.absoluteFill}
    initialRegion={{
      latitude: 25.5522,
      longitude: 85.2127,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})