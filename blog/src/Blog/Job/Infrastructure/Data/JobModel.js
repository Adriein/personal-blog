"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobModel = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var JobModel = /** @class */ (function () {
    function JobModel() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'id', type: 'varchar' })
    ], JobModel.prototype, "_id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'company', type: 'varchar' })
    ], JobModel.prototype, "_company");
    __decorate([
        (0, typeorm_1.Column)({ name: 'description', type: 'varchar' })
    ], JobModel.prototype, "_description");
    __decorate([
        (0, typeorm_1.Column)({ name: 'time_init', type: 'varchar' })
    ], JobModel.prototype, "_timeInit");
    __decorate([
        (0, typeorm_1.Column)({ name: 'time_end', type: 'varchar' })
    ], JobModel.prototype, "_timeEnd");
    JobModel = __decorate([
        (0, typeorm_1.Entity)({ name: 'job' })
    ], JobModel);
    return JobModel;
}());
exports.JobModel = JobModel;
