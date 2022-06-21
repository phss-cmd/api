import React, {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const api = async(callback) => {
  const resposta = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
  const parsed = await resposta.json();
  callback(parsed.data)
}

export default function App() {
  const [registro, setRegistros] = useState([]);
  
  useEffect(()=>{
    api(setRegistros);
  },[]);
  
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Yu-Gi-Oh!</Text>
  
        <FlatList
        data={registro}
        keyExtractor={(item) => item.id.toString()}
        numColumns={0}
        renderItem = {({item})=> <Text  style={estilo.item}> Nome: {item.name} {'\n'}  {item.type}  </Text>}
  
        />
   
        <StatusBar style="auto" />
      </View>
    );
  }

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    backgroundColor:'#14213d',
  },
  titulo:{
    fontSize: 20,
    color:'#fca311',
    marginTop:5
  },

  item:{
    flex:1,
    paddingVertical:10,
    textAlign:'left',
    backgroundColor:'#fca311',
    marginBottom:15,
    marginTop:15,
    marginRight:15,
    marginLeft:15,
    paddingLeft:15,
    paddingRight:15,
    fontSize: 20,
    borderRadius:20

  }
});
