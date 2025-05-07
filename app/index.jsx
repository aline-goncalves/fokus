import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('../assets/images/Imagem foco.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('../assets/images/Imagem descanso curto.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('../assets/images/Imagem descanso longo.png'),
    display: 'Pausa longa'
  },
]

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image}/>
      
      <View style={styles.actions}>
        <View style={styles.menu}>
          {
            pomodoro.map(p => 
              <Pressable key={p.id} 
                style={ timerType.id === p.id ? styles.menuItemTextActive : null }
                onPress={ () => setTimerType(p)}>
                <Text style={styles.menuItemText}>{p.display}</Text>
              </Pressable>
            )
          }
        </View>
        
        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', {minute:'2-digit', second:'2-digit'})}</Text>
        
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 40
  },
  actions:{
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#1B293B',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItemText:{
    fontSize: 12.5,
    color: '#fff',
    padding: 8,
  },
  menuItemTextActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  timer:{
    fontSize:54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#8872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText:{
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer:{
    width: '80%',
  },
  footerText:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
});
