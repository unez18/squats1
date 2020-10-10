let video;
let poseNet;
let m
let pose;
let skeleton;
let mycanvas;
let p=0;
let q=0;
let w=0;
let i=0;
let f = 0;
let g = 0;
let time1=5;
let s = 0;
let r = 0;
let start = 0;
let scorebasedA
let scorebased2A
let a3
let a31
let a4
let a2
let a1 
let a5
let lefty
let relax
let upload
let perform
/*let name;
let age;
let parnum;
let yournum;
let n1;
let a1;
let pn1;
let yn1;*/
let b0=0;
let b1=0;
let b2=0;
let b3=0;
let b4=0;
let b5=0;
let b6=0;
let s1;
let h;
let k;
let sp;

welcomeA = new Audio("audios/welcome.mp3");
attemptingA = new Audio("audios/attempting.mp3");
scorebasedA = new Audio("audios/scorebased.mp3");
scorebased2A = new Audio("audios/scorebased2.mp3");
a3 = new Audio("audios/3.mp3");
a31 = new Audio("audios/3-1.mp3");
a2 = new Audio("audios/2.mp3");
a4 = new Audio("audios/4.mp3");
a1 = new Audio("audios/1.mp3");
a5 = new Audio("audios/5.mp3");
go = new Audio("audios/go.mp3");
relax = new Audio("audios/relax.mp3");
upload = new Audio("audios/upload.mp3");
lefty = new Audio("audios/left.mp3");
perform = new Audio("audios/perform.mp3");


let playwelcome = false;
let playscorebased = false;
let playscorebased1 = false;
let playtech = false;
let playtechside = false;
let playawesome = false;

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
  poseNet.on('pose', gotPoses);
  
  
  /*setTimeout(function () {
    aud1.play();
  }, 1000);*/
  
  //playAudio1(1)
}

function changeTime(time1){
  time1=time1-1;
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function playAudio(f){
  if (f==1){
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
              }, 8000);
            }, 7500);
          }
        }, 1000);

  }
  
}

function playAudio1(p){
  if(p==1){
    setTimeout(function () {
          if (!playscorebased1) {
            playscorebased1 = true;
            perform.play();

            setTimeout(function () {
              a5.play();
                           

              setTimeout(function () {
                a4.play();

                setTimeout(function () {
                  a31.play();

                  setTimeout(function () {
                    a2.play();
                    
                    setTimeout(function () {a1.play();
                      g = 1;
                      p = 1;
                      w = 0;
                      f = 0;
                                            setTimeout(function () {relax.play();setTimeout(function () {upload.play();},3000)},1000)
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 7500);
          }
        }, 1000);}

  
}

function draw() {
  rect(0,0,640,480)
  push();
  translate(video.width,0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);
  
  if (pose) {
    if(start==1){

      if(!playwelcome){

        setTimeout(function () {
          welcomeA.play();
      
          setTimeout(function () {
            attemptingA.play();
          }, 5000);
        }, 1000);

        playwelcome = true;
        console.log("here");
      }
    
      let lsx = pose.leftShoulder.x
      let lsy = pose.leftShoulder.y
      let rsx = pose.rightShoulder.x
      let rsy = pose.rightShoulder.y
      let lax = pose.leftAnkle.x
      let rax = pose.rightAnkle.x
      let rhy = pose.rightHip.y
      let rhx = pose.rightHip.x
      let lhy = pose.leftHip.y
      let lhx = pose.leftHip.x
      let rky = pose.rightKnee.y  
      let lkx = pose.leftKnee.x;
      let rkx = pose.rightKnee.x;      
      let lky = pose.leftKnee.y;
      
      m=3*(sp+k+h);
      
      if(pose.score<0.9 && p==0 && w==0){
        for (let i = 0; i < 17; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          fill(255,0,0);
          ellipse(x, y, 16, 16);
        }
        for (let i = 0; i < skeleton.length; i++){
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(4);
          stroke(255,0,0);
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
        }, 15000);
      
      /*if(playstart){
          setTimeout(function(){
            playstart = false;
            aud2.play();
          },20000)
      }
      if(playstart){
            playstart = false;
            aud1.play();
            setTimeout(function(){aud2.play()},24000);
        }*/
      
      //text(time1,width-60,60)
      //if (frameCount % 30 == 0 && time1 > 0) {
      //time1 --;}
      //text(n1,screen.width/2+70 ,540)
      }
      if (((pose.score > 0.9 && p == 0) || w == 1) && f == 1) {
        w=1;i=1;
        playAudio(f)
        //aud3.play();
        if(w==1){
        for (let i = 0; i < 17; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          fill("rgba(0, 255, 0, 0.4)");
          ellipse(x, y, 16, 16);
        }
        for (let i = 0; i < skeleton.length; i++){
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(4);
          fill("rgba(0, 255, 0, 0.4)");
          line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
        pop();
        fill("rgb(37,211,102)");
        strokeWeight(5);
        stroke(0, 0, 0);
        textFont(myfont);
        textStyle(BOLDITALIC);
        t1 = "DO NOT MOVE AWAY ";
        t3 = "PERFORM THE SQUATS";
        t4 = "HOLD FOR TEN SECONDS";
        textSize(50);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        text(t1, width / 2, 100);
        text(t3, width / 2, 180);
        text(t4, width / 2, 260);
        fill(255, 255, 255);
        //let new1 = new Audio("new.mp3");
        //new1.play();        
        

      }}
      if (pose.score < 1 && p == 1 && s == 0 && g == 1){
        playAudio1(p);
        for (let i = 0; i < 17; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          fill(0,255,0);
          ellipse(x, y, 16, 16);
        }
        if(s1==0){
          fill(255,0,0);
          ellipse(lsx,lsy,16,16);
          ellipse(rsx,rsy,16,16);
        }
        if(s1==1){
          fill(0,255,0);
          ellipse(lsx,lsy,16,16);
          ellipse(rsx,rsy,16,16);
        }
        if(h==0){
          fill(255,0,0);
          ellipse(lhx,lhy,16,16);
          ellipse(rhx,rhy,16,16);
        }
        if(h==1){
          fill(0,255,0);
          ellipse(lhx,lhy,16,16);
          ellipse(rhx,rhy,16,16);
        }
        if(k==0){
          fill(255,0,0);
          ellipse(lkx,lky,16,16);
          ellipse(rkx,rky,16,16);
        }
        if(k==1){
          fill(0,255,0);
          ellipse(lkx,lky,16,16);
          ellipse(rkx,rky,16,16);
        }      
        for (let i = 0; i < skeleton.length; i++){
          let a = skeleton[i][0];
          let b = skeleton[i][1];
          strokeWeight(4);
          stroke(255,255,255);
          line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
        if(sp==0){
          strokeWeight(6);
          stroke(255,0,0);
          line(lsx,lsy,lhx,lhy);
          line(rsx,rsy,rhx,rhy);
        }
        if(sp==1){
          strokeWeight(6);
          stroke(0,255,0);
          line(lsx,lsy,lhx,lhy);
          line(rsx,rsy,rhx,rhy);
        }
        pop();    
        fill(255,255,0)
        t2='PERFORM THE SQUAT AND HOLD STILL FOR 3 SECONDS'
        textSize(20);
        textAlign(CENTER, CENTER);
        textStyle(BOLD)
        text(t2, width/2, 100)
        //text(time1,width-60,60)
        if (frameCount % 30 == 0 && time1 > 0) {
        time1 --;}
        text(time1, width - 60, 60);
        textSize(30);
        /*if(m==3){
          strokeWeight(1);text('OUTSTANDING',
                              width/2 ,160)
        }
        if(m==2){
          strokeWeight(1);text('REACHING OUT',
                              width/2 ,140)
        }
        if(m==1){
          strokeWeight(1);text('NEEDS IMPROVEMENT',
                              width/2 ,140)
        }
        if(m==0){
          strokeWeight(1);text('NEEDS IMPROVEMENT',
                              width/2 ,140)
        }*/
        if(lsx>lax+45 || rsx>rax+45){
          //strokeWeight(1);text('shoulder wrong',                             screen.width/2+70 ,140);
          s1=0;
        }
        else{
          //strokeWeight(1);text('shoulder correct',screen.width/2+70,140);
          s1=1;
        }

        if(rhy<=rky-50){
          //strokeWeight(1);text('hip wrong',screen.width/2+70,170);
          h=0;
        }
      else{
        //strokeWeight(1);text('hip correct',screen.width/2+70,170);
        h=1;
        }
        

        if(lkx>lax+45 || rkx>rax+45){
          //strokeWeight(1);text('knee wrong',screen.width/2+70,200);
          k=0;
        }
        else{
          //strokeWeight(1);text('knee correct',screen.width/2+70,200);
          k=1;
        }
        
        let m1=(lsy-lhy)/(lsx-lhx)
        let at1=abs(-m1)
        let ang=degrees(atan(at1))
        if(ang>60||ang<40){
          //strokeWeight(1);text('spine angle wrong',screen.width/2+70,230);
          sp=0;
        }
        else{
          //strokeWeight(1);text('spine angle correct',screen.width/2+70,230);
          sp=1;
        }
      
        /*text(n1, screen.width/2+70, 450)
        text(a1, screen.width/2+70, 480)
        text(pn1, screen.width/2+70, 510)
        text(yn1, screen.width/2+70, 540)*/
          setTimeout(function(){
              if(q==0){
                saveCanvas(mycanvas,"upUgo-Squat_Assessment","png");q=1;}},13000)
      }
    }
  }
  fill(255,255,255);
  looper(q);
}

    /*let d=abs(pose.leftWrist.x-pose.leftElbow.x)
    let lkx = pose.leftKnee.x
    let lky = pose.leftKnee.y
    let rkx = pose.rightKnee.x
    let rky = pose.rightKnee.y
    let lax = pose.leftAnkle.x
    let lay = pose.leftAnkle.y
    let rax = pose.rightAnkle.x
    let ray = pose.rightAnkle.y
    let lsx = pose.leftShoulder.x
    let lsy = pose.leftShoulder.y
    let lhx = pose.leftHip.x
    let lhy = pose.leftHip.y
    
    textSize(30)
    stroke(r,g,b)
    strokeWeight(6)
    line(lhx,lhy,lsx,lsy)
    line(lhx,lhy,640,lhy)
    let m1=(lsy-lhy)/(lsx-lhx)
    let m2=0;
    let at1=abs((m2-m1)/(1+m1*m2))
    let ang=degrees(atan(at1))
    if(ang>60||ang<40){r=255;g=0;b=0;strokeWeight(1);text('spine angle wrong',10,30)}
  else{r=0;g=255;b=0;strokeWeight(1);text('spine angle correct',10,30)}
    
    strokeWeight(6)
    line(lax+45,0,lax+45, 480)
    if(lsx>lax+45){strokeWeight(1);text('shoulder wrong',10,60)}
    else{strokeWeight(1);text('shoulder correct',10,60)}
    
    stroke(r2,g2,b2)
    strokeWeight(6)
    line(640,lky,0, lky)
    if(lhy<=lky-50){r2=255;g2=0;b2=0;strokeWeight(1);text('hip wrong',10,90)}
    else{r2=0;g2=255;b2=0;strokeWeight(1);text('hip correct',10,90)}
    
    stroke(r3,g3,b3)
    strokeWeight(6)
    line(lax+45,0,lax+45, 480)
    if(lkx>lax+45){r3=255;g3=0;b3=0;strokeWeight(1);text('knee wrong',10,120)}
    else{r3=0;g3=255;b3=0;strokeWeight(1);text('knee correct',10,120)}
  }
}*/

function looper(q){
	if (q==1){
	noLoop();
    push();
    fill(124, 140, 143);
    textSize(50);
    stroke(0, 0, 0);
    strokeWeight(4);
    text("YOUR SCORE IS: ", width / 2, 140);
    textAlign(CENTER, CENTER);
    text(m, width / 2, 190);
    textAlign(CENTER, CENTER);
    }
}