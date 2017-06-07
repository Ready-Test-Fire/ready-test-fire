/**
 * Created by georgeflauta on 6/5/17.
 */
(function() {
    angular.module('app')
        .controller('codingBlockController', codingBlockController)

    function codingBlockController() {
        console.log('codingBlock controller is working')
        const vm = this

        const code = $('.codemirror-textarea')[0]
        const editor = CodeMirror.fromTextArea(code, {
            theme: 'solarized',
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true
        })

        vm.submitCode = function() {
            console.log('here is the code', vm.code)
            console.log(editor.getValue())
        }

        vm.testCode = function() {

            eval(editor.getValue())
        }



        vm.runTest = function () {
            var testCode = editor.getValue()
            var test = new Function(testCode)
            var should = chai.should();
            $('#mocha').html('')
            mocha.setup('bdd');
            // console.log('mocha', mocha)
            describe('test', function() {

                it("string set properly", function() {
                    // expect(test()).to.eq("This Works!")
                    test().should.equal("This Works!");

                })
            })
            // mocha.run()
            // let stats = mocha.run()['stats']

            mocha.run(function(failure_count) {
                var success = failure_count ? false : true;
                console.log(success)
            })


        }

        vm.runSumTest = function() {
            var testCode = editor.getValue()
            try {
                eval(testCode)
            }
            catch (e) {
                // error
            }

            var should = chai.should()
            var expect = chai.expect
            $('#mocha').html('')
            mocha.setup('bdd')
            describe('sum', function() {

                it("should return 0 if the input is empty", function() {

                    expect(sum([])).to.equal(0)
                })

                it("sums the integers in the array", function() {

                    // expect(sum([2])).to.equal(2)
                    sum([2,4]).should.equal(6)
                    sum([2,4,6]).should.equal(12)
                    sum([2,4,6,8]).should.equal(20)
                    sum([2,4,6,8,10,]).should.equal(30)
                })
            })
            // console.log(sum)
            mocha.run(function(failure_count) {
                var success = failure_count ? false : true;
                console.log(success)
            })
        }


    }
})()