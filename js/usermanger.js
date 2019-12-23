class User {
    constructor(username, email, orgName) {
        this.username = username;
        this.email = email;
        this.orgName = orgName;
    }
    userData() {
        return `${this.username},${this.email} and ${this.orgName}`;
    }
}

var users = []
var searchResultArr = [];

var btnReg = document.querySelector("#btnReg");


showAllUsers = function () {
    var str = "";
    if (users.length == 0) {
        str = "No user registred yet...."
    } else {
        str += "<table id='usertable'>";
        str += "<tr><th>Username</th><th>Email</th><th>Org Name</th><th>Edit</th><th>Delete</th></tr>";
        users.forEach(u => {
            str += "<tr><td>" + u.username + "</td><td>" + u.email + "</td><td>" + u.orgName + "</td>";
            str += "<td><button class='edit' onclick=editUser('"+u.email+"')>Edit</button></td>";
            str += "<td><button  class= 'delete' value='"+u.email+"'>Delete</button></td></tr>";
        })
        str += "</table>";
        let showUsers = document.querySelector("#showUsers");
    }
    showUsers.innerHTML = str;
}
register = function () {
    let regForm = document.querySelector("#regForm");
    username = regForm['username'].value;
    email = regForm['email'].value;
    orgName = regForm['orgName'].value;
    user = new User(username, email, orgName);
    users.push(user);
    regForm.reset();

}

searchUsers = function (str) {
    searchResultArr = [];
    users.forEach(u => {
        if (u.username.toLowerCase().includes(str.toLowerCase())) {
            searchResultArr.push(u);
        }
    })
}
indexOfUser = function (email) {
    let pos = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            pos = i;
            break;
        }
    }
    return pos;
}

deleteUserByEmail = function (email) {
    let pos = indexOfUser(email);
    if (pos != -1) {
        users.splice(pos, 1);
    } else {
        console.log("No user found with the given email id:", email);
    }
    console.log(users);
}

updateUser = function (username, email, orgName) {
    pos = indexOfUser(email);
    if (pos != -1) {
        user = users[pos];
        user.orgName = orgName;
        user.username = username;
    }
    else {
        console.log("No user found with the given email id:", email);
    }
    console.log(users);

}


showAllUsers();
btnReg.addEventListener('click', (event) => {
    event.preventDefault();
    register();
    showAllUsers();
})

function editUser(email){
    let pos = indexOfUser(email);
    if(pos!=-1){
        user = users[pos];
        let regForm = document.querySelector("#regForm");
        regForm["username"].value=user.username;
        regForm["email"].value = user.email;
        regForm["orgName"].value = user.orgName; 
        regForm["btnUpdate"].style.display = "block";
        regForm["btnReg"].style.display = "none";
    }
}

document.querySelector("#btnUpdate").addEventListener('click',(event)=>{
    event.preventDefault();
    let regForm = document.querySelector("#regForm");
    username = regForm['username'].value;
    email = regForm['email'].value;
    orgName = regForm['orgName'].value;
    updateUser(username,email,orgName);
    regForm["btnUpdate"].style.display = "none";
    regForm["btnReg"].style.display = "block";
    regForm.reset();
    showAllUsers();
})