"use strict";
const xmr2btc = require('./index.js');
const xmrTo = new xmr2btc();

//xmrTo.createOrder(1, '1HvETudAiWi81HdvcwbSzrZmVfonejTtF8')
//    .then(function(order){
//        console.log(order);
//    });

xmrTo.queryOrder('xmrto-H9fGmQ')
    .then(function(order){
        console.log(order);
    });