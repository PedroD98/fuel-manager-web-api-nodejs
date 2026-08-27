// src/consumos/entities/consumo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Veiculo } from '../veiculos/veiculo.entity.js';

export enum TipoCombustivel { Diesel = 0, Etanol = 1, Gasolina = 2 }

@Entity('consumos')
export class Consumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ type: 'datetime', nullable: true })
  data: Date;

  @Column('decimal', { precision: 18, scale: 2 })
  valor: number;

  @Column({ type: 'int', enum: TipoCombustivel })
  tipo: TipoCombustivel;

  @ManyToOne(() => Veiculo, veiculo => veiculo.consumos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'veiculoId' })
  veiculo: Veiculo;

  @Column()
  veiculoId: number;
}