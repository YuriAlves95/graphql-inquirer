
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SISTEMASCLIENTES')
export class SistemasclientesEntity {
   @PrimaryGeneratedColumn({ name: 'ID_SISTEMASCLIENTES' })
   idSistemasclientes?: number;

   @Column({ name: 'ID_ENTIDADES', nullable: true })
   idEntidades?: number;

   @Column({ name: 'ID_SISTEMAS', nullable: true })
   idSistemas?: number;

   @Column({ name: 'VALOR', nullable: true })
   valor?: number;

   @Column({ name: 'VLRREPRESENTANTE', nullable: true })
   vlrrepresentante?: number;

   @Column({ name: 'MAC', nullable: true })
   mac?: string;

   @Column({ name: 'ID_PLANOSISTEMAS', nullable: true })
   idPlanosistemas?: number;

   @Column({ name: 'DTACOBRANCA', nullable: true })
   dtacobranca?: string;

   @Column({ name: 'DTAPRORROGACAO', nullable: true })
   dtaprorrogacao?: string;

   @Column({ name: 'DTACONTRATO', nullable: true })
   dtacontrato?: string;

   @Column({ name: 'ATIVO', nullable: true })
   ativo?: boolean;

   @Column({ name: 'DTAPROXCOBRANCA', nullable: true })
   dtaproxcobranca?: string;

   @Column({ name: 'DTADEVOLUCAOCONTRATO', nullable: true })
   dtadevolucaocontrato?: string;

   @Column({ name: 'DATAREP', nullable: true })
   datarep?: string;

   @Column({ name: 'DATAULTIMAREP', nullable: true })
   dataultimarep?: string;

   @Column({ name: 'DTAREAJUSTE', nullable: true })
   dtareajuste?: string;

   @Column({ name: 'ID_PRODUTOS', nullable: true })
   idProdutos?: number;

   @Column({ name: 'DATALICENCAMOBILE', nullable: true })
   datalicencamobile?: string;

   repl?: boolean;
}