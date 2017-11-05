
## About GDPR-AgeOfMajority

Validate whether an individual is an adult according to GDPR (eu rules).

[![Build Status](https://travis-ci.org/visualjeff/GDPR-AgeOfMajority.png)](https://travis-ci.org/visualjeff/GDPR-AgeOfMajority)
[![bitHound Overall Score](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority/badges/score.svg)](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority)
[![bitHound Dependencies](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority/badges/dependencies.svg)](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority/badges/devDependencies.svg)](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority/badges/code.svg)](https://www.bithound.io/github/visualjeff/GDPR-AgeOfMajority)

## Install
```
npm install gdpr-age-of-majority --save
```


## Usage

```js
'use strict';

const AgeOfMajority = require('gdpr-age-of-majority'); //Import validation function.

const birthDate = '1967-05-01'; //Sample birth date
const countryCode = 'IT'; //Italy 

console.log(`Is adult: ${AgeOfMajority.isAdult(birthDate, countryCode)}`);
```
