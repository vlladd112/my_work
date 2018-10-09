window.onload = function() {
    var submitGamePost = document.getElementById('post-submit');
    submitGamePost.onclick = function(event) {
        
        //alert('CLICK');
        event.preventDefault;
        var gameTitle = document.getElementById('post-title').value;
        var gameImage = document.getElementById('post-image').value;
        var gameDescription = document.getElementById('post-description').value;
        var gameData = {
            title: gameTitle,
            imageUrl: gameImage,
            description: gameDescription
        }
        GamePost();
    }
}