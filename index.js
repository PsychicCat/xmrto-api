"use strict";
const Promise = require('bluebird');
const PromiseObject = require('promise-object')(Promise);
const rp = require('request-promise');

const xmrTo = PromiseObject.create({
    initialize: function() {
        this.BASE_URL = 'https://xmr.to/api/v1/xmr2btc'
    },

    // general API request
    _request: function($deferred, path, body) {
        let options = {
            url: `${this.BASE_URL}/${path}/`,
            json: true
        };
        if(body){
            options.body = body;
            options.method = 'POST';
        }
        rp(options)
            .then(function(result) {
                $deferred.resolve(result);
            })
            .catch(function(err){
                $deferred.resolve(err.error);
            });

    },

    // query order parameters
    getParams: function($deferred) {
        let path = 'order_parameter_query';
        $deferred.resolve(this._request(path));
    },

    // create order
    createOrder: function($deferred, amount, destination) {
        let path = 'order_create';
        let body = {};
        body.btc_amount = amount;
        body.btc_dest_address = destination;
        $deferred.resolve(this._request(path, body));
    },

    // query order status
    queryOrder: function($deferred, uuid) {
        let path = 'order_status_query';
        let body = {};
        body.uuid = uuid;
        $deferred.resolve(this._request(path, body));
    }
});

module.exports = xmrTo;