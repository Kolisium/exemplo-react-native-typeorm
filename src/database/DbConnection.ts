import {createConnection} from 'typeorm';
import {User} from '../models/User';

const DbConnection = () => {
  return createConnection({
    type: 'react-native',
    database: 'test',
    location: 'default',
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [User],
  });
};

export default DbConnection;
