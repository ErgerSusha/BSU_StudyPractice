;
var mainScript = (function() {
    var photoPosts = [{
            id: '1',
            description: 'Описание',
            createdAt: new Date('2018-12-31T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ingopneus.com.br/blog/wp-content/uploads/2017/01/ingo-pneus-4x4-rodas-1.jpg',
            hashtags: '#hashtag1'
        },

        {
            id: '2',
            description: 'Описание',
            createdAt: new Date('2018-01-21T10:00:00'),
            author: 'Susha Yauheni',
            photoLink: 'https://i.pinimg.com/originals/cc/93/11/cc931132b9b6ac2b5d22a79ccc4b6c51.jpg',
            hashtags: '#hashtag23'
        },

        {
            id: '3',
            description: 'Описание',
            createdAt: new Date('2015-02-23T15:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://static-eu.insales.ru/images/products/1/5315/73118915/e5f4685ef69a22816d06098947ba1138_1_.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '4',
            description: 'Описание',
            createdAt: new Date('2018-02-23T20:00:00'),
            author: 'Иванов Иванw',
            photoLink: 'http://azov-off-road.com.ua/wp-content/uploads/2016/03/gaz-66-off-road-4.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '5',
            description: 'Описание',
            createdAt: new Date('2004-02-23T23:00:00'),
            author: 'Susha Yauheni',
            photoLink: 'http://azov-off-road.com.ua/wp-content/uploads/2016/05/GAZ-69-9.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '6',
            description: 'Описание',
            createdAt: new Date('2018-02-22T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://blog.caranddriver.com/wp-content/uploads/2015/08/raptor-626x381.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '7',
            description: 'Описание',
            createdAt: new Date('2010-02-23T10:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ingopneus.com.br/blog/wp-content/uploads/2017/01/ingo-pneus-4x4-rodas-1.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '8',
            description: 'Описание',
            createdAt: new Date('2008-08-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://cdn.trinixy.ru/pics4/20111123/mountains_25.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '9',
            description: 'Описание',
            createdAt: new Date('2018-08-09T23:00:00'),
            author: 'Susha Yauheni',
            photoLink: 'https://static-eu.insales.ru/images/products/1/5315/73118915/e5f4685ef69a22816d06098947ba1138_1_.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '10',
            description: 'Описание',
            createdAt: new Date('2008-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ingopneus.com.br/blog/wp-content/uploads/2017/01/ingo-pneus-4x4-rodas-1.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '11',
            description: 'Лампочкаd и кружочек',
            createdAt: new Date('2017-02-23T23:07:07'),
            author: 'Ивановd Иван',
            photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTex2SRFwLKkdg5vHPvf3OpjAM3HxL2dBVkT59ecp0-uqFDhxXl',
            hashtags: '#хештеги'
        },

        {
            id: '12',
            description: 'Описание',
            createdAt: new Date('2018-02-23T23:17:00'),
            author: 'Иванов Иван',
            photoLink: 'http://azov-off-road.com.ua/wp-content/uploads/2016/03/gaz-66-off-road-4.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '13',
            description: 'Описание',
            createdAt: new Date('2018-02-23T23:18:00'),
            author: 'Иванов Иван',
            photoLink: 'https://static-eu.insales.ru/images/products/1/5315/73118915/e5f4685ef69a22816d06098947ba1138_1_.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '14',
            description: 'Описание',
            createdAt: new Date('2018-01-23T23:00:00'),
            author: 'Susha Yauheni',
            photoLink: 'http://ingopneus.com.br/blog/wp-content/uploads/2017/01/ingo-pneus-4x4-rodas-1.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '15',
            description: 'Описание',
            createdAt: new Date('2018-02-21T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTex2SRFwLKkdg5vHPvf3OpjAM3HxL2dBVkT59ecp0-uqFDhxXl',
            hashtags: '#хештеги'
        },

        {
            id: '16',
            description: 'Описание',
            createdAt: new Date('2005-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://static-eu.insales.ru/images/products/1/5315/73118915/e5f4685ef69a22816d06098947ba1138_1_.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '17',
            description: 'Описание',
            createdAt: new Date('2009-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ingopneus.com.br/blog/wp-content/uploads/2017/01/ingo-pneus-4x4-rodas-1.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '18',
            description: 'Описание',
            createdAt: new Date('2018-06-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTex2SRFwLKkdg5vHPvf3OpjAM3HxL2dBVkT59ecp0-uqFDhxXl',
            hashtags: '#хештеги'
        },

        {
            id: '19',
            description: 'Описание',
            createdAt: new Date('2004-04-23T23:04:00'),
            author: 'Иванов Иван',
            photoLink: 'http://azov-off-road.com.ua/wp-content/uploads/2016/03/gaz-66-off-road-4.jpg',
            hashtags: '#хештеги'
        },

        {
            id: '20',
            description: 'Описание',
            createdAt: new Date('2000-01-01T23:00:00'),
            author: 'Иванов Иванqwe',
            photoLink: 'http://ingopneus.com.br/blog/wp-content/uploads/2017/01/ingo-pneus-4x4-rodas-1.jpg',
            hashtags: '#хештеги'
        }
    ];

    return {
        getPhotoPosts: function(skip, top, filterConfig) {
          var posts = null;
            if (filterConfig !== undefined) {
                if (filterConfig.author !== undefined) {
                    posts = photoPosts.filter(function( obj ) { return obj.author === filterConfig.author;});
                }
                if (filterConfig.createdAt !== undefined) {
                    posts = photoPosts.filter(function( obj ) { return obj.createdAt >= filterConfig.createdAt;});
                }
            } else {
                posts = photoPosts;
            }

            posts.sort(function(post1, post2) {
                return post2.createdAt - post1.createdAt;
            });
            return posts.slice(skip, skip + top);
        },

        getPhotoPost: function(id) {
            for (i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id)
                    return photoPosts[i];
            }
            return null;
        },

        validatePhotoPost: function(photoPost) {
            if (photoPost === undefined) {
                return false;
            } else if (photoPost.id === undefined || typeof(photoPost.author) !== "string") {
                return false;
            } else if (photoPost.description === undefined ||
                typeof(photoPost.author) !== "string" || photoPost.description.length >= 200) {
                return false;
            } else if (photoPost.createdAt === undefined || !(photoPost.createdAt instanceof Date)) {
                return false;
            } else if (photoPost.author === undefined || typeof(photoPost.author) !== "string" || photoPost.author.length === 0) {
                return false;
            } else if (photoPost.photoLink === undefined ||
                (typeof(photoPost.photoLink) !== "string") || photoPost.photoLink.length === 0) {
                return false;
            }

            return true;
        },

        addPhotoPost: function(photoPost) {
            if (this.validatePhotoPost(photoPost)) {
                photoPosts[photoPosts.length] = photoPost;
                return true;
            }
            return false;
        },

        editPhotoPost: function(id, photoPost) {
            let i = this.getPhotoPost(id).id;
            if (i === null)
              return false;
            if (photoPost.description !== undefined && typeof(photoPost.author) === "string" && photoPost.description.length < 200) {
                photoPosts[i].description = photoPost.description;
            }
            if (photoPost.photoLink !== undefined && typeof(photoPost.photoLink) === "string" && photoPost.photoLink.length > 0) {
                photoPosts[i].photoLink = photoPost.photoLink;
            }
            if (photoPost.hashtags !== undefined) {
                photoPosts[i].hashtags = photoPost.hashtags;
            }

            return true;
        },

        removePhotoPost: function(id) {
            let idx = photoPosts.indexOf(this.getPhotoPost(id));
            if (idx != -1) {
                photoPosts.splice(idx, 1);
                return true;
            }
            return false;
        }
    }
}());