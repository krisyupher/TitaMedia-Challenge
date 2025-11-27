let page = 1;
let element = "";
const imgs = document.getElementById("imgs");
const loadingElement = document.getElementById("loading");
let isLoading = false;

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
  setupInfiniteScroll();
});

const showLoading = () => {
  loadingElement.classList.remove("hidden");
};

const hideLoading = () => {
  loadingElement.classList.add("hidden");
};

const fetchData = async (page = 1) => {
  if (isLoading) return;

  isLoading = true;
  showLoading();

  const startTime = Date.now();

  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=fi3xLu6zuXaQwtF7-fGh0WrC2QbxCOvqkdYLTRPOyE0&page=${page}`
    );
    const data = await res.json();

    // Calculate remaining time to show loading (minimum 800ms)
    const elapsedTime = Date.now() - startTime;
    const minLoadingTime = 800;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

    // Wait for the remaining time before rendering
    setTimeout(() => {
      renderimg(data);
      hideLoading();
      isLoading = false;
    }, remainingTime);

  } catch (err) {
    console.error(err);
    hideLoading();
    isLoading = false;
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

// Infinite Scroll Setup
const setupInfiniteScroll = () => {
  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Load more when user is 200px from bottom
    if (scrollTop + clientHeight >= scrollHeight - 200 && !isLoading) {
      moreData();
    }
  });
};

/* Burger Menu */
function Burger() {
  const x = document.getElementById("ListMenu");
  console.log(x.classList.contains("none"));
  if (x.classList.contains("none")) {
    x.classList.remove("none");
  } else {
    x.classList.add("none");
  }
}
