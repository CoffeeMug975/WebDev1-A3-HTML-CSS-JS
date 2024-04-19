// contact.js

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const contactPage = document.getElementById ('contact-page');
const greetingMessage = "Thank you for your message";

function replaceContent(){
    contactPage.innerHTML = greetingMessage;
    contactPage.style.fontSize = '24px';
}
document.getElementById('submit-button').addEventListener('click',replaceContent);

