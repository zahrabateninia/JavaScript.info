class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    // return fetch(url)
    //   .then(response => {
    //     if (response.status == 200) {
    //       return response.json();
    //     } else {
    //       throw new HttpError(response);
    //     }
    //   });
    let response = await fetch(url)
    if(response.status == 200){
        return response.json;
    }

    throw new HttpError(response);
  }
  
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
  
    // return loadJson(`https://api.github.com/users/${name}`)
    //   .then(user => {
    //     alert(`Full name: ${user.name}.`);
    //     return user;
    //   })
    let user;
    while(true) {
      let name = prompt("Enter a name?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // no error, exit loop
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // loop continues after the alert
          alert("No such user, please reenter.");
        } else {
          // unknown error, rethrow
          throw err;
        }
      }
    } 
     //   .catch(err => {
    //     if (err instanceof HttpError && err.response.status == 404) {
    //       alert("No such user, please reenter.");
    //       return demoGithubUser();
    //     } else {
    //       throw err;
    //     }
    //   });

  alert(`Full name: ${user.name}.`);
  return user;

  }
  
  demoGithubUser();