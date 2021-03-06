window.onload = function(){
    const authToken = localStorage.getItem('loggedUser');
    console.log('Token:', authToken);
    const user_name = localStorage.getItem('username');
    if(authToken !== null) {
        const body = document.getElementById('body');
        const buttonContainer = document.getElementById('buttons-container');
        const displayEditBtn = document.createElement('button');
        displayEditBtn.setAttribute('id', 'edit-btn');
        displayEditBtn.innerHTML = 'Edit';
        buttonContainer.appendChild(displayEditBtn);
        const displayDeleteBtn = document.createElement('button');
        displayDeleteBtn.setAttribute('id', 'delete-btn');
        displayDeleteBtn.innerHTML = 'Delete';
        buttonContainer.appendChild(displayDeleteBtn);
        const logRegContainer = document.getElementById('log-reg');
        const loginDisplay = document.getElementById('login-anch');
        const registerDisplay = document.getElementById('register-anch');
        const userName = document.createElement('p');
        userName.setAttribute('id', 'user-name');
        userName.innerHTML = 'Hello, ' + user_name;
        loginDisplay.style.display = 'none';
        registerDisplay.style.display = 'none';
        logRegContainer.appendChild(userName);
        const logOutBtn = document.createElement('a');
        logOutBtn.setAttribute('href', 'home.html')
        logOutBtn.setAttribute('id', 'logout-btn');
        logOutBtn.innerHTML = 'Logout';
        userName.parentNode.insertBefore(logOutBtn, userName.nextSibling);
        logOutBtn.addEventListener('click', function(){
            localStorage.removeItem('loggedUser');
        });
    }
    
    const current_id = getUrlParameter('postId');
    const current_movie = new Movie();
    const editBtn = document.getElementById('edit-btn');
    const delBtn = document.getElementById('delete-btn');
    const submitBtn = document.getElementById('updateChanges');
    const modalContainer = document.getElementById('edit-modal-container')
    const editModal = document.getElementById('edit-modal');
    const closeModal = document.getElementById('close-modal');
    
    const hiddenMovieId = document.getElementById('movie-id');
    const movieTitle = document.getElementById('movie-title');
    const movieYear = document.getElementById('movie-year');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieGenre = document.getElementById('movie-genre');
    const movieLanguage = document.getElementById('movie-language');
    const movieCountry = document.getElementById('movie-country');
    const moviePoster = document.getElementById('movie-poster');
    const movieImdbRating = document.getElementById('movie-imdb-rating');
    const movieImdbVotes = document.getElementById('movie-imdb-votes');
    const movieImdbId = document.getElementById('movie-imdb-id');
    const movieType = document.getElementById('movie-type');
    const movieEditDate = document.getElementById('editDate');

    current_movie.MovieFetchData(current_id).then(()=>{
        const iMDB_anchor = document.getElementById('imdbAnchor');
        iMDB_anchor.setAttribute('href', `https://www.imdb.com/title/` + current_movie.imdbID + `/?ref_=nv_sr_1`);
        const poster = document.getElementById('movie-poster-container');
        poster.style.backgroundImage = `url("${current_movie.Poster}")`;
        poster.style.backgroundSize = "100% 100%";
        const title = document.getElementById('movie-title-detPage');
        title.innerHTML = current_movie.Title;
        const year = document.getElementById('year-span');
        year.innerHTML = current_movie.Year;
        const runtime = document.getElementById('runtime-span');
        runtime.innerHTML = current_movie.Runtime;
        const genre = document.getElementById('genre-span');
        genre.innerHTML = current_movie.Genre;
        const language = document.getElementById('language-span');
        language.innerHTML = current_movie.Language;
        const country = document.getElementById('country-span');
        country.innerHTML = current_movie.Country;
        const imdb_rating = document.getElementById('imdbRating-span');
        imdb_rating.innerHTML = current_movie.imdbRating;
        const imdb_votes = document.getElementById('imdbVotes-span');
        imdb_votes.innerHTML = current_movie.imdbVotes;
        const imdb_id = document.getElementById('imdbId-span');
        imdb_id.innerHTML = current_movie.imdbID;
        const type = document.getElementById('type-span');
        type.innerHTML = current_movie.Type;
        const editDate = document.getElementById('editDate');
        if(current_movie.lastEdited === undefined) {
            editDate.innerHTML = "";
        }else{
            editDate.innerHTML = "Last edited: " + current_movie.lastEdited;
        }
        
        console.log("XXXXXXXXXXXXXX", current_movie);
    }).then(function(){
        editBtn.addEventListener('click', function(e) {
            current_movie.MovieFetchData(current_id).then(()=>{
                modalContainer.style.display = "block";
                hiddenMovieId.value = current_id;
                movieTitle.value = current_movie.Title;
                movieYear.value = current_movie.Year;
                movieRuntime.value = current_movie.Runtime;
                movieGenre.value = current_movie.Genre;
                movieLanguage.value = current_movie.Language;
                movieCountry.value = current_movie.Country;
                moviePoster.value = current_movie.Poster;
                movieImdbRating.value  = current_movie.imdbRating;
                movieImdbVotes.value = current_movie.imdbVotes;
                movieImdbId.value = current_movie.imdbID;
                console.log("current_movie:", current_movie);
                movieType.value = current_movie.Type;
                movieEditDate.innerHTML = current_movie.lastEdited;
                console.log("CCCCCCCCCCCC", current_movie);
                if(current_movie.lastEdited === undefined) {
                    editDate.innerHTML = "";
                }else{
                    editDate.innerHTML = "Last edited: " + current_movie.lastEdited;
                }
            });
        })
    }).then(()=>{
        closeModal.addEventListener('click', function(){
            modalContainer.style.display = 'none';
        })
    }).then(function(){
        submitBtn.addEventListener('click', function(e) {
            let date = new Date();
            const editDate = document.getElementById('editDate');
            console.log(date);

            editDate.innerHTML = date;
            
            
            
            const updateId = hiddenMovieId.value;
            const updateTitle = movieTitle.value;
            const updateYear = movieYear.value;
            const updateRuntime = movieRuntime.value;
            const updateGenre = movieGenre.value;
            const updateLanguage = movieLanguage.value;
            const updateCountry = movieCountry.value;
            const updatePoster = moviePoster.value;
            const updateImdbRating = movieImdbRating.value;
            const updateImdbVotes = movieImdbVotes.value;
            const updateImdbId = movieImdbId.value;
            const updateType = movieType.value;
            const updateLastEdited = date;

            const updateData = {
                Title: updateTitle,
                Year: updateYear,
                Runtime: updateRuntime,
                Genre: updateGenre,
                Language: updateLanguage,
                Country: updateCountry,
                Poster: updatePoster,
                imdbRating: updateImdbRating,
                imdbVotes: updateImdbVotes,
                imdbID: updateImdbId,
                Type: updateType,
                lastEdited: updateLastEdited
            }
            console.log("Update data", updateData);
            modalContainer.style.display = "none";

            current_movie.MovieUpdate(updateId, updateData, authToken).then(()=>{
                
                const edited_movie = new Movie();
            
                edited_movie.MovieFetchData(current_id).then(()=>{
                    const poster = document.getElementById('movie-poster-container');
                    poster.style.backgroundImage = `url("${edited_movie.Poster}")`;
                    poster.style.backgroundSize = "100% 100%";
                    const title = document.getElementById('movie-title-detPage');
                    title.innerHTML = edited_movie.Title;
                    const year = document.getElementById('year-span');
                    year.innerHTML = edited_movie.Year;
                    const runtime = document.getElementById('runtime-span');
                    runtime.innerHTML = edited_movie.Runtime;
                    const genre = document.getElementById('genre-span');
                    genre.innerHTML = edited_movie.Genre;
                    const language = document.getElementById('language-span');
                    language.innerHTML = edited_movie.Language;
                    const country = document.getElementById('country-span');
                    country.innerHTML = edited_movie.Country;
                    const imdb_rating = document.getElementById('imdbRating-span');
                    imdb_rating.innerHTML = edited_movie.imdbRating;
                    const imdb_votes = document.getElementById('imdbVotes-span');
                    imdb_votes.innerHTML = edited_movie.imdbVotes;
                    const imdb_id = document.getElementById('imdbId-span');
                    imdb_id.innerHTML = edited_movie.imdbID;
                    const type = document.getElementById('type-span');
                    type.innerHTML = edited_movie.Type;
                    const editDate = document.getElementById('editDate');
                    if(edited_movie.lastEdited === undefined) {
                        editDate.innerHTML = "";
                    }else{
                        editDate.innerHTML = "Last edited: " + edited_movie.lastEdited;
                    }

                    console.log("XXXXXXXXXXXXXX", edited_movie);
                    const updatedLastEdited = document.getElementById('editDate');
                    updatedLastEdited.innerHTML = "Edited: " + updateData.lastEdited;
                });
            });
        });
    });

    delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this movie?")) {
            $('.message').text("You deleted a movie!");
            current_movie.deleteMovie(current_id, authToken);
        } else {
            $('.message').text("You canceled the action!");
        }
    });
}
                

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};