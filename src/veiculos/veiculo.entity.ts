// src/veiculos/entities/veiculo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Consumo } from '../consumos/consumo.entity.js';
import { Usuario } from '../usuarios/usuario.entity.js';

@Entity('veiculos')
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  placa: string;

  @Column()
  anoFabricacao: number;

  @Column()
  anoModelo: number;

  @OneToMany(() => Consumo, consumo => consumo.veiculo, { cascade: true })
  consumos: Consumo[];

  @ManyToMany(() => Usuario, usuario => usuario.veiculos, { onDelete: 'CASCADE' })
  @JoinTable({
    name: 'veiculo_usuarios',
    joinColumn: { name: 'veiculoId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'usuarioId', referencedColumnName: 'id' }
  })
  usuarios: Usuario[];
}