"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
var bike_1 = require("./bike");
var user_1 = require("./user");
var Rent = /** @class */ (function () {
    function Rent(bike, user, dateFrom, dateTo, dateReturned) {
        this.bike = bike;
        this.user = user;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateReturned = dateReturned;
    }
    Rent.create = function (rent, bike, user, startDate, endDate) {
        var canCreate = Rent.canRent(rent, startDate, endDate);
        if (canCreate) {
            return new Rent(bike, user, startDate, endDate);
        }
        throw new Error('Overlapping dates for this rent');
    };
    Rent.canRent = function (rent, startDate, endDate) {
        return !rent.some(function (rent) {
            return startDate <= rent.dateTo && endDate >= rent.dateFrom;
        });
    };
    return Rent;
}());
exports.Rent = Rent;
var bike = new bike_1.Bike('Bike1', 'mountain', 30, 100, 100.5, 'my desc', 5, []);
var user = new user_1.User('teste', 'teste@gmal.com', '123');
var today = new Date();
var twodaysAfterTomorrow = new Date();
var twodays = new Date();
var tomorrow = new Date();
var twoDaysLater = new Date();
twoDaysLater.setDate(twoDaysLater.getDate() + 2);
tomorrow.setDate(tomorrow.getDate() + 1);
twodaysAfterTomorrow.setDate(twodaysAfterTomorrow.getDate() + 2);
var rent1 = Rent.create([], bike, user, today, twoDaysLater);
var rent2 = Rent.create([rent1], bike, user, tomorrow, twodaysAfterTomorrow);
console.log(rent1);
console.log(rent2);
