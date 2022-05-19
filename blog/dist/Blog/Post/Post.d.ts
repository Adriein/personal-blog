export declare class Post {
    private _id;
    private _slug;
    private _title;
    private _markdown;
    set id(value: string);
    set slug(value: string);
    set title(value: string);
    set markdown(value: string);
    static build(id: string, slug: string, title: string, markdown: string): Post;
}
