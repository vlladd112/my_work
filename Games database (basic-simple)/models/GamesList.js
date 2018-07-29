function GamesList() {
    this.items = [];
}
function refreshhh() {
    window.location.reload(true);      
}
GamesList.prototype.fetchData = function() {
    var that = this;
    return $.ajax('https://games-world.herokuapp.com/games', {
        method: 'GET',
        success: function(response) {
            console.log(response);
            for(var i=0; i<response.length; i++) {
                var gameItem = response[i];
                console.log(gameItem.title);
                var gameModel = new Game();
                gameModel._id = gameItem._id;
                gameModel.title = gameItem.title;
                gameModel.imageUrl = gameItem.imageUrl;
                gameModel.description = gameItem.description;
                that.items.push(gameModel);
                //console.log(gameModel);
            }
        }
    });
}
function GamePost(gameData) {
    return $.ajax('https://games-world.herokuapp.com/games/', {
        method: 'POST',
        data: gameData,
//        data: {title: 'a',
//               imageUrl: 's',
//               description: 'd'},
        success: function(responseGamePostData) {
            console.log(gameData);
            console.log('ResponseGPD:', responseGamePostData);
            
            globalGamesContainer = document.getElementById('container');
            var gameContainer = document.getElementsByClassName('game-container');
            for(var i=0; i<gameContainer.length; i++) {
                console.log('length=', gameContainer.length);
                console.log('i=', i);
                if(i < gameContainer.length) {
                    globalGamesContainer.removeChild(gameContainer[i]);
                    i--;
                }
            }
            var posts = new GamesList;
            posts.fetchData().then(function() {
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
                    //+refreshhh();
                    
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
                }
            })
            
            //refreshhh();
            //return gameData;
        }
        
    });
}
function GameDelete(id) {
    return $.ajax('https://games-world.herokuapp.com/games/' + id, {
        method: 'DELETE',
        success: function(response) {
            console.log('Deleted:', response);
      //      $(this).parent().remove();
            globalGamesContainer = document.getElementById('container');
            var gameContainer = document.getElementsByClassName('game-container');
            for(var i=0; i<gameContainer.length; i++) {
                console.log('length=', gameContainer.length);
                console.log('i=', i);
                if(i < gameContainer.length) {
                    globalGamesContainer.removeChild(gameContainer[i]);
                    i--;
                }
            }
            var posts = new GamesList;
            posts.fetchData().then(function() {
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
                    //+refreshhh();
                    
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
                }
            })
        }
    });
}


// Here you get the game details(including id) from the game and populate the inputs with it. this happens when you click "Update Game Details"
function GameUpp(id) {
    return $.ajax('https://games-world.herokuapp.com/games/' + id, {
        method: 'GET',
        success: function(response) {
            console.log(response);
            var uppId = document.getElementById('game-id-update');
            var uppTitle = document.getElementById('game-title-update');
            var uppDescr = document.getElementById('game-description-update');
            uppId.value = response._id;
            uppTitle.value = response.title;
            uppDescr.value = response.description;
        }
    })
}

function GameUpdate(upid, updata) {
    return $.ajax('https://games-world.herokuapp.com/games/' + upid, {
        method: 'PUT',
        data: updata,
        success: function(response) {
            console.log('Response =', response);

            globalGamesContainer = document.getElementById('container');
            var gameContainer = document.getElementsByClassName('game-container');
            for(var i=0; i<gameContainer.length; i++) {
                console.log('length=', gameContainer.length);
                console.log('i=', i);
                if(i < gameContainer.length) {
                    globalGamesContainer.removeChild(gameContainer[i]);
                    i--;
                }
            }
            var posts = new GamesList;
            posts.fetchData().then(function() {
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
                    //+refreshhh();
                    
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
                }
            })
            
            //refreshhh();
        }
    });
}