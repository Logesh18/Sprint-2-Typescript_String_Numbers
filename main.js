"use strict";
exports.__esModule = true;
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var f = 0;
        for (var j = 2; j < num; j++) {
            if (num % j == 0) {
                console.log("The given number " + num + " is not prime");
            }
        }
        if (f == 0) {
            console.log("The given number " + num + " is prime");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        var n = num;
        while (n > 0 || sum > 9) {
            if (n == 0) {
                n = sum;
                sum = 0;
            }
            sum = sum + n % 10;
            n = (n / 10) | 0;
        }
        if (sum == 1) {
            console.log("The given number " + num + " is magic number");
        }
        else {
            console.log("The given number " + num + " is not magic number");
        }
    };
    return NumbersManipulations;
}());
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(1));
        console.log(word.concat(" Friends..."));
        console.log(word.slice(1, word.length - 2));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split('').join(' '));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str.match(/[aeiou]/gi).length);
    };
    return StringManipulations;
}());
var str = new StringManipulations();
str.print("Hello");
str.printWithSpace("hello");
str.findVowel("Hello");
var numbers = new NumbersManipulations();
numbers.findPrime(199);
numbers.findMagic(199);
