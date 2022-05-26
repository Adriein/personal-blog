import { PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseModel {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  public id!: string

  @CreateDateColumn({name: 'created_at', type: 'timestamp', precision: 0})
  public createdAt!: Date

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp', precision: 0})
  public updatedAt!: Date
}