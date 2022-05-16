import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'job'})
export class Job {
  @PrimaryColumn({name: 'id'})
  private _id: string | undefined

  @Column({name: 'name'})
  private _name: string | undefined

  @Column({name: 'title'})
  private _title: string | undefined

  @Column({name: 'markdown'})
  private _markdown: string | undefined

}