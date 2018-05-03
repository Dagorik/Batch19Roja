'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBookingsTravelerDB = exports.createBookingDB = exports.getBookingTravelerLogin = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Estate = _models2.default.Estate,
    Address = _models2.default.Address,
    Service = _models2.default.Service,
    User = _models2.default.User,
    Booking = _models2.default.Booking;


var getBookingTravelerLogin = function getBookingTravelerLogin(bookingId, userId) {
    return new Promise(function (resolve, reject) {
        console.log(bookingId);
        console.log(userId);
        Booking.find({ where: { UserId: userId, id: bookingId },
            include: [{ model: Estate,
                include: [Address, Service, { model: User, attributes: ['first_name', 'lastname', 'email', 'phone_number', 'profile_image'] }] }] }).then(function (booking) {
            resolve(booking);
        }).catch(function (err) {
            reject(err);
        });
    });
};

var createBookingDB = function createBookingDB(body, user) {
    return new Promise(function (resolve, reject) {
        Booking.create({
            guest: body.guest,
            checkin: body.checkin,
            checkout: body.checkout,
            totalprice: body.totalprice,
            EstateId: body.EstateId,
            UserId: user
        }).then(function (booking) {
            resolve(booking);
        }).catch(function (err) {
            reject(err);
        });
    });
};

var getBookingsTravelerDB = function getBookingsTravelerDB(userId) {
    return new Promise(function (resolve, reject) {
        Booking.find({ where: { UserId: userId },
            include: [{ model: Estate, attributes: ['estate_name'],
                include: [{ model: Address, attributes: ['pais', 'ciudad'] }, { model: User, attributes: ['first_name', 'profile_image'] }] }] }).then(function (booking) {
            resolve(booking);
        }).catch(function (err) {
            reject(err);
        });
    });
};

exports.getBookingTravelerLogin = getBookingTravelerLogin;
exports.createBookingDB = createBookingDB;
exports.getBookingsTravelerDB = getBookingsTravelerDB;