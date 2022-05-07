const Keycloak = require('keycloak-connect');

const config = {
    "realm": "pullpush",
    "bearer-only": true,
    "auth-server-url": "http://localhost:8180/auth/",
    "ssl-required": "external",
    "resource": "cli-service-nodejs",
    "confidential-port": 0
};


//--Examples of how to interact with the Keycloak connect API
//--https://github.com/v-ladynev/keycloak-nodejs-example/blob/master/lib/keyCloakService.js
//--https://www.codota.com/code/javascript/modules/keycloak-connect

const keycloak = new Keycloak({},config);

keycloak.grantManager.obtainDirectly("cgianelle", "abc").then(grant => {
    console.log("Granted");
    console.log(grant);
}).catch(err => {
    console.error("Errored");
    console.error(err);
});