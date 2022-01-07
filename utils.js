import fs from 'fs';

const saveContacts = (contacts) =>
  fs.writeFileSync('contacts.json', JSON.stringify(contacts));

const getContacts = () => JSON.parse(fs.readFileSync('contacts.json'));

export { saveContacts, getContacts };