let projects = [
  {
    title: "## Loot and Law",
    imageHead:
      "![<span class='fake_html_pink'>loot and law pic</span>](<span class ='fake_html_red'>./pictures/lootAndLaw.png</span>)",
    src: "./images/lootAndLaw.jpg",
    desc: "A fast-paced hidden role game with ten gallon hats. Collect as much loot as you can before the sheriff, or your opponent, realizes who you are!",
  },
  {
    title: "## LennyQuest",
    imageHead:
      "![<span class='fake_html_pink'>lennyquest pic</span>](<span class ='fake_html_red'>./pictures/lennyquest.png</span>)",
    src: "./images/lennyquest.jpg",
    desc: "Embark on an adventure through space, time, and death. Help lenny lead the undead to peace once and for all.",
  },
  {
    title: "## Spaced Ship",
    imageHead:
      "![<span class='fake_html_pink'>Spaced Ship pic</span>](<span class ='fake_html_red'>./pictures/Spaced Ship.png</span>)",
    src: "./images/spacedShip.jpg",
    desc: "Gather your friends and try to maintain course. Your ship is falling apart, and coms are malfunctioning, but with a bit of good communication and a lot of luck, you just might make it.",
  },
  {
    title: "## BÖNK",
    imageHead:
      "![<span class='fake_html_pink'>BÖNK pic</span>](<span class ='fake_html_red'>./pictures/BÖNK.png</span>)",
    src: "./images/bonk.jpg",
    desc: "Two players, one GIB, and a fight to the top. Stomp, drop, and BÖNK your opponent to make your way to the top of the tower",
  },
];
let projectInfo;
let index = 0;

async function update() {
  projectInfo = projects[index];
  await fetch("projects.html");
  let titleDiv = document.querySelector(".project_title");
  let imageHead = document.querySelector(".imageHead");
  let projectImage = document.querySelector(".projectImage");
  let projectDescription = document.querySelector(".projectDescription");

  projectDescription.innerHTML = projectInfo.desc;
  projectImage.src = projectInfo.src;
  titleDiv.innerHTML = projectInfo.title;
  imageHead.innerHTML = projectInfo.imageHead;
  console.log(projectDescription);
}

function back_one() {
  if (index <= 0) {
    index = projects.length - 1;
  } else index--;
  update();
  console.log(index);
}
function forward_one() {
  if (index >= projects.length - 1) {
    index = 0;
  } else index++;
  update();
  console.log(index);
}

update();
