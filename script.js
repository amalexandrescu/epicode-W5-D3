function GenerateItems() {
  for (let i = 0; i < 12; i++) {
    const parent = document.querySelector(`.c${i + 1}`);
    for (let j = 0; j <= i; j++) {
      const child = document.createElement("div");
      child.innerText = `${j + 1}`;
      child.classList.add("common-rules");
      parent.appendChild(child);
    }
    // console.log(parent);
  }
}

GenerateItems();
