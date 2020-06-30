import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

function CardGaragem({ navigation }) {
  return(
    <View style={styles.cardGaragem}>
      <View style={ styles.containerImageGarage }>
        <Image
        source={require('../../assets/garagem.png')}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.headerInfo}>
          <Text style={styles.textTitle}>Garagem completa</Text>

          <Icon name="heart-o" size={18} color="#000" />
        </View>

        <View style={styles.adressInfo}>
          <Text style={styles.textAdress}>Av Juscelino Kubitschek, Santa Clara, Viçosa - MG</Text>
        </View>

        <View style={styles.valueInfo}>
          <Text style={styles.textValue}>15,00/Dia</Text>

        </View>
        <View style={styles.bottomInfo}>
          <View style={styles.rateInfo}>
            <Icon name="star-o" size={18} color="#000" />
            <Text>4,5</Text>
          </View>
          <View>
            <TouchableOpacity
              style={ styles.btnDetalhes}
              onPress={() => navigation.navigate('Garage')}
            >
              <Text style={styles.textDetalhes}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function SearchBar() {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.searchContainer}>
      <Icon style={styles.searchIcon} name="search" size={18} color="#000" />
      <TextInput
         style={styles.searchBar}
         onChangeText={text => onChangeText(text)}
         value={value}
         placeholder="Encontre uma garagem"
      />
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <SearchBar />
      <ScrollView
        style={styles.scrollViewHome}
        showsVerticalScrollIndicator={false}
      >

        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
        <CardGaragem navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
