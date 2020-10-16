//mouseover event which has listener attached to the element(balloon)
document.addEventListener("mouseover", (event) => {
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");

  if (isBalloon && !isPopped) {
    event.target.classList.add("popped");
    const poppedCount = document.querySelectorAll(".balloon.popped").length;
    const balloonCount = document.querySelectorAll(".balloon").length;

    //function for balloon count so all the balloons disappear and screen becomes blank//
    if (poppedCount === balloonCount) {
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";

      const congratsMessage = document.createElement("h1");

      //text which will appear after you have popped all of the balloons//
      congratsMessage.textContent = "Yay! You Did It!";

      balloons.appendChild(congratsMessage);
    }
  }
});
