import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { FokusButton } from '../app/components/FokusButton';
import { Footer } from '../app/components/Footer';
import { MenuItem } from '../app/components/MenuItem';
import { Timer } from '../app/components/Timer';

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
              <MenuItem
                key={ p.id }
                active={ timerType.id === p.id }
                onPress={ () => setTimerType(p) }
                display={ p.display }
              />
            )
          }
        </View>
        
        <Timer initialValue={ timerType.initialValue }/>

        <FokusButton/>
        
      </View>

      <Footer/>
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
});
