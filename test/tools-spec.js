//Expect function of Chai assertion engine (should, assert are also available);
var expect = require("chai").expect
//Module where printName function will live
var tools = require("../lib/tools");


describe("printName()", function() {
    it("should print the last name first", function() {
        var results = tools.printName({ first: "Aaron", last: "Strouse" });
        expect(results).to.equal("Strouse, Aaron");
    });
});






// TDD writes test first, watches it fail, and then write code to make it pass. 
//Mocha gives us a suite for running and building test, but not a way to check values
//Chai is an assertion engine .
//should recive --save-dev flag as only needed for development.

