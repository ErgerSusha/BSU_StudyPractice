var postsLoaded = 0;
var DOM = (function()  {
	var postsContainer = document.getElementById("posts-container");

	return {
		showUserElements : function() {
			let logInOrOut = document.getElementById("log-out");
			if (document.getElementById("user-text").innerHTML === "") {
				logInOrOut.src="img/log_in.png";
				document.getElementById("add-button").style.visibility = "hidden";
			}
			else {
				logInOrOut.alt = "Log out";
				logInOrOut.src = "img/log_out.png";
			}
		/*let select = document.getElementById("mySelect");
		let recentPosts = mainScript.getPhotoPosts(0, 20);
		for (i = 0; i < recentPosts.length; i++) {
			let option = document.createElement("option");
			option.text = recentPosts[i].hashtags;
			select.add(option);
		} */
		},

		addPhotoPosts : function(photoPost) {
			if (document.getElementById(photoPost.id) !== null) {
				return;
			}

			let newPost = document.importNode(document.getElementById("post-template").content, true);
			newPost.querySelector("div[class=\"main-content\"]").id = photoPost.id;
			newPost.getElementById("description").innerHTML = "Описание: " + photoPost.description;
			newPost.getElementById("users-photo").src = photoPost.photoLink;
			newPost.getElementById("author").innerHTML = "Автор: " + photoPost.author;
			newPost.getElementById("hashtags").innerHTML = "Хештеги: " + photoPost.hashtags;
			newPost.getElementById("createdAt").innerHTML = "Дата: " + ("0" + photoPost.createdAt.getDate()).slice(-2) + "."
		+ ("0" + (photoPost.createdAt.getMonth() + 1)).slice(-2) + "." + photoPost.createdAt.getFullYear();
			if (document.getElementById("user-text").innerHTML !== photoPost.author) {
				newPost.getElementById("edit-button").parentNode.removeChild(newPost.getElementById("edit-button"));
				newPost.getElementById("delete-button").parentNode.removeChild(newPost.getElementById("delete-button"));
			}
			postsContainer.appendChild(newPost);
		},

		showRecentPosts: function () {
			let recentPosts = mainScript.getPhotoPosts(postsLoaded, 10);
			recentPosts.forEach(post => this.addPhotoPosts(post));
		},

		addPost: function (photoPost) {
			if (mainScript.addPhotoPost(photoPost)) {
				this.addPhotoPosts(photoPost);
			}
		},

		removePost: function (id) {
			mainScript.removePhotoPost(id);
			var postToRemove = document.getElementById(id);
			if (postToRemove !== null)
				postsContainer.removeChild(postToRemove);
		},

		editPost: function (id, photoPost) {
			if (mainScript.editPhotoPost(id, photoPost)) {
				let post = document.getElementById(id);
				if (post !== undefined) {
					if (photoPost.description !== undefined) {
						document.querySelector(`div[id = "${id}"] td[id = "description"]`).textContent =
					"Описание: " + photoPost.description;
					}
					if (photoPost.photoLink !== undefined) {
						document.querySelector(`div[id = "${id}"] img[id = "users-photo"]`).src = photoPost.photoLink;
					}
					if (photoPost.hashtags !== undefined) {
						document.querySelector(`div[id = "${id}"] td[id = "hashtags"]`).textContent = 
					"Хештеги: " + photoPost.hashtags;
					}
				}
			}
		}
	};
})();

var myPost = {
	id: "11",
	description: "myPost",
	createdAt: new Date("2002-02-23T22:12:20"),
	author: "Susha Yauheni",
	photoLink: "http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg",
	hashtags: "#hastag"
};

var user = "Susha Yauheni";
document.getElementById("user-text").innerHTML = user;
DOM.showUserElements();
DOM.showRecentPosts();
DOM.addPost(myPost);
/*DOM.removePost(3);
DOM.editPost('1', {description:'THIS POST WAS EDITED', photoLink:'https://maxcdn.icons8.com/app/uploads/2016/10/edit2.png'});
*/