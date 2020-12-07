const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');



const translator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'zh9Pmw7K5xA1cVvH3Nyg1W5P1Q489FJ5cVyzNUHauomS',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/ec9215ef-888d-43c5-a8ff-7244475a20c5',
});

module.exports = { translator };