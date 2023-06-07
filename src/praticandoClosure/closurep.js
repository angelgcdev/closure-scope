/** Alcancia con closure*/

function greeting(){
    let username='Angel';

    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g=greeting();
console.log(g);
console.log(g());