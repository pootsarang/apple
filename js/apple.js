window.addEventListener("load", function () {

  // ===== 스크롤 이벤트 (Top 버튼) =====
  var topBtn = document.querySelector(".top-btn");

  window.addEventListener("scroll", function () {
    console.log("스크롤 시작");
    if (document.documentElement.scrollTop > 200) {
      if (topBtn) {
        topBtn.style.display = "block";
      }
    } else {
      if (topBtn) {
        topBtn.style.display = "none";
      }
    }
  });

  // Top 버튼 클릭 → 맨 위로 스크롤
  if (topBtn) {
    topBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  const searchBtn = this.document.querySelector(".fa-magnifying-glass");
  const searchMenu = this.document.querySelector(".search-page");
  const closeBtn = this.document.querySelector(".closeBtn");
  const searchBtn2 = this.document.querySelector(".searchBtn2");
  const input = this.document.querySelector("#search");

  searchBtn.addEventListener("click", function () {
    searchMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", function () {
    searchMenu.classList.remove("open");
  });

  
});
