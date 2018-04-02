; var DOM = (function()  {
//var user = null;
var user = 'Susha Yauheni';
const sd = document.getElementById("posts-container");

return {
	showUserElements : function() {
		let userName = document.getElementById('user-text');
		let logInOrOut = document.getElementById("log-out");
		let addButton = document.getElementById("add");
		if (user === null) {
			userName.innerHTML = "";
			logInOrOut.src="img/log_in.png";
			addButton.style.visibility = 'hidden';
		}
		else {
			logInOrOut.src="img/log_out.png";
			userName.innerHTML = user;
		}
		let select = document.getElementById("mySelect");
		let recentPosts = mainScript.getPhotoPosts(0, 20);
		for (i = 0; i < recentPosts.length; i++) {
			let option = document.createElement("option");
			option.text = recentPosts[i].hashtags;
			select.add(option);
		}
	},

	addPhotoPostTo : function(photoPost) {
		if (document.getElementById(photoPost.id) !== null) {
			return;
		}

		let newPost = document.importNode(document.getElementById('post-template').content, true);
		newPost.querySelector('div[class="main-content"]').id = photoPost.id;
		newPost.getElementById('description').innerHTML = "Описание: " + photoPost.description;
		newPost.getElementById('users-photo').src = photoPost.photoLink;
		newPost.getElementById('author').innerHTML = "Автор: " + photoPost.author;
		newPost.getElementById('hashtags').innerHTML = "Хештеги: " + photoPost.hashtags;
		newPost.getElementById('createdAt').innerHTML = "Дата: " + photoPost.createdAt.getDate() + "."
		+ (photoPost.createdAt.getMonth() + 1) + "." + photoPost.createdAt.getFullYear();
		if (user !== photoPost.author) {
			newPost.getElementById('edit-button').parentNode.removeChild(newPost.getElementById('edit-button'));
		}
		sd.appendChild(newPost);
	},

	showRecentPosts: function () {
		let recentPosts = mainScript.getPhotoPosts(0, 10);
		recentPosts.forEach(post => this.addPhotoPostTo(post));
	},

	addPost: function (photoPost) {
		if (mainScript.addPhotoPost(photoPost)) {
			this.addPhotoPostTo(photoPost);
		}
	},

	removePost: function (id) {
		mainScript.removePhotoPost(id);
		postToRemove = document.getElementById(id);
		if (postToRemove !== null)
			sd.removeChild(postToRemove);
	},

	editPost: function (id, photoPost) {
		if (mainScript.editPhotoPost(id, photoPost)) {
			let post = document.getElementById(id);
			if (post !== undefined) {
				if (photoPost.description !== undefined) {
					document.querySelector(`div[id = "${id}"] td[id= "description"]`).textContent =
					"Описание: " + photoPost.description;
				}	
				if (photoPost.photoLink !== undefined) {
					document.querySelector(`div[id = "${id}"] img[id= "users-photo"]`).src = photoPost.photoLink;
				}
				if (photoPost.hashtags !== undefined) {
					document.querySelector(`div[id = "${id}"] td[id= "hashtags"]`).textContent = 
					"Хештеги: " + photoPost.hashtags;
				}
			}
		}
	}
}
})();

var myPost = {
	id: '11',
	description: 'myPost',
	createdAt: new Date('2002-02-23T22:12:20'),
	author: 'Susha Yauheni',
	photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
	hashtags: '#hastag'
};

DOM.showRecentPosts();
DOM.showUserElements();
DOM.addPost(myPost);
DOM.removePost(3);
DOM.editPost('1', {description:'THIS POST WAS EDITED', photoLink:'https://maxcdn.icons8.com/app/uploads/2016/10/edit2.png'});