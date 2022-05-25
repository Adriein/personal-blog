import { BaseModel } from "Shared/Infrastructure/Data/Model/BaseModel";
import { Column, Entity } from "typeorm";

@Entity({name: 'user'})
export class UserModel extends BaseModel {
  @Column({name: 'name', type: 'varchar'})
  public name!: string;

  @Column({name: 'email', type: 'varchar'})
  public email!: string;

  @Column({name: 'password', type: 'varchar'})
  public password!: string;
}