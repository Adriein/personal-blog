"use strict";
exports.__esModule = true;
exports.Filter = void 0;
var Order_1 = require("Shared/Domain/Entity/Order");
var Pagination_1 = require("Shared/Domain/Entity/Pagination");
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.paginate = function () {
        var pagination = new Pagination_1.Pagination();
        this.data.set(Pagination_1.Pagination.PAGINATION_FILTER, pagination);
        return pagination;
    };
    Filter.prototype.orderBy = function (field) {
        var order = new Order_1.Order(field);
        this.data.set(Order_1.Order.ORDER_FILTER, order);
        return order;
    };
    return Filter;
}());
exports.Filter = Filter;
