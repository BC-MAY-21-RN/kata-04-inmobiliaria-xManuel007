import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card } from '../components'
import {House} from '../library/data/DataList.json'

export const Home = (props) => {
  
  return (
      <ScrollView>
        <Card props={props} list={House}/>
      </ScrollView>
  )
}


