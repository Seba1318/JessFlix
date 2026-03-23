export function handleScrollEdges(){
  const selector = document.querySelector(".js-selector");
  const leftEdge = document.querySelector(".js-selector-edge-left");
  const rightEdge = document.querySelector(".js-selector-edge-right");

  const checkEdges = () => {
    if(selector.scrollLeft > 10){
      leftEdge.classList.add("is-visible");
    } else{
      leftEdge.classList.remove("is-visible");
    }

    const maxScroll = selector.scrollWidth - selector.clientWidth;

    if(selector.scrollLeft >= maxScroll - 1){
      rightEdge.classList.add("is-invisible");
    } else{
      rightEdge.classList.remove("is-invisible");
    }
  };

  selector.addEventListener("scroll", checkEdges);
}

export function handleScrollButtons(){
  const selector = document.querySelector(".js-selector");
  const leftButton = document.querySelector(".js-scroll-button-left");
  const rightButton = document.querySelector(".js-scroll-button-right");

  const checkEdges = () => {
    if(selector.scrollLeft > 10){
      leftButton.classList.remove("is-button-inactive");
      leftButton.classList.add("is-button-active");
    } else{
      leftButton.classList.remove("is-button-active");
      leftButton.classList.add("is-button-inactive");
    }

    const maxScroll = selector.scrollWidth - selector.clientWidth;

    if(selector.scrollLeft >= maxScroll - 1){
      rightButton.classList.add("is-button-inactive");
    } else{
      rightButton.classList.remove("is-button-inactive");
      rightButton.classList.add("is-button-active");
    }
  };

  selector.addEventListener("scroll", checkEdges);

  let targetScroll = null;
  let spamTimer = null;
  let isSpamming = false;

  leftButton.addEventListener("click", () => {
    if(leftButton.classList.contains("is-button-active")){
      const distance = selector.scrollWidth / 3;

      if(!isSpamming){
        targetScroll = selector.scrollLeft;
        isSpamming = true;
      }

      targetScroll -= distance;
      selector.scrollLeft = targetScroll;

      clearTimeout(spamTimer);
      spamTimer = setTimeout(() => {
        isSpamming = false;
      }, 500);
    }
  });

  rightButton.addEventListener("click", () => {
    if(!rightButton.classList.contains("is-button-inactive")){
      const distance = selector.scrollWidth / 3;

      if(!isSpamming){
        targetScroll = selector.scrollLeft;
        isSpamming = true;
      }

      targetScroll += distance;
      selector.scrollLeft = targetScroll;

      clearTimeout(spamTimer);
      spamTimer = setTimeout(() => {
        isSpamming = false;
      }, 500);
    }
  });
}