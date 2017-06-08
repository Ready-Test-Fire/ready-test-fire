/**
 * Created by georgeflauta on 6/5/17.
 */
(function() {
    angular.module('app')
        .controller('codingBlockController', codingBlockController)



    function codingBlockController($state, $stateParams) {
        const vm = this
        vm.success

        const code = $('.codemirror-textarea')[0]
        const editor = CodeMirror.fromTextArea(code, {
            theme: 'solarized',
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true
        })

        ACCESS='3877c854d0e868b16bba9510ce9951bb8f24d562'
        DEV_ID='190025001047353138383138'


        function launchRDS() {
            console.log('Release the kraken!')
            var request = new XMLHttpRequest();
            var dev_id = DEV_ID;
            var access = ACCESS;
            var data = 'params=' + 90 + '&access_token=' + access;
            var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);
        }

        function lockRDS() {
            console.log('resetting RDS')
            var request = new XMLHttpRequest();
            var dev_id = DEV_ID;
            var access = ACCESS;
            var data = 'params=' + 0 + '&access_token=' + access;
            var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);
        }


        vm.submitCode = function() {

        }

        vm.testCode = function() {

            eval(editor.getValue())
        }

        vm.launch = function() {
            $state.go('game', {questionid: Number($stateParams.questionid) + 1})
            launchRDS()
            setTimeout(lockRDS, 10000)

        }

        vm.isTrue = function() {

            return vm.success === true
        }

        vm.isFalse = function() {
            return vm.success === false
        }

        vm.runTest = function () {
            var testCode = editor.getValue()
            var test = new Function(testCode)
            var should = chai.should();
            $('#mocha').html('')
            mocha.setup('bdd');
            // console.log('mocha', mocha)
            if (Number($stateParams.questionid) === 1) {
                describe('test', function() {

                    it("string set properly", function() {
                        // expect(test()).to.eq("This Works!")
                        test().should.equal("This Works!");

                    })
                })
            } else if (Number($stateParams.questionid) === 2) {
                testCode = editor.getValue()
                try {
                    eval(testCode)
                }
                catch (e) {
                    // error
                }

                should = chai.should()
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
            }

            // mocha.run()
            // let stats = mocha.run()['stats']

            mocha.run(function(failure_count) {
                vm.success = failure_count ? false : true;
                if (vm.success) {
                    $('.launchButton').show()
                }
                if (!vm.success) {
                    $('.failed').show()
                }
            })
            console.log(mocha.run())


        }

        vm.runSumTest = function() {

            // console.log(sum)
            mocha.run(function(failure_count) {
                var success = failure_count ? false : true;
                console.log(success)
            })
        }


    }
})()