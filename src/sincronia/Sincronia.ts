import Api from './Api';
import {getRepository} from 'typeorm';
import {User} from '../models/User';

export const sincronizar = async () => {
  console.log('BIIIIRRRRRRRRLL');
  const request = await Api.get('/users/');
  console.log(request);
  let userRepository = getRepository(User);
  if (request.data) {
    request.data.forEach(async element => {
      let response = await userRepository.save(element);
      console.log('Salvando usuario: ', response);
    });
  }
};
