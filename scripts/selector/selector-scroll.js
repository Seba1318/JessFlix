export function handleScrollEdges(){
  const selector = document.querySelector(".js-movie-selector");
  const leftEdge = document.querySelector(".js-movie-selector-edge-left");
  const rightEdge = document.querySelector(".js-movie-selector-edge-right");

  const checkEdges = () => {
    if(selector.scrollLeft > 10){
      leftEdge.classList.add("is-visible");
    } else{
      leftEdge.classList.remove("is-visible");
    }

    const maxScroll = selector.scrollWidth - selector.clientWidth;

    console.log(selector.scrollLeft, maxScroll);

    if(selector.scrollLeft >= maxScroll - 1){
      rightEdge.classList.add("is-invisible");
    } else{
      rightEdge.classList.remove("is-invisible");
    }
  };

  selector.addEventListener("scroll", checkEdges);
}