function Game() {
    this._id = "";
    this.title = "";
    this.imageUrl = "";
    this.description = "";
}
//Game.prototype.fetchData() = function(gms) {
//    //var this = that;
//    return $.ajax('https://games-world.herokuapp.com/games', {
//        method: 'GET',
//        success: function(games) {
//            that.title = games.title;
//            that.description = games.description;
//            that.genre = games.genre;
//            that.imageUrl = games.imageUrl;
//            console.log(data);
//        }, error: function() {
//            console.log('ERROR loading games');
//        }
//    })
//}
