window.addEventListener("load", function () {
  // ===== New Products Swiper =====
  var swiperNewProducts = new Swiper(".swiper-newproducts", {
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1, // 모바일 작은 화면
      },
      390: {
        slidesPerView: 1.5, // 390px 이상
      },
      768: {
        slidesPerView: 2.5, // 768px 이상
      },
    },
  });

  // ===== Accessories Swiper =====
  var swiperAccessories = new Swiper(".swiper-accessories", {
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      390: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  // ===== Promotion Swiper =====
  var swiperPromotion = new Swiper(".swiper-promotion", {
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      390: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  // ===== 모달 =====
  var modal = document.querySelector(".modal-wrap");
  var modalClose = document.querySelector(".modal-close");

  // 첫 로드 시 모달 보이기
  if (modal) {
    modal.style.display = "block";
  }

  // 닫기 버튼 이벤트
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

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

  searchBtn2.addEventListener("click", function () {});
});
