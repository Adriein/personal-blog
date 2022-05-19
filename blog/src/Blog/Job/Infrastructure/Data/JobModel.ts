import 'reflect-metadata';
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'job'})
export class JobModel {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  private _id: string | undefined

  @Column({name: 'company', type: 'varchar'})
  private _company: string | undefined

  @Column({name: 'description', type: 'varchar'})
  private _description: string | undefined

  @Column({name: 'time_init', type: 'varchar'})
  private _timeInit: string | undefined

  @Column({name: 'time_end', type: 'varchar'})
  private _timeEnd: string | undefined
}