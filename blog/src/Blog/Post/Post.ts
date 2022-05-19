import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'post'})
export class Post {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  private _id: string | undefined

  @Column({name: 'slug', type: 'varchar'})
  private _slug: string | undefined

  @Column({name: 'title', type: 'varchar'})
  private _title: string | undefined

  @Column({name: 'markdown', type: 'varchar'})
  private _markdown: string | undefined

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

  public static build(id: string, slug: string, title: string, markdown: string): Post {
    const post = new Post();

    post._id = id;
    post._slug = slug;
    post._title = title;
    post._markdown = markdown;

    return post;
  }
}