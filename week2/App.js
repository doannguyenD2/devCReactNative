import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View>
      <View name="info-area">
        <View style={styles.icon}>
          <Ionicons name="md-arrow-round-back" size={27} color="#525252" />
          <Entypo name="dots-three-vertical" size={24} color="#525252" />
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
    padding: 25,
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
    fontFamily: 'Montserrat',
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 'x-large',
  },
  textDescription: {
    paddingLeft: 10,
    fontFamily: 'Montserrat',
    color: '#888888',
    fontSize: 'large',
  },
  followButton: {
    padding: 7,
    margin: 10,
    width: 120,
    height: 35,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgb(71,113,246)',
    fontFamily: 'Montserrat',
    fontSize: 'medium',
    borderRadius: 30,
  },
  sendButton: {
    padding: 3,
    margin: 10,
    width: 80,
    height: 35,
    backgroundColor: 'rgb(120,213,250)',
    textAlign: 'center',
    borderRadius: 30,
  },
  buttonArea: {
    flexDirection: 'row',
  },
  infoText: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  }
});
const imgData = [
  { id: 1, imgSource: require('./assets/meow-post1.jpg') },
  { id: 2, imgSource: require('./assets/meow-post2.jpg') },
  { id: 3, imgSource: require('./assets/meow-post3.jpg') },
  { id: 4, imgSource: require('./assets/meow-post4.jpg') },
];
