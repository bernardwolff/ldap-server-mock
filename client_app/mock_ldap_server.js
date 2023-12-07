const LdapServerMock = require('ldap-server-mock').LdapServerMock;

async function main() {

  const ldapUsers = [
    {
      dn: 'cn=jdoe,ou=users,dc=example,dc=org',
      attributes: {
        objectClass: 'inetOrgPerson',
        cn: 'jdoe',
        uid: 'jdoe',
        mail: 'jdoe@example.org',
        userpassword: '{MD5}ICy5YqxZB1uWSwcVLSNLcA=='
      }
    },
    {
      dn: 'cn=admin,dc=example,dc=org',
      attributes: {
        objectClass: 'simpleSecurityObject',
        cn: 'admin',
        uid: 'admin',
        userpassword: '{SSHA}QexETNj46mLLgHLHZTUEpFYjJ9JZ7jXP'
      }
    }
  ];

  const serverConfiguration = {
    port: 389,
    searchBase: 'dc=example,dc=org'
  };

  const ldapServer = new LdapServerMock(ldapUsers, serverConfiguration);
  await ldapServer.start();
  // stop() commented out so we can keep it running
  //await ldapServer.stop();
}

main();
