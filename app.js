let page = 1;
let element = "";
const imgs = document.getElementById("imgs");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async (page = 1) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=fi3xLu6zuXaQwtF7-fGh0WrC2QbxCOvqkdYLTRPOyE0&page=${page}`
    );
    const data = await res.json();
    renderimg(data);
  } catch (err) {
    console.err(err);
  }
};

const renderimg = (data) => {
  data.forEach((item, index) => {
    const provide = item.height / item.width;
    if (provide < 0.5) {
      element += `<img src=${item.urls.regular} alt="" class="grid-item imgSmall" />`;
    } else if (provide < 0.7) {
      element += `<img src=${item.urls.regular} alt="" class="grid-item imgSmallMedium" />`;
    } else if (provide < 0.9) {
      element += `<img src=${item.urls.regular} alt="" class="grid-item imgMedium" />`;
    } else if (provide < 1.1) {
      element += `<img src=${item.urls.regular} alt="" class="grid-item imgMediumLarge" />`;
    } else if (provide < 1.3) {
      element += `<img src=${item.urls.regular} alt="" class="grid-item imgLarge" />`;
    } else {
      element += `<img src=${item.urls.regular} alt="" class="grid-item imgLargeExtra" />`;
    }
  });
  imgs.innerHTML = element;
};
const moreData = () => {
  page += 1;
  fetchData(page);
};
/* Burger Menu */
function Burder() {
  const x = document.getElementById("ListMenu");
  console.log(x.classList.contains("none"));
  if (x.classList.contains("none")) {
    x.classList.remove("none");
  } else {
    x.classList.add("none");
  }
}
