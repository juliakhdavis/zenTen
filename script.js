const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Enter song titles here as strings in an array
const songs = ['songs', 'go', 'here']

// Keeps track of songs. index is two because we start count at zero
let songIndex = 2

// load songs into DOM
loadSong(songs[songIndex])

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex= songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > song.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

// update song details 
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3` //COME BACK AND CHECK SYNTAX LATER
    cover.src = `images/${song}.jpg`
}

function updateProgress(e) {
    // console.log(e.srcElement.duration)
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.getElementsByClassName.width = `${progressPercent}%` //COME BACK TO THIS
}

function setProgress(e) {
    const width = this.clientWidth // MUSIC PROGRESS BAR LENGTH
    const clickX = e.offsetX // COME BACK TO THIS
    const duration = audio.duration
    
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPLaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Change song events
prevBtn.addEventListener('click', prevSong)
prevBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)
const musicEL = document.querySelector(".musicContainer")
const imageEL = document.querySelector(".imageContainer")
const quoteEL = document.querySelector(".quoteContainer")


// imageApi = 'https://api.unsplash.com/photos/?client_id=R_iTdb6HaJJNCC32vNG2rbg9Am-stogGSupk5Xq9ZGs'

quoteApi = "https://type.fit/api/quotes"


// https://type.fit/api/quotes free code camp returns 1600 quotes



// fetch(imageApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (imageData) {
//   console.log(imageData)

//   imageEL.textContent = 

// });

fetch(quoteApi)
.then(function (response) {
  return response.json();
})
.then(function (quoteData) {
  console.log(quoteData)


});

// fetch(musicApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (musicData) {
//   console.log(musicData)

// });
