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
   
    $(".navigation .toggle-submenu").on("click", function (event) {
      event.preventDefault();
      $(this).siblings(".submenu").addClass("toggle");
    });
    $(".navigation .close-submenu").on("click", function (event) {
      event.preventDefault();
      $(this).parent(".submenu").removeClass("toggle");
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
      SCRIPT.Form(),
      SCRIPT.Quantity(),
      SCRIPT.FilterPrice(),
      SCRIPT.Tooltip(),
      SCRIPT.Box(),
      SCRIPT.Sticky(),
      SCRIPT.CopyClipboard(),
      SCRIPT.Toast(),
      SCRIPT.AddComment();
    SCRIPT.Example();
  });
})(jQuery);
