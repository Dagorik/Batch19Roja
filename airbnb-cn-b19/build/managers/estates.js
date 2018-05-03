"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEstateDB = exports.updateEstateDB = exports.createEstateDB = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Estate = _models2.default.Estate,
    Address = _models2.default.Address,
    Service = _models2.default.Service,
    User = _models2.default.User;


var getEstateDB = function getEstateDB(id) {

    return new Promise(function (resolve, reject) {

        Estate.find({ where: { id: id }, include: [Address, Service, User] }).then(function (estate) {
            resolve(estate);
        }).catch(function (err) {
            reject(err);
        });
    });
};

var createEstateDB = function createEstateDB(body, user) {

    return new Promise(function (resolve, reject) {

        Estate.create({
            estate_name: body.estate_name,
            description: body.description,
            price: body.price,
            available: true,
            UserId: user
        }).then(function (estate) {
            body.address["EstateId"] = estate.id;
            Address.create(body.address).then(function (address) {
                body.services["EstateId"] = estate.id;
                Service.create(body.services).then(function (service) {
                    getEstateDB(estate.id).then(function (response) {
                        resolve(response);
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        }).catch(function (err) {
            reject(err);
        });
    });
};

var updateEstateDB = function updateEstateDB(body, estate, user) {

    return new Promise(function (resolve, reject) {
        Estate.update({
            estate_name: body.estate_name,
            description: body.description,
            price: body.price
        }, {
            where: {
                id: estate,
                UserId: user
            }
        }).then(function (est) {
            Address.update({
                calle: body.address.calle,
                num_ext: body.address.num_ext,
                num_int: body.address.num_int,
                colonia: body.address.colonia,
                ciudad: body.address.ciudad,
                estado: body.address.estado,
                pais: body.address.pais,
                cp: body.address.cp,
                ref: body.address.ref

            }, {
                where: {
                    EstateId: estate
                }
            }).then(function (address) {
                Service.update({
                    wifi: body.wifi,
                    bathrooms: body.bathrooms,
                    estufa: body.estufa,
                    parking: body.parking,
                    beds: body.beds,
                    refri: body.refri,
                    tv: body.tv

                }, {
                    where: {
                        EstateId: estate
                    }
                }).then(function (service) {
                    getEstateDB(estate).then(function (response) {
                        resolve(response);
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        }).catch(function (err) {
            reject(err);
        });
    });
};

exports.createEstateDB = createEstateDB;
exports.updateEstateDB = updateEstateDB;
exports.getEstateDB = getEstateDB;