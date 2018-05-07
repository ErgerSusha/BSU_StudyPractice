/** 
*   Page states:
*   0 - Main Page
*   1 - Add or Edit Page
*   2 - Log In Page
*/

var CURRENT_STATE;
var postsContainer = document.getElementById("posts-container");

var users = [{
	name: "Administrator",
	login: "admin",
	password: "admin",
},

{
	name: "Yauheni",
	login: "erger",
	password: "123",
},

{
	name: "NonYauheni",
	login: "nonyauheni",
	password: "456",
}
];

function likePressed(like) {
	if (like.children[0].alt === "NotLiked") {
		like.children[0].src = "img/like_pressed.png";
		like.children[0].alt = "Liked";
	}
	else {
		like.children[0].src = "img/like.png";
		like.children[0].alt = "NotLiked";
	}
}

function deletePhotoPostElement(ID) {
	let postToRemove = document.getElementById(ID);
	if (postToRemove !== null) {
		postsContainer.removeChild(postToRemove);
	}
	mainScript.removePhotoPost(ID);
}

function returnToMainPage() {
	postsContainer.style.display = "inline-block";
	document.getElementById("add-filter").style.display = "inline-block";
	if (CURRENT_STATE === 1) {
		document.getElementById("add-edit-template-div").remove();
		DOM.showRecentPosts();
	}
	else if (CURRENT_STATE === 2) {
		document.getElementById("login-div").remove();
		DOM.showRecentPosts();
	}
	document.getElementById("last-element").style.display = "block";
	CURRENT_STATE = 0;
}

function editPhotoPost(ID) {
	CURRENT_STATE = 1;
	clearMainPage();
	let loginTemplate = document.importNode(document.getElementById("add-edit-template").content, true);
	document.body.insertBefore(loginTemplate, document.querySelector("div[id = \"footer\"]"));
}

function logInOrOut() {
	if (CURRENT_STATE !== 2) {
		if (document.getElementById("log-out").alt === "Log in") {
			CURRENT_STATE = 2;
			clearMainPage();
			let loginTemplate = document.importNode(document.getElementById("login-template").content, true);
			document.body.insertBefore(loginTemplate, document.querySelector("div[id = \"footer\"]"));
		}
		else {
			document.getElementById("user-text").innerHTML = "";
			document.getElementById("log-out").alt = "Log in";	
			let logInOrOut = document.getElementById("log-out");
			if (document.getElementById("user-text").innerHTML === "") {
				logInOrOut.src="img/log_in.png";
				document.getElementById("add-button").style.visibility = "hidden";
			}
			else {
				logInOrOut.alt = "Log out";
				logInOrOut.src="img/log_out.png";
			}
			$("a[id=edit-button]").hide();
			$("a[id=delete-button]").hide();
		}
	}
}

function clearMainPage() {
	if (postsContainer !== null) {
		postsContainer.style.display = "none";
	}
	if (document.getElementById("last-element") !== null) {
		document.getElementById("last-element").style.display = "none";
	}
	if (document.getElementById("add-filter") !== null) {
		document.getElementById("add-filter").style.display = "none";
	}
}

function loadMore() {
	if (postsLoaded + 10 <= photoPosts.length) {
		postsLoaded += 10;
	}
	let posts = mainScript.getPhotoPosts(postsLoaded, 10);
	posts.forEach(post => DOM.addPhotoPosts(post));
}

function tryLogIn() {
	if (document.getElementById("login-input").value !== null && 
		document.getElementById("password-input").value !== null) {
		var login = document.getElementById("login-input").value;
		var password = document.getElementById("password-input").value;
		for (var i = 0; i < 3; i++) {
			if (users[i].login === login && users[i].password === password) {
				returnToMainPage();
				document.getElementById("user-text").innerHTML = users[i].name;
				document.getElementById("log-out").alt = "Log Out";
				document.getElementById("log-out").src = "img/log_out.png";
				document.getElementById("add-button").style.visibility = "visible";
				document.getElementById("posts-container").innerHTML = "";
				postsLoaded = 0;
				DOM.showRecentPosts();
				CURRENT_STATE = 0;
				return;
			}
		}
		alert("Неверный логин или пароль");	
	}
}