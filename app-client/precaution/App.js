import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
      
        <Text style={{fontFamily:'sans-serif',color:"white", fontSize: 15,}}>PREVENTION</Text>
     </View>

      <Text style={styles.questionText}>{"Comment se proteger du".toUpperCase()}
      <Text style={{fontWeight: 'bold', fontSize: 70,textAlign:'center',}}>{'\n'}COVID-19
      </Text>
      </Text>
     
      <View style={styles.column}> 

        <View style={styles.row}>
          <Text style={styles.answerText}>
          Nettoyez régulièrement et soigneusement ses mains</Text>
          <Image 
        style={{width:70, height:windowHeight*0.08}}
        source={require('./assets/11.png')}/>
         </View>

         <View style={styles.row}>
         <Text style={styles.answerText}>Évitez de toucher les yeux,{"\n"}le nez et la bouche</Text>
          <Image 
        style={{width:70, height:windowHeight*0.085}}
        source={require('./assets/22.png')}/>
          </View>

          <View style={styles.row}>
          <Text style={styles.answerText}>Maintenir entre vous une{"\n"}distance d'au moins 1 mètre</Text>
          <Image 
        style={{width:70, height:windowHeight*0.08}}
        source={require('./assets/33.png')}/>
          </View>

          <View style={styles.row}>
            <Text style={styles.answerText}>
        Limiter ses déplacements,{"\n"}et éviter les ressemblement</Text>
        <Image 
        style={{width:70, height:windowHeight*0.08}}
        source={require('./assets/44.png')}/>
      </View>
     </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2294E3',
    alignItems: 'center',
    margin:1,
  
  },

  questionText: {
    fontSize: 30,
    marginStart:5,
    marginEnd: 5,
    alignContent:"center",
    alignItems:"center",
    textAlign:"center",
    color: "white",
    marginBottom:windowHeight*0.04,
    fontFamily:'sans-serif-condensed',
  },
  answerText: {
    /*marginBottom: 10,*/
    /*marginStart:winSize.width*0.05,*/
    fontSize: 20,
    /*lineHeight: 25,*/
    color: "white",
    textAlign:"left",
    fontWeight: 'bold',
    fontFamily:'sans-serif-condensed',
    alignItems:"center",
    flex:2,
   
  },
  column:{
    flex: 1, 
    flexDirection: 'column',
    alignItems:'flex-start',
    width:windowWidth*0.9,
    marginBottom:windowHeight*0.1,
    
  },
  row:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    alignContent:"center",
   
  },
  header:{
   marginBottom:windowHeight*0.04,
   marginTop:windowHeight*0.04,
   
  },
});
