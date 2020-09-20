import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View>
      <View name="info-area">
        <View style={styles.icon}>
          <Ionicons name="md-arrow-round-back" size={27} color="#525252" />
          <Entypo name="dots-three-vertical" size={27} color="#525252" />
        </View>
        <View name="avatar" style={styles.avatarArea}>
          <Image style={styles.avatar} source={require('./assets/meow-avatar.jpg')} />
          <View name='text'>
            <Text style={styles.textName}>Meow meow</Text>
            <Text style={styles.textDescription}>This is meow</Text>
            <View name='button' style={styles.buttonArea}>
              <Text style={styles.followButton}>Follow</Text>
              <MaterialIcons style={styles.sendButton} name="send" size={27} color="white" />
            </View>
          </View>
        </View>
        <View name="info-text" style={styles.infoText}>
          <View name="detail-info-text" style={styles.detailInfoText}>
            <Text style={styles.numberInfoText}>10</Text>
            <Text style={styles.descriptionInfoText}>Post</Text>
          </View>
          <View name="detail-info-text" style={styles.detailInfoText}>
            <Text style={styles.numberInfoText}>100k</Text>
            <Text style={styles.descriptionInfoText}>Followers</Text>
          </View>
          <View name="detail-info-text" style={styles.detailInfoText}>
            <Text style={styles.numberInfoText}>100</Text>
            <Text style={styles.descriptionInfoText}>Following</Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.imageArea}>
        <View style={{ flexDirection: 'column', justifyContent: "flex-start" }}>
          {imgData.slice(0, centerImgData).map(e => {
            return <Image source={e.imgSource} style={{
              margin: 5,
              width: e.width,
              height: e.height,
              borderRadius: 10,
            }} resizeMode={'cover'} />
          })}
        </View>
        <View style={{ flexDirection: 'column', justifyContent: "flex-start" }}>
          {imgData.slice(centerImgData).map(e => {
            return <Image source={e.imgSource} style={{
              margin: 5,
              width: e.width,
              height: e.height,
              borderRadius: 10,
            }} resizeMode={'cover'} />
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarArea: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  textName: {
    padding: 10,
    paddingLeft: 20,
    fontFamily: 'Montserrat',
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 'x-large',
  },
  textDescription: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'Montserrat',
    color: '#888888',
    fontSize: 'large',
  },
  followButton: {
    flex: 7,
    padding: 7,
    margin: 5,
    height: 35,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgb(71,113,246)',
    fontFamily: 'Montserrat',
    fontSize: 'medium',
    borderRadius: 30,
  },
  sendButton: {
    flex: 5,
    padding: 3,
    margin: 5,
    height: 35,
    backgroundColor: 'rgb(120,213,250)',
    textAlign: 'center',
    borderRadius: 30,
  },
  buttonArea: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  infoText: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  detailInfoText: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  numberInfoText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 'x-large',
  },
  descriptionInfoText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#888888',
    fontSize: 'medium',
  },
  imageArea: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  imagePost: {
    margin: 5,
    width: 150,
    height: 150,
    borderRadius: 10,
  }
});
const imgData = [
  { id: 1, imgSource: require('./assets/meow-post1.jpg'), width: 150, height: 290 },
  { id: 2, imgSource: require('./assets/meow-post2.jpg'), width: 150, height: 150 },
  { id: 3, imgSource: require('./assets/meow-post3.jpg'), width: 150, height: 225 },
  { id: 4, imgSource: require('./assets/meow-post4.jpg'), width: 150, height: 112 },
  { id: 5, imgSource: require('./assets/meow-mainpost.jpg'), width: 150, height: 150 },
];
const centerImgData = Math.floor(imgData.length / 2);