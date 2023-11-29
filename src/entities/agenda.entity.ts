
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AGENDA')
export class AgendaEntity {
   @PrimaryGeneratedColumn({ name: 'ID_AGENDA' })
   idAgenda?: number;

   @Column({ name: 'ID_OPERADORES', nullable: true })
   idOperadores?: number;

   @Column({ name: 'DATA', nullable: true })
   data?: string;

   @Column({ name: 'TITULO', nullable: true })
   titulo?: string;

   @Column({ name: 'CONTEUDO', nullable: true })
   conteudo?: string;

   @Column({ name: 'OK', nullable: true })
   ok?: boolean;

   @Column({ name: 'rowguid', nullable: true })
   rowguid?: string;

   repl?: boolean;
}