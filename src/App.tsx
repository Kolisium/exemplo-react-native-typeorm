import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {getRepository} from 'typeorm';
import DbConnection from './database/DbConnection';
import {User} from './models/User';
import {sincronizar} from './sincronia/Sincronia';
import 'reflect-metadata';

class App extends React.Component {
  async componentDidMount() {
    let conexao = await DbConnection();
    console.log('Conexão: ', conexao);
  }

  /*async runDemo() {
    const user = new User();
    user.username = 'kolisium';
    user.password = '13john13';
    const userRep = getRepository(User);
    let saveUser = await userRep.save(user);
    console.log(saveUser);

    let savedUsers = await userRep.find();
    console.log(savedUsers);
  }*/

  async recuperarUsuarios() {
    let userRepository = getRepository(User);
    let usuariosDb = await userRepository.find();
    console.log('Usuarios salvos: ', usuariosDb);
  }

  async realizarSincronia() {
    console.log('Show');
    sincronizar();
  }

  render() {
    return (
      <>
        <Text>Hello World!</Text>
        <TouchableOpacity onPress={this.realizarSincronia}>
          <Text>Rodar demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.recuperarUsuarios}>
          <Text>Recuperar usuarios</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default App;
