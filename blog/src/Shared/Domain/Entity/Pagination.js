"use strict";
exports.__esModule = true;
exports.Pagination = void 0;
var Pagination = /** @class */ (function () {
    function Pagination() {
        this.pagination = new Map();
    }
    Pagination.prototype.setPage = function (page) {
        this.pagination.set(Pagination.PAGE_FILTER, page);
        return this;
    };
    Pagination.prototype.setQuantity = function (quantity) {
        this.pagination.set(Pagination.QUANTITY_FILTER, quantity);
        return this;
    };
    Pagination.prototype.first = function () {
        this.pagination.set(Pagination.QUANTITY_FILTER, 1);
        return this;
    };
    Pagination.prototype.build = function () {
        return this.pagination;
    };
    Pagination.PAGINATION_FILTER = 'pagination';
    Pagination.PAGE_FILTER = 'page';
    Pagination.QUANTITY_FILTER = 'quantity';
    return Pagination;
}());
exports.Pagination = Pagination;
