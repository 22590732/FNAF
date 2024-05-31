'use strict';

////////////////////////
/* CAM Initialization */
////////////////////////

const CAM1A = {
    camName: 'Show Stage',
    adjacentCAMS: [],
    animsOnCAM: [],
    // adjacentCAMS: [CAM1B],
    // animsOnCAM: [freddy, bonnie, chica],
};

const CAM1B = {
    camName: 'Dining Area',
    adjacentCAMS: [],
    // adjacentCAMS: [CAM1A, CAM5, CAM7, CAM6, CAM3, CAM4A, CAM4B, CAM2A, CAM2B],
    animsOnCAM: [],
};


const CAM1C = {
    camName: `Pirate's Cove`,
    // adjacentCAMS: [CAM2A],
    // animsOnCAM: [foxy],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM5 = {
    camName: 'Backstage',
    // adjacentCAMS: [CAM1A, CAM1B, CAM3, CAM2A, CAM2B],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM3 = {
    camName: 'Supply Closet',
    // adjacentCAMS: [CAM1A, CAM1B, CAM5, CAM2A, CAM2B],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM2A = {
    camName: 'West Hall',
    // adjacentCAMS: [CAM2B, CAM3, CAM5, CAM1B, CAM1A],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM2B = {
    camName: 'West Hall Corner',
    // adjacentCAMS: [CAM2A],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM7 = {
    camName: 'Restrooms',
    // adjacentCAMS: [CAM1A, CAM1B, CAM6, CAM4A],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM6 = {
    camName: 'Kitchen',
    // adjacentCAMS: [CAM1A, CAM1B, CAM7, CAM4A],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM4A = {
    camName: 'East Hall',
    // adjacentCAMS: [CAM4B, CAM6, CAM7, CAM1A, CAM1B],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const CAM4B = {
    camName: 'East Hall Corner',
    // adjacentCAMS: [CAM4A],
    adjacentCAMS: [],
    animsOnCAM: [],
};

const currentCAM = {
    camName: '',
    adjacentCAMS: [],
    animsOnCAM: [],
};




////////////////////////////////
/* Animatronic Initialization */
////////////////////////////////

const freddy = {
    name: `Freddy`,
    AI: 0,
    atCorner: false,
    //if camera looks at freddy, AI goes to -1 until it doesn't look at freddy
    //program freddy movement opportunity
};

const bonnie = {
    name: `Bonnie`,
    AI: 20,
    //program bonnie movement opportunity
}

const chica = {
    name: `Chica`,
    AI: 0,
    //program chica movement opportunity
}

const foxy = {
    name: `Foxy`,
    AI: 0,
    stage: 0,
    //program foxy movement opportunity
    //program kill stage for stage 4
    //if cameras are open, AI goes to -1 until cameras are closed
}

////////////////////////
// Reconnect the cameras
////////////////////////

// CAM 1A Push
CAM1A.adjacentCAMS.push(CAM1B);
CAM1A.animsOnCAM.push(freddy, bonnie, chica);
// console.log(CAM1A);


// CAM 1B Push
CAM1B.adjacentCAMS.push(CAM1A, CAM5, CAM7, CAM6, CAM3, CAM4A, CAM4B, CAM2A, CAM2B);
// console.log(CAM1B);

// CAM 1C Push
CAM1C.adjacentCAMS.push(CAM2A);
CAM1C.animsOnCAM.push(foxy);
// console.log(CAM1C);

// CAM 5 Push
CAM5.adjacentCAMS.push(CAM1A, CAM1B, CAM3, CAM2A, CAM2B);
// console.log(CAM5);

// CAM 3 Push
CAM3.adjacentCAMS.push(CAM1A, CAM1B, CAM5, CAM2A, CAM2B);
// console.log(CAM3);

// CAM 2A Push
CAM2A.adjacentCAMS.push(CAM2B, CAM3, CAM5, CAM1B, CAM1A);
// console.log(CAM2A);

// CAM 2B Push
CAM2B.adjacentCAMS.push(CAM2A);
// console.log(CAM2B);

// CAM 7 Push
CAM7.adjacentCAMS.push(CAM1A, CAM1B, CAM6, CAM4A);
// console.log(CAM7);

// CAM 6 Push
CAM6.adjacentCAMS.push(CAM1A, CAM1B, CAM7, CAM4A);
// console.log(CAM6);

// CAM 4A Push
CAM4A.adjacentCAMS.push(CAM4B, CAM6, CAM7, CAM1A, CAM1B);
// console.log(CAM4A);

// CAM 4B Push
CAM4B.adjacentCAMS.push(CAM4A);
// console.log(CAM4B);





////////////////////////
// Locate the Anims
////////////////////////

freddy.location = CAM1A;
bonnie.location = CAM1A;
chica.location = CAM1A;
foxy.location = CAM1C;

///////////////
// Left Side //
///////////////

// This is the door. This is where the aniamtronic ends up at the 
// last movement opportunity

// This is the light button
const leftLight = document.querySelector(`.lightLeft`);
const leftDoor = document.querySelector('.closeLeft');

// This is the light button click event
leftLight.addEventListener('click', function() {
    console.log(`Left door has ${leftDoor.animatronic ? `${leftDoor.animatronic.name}` : `nothing`}`);
});

// This is the door toggle
let leftClose = false;

leftDoor.addEventListener('click', function() {
    if (leftClose) {
        console.log(`Left Door is Opened`);
        leftClose = false;
    }
    else {
        leftClose = true;
        console.log(`Left Door is Closed`);
    }
});


////////////////
// Right Side //
////////////////

// This is the door. This is where the aniamtronic ends up at the 
// last movement opportunity
const rightDoor = {
    animatronic: null,
}

// This is the light button
const rightLight = document.querySelector(`.lightRight`);

// This is the light button click event
rightLight.addEventListener('click', function() {
    console.log(`Right door has ${rightDoor.animatronic ? `${rightDoor.animatronic.name}` : `nothing`}`);
})






/////////////
// Cameras //
/////////////

const cameraBtn = document.querySelector(`.camHover`);
//console.log(cameraBtn);

const camera = document.querySelector(`.cameras`);
//console.log(camera);

let cameraUp = false;

cameraBtn.addEventListener('click', function() {
    console.log(`clicked`);
})

cameraBtn.addEventListener('mouseenter', function() {
    if (!cameraUp) {
        console.log(`Cameras are opened`);
        camera.classList.remove(`hidden`);
        cameraUp = true;
    }
    else {
        console.log(`Cameras are closed`);
        camera.classList.add(`hidden`);
        cameraUp = false;
    }
});

let camName = document.querySelector('.currentRoom');
let animList = document.querySelector('.anims');

function fillAnimsList(cam) {
    camName.textContent = cam.camName;

    let child = animList.lastChild;
    while (child) {
        animList.removeChild(child);
        child = animList.lastChild;
    }

    for (const item of cam.animsOnCAM) {
        const p = document.createElement("p");
        p.textContent = item.name;
        animList.appendChild(p);
    }
}




////////////////////////
// Camera Buttons
////////////////////////

const btn1A = document.querySelector('.CAM1A');
const btn1B = document.querySelector('.CAM1B');
const btn1C = document.querySelector('.CAM1C');
const btn2A = document.querySelector('.CAM2A');
const btn2B = document.querySelector('.CAM2B');
const btn3 = document.querySelector('.CAM3');
const btn4A = document.querySelector('.CAM4A');
const btn4B = document.querySelector('.CAM4B');
const btn5 = document.querySelector('.CAM5');
const btn6 = document.querySelector('.CAM6');
const btn7 = document.querySelector('.CAM7');

btn1A.addEventListener('click', function() {
    currentCAM.camName = CAM1A.camName;
    currentCAM.adjacentCAMS = [...CAM1A.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM1A.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn1B.addEventListener('click', function() {
    currentCAM.camName = CAM1B.camName;
    currentCAM.adjacentCAMS = [...CAM1B.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM1B.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn1C.addEventListener('click', function() {
    currentCAM.camName = CAM1C.camName;
    currentCAM.adjacentCAMS = [...CAM1C.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM1C.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn2A.addEventListener('click', function() {
    currentCAM.camName = CAM2A.camName;
    currentCAM.adjacentCAMS = [...CAM2A.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM2A.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn2B.addEventListener('click', function() {
    currentCAM.camName = CAM2B.camName;
    currentCAM.adjacentCAMS = [...CAM2B.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM2B.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn3.addEventListener('click', function() {
    currentCAM.camName = CAM3.camName;
    currentCAM.adjacentCAMS = [...CAM3.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM3.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn4A.addEventListener('click', function() {
    currentCAM.camName = CAM4A.camName;
    currentCAM.adjacentCAMS = [...CAM4A.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM4A.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn4B.addEventListener('click', function() {
    currentCAM.camName = CAM4B.camName;
    currentCAM.adjacentCAMS = [...CAM4B.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM4B.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});




btn5.addEventListener('click', function() {
    currentCAM.camName = CAM5.camName;
    currentCAM.adjacentCAMS = [...CAM5.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM5.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn6.addEventListener('click', function() {
    currentCAM.camName = CAM6.camName;
    currentCAM.adjacentCAMS = [...CAM6.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM6.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





btn7.addEventListener('click', function() {
    currentCAM.camName = CAM7.camName;
    currentCAM.adjacentCAMS = [...CAM7.adjacentCAMS];
    currentCAM.animsOnCAM = [...CAM7.animsOnCAM];

    fillAnimsList(currentCAM);

    // console.log(currentCAM);
});





////////////////////////
// Bonnie Movement
////////////////////////

function reFillArray(cam) {
    let temp = [];

    for (const item of cam.animsOnCAM) {
        if (item != null) {
            temp.push(item);
        }
    }

    // console.log(temp);

    cam.animsOnCAM = [...temp];
}

function bonnieMO() {
    console.log(`BonnieMO`);

    const randomNumber = Math.floor(Math.random() * 20) + 1;

    if (randomNumber <= bonnie.AI) {

        let onThisCam = bonnie.location;

        let bonnieLocations = [...onThisCam.adjacentCAMS];

        if (onThisCam.camName === CAM2B.camName) {
            if (leftClose) {
                console.log(`Door was closed`);
                bonnie.location = CAM1B;
                delete onThisCam.animsOnCAM[onThisCam.animsOnCAM.indexOf(bonnie)];
                reFillArray(onThisCam);
                if (camName.textContent === onThisCam.camName) {
                    fillAnimsList(onThisCam);
                }

                CAM1B.animsOnCAM.push(bonnie);
        
                return;
            }

            clearInterval(bonnieMovement);
            console.log(`Bonnie Wins`);
            alert(`Bonnie Killed You!`);
        }
        
        // console.log(`Bonnie was on ${onThisCam.camName}`);

        const randomRoom = Math.floor(Math.random() * bonnie.location.adjacentCAMS.length);

        if (onThisCam.adjacentCAMS[randomRoom].camName === CAM7.camName || onThisCam.adjacentCAMS[randomRoom].camName === CAM6.camName || onThisCam.adjacentCAMS[randomRoom].camName === CAM4A.camName || onThisCam.adjacentCAMS[randomRoom].camName === CAM4B.camName) {
            return;
        }

        bonnie.location = onThisCam.adjacentCAMS[randomRoom];



        const removeAnimIndex = onThisCam.animsOnCAM.indexOf(bonnie);

        if (delete onThisCam.animsOnCAM[removeAnimIndex]) {
            delete onThisCam.animsOnCAM[removeAnimIndex];
        }
        
        reFillArray(onThisCam);
        if (camName.textContent === onThisCam.camName) {
            fillAnimsList(onThisCam);
        }
        

        onThisCam = bonnie.location;
        onThisCam.animsOnCAM.push(bonnie);

        

        // console.log(`Bonnie is on ${onThisCam.camName}`);

        // clearInterval(bonnieMovement);
    }
}

// let bonnieMovement;

const startBtn = document.querySelector(`.start`);

startBtn.addEventListener('click', function() {
    bonnieMovement = setInterval(bonnieMO, 4970);
});





function chicaMO() {
    console.log(`ChicaMO`);

    const randomNumber = Math.floor(Math.random() * 20) + 1;

    if (randomNumber <= chica.AI) {

        let onThisCam = chica.location;

        let chicaLocations = [...onThisCam.adjacentCAMS];

        if (onThisCam.camName === CAM2B.camName) {
            if (leftClose) {
                console.log(`Door was closed`);
                bonnie.location = CAM1B;
                delete onThisCam.animsOnCAM[onThisCam.animsOnCAM.indexOf(chica)];
                reFillArray(onThisCam);
                if (camName.textContent === onThisCam.camName) {
                    fillAnimsList(onThisCam);
                }

                CAM1B.animsOnCAM.push(chica);
        
                return;
            }

            clearInterval(chicaMovement);
            console.log(`Chica Wins`);
            alert(`Chica Killed You!`);
        }
        
        // console.log(`Bonnie was on ${onThisCam.camName}`);

        const randomRoom = Math.floor(Math.random() * chica.location.adjacentCAMS.length);

        if (onThisCam.adjacentCAMS[randomRoom].camName === CAM7.camName || onThisCam.adjacentCAMS[randomRoom].camName === CAM6.camName || onThisCam.adjacentCAMS[randomRoom].camName === CAM4A.camName || onThisCam.adjacentCAMS[randomRoom].camName === CAM4B.camName) {
            return;
        }

        bonnie.location = onThisCam.adjacentCAMS[randomRoom];



        const removeAnimIndex = onThisCam.animsOnCAM.indexOf(bonnie);

        if (delete onThisCam.animsOnCAM[removeAnimIndex]) {
            delete onThisCam.animsOnCAM[removeAnimIndex];
        }
        
        reFillArray(onThisCam);
        if (camName.textContent === onThisCam.camName) {
            fillAnimsList(onThisCam);
        }
        

        onThisCam = bonnie.location;
        onThisCam.animsOnCAM.push(bonnie);

        

        // console.log(`Bonnie is on ${onThisCam.camName}`);

        // clearInterval(bonnieMovement);
    }
}

let bonnieMovement;

startBtn  = document.querySelector(`.start`);

const start = startBtn.addEventListener('click', function() {
    bonnieMovement = setInterval(bonnieMO, 4970);
});