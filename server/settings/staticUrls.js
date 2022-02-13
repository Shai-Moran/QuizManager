const serverPortNum = 4000;
const clientPortNum = 3000;
const serverDomain = 'http://localhost';
const dbUrl =
  'mongodb+srv://shaim:1234@quizmanagerdb.wompd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const Urls = {
  serverPort: serverPortNum,
  clientPort: clientPortNum,
  serverDomain: serverDomain,
  dbUrl: dbUrl
};

module.exports = Urls;
