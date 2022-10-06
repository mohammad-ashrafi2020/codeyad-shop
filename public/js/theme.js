(function ($) {
  "use strict";
  let SCRIPT = {};

  /*====== Preloader ======*/
  $(window).on("load", function () {
    let preloaderFadeOutTime = 500;

    setTimeout(function () {
      $("body").addClass("loaded");
    }, preloaderFadeOutTime);
  });
  /*====== end Preloader ======*/

  /*====== Header ======*/
  SCRIPT.Header = function () {
    $(".search-container .search-form .search-field").on("click", function () {
      let parents = $(this).parents(".search-container");
      parents.find(".btn-search").addClass("d-none");
      parents.find(".btn-close-search-result").removeClass("d-none");
      parents.find(".search-result-container").addClass("show");
    });
    $(".search-container .search-form .btn-close-search-result").on(
      "click",
      function (e) {
        e.preventDefault();
        let parents = $(this).parents(".search-container");
        $(this).addClass("d-none");
        parents.find(".btn-search").removeClass("d-none");
        parents.find(".search-result-container").removeClass("show");
      }
    );
    $(".toggle-navigation").on("click", function () {
      $(".navigation").addClass("toggle");
      $(".navigation-overlay").fadeIn(100);
    });
    $(".navigation .toggle-submenu").on("click", function (event) {
      event.preventDefault();
      $(this).siblings(".submenu").addClass("toggle");
    });
    $(".navigation .close-submenu").on("click", function (event) {
      event.preventDefault();
      $(this).parent(".submenu").removeClass("toggle");
    });
    $(".navigation-overlay, .close-navigation").on("click", function (event) {
      event.preventDefault();
      $(".navigation").removeClass("toggle");
      $(".navigation .submenu").removeClass("toggle");
      $(".navigation-overlay").fadeOut(100);
    });
  };
  /*====== end Header ======*/

  /*====== VerticalMenu ======*/
  SCRIPT.VerticalMenu = function () {
    $(".vertical-menu-items>ul>li").on("mouseenter", function () {
      $(this).addClass("show").siblings().removeClass("show");
    });
  };
  /*====== end VerticalMenu ======*/

  /*====== MegaSearch ======*/
  SCRIPT.MegaSearch = function () {
    $(".user-option-btn--search").on("click", function (e) {
      e.preventDefault();
      $(".mega-search-container").addClass("show");
    });
    $(
      ".mega-search-container .mega-search-box-close, .mega-search-container .mega-search-overlay"
    ).on("click", function () {
      $(".mega-search-container").removeClass("show");
    });
  };
  /*====== end MegaSearch ======*/

  /*====== Countdown ======*/
  SCRIPT.Countdown = function () {
    $("#timer--verify-code").startTimer({
      onComplete: function (element) {
        $(".verify-code-wrapper .send-again").addClass("d-inline-block");
        onReset: $(".verify-code-wrapper .send-again");
      },
    });
    $(".verify-code-wrapper .send-again").on("click", function (event) {
      event.preventDefault();
      $(this).removeClass("d-inline-block");
      $("#timer--verify-code").empty();
      $("#timer--verify-code").startTimer({});
    });
    $("[data-countdown]").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        $this.html(
          event.strftime(
            "<span>%D</span><span class='divider'>:</span><span>%H</span><span class='divider'>:</span><span>%M</span><span class='divider'>:</span><span>%S</span>"
          )
        );
      });
    });
  };
  /* end Countdown ======*/

  /*====== Slider ======*/
  SCRIPT.Slider = function () {
    const notificationSwiperSlider = new Swiper(".notification-swiper-slider", {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      direction: "vertical",
      autoplay: {
        delay: 5000,
      },
    });
    const miniSwiperSlider = new Swiper(".mini-single-swiper-slider", {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const mainSwiperSlider = new Swiper(".main-swiper-slider", {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const productSwiperSlider = new Swiper(".product-swiper-slider", {
      // Optional parameters
      spaceBetween: 10,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        1200: {
          slidesPerView: 5,
        },
        1090: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
      },
    });
    const productSpecialsSwiperSlider = new Swiper(
      ".product-specials-swiper-slider",
      {
        // Optional parameters
        spaceBetween: 10,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
        },
      }
    );
    const categorySwiperSlider = new Swiper(".category-swiper-slider", {
      // Optional parameters
      spaceBetween: 10,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        1200: {
          slidesPerView: 7,
        },
        1090: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      },
    });
    const compareSwiperSlider = new Swiper(".compare-swiper-slider", {
      // Optional parameters
      spaceBetween: 10,
      slidesPerView: "auto",

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const checkoutPackSwiperSlider = new Swiper(
      ".checkout-pack-swiper-slider",
      {
        // Optional parameters
        spaceBetween: 10,

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          1200: {
            slidesPerView: 6,
          },
          1090: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
        },
      }
    );
    const checkoutTimeSwiperSlider = new Swiper(
      ".checkout-time-swiper-slider",
      {
        // Optional parameters
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    );
    if ($(".gallery-swiper-slider").length) {
      const gallerySwiperSlider = new Swiper(".gallery-swiper-slider", {
        centeredSlides: true,
      });
      const galleryThumbsSwiperSlider = new Swiper(
        ".gallery-thumbs-swiper-slider",
        {
          slidesPerView: 4,
          slideToClickedSlide: true,
          centeredSlides: true,
          spaceBetween: 15,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        }
      );
      gallerySwiperSlider.controller.control = galleryThumbsSwiperSlider;
      galleryThumbsSwiperSlider.controller.control = gallerySwiperSlider;
    }
  };
  /*====== end Slider ======*/

  /*====== Simplebar ======*/
  SCRIPT.SimpleBar = function () {
    if ($(".do-simplebar").length) {
      $(".do-simplebar").each(function (index, el) {
        new SimpleBar(el, {
          autoHide: false,
          direction: "rtl",
        });
      });
    }
  };
  /* end Simplebar ======*/

  /*====== Zoom ======*/
  SCRIPT.Zoom = function () {
    if ($(window).width() > 768) {
      $(".zoom-img").imagezoomsl({
        zoomrange: [2.12, 12],
        magnifiersize: [530, 340],
        scrollspeedanimate: 10,
        loopspeedanimate: 5,
        cursorshadeborder: "10px solid black",
      });
    }
  };
  /* end Zoom ======*/



  /*====== ShopView ======*/
  SCRIPT.ShopView = function () {
    $(".btn-list-view").on("click", function () {
      $(".listing-products-content .product-card-container").removeClass(
        "col-xl-3 col-lg-4 col-md-6 col-sm-6"
      );
      $(".listing-products-content .product-card-container").addClass(
        "col-lg-6 col-md-12 col-sm-6"
      );
      $(
        ".listing-products-content .product-card-container .product-card"
      ).addClass("product-card-horizontal");
    });
    $(".btn-grid-view").on("click", function () {
      $(".listing-products-content .product-card-container").removeClass(
        "col-lg-6 col-md-12 col-sm-6"
      );
      $(".listing-products-content .product-card-container").addClass(
        "col-xl-3 col-lg-4 col-md-6 col-sm-6"
      );
      $(
        ".listing-products-content .product-card-container .product-card"
      ).removeClass("product-card-horizontal");
    });
  };
  /* end ShopView ======*/

  /*====== Form ======*/
  SCRIPT.Form = function () {
    if ($(".select2").length) {
      $(".select2").select2({
        dir: "rtl",
      });
    }
    $(".form-input-code-container .input-code").keyup(function (e) {
      if (this.value.length === this.maxLength) {
        let next = $(this).data("next");
        $("#input-code-" + next).focus();
      }
    });
    $(".custom-radio-circle-label").on("click", function () {
      let label = $(this).data("variant-label");
      $(".product-variant-selected").text(label);
    });
  };
  /*====== end Form ======*/

  /*====== Product +/- ======*/
  SCRIPT.Quantity = function () {
    $(".num-in span").click(function () {
      var $input = $(this).parents(".num-block").find("input.in-num");
      if ($(this).hasClass("minus")) {
        var count = parseFloat($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
          $(this).addClass("dis");
        } else {
          $(this).removeClass("dis");
        }
        $input.val(count);
      } else {
        var count = parseFloat($input.val()) + 1;
        $input.val(count);
        if (count > 1) {
          $(this).parents(".num-block").find(".minus").removeClass("dis");
        }
      }

      $input.change();
      return false;
    });
  };
  /* end Product +/- ======*/

  /*====== FilterPrice ======*/
  SCRIPT.FilterPrice = function () {
    if ($(".filter-price").length) {
      var skipSlider = document.getElementById("slider-non-linear-step");
      var $sliderFrom = document.querySelector(".js-slider-range-from");
      var $sliderTo = document.querySelector(".js-slider-range-to");
      var min = parseInt($sliderFrom.dataset.range),
        max = parseInt($sliderTo.dataset.range);
      noUiSlider.create(skipSlider, {
        start: [$sliderFrom.value, $sliderTo.value],
        connect: true,
        direction: "rtl",
        format: wNumb({
          thousand: ",",
          decimals: 0,
        }),
        step: 1,
        range: {
          min: min,
          max: max,
        },
      });
      var skipValues = [
        document.getElementById("skip-value-lower"),
        document.getElementById("skip-value-upper"),
      ];
      skipSlider.noUiSlider.on("update", function (values, handle) {
        skipValues[handle].value = values[handle];
      });
    }
  };
  /* end FilterPrice ======*/

  /*====== Tooltip ======*/
  SCRIPT.Tooltip = function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  };
  /* end Tooltip ======*/

  /*====== Smooth Scroll ======*/
  SCRIPT.SmoothScroll = function () {
    var link = $(".product-tabs a.nav-link");

    // Move to specific section when click on menu link
    link.on("click", function (e) {
      var target = $($(this).attr("href"));
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        600
      );
      $(this).addClass("active");
      e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on("scroll", function () {
      scrNav();
    });

    // scrNav function
    // Change active dot according to the active section in the window
    function scrNav() {
      var sTop = $(window).scrollTop();
      $(".tab-content").each(function () {
        var id = $(this).attr("id"),
          offset = $(this).offset().top - 1,
          height = $(this).height();
        if (sTop >= offset && sTop < offset + height) {
          link.removeClass("active");
          $(".product-tabs")
            .find('[data-scroll="' + id + '"]')
            .addClass("active");
        }
      });
    }
    scrNav();
  };
  /*====== end Smooth Scroll ======*/

  /*====== Box ======*/
  SCRIPT.Box = function () {
    $("[data-btn-box]").on("click", function (event) {
      event.preventDefault();
      let parent = $(this).data("parent");
      let target = $(this).data("target");
      $(parent).addClass("d-none");
      $(target).removeClass("d-none");
    });
    $("[data-btn-box-close]").on("click", function (event) {
      event.preventDefault();
      let parent = $(this).data("parent");
      let show = $(this).data("show");
      $(parent).addClass("d-none");
      $(show).removeClass("d-none");
    });
    $(".toggle-responsive-sidebar").on("click", function (e) {
      e.preventDefault();
      $(".responsive-sidebar").addClass("show");
      $(".responsive-sidebar-overlay").addClass("show");
    });
    $(".responsive-sidebar-overlay").on("click", function (e) {
      $(".responsive-sidebar").removeClass("show");
      $(this).removeClass("show");
    });
    Fancybox.defaults.Hash = false;
  };
  /*====== end Box ======*/

  /*====== Sticky ======*/
  SCRIPT.Sticky = function () {
    if ($(".compare-container .compare-list").length) {
      let productsList = $(".compare-container .compare-list"),
        top = productsList.offset().top;

      $(window).scroll(function () {
        if ($(this).scrollTop() >= top - 100) {
          productsList.addClass("is-sticky");
        } else {
          productsList.removeClass("is-sticky");
        }
      });
    }
  };
  /*====== end Sticky ======*/

  /*====== CopyClipboard ======*/
  SCRIPT.CopyClipboard = function () {
    function copyClipboard(text) {
      var field = document.createElement("input");
      field.setAttribute("value", text);
      field.setAttribute("contenteditable", true); //IOS compatibility
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }

    $(".copy-url-btn").on("click", function () {
      var btn = $(this);
      copyClipboard($(this).data("copy"));
      $(this).addClass("copied");
      $(this).html("کپی شد");
      setTimeout(function () {
        btn.removeClass("copied");
        btn.html("کپی لینک");
      }, 2000);
    });
  };
  /*====== end CopyClipboard ======*/

  /*====== Toast ======*/
  SCRIPT.Toast = function () {
    $("[data-toast]").on("click", function (event) {
      event.preventDefault();
      var t = $(this),
        a = t.data("toast-type"),
        e = t.data("toast-icon"),
        i = t.data("toast-position"),
        n = t.data("toast-title"),
        o = t.data("toast-message"),
        p = t.data("toast-color"),
        s = "";
      switch (i) {
        case "topRight":
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "topRight",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInLeft",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
            color: p || "blue",
          };
          break;
        case "bottomRight":
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "bottomRight",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInLeft",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
          };
          break;
        case "topLeft":
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "topLeft",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInRight",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
          };
          break;
        case "bottomLeft":
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "bottomLeft",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInRight",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
          };
          break;
        case "topCenter":
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "topCenter",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInDown",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
          };
          break;
        case "bottomCenter":
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "bottomCenter",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInUp",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
          };
          break;
        default:
          s = {
            rtl: true,
            class: "iziToast-" + a || "",
            title: n || "Title",
            message: o || "toast message",
            animateInside: !1,
            position: "topRight",
            progressBar: !1,
            icon: e,
            timeout: 3200,
            transitionIn: "fadeInLeft",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut",
          };
      }
      iziToast.show(s);
    });
  };
  /*====== end Toast ======*/

  /*====== AddComment ======*/
  SCRIPT.AddComment = function () {
    if ($(".add-comment-product").length) {
      var inputs = $("#advantage-input, #disadvantage-input");
      var inputChangeCallback = function () {
        var self = $(this);
        if (self.val().trim().length > 0) {
          self.siblings(".js-icon-form-add").show();
        } else {
          self.siblings(".js-icon-form-add").hide();
        }
      };
      inputs.each(function () {
        inputChangeCallback.bind(this)();
        $(this).on("change keyup", inputChangeCallback.bind(this));
      });
      $("#advantages")
        .delegate(".js-icon-form-add", "click", function (e) {
          var parent = $(".js-advantages-list");
          if (parent.find(".js-advantage-item").length >= 5) {
            return;
          }
          var advantageInput = $("#advantage-input");
          if (advantageInput.val().trim().length > 0) {
            parent.append(
              '<div class="ui-dynamic-label ui-dynamic-label--positive js-advantage-item">\n' +
                advantageInput.val() +
                '<button type="button" class="ui-dynamic-label-remove js-icon-form-remove"></button>\n' +
                '<input type="hidden" name="comment[advantages][]" value="' +
                advantageInput.val() +
                '">\n' +
                "</div>"
            );
            advantageInput.val("").change();
            advantageInput.focus();
          }
        })
        .delegate(".js-icon-form-remove", "click", function (e) {
          $(this).parent(".js-advantage-item").remove();
        });
      $("#disadvantages")
        .delegate(".js-icon-form-add", "click", function (e) {
          var parent = $(".js-disadvantages-list");
          if (parent.find(".js-disadvantage-item").length >= 5) {
            return;
          }
          var disadvantageInput = $("#disadvantage-input");
          if (disadvantageInput.val().trim().length > 0) {
            parent.append(
              '<div class="ui-dynamic-label ui-dynamic-label--negative js-disadvantage-item">\n' +
                disadvantageInput.val() +
                '<button type="button" class="ui-dynamic-label-remove js-icon-form-remove"></button>\n' +
                '<input type="hidden" name="comment[disadvantages][]" value="' +
                disadvantageInput.val() +
                '">\n' +
                "</div>"
            );
            disadvantageInput.val("").change();
            disadvantageInput.focus();
          }
        })
        .delegate(".js-icon-form-remove", "click", function (e) {
          $(this).parent(".js-disadvantage-item").remove();
        });
    }
  };
  /*====== end AddComment ======*/

  /*====== Example ======*/
  SCRIPT.Example = function () {};
  /*====== end Example ======*/

  $(window).on("load", function () {});
  $(document).ready(function () {
    SCRIPT.Header(),
      SCRIPT.VerticalMenu(),
      SCRIPT.MegaSearch(),
      SCRIPT.Countdown(),
      SCRIPT.Slider(),
      SCRIPT.SimpleBar(),
      SCRIPT.ShopView(),
      SCRIPT.Zoom(),
      SCRIPT.Form(),
      SCRIPT.Quantity(),
      SCRIPT.FilterPrice(),
      SCRIPT.Tooltip(),
      SCRIPT.SmoothScroll(),
      SCRIPT.Box(),
      SCRIPT.Sticky(),
      SCRIPT.CopyClipboard(),
      SCRIPT.Toast(),
      SCRIPT.AddComment();
    SCRIPT.Example();
  });
})(jQuery);
