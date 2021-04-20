// var should = require('chai').should();


const IG = require('./ig.js');


var IG_API_KEY = '6ea1af381eac1648df10cae8e5781ebb2393897f';
var IG_IDENTIFIER = 'nodejs';
var IG_PASSWORD = '10gXWOqeaf!';
var IG_API_DEMO = 'true';

var ig = new IG(IG_API_KEY,IG_IDENTIFIER,IG_PASSWORD,IG_API_DEMO);

var epic = 'BITCOIN';

ig.accounts(function (err, data) {
  if (err) {console.log(err)}
  else { console.log(data)};
});
    

ig.accountHistory(function (err, data) {
    if (err) {console.log(err)}
    else { console.log(data)};
});
      
ig.findMarkets(epic,function (err, data) {
  if (err) {console.log(err)}
  else { console.log(data)};
});
    
   

    
    
   /* var should = require('chai').should();
        if (err) {console.log(err)}
        else { console.log(data)};
            if (err) {console.log(err)}
            else { console.log(data)};
    
       */
            ig.positions(function (err, data) {
                if (err) {console.log(err)}
                
                else { console.log(data)};
              });
               
           
        
             ig.sprintMarkets(function (err, data) {
                if (err) {console.log(err)}
                else { console.log(data)};
               });


              ig.workingOrders(function (err, data) {
                if (err) {console.log(err)}
                else { console.log(data)};
                });

        
              