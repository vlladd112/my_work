window.onload = function() {
    var posts = new GamesList;
    posts.fetchData().then(function() {
        //console.log('ANANAS');
        var containerGames = document.getElementById('container');
        containerGames.setAttribute('class', 'global-games-container')
        for(var i=0; i<posts.items.length; i++) {
            var containerElement = document.createElement('div');
            containerElement.setAttribute('class', 'game-container')
            containerElement.innerHTML =
                '<h3 class="game-title">' + posts.items[i].title + '</h3>' + 
                '<img class="game-image" src="' + posts.items[i].imageUrl + '">' + 
                '<p class="game-description">' + posts.items[i].description + '</p>' + 
                '<a href="#game-description-update"><button class="up-btn" data-update-id="' + posts.items[i]._id + '">Update Game Details</button></a>' + 
                '<button type="submit" class="del-btn" data-delete-id="' + posts.items[i]._id + '">Delete Game</button>'
            containerGames.appendChild(containerElement);
            
            var delGameBtn = document.querySelector('[data-delete-id="' + posts.items[i]._id + '"]');
            delGameBtn.addEventListener('click', function(event) {
                var id = this.getAttribute('data-delete-id');
                console.log('XXX', id);
                GameDelete(id)
            });
            
            var updateGameDetails = document.querySelector('[data-update-id="' + posts.items[i]._id + '"]');
            updateGameDetails.addEventListener('click', function(event) {
                //alert('DA');
                var id = this.getAttribute('data-update-id');
                GameUpp(id);  
            });
            
//            var gameElementTitle = document.createElement('h3');
//            gameElementTitle.innerHTML = posts.items[i].title;
//            containerGames.appendChild(gameElementTitle);
//            var gameElementImage = document.createElement('img');
//            gameElementImage.setAttribute('src', posts.items[i].imageUrl);
//            gameElementImage.setAttribute('title', 'Game image');
//            containerGames.appendChild(gameElementImage);
//            var gameElementDescription = document.createElement('p');
//            gameElementDescription.innerHTML = posts.items[i].description;
//            containerGames.appendChild(gameElementDescription);
        }
    }).then(function() {
        var submitGamePost = document.getElementById('post-submit');
    submitGamePost.onclick = function(event) {
        //alert('CLICK');
        //event.preventDefault();
        var gameTitle = document.getElementById('post-title').value;
        var gameImage = document.getElementById('post-image').value;
        var gameDescription = document.getElementById('post-description').value;
        console.log(gameTitle);
        var gameData = new Game(); 
        gameData = {
            title: gameTitle,
            imageUrl: gameImage,
            description: gameDescription
        }
        console.log(gameData);
        GamePost(gameData);
        
        var resTitleValue = document.getElementById('post-title');
        resTitleValue.value = "";
        var resImageValue = document.getElementById('post-image');
        resImageValue.value = "";
        var resDescriptionValue = document.getElementById('post-description');
        resDescriptionValue.value = "";
        //return gameData;
        };
    }).then(function() {
        var submitGameUpdates = document.getElementById('game-update-submit-btn');
        submitGameUpdates.addEventListener('click', function(event) {
            event.preventDefault;
            //alert('CLLCLCLCLCL');
            var upid = document.getElementById('game-id-update').value;
            var uptitle = document.getElementById('game-title-update').value;
            var updescription = document.getElementById('game-description-update').value;
            var updata = {
                //_id: upid,
                title: uptitle,
                //imageUrl: "",
                description: updescription
            };
            console.log('Update data =', updata);
            GameUpdate(upid, updata);
            var resetTitleValue = document.getElementById('game-title-update');
            resetTitleValue.value = "";
            var resetDescriptionValue = document.getElementById('game-description-update');
            resetDescriptionValue.value = "";
            console.log('GTA=', uptitle);
            uptitle = "";
            console.log('GTA=', uptitle);
            
        });
        
    });
    
};
