;(function(){
  var photoPosts = [
  {
    id: '1',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '2',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '3',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '4',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '5',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '6',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '7',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '8',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '9',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '10',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '11',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '12',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '13',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '14',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '15',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '16',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '17',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '18',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '19',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  },

  {
    id: '20',
    description: 'Лампочка и кружочек',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
  }
  ];

  function getPhotoPosts (skip, top, filterConfig) {
    if (skip === undefined)
      skip = 0;
    if (top === undefined)
      top = 10;
    if (filterConfig !== undefined) {
      if (filterConfig.author !== undefined) {
        photoPosts = photoPosts.filter(function (currentElement) {
          return currentElement.author == filterConfig.author;
        })   
      }
      else if (filterConfig.hashTags !== undefined) {
        photoPosts = photoPosts.filter(function (currentElement) {
          return currentElement.hashTags == filterConfig.hashTags;
        })   
      }
      else if (filterConfig.createdAt) {
        photoPosts = photoPosts.filter(function (currentElement) {
          return currentElement.createdAt == filterConfig.createdAt;
        })   
      }
    }
    photoPosts.sort(function (postA, postB) {
      return postB.createdAt.getTime() - postA.createdAt.getTime();
    });

    return photoPosts.slice(skip, skip + top);
  }

  function getPhotoPost(id) {
    for (i = 0; i < photoPosts.length; i++) {
      if (photoPosts[i].id == id)
        return photoPosts[i];
    }
    return null;
  }

  function validatePhotoPost(photoPost) {
    if (photoPost === undefined) {
      return false;
    } else if (photoPost.id === undefined || typeof(photoPost.author) !== "string") {
      return false;
    } else if (photoPost.description === undefined || typeof(photoPost.author) !== "string" || photoPost.description.length >= 200) {
      return false;
    } else if (photoPost.createdAt === undefined || !(photoPost.createdAt instanceof Date)) {
      return false;
    } else if (photoPost.author === undefined || typeof(photoPost.author) !== "string" || photoPost.author.length == 0) {
      return false;
    } else if (photoPost.photoLink === undefined || (typeof(photoPost.photoLink) !== "string") || photoPost.photoLink.length == 0) {
      return false;
    }
    for (i = 0; i < photoPosts.length, i != photoPosts.indexOf(photoPost); i++) {
      if (photoPost.id == photoPosts[i].id)
        return false;
    }

    return true;
  }

  function addPhotoPost(photoPost) {
    if (validatePhotoPost (photoPost)) {
      photoPosts[photoPosts.length] = photoPost;
      return true;
    }
    return false;
  }

  function editPhotoPost(id, photoPost) {
    var i;
    for (i = 0; i < photoPosts.length; i++) {
      if (photoPosts[i].id == id) {
        if (!validatePhotoPost(photoPosts[i])) {
          return false;
        }
        break;
      }
    }

    if (photoPost.description !== undefined && typeof(photoPost.author) === "string" && photoPost.description.length < 200) {
      photoPost.description = photoPosts[i].description;
    }
    if (photoPost.photoLink !== undefined && typeof(photoPost.photoLink) === "string" && photoPost.photoLink.length > 0) {
      photoPost.photoLink = photoPosts[i].photoLink;
    }
    if (photoPost.hashTags !== undefined) {
      photoPost.hashTags = photoPosts[i].hashTags;
    }

    return true;
  }

  function removePhotoPost(id) {
    var idx = photoPosts.indexOf(getPhotoPost(id));
    if (idx != -1) {
      photoPosts.splice(idx, 1);
      return true;
    }
    return false;
  }

  function check() {
      if (getPhotoPost('1').author == 'Иванов Иван') {
        console.log('1. Works');
      }

      if (getPhotoPost('abc') === null) {
        console.log('2. Works')
      }

      if (removePhotoPost('2') == true) {
        console.log('3. Works')
      }

      if (removePhotoPost('abc') == false) {
        console.log('4. Works')
      }

      if (getPhotoPosts(5,19)[7].author == 'Иванов Иван') {
        console.log('5. Works')
      }

      if (validatePhotoPost(getPhotoPost('11'))) {
        console.log('6. Works')
      }

      if (!validatePhotoPost('abc')) {
        console.log('7. Works')
      }

      if (editPhotoPost('15', { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg' })) {
        console.log('8. Works')
      }
  }

  check();
})();