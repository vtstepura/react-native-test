import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

class ScripApp extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <View style={{...StyleSheet.absoluteFill}}>
          <Image
            source={require('../../assets/scrip.jpg')}
            style={{ flex: 1, height: null, width: null}}
            />
        </View>

        <View style={{ height: height / 3, justifyContent: 'center'}}>
          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>SIGN IN</Text>
          </View>

          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>SIGN UP</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ScripApp

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
})
