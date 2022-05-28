import 'reflect-metadata';
import { BaseModel } from "Shared/Infrastructure/Data/Model/BaseModel";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'job'})
export class JobModel extends BaseModel {
  @Column({name: 'company', type: 'varchar'})
  public company!: string

  @Column({name: 'description', type: 'varchar'})
  public description!: string

  @Column({name: 'time_init', type: 'varchar'})
  public timeInit!: string

  @Column({name: 'time_end', type: 'varchar'})
  public timeEnd!: string
}