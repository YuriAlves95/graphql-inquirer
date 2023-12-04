
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OPERADORES')
export class OperadoresEntity {
   @PrimaryGeneratedColumn({ name: 'ID_OPERADORES' })
   idOperadores?: number;

   @Column({ name: 'NOME', nullable: true })
   nome?: string;

   @Column({ name: 'SENHA', nullable: true })
   senha?: string;
}