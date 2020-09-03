chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "getToken") {
            let oktaStorage = JSON.parse(window.localStorage.getItem("okta-token-storage"));
            let token = oktaStorage['idToken']['value'];
            chrome.runtime.sendMessage({ token: token }, function(response) {
                console.log("Sending message...");
            });
        }
    });