"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var Post = /** @class */ (function () {
    function Post() {
    }
    Post_1 = Post;
    Object.defineProperty(Post.prototype, "id", {
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "slug", {
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "title", {
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "markdown", {
        set: function (value) {
            this._markdown = value;
        },
        enumerable: false,
        configurable: true
    });
    Post.build = function (id, slug, title, markdown) {
        var post = new Post_1();
        post._id = id;
        post._slug = slug;
        post._title = title;
        post._markdown = markdown;
        return post;
    };
    var Post_1;
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'id', type: 'varchar' })
    ], Post.prototype, "_id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'slug', type: 'varchar' })
    ], Post.prototype, "_slug");
    __decorate([
        (0, typeorm_1.Column)({ name: 'title', type: 'varchar' })
    ], Post.prototype, "_title");
    __decorate([
        (0, typeorm_1.Column)({ name: 'markdown', type: 'varchar' })
    ], Post.prototype, "_markdown");
    Post = Post_1 = __decorate([
        (0, typeorm_1.Entity)({ name: 'post' })
    ], Post);
    return Post;
}());
exports.Post = Post;
