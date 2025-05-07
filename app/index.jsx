import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Imagem foco.png')}/>
      <View style={styles.actions}>
        <View style={styles.menu}>
          <Pressable style={styles.menuItemTextActive}>
            <Text style={styles.menuItemText}>Foco</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.menuItemText}>Pausa Curta</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.menuItemText}>Pausa Longa</Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>25:00</Text>
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
