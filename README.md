# XMR.to API
a Node.js wrapper for the [XMR.to][xmrto] API

Get status information order limits, create orders, and query status of orders.

## Installation
```
npm install xmrto-api
```

## Initialize the module

    const xmr2btc = require('xmrto-api')
    const xmrTo = new xmr2btc();

## Methods

### getParams()
Usage:

    xmrTo.getParams()
        .then(function(params){
            console.log(params);
        });
        
        
Example Response:
```
{ price: 0.001131, upper_limit: 1, lower_limit: 0.001 }
```

### createOrder(btc_amount, btc_destination_address)
Usage:

    xmrTo.createOrder(1, '1HvETudAiWi81HdvcwbSzrZmVfonejTtF8')
        .then(function(order){
            console.log(order);
        });

Example Response:

    { state: 'TO_BE_CREATED',
      btc_amount: 1,
      btc_dest_address: '1HvETudAiWi81HdvcwbSzrZmVfonejTtF8',
      uuid: 'xmrto-H9fGmQ' }


### queryOrder(uuid)
Usage:

    xmrTo.queryOrder('xmrto-H9fGmQ')
        .then(function(order){
            console.log(order);
        });

Example Response:
    
    { xmr_price_btc: 0.001132,
      uuid: 'xmrto-H9fGmQ',
      state: 'UNPAID',
      btc_amount: 1,
      btc_dest_address: '1HvETudAiWi81HdvcwbSzrZmVfonejTtF8',
      xmr_required_amount: 883.4,
      xmr_receiving_address: '44TVPcCSHebEQp4LnapPkhb2pondb2Ed7GJJLc6TkKwtSyumUnQ6QzkCCkojZycH2MRfLcujCM7QR1gdnRULRraV4UpB5n4',
      xmr_required_payment_id: '17fee7d6ddc616572fdfc300f367eb92da64a4a0ae2371ef4e12a78e4ead3fae',
      created_at: '2016-01-04T02:30:26Z',
      expires_at: '2016-01-04T02:35:26Z',
      seconds_till_timeout: 206,
      xmr_amount_total: 883.4,
      xmr_amount_remaining: 883.4,
      xmr_num_confirmations_remaining: -1,
      btc_num_confirmations_before_purge: 144,
      btc_num_confirmations: 0,
      btc_transaction_id: '' }


[xmrto]: https://xmr.to