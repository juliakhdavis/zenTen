
const timeError = document.getElementById("timeError")
const musicContainer = document.querySelector('.music-container')
const paramStars = document.getElementById("paramStars")
const paramOcean = document.getElementById("paramOcean")
const paramNature = document.getElementById("paramNature")
const paramSun = document.getElementById("paramSun")
const paramCity = document.getElementById("paramCity")
const startBtn = document.querySelector("#startBtn")
// const playBtn = document.querySelector('#play')
// const prevBtn = document.querySelector('#prev')
// const nextBtn = document.querySelector('#next')
// const audio = document.querySelector('#audio')
// const progress = document.querySelector('.progress')
// const progressContainer = document.querySelector('.progress-container')
// const title = document.querySelector('#title')
// const cover = document.querySelector('#cover')
// const currTime = currTime = document.querySelector('#currTime') //Come back to this
// const durTime = document.querySelector('#durTime') //Come back to this

// Enter song titles here as strings in an array
// const songs = ['songs', 'go', 'here']

paramOcean.addEventListener("click", function() {

    if (!paramOcean.classList.contains("clicked")) {
        paramOcean.classList.add("clicked")
    } else {
        paramOcean.classList.remove("clicked")
    }
})
paramStars.addEventListener("click", function() {

    if (!paramStars.classList.contains("clicked")) {
        paramStars.classList.add("clicked")
    } else {
        paramStars.classList.remove("clicked")
    }
})
paramNature.addEventListener("click", function() {

    if (!paramNature.classList.contains("clicked")) {
        paramNature.classList.add("clicked")
    } else {
        paramNature.classList.remove("clicked")
    }
})
paramSun.addEventListener("click", function() {

    if (!paramSun.classList.contains("clicked")) {
        paramSun.classList.add("clicked")
    } else {
        paramSun.classList.remove("clicked")
    }
})
paramCity.addEventListener("click", function() {

    if (!paramCity.classList.contains("clicked")) {
        paramCity.classList.add("clicked")
    } else {
        paramCity.classList.remove("clicked")
    }
})

startBtn.addEventListener("click", function () {
    
    let timeInputVal = document.getElementById("timeInput").value

    if (timeInputVal < 0 || timeInputVal > 10) {
        let newEl = document.createElement("p")
        newEl.textContent = ("Please enter # 1-10")
        newEl.classList.add("red")
        timeError.appendChild(newEl)
        console.log(newEl)
    } else {

        location.href = "start.html"
        localStorage.setItem("timeInput", timeInputVal)
    
}})


// Keeps track of songs. index is two because we start count at zero
// let songIndex = 2

// // load songs into DOM
// loadSong(songs[songIndex])

// function playSong() {
//     musicContainer.classList.add('play')
//     playBtn.querySelector('i.fas').classList.remove('fa-play')
//     playBtn.querySelector('i.fas').classList.add('fa-pause')

//     audio.play()
// }

// function pauseSong() {
//     musicContainer.classList.add('play')
//     playBtn.querySelector('i.fas').classList.add('fa-play')
//     playBtn.querySelector('i.fas').classList.remove('fa-pause')

//     audio.pause()
// }

// function prevSong() {
//     songIndex--

//     if(songIndex < 0) {
//         songIndex= songs.length - 1
//     }

//     loadSong(songs[songIndex])

//     playSong()
// }

// function nextSong() {
//     songIndex++

//     if(songIndex > song.length - 1) {
//         songIndex = 0
//     }

//     loadSong(songs[songIndex])

//     playSong()
// }

// // update song details 
// function loadSong(song) {
//     title.innerText = song
//     audio.src = 'music/${song}.mp3' //COME BACK AND CHECK SYNTAX LATER
//     cover.src = 'images/${song}.jpg'
// }

// function updateProgress(e) {
//     // console.log(e.srcElement.duration)
//     const {duration, currentTime} = e.srcElement
//     const progressPercent = (currentTime / duration) * 100
//     progress.getElementsByClassName.width = '${progressPercent}%' //COME BACK TO THIS
// }

// function setProgress(e) {
//     const width = this.clientWidth // MUSIC PROGRESS BAR LENGTH
//     const clickX = e.offsetX // COME BACK TO THIS
//     const duration = audio.duration
    
// }

// // Event listeners
// playBtn.addEventListener('click', () => {
//     const isPLaying = musicContainer.classList.contains('play')

//     if(isPlaying) {
//         pauseSong()
//     } else {
//         playSong()
//     }
// })

// // Change song events
// prevBtn.addEventListener('click', prevSong)
// prevBtn.addEventListener('click', nextSong)

// audio.addEventListener('timeupdate', updateProgress)

// progressContainer.addEventListener('click', setProgress)
