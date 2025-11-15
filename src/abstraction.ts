// OOP --> abstraction ---> idea thakbe, real implementation thakbe na--> jemon summary

// idea
// implementation pore korbo

/* 
1. interface
2. abstract class
*/

//idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// //implementation
// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log(`Music Playing....`);
//   }
//   pause(): void {
//     console.log(`Music  paused....`);
//   }
//   stop(): void {
//     console.log(`Music stopped....`);
//   }
// }

// const PiashPlayer = new MusicPlayer();

// PiashPlayer.play()

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implementation
class PiashPlayer extends MediaPlayer {
  play(): void {
    console.log(`Music Playing....`);
  }
  pause(): void {
    console.log(`Music Paused....`);
  }
  stop(): void {
    console.log(`Music Stopped....`);
  }
}

const piashPlayer1 = new PiashPlayer();
piashPlayer1.play();
