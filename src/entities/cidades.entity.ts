
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CIDADES')
export class CidadesEntity {
   @PrimaryGeneratedColumn({ name: 'ID_CIDADES' })
   idCidades?: number;

   @Column({ name: 'NOME', nullable: true })
   nome?: string;

   @Column({ name: 'ESTADO', nullable: true })
   estado?: string;

   @Column({ name: 'ATIVO', nullable: true })
   ativo?: boolean;

   @Column({ name: 'CODIMPORTACAO', nullable: true })
   codimportacao?: number;

   @Column({ name: 'rowguid', nullable: true })
   rowguid?: string;

   @Column({ name: 'CODALTERNATIVO', nullable: true })
   codalternativo?: string;

   @Column({ name: 'DATAREP', nullable: true })
   datarep?: string;

   @Column({ name: 'DATAULTIMAREP', nullable: true })
   dataultimarep?: string;

   @Column({ name: 'LATITUDE', nullable: true })
   latitude?: number;

   @Column({ name: 'LONGITUDE', nullable: true })
   longitude?: number;

   @Column({ name: 'ID_MICRORREGIAO', nullable: true })
   idMicrorregiao?: number;

   @Column({ name: 'NROANP', nullable: true })
   nroanp?: number;

   @Column({ name: 'NROCLIENTES', nullable: true })
   nroclientes?: number;

   repl?: boolean;
}