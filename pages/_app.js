import 'tailwindcss/tailwind.css'

import '../styles/globals.css'
// import Parse from 'parse/node'

// Parse.initialize("mquYW9cZwlCNMFxIR0FcxhjGjH7aCw6gmLod6STh", "fM1flAAoS8ERL6ZKlMj9r521v4ByT7VeJgjWibaI"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
// Parse.serverURL = "https://parseapi.back4app.com/";

// Parse.Cloud.run('hello', { attributes: 'young', yearOfBirth: 2000 }).then(function(ratings) {
//   // result should be 'Update object successfully'
// });

// var user = new Parse.User();
// user.save({
//   username: 'test',
//   email: 'test@gmail.com',
//   password: '123'
// }).then(function(response) {
//   console.error('New object create with success! ObjectId: ' + response.id + ', '+ user.get('username'));
// }).catch(function(error) {
//   console.error('Error: ' + error.message);
// });

export default function App({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}
