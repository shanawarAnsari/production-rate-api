const { DefaultAzureCredential } = require('@azure/identity');

const { SecretClient } = require('@azure/keyvault-secrets');
require('dotenv').config();
const vaultName = process.env.KEY_VAULT_NAME;
const url = `https://${vaultName}.vault.azure.net`;

async function getKeyVaultSecrets() {
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(url, credential);
    try {
        const oktaIssuer = await client.getSecret('okta-issuer-domain');
        const oktaClientId = await client.getSecret('okta-client-id');
        const secretKey = await client.getSecret('jwt-encryption-key');
        const oktaAudiance = await client.getSecret('okta-audiance');
        const port = await client.getSecret('port');
        let keyVaultSecrets = {
            oktaAudiance: oktaAudiance?.value,
            oktaClientId: oktaClientId?.value,
            oktaIssuer: oktaIssuer?.value,
            secretKey: secretKey?.value,
            port: port?.value,
        };
        return keyVaultSecrets;
    } catch (err) {
        throw err;
    }
}

module.exports = getKeyVaultSecrets;
