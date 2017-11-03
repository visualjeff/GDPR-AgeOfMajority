'use strict';

module.exports = (function() {
    const _defaultAge = 19;
    const _countries = [{
        country: 'Austria',
        code: 'AT',
        age: 18
    }, {
        country: 'Belgium',
        code: 'BE',
        age: 18
    }, {
        country: 'Bulgaria',
        code: 'BG',
        age: 18
    }, {
        country: 'Croatia',
        code: 'HR',
        age: 18
    }, {
        country: 'Cyprus',
        code: 'CY',
        age: 18
    }, {
        country: 'Czech Republic',
        code: 'CZ',
        age: 18
    }, {
        country: 'Denmark',
        code: 'DK',
        age: 18
    }, {
        country: 'Estonia',
        code: 'EE',
        age: 18
    }, {
        country: 'Finland',
        code: 'FI',
        age: 18
    }, {
        country: 'France',
        code: 'FR',
        age: 18
    }, {
        country: 'Germany',
        code: 'DE',
        age: 18
    }, {
        country: 'Greece',
        code: 'EL',
        age: 18
    }, {
        country: 'Hungary',
        code: 'HU',
        age: 18
    }, {
        country: 'Ireland',
        code: 'IE',
        age: 18
    }, {
        country: 'Italy',
        code: 'IT',
        age: 18
    }, {
        country: 'Latvia',
        code: 'LV',
        age: 18
    }, {
        country: 'Lithuania',
        code: 'LT',
        age: 18
    }, {
        country: 'Luxembourg',
        code: 'LU',
        age: 18
    }, {
        country: 'Malta',
        code: 'MT',
        age: 18
    }, {
        country: 'Netherlands',
        code: 'NL',
        age: 18
    }, {
        country: 'Poland',
        code: 'PL',
        age: 18
    }, {
        country: 'Portugal',
        code: 'PT',
        age: 18
    }, {
        country: 'Romania',
        code: 'RO',
        age: 18
    }, {
        country: 'Slovakia',
        code: 'SK',
        age: 18
    }, {
        country: 'Slovenia',
        code: 'SI',
        age: 18
    }, {
        country: 'Spain',
        code: 'ES',
        age: 18
    }, {
        country: 'Sweden',
        code: 'SE',
        age: 18
    }, {
        country: 'UK',
        code: 'GB',
        age: 18
    }];

    const _requiredCountryParameter = function() {
        throw new Error('Missing parameter, Please provide a EU country name or two character country code.');
    };

    const _requiredBirthdateParameter = function() {
        throw new Error('Missing parameter, Please provide a valid birth date as a date string.  YYYY-MM-DD');
    };


    return {
        //Return a persons current age
        getAge: function(dateString = _requiredBirthdateParameter()) {
            const today = new Date();
            const birthDate = new Date(dateString);
            let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
            const month = today.getUTCMonth() - birthDate.getUTCMonth();
            if (month < 0 || (month === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
                age--;
            }
            return age;
        },

        //Return the require age of majority for a country within the EU.
        getRequiredAge: function(country = _requiredCountryParameter()) {
            if (country.length > 2) {
                return _countries.find(v => {
                    return v.country.toLowerCase() === country.toLowerCase();
                }).age || _defaultAge;
            } else {
                return _countries.find(v => {
                    return v.code === country.toUpperCase();
                }).age || _defaultAge;
            }
        },

        //Return whether this person is considered an adult according to a EU laws.
        isAdult: function(birthDate = _requiredBirthdateParameter(), country = _requiredCountryParameter()) {
            return (this.getAge(birthDate) >= this.getRequiredAge(country));
        }
    };
})();
