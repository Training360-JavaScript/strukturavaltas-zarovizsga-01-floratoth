function manipulateDom() {
  const tagWithQuoteClass = document.querySelectorAll(".quote");
  [...tagWithQuoteClass].forEach((item) => {
    item.style.border = "blue";
    item.style.background = "lightblue";
    item.style.fontStyle = "italic";
  });
}

export { manipulateDom };
