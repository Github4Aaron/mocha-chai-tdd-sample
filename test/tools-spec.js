//Expect function of Chai assertion engine (should, assert are also available);
var expect = require("chai").expect
//Module where printName function will live
var tools = require("../lib/tools");

describe("Tools", function() {

    describe("printName()", function() {
        it("should print the last name first", function() {
            var results = tools.printName({ first: "Aaron", last: "Strouse" });
            expect(results).to.equal("Strouse, Aaron");
        });
    });

    //This will be an asynchronous test, since the callback behaves asynchronously.
    //A variable "done" should be passed to the callback function.
   //So "done" needs to be invoked when the callback is finished.
    describe("loadWiki()", function() {
        it ("should load Abe Linconln's wikipedia page", function(done) {
            tools.loadWiki({ first: "Abraham", last: "Linconln" }, function(html) {
                expect(html).to.be.ok;
                done();
            });
        });
    });

});





// TDD writes test first, watches it fail, and then write code to make it pass. 
//Mocha gives us a suite for running and building test, but not a way to check values
//Chai is an assertion engine .
//should recive --save-dev flag as only needed for development.

