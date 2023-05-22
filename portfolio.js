const Nname = document.getElementById("name");
const Nemail = document.getElementById("email");
const Nnumber = document.getElementById("number");
const Nmessage = document.getElementById("message");

const submit = document.getElementById("contactForm");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  let dBody = `
  <b>Name: </b>${Nname.value}
  <br>
  <b>Email: </b>${Nemail.value}
  <br>
  <b>Number: </b>${Nnumber.value}
  <br>
  <b>Message: </b>${Nmessage.value}
  <br>
`;

  Email.send({
    SecureToken: "e55ead06-b0fa-4d78-9b20-54d14b1d3fed",
    To: "webmutation@gmail.com",
    From: "webmutation@gmail.com",
    Subject: "NEW CLIENT " + Nname.value,
    Body: dBody,
  }).then((message) => alert(message));
});
