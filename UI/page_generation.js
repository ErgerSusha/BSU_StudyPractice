/** 
*   Page states:
*   0 -  Main Page
*   1 - Add or Edit Page
*   2 - Log In Page 
*/

var CURRENT_STATE;
const postsContainer = document.getElementById("posts-container");

function deletePhotoPostElement(ID) {
	let postToRemove = document.getElementById(ID);
	if (postToRemove !== null)
		postsContainer.removeChild(postToRemove);
	mainScript.removePhotoPost(ID);
}

function returnToMainPage() {
	postsContainer.style.display = 'inline-block';
	document.getElementById("add-filter").style.display = 'inline-block';
	if (CURRENT_STATE === 1) {
		document.getElementById("add-edit-template-div").remove();
		DOM.showRecentPosts();
	}
	else if (CURRENT_STATE === 2) {
		document.getElementById("login-div").remove();
		DOM.showRecentPosts();
	}
	document.getElementById("last-element").style.display = 'block';
	CURRENT_STATE = 0;
}

function editPhotoPost(ID) {
	CURRENT_STATE = 1;
	clearMainPage();
	let loginTemplate = document.importNode(document.getElementById('add-edit-template').content, true);
	document.body.insertBefore(loginTemplate, document.querySelector(`div[id = "footer"]`));
}

function logInOrOut() {
	if (CURRENT_STATE !== 2) {
		if (document.getElementById("log-out").alt === "Log in") {
			CURRENT_STATE = 2;
			clearMainPage();
			let loginTemplate = document.importNode(document.getElementById('login-template').content, true);
			document.body.insertBefore(loginTemplate, document.querySelector(`div[id = "footer"]`));
		}
		else {
			document.getElementById('user-text').innerHTML = "";
			document.getElementById("log-out").alt = "Log in";	
			DOM.showUserElements();
			$("a[id=edit-button]").remove();
			$("a[id=delete-button]").remove();
		}
	}
}

function clearMainPage() {
	if (postsContainer !== null) {
		postsContainer.style.display = 'none';
	}
	if (document.getElementById("last-element") !== null) {
		document.getElementById("last-element").style.display = 'none';
	}
	if (document.getElementById("add-filter") !== null) {
		document.getElementById("add-filter").style.display = 'none';
	}
}