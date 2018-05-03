'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBookingsTraveler = exports.createBooking = exports.viewBookingTravelerLogin = undefined;

var _bookings = require('../managers/bookings');

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Booking = _models2.default.Booking;


var viewBookingTravelerLogin = function viewBookingTravelerLogin(req, res) {
    (0, _bookings.getBookingTravelerLogin)(req.user.id, req.params.id).then(function (response) {
        res.json(response).status(200);
    }).catch(function (err) {
        res.json(err).status(400);
    });
};
var createBooking = function createBooking(req, res) {
    (0, _bookings.createBookingDB)(req.body, req.user.id).then(function (response) {
        res.json(response).status(201);
    }).catch(function (err) {
        res.json(err).status(400);
    });
};

var getBookingsTraveler = function getBookingsTraveler(req, res) {
    (0, _bookings.getBookingsTravelerDB)(req.user.id).then(function (response) {
        res.json(response).status(200);
    }).catch(function (err) {
        res.json(err).status(400);
    });
};

exports.viewBookingTravelerLogin = viewBookingTravelerLogin;
exports.createBooking = createBooking;
exports.getBookingsTraveler = getBookingsTraveler;