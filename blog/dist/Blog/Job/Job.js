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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
let Job = class Job {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id', type: 'varchar' }),
    __metadata("design:type", Object)
], Job.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'company', type: 'varchar' }),
    __metadata("design:type", Object)
], Job.prototype, "_company", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'varchar' }),
    __metadata("design:type", Object)
], Job.prototype, "_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'time_init', type: 'varchar' }),
    __metadata("design:type", Object)
], Job.prototype, "_timeInit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'time_end', type: 'varchar' }),
    __metadata("design:type", Object)
], Job.prototype, "_timeEnd", void 0);
Job = __decorate([
    (0, typeorm_1.Entity)({ name: 'job' })
], Job);
exports.Job = Job;
//# sourceMappingURL=Job.js.map