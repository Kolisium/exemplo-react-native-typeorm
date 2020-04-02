import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn({type: 'int'})
  id!: number;

  @Column({type: 'varchar'})
  email!: string;

  @Column({type: 'varchar'})
  senha!: string;

  @Column({type: 'varchar'})
  nome!: string;

  @Column({type: 'varchar'})
  sobrenome!: string;

  @Column({type: 'varchar'})
  dataNascimento!: string;

  @Column({type: 'varchar'})
  sexo!: string;
}
