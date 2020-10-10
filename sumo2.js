console.log("here");

let video;
let poseNet;
let pose;
let skeleton;
let mycanvas;
let p = 0;
let q = 0;
let w = 0;
let time1 = 5;
//score vars
let feet;
let k;
let sp;
let ss;
let h;
let m;
let mf;
let n;
let nf;

//testing vars
let f = 0;
let g = 0;
let start = 0;

//Audio
let playwelcome = false;
let playscorebased = false;
let playtech = false;
let playtechside = false;
let playawesome = false;

setInterval(function () {
  m = feet;
  n = sp + ss + h + k;
}, 900);

//time vars
let tf = 20;
let ts = 20;
let settf = 0;
let setts = 0;

//where we have reached
let s = 0;
let r = 0;

function preload() {
  myfont = loadFont("poppins.ttf");
}

function setup() {
  mycanvas = createCanvas(640, 480);
  mycanvas.parent("#canvas-div");
  mycanvas.style.zIndex = "10";

  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

  /*welcomeA = new Audio("welcome.mp3");
  attemptingA = new Audio("attempting.mp3");

  setTimeout(function () {
    welcomeA.play();

    setTimeout(function () {
      attemptingA.play();
    }, 5000);
  }, 1000);*/
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log("poseNet ready");
}

function draw() {
  rect(0, 0, 640, 480);
  push();
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);

  if (pose) {
    if (start == 1) {
      if (!playwelcome) {
        playwelcome = true;
        welcomeA = new Audio("audios/welcome.mp3");
        attemptingA = new Audio("audios/attempting.mp3");

        setTimeout(function () {
          welcomeA.play();

          setTimeout(function () {
            attemptingA.play();
          }, 5000);
        }, 1000);
      }

      let lsx = pose.leftShoulder.x;
      let lsy = pose.leftShoulder.y;
      let rsx = pose.rightShoulder.x;
      let rsy = pose.rightShoulder.y;
      let lax = pose.leftAnkle.x;
      let rax = pose.rightAnkle.x;
      let lay = pose.leftAnkle.y;
      let ray = pose.rightAnkle.y;
      let rhy = pose.rightHip.y;
      let rhx = pose.rightHip.x;
      let lhy = pose.leftHip.y;
      let lhx = pose.leftHip.x;
      let rky = pose.rightKnee.y;
      let lkx = pose.leftKnee.x;
      let rkx = pose.rightKnee.x;
      let lky = pose.leftKnee.y;
      let lwx = pose.leftWrist.x;
      let lwy = pose.leftWrist.y;
      let rwx = pose.rightWrist.x;
      let rwy = pose.rightWrist.y;

      if (pose.score < 1 && p == 0 && w == 0) {
        for (let i = 5; i < 13; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          strokeWeight(2);
          fill("rgba(255, 0, 0, 0.4)");
          ellipse(x, y, 20, 20);
        }
        for (let i = 0; i < skeleton.length; i++) {
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(2);
          stroke("rgba(255, 0, 0, 1)");
          line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
        pop();

        fill("rgba(221,51,51, 1)");
        textStyle(BOLDITALIC);
        stroke(0, 0, 0);
        strokeWeight(5);
        textFont(myfont);
        t = "MOVE TO CAPTURE";
        textSize(50);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        text(t, width / 2, 140);
        text("COMPLETE BODY", width / 2, 250);

        setTimeout(function () {
          f = 1;
        }, 16000);
      }
      //if (((pose.score > 0.9 && p == 0) || w == 1) && f == 1) {
      if (f == 1) {
        w = 1;

        if (w == 1) {
          for (let i = 0; i < 17; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            strokeWeight(2);
            fill("rgba(0, 255, 0, 0.4)");
            ellipse(x, y, 20, 20);
          }
          for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(4);
            stroke("rgba(0, 255, 0, 0.4)");
            line(a.position.x, a.position.y, b.position.x, b.position.y);
          }

          let scorebasedA = new Audio("audios/scorebased.mp3");
          let scorebased2A = new Audio("audios/scorebased2.mp3");
          let a3 = new Audio("audios/3.mp3");
          let a2 = new Audio("audios/2.mp3");
          let a1 = new Audio("audios/1.mp3");
          let go = new Audio("audios/go.mp3");

          setTimeout(function () {
            if (!playscorebased) {
              playscorebased = true;
              scorebasedA.play();

              setTimeout(function () {
                scorebased2A.play();

                setTimeout(function () {
                  a3.play();

                  setTimeout(function () {
                    a2.play();

                    setTimeout(function () {
                      a1.play();

                      setTimeout(function () {
                        go.play();
                        g = 1;
                        p = 1;
                        w = 0;
                        f = 0;
                      }, 900);
                    }, 800);
                  }, 4200);
                }, 8500);
              }, 7500);
            }
          }, 1000);

          pop();
          fill("rgb(37,211,102)");
          strokeWeight(5);
          stroke(0, 0, 0);
          textFont(myfont);
          textStyle(BOLDITALIC);
          t1 = "DO NOT MOVE AWAY ";
          t3 = "PERFORM THE SUMO SQUAT";
          t4 = "HOLD FOR 20 SECONDS";
          textSize(45);
          textAlign(CENTER, CENTER);
          textStyle(BOLD);
          text(t1, width / 2, 100);
          text(t3, width / 2, 180);
          text(t4, width / 2, 260);

          fill(255, 255, 255);

          /*setTimeout(function () {
              p = 1;
              w = 0;
            }, 5000);*/
        }
      }
      //if (pose.score < 1 && p == 1 && s == 0 && g == 1) {
      if (g == 1) {
        if (settf == 0) {
          settf = 1;
          setInterval(function () {
            tf--;
          }, 1000);
        }

        for (let i = 0; i < 17; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          fill("rgba(0, 255, 0, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(x, y, 20, 20);
        }
        if (feet == 0) {
          fill("rgba(255, 0, 0, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lax, lay, 20, 20);
          ellipse(rax, ray, 20, 20);
        }
        if (feet == 1) {
          fill("rgba(255,133,0, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lax, lay, 20, 20);
          ellipse(rax, ray, 20, 20);
        }
        if (feet == 2) {
          fill("rgba(255,255,0, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lax, lay, 20, 20);
          ellipse(rax, ray, 20, 20);
        }
        if (feet == 3) {
          fill("rgba(0,255,0, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lax, lay, 20, 20);
          ellipse(rax, ray, 20, 20);
        }
        if (feet == 4) {
          fill("rgba(153,0,255, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lax, lay, 20, 20);
          ellipse(rax, ray, 20, 20);
        }

        for (let i = 0; i < skeleton.length; i++) {
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(4);
          stroke(255, 255, 255);
          line(a.position.x, a.position.y, b.position.x, b.position.y);
        }

        pop();

        push();
        fill(255, 153, 0);
        if (tf > -1) text(tf, width - 60, 60);
        stroke(0, 0, 0);
        textSize(50);
        pop();

        fill(255, 255, 255);
        stroke(0, 0, 0);
        strokeWeight(2);
        textFont(myfont);

        if (tf == 15) {
          if (!playtech) {
            playtech = true;
            let techA = new Audio("audios/technique.mp3");
            let tech2A = new Audio("audios/technique2.mp3");

            techA.play();
            setTimeout(function () {
              tech2A.play();
            }, 9000);
          }
        }

        if (abs(lax - rax) / abs(lsx - rsx) > 2.25) {
          feet = 4;
        } else if (abs(lax - rax) / abs(lsx - rsx) > 2) {
          feet = 3;
        } else if (abs(lax - rax) / abs(lsx - rsx) > 1.8) {
          feet = 2;
        } else if (abs(lax - rax) / abs(lsx - rsx) > 1.6) {
          feet = 1;
        } else if (abs(lax - rax) / abs(lsx - rsx) <= 1.6) {
          feet = 0;
        }

        setTimeout(function () {
          if (s == 0) {
            saveCanvas(mycanvas, "upUgo-SumoSquat_Front_Assessment", "png");
            mf = m;
            s = 1;
            p = 2;
            w = 2;
          }
        }, 20000);
      }

      if (s == 1 && r == 0) {
        if (!playawesome) {
          playawesome = true;
          let relaxA = new Audio("audios/relax.mp3");
          let turnA = new Audio("audios/turn.mp3");
          let onceagainA = new Audio("audios/onceagain.mp3");
          let letsgoA = new Audio("audios/letsgo.mp3");
          let a2 = new Audio("audios/2.mp3");
          let a1 = new Audio("audios/1.mp3");
          let go = new Audio("audios/go.mp3");

          setTimeout(function () {
            relaxA.play();
          }, 700);

          setTimeout(function () {
            turnA.play();
          }, 4000);

          setTimeout(function () {
            onceagainA.play();

            setTimeout(function () {
              letsgoA.play();

              setTimeout(function () {
                a2.play();

                setTimeout(function () {
                  a1.play();

                  setTimeout(function () {
                    go.play();
                    g = 1;
                    p = 1;
                    w = 0;
                    f = 0;
                  }, 900);
                }, 800);
              }, 1700);
            }, 5000);
          }, 16000);
        }

        push();
        for (let i = 5; i < 13; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          fill("rgba(255, 255, 0, 0.4)");
          stroke(0, 0, 0);
          strokeWeight(2);
          ellipse(x, y, 20, 20);
        }
        for (let i = 0; i < skeleton.length; i++) {
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(4);
          stroke("rgba(255, 255, 0,1)");
          line(a.position.x, a.position.y, b.position.x, b.position.y);
        }

        pop();
        fill(255, 241, 78);
        stroke(0, 0, 0);
        strokeWeight(6);
        textFont(myfont);
        t = "TURN TO YOUR SIDE AND";
        t2 = "GET READY TO";
        t3 = "PERFORM AGAIN";
        textSize(50);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        text(t, width / 2, 140);
        text(t2, width / 2, 200);
        text(t3, width / 2, 260);

        setTimeout(function () {
          r = 1;
        }, 24000);
      }

      if (s == 1 && r == 1) {
        //if (frameCount % 30 == 0 && ts > 0) ts--;
        if (setts == 0) {
          setts = 1;
          setInterval(function () {
            ts--;
          }, 1000);
        }

        /*for (let i = 0; i < 17; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          fill("rgba(255, 255, 255, 0.8)");
          stroke(0, 0, 0);
          strokeWeight(2);
          ellipse(x, y, 20, 20);
        }*/

        if (ss == 0) {
          fill("rgba(255, 0, 0,0.8)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lsx, lsy, 16, 16);
          ellipse(rsx, rsy, 16, 16);
        }
        if (ss == 1) {
          fill("rgba(0, 255, 0,0.8)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lsx, lsy, 16, 16);
          ellipse(rsx, rsy, 16, 16);
        }
        if (h == 0) {
          fill("rgba(255, 0, 0,0.8)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lhx, lhy, 16, 16);
          ellipse(rhx, rhy, 16, 16);
        }
        if (h == 1) {
          fill("rgba(0, 255, 0,0.8)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lhx, lhy, 16, 16);
          ellipse(rhx, rhy, 16, 16);
        }
        if (k == 0) {
          fill("rgba(255, 0, 0,0.8)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lkx, lky, 16, 16);
          ellipse(rkx, rky, 16, 16);
        }
        if (k == 1) {
          fill("rgba(0, 255, 0,0.8)");
          stroke(0, 0, 0);
          strokeWeight(3);
          ellipse(lkx, lky, 16, 16);
          ellipse(rkx, rky, 16, 16);
        }
        if (sp == 0) {
          strokeWeight(6);
          stroke("rgba(255, 0, 0,0.8)");
          line(lsx, lsy, lhx, lhy);
          line(rsx, rsy, rhx, rhy);
        }
        if (sp == 1) {
          strokeWeight(6);
          stroke("rgba(0, 255, 0,0.8)");
          line(lsx, lsy, lhx, lhy);
          line(rsx, rsy, rhx, rhy);
        }

        /*for (let i = 0; i < skeleton.length; i++) {
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(4);
          stroke(255, 241, 78);
          line(a.position.x, a.position.y, b.position.x, b.position.y);
        }*/

        pop();
        fill(255, 241, 78);
        textFont(myfont);
        t = "PERFORM THE TOE TOUCH";
        t2 = " AND HOLD";
        textSize(45);
        stroke(0, 0, 0);
        strokeWeight(4);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);

        if (lsx > lax + 45 || rsx > rax + 45) {
          ss = 0;
        } else {
          ss = 1;
        }

        if (rhy <= rky - 50) {
          h = 0;
        } else {
          h = 1;
        }

        if (lkx > lax + 45 || rkx > rax + 45) {
          k = 0;
        } else {
          k = 1;
        }

        let m1 = (lsy - lhy) / (lsx - lhx);
        let at1 = abs(-m1);
        let ang = degrees(atan(at1));
        if (ang > 60 || ang < 40) {
          sp = 0;
        } else {
          sp = 1;
        }

        if (ts > 15) {
          text(t, width / 2, 140);
          text(t2, width / 2, 180);
        }
        text(ts, width - 60, 60);

        if (ts == 16) {
          if (!playtechside) {
            playtechside = true;
            let techsideA = new Audio("audios/sidetech.mp3");
            techsideA.play();
          }
        }

        setTimeout(function () {
          if (q == 0) {
            nf = n;
            relax = new Audio("audios/relax.mp3");
            relax.play();
            saveCanvas("upUgo-SumoSquat_Side_Assessment", "png");
            console.log(nf);
            q = 1;
          }
        }, 20000);
      }
    }
  }
  fill(255, 255, 255);
  looper(q);
}

function looper(q) {
  if (q == 1) {
    noLoop();

    console.log(mf, nf);
    push();
    fill(124, 140, 143);
    textSize(35);
    stroke(0, 0, 0);
    strokeWeight(4);
    text("YOUR SCORE IS: ", width / 2, 140);
    textAlign(CENTER, CENTER);
    text("FRONT: ", width / 2, 180);
    textAlign(CENTER, CENTER);
    text(mf, width / 2, 210);
    textAlign(CENTER, CENTER);
    text("SIDE: ", width / 2, 250);
    textAlign(CENTER, CENTER);
    text(nf, width / 2, 280);
  }
}
