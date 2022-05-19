"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Post_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const typeorm_1 = require("typeorm");
let Post = Post_1 = class Post {
    set id(value) {
        this._id = value;
    }
    set slug(value) {
        this._slug = value;
    }
    set title(value) {
        this._title = value;
    }
    set markdown(value) {
        this._markdown = value;
    }
    static build(id, slug, title, markdown) {
        const post = new Post_1();
        post._id = id;
        post._slug = slug;
        post._title = title;
        post._markdown = markdown;
        return post;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id', type: 'varchar' }),
    __metadata("design:type", Object)
], Post.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'slug', type: 'varchar' }),
    __metadata("design:type", Object)
], Post.prototype, "_slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', type: 'varchar' }),
    __metadata("design:type", Object)
], Post.prototype, "_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'markdown', type: 'varchar' }),
    __metadata("design:type", Object)
], Post.prototype, "_markdown", void 0);
Post = Post_1 = __decorate([
    (0, typeorm_1.Entity)({ name: 'post' })
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map