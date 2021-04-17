var should = require('chai').should();



const IG = require('ig-markets');


var IG_API_KEY = '6ea1af381eac1648df10cae8e5781ebb2393897f';
var IG_IDENTIFIER = 'nodejs';
var IG_PASSWORD = '10gXWOqeaf!';
var IG_API_DEMO = 'true';


var ig = new IG(IG_API_KEY,IG_IDENTIFIER,IG_PASSWORD);

var epic = 'CS.D.EURUSD.MINI.IP';
var searchTerm = 'EURUSD';

describe('Accounts', function () {

    it('/accounts', function (done) {
        ig.accounts(function (err, data) {
            if (err) done(err);
            else done(console.log(data));
        });
    });

});


describe('Markets', function () {

    it('/prices/' + epic, function (done) {
        ig.prices(epic, function (err, data) {
            if (err) done(err);
            else done();
        });
    });

    it('/markets?searchTerm=' + searchTerm, function (done) {
        ig.findMarkets(searchTerm, function (err, data) {
            if (err) done(err);
            else done();
        });
    });

});
