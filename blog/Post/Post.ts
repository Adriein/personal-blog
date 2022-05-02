import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export default class Post {
  @PrimaryColumn()
  private _id: string

  @Column()
  private _slug: string

  @Column()
  private _title: string

  @Column()
  private _markdown: string

  constructor(id: string, slug: string, title: string, markdown: string) {
    this._id = id;
  }


  set id(value: string) {
    this._id = value;
  }

  set slug(value: string) {
    this._slug = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set markdown(value: string) {
    this._markdown = value;
  }
}