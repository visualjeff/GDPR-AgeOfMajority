/*global describe, it*/
'use strict';

const assert = require('assert');
const ageOfConsent = require('../index');

describe('GDPR Age/Adult validation', function() {
    describe('#Testing exposed method getAge', function() {
        it('should return true', function() {
            assert.equal(22, ageOfConsent.getAge('1995-03-01'));
        });
        it('should throw error', function() {
            assert.throws( function() { ageOfConsent.getAge(); }, /Missing parameter/, 'function should of thrown an expeption');
        });
    });
    describe('#Testing exposed method getRequiredAge', function() {
        it('should return true', function() {
            assert.equal(18, ageOfConsent.getRequiredAge('GB'));
        });
        it('should throw error', function() {
            assert.throws( function() { ageOfConsent.getRequiredAge(); }, /Missing parameter/, 'function should of thrown an expeption');
        });
    });
    describe('#Testing exposed method isAdult', function() {
        it('should return true', function() {
            assert.equal(true, ageOfConsent.isAdult('1995-03-01', 'GB'));
        });
        it('should return true', function() {
            assert.equal(true, ageOfConsent.isAdult('1998-03-01', 'SK'));
        });
        it('should return false', function() {
            assert.equal(false, ageOfConsent.isAdult('2000-03-01', 'IT'));
        });
        it('should throw an error', function() {
            //Need to wrap call in function block for assert.throws to work...		
            assert.throws( function() { ageOfConsent.isAdult('IT'); }, /Missing parameter/, 'function should of thrown an expeption');
        });
    });
});
