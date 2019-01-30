
const authentication = require('./authentication');
const stream_message = require('./creates/stream_message');

// Include the API key on all outbound requests.
// This function runs before each request is sent out.
const includeApiKey = (request, z, bundle) => {
    if (bundle.authData.api_key) {
        request.params = request.params || {};
        request.params.api_key = bundle.authData.api_key;
    }
    return request;
};

const App = {
    // This is just shorthand to reference the installed dependencies
    // for the app. Zapier will need to know these before we can upload.
    version: require('./package.json').version,
    platformVersion: require('zapier-platform-core').version,

    authentication: authentication,

    beforeRequest: [
        includeApiKey
    ],

    afterResponse: [
    ],

    resources: {
    },

    // If you want your trigger to show up, you better include it here!
    triggers: {
    },

    // If you want your searches to show up, you better include it here!
    searches: {
    },

    // If you want your creates to show up, you better include it here!
    creates: {
        [stream_message.key]: stream_message
    }
};

// Finally, export the app.
module.exports = App;
