  var config = {
    apiKey: "AIzaSyB3EFn-_GBCcbto5AO3BuL4qQG1mqDUVxM",
    authDomain: "contactform-gridcss.firebaseapp.com",
    databaseURL: "https://contactform-gridcss.firebaseio.com",
    projectId: "contactform-gridcss",
    storageBucket: "contactform-gridcss.appspot.com",
    messagingSenderId: "625922094897"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);
//submit form
		function submitForm (e) {
			e.preventDefault();
			var name = getInputVal('name');
			var company = getInputVal('company');
			var email = getInputVal('email');
			var phone = getInputVal('phone');
			var message = getInputVal('message');

			saveMessage (name, company,email, phone, message);

			//show alert
			document.querySelector('.alert').style.display = 'block';
			setTimeout(function () {
				document.querySelector('.alert').style.display = 'none';
			}, 3000);

			document.getElementById('contactForm').reset();
		}

		function getInputVal (id) {
			return document.getElementById(id).value;
		}


function saveMessage (name,company,email,phone,message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message:message
	});
}