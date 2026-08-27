// src/usuarios/entities/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Veiculo } from '../veiculos/veiculo.entity.js';


export enum PerfilUsuario { Admin = 0, Usuario = 1 }

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Exclude() // Garante que a senha nunca seja serializada no JSON de resposta
  @Column()
  password: string;

  @Column({ type: 'int', enum: PerfilUsuario })
  perfil: PerfilUsuario;

  @ManyToMany(() => Veiculo, veiculo => veiculo.usuarios)
  veiculos: Veiculo[];
}