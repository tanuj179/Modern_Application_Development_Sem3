self.addEventListener("install", (e) => {
    console.log("installed");
    })
    self.addEventListener("activate", (e) => {
    console.log("activated");
    })
    self.addEventListener("fetch", (e) => {
    console.log("fetched");
    // fetching user data from the github api
    fetch("https://api.github.com/users/photowings")
    .then((e) => {
    return e.json();
    })
    .then((json) => {
    console.log(json);
    })
    .catch((e) => {
    console.log(e);
    });
    })
   