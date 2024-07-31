document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');

    let isPlaying = false;

    const songs = [
        {
            title: "Song Title 1",
            artist: "Artist 1",
            src: "path-to-your-audio-file1.mp3"
        },
        {
            title: "Song Title 2",
            artist: "Artist 2",
            src: "path-to-your-audio-file2.mp3"
        }
    ];

    let currentSongIndex = 0;

    const loadSong = (index) => {
        const song = songs[index];
        audio.src = song.src;
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
    };

    const playSong = () => {
        audio.play();
        isPlaying = true;
        playPauseButton.textContent = 'Pause';
    };

    const pauseSong = () => {
        audio.pause();
        isPlaying = false;
        playPauseButton.textContent = 'Play';
    };

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    // Initial load
    loadSong(currentSongIndex);
});
