document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  document.getElementById("success").textContent = "";
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("subjectError").textContent = "";
  document.getElementById("messageError").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  if (subject === "") {
    document.getElementById("subjectError").textContent = "Subject is required";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("success").textContent = "Thank you! Your message has been sent.";
    document.getElementById("contactForm").reset();
  }
});
