
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SISTEMAS')
export class SistemasEntity {
   @PrimaryGeneratedColumn({ name: 'ID_SISTEMAS' })
   idSistemas?: number;

   @Column({ name: 'DESCRICAO', nullable: true })
   descricao?: string;

   @Column({ name: 'ATIVO', nullable: true })
   ativo?: boolean;

   @Column({ name: 'rowguid', nullable: true })
   rowguid?: string;

   @Column({ name: 'ID_PRODUTOS', nullable: true })
   idProdutos?: number;

   @Column({ name: 'INTERNET', nullable: true })
   internet?: boolean;

   @Column({ name: 'ALTERACAO', nullable: true })
   alteracao?: boolean;

   @Column({ name: 'MANUTENCOES', nullable: true })
   manutencoes?: boolean;

   @Column({ name: 'VLRMINIMOCC', nullable: true })
   vlrminimocc?: number;

   @Column({ name: 'VLRMINIMOSC', nullable: true })
   vlrminimosc?: number;

   @Column({ name: 'CERTIFICADOISO', nullable: true })
   certificadoiso?: boolean;

   @Column({ name: 'CODIMPORTACAO', nullable: true })
   codimportacao?: number;

   repl?: boolean;
}