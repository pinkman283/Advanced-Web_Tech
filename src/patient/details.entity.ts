import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class details
{
   @PrimaryGeneratedColumn()
   id: number
   @Column({length:15})
   name: string
}