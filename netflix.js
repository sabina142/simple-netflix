// Sample data for movies and series
const movies = [
    { id: 1, title: 'hanuman', description:'Movie:Hanuman Relesed:2024 Hero:teja sajja Director:prasanth varma', image: 'movie.jpg', video: 'movie1.mp4' },
    { id: 2, title: 'happy days', description: 'Movie:Happy days Relesed:2007 Hero:varunsandesh Director:sekhar kammula', image: 'happy.jpg', video: 'movie2.mp4' },
    { id: 3, title: 'bahubali', description: 'Movie:Bahubali Relesed:2015 cast:prabhas,anushka setty Director:Rajamouli', image: 'bahu.jpg', video: 'movie3.mp4' },
    { id: 4, title: 'maharshi', description: 'Movie:Maharshi Released:2019 Genre:drama,action,thriller Hero:Mahesh babu Director:vamshi pidipally', image: 'maharshi.jpg', video: 'movie3.mp4' },
    { id: 5, title: 'motu pathulu', description: 'cartoon:motu pathulu streeming:2010 Genre:cartoons Director:suhas kadav', image: 'motu.jpg', video: 'movie3.mp4' }


];

// Function to display the list of movies
function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.onclick = () => showMovieDetails(movie);
        
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieList.appendChild(movieCard);
    });
}

// Function to show movie details
function showMovieDetails(movie) {
    document.getElementById('moviesSection').style.display = 'none';
    document.getElementById('detailsSection').style.display = 'block';

    const movieDetails = document.getElementById('movieDetails');
    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <button onclick="playVideo('${movie.video}')">Play</button>
    `;
}

// Function to go back to the home section
function backToHome() {
    document.getElementById('detailsSection').style.display = 'none';
    document.getElementById('playerSection').style.display = 'none';
    document.getElementById('moviesSection').style.display = 'block';
}

// Function to play video
function playVideo(videoSource) {
    document.getElementById('detailsSection').style.display = 'none';
    document.getElementById('playerSection').style.display = 'block';

    const videoPlayer = document.getElementById('videoPlayer');
    const videoElement = document.getElementById('videoSource');
    videoElement.src = videoSource;
    videoPlayer.querySelector('video').load();
}

// Function to go back to the movie details
function backToDetails() {
    document.getElementById('playerSection').style.display = 'none';
    document.getElementById('detailsSection').style.display = 'block';
}

// Initialize the application
displayMovies();
