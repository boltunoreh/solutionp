

// Навигация по слайдам
$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'services', 'projects', 'clients', 'partners', 'contacts'],
    });
});

// Открытие попапов
$(function() {
    var btn = $('.popup_open');
    btn.on('click', function() {
        var popup = $('body').find('.popup'),
            popupId,
            btnPopupId = $(this).data('popup-id');
        for (var i = 0; i < popup.length; i++) {
            popupId = $(popup[i]).data('id');
            if($(popup[i]).hasClass('active')){
                $(popup[i]).removeClass('active');
            }
          if (btnPopupId == popupId) {
              $(popup[i]).addClass('active');
            }
        }
    });

// Закрытие попапов
    $('body').find('.popup_close').on('click', function() {
        $('body').find('.popup').removeClass('active')
    });
});

// Переключатель в попапе
    $("body").find(".switch").on("click", function() {
        var a = $(this).find(".switch__item"),
            b = $(this).parent().find(".switch-title_left"),
            c = $(this).parent().find(".switch-title_right"),
            d =
            $(this).parent().siblings(".blocks").find(".popup-block");
        a.toggleClass("switch__item_right"), b.toggleClass("switch-title_disable"), c.toggleClass("switch-title_disable"), d.toggleClass("popup-block_hidden")
    }),
    $("body").find(".switch-title").on("click", function() {
        var a = $(this),
            b = a.siblings(".switch-title"),
            c = $(this).siblings(".switch").find(".switch__item"),
            d = $(this).parent().siblings(".blocks").find(".popup-block");
        a.hasClass("switch-title_disable") && (a.toggleClass("switch-title_disable"), b.toggleClass("switch-title_disable"), c.toggleClass("switch__item_right"), d.toggleClass("popup-block_hidden"))
    });



// Далее всё из проекта Solution P
    function fullscreen() {
        $(".fullscreen").height($(window).height()), $(".fullscreen").width($(window).width())
    }

    function mapSize() {
        var a = $("body").find("#map");
        a.width("auto"), a.height("auto");
        var b = a.parent().width(),
            c = a.parent().height();
        a.width(b), a.height(c)
    }

    function mainSlider(a, b) {
        var c = $("body").find(".screen--active"),
            d = $("body").find(".screen").eq(b),
            e = c.height(),
            f = $("body").find(".menu__item");
        if ($("body").addClass("body--scrolling"), setTimeout(function() {
                $("body").removeClass("body--scrolling")
            }, 1050), a.addClass("navigation__pin--current").siblings().removeClass("navigation__pin--current"), 0 >= b ? f.removeClass("menu__item--current") : f.eq(b).addClass("menu__item--current").siblings().removeClass("menu__item--current"), c.index() > d.index()) d.addClass("screen--new-prev"), setTimeout(function() {
            c.css({
                top: e
            }), d.addClass("screen--move")
        }, 1), d.css({
            top: 0
        });
        else {
            if (!(c.index() < d.index())) return !1;
            d.addClass("screen--new-next"), setTimeout(function() {
                c.css({
                    top: -e
                }), d.addClass("screen--move")
            }, 1), d.css({
                top: 0
            })
        }
        setTimeout(function() {
            d.removeClass("screen--new-next").removeClass("screen--new-prev").removeClass("screen--move").addClass("screen--active").siblings().removeClass("screen--active"), c.css({
                top: 0
            })
        }, 1040), initGallery(), goGallery(0, 0), initServiceSlider(), mapSize(), google.maps.event.trigger(map, "resize"), initMap(), styleMenu()
    }

    function prevGallery(a) {
        var b = $(a).find(".slide.active").index() - 1;
        0 > b ? goGallery(!1) : goGallery(b, a, 500)
    }

    function nextGallery(a) {
        var b = $(".slide").length,
            c = $(a).find(".slide.active").index() + 1;
        c == b ? goGallery(!1) : goGallery(c, a, 500)
    }

    function goGallery(a, b, c) {
        var d = b;
        0 == d && (d = $(".slider")), d.each(function() {
            var b = $(this).find(".slider__container"),
                d = b.find(".slide");
            if ("undefined" == typeof c && (c = 300), a !== !1) {
                var e = a * (d.width() + parseFloat(d.css("margin-right"))),
                    f = $(this).parents("section").find(".screen_nav--clients").find(".screen_nav__pin");
                b.animate({
                    left: -e
                }, c), d.eq(a).addClass("active").siblings().removeClass("active"), f.eq(a).addClass("screen_nav__pin--current").siblings().removeClass("screen_nav__pin--current");
                var g = $(this).parents("section").find(".slider__nav--prev"),
                    h = $(this).parents("section").find(".slider__nav--next");
                0 == a ? g.fadeOut() : g.fadeIn(), d.length - 1 == a ? h.fadeOut() : h.fadeIn()
            }
        })
    }

    function initGallery() {
        var a = $(".slider");
        a.each(function() {
            var a = $(this).find(".slider__container"),
                b = a.find(".slide"),
                c = b.length,
                d = c * (b.width() + parseFloat(b.css("margin-right"))),
                e = a.parents("section").find(".screen_nav"),
                f = a.parents("section").find(".slider__nav");
            if (a.width(d), !$(".screen_nav--clients .screen_nav__pin").length)
                for (var g = 1; c >= g; g++) 1 == g ? e.append('<div class="screen_nav__pin screen_nav__pin--current"></div>') : e.append('<div class="screen_nav__pin"></div>');
            1 >= c && (f.css({
                display: "none"
            }), e.css({
                display: "none"
            }))
        })
    }

    function initServiceSlider() {
        var a = $(".service-slider");
        a.length && (a.find("section:first").addClass("current"), a.carouFredSel({
            circular: !1,
            infinite: !1,
            responsive: !0,
            items: {
                visible: 1
            },
            auto: {
                play: !1
            },
            scroll: {
                items: 1
            },
            prev: {
                button: ".service-slider__prev"
            },
            next: {
                button: ".service-slider__next"
            },
            pagination: {
                container: ".services-screen__nav"
            }
        }))
    }

    function setSlideTitle() {
        var a = $("body").find(".service-screen");
        a.each(function() {
            var a = $(this).index(),
                b = $(this).find(".service-slider__prev"),
                c = $(this).find(".service-slider__next"),
                d = $("body").find(".service-screen").eq(a - 1).find("h2").html(),
                e = $("body").find(".service-screen").eq(a + 1).find("h2").html();
            b.html(d), 0 == a ? c.html(e + '<div class="button__arrow"></div>') : void 0 == e ? c.remove() : c.html(e)
        })
    }

    function scrollMainSlider(a, b, c, d) {
        var e, f, g = ($("body"), $("body").find(".navigation__pin").length - 1);
        return b > 0 ? (e = $("body").find(".navigation__pin--current").index() - 1, 0 > e && (e = 0)) : (e = $("body").find(".navigation__pin--current").index() + 1, e > g && (e = g)), f = $("body").find(".navigation__pin").eq(e), mainSlider(f, e), !1
    }

    function initMap() {
        $("#map").length && (map = new GMaps({
            div: "#map",
            lat: gmlat,
            lng: gmlng,
            zoom: 13,
            height: "100%",
            scrollwheel: !1,
            zoomControl: !1,
            mapTypeControl: !1
        }), map.addMarker({
            lat: gmlat,
            lng: gmlng,
            title: gmtitle,
            icon: gmicon,
            infoWindow: {
                content: gmcontent
            }
        }))
    }

    function stickyFooter() {
        var a = $(".footer");
        a.siblings(".spacer").remove();
        var b = $("body").height(),
            c = $(window).height();
        c > b && a.before('<div class="spacer" style="height: ' + (c - b) + 'px;"></div>')
    }

    function cart() {
        var a = $("body").find(".cart-in").height(),
            b = $("body").find(".cart");
        $("body").find(".cart").jScrollPane({
            verticalGutter: 0
        });
        a > $(window).height() ? b.find(".jspVerticalBar").css({
            display: "block"
        }) : b.find(".jspVerticalBar").css({
            display: "none"
        })
    }

    function openFilter(a) {
        var b = $(".categories__in"),
            c = $(".categories__roll"),
            d = $("body").find(".spacer"),
            e = (d.height(), b.height(), setInterval(stickyFooter, 1));
        d.length || ($(".footer").before('<div class="spacer"></div>'), d = $("body").find(".spacer")), b.slideToggle(300, function() {
            clearInterval(e)
        }), c.toggleClass("categories__roll--close"), c.hasClass("categories__roll--close") ? ($(a).html("Развернуть фильтр"), cheekFilter = !1) : ($(a).html("Сернуть фильтр"), cheekFilter = !0)
    }

    function autoCloseFilter() {
        var a = $("body").find(".roll");
        scroll = $("body").find(".header-container").height(), $("body").scrollTop() > scroll && cheekFilter && openFilter(a)
    }

    function sliderActiv() {
        var a = $(window).height(),
            b = $(window).width(),
            c = $("body").find(".screen");
        850 >= a || 1200 >= b ? (c.css({
            display: "table",
            position: "relative"
        }), $("body").find(".fixheight").css({
            height: 900
        }), $("body").addClass("noslider"), $("body").removeClass("goslider")) : (c.css({
            "min-height": "auto",
            position: "absolute"
        }), $("body").removeClass("noslider"), $("body").addClass("goslider"))
    }

    function setting() {
        $("body").find(".screen").length && !$("body").hasClass("noslider") ? ($("body").css({
            overflow: "hidden"
        }), $("body").find(".screen").css({
            display: "none"
        }), $("body").find(".screen--active").css({
            position: "absolute",
            top: 0,
            left: 0
        }), $(".intro-screen__next").css({
            display: "inline-block"
        }), $(".navigation").css({
            display: "block"
        })) : ($("body").css({
            "min-height": "100%"
        }), $("html").css({
            "min-height": "100%"
        }), $("body").css({
            "overflow-y": "visible"
        }), $(".intro-screen__next").css({
            display: "none"
        }), $(".navigation").css({
            display: "none"
        }))
    }

    function cheeckMenu() {
        var a = $(".scrolling"),
            b = $(".scrolling").height(),
            c = $(".catalog");
        a.hasClass("fix") ? c.css({
            "padding-top": b + 30
        }) : c.css({
            "padding-top": 30
        })
    }

    function styleMenu() {
        if ($(".header.emerge").length) {
            var a = $(".menu__item--current").index();
            $menu = $(".header.emerge .header__container"), $items = $menu.find(".menu__item"), $btn = $menu.find(".header__btn"), $logo = $menu.find(".header__logo"), $header = $(".header"), $nav = $(".navigation"), a >= 3 ? ($items.addClass("white"), $btn.addClass("button--white"), $btn.removeClass("button--blue"), $btn.removeClass("hide"), $logo.removeClass("hide"), $header.addClass("header--main"), $nav.addClass("navigation--white")) : -1 == a || 0 == a ? ($btn.addClass("hide"), $logo.addClass("hide"), $header.removeClass("header--main")) : ($btn.removeClass("hide"), $logo.removeClass("hide"), $items.removeClass("white"), $btn.removeClass("button--white"), $btn.addClass("button--blue"), $header.addClass("header--main"), $nav.removeClass("navigation--white"))
        }
    }
    jQuery && (! function(a) {
            a(function() {
                a.expr[":"].uncached = function(b) {
                    if (!a(b).is('img[src!=""]')) return !1;
                    var c = new Image;
                    return c.src = b.src, !c.complete
                };
                var b = [],
                    c = 500,
                    d = !1,
                    e = !1,
                    f = ["backgroundImage", "borderImage", "borderCornerImage", "listStyleImage", "cursor"],
                    g = /url\(\s*(['"]?)(.*?)\1\s*\)/g,
                    h = 0,
                    i = function(a, b, c, d, e) {
                        var f = "emergeRotate" + ++h;
                        return '<div style="position: absolute; transition: opacity ' + e + 'ms ease-out"><div style="position: absolute; left: 50%; top: 50%; margin: -' + a + 'px"><svg xmlns="http://www.w3.org/2000/svg" width="' + 2 * a + '" height="' + 2 * a + '"viewBox="0 0 24 24" style="-webkit-animation: ' + f + " " + d + "ms linear infinite;animation: " + f + " " + d + 'ms linear infinite"><path fill="' + b + '" d="M17.25 1.5c-.14-.06-.28-.11-.44-.11-.55 0-1 .45-1 1 0 .39.23.72.56.89l-.01.01c3.2 1.6 5.39 4.9 5.39 8.71 0 5.38-4.37 9.75-9.75 9.75S2.25 17.39 2.25 12c0-3.82 2.2-7.11 5.39-8.71v-.02c.33-.16.56-.49.56-.89 0-.55-.45-1-1-1-.16 0-.31.05-.44.11C2.9 3.43.25 7.4.25 12c0 6.49 5.26 11.75 11.75 11.75S23.75 18.49 23.75 12c0-4.6-2.65-8.57-6.5-10.5z"><animateTransform attributeName="transform" type="rotate" from="' + 360 * c + ' 12 12" to="' + 360 * !c + ' 12 12" dur="' + d + 'ms" repeatCount="indefinite" /></path></svg></div></div>'
                    };
                if (window.navigator && "preview" === window.navigator.loadPurpose) return a(".emerge").css("transition", "none"), a(".emerge").css("opacity", "1"), !1;
                var j = function(a) {
                        return a.offset().top - document.body.scrollTop < document.body.clientHeight
                    },
                    k = function(a, b) {
                        var d = a.data("hold"),
                            e = a.data("expose");
                        if (e && !j(a)) return a.data("_waitingForView", !0), !1;
                        if (d && !a.data("_holding")) return a.data("_holding", !0), setTimeout(function() {
                            k(a, !0)
                        }, d), !1;
                        if (a.data("_holding") && !b) return !1;
                        var f = a.data("_spinner");
                        f && f.css("opacity", 0), a.css("transition", "opacity " + c + "ms ease-out"), a.css("opacity", "1");
                        var g = a.data("style-2");
                        g && a.attr("style", a.attr("style") + "; " + g), a.data("_fired", !0), l()
                    },
                    l = function(a) {
                        a && b.push(a);
                        for (var c in b) {
                            var d = b[c];
                            if (d.data("_fired"));
                            else {
                                var e, f = !1;
                                if (e = d.data("_waitFor")) {
                                    for (;;) {
                                        if (!e.data("_fired")) {
                                            if (e[0] == d[0]) {
                                                f = !0;
                                                break
                                            }
                                            if (e = e.data("_waitFor")) continue
                                        }
                                        break
                                    }(d.data("_waitFor").data("_fired") || f) && k(d)
                                } else k(d)
                            }
                        }
                    },
                    m = function() {
                        for (var a in b) {
                            var c = b[a];
                            c.data("_waitingForView") && j(c) && (c.data("_waitingForView", !1), k(c))
                        }
                    },
                    n = function() {
                        e || (a(window).on("scroll", m), e = !0)
                    };
                a(".emerge").each(function() {
                    var b = a(this),
                        e = {},
                        h = !1,
                        j = 12,
                        k = 1333,
                        m = "#404040",
                        o = 0,
                        p = c,
                        q = 0,
                        r = 0,
                        s = "",
                        t = "",
                        u = c,
                        v = {};
                    b.$prev = d;
                    var w = function() {
                            b.data("continue") && b.data("_waitFor", b.$prev), b.data("await") && b.data("_waitFor", a("#" + b.data("await"))), l(b)
                        },
                        x = function() {
                            r++, r == q && setTimeout(w, b.data("slow"))
                        };
                    if (b.data("opaque") && b.css("opacity", 1), v = b.data("effect") || !1, u = b.data("duration") || c, expose = b.data("expose"), n(), v) {
                        var y = {},
                            z = ["", "-webkit-"],
                            A = "transform",
                            B = "transform-origin",
                            C = b.data("up") || 0,
                            D = b.data("down") || 0,
                            E = b.data("left") || 0,
                            F = b.data("right") || 0,
                            G = b.data("angle") || "90",
                            H = b.data("scale") || -1,
                            I = b.data("origin") || "50% 50%";
                        if (D && (C = "-" + D, "--" == C.substr(0, 2) && (C = C.substr(2))), F && (E = "-" + F, "--" == E.substr(0, 2) && (E = E.substr(2))), "relax" == v && (-1 == H && (H = .92), "50% 50%" == I && (I = "top"), y = {
                                one: "scaleY(" + H + ")",
                                two: "scaleY(1)",
                                orn: I,
                                crv: "cubic-bezier(0, 0, 0.001, 1)"
                            }), "slide" == v && (C || (C = "20px"), y = {
                                one: "translate(" + E + "," + C + ")",
                                two: "translate(0,0)",
                                crv: "cubic-bezier(0, 0.9, 0.1, 1)"
                            }), "zoom" == v && (-1 == H && (H = .5), y = {
                                one: "scale(" + H + ")",
                                two: "scale(1)",
                                orn: I,
                                crv: "cubic-bezier(0, 0.75, 0.25, 1)"
                            }), "screw" == v && (-1 == H && (H = .5), G || (G = 90), y = {
                                one: "scale(" + H + ") rotate(" + G + "deg)",
                                two: "scale(1) rotate(0)",
                                orn: I,
                                crv: "cubic-bezier(0, 0.75, 0.25, 1)"
                            }), y)
                            for (var J = 0; J < z.length; ++J) s += z[J] + A + ": " + y.one + "; " + z[J] + B + ": " + y.orn + "; ", t += z[J] + A + ": " + y.two + "; " + z[J] + "transition: opacity " + u + "ms ease-out, " + z[J] + A + " " + u + "ms " + y.crv + "; ";
                        b.data("style-1", s), b.data("style-2", t)
                    }
                    if (s || (s = b.data("style-1")), s && b.attr("style", b.attr("style") + "; " + s), b.find("*").addBack().each(function() {
                            var b = a(this);
                            b.is("img:uncached") && b.attr("src") && (e[b.attr("src")] = !0);
                            for (var c = 0; c < f.length; ++c) {
                                var d, h = f[c],
                                    i = b.css(h),
                                    j = -1;
                                if (i && (j = i.indexOf("url(")) >= 0)
                                    for (; null !== (d = g.exec(i));) e[d[2]] = !0
                            }
                        }), Object.keys(e).length > 0 && (h = b.data("spin"))) {
                        var K = b.data("spin-element");
                        if (K) var L = a("#" + K).clone().css({
                            position: "absolute",
                            display: "block"
                        });
                        else {
                            b.data("spin-size") && (j = b.data("spin-size") / 2), b.data("spin-color") && (m = b.data("spin-color")), b.data("spin-period") && (k = b.data("spin-period")), b.data("spin-direction") && (o = "clockwise" == b.data("spin-direction") ? 0 : 1), p = u;
                            var L = a(i(j, m, o, k, p))
                        }
                        L.css({
                            width: "100%",
                            height: Math.min(b.height(), document.body.clientHeight - b.offset().top)
                        }), b.before(L), b.data("_spinner", L)
                    }
                    for (var J in e) {
                        var M = new Image;
                        M.src = J, q++, M.width > 0 ? x() : a(M).on("load error", x)
                    }
                    q++, x(), d = b
                })
            })
        }(jQuery), document.write("<style>.emerge { opacity: 0; }</style>")),
        function($) {
            function sc_setScroll(a, b, c) {
                return "transition" == c.transition && "swing" == b && (b = "ease"), {
                    anims: [],
                    duration: a,
                    orgDuration: a,
                    easing: b,
                    startTime: getTime()
                }
            }

            function sc_startScroll(a, b) {
                for (var c = 0, d = a.anims.length; d > c; c++) {
                    var e = a.anims[c];
                    e && e[0][b.transition](e[1], a.duration, a.easing, e[2])
                }
            }

            function sc_stopScroll(a, b) {
                is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b);
                for (var c = 0, d = a.anims.length; d > c; c++) {
                    var e = a.anims[c];
                    e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]())
                }
                is_object(a.post) && sc_stopScroll(a.post, b)
            }

            function sc_afterScroll(a, b, c) {
                switch (b && b.remove(), c.fx) {
                    case "fade":
                    case "crossfade":
                    case "cover-fade":
                    case "uncover-fade":
                        a.css("opacity", 1), a.css("filter", "")
                }
            }

            function sc_fireCallbacks(a, b, c, d, e) {
                if (b[c] && b[c].call(a, d), e[c].length)
                    for (var f = 0, g = e[c].length; g > f; f++) e[c][f].call(a, d);
                return []
            }

            function sc_fireQueue(a, b, c) {
                return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b
            }

            function sc_hideHiddenItems(a) {
                a.each(function() {
                    var a = $(this);
                    a.data("_cfs_isHidden", a.is(":hidden")).hide()
                })
            }

            function sc_showHiddenItems(a) {
                a && a.each(function() {
                    var a = $(this);
                    a.data("_cfs_isHidden") || a.show()
                })
            }

            function sc_clearTimers(a) {
                return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a
            }

            function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
                return {
                    width: g.width,
                    height: g.height,
                    items: {
                        old: a,
                        skipped: b,
                        visible: c
                    },
                    scroll: {
                        items: d,
                        direction: e,
                        duration: f
                    }
                }
            }

            function sc_getDuration(a, b, c, d) {
                var e = a.duration;
                return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e)))
            }

            function nv_showNavi(a, b, c) {
                var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
                if ("show" == b || "hide" == b) var e = b;
                else if (d > b) {
                    debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
                    var e = "hide"
                } else var e = "show";
                var f = "show" == e ? "removeClass" : "addClass",
                    g = cf_c("hidden", c);
                a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g)
            }

            function nv_enableNavi(a, b, c) {
                if (!a.circular && !a.infinite) {
                    var d = "removeClass" == b || "addClass" == b ? b : !1,
                        e = cf_c("disabled", c);
                    if (a.auto.button && d && a.auto.button[d](e), a.prev.button) {
                        var f = d || 0 == b ? "addClass" : "removeClass";
                        a.prev.button[f](e)
                    }
                    if (a.next.button) {
                        var f = d || b == a.items.visible ? "addClass" : "removeClass";
                        a.next.button[f](e)
                    }
                }
            }

            function go_getObject(a, b) {
                return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b
            }

            function go_getItemsObject(a, b) {
                return b = go_getObject(a, b), is_number(b) ? b = {
                    visible: b
                } : "variable" == b ? b = {
                    visible: b,
                    width: b,
                    height: b
                } : is_object(b) || (b = {}), b
            }

            function go_getScrollObject(a, b) {
                return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? {
                    items: b
                } : {
                    duration: b
                } : is_string(b) ? b = {
                    easing: b
                } : is_object(b) || (b = {}), b
            }

            function go_getNaviObject(a, b) {
                if (b = go_getObject(a, b), is_string(b)) {
                    var c = cf_getKeyCode(b);
                    b = -1 == c ? $(b) : c
                }
                return b
            }

            function go_getAutoObject(a, b) {
                return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
                    button: b
                } : is_boolean(b) ? b = {
                    play: b
                } : is_number(b) && (b = {
                    timeoutDuration: b
                }), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
                    bar: b.progress
                }), b
            }

            function go_complementAutoObject(a, b) {
                return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b
            }

            function go_getPrevNextObject(a, b) {
                return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
                    button: b
                } : is_number(b) && (b = {
                    key: b
                }), b
            }

            function go_complementPrevNextObject(a, b) {
                return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b
            }

            function go_getPaginationObject(a, b) {
                return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
                    container: b
                } : is_boolean(b) && (b = {
                    keys: b
                }), b
            }

            function go_complementPaginationObject(a, b) {
                return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b
            }

            function go_getSwipeObject(a, b) {
                return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = {
                    onTouch: !1
                }), is_true(b) ? b = {
                    onTouch: b
                } : is_number(b) && (b = {
                    items: b
                }), b
            }

            function go_complementSwipeObject(a, b) {
                return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b
            }

            function go_getMousewheelObject(a, b) {
                return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = {
                    items: b
                } : is_undefined(b) && (b = !1), b
            }

            function go_complementMousewheelObject(a, b) {
                return b
            }

            function gn_getItemIndex(a, b, c, d, e) {
                if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) {
                    for (; a >= d.total;) a -= d.total;
                    for (; 0 > a;) a += d.total
                }
                return a
            }

            function gn_getVisibleItemsPrev(a, b, c) {
                for (var d = 0, e = 0, f = c; f >= 0; f--) {
                    var g = a.eq(f);
                    if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
                    0 == f && (f = a.length), e++
                }
            }

            function gn_getVisibleItemsPrevFilter(a, b, c) {
                return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
            }

            function gn_getScrollItemsPrevFilter(a, b, c, d) {
                return gn_getItemsPrevFilter(a, b.items.filter, d, c)
            }

            function gn_getItemsPrevFilter(a, b, c, d) {
                for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
                    if (f++, f == h) return f;
                    var i = a.eq(g);
                    if (i.is(b) && (e++, e == c)) return f;
                    0 == g && (g = h)
                }
            }

            function gn_getVisibleOrg(a, b) {
                return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
            }

            function gn_getVisibleItemsNext(a, b, c) {
                for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
                    var h = a.eq(f);
                    if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
                    if (e++, e == g + 1) return e;
                    f == g && (f = -1)
                }
            }

            function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
                var e = gn_getVisibleItemsNext(a, b, c);
                return b.circular || c + e > d && (e = d - c), e
            }

            function gn_getVisibleItemsNextFilter(a, b, c) {
                return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
            }

            function gn_getScrollItemsNextFilter(a, b, c, d) {
                return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
            }

            function gn_getItemsNextFilter(a, b, c, d) {
                for (var e = 0, f = 0, g = d, h = a.length - 1; h >= g; g++) {
                    if (f++, f >= h) return f;
                    var i = a.eq(g);
                    if (i.is(b) && (e++, e == c)) return f;
                    g == h && (g = -1)
                }
            }

            function gi_getCurrentItems(a, b) {
                return a.slice(0, b.items.visible)
            }

            function gi_getOldItemsPrev(a, b, c) {
                return a.slice(c, b.items.visibleConf.old + c)
            }

            function gi_getNewItemsPrev(a, b) {
                return a.slice(0, b.items.visible)
            }

            function gi_getOldItemsNext(a, b) {
                return a.slice(0, b.items.visibleConf.old)
            }

            function gi_getNewItemsNext(a, b, c) {
                return a.slice(c, b.items.visible + c)
            }

            function sz_storeMargin(a, b, c) {
                b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function() {
                    var a = $(this),
                        d = parseInt(a.css(b.d.marginRight), 10);
                    is_number(d) || (d = 0), a.data(c, d)
                }))
            }

            function sz_resetMargin(a, b, c) {
                if (b.usePadding) {
                    var d = is_boolean(c) ? c : !1;
                    is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function() {
                        var a = $(this);
                        a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"))
                    })
                }
            }

            function sz_storeOrigCss(a) {
                a.each(function() {
                    var a = $(this);
                    a.data("_cfs_origCss", a.attr("style") || "")
                })
            }

            function sz_restoreOrigCss(a) {
                a.each(function() {
                    var a = $(this);
                    a.attr("style", a.data("_cfs_origCss") || "")
                })
            }

            function sz_setResponsiveSizes(a, b) {
                var c = (a.items.visible, a.items[a.d.width]),
                    d = a[a.d.height],
                    e = is_percentage(d);
                b.each(function() {
                    var b = $(this),
                        f = c - ms_getPaddingBorderMargin(b, a, "Width");
                    b[a.d.width](f), e && b[a.d.height](ms_getPercentage(f, d))
                })
            }

            function sz_setSizes(a, b) {
                var c = a.parent(),
                    d = a.children(),
                    e = gi_getCurrentItems(d, b),
                    f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
                if (c.css(f), b.usePadding) {
                    var g = b.padding,
                        h = g[b.d[1]];
                    b.align && 0 > h && (h = 0);
                    var i = e.last();
                    i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]])
                }
                return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f
            }

            function ms_getSizes(a, b, c) {
                return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)]
            }

            function ms_getLargestSize(a, b, c, d) {
                return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c))
            }

            function ms_getTrueLargestSize(a, b, c) {
                for (var d = 0, e = 0, f = a.length; f > e; e++) {
                    var g = a.eq(e),
                        h = g.is(":visible") ? g[b.d[c]](!0) : 0;
                    h > d && (d = h)
                }
                return d
            }

            function ms_getTotalSize(a, b, c, d) {
                if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) return b[b.d[c]];
                if (is_number(b.items[b.d[c]])) return b.items[b.d[c]] * a.length;
                for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
                    var i = a.eq(g);
                    f += i.is(":visible") ? i[b.d[e]](!0) : 0
                }
                return f
            }

            function ms_getParentSize(a, b, c) {
                var d = a.is(":visible");
                d && a.hide();
                var e = a.parent()[b.d[c]]();
                return d && a.show(), e
            }

            function ms_getMaxDimension(a, b) {
                return is_number(a[a.d.width]) ? a[a.d.width] : b
            }

            function ms_hasVariableSizes(a, b, c) {
                for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
                    var h = a.eq(f),
                        i = h.is(":visible") ? h[b.d[c]](!0) : 0;
                    d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0)
                }
                return e
            }

            function ms_getPaddingBorderMargin(a, b, c) {
                return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]()
            }

            function ms_getPercentage(a, b) {
                if (is_percentage(b)) {
                    if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) return a;
                    a *= b / 100
                }
                return a
            }

            function cf_e(a, b, c, d, e) {
                return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a
            }

            function cf_c(a, b) {
                return is_string(b.classnames[a]) ? b.classnames[a] : a
            }

            function cf_mapWrapperSizes(a, b, c) {
                is_boolean(c) || (c = !0);
                var d = b.usePadding && c ? b.padding : [0, 0, 0, 0],
                    e = {};
                return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e
            }

            function cf_sortParams(a, b) {
                for (var c = [], d = 0, e = a.length; e > d; d++)
                    for (var f = 0, g = b.length; g > f; f++)
                        if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
                            c[f] = a[d];
                            break
                        }
                return c
            }

            function cf_getPadding(a) {
                if (is_undefined(a)) return [0, 0, 0, 0];
                if (is_number(a)) return [a, a, a, a];
                if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) return [0, 0, 0, 0];
                for (var b = 0; 4 > b; b++) a[b] = parseInt(a[b], 10);
                switch (a.length) {
                    case 0:
                        return [0, 0, 0, 0];
                    case 1:
                        return [a[0], a[0], a[0], a[0]];
                    case 2:
                        return [a[0], a[1], a[0], a[1]];
                    case 3:
                        return [a[0], a[1], a[2], a[1]];
                    default:
                        return [a[0], a[1], a[2], a[3]]
                }
            }

            function cf_getAlignPadding(a, b) {
                var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
                switch (b.align) {
                    case "left":
                        return [0, c];
                    case "right":
                        return [c, 0];
                    case "center":
                    default:
                        return [Math.ceil(c / 2), Math.floor(c / 2)]
                }
            }

            function cf_getDimensions(a) {
                for (var b = [
                        ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                        ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
                    ], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++) e[b[0][f]] = b[d][f];
                return e
            }

            function cf_getAdjust(a, b, c, d) {
                var e = a;
                if (is_function(c)) e = c.call(d, e);
                else if (is_string(c)) {
                    var f = c.split("+"),
                        g = c.split("-");
                    if (g.length > f.length) var h = !0,
                        i = g[0],
                        j = g[1];
                    else var h = !1,
                        i = f[0],
                        j = f[1];
                    switch (i) {
                        case "even":
                            e = 1 == a % 2 ? a - 1 : a;
                            break;
                        case "odd":
                            e = 0 == a % 2 ? a - 1 : a;
                            break;
                        default:
                            e = a
                    }
                    j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j)
                }
                return (!is_number(e) || 1 > e) && (e = 1), e
            }

            function cf_getItemsAdjust(a, b, c, d) {
                return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
            }

            function cf_getItemAdjustMinMax(a, b) {
                return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a
            }

            function cf_getSynchArr(a) {
                is_array(a) || (a = [
                    [a]
                ]), is_array(a[0]) || (a = [a]);
                for (var b = 0, c = a.length; c > b; b++) is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0);
                return a
            }

            function cf_getKeyCode(a) {
                return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1
            }

            function cf_setCookie(a, b, c) {
                if (a) {
                    var d = b.triggerHandler(cf_e("currentPosition", c));
                    $.fn.carouFredSel.cookie.set(a, d)
                }
            }

            function cf_getCookie(a) {
                var b = $.fn.carouFredSel.cookie.get(a);
                return "" == b ? 0 : b
            }

            function in_mapCss(a, b) {
                for (var c = {}, d = 0, e = b.length; e > d; d++) c[b[d]] = a.css(b[d]);
                return c
            }

            function in_complementItems(a, b, c, d) {
                return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a
            }

            function in_complementVisibleItems(a, b) {
                return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a
            }

            function in_complementPrimarySize(a, b, c) {
                return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a
            }

            function in_complementSecondarySize(a, b, c) {
                return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a
            }

            function in_getAlignPadding(a, b) {
                var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
                return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a
            }

            function in_getResponsiveValues(a, b) {
                var c = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
                c > b.length && (c = b.length);
                var d = Math.floor(a[a.d.width] / c);
                return a.items.visible = c, a.items[a.d.width] = d, a[a.d.width] = c * d, a
            }

            function bt_pauseOnHoverConfig(a) {
                if (is_string(a)) var b = a.indexOf("immediate") > -1 ? !0 : !1,
                    c = a.indexOf("resume") > -1 ? !0 : !1;
                else var b = c = !1;
                return [b, c]
            }

            function bt_mousesheelNumber(a) {
                return is_number(a) ? a : null
            }

            function is_null(a) {
                return null === a
            }

            function is_undefined(a) {
                return is_null(a) || void 0 === a || "" === a || "undefined" === a
            }

            function is_array(a) {
                return a instanceof Array
            }

            function is_jquery(a) {
                return a instanceof jQuery
            }

            function is_object(a) {
                return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a)
            }

            function is_number(a) {
                return (a instanceof Number || "number" == typeof a) && !isNaN(a)
            }

            function is_string(a) {
                return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a)
            }

            function is_function(a) {
                return a instanceof Function || "function" == typeof a
            }

            function is_boolean(a) {
                return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a)
            }

            function is_true(a) {
                return a === !0 || "true" === a
            }

            function is_false(a) {
                return a === !1 || "false" === a
            }

            function is_percentage(a) {
                return is_string(a) && "%" == a.slice(-1)
            }

            function getTime() {
                return (new Date).getTime()
            }

            function deprecated(a, b) {
                debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.")
            }

            function debug(a, b) {
                if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
                    if (is_object(a)) {
                        var c = " (" + a.selector + ")";
                        a = a.debug
                    } else var c = "";
                    if (!a) return !1;
                    b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b)
                }
                return !1
            }
            $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
                if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
                if (this.length > 1) return this.each(function() {
                    $(this).carouFredSel(options, configs)
                });
                var $cfs = this,
                    $tt0 = this[0],
                    starting_position = !1;
                $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
                var FN = {};
                FN._init = function(a, b, c) {
                    a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
                    var d = $cfs.children(),
                        e = ms_getParentSize($wrp, opts, "width");
                    if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e);
                    else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                        case "center":
                        case "left":
                        case "right":
                            "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0);
                            break;
                        default:
                            opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0
                    }
                    is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination),
                        opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
                }, FN._build = function() {
                    $cfs.data("_cfs_isCarousel", !0);
                    var a = $cfs.children(),
                        b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                        c = "relative";
                    switch (b.position) {
                        case "absolute":
                        case "fixed":
                            c = b.position
                    }
                    "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({
                        overflow: "hidden",
                        position: c
                    }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({
                        textAlign: "left",
                        "float": "none",
                        position: "absolute",
                        top: 0,
                        right: "auto",
                        bottom: "auto",
                        left: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                    }), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a)
                }, FN._bind_events = function() {
                    FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function(a, b) {
                        return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0
                    }), $cfs.bind(cf_e("finish", conf), function(a) {
                        return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
                    }), $cfs.bind(cf_e("pause", conf), function(a, b, c) {
                        if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) {
                            scrl.isStopped = !0;
                            var d = getTime() - scrl.startTime;
                            scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1)
                        }
                        if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                            var e = opts.auto.timeoutDuration - tmrs.timePassed,
                                f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
                            opts.auto.onTimeoutPause.call($tt0, f, e)
                        }
                        return !0
                    }), $cfs.bind(cf_e("play", conf), function(a, b, c, d) {
                        a.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                        var e = [b, c, d],
                            f = ["string", "number", "boolean"],
                            g = cf_sortParams(e, f);
                        if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
                        crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                        var h = opts.auto.timeoutDuration + c;
                        return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function() {
                            var a = getTime() - tmrs.startTime + tmrs.timePassed,
                                b = Math.ceil(100 * a / h);
                            opts.auto.progress.updater.call(opts.auto.progress.bar[0], b)
                        }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function() {
                            opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto)
                        }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
                    }), $cfs.bind(cf_e("resume", conf), function(a) {
                        return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
                    }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(a, b, c, d, e) {
                        if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
                        var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                        if (f > itms.total) return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.");
                        var g = [b, c, d, e],
                            h = ["object", "number/string", "function", "boolean"],
                            i = cf_sortParams(g, h);
                        b = i[0], c = i[1], d = i[2], e = i[3];
                        var j = a.type.slice(conf.events.prefix.length);
                        if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
                        if (!is_number(c)) {
                            if ("*" != opts.items.filter) c = "visible";
                            else
                                for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++)
                                    if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
                                        c = k[i];
                                        break
                                    } switch (c) {
                                case "page":
                                    return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
                                case "visible":
                                    opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible)
                            }
                        }
                        if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
                        if (b.duration > 0 && crsl.isScrolling) return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
                        if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise)
                            for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
                                var p = j;
                                m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n])
                            }
                        return !0
                    }), $cfs.bind(cf_e("slide_prev", conf), function(a, b, c) {
                        a.stopPropagation();
                        var d = $cfs.children();
                        if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation();
                        if (sz_resetMargin(d, opts), !is_number(c)) {
                            if (opts.items.visibleConf.variable) c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);
                            else if ("*" != opts.items.filter) {
                                var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                                c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
                            } else c = opts.items.visible;
                            c = cf_getAdjust(c, opts, b.items, $tt0)
                        }
                        if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                            var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
                            f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f
                        } else if ("*" != opts.items.filter) {
                            var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
                            opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                        }
                        if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                        for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;) itms.first -= itms.total;
                        opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                        var d = $cfs.children(),
                            g = gi_getOldItemsPrev(d, opts, c),
                            h = gi_getNewItemsPrev(d, opts),
                            i = d.eq(c - 1),
                            j = g.last(),
                            k = h.last();
                        sz_resetMargin(d, opts);
                        var l = 0,
                            m = 0;
                        if (opts.align) {
                            var n = cf_getAlignPadding(h, opts);
                            l = n[0], m = n[1]
                        }
                        var o = 0 > l ? opts.padding[opts.d[3]] : 0,
                            p = !1,
                            q = $();
                        if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                            var r = opts.items[opts.d.width];
                            p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                        }
                        var s = !1,
                            t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                            u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding),
                            v = 0,
                            w = {},
                            x = {},
                            y = {},
                            z = {},
                            A = {},
                            B = {},
                            C = {},
                            D = sc_getDuration(b, opts, c, t);
                        switch (b.fx) {
                            case "cover":
                            case "cover-fade":
                                v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width")
                        }
                        p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width];
                        var E = function() {},
                            F = function() {},
                            G = function() {},
                            H = function() {},
                            I = function() {},
                            J = function() {},
                            K = function() {},
                            L = function() {},
                            M = function() {},
                            N = function() {},
                            O = function() {};
                        switch (b.fx) {
                            case "crossfade":
                            case "cover":
                            case "cover-fade":
                            case "uncover":
                            case "uncover-fade":
                                s = $cfs.clone(!0).appendTo($wrp)
                        }
                        switch (b.fx) {
                            case "crossfade":
                            case "uncover":
                            case "uncover-fade":
                                s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove();
                                break;
                            case "cover":
                            case "cover-fade":
                                s.children().slice(opts.items.visible).remove(), s.css(C)
                        }
                        if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function() {
                                $wrp.css(u)
                            }, F = function() {
                                scrl.anims.push([$wrp, u])
                            }), opts.usePadding) {
                            switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function() {
                                i.css(y)
                            }, L = function() {
                                scrl.anims.push([i, y])
                            })), b.fx) {
                                case "cover":
                                case "cover-fade":
                                    s.children().eq(c - 1).css(y)
                            }
                            k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function() {
                                j.css(z)
                            }, H = function() {
                                scrl.anims.push([j, z])
                            }), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function() {
                                k.css(A)
                            }, J = function() {
                                scrl.anims.push([k, A])
                            })
                        }
                        O = function() {
                            $cfs.css(w)
                        };
                        var P = opts.items.visible + c - itms.total;
                        N = function() {
                            if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) {
                                var a = $cfs.children().eq(opts.items.visible + c - 1);
                                a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                            }
                        };
                        var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
                        switch (M = function() {
                            sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                        }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) {
                            case "none":
                                $cfs.css(w), E(), G(), I(), K(), O(), N(), M();
                                break;
                            case "fade":
                                scrl.anims.push([$cfs, {
                                    opacity: 0
                                }, function() {
                                    E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }, M]), sc_startScroll(scrl, conf)
                                }]);
                                break;
                            case "crossfade":
                                $cfs.css({
                                    opacity: 0
                                }), scrl.anims.push([s, {
                                    opacity: 0
                                }]), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }, M]), F(), G(), I(), K(), O(), N();
                                break;
                            case "cover":
                                scrl.anims.push([s, w, function() {
                                    G(), I(), K(), O(), N(), M()
                                }]), F();
                                break;
                            case "cover-fade":
                                scrl.anims.push([$cfs, {
                                    opacity: 0
                                }]), scrl.anims.push([s, w, function() {
                                    G(), I(), K(), O(), N(), M()
                                }]), F();
                                break;
                            case "uncover":
                                scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                                break;
                            case "uncover-fade":
                                $cfs.css({
                                    opacity: 0
                                }), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                                break;
                            default:
                                scrl.anims.push([$cfs, w, function() {
                                    N(), M()
                                }]), F(), H(), J(), L()
                        }
                        return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
                    }), $cfs.bind(cf_e("slide_next", conf), function(a, b, c) {
                        a.stopPropagation();
                        var d = $cfs.children();
                        if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation();
                        if (sz_resetMargin(d, opts), !is_number(c)) {
                            if ("*" != opts.items.filter) {
                                var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                                c = gn_getScrollItemsNextFilter(d, opts, 0, e)
                            } else c = opts.items.visible;
                            c = cf_getAdjust(c, opts, b.items, $tt0)
                        }
                        var f = 0 == itms.first ? itms.total : itms.first;
                        if (!opts.circular) {
                            if (opts.items.visibleConf.variable) var g = gn_getVisibleItemsNext(d, opts, c),
                                e = gn_getVisibleItemsPrev(d, opts, f - 1);
                            else var g = opts.items.visible,
                                e = opts.items.visible;
                            c + g > f && (c = f - e)
                        }
                        if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                            for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;) c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0);
                            opts.items.visible = g
                        } else if ("*" != opts.items.filter) {
                            var g = gn_getVisibleItemsNextFilter(d, opts, c);
                            opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                        }
                        if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                        for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;) itms.first += itms.total;
                        opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                        var d = $cfs.children(),
                            h = gi_getOldItemsNext(d, opts),
                            i = gi_getNewItemsNext(d, opts, c),
                            j = d.eq(c - 1),
                            k = h.last(),
                            l = i.last();
                        sz_resetMargin(d, opts);
                        var m = 0,
                            n = 0;
                        if (opts.align) {
                            var o = cf_getAlignPadding(i, opts);
                            m = o[0], n = o[1]
                        }
                        var p = !1,
                            q = $();
                        if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                            var r = opts.items[opts.d.width];
                            p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                        }
                        var s = !1,
                            t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                            u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding),
                            v = 0,
                            w = {},
                            x = {},
                            y = {},
                            z = {},
                            A = {},
                            B = sc_getDuration(b, opts, c, t);
                        switch (b.fx) {
                            case "uncover":
                            case "uncover-fade":
                                v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width")
                        }
                        p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                        var C = function() {},
                            D = function() {},
                            E = function() {},
                            F = function() {},
                            G = function() {},
                            H = function() {},
                            I = function() {},
                            J = function() {},
                            K = function() {};
                        switch (b.fx) {
                            case "crossfade":
                            case "cover":
                            case "cover-fade":
                            case "uncover":
                            case "uncover-fade":
                                s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove()
                        }
                        switch (b.fx) {
                            case "crossfade":
                            case "cover":
                            case "cover-fade":
                                $cfs.css("zIndex", 1), s.css("zIndex", 0)
                        }
                        if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function() {
                                $wrp.css(u)
                            }, D = function() {
                                scrl.anims.push([$wrp, u])
                            }), opts.usePadding) {
                            var L = l.data("_cfs_origCssMargin");
                            n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function() {
                                k.css(z)
                            }, F = function() {
                                scrl.anims.push([k, z])
                            };
                            var M = j.data("_cfs_origCssMargin");
                            m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function() {
                                j.css(y)
                            }, H = function() {
                                scrl.anims.push([j, y])
                            }
                        }
                        K = function() {
                            $cfs.css(A)
                        };
                        var N = opts.items.visible + c - itms.total;
                        J = function() {
                            N > 0 && $cfs.children().slice(itms.total).remove();
                            var a = $cfs.children().slice(0, c).appendTo($cfs).last();
                            if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) {
                                if (itms.total < opts.items.visible + c) {
                                    var b = $cfs.children().eq(opts.items.visible - 1);
                                    b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                                }
                                a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                            }
                        };
                        var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
                        switch (I = function() {
                            $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                        }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) {
                            case "none":
                                $cfs.css(w), C(), E(), G(), K(), J(), I();
                                break;
                            case "fade":
                                scrl.anims.push([$cfs, {
                                    opacity: 0
                                }, function() {
                                    C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }, I]), sc_startScroll(scrl, conf)
                                }]);
                                break;
                            case "crossfade":
                                $cfs.css({
                                    opacity: 0
                                }), scrl.anims.push([s, {
                                    opacity: 0
                                }]), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }, I]), D(), E(), G(), K(), J();
                                break;
                            case "cover":
                                $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                                break;
                            case "cover-fade":
                                $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, {
                                    opacity: 0
                                }]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                                break;
                            case "uncover":
                                scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                                break;
                            case "uncover-fade":
                                $cfs.css({
                                    opacity: 0
                                }), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                                break;
                            default:
                                scrl.anims.push([$cfs, w, function() {
                                    K(), J(), I()
                                }]), D(), F(), H()
                        }
                        return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
                    }), $cfs.bind(cf_e("slideTo", conf), function(a, b, c, d, e, f, g) {
                        a.stopPropagation();
                        var h = [b, c, d, e, f, g],
                            i = ["string/number/object", "number", "boolean", "object", "string", "function"],
                            j = cf_sortParams(h, i);
                        return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0)
                    }), $cfs.bind(cf_e("prevPage", conf), function(a, b, c) {
                        a.stopPropagation();
                        var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                        return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
                    }), $cfs.bind(cf_e("nextPage", conf), function(a, b, c) {
                        a.stopPropagation();
                        var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                        return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
                    }), $cfs.bind(cf_e("slideToPage", conf), function(a, b, c, d, e) {
                        a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
                        var f = opts.pagination.items || opts.items.visible,
                            g = Math.ceil(itms.total / f) - 1;
                        return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e])
                    }), $cfs.bind(cf_e("jumpToStart", conf), function(a, b) {
                        if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) {
                            if (itms.total > 0)
                                for (; b > itms.total;) b -= itms.total;
                            $cfs.prepend($cfs.children().slice(b, itms.total))
                        }
                        return !0
                    }), $cfs.bind(cf_e("synchronise", conf), function(a, b) {
                        if (a.stopPropagation(), b) b = cf_getSynchArr(b);
                        else {
                            if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
                            b = opts.synchronise
                        }
                        for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++) b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1);
                        return d
                    }), $cfs.bind(cf_e("queue", conf), function(a, b, c) {
                        return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu
                    }), $cfs.bind(cf_e("insertItem", conf), function(a, b, c, d, e) {
                        a.stopPropagation();
                        var f = [b, c, d, e],
                            g = ["string/object", "string/number/object", "boolean", "number"],
                            h = cf_sortParams(f, g);
                        if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) return debug(conf, "Not a valid object.");
                        is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b);
                        var i = c,
                            j = "before";
                        "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
                        var k = $cfs.children().eq(c);
                        return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
                    }), $cfs.bind(cf_e("removeItem", conf), function(a, b, c, d) {
                        a.stopPropagation();
                        var e = [b, c, d],
                            f = ["string/number/object", "boolean", "number"],
                            g = cf_sortParams(e, f);
                        if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) return h = $(), b.each(function() {
                            var a = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
                            a && (h = h.add(a))
                        }), h;
                        if (is_undefined(b) || "end" == b) h = $cfs.children().last();
                        else {
                            b = gn_getItemIndex(b, d, c, itms, $cfs);
                            var h = $cfs.children().eq(b);
                            h.length && itms.first > b && (itms.first -= h.length)
                        }
                        return h && h.length && (h.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), h
                    }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(a, b) {
                        a.stopPropagation();
                        var c = a.type.slice(conf.events.prefix.length);
                        return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c]
                    }), $cfs.bind(cf_e("currentPosition", conf), function(a, b) {
                        if (a.stopPropagation(), 0 == itms.first) var c = 0;
                        else var c = itms.total - itms.first;
                        return is_function(b) && b.call($tt0, c), c
                    }), $cfs.bind(cf_e("currentPage", conf), function(a, b) {
                        a.stopPropagation();
                        var c, d = opts.pagination.items || opts.items.visible,
                            e = Math.ceil(itms.total / d - 1);
                        return c = 0 == itms.first ? 0 : itms.first < itms.total % d ? 0 : itms.first != d || opts.circular ? Math.round((itms.total - itms.first) / d) : e, 0 > c && (c = 0), c > e && (c = e), is_function(b) && b.call($tt0, c), c
                    }), $cfs.bind(cf_e("currentVisible", conf), function(a, b) {
                        a.stopPropagation();
                        var c = gi_getCurrentItems($cfs.children(), opts);
                        return is_function(b) && b.call($tt0, c), c
                    }), $cfs.bind(cf_e("slice", conf), function(a, b, c, d) {
                        if (a.stopPropagation(), 0 == itms.total) return !1;
                        var e = [b, c, d],
                            f = ["number", "number", "function"],
                            g = cf_sortParams(e, f);
                        if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, items.total > 0) {
                            for (; b > itms.total;) b -= itms.total;
                            for (; c > itms.total;) c -= itms.total;
                            for (; 0 > b;) b += itms.total;
                            for (; 0 > c;) c += itms.total
                        }
                        var h, i = $cfs.children();
                        return h = c > b ? i.slice(b, c) : $(i.slice(b, itms.total).get().concat(i.slice(0, c).get())), is_function(d) && d.call($tt0, h), h
                    }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(a, b) {
                        a.stopPropagation();
                        var c = a.type.slice(conf.events.prefix.length),
                            d = crsl[c];
                        return is_function(b) && b.call($tt0, d), d
                    }), $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                        e.stopPropagation();
                        var reInit = !1;
                        if (is_function(a)) a.call($tt0, opts);
                        else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                        else if (!is_undefined(a))
                            if (is_function(b)) {
                                var val = eval("opts." + a);
                                is_undefined(val) && (val = ""), b.call($tt0, val)
                            } else {
                                if (is_undefined(b)) return eval("opts." + a);
                                "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                            }
                        if (reInit) {
                            sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                            var sz = sz_setSizes($cfs, opts);
                            $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                        }
                        return opts
                    }), $cfs.bind(cf_e("linkAnchors", conf), function(a, b, c) {
                        return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function() {
                            var a = this.hash || "";
                            a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function(b) {
                                b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a)
                            })
                        }), !0) : debug(conf, "Not a valid object.")
                    }), $cfs.bind(cf_e("updatePageStatus", conf), function(a, b) {
                        if (a.stopPropagation(), opts.pagination.container) {
                            var c = opts.pagination.items || opts.items.visible,
                                d = Math.ceil(itms.total / c);
                            b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function() {
                                for (var a = 0; d > a; a++) {
                                    var b = $cfs.children().eq(gn_getItemIndex(a * c, 0, !0, itms, $cfs));
                                    $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1))
                                }
                            })), opts.pagination.container.each(function() {
                                $(this).children().unbind(opts.pagination.event).each(function(a) {
                                    $(this).bind(opts.pagination.event, function(b) {
                                        b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * c, -opts.pagination.deviation, !0, opts.pagination])
                                    })
                                })
                            }));
                            var e = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                            return e >= d && (e = 0), 0 > e && (e = d - 1), opts.pagination.container.each(function() {
                                $(this).children().removeClass(cf_c("selected", conf)).eq(e).addClass(cf_c("selected", conf))
                            }), !0
                        }
                    }), $cfs.bind(cf_e("updateSizes", conf), function() {
                        var a = opts.items.visible,
                            b = $cfs.children(),
                            c = ms_getParentSize($wrp, opts, "width");
                        if (itms.total = b.length, crsl.primarySizePercentage ? (opts.maxDimension = c, opts[opts.d.width] = ms_getPercentage(c, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, c), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, b, c), a = opts.items.visible, sz_setResponsiveSizes(opts, b)) : opts.items.visibleConf.variable ? a = gn_getVisibleItemsNext(b, opts, 0) : "*" != opts.items.filter && (a = gn_getVisibleItemsNextFilter(b, opts, 0)), !opts.circular && 0 != itms.first && a > itms.first) {
                            if (opts.items.visibleConf.variable) var d = gn_getVisibleItemsPrev(b, opts, itms.first) - itms.first;
                            else if ("*" != opts.items.filter) var d = gn_getVisibleItemsPrevFilter(b, opts, itms.first) - itms.first;
                            else var d = opts.items.visible - itms.first;
                            debug(conf, "Preventing non-circular: sliding " + d + " items backward."), $cfs.trigger(cf_e("prev", conf), d)
                        }
                        opts.items.visible = cf_getItemsAdjust(a, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, b);
                        var e = sz_setSizes($cfs, opts);
                        return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, e]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), e
                    }), $cfs.bind(cf_e("destroy", conf), function(a, b) {
                        return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
                    }), $cfs.bind(cf_e("debug", conf), function() {
                        return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
                    }), $cfs.bind("_cfs_triggerEvent", function(a, b, c) {
                        return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c)
                    })
                }, FN._unbind_events = function() {
                    $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
                }, FN._bind_buttons = function() {
                    if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                        var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                        $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                            $cfs.trigger(cf_e("pause", conf), a)
                        }).bind(cf_e("mouseleave", conf, !1), function() {
                            $cfs.trigger(cf_e("resume", conf))
                        })
                    }
                    if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(a) {
                            a.preventDefault();
                            var b = !1,
                                c = null;
                            crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c)
                        }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(a) {
                            a.preventDefault(), $cfs.trigger(cf_e("prev", conf))
                        }), opts.prev.pauseOnHover)) {
                        var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                        opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                            $cfs.trigger(cf_e("pause", conf), a)
                        }).bind(cf_e("mouseleave", conf, !1), function() {
                            $cfs.trigger(cf_e("resume", conf))
                        })
                    }
                    if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(a) {
                            a.preventDefault(), $cfs.trigger(cf_e("next", conf))
                        }), opts.next.pauseOnHover)) {
                        var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                        opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                            $cfs.trigger(cf_e("pause", conf), a)
                        }).bind(cf_e("mouseleave", conf, !1), function() {
                            $cfs.trigger(cf_e("resume", conf))
                        })
                    }
                    if (opts.pagination.container && opts.pagination.pauseOnHover) {
                        var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                        opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                            $cfs.trigger(cf_e("pause", conf), a)
                        }).bind(cf_e("mouseleave", conf, !1), function() {
                            $cfs.trigger(cf_e("resume", conf))
                        })
                    }
                    if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                            var b = a.keyCode;
                            b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
                        }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                            var b = a.keyCode;
                            b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])))
                        }), $.fn.swipe) {
                        var b = "ontouchstart" in window;
                        if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
                            var c = $.extend(!0, {}, opts.prev, opts.swipe),
                                d = $.extend(!0, {}, opts.next, opts.swipe),
                                e = function() {
                                    $cfs.trigger(cf_e("prev", conf), [c])
                                },
                                f = function() {
                                    $cfs.trigger(cf_e("next", conf), [d])
                                };
                            switch (opts.direction) {
                                case "up":
                                case "down":
                                    opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e;
                                    break;
                                default:
                                    opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e
                            }
                            crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                        }
                    }
                    if ($.fn.mousewheel && opts.mousewheel) {
                        var g = $.extend(!0, {}, opts.prev, opts.mousewheel),
                            h = $.extend(!0, {}, opts.next, opts.mousewheel);
                        crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function(a, b) {
                            a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h])
                        }), crsl.mousewheel = !0
                    }
                    if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                        var i = function() {
                                $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                            },
                            j = $(window),
                            k = null;
                        if ($.debounce && "debounce" == conf.onWindowResize) k = $.debounce(200, i);
                        else if ($.throttle && "throttle" == conf.onWindowResize) k = $.throttle(300, i);
                        else {
                            var l = 0,
                                m = 0;
                            k = function() {
                                var a = j.width(),
                                    b = j.height();
                                (a != l || b != m) && (i(), l = a, m = b)
                            }
                        }
                        j.bind(cf_e("resize", conf, !1, !0, !0), k)
                    }
                }, FN._unbind_buttons = function() {
                    var a = (cf_e("", conf), cf_e("", conf, !1));
                    ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(a), opts.auto.button && opts.auto.button.unbind(a), opts.prev.button && opts.prev.button.unbind(a), opts.next.button && opts.next.button.unbind(a), opts.pagination.container && (opts.pagination.container.unbind(a), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
                }, is_boolean(configs) && (configs = {
                    debug: configs
                });
                var crsl = {
                        direction: "next",
                        isPaused: !0,
                        isScrolling: !1,
                        isStopped: !1,
                        mousewheel: !1,
                        swipe: !1
                    },
                    itms = {
                        total: $cfs.children().length,
                        first: 0
                    },
                    tmrs = {
                        auto: null,
                        progress: null,
                        startTime: getTime(),
                        timePassed: 0
                    },
                    scrl = {
                        isStopped: !1,
                        duration: 0,
                        startTime: 0,
                        easing: "",
                        anims: []
                    },
                    clbk = {
                        onBefore: [],
                        onAfter: []
                    },
                    queu = [],
                    conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
                    opts = {},
                    opts_orig = $.extend(!0, {}, options),
                    $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
                if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
                else {
                    var start_arr = [];
                    0 != opts.items.start && start_arr.push(opts.items.start)
                }
                if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
                    for (var a = 0, l = start_arr.length; l > a; a++) {
                        var s = start_arr[a];
                        if (0 != s) {
                            if (s === !0) {
                                if (s = window.location.hash, 1 > s.length) continue
                            } else "random" === s && (s = Math.floor(Math.random() * itms.total));
                            if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                                    fx: "none"
                                }])) break
                        }
                    }
                var siz = sz_setSizes($cfs, opts),
                    itm = gi_getCurrentItems($cfs.children(), opts);
                return opts.onCreate && opts.onCreate.call($tt0, {
                    width: siz.width,
                    height: siz.height,
                    items: itm
                }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
            }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
                synchronise: !1,
                infinite: !0,
                circular: !0,
                responsive: !1,
                direction: "left",
                items: {
                    start: 0
                },
                scroll: {
                    easing: "swing",
                    duration: 500,
                    pauseOnHover: !1,
                    event: "click",
                    queue: !1
                }
            }, $.fn.carouFredSel.configs = {
                debug: !1,
                transition: !1,
                onWindowResize: "throttle",
                events: {
                    prefix: "",
                    namespace: "cfs"
                },
                wrapper: {
                    element: "div",
                    classname: "caroufredsel_wrapper fullscreen"
                },
                classnames: {}
            }, $.fn.carouFredSel.pageAnchorBuilder = function(a) {
                return '<a href="#"><span>' + a + "</span></a>"
            }, $.fn.carouFredSel.progressbarUpdater = function(a) {
                $(this).css("width", a + "%")
            }, $.fn.carouFredSel.cookie = {
                get: function(a) {
                    a += "=";
                    for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
                        for (var e = b[c];
                            " " == e.charAt(0);) e = e.slice(1);
                        if (0 == e.indexOf(a)) return e.slice(a.length)
                    }
                    return 0
                },
                set: function(a, b, c) {
                    var d = "";
                    if (c) {
                        var e = new Date;
                        e.setTime(e.getTime() + 864e5 * c), d = "; expires=" + e.toGMTString()
                    }
                    document.cookie = a + "=" + b + d + "; path=/"
                },
                remove: function(a) {
                    $.fn.carouFredSel.cookie.set(a, "", -1)
                }
            }, $.extend($.easing, {
                quadratic: function(a) {
                    var b = a * a;
                    return a * (-b * a + 4 * b - 6 * a + 4)
                },
                cubic: function(a) {
                    return a * (4 * a * a - 9 * a + 6)
                },
                elastic: function(a) {
                    var b = a * a;
                    return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
                }
            }))
        }(jQuery),
        function(a, b, c, d) {
            var e = c("html"),
                f = c(a),
                g = c(b),
                h = c.fancybox = function() {
                    h.open.apply(this, arguments)
                },
                i = navigator.userAgent.match(/msie/i),
                j = null,
                k = b.createTouch !== d,
                l = function(a) {
                    return a && a.hasOwnProperty && a instanceof c
                },
                m = function(a) {
                    return a && "string" === c.type(a)
                },
                n = function(a) {
                    return m(a) && 0 < a.indexOf("%")
                },
                o = function(a, b) {
                    var c = parseInt(a, 10) || 0;
                    return b && n(a) && (c *= h.getViewport()[b] / 100), Math.ceil(c)
                },
                p = function(a, b) {
                    return o(a, b) + "px"
                };
            c.extend(h, {
                version: "2.1.5",
                defaults: {
                    padding: 15,
                    margin: 20,
                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1,
                    autoSize: !0,
                    autoHeight: !1,
                    autoWidth: !1,
                    autoResize: !0,
                    autoCenter: !k,
                    fitToView: !0,
                    aspectRatio: !1,
                    topRatio: .5,
                    leftRatio: .5,
                    scrolling: "auto",
                    wrapCSS: "",
                    arrows: !0,
                    closeBtn: !0,
                    closeClick: !1,
                    nextClick: !1,
                    mouseWheel: !0,
                    autoPlay: !1,
                    playSpeed: 3e3,
                    preload: 3,
                    modal: !1,
                    loop: !0,
                    ajax: {
                        dataType: "html",
                        headers: {
                            "X-fancyBox": !0
                        }
                    },
                    iframe: {
                        scrolling: "auto",
                        preload: !0
                    },
                    swf: {
                        wmode: "transparent",
                        allowfullscreen: "true",
                        allowscriptaccess: "always"
                    },
                    keys: {
                        next: {
                            13: "left",
                            34: "up",
                            39: "left",
                            40: "up"
                        },
                        prev: {
                            8: "right",
                            33: "down",
                            37: "right",
                            38: "down"
                        },
                        close: [27],
                        play: [32],
                        toggle: [70]
                    },
                    direction: {
                        next: "left",
                        prev: "right"
                    },
                    scrollOutside: !0,
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (i ? ' allowtransparency="true"' : "") + "></iframe>",
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    },
                    openEffect: "fade",
                    openSpeed: 250,
                    openEasing: "swing",
                    openOpacity: !0,
                    openMethod: "zoomIn",
                    closeEffect: "fade",
                    closeSpeed: 250,
                    closeEasing: "swing",
                    closeOpacity: !0,
                    closeMethod: "zoomOut",
                    nextEffect: "elastic",
                    nextSpeed: 250,
                    nextEasing: "swing",
                    nextMethod: "changeIn",
                    prevEffect: "elastic",
                    prevSpeed: 250,
                    prevEasing: "swing",
                    prevMethod: "changeOut",
                    helpers: {
                        overlay: !0,
                        title: !0
                    },
                    onCancel: c.noop,
                    beforeLoad: c.noop,
                    afterLoad: c.noop,
                    beforeShow: c.noop,
                    afterShow: c.noop,
                    beforeChange: c.noop,
                    beforeClose: c.noop,
                    afterClose: c.noop
                },
                group: {},
                opts: {},
                previous: null,
                coming: null,
                current: null,
                isActive: !1,
                isOpen: !1,
                isOpened: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null,
                player: {
                    timer: null,
                    isActive: !1
                },
                ajaxLoad: null,
                imgPreload: null,
                transitions: {},
                helpers: {},
                open: function(a, b) {
                    return a && (c.isPlainObject(b) || (b = {}), !1 !== h.close(!0)) ? (c.isArray(a) || (a = l(a) ? c(a).get() : [a]), c.each(a, function(e, f) {
                        var g, i, j, k, n, o = {};
                        "object" === c.type(f) && (f.nodeType && (f = c(f)), l(f) ? (o = {
                            href: f.data("fancybox-href") || f.attr("href"),
                            title: f.data("fancybox-title") || f.attr("title"),
                            isDom: !0,
                            element: f
                        }, c.metadata && c.extend(!0, o, f.metadata())) : o = f), g = b.href || o.href || (m(f) ? f : null), i = b.title !== d ? b.title : o.title || "", k = (j = b.content || o.content) ? "html" : b.type || o.type, !k && o.isDom && (k = f.data("fancybox-type"), k || (k = (k = f.prop("class").match(/fancybox\.(\w+)/)) ? k[1] : null)), m(g) && (k || (h.isImage(g) ? k = "image" : h.isSWF(g) ? k = "swf" : "#" === g.charAt(0) ? k = "inline" : m(f) && (k = "html", j = f)), "ajax" === k && (n = g.split(/\s+/, 2), g = n.shift(), n = n.shift())), j || ("inline" === k ? g ? j = c(m(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : o.isDom && (j = f) : "html" === k ? j = g : !k && !g && o.isDom && (k = "inline", j = f)), c.extend(o, {
                            href: g,
                            type: k,
                            content: j,
                            title: i,
                            selector: n
                        }), a[e] = o
                    }), h.opts = c.extend(!0, {}, h.defaults, b), b.keys !== d && (h.opts.keys = b.keys ? c.extend({}, h.defaults.keys, b.keys) : !1), h.group = a, h._start(h.opts.index)) : void 0
                },
                cancel: function() {
                    var a = h.coming;
                    a && !1 !== h.trigger("onCancel") && (h.hideLoading(), h.ajaxLoad && h.ajaxLoad.abort(), h.ajaxLoad = null, h.imgPreload && (h.imgPreload.onload = h.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), h.coming = null, h.current || h._afterZoomOut(a))
                },
                close: function(a) {
                    h.cancel(), !1 !== h.trigger("beforeClose") && (h.unbindEvents(), h.isActive && (h.isOpen && !0 !== a ? (h.isOpen = h.isOpened = !1, h.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), h.wrap.stop(!0, !0).removeClass("fancybox-opened"), h.transitions[h.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), h._afterZoomOut())))
                },
                play: function(a) {
                    var b = function() {
                            clearTimeout(h.player.timer)
                        },
                        c = function() {
                            b(), h.current && h.player.isActive && (h.player.timer = setTimeout(h.next, h.current.playSpeed))
                        },
                        d = function() {
                            b(), g.unbind(".player"), h.player.isActive = !1, h.trigger("onPlayEnd")
                        };
                    !0 === a || !h.player.isActive && !1 !== a ? h.current && (h.current.loop || h.current.index < h.group.length - 1) && (h.player.isActive = !0, g.bind({
                        "onCancel.player beforeClose.player": d,
                        "onUpdate.player": c,
                        "beforeLoad.player": b
                    }), c(), h.trigger("onPlayStart")) : d()
                },
                next: function(a) {
                    var b = h.current;
                    b && (m(a) || (a = b.direction.next), h.jumpto(b.index + 1, a, "next"))
                },
                prev: function(a) {
                    var b = h.current;
                    b && (m(a) || (a = b.direction.prev), h.jumpto(b.index - 1, a, "prev"))
                },
                jumpto: function(a, b, c) {
                    var e = h.current;
                    e && (a = o(a), h.direction = b || e.direction[a >= e.index ? "next" : "prev"], h.router = c || "jumpto", e.loop && (0 > a && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== d && (h.cancel(), h._start(a)))
                },
                reposition: function(a, b) {
                    var d, e = h.current,
                        f = e ? e.wrap : null;
                    f && (d = h._getPosition(b), a && "scroll" === a.type ? (delete d.position, f.stop(!0, !0).animate(d, 200)) : (f.css(d), e.pos = c.extend({}, e.dim, d)))
                },
                update: function(a) {
                    var b = a && a.type,
                        c = !b || "orientationchange" === b;
                    c && (clearTimeout(j), j = null), h.isOpen && !j && (j = setTimeout(function() {
                        var d = h.current;
                        d && !h.isClosing && (h.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && h._setDimension(), "scroll" === b && d.canShrink || h.reposition(a), h.trigger("onUpdate"), j = null)
                    }, c && !k ? 0 : 300))
                },
                toggle: function(a) {
                    h.isOpen && (h.current.fitToView = "boolean" === c.type(a) ? a : !h.current.fitToView, k && (h.wrap.removeAttr("style").addClass("fancybox-tmp"), h.trigger("onUpdate")), h.update())
                },
                hideLoading: function() {
                    g.unbind(".loading"), c("#fancybox-loading").remove()
                },
                showLoading: function() {
                    var a, b;
                    h.hideLoading(), a = c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"), g.bind("keydown.loading", function(a) {
                        27 === (a.which || a.keyCode) && (a.preventDefault(), h.cancel())
                    }), h.defaults.fixed || (b = h.getViewport(), a.css({
                        position: "absolute",
                        top: .5 * b.h + b.y,
                        left: .5 * b.w + b.x
                    }))
                },
                getViewport: function() {
                    var b = h.current && h.current.locked || !1,
                        c = {
                            x: f.scrollLeft(),
                            y: f.scrollTop()
                        };
                    return b ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = k && a.innerWidth ? a.innerWidth : f.width(), c.h = k && a.innerHeight ? a.innerHeight : f.height()), c
                },
                unbindEvents: function() {
                    h.wrap && l(h.wrap) && h.wrap.unbind(".fb"), g.unbind(".fb"), f.unbind(".fb")
                },
                bindEvents: function() {
                    var a, b = h.current;
                    b && (f.bind("orientationchange.fb" + (k ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), h.update), (a = b.keys) && g.bind("keydown.fb", function(e) {
                        var f = e.which || e.keyCode,
                            g = e.target || e.srcElement;
                        return 27 === f && h.coming ? !1 : void(!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!g || !g.type && !c(g).is("[contenteditable]")) && c.each(a, function(a, g) {
                            return 1 < b.group.length && g[f] !== d ? (h[a](g[f]), e.preventDefault(), !1) : -1 < c.inArray(f, g) ? (h[a](), e.preventDefault(), !1) : void 0
                        }))
                    }), c.fn.mousewheel && b.mouseWheel && h.wrap.bind("mousewheel.fb", function(a, d, e, f) {
                        for (var g = c(a.target || null), i = !1; g.length && !i && !g.is(".fancybox-skin") && !g.is(".fancybox-wrap");) i = g[0] && !(g[0].style.overflow && "hidden" === g[0].style.overflow) && (g[0].clientWidth && g[0].scrollWidth > g[0].clientWidth || g[0].clientHeight && g[0].scrollHeight > g[0].clientHeight), g = c(g).parent();
                        0 !== d && !i && 1 < h.group.length && !b.canShrink && (f > 0 || e > 0 ? h.prev(f > 0 ? "down" : "left") : (0 > f || 0 > e) && h.next(0 > f ? "up" : "right"), a.preventDefault())
                    }))
                },
                trigger: function(a, b) {
                    var d, e = b || h.coming || h.current;
                    if (e) {
                        if (c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1))), !1 === d) return !1;
                        e.helpers && c.each(e.helpers, function(b, d) {
                            d && h.helpers[b] && c.isFunction(h.helpers[b][a]) && h.helpers[b][a](c.extend(!0, {}, h.helpers[b].defaults, d), e)
                        }), g.trigger(a)
                    }
                },
                isImage: function(a) {
                    return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
                },
                isSWF: function(a) {
                    return m(a) && a.match(/\.(swf)((\?|#).*)?$/i)
                },
                _start: function(a) {
                    var b, d, e = {};
                    if (a = o(a), b = h.group[a] || null, !b) return !1;
                    if (e = c.extend(!0, {}, h.opts, b), b = e.margin, d = e.padding, "number" === c.type(b) && (e.margin = [b, b, b, b]), "number" === c.type(d) && (e.padding = [d, d, d, d]), e.modal && c.extend(!0, e, {
                            closeBtn: !1,
                            closeClick: !1,
                            nextClick: !1,
                            arrows: !1,
                            mouseWheel: !1,
                            keys: null,
                            helpers: {
                                overlay: {
                                    closeClick: !1
                                }
                            }
                        }), e.autoSize && (e.autoWidth = e.autoHeight = !0), "auto" === e.width && (e.autoWidth = !0), "auto" === e.height && (e.autoHeight = !0), e.group = h.group, e.index = a, h.coming = e, !1 === h.trigger("beforeLoad")) h.coming = null;
                    else {
                        if (d = e.type, b = e.href, !d) return h.coming = null, h.current && h.router && "jumpto" !== h.router ? (h.current.index = a, h[h.router](h.direction)) : !1;
                        if (h.isActive = !0, ("image" === d || "swf" === d) && (e.autoHeight = e.autoWidth = !1, e.scrolling = "visible"), "image" === d && (e.aspectRatio = !0), "iframe" === d && k && (e.scrolling = "scroll"), e.wrap = c(e.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + d + " fancybox-tmp " + e.wrapCSS).appendTo(e.parent || "body"), c.extend(e, {
                                skin: c(".fancybox-skin", e.wrap),
                                outer: c(".fancybox-outer", e.wrap),
                                inner: c(".fancybox-inner", e.wrap)
                            }), c.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                                e.skin.css("padding" + b, p(e.padding[a]))
                            }), h.trigger("onReady"), "inline" === d || "html" === d) {
                            if (!e.content || !e.content.length) return h._error("content")
                        } else if (!b) return h._error("href");
                        "image" === d ? h._loadImage() : "ajax" === d ? h._loadAjax() : "iframe" === d ? h._loadIframe() : h._afterLoad()
                    }
                },
                _error: function(a) {
                    c.extend(h.coming, {
                        type: "html",
                        autoWidth: !0,
                        autoHeight: !0,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: "no",
                        hasError: a,
                        content: h.coming.tpl.error
                    }), h._afterLoad()
                },
                _loadImage: function() {
                    var a = h.imgPreload = new Image;
                    a.onload = function() {
                        this.onload = this.onerror = null, h.coming.width = this.width / h.opts.pixelRatio, h.coming.height = this.height / h.opts.pixelRatio, h._afterLoad()
                    }, a.onerror = function() {
                        this.onload = this.onerror = null, h._error("image")
                    }, a.src = h.coming.href, !0 !== a.complete && h.showLoading()
                },
                _loadAjax: function() {
                    var a = h.coming;
                    h.showLoading(), h.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                        url: a.href,
                        error: function(a, b) {
                            h.coming && "abort" !== b ? h._error("ajax", a) : h.hideLoading()
                        },
                        success: function(b, c) {
                            "success" === c && (a.content = b, h._afterLoad())
                        }
                    }))
                },
                _loadIframe: function() {
                    var a = h.coming,
                        b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", k ? "auto" : a.iframe.scrolling).attr("src", a.href);
                    c(a.wrap).bind("onReset", function() {
                        try {
                            c(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                        } catch (a) {}
                    }), a.iframe.preload && (h.showLoading(), b.one("load", function() {
                        c(this).data("ready", 1), k || c(this).bind("load.fb", h.update), c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), h._afterLoad()
                    })), a.content = b.appendTo(a.inner), a.iframe.preload || h._afterLoad()
                },
                _preloadImages: function() {
                    var a, b, c = h.group,
                        d = h.current,
                        e = c.length,
                        f = d.preload ? Math.min(d.preload, e - 1) : 0;
                    for (b = 1; f >= b; b += 1) a = c[(d.index + b) % e], "image" === a.type && a.href && ((new Image).src = a.href)
                },
                _afterLoad: function() {
                    var a, b, d, e, f, g = h.coming,
                        i = h.current;
                    if (h.hideLoading(), g && !1 !== h.isActive)
                        if (!1 === h.trigger("afterLoad", g, i)) g.wrap.stop(!0).trigger("onReset").remove(), h.coming = null;
                        else {
                            switch (i && (h.trigger("beforeChange", i), i.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), h.unbindEvents(), a = g.content, b = g.type, d = g.scrolling, c.extend(h, {
                                wrap: g.wrap,
                                skin: g.skin,
                                outer: g.outer,
                                inner: g.inner,
                                current: g,
                                previous: i
                            }), e = g.href, b) {
                                case "inline":
                                case "ajax":
                                case "html":
                                    g.selector ? a = c("<div>").html(a).find(g.selector) : l(a) && (a.data("fancybox-placeholder") || a.data("fancybox-placeholder", c('<div class="fancybox-placeholder"></div>').insertAfter(a).hide()), a = a.show().detach(), g.wrap.bind("onReset", function() {
                                        c(this).find(a).length && a.hide().replaceAll(a.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                    }));
                                    break;
                                case "image":
                                    a = g.tpl.image.replace("{href}", e);
                                    break;
                                case "swf":
                                    a = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + e + '"></param>', f = "", c.each(g.swf, function(b, c) {
                                        a += '<param name="' + b + '" value="' + c + '"></param>', f += " " + b + '="' + c + '"'
                                    }), a += '<embed src="' + e + '" type="application/x-shockwave-flash" width="100%" height="100%"' + f + "></embed></object>"
                            }(!l(a) || !a.parent().is(g.inner)) && g.inner.append(a), h.trigger("beforeShow"), g.inner.css("overflow", "yes" === d ? "scroll" : "no" === d ? "hidden" : d), h._setDimension(), h.reposition(), h.isOpen = !1, h.coming = null, h.bindEvents(), h.isOpened ? i.prevMethod && h.transitions[i.prevMethod]() : c(".fancybox-wrap").not(g.wrap).stop(!0).trigger("onReset").remove(), h.transitions[h.isOpened ? g.nextMethod : g.openMethod](), h._preloadImages()
                        }
                },
                _setDimension: function() {
                    var a, b, d, e, f, g, i, j, k, l = h.getViewport(),
                        m = 0,
                        q = !1,
                        r = !1,
                        q = h.wrap,
                        s = h.skin,
                        t = h.inner,
                        u = h.current,
                        r = u.width,
                        v = u.height,
                        w = u.minWidth,
                        x = u.minHeight,
                        y = u.maxWidth,
                        z = u.maxHeight,
                        A = u.scrolling,
                        B = u.scrollOutside ? u.scrollbarWidth : 0,
                        C = u.margin,
                        D = o(C[1] + C[3]),
                        E = o(C[0] + C[2]);
                    if (q.add(s).add(t).width("auto").height("auto").removeClass("fancybox-tmp"), C = o(s.outerWidth(!0) - s.width()), a = o(s.outerHeight(!0) - s.height()), b = D + C, d = E + a, e = n(r) ? (l.w - b) * o(r) / 100 : r, f = n(v) ? (l.h - d) * o(v) / 100 : v, "iframe" === u.type) {
                        if (k = u.content, u.autoHeight && 1 === k.data("ready")) try {
                            k[0].contentWindow.document.location && (t.width(e).height(9999), g = k.contents().find("body"), B && g.css("overflow-x", "hidden"), f = g.outerHeight(!0))
                        } catch (F) {}
                    } else(u.autoWidth || u.autoHeight) && (t.addClass("fancybox-tmp"), u.autoWidth || t.width(e), u.autoHeight || t.height(f), u.autoWidth && (e = t.width()), u.autoHeight && (f = t.height()), t.removeClass("fancybox-tmp"));
                    if (r = o(e), v = o(f), j = e / f, w = o(n(w) ? o(w, "w") - b : w), y = o(n(y) ? o(y, "w") - b : y), x = o(n(x) ? o(x, "h") - d : x), z = o(n(z) ? o(z, "h") - d : z), g = y, i = z, u.fitToView && (y = Math.min(l.w - b, y), z = Math.min(l.h - d, z)), b = l.w - D, E = l.h - E, u.aspectRatio ? (r > y && (r = y, v = o(r / j)), v > z && (v = z, r = o(v * j)), w > r && (r = w, v = o(r / j)), x > v && (v = x, r = o(v * j))) : (r = Math.max(w, Math.min(r, y)), u.autoHeight && "iframe" !== u.type && (t.width(r), v = t.height()), v = Math.max(x, Math.min(v, z))), u.fitToView)
                        if (t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height(), u.aspectRatio)
                            for (;
                                (l > b || D > E) && r > w && v > x && !(19 < m++);) v = Math.max(x, Math.min(z, v - 10)), r = o(v * j), w > r && (r = w, v = o(r / j)), r > y && (r = y, v = o(r / j)), t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height();
                        else r = Math.max(w, Math.min(r, r - (l - b))), v = Math.max(x, Math.min(v, v - (D - E)));
                    B && "auto" === A && f > v && b > r + C + B && (r += B), t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height(), q = (l > b || D > E) && r > w && v > x, r = u.aspectRatio ? g > r && i > v && e > r && f > v : (g > r || i > v) && (e > r || f > v), c.extend(u, {
                        dim: {
                            width: p(l),
                            height: p(D)
                        },
                        origWidth: e,
                        origHeight: f,
                        canShrink: q,
                        canExpand: r,
                        wPadding: C,
                        hPadding: a,
                        wrapSpace: D - s.outerHeight(!0),
                        skinSpace: s.height() - v
                    }), !k && u.autoHeight && v > x && z > v && !r && t.height("auto")
                },
                _getPosition: function(a) {
                    var b = h.current,
                        c = h.getViewport(),
                        d = b.margin,
                        e = h.wrap.width() + d[1] + d[3],
                        f = h.wrap.height() + d[0] + d[2],
                        d = {
                            position: "absolute",
                            top: d[0],
                            left: d[3]
                        };
                    return b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w ? d.position = "fixed" : b.locked || (d.top += c.y, d.left += c.x), d.top = p(Math.max(d.top, d.top + (c.h - f) * b.topRatio)), d.left = p(Math.max(d.left, d.left + (c.w - e) * b.leftRatio)), d
                },
                _afterZoomIn: function() {
                    var a = h.current;
                    a && (h.isOpen = h.isOpened = !0, h.wrap.css("overflow", "visible").addClass("fancybox-opened"), h.update(), (a.closeClick || a.nextClick && 1 < h.group.length) && h.inner.css("cursor", "pointer").bind("click.fb", function(b) {
                        !c(b.target).is("a") && !c(b.target).parent().is("a") && (b.preventDefault(), h[a.closeClick ? "close" : "next"]())
                    }), a.closeBtn && c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function(a) {
                        a.preventDefault(), h.close()
                    }), a.arrows && 1 < h.group.length && ((a.loop || 0 < a.index) && c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev), (a.loop || a.index < h.group.length - 1) && c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next)), h.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? h.opts.autoPlay && !h.player.isActive && (h.opts.autoPlay = !1, h.play()) : h.play(!1))
                },
                _afterZoomOut: function(a) {
                    a = a || h.current, c(".fancybox-wrap").trigger("onReset").remove(), c.extend(h, {
                        group: {},
                        opts: {},
                        router: !1,
                        current: null,
                        isActive: !1,
                        isOpened: !1,
                        isOpen: !1,
                        isClosing: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    }), h.trigger("afterClose", a)
                }
            }), h.transitions = {
                getOrigPosition: function() {
                    var a = h.current,
                        b = a.element,
                        c = a.orig,
                        d = {},
                        e = 50,
                        f = 50,
                        g = a.hPadding,
                        i = a.wPadding,
                        j = h.getViewport();
                    return !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b)), l(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) : (d.top = j.y + (j.h - f) * a.topRatio, d.left = j.x + (j.w - e) * a.leftRatio), ("fixed" === h.wrap.css("position") || a.locked) && (d.top -= j.y, d.left -= j.x), d = {
                        top: p(d.top - g * a.topRatio),
                        left: p(d.left - i * a.leftRatio),
                        width: p(e + i),
                        height: p(f + g)
                    }
                },
                step: function(a, b) {
                    var c, d, e = b.prop;
                    d = h.current;
                    var f = d.wrapSpace,
                        g = d.skinSpace;
                    ("width" === e || "height" === e) && (c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), h.isClosing && (c = 1 - c), d = "width" === e ? d.wPadding : d.hPadding, d = a - d, h.skin[e](o("width" === e ? d : d - f * c)), h.inner[e](o("width" === e ? d : d - f * c - g * c)))
                },
                zoomIn: function() {
                    var a = h.current,
                        b = a.pos,
                        d = a.openEffect,
                        e = "elastic" === d,
                        f = c.extend({
                            opacity: 1
                        }, b);
                    delete f.position, e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1), h.wrap.css(b).animate(f, {
                        duration: "none" === d ? 0 : a.openSpeed,
                        easing: a.openEasing,
                        step: e ? this.step : null,
                        complete: h._afterZoomIn
                    })
                },
                zoomOut: function() {
                    var a = h.current,
                        b = a.closeEffect,
                        c = "elastic" === b,
                        d = {
                            opacity: .1
                        };
                    c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)), h.wrap.animate(d, {
                        duration: "none" === b ? 0 : a.closeSpeed,
                        easing: a.closeEasing,
                        step: c ? this.step : null,
                        complete: h._afterZoomOut
                    })
                },
                changeIn: function() {
                    var a, b = h.current,
                        c = b.nextEffect,
                        d = b.pos,
                        e = {
                            opacity: 1
                        },
                        f = h.direction;
                    d.opacity = .1, "elastic" === c && (a = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (d[a] = p(o(d[a]) - 200), e[a] = "+=200px") : (d[a] = p(o(d[a]) + 200), e[a] = "-=200px")), "none" === c ? h._afterZoomIn() : h.wrap.css(d).animate(e, {
                        duration: b.nextSpeed,
                        easing: b.nextEasing,
                        complete: h._afterZoomIn
                    })
                },
                changeOut: function() {
                    var a = h.previous,
                        b = a.prevEffect,
                        d = {
                            opacity: .1
                        },
                        e = h.direction;
                    "elastic" === b && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px"), a.wrap.animate(d, {
                        duration: "none" === b ? 0 : a.prevSpeed,
                        easing: a.prevEasing,
                        complete: function() {
                            c(this).trigger("onReset").remove()
                        }
                    })
                }
            }, h.helpers.overlay = {
                defaults: {
                    closeClick: !0,
                    speedOut: 200,
                    showEarly: !0,
                    css: {},
                    locked: !k,
                    fixed: !0
                },
                overlay: null,
                fixed: !1,
                el: c("html"),
                create: function(a) {
                    a = c.extend({}, this.defaults, a), this.overlay && this.close(), this.overlay = c('<div class="fancybox-overlay"></div>').appendTo(h.coming ? h.coming.parent : a.parent), this.fixed = !1, a.fixed && h.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
                },
                open: function(a) {
                    var b = this;
                    a = c.extend({}, this.defaults, a), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a), this.fixed || (f.bind("resize.overlay", c.proxy(this.update, this)), this.update()), a.closeClick && this.overlay.bind("click.overlay", function(a) {
                        return c(a.target).hasClass("fancybox-overlay") ? (h.isActive ? h.close() : b.close(), !1) : void 0
                    }), this.overlay.css(a.css).show()
                },
                close: function() {
                    var a, b;
                    f.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (c(".fancybox-margin").removeClass("fancybox-margin"), a = f.scrollTop(), b = f.scrollLeft(), this.el.removeClass("fancybox-lock"), f.scrollTop(a).scrollLeft(b)), c(".fancybox-overlay").remove().hide(), c.extend(this, {
                        overlay: null,
                        fixed: !1
                    })
                },
                update: function() {
                    var a, c = "100%";
                    this.overlay.width(c).height("100%"), i ? (a = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), g.width() > a && (c = g.width())) : g.width() > f.width() && (c = g.width()), this.overlay.width(c).height(g.height())
                },
                onReady: function(a, b) {
                    var d = this.overlay;
                    c(".fancybox-overlay").stop(!0, !0), d || this.create(a), a.locked && this.fixed && b.fixed && (d || (this.margin = g.height() > f.height() ? c("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1), !0 === a.showEarly && this.beforeShow.apply(this, arguments)
                },
                beforeShow: function(a, b) {
                    var d, e;
                    b.locked && (!1 !== this.margin && (c("*").filter(function() {
                        return "fixed" === c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), d = f.scrollTop(), e = f.scrollLeft(), this.el.addClass("fancybox-lock"), f.scrollTop(d).scrollLeft(e)), this.open(a)
                },
                onUpdate: function() {
                    this.fixed || this.update()
                },
                afterClose: function(a) {
                    this.overlay && !h.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this))
                }
            }, h.helpers.title = {
                defaults: {
                    type: "float",
                    position: "bottom"
                },
                beforeShow: function(a) {
                    var b = h.current,
                        d = b.title,
                        e = a.type;
                    if (c.isFunction(d) && (d = d.call(b.element, b)), m(d) && "" !== c.trim(d)) {
                        switch (b = c('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>"), e) {
                            case "inside":
                                e = h.skin;
                                break;
                            case "outside":
                                e = h.wrap;
                                break;
                            case "over":
                                e = h.inner;
                                break;
                            default:
                                e = h.skin, b.appendTo("body"), i && b.width(b.width()), b.wrapInner('<span class="child"></span>'), h.current.margin[2] += Math.abs(o(b.css("margin-bottom")))
                        }
                        b["top" === a.position ? "prependTo" : "appendTo"](e)
                    }
                }
            }, c.fn.fancybox = function(a) {
                var b, d = c(this),
                    e = this.selector || "",
                    f = function(f) {
                        var g, i, j = c(this).blur(),
                            k = b;
                        !f.ctrlKey && !f.altKey && !f.shiftKey && !f.metaKey && !j.is(".fancybox-wrap") && (g = a.groupAttr || "data-fancybox-group", i = j.attr(g), i || (g = "rel", i = j.get(0)[g]), i && "" !== i && "nofollow" !== i && (j = e.length ? c(e) : d, j = j.filter("[" + g + '="' + i + '"]'), k = j.index(this)), a.index = k, !1 !== h.open(j, a) && f.preventDefault())
                    };
                return a = a || {}, b = a.index || 0, e && !1 !== a.live ? g.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f) : d.unbind("click.fb-start").bind("click.fb-start", f), this.filter("[data-fancybox-start=1]").trigger("click"), this
            }, g.ready(function() {
                var b, f;
                if (c.scrollbarWidth === d && (c.scrollbarWidth = function() {
                        var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                            b = a.children(),
                            b = b.innerWidth() - b.height(99).innerWidth();
                        return a.remove(), b
                    }), c.support.fixedPosition === d) {
                    b = c.support, f = c('<div style="position:fixed;top:20px;"></div>').appendTo("body");
                    var g = 20 === f[0].offsetTop || 15 === f[0].offsetTop;
                    f.remove(), b.fixedPosition = g
                }
                c.extend(h.defaults, {
                    scrollbarWidth: c.scrollbarWidth(),
                    fixed: c.support.fixedPosition,
                    parent: c("body")
                }), b = c(a).width(), e.addClass("fancybox-lock-test"), f = c(a).width(), e.removeClass("fancybox-lock-test"), c("<style type='text/css'>.fancybox-margin{margin-right:" + (f - b) + "px;}</style>").appendTo("head")
            })
        }(window, document, jQuery),
        function(a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
        }(function(a) {
            function b(b, c) {
                this.element = b, this.options = a.extend({}, e, c), this.init()
            }

            function c(b) {
                if (!a(b.target).parents().hasClass("jq-selectbox") && "OPTION" != b.target.nodeName && a("div.jq-selectbox.opened").length) {
                    b = a("div.jq-selectbox.opened");
                    var c = a("div.jq-selectbox__search input", b),
                        e = a("div.jq-selectbox__dropdown", b);
                    b.find("select").data("_" + d).options.onSelectClosed.call(b), c.length && c.val("").keyup(), e.hide().find("li.sel").addClass("selected"), b.removeClass("focused opened dropup dropdown")
                }
            }
            var d = "styler",
                e = {
                    wrapper: "form",
                    idSuffix: "-styler",
                    filePlaceholder: "Файл не выбран",
                    fileBrowse: "Обзор...",
                    fileNumber: "Выбрано файлов: %s",
                    selectPlaceholder: "Выберите...",
                    selectSearch: !1,
                    selectSearchLimit: 10,
                    selectSearchNotFound: "Совпадений не найдено",
                    selectSearchPlaceholder: "Поиск...",
                    selectVisibleOptions: 0,
                    singleSelectzIndex: "100",
                    selectSmartPositioning: !0,
                    onSelectOpened: function() {},
                    onSelectClosed: function() {},
                    onFormStyled: function() {}
                };
            b.prototype = {
                init: function() {
                    function b() {
                        var a = "",
                            b = "",
                            c = "",
                            f = "";
                        void 0 !== d.attr("id") && "" !== d.attr("id") && (a = ' id="' + d.attr("id") + e.idSuffix + '"'), void 0 !== d.attr("title") && "" !== d.attr("title") && (b = ' title="' + d.attr("title") + '"'), void 0 !== d.attr("class") && "" !== d.attr("class") && (c = " " + d.attr("class"));
                        var g, h = d.data();
                        for (g in h) "" !== h[g] && "_styler" !== g && (f += " data-" + g + '="' + h[g] + '"');
                        this.id = a + f, this.title = b, this.classes = c
                    }
                    var d = a(this.element),
                        e = this.options,
                        f = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1,
                        g = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1;
                    if (d.is(":checkbox")) {
                        var h = function() {
                            var c = new b,
                                e = a("<div" + c.id + ' class="jq-checkbox' + c.classes + '"' + c.title + '><div class="jq-checkbox__div"></div></div>');
                            d.css({
                                position: "absolute",
                                zIndex: "-1",
                                opacity: 0,
                                margin: 0,
                                padding: 0
                            }).after(e).prependTo(e), e.attr("unselectable", "on").css({
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-ms-user-select": "none",
                                "-o-user-select": "none",
                                "user-select": "none",
                                display: "inline-block",
                                position: "relative",
                                overflow: "hidden"
                            }), d.is(":checked") && e.addClass("checked"), d.is(":disabled") && e.addClass("disabled"), e.click(function(a) {
                                a.preventDefault(), e.is(".disabled") || (d.is(":checked") ? (d.prop("checked", !1), e.removeClass("checked")) : (d.prop("checked", !0), e.addClass("checked")), d.focus().change())
                            }), d.closest("label").add('label[for="' + d.attr("id") + '"]').on("click.styler", function(b) {
                                a(b.target).is("a") || a(b.target).closest(e).length || (e.triggerHandler("click"), b.preventDefault())
                            }), d.on("change.styler", function() {
                                d.is(":checked") ? e.addClass("checked") : e.removeClass("checked")
                            }).on("keydown.styler", function(a) {
                                32 == a.which && e.click()
                            }).on("focus.styler", function() {
                                e.is(".disabled") || e.addClass("focused")
                            }).on("blur.styler", function() {
                                e.removeClass("focused")
                            })
                        };
                        h(), d.on("refresh", function() {
                            d.closest("label").add('label[for="' + d.attr("id") + '"]').off(".styler"), d.off(".styler").parent().before(d).remove(), h()
                        })
                    } else if (d.is(":radio")) {
                        var i = function() {
                            var c = new b,
                                f = a("<div" + c.id + ' class="jq-radio' + c.classes + '"' + c.title + '><div class="jq-radio__div"></div></div>');
                            d.css({
                                position: "absolute",
                                zIndex: "-1",
                                opacity: 0,
                                margin: 0,
                                padding: 0
                            }).after(f).prependTo(f), f.attr("unselectable", "on").css({
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-ms-user-select": "none",
                                "-o-user-select": "none",
                                "user-select": "none",
                                display: "inline-block",
                                position: "relative"
                            }), d.is(":checked") && f.addClass("checked"), d.is(":disabled") && f.addClass("disabled"), f.click(function(a) {
                                a.preventDefault(), f.is(".disabled") || (f.closest(e.wrapper).find('input[name="' + d.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), d.prop("checked", !0).parent().addClass("checked"), d.focus().change())
                            }), d.closest("label").add('label[for="' + d.attr("id") + '"]').on("click.styler", function(b) {
                                a(b.target).is("a") || a(b.target).closest(f).length || (f.triggerHandler("click"), b.preventDefault())
                            }), d.on("change.styler", function() {
                                d.parent().addClass("checked")
                            }).on("focus.styler", function() {
                                f.is(".disabled") || f.addClass("focused")
                            }).on("blur.styler", function() {
                                f.removeClass("focused")
                            })
                        };
                        i(), d.on("refresh", function() {
                            d.closest("label").add('label[for="' + d.attr("id") + '"]').off(".styler"), d.off(".styler").parent().before(d).remove(), i()
                        })
                    } else if (d.is(":file")) {
                        d.css({
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        });
                        var j = function() {
                            var c = new b,
                                f = d.data("placeholder");
                            void 0 === f && (f = e.filePlaceholder);
                            var g = d.data("browse");
                            (void 0 === g || "" === g) && (g = e.fileBrowse);
                            var h = a("<div" + c.id + ' class="jq-file' + c.classes + '"' + c.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                                i = a('<div class="jq-file__name">' + f + "</div>").appendTo(h);
                            a('<div class="jq-file__browse">' + g + "</div>").appendTo(h), d.after(h).appendTo(h), d.is(":disabled") && h.addClass("disabled"), d.on("change.styler", function() {
                                var a = d.val();
                                if (d.is("[multiple]")) {
                                    var a = "",
                                        b = d[0].files.length;
                                    b > 0 && (a = d.data("number"), void 0 === a && (a = e.fileNumber), a = a.replace("%s", b))
                                }
                                i.text(a.replace(/.+[\\\/]/, "")), "" === a ? (i.text(f), h.removeClass("changed")) : h.addClass("changed")
                            }).on("focus.styler", function() {
                                h.addClass("focused")
                            }).on("blur.styler", function() {
                                h.removeClass("focused")
                            }).on("click.styler", function() {
                                h.removeClass("focused")
                            })
                        };
                        j(), d.on("refresh", function() {
                            d.off(".styler").parent().before(d).remove(), j()
                        })
                    } else if (d.is('input[type="number"]')) {
                        var k = function() {
                            var b = a('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
                            d.after(b).prependTo(b).wrap('<div class="jq-number__field"></div>'), d.is(":disabled") && b.addClass("disabled");
                            var c, e, f, g = null,
                                h = null;
                            void 0 !== d.attr("min") && (c = d.attr("min")), void 0 !== d.attr("max") && (e = d.attr("max")), f = void 0 !== d.attr("step") && a.isNumeric(d.attr("step")) ? Number(d.attr("step")) : Number(1);
                            var i = function(b) {
                                var g, h = d.val();
                                a.isNumeric(h) || (h = 0, d.val("0")), b.is(".minus") ? (g = parseInt(h, 10) - f, f > 0 && (g = Math.ceil(g / f) * f)) : b.is(".plus") && (g = parseInt(h, 10) + f, f > 0 && (g = Math.floor(g / f) * f)), a.isNumeric(c) && a.isNumeric(e) ? g >= c && e >= g && d.val(g) : a.isNumeric(c) && !a.isNumeric(e) ? g >= c && d.val(g) : !a.isNumeric(c) && a.isNumeric(e) ? e >= g && d.val(g) : d.val(g)
                            };
                            b.is(".disabled") || (b.on("mousedown", "div.jq-number__spin", function() {
                                var b = a(this);
                                i(b), g = setTimeout(function() {
                                    h = setInterval(function() {
                                        i(b)
                                    }, 40)
                                }, 350)
                            }).on("mouseup mouseout", "div.jq-number__spin", function() {
                                clearTimeout(g), clearInterval(h)
                            }), d.on("focus.styler", function() {
                                b.addClass("focused")
                            }).on("blur.styler", function() {
                                b.removeClass("focused")
                            }))
                        };
                        k(), d.on("refresh", function() {
                            d.off(".styler").closest(".jq-number").before(d).remove(),
                                k()
                        })
                    } else if (d.is("select")) {
                        var l = function() {
                            function h(b) {
                                b.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(b) {
                                    var c = null;
                                    "mousewheel" == b.type ? c = -1 * b.originalEvent.wheelDelta : "DOMMouseScroll" == b.type && (c = 40 * b.originalEvent.detail), c && (b.stopPropagation(), b.preventDefault(), a(this).scrollTop(c + a(this).scrollTop()))
                                })
                            }

                            function i() {
                                for (var a = 0; a < l.length; a++) {
                                    var b = l.eq(a),
                                        c = "",
                                        d = "",
                                        f = c = "",
                                        g = "",
                                        h = "",
                                        i = "",
                                        j = "",
                                        k = "";
                                    b.prop("selected") && (d = "selected sel"), b.is(":disabled") && (d = "disabled"), b.is(":selected:disabled") && (d = "selected sel disabled"), void 0 !== b.attr("id") && "" !== b.attr("id") && (f = ' id="' + b.attr("id") + e.idSuffix + '"'), void 0 !== b.attr("title") && "" !== l.attr("title") && (g = ' title="' + b.attr("title") + '"'), void 0 !== b.attr("class") && (i = " " + b.attr("class"), k = ' data-jqfs-class="' + b.attr("class") + '"');
                                    var n, o = b.data();
                                    for (n in o) "" !== o[n] && (h += " data-" + n + '="' + o[n] + '"');
                                    "" !== d + i && (c = ' class="' + d + i + '"'), c = "<li" + k + h + c + g + f + ">" + b.html() + "</li>", b.parent().is("optgroup") && (void 0 !== b.parent().attr("class") && (j = " " + b.parent().attr("class")), c = "<li" + k + h + ' class="' + d + i + " option" + j + '"' + g + f + ">" + b.html() + "</li>", b.is(":first-child") && (c = '<li class="optgroup' + j + '">' + b.parent().attr("label") + "</li>" + c)), m += c
                                }
                            }

                            function j() {
                                var g = new b,
                                    j = "",
                                    k = d.data("placeholder"),
                                    n = d.data("search"),
                                    o = d.data("search-limit"),
                                    p = d.data("search-not-found"),
                                    q = d.data("search-placeholder"),
                                    r = d.data("z-index"),
                                    s = d.data("smart-positioning");
                                void 0 === k && (k = e.selectPlaceholder), (void 0 === n || "" === n) && (n = e.selectSearch), (void 0 === o || "" === o) && (o = e.selectSearchLimit), (void 0 === p || "" === p) && (p = e.selectSearchNotFound), void 0 === q && (q = e.selectSearchPlaceholder), (void 0 === r || "" === r) && (r = e.singleSelectzIndex), (void 0 === s || "" === s) && (s = e.selectSmartPositioning);
                                var t = a("<div" + g.id + ' class="jq-selectbox jqselect' + g.classes + '" style="display: inline-block; position: relative; z-index:' + r + '"><div class="jq-selectbox__select"' + g.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                                d.css({
                                    margin: 0,
                                    padding: 0
                                }).after(t).prependTo(t);
                                var u = a("div.jq-selectbox__select", t),
                                    v = a("div.jq-selectbox__select-text", t),
                                    g = l.filter(":selected");
                                i(), n && (j = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + q + '"></div><div class="jq-selectbox__not-found">' + p + "</div>");
                                var w = a('<div class="jq-selectbox__dropdown" style="position: absolute">' + j + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + m + "</ul></div>");
                                t.append(w);
                                var x = a("ul", w),
                                    y = a("li", w),
                                    z = a("input", w),
                                    A = a("div.jq-selectbox__not-found", w).hide();
                                y.length < o && z.parent().hide(), "" === d.val() ? v.text(k).addClass("placeholder") : v.text(g.text());
                                var B = 0,
                                    C = 0;
                                y.each(function() {
                                    var b = a(this);
                                    b.css({
                                        display: "inline-block"
                                    }), b.innerWidth() > B && (B = b.innerWidth(), C = b.width()), b.css({
                                        display: ""
                                    })
                                }), v.is(".placeholder") && v.width() > B ? v.width(v.width()) : (j = t.clone().appendTo("body").width("auto"), n = j.outerWidth(), j.remove(), n == t.outerWidth() && v.width(C)), B > t.width() && w.width(B), "" === l.first().text() && "" !== d.data("placeholder") && y.first().hide(), d.css({
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    height: "100%",
                                    opacity: 0
                                });
                                var D = t.outerHeight(),
                                    E = z.outerHeight(),
                                    F = x.css("max-height"),
                                    j = y.filter(".selected");
                                1 > j.length && y.first().addClass("selected sel"), void 0 === y.data("li-height") && y.data("li-height", y.outerHeight());
                                var G = w.css("top");
                                return "auto" == w.css("left") && w.css({
                                    left: 0
                                }), "auto" == w.css("top") && w.css({
                                    top: D
                                }), w.hide(), j.length && (l.first().text() != g.text() && t.addClass("changed"), t.data("jqfs-class", j.data("jqfs-class")), t.addClass(j.data("jqfs-class"))), d.is(":disabled") ? (t.addClass("disabled"), !1) : (u.click(function() {
                                    if (a("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(a("div.jq-selectbox").filter(".opened")), d.focus(), !f) {
                                        var b = a(window),
                                            c = y.data("li-height"),
                                            g = t.offset().top,
                                            i = b.height() - D - (g - b.scrollTop()),
                                            j = d.data("visible-options");
                                        (void 0 === j || "" === j) && (j = e.selectVisibleOptions);
                                        var k = 5 * c,
                                            m = c * j;
                                        j > 0 && 6 > j && (k = m), 0 === j && (m = "auto");
                                        var j = function() {
                                                w.height("auto").css({
                                                    bottom: "auto",
                                                    top: G
                                                });
                                                var a = function() {
                                                    x.css("max-height", Math.floor((i - 20 - E) / c) * c)
                                                };
                                                a(), x.css("max-height", m), "none" != F && x.css("max-height", F), i < w.outerHeight() + 20 && a()
                                            },
                                            n = function() {
                                                w.height("auto").css({
                                                    top: "auto",
                                                    bottom: G
                                                });
                                                var a = function() {
                                                    x.css("max-height", Math.floor((g - b.scrollTop() - 20 - E) / c) * c)
                                                };
                                                a(), x.css("max-height", m), "none" != F && x.css("max-height", F), g - b.scrollTop() - 20 < w.outerHeight() + 20 && a()
                                            };
                                        !0 === s || 1 === s ? i > k + E + 20 ? (j(), t.removeClass("dropup").addClass("dropdown")) : (n(), t.removeClass("dropdown").addClass("dropup")) : (!1 === s || 0 === s) && i > k + E + 20 && (j(), t.removeClass("dropup").addClass("dropdown")), t.offset().left + w.outerWidth() > b.width() && w.css({
                                            left: "auto",
                                            right: 0
                                        }), a("div.jqselect").css({
                                            zIndex: r - 1
                                        }).removeClass("opened"), t.css({
                                            zIndex: r
                                        }), w.is(":hidden") ? (a("div.jq-selectbox__dropdown:visible").hide(), w.show(), t.addClass("opened focused"), e.onSelectOpened.call(t)) : (w.hide(), t.removeClass("opened dropup dropdown"), a("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(t)), z.length && (z.val("").keyup(), A.hide(), z.keyup(function() {
                                            var b = a(this).val();
                                            y.each(function() {
                                                a(this).html().match(RegExp(".*?" + b + ".*?", "i")) ? a(this).show() : a(this).hide()
                                            }), "" === l.first().text() && "" !== d.data("placeholder") && y.first().hide(), 1 > y.filter(":visible").length ? A.show() : A.hide()
                                        })), y.filter(".selected").length && ("" === d.val() ? x.scrollTop(0) : (0 !== x.innerHeight() / c % 2 && (c /= 2), x.scrollTop(x.scrollTop() + y.filter(".selected").position().top - x.innerHeight() / 2 + c))), h(x)
                                    }
                                }), y.hover(function() {
                                    a(this).siblings().removeClass("selected")
                                }), y.filter(".selected").text(), y.filter(":not(.disabled):not(.optgroup)").click(function() {
                                    d.focus();
                                    var b = a(this),
                                        c = b.text();
                                    if (!b.is(".selected")) {
                                        var f = b.index(),
                                            f = f - b.prevAll(".optgroup").length;
                                        b.addClass("selected sel").siblings().removeClass("selected sel"), l.prop("selected", !1).eq(f).prop("selected", !0), v.text(c), t.data("jqfs-class") && t.removeClass(t.data("jqfs-class")), t.data("jqfs-class", b.data("jqfs-class")), t.addClass(b.data("jqfs-class")), d.change()
                                    }
                                    w.hide(), t.removeClass("opened dropup dropdown"), e.onSelectClosed.call(t)
                                }), w.mouseout(function() {
                                    a("li.sel", w).addClass("selected")
                                }), d.on("change.styler", function() {
                                    v.text(l.filter(":selected").text()).removeClass("placeholder"), y.removeClass("selected sel").not(".optgroup").eq(d[0].selectedIndex).addClass("selected sel"), l.first().text() != y.filter(".selected").text() ? t.addClass("changed") : t.removeClass("changed")
                                }).on("focus.styler", function() {
                                    t.addClass("focused"), a("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                                }).on("blur.styler", function() {
                                    t.removeClass("focused")
                                }).on("keydown.styler keyup.styler", function(a) {
                                    var b = y.data("li-height");
                                    "" === d.val() ? v.text(k).addClass("placeholder") : v.text(l.filter(":selected").text()), y.removeClass("selected sel").not(".optgroup").eq(d[0].selectedIndex).addClass("selected sel"), (38 == a.which || 37 == a.which || 33 == a.which || 36 == a.which) && ("" === d.val() ? x.scrollTop(0) : x.scrollTop(x.scrollTop() + y.filter(".selected").position().top)), 40 != a.which && 39 != a.which && 34 != a.which && 35 != a.which || x.scrollTop(x.scrollTop() + y.filter(".selected").position().top - x.innerHeight() + b), 13 == a.which && (a.preventDefault(), w.hide(), t.removeClass("opened dropup dropdown"), e.onSelectClosed.call(t))
                                }).on("keydown.styler", function(a) {
                                    32 == a.which && (a.preventDefault(), u.click())
                                }), void(c.registered || (a(document).on("click", c), c.registered = !0)))
                            }

                            function k() {
                                var c = new b,
                                    e = a("<div" + c.id + ' class="jq-select-multiple jqselect' + c.classes + '"' + c.title + ' style="display: inline-block; position: relative"></div>');
                                d.css({
                                    margin: 0,
                                    padding: 0
                                }).after(e), i(), e.append("<ul>" + m + "</ul>");
                                var f = a("ul", e).css({
                                        position: "relative",
                                        "overflow-x": "hidden",
                                        "-webkit-overflow-scrolling": "touch"
                                    }),
                                    g = a("li", e).attr("unselectable", "on"),
                                    c = d.attr("size"),
                                    j = f.outerHeight(),
                                    k = g.outerHeight();
                                void 0 !== c && c > 0 ? f.css({
                                    height: k * c
                                }) : f.css({
                                    height: 4 * k
                                }), j > e.height() && (f.css("overflowY", "scroll"), h(f), g.filter(".selected").length && f.scrollTop(f.scrollTop() + g.filter(".selected").position().top)), d.prependTo(e).css({
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    height: "100%",
                                    opacity: 0
                                }), d.is(":disabled") ? (e.addClass("disabled"), l.each(function() {
                                    a(this).is(":selected") && g.eq(a(this).index()).addClass("selected")
                                })) : (g.filter(":not(.disabled):not(.optgroup)").click(function(b) {
                                    d.focus();
                                    var c = a(this);
                                    if (b.ctrlKey || b.metaKey || c.addClass("selected"), b.shiftKey || c.addClass("first"), b.ctrlKey || b.metaKey || b.shiftKey || c.siblings().removeClass("selected first"), (b.ctrlKey || b.metaKey) && (c.is(".selected") ? c.removeClass("selected first") : c.addClass("selected first"), c.siblings().removeClass("first")), b.shiftKey) {
                                        var e = !1,
                                            f = !1;
                                        c.siblings().removeClass("selected").siblings(".first").addClass("selected"), c.prevAll().each(function() {
                                            a(this).is(".first") && (e = !0)
                                        }), c.nextAll().each(function() {
                                            a(this).is(".first") && (f = !0)
                                        }), e && c.prevAll().each(function() {
                                            return a(this).is(".selected") ? !1 : void a(this).not(".disabled, .optgroup").addClass("selected")
                                        }), f && c.nextAll().each(function() {
                                            return a(this).is(".selected") ? !1 : void a(this).not(".disabled, .optgroup").addClass("selected")
                                        }), 1 == g.filter(".selected").length && c.addClass("first")
                                    }
                                    l.prop("selected", !1), g.filter(".selected").each(function() {
                                        var b = a(this),
                                            c = b.index();
                                        b.is(".option") && (c -= b.prevAll(".optgroup").length), l.eq(c).prop("selected", !0)
                                    }), d.change()
                                }), l.each(function(b) {
                                    a(this).data("optionIndex", b)
                                }), d.on("change.styler", function() {
                                    g.removeClass("selected");
                                    var b = [];
                                    l.filter(":selected").each(function() {
                                        b.push(a(this).data("optionIndex"))
                                    }), g.not(".optgroup").filter(function(c) {
                                        return -1 < a.inArray(c, b)
                                    }).addClass("selected")
                                }).on("focus.styler", function() {
                                    e.addClass("focused")
                                }).on("blur.styler", function() {
                                    e.removeClass("focused")
                                }), j > e.height() && d.on("keydown.styler", function(a) {
                                    38 != a.which && 37 != a.which && 33 != a.which || f.scrollTop(f.scrollTop() + g.filter(".selected").position().top - k), 40 != a.which && 39 != a.which && 34 != a.which || f.scrollTop(f.scrollTop() + g.filter(".selected:last").position().top - f.innerHeight() + 2 * k)
                                }))
                            }
                            var l = a("option", d),
                                m = "";
                            d.is("[multiple]") ? g || f || k() : j()
                        };
                        l(), d.on("refresh", function() {
                            d.off(".styler").parent().before(d).remove(), l()
                        })
                    } else d.is(":reset") && d.on("click", function() {
                        setTimeout(function() {
                            d.closest(e.wrapper).find("input, select").trigger("refresh")
                        }, 1)
                    })
                },
                destroy: function() {
                    var b = a(this.element);
                    b.is(":checkbox") || b.is(":radio") ? (b.removeData("_" + d).off(".styler refresh").removeAttr("style").parent().before(b).remove(), b.closest("label").add('label[for="' + b.attr("id") + '"]').off(".styler")) : b.is('input[type="number"]') ? b.removeData("_" + d).off(".styler refresh").closest(".jq-number").before(b).remove() : (b.is(":file") || b.is("select")) && b.removeData("_" + d).off(".styler refresh").removeAttr("style").parent().before(b).remove()
                }
            }, a.fn[d] = function(c) {
                var e = arguments;
                if (void 0 === c || "object" == typeof c) return this.each(function() {
                    a.data(this, "_" + d) || a.data(this, "_" + d, new b(this, c))
                }).promise().done(function() {
                    var b = a(this[0]).data("_" + d);
                    b && b.options.onFormStyled.call()
                }), this;
                if ("string" == typeof c && "_" !== c[0] && "init" !== c) {
                    var f;
                    return this.each(function() {
                        var g = a.data(this, "_" + d);
                        g instanceof b && "function" == typeof g[c] && (f = g[c].apply(g, Array.prototype.slice.call(e, 1)))
                    }), void 0 !== f ? f : this
                }
            }, c.registered = !1
        }), ! function(a, b) {
            "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], b) : a.GMaps = b()
        }(this, function() {
            var a = function(a, b) {
                    var c;
                    if (a === b) return a;
                    for (c in b) a[c] = b[c];
                    return a
                },
                b = function(a, b) {
                    var c, d = Array.prototype.slice.call(arguments, 2),
                        e = [],
                        f = a.length;
                    if (Array.prototype.map && a.map === Array.prototype.map) e = Array.prototype.map.call(a, function(a) {
                        var c = d.slice(0);
                        return c.splice(0, 0, a), b.apply(this, c)
                    });
                    else
                        for (c = 0; f > c; c++) callback_params = d, callback_params.splice(0, 0, a[c]), e.push(b.apply(this, callback_params));
                    return e
                },
                c = function(a) {
                    var b, c = [];
                    for (b = 0; b < a.length; b++) c = c.concat(a[b]);
                    return c
                },
                d = function(a, b) {
                    var c = a[0],
                        d = a[1];
                    return b && (c = a[1], d = a[0]), new google.maps.LatLng(c, d)
                },
                f = function(a, b) {
                    var c;
                    for (c = 0; c < a.length; c++) a[c] instanceof google.maps.LatLng || (a[c].length > 0 && "object" == typeof a[c][0] ? a[c] = f(a[c], b) : a[c] = d(a[c], b));
                    return a
                },
                g = function(a, b) {
                    var c, d = a.replace(".", "");
                    return c = "jQuery" in this && b ? $("." + d, b)[0] : document.getElementsByClassName(d)[0]
                },
                h = function(a, b) {
                    var c, a = a.replace("#", "");
                    return c = "jQuery" in window && b ? $("#" + a, b)[0] : document.getElementById(a)
                },
                i = function(a) {
                    var b = 0,
                        c = 0;
                    if (a.offsetParent)
                        do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
                    return [b, c]
                },
                j = function(b) {
                    if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
                        function() {};
                    var c = document,
                        d = function(b) {
                            if (!this) return new d(b);
                            b.zoom = b.zoom || 15, b.mapType = b.mapType || "roadmap";
                            var e, f = function(a, b) {
                                    return void 0 === a ? b : a
                                },
                                j = this,
                                k = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
                                l = ["mousemove", "mouseout", "mouseover"],
                                m = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
                                n = b.el || b.div,
                                o = b.markerClusterer,
                                p = google.maps.MapTypeId[b.mapType.toUpperCase()],
                                q = new google.maps.LatLng(b.lat, b.lng),
                                r = f(b.zoomControl, !0),
                                s = b.zoomControlOpt || {
                                    style: "DEFAULT",
                                    position: "TOP_LEFT"
                                },
                                t = s.style || "DEFAULT",
                                u = s.position || "TOP_LEFT",
                                v = f(b.panControl, !0),
                                w = f(b.mapTypeControl, !0),
                                x = f(b.scaleControl, !0),
                                y = f(b.streetViewControl, !0),
                                z = f(z, !0),
                                A = {},
                                B = {
                                    zoom: this.zoom,
                                    center: q,
                                    mapTypeId: p
                                },
                                C = {
                                    panControl: v,
                                    zoomControl: r,
                                    zoomControlOptions: {
                                        style: google.maps.ZoomControlStyle[t],
                                        position: google.maps.ControlPosition[u]
                                    },
                                    mapTypeControl: w,
                                    scaleControl: x,
                                    streetViewControl: y,
                                    overviewMapControl: z
                                };
                            if ("string" == typeof b.el || "string" == typeof b.div ? n.indexOf("#") > -1 ? this.el = h(n, b.context) : this.el = g.apply(this, [n, b.context]) : this.el = n, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
                            for (window.context_menu = window.context_menu || {}, window.context_menu[j.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = b.zoom, this.registered_events = {}, this.el.style.width = b.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = b.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = b.enableNewStyle, e = 0; e < m.length; e++) delete b[m[e]];
                            for (1 != b.disableDefaultUI && (B = a(B, C)), A = a(B, b), e = 0; e < k.length; e++) delete A[k[e]];
                            for (e = 0; e < l.length; e++) delete A[l[e]];
                            this.map = new google.maps.Map(this.el, A), o && (this.markerClusterer = o.apply(this, [this.map]));
                            var D = function(a, b) {
                                var c = "",
                                    d = window.context_menu[j.el.id][a];
                                for (var e in d)
                                    if (d.hasOwnProperty(e)) {
                                        var f = d[e];
                                        c += '<li><a id="' + a + "_" + e + '" href="#">' + f.title + "</a></li>"
                                    }
                                if (h("gmaps_context_menu")) {
                                    var g = h("gmaps_context_menu");
                                    g.innerHTML = c;
                                    var e, k = g.getElementsByTagName("a"),
                                        l = k.length;
                                    for (e = 0; l > e; e++) {
                                        var m = k[e],
                                            n = function(c) {
                                                c.preventDefault(), d[this.id.replace(a + "_", "")].action.apply(j, [b]), j.hideContextMenu()
                                            };
                                        google.maps.event.clearListeners(m, "click"), google.maps.event.addDomListenerOnce(m, "click", n, !1)
                                    }
                                    var o = i.apply(this, [j.el]),
                                        p = o[0] + b.pixel.x - 15,
                                        q = o[1] + b.pixel.y - 15;
                                    g.style.left = p + "px", g.style.top = q + "px"
                                }
                            };
                            this.buildContextMenu = function(a, b) {
                                if ("marker" === a) {
                                    b.pixel = {};
                                    var c = new google.maps.OverlayView;
                                    c.setMap(j.map), c.draw = function() {
                                        var d = c.getProjection(),
                                            e = b.marker.getPosition();
                                        b.pixel = d.fromLatLngToContainerPixel(e), D(a, b)
                                    }
                                } else D(a, b);
                                var d = h("gmaps_context_menu");
                                setTimeout(function() {
                                    d.style.display = "block"
                                }, 0)
                            }, this.setContextMenu = function(a) {
                                window.context_menu[j.el.id][a.control] = {};
                                var b, d = c.createElement("ul");
                                for (b in a.options)
                                    if (a.options.hasOwnProperty(b)) {
                                        var e = a.options[b];
                                        window.context_menu[j.el.id][a.control][e.name] = {
                                            title: e.title,
                                            action: e.action
                                        }
                                    }
                                d.id = "gmaps_context_menu", d.style.display = "none", d.style.position = "absolute", d.style.minWidth = "100px", d.style.background = "white", d.style.listStyle = "none", d.style.padding = "8px", d.style.boxShadow = "2px 2px 6px #ccc", h("gmaps_context_menu") || c.body.appendChild(d);
                                var f = h("gmaps_context_menu");
                                google.maps.event.addDomListener(f, "mouseout", function(a) {
                                    a.relatedTarget && this.contains(a.relatedTarget) || window.setTimeout(function() {
                                        f.style.display = "none"
                                    }, 400)
                                }, !1)
                            }, this.hideContextMenu = function() {
                                var a = h("gmaps_context_menu");
                                a && (a.style.display = "none")
                            };
                            var E = function(a, c) {
                                google.maps.event.addListener(a, c, function(a) {
                                    void 0 == a && (a = this), b[c].apply(this, [a]), j.hideContextMenu()
                                })
                            };
                            google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
                            for (var F = 0; F < k.length; F++) {
                                var G = k[F];
                                G in b && E(this.map, G)
                            }
                            for (var F = 0; F < l.length; F++) {
                                var G = l[F];
                                G in b && E(this.map, G)
                            }
                            google.maps.event.addListener(this.map, "rightclick", function(a) {
                                b.rightclick && b.rightclick.apply(this, [a]), void 0 != window.context_menu[j.el.id].map && j.buildContextMenu("map", a)
                            }), this.refresh = function() {
                                google.maps.event.trigger(this.map, "resize")
                            }, this.fitZoom = function() {
                                var a, b = [],
                                    c = this.markers.length;
                                for (a = 0; c > a; a++) "boolean" == typeof this.markers[a].visible && this.markers[a].visible && b.push(this.markers[a].getPosition());
                                this.fitLatLngBounds(b)
                            }, this.fitLatLngBounds = function(a) {
                                var b, c = a.length,
                                    d = new google.maps.LatLngBounds;
                                for (b = 0; c > b; b++) d.extend(a[b]);
                                this.map.fitBounds(d)
                            }, this.setCenter = function(a, b, c) {
                                this.map.panTo(new google.maps.LatLng(a, b)), c && c()
                            }, this.getElement = function() {
                                return this.el
                            }, this.zoomIn = function(a) {
                                a = a || 1, this.zoom = this.map.getZoom() + a, this.map.setZoom(this.zoom)
                            }, this.zoomOut = function(a) {
                                a = a || 1, this.zoom = this.map.getZoom() - a, this.map.setZoom(this.zoom)
                            };
                            var H, I = [];
                            for (H in this.map) "function" != typeof this.map[H] || this[H] || I.push(H);
                            for (e = 0; e < I.length; e++) ! function(a, b, c) {
                                a[c] = function() {
                                    return b[c].apply(b, arguments)
                                }
                            }(this, this.map, I[e])
                        };
                    return d
                }(this);
            j.prototype.createControl = function(a) {
                var b = document.createElement("div");
                b.style.cursor = "pointer", a.disableDefaultStyles !== !0 && (b.style.fontFamily = "Roboto, Arial, sans-serif", b.style.fontSize = "11px", b.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
                for (var c in a.style) b.style[c] = a.style[c];
                a.id && (b.id = a.id), a.title && (b.title = a.title), a.classes && (b.className = a.classes), a.content && ("string" == typeof a.content ? b.innerHTML = a.content : a.content instanceof HTMLElement && b.appendChild(a.content)), a.position && (b.position = google.maps.ControlPosition[a.position.toUpperCase()]);
                for (var d in a.events) ! function(b, c) {
                    google.maps.event.addDomListener(b, c, function() {
                        a.events[c].apply(this, [this])
                    })
                }(b, d);
                return b.index = 1, b
            }, j.prototype.addControl = function(a) {
                var b = this.createControl(a);
                return this.controls.push(b), this.map.controls[b.position].push(b), b
            }, j.prototype.removeControl = function(a) {
                var b, c = null;
                for (b = 0; b < this.controls.length; b++) this.controls[b] == a && (c = this.controls[b].position, this.controls.splice(b, 1));
                if (c)
                    for (b = 0; b < this.map.controls.length; b++) {
                        var d = this.map.controls[a.position];
                        if (d.getAt(b) == a) {
                            d.removeAt(b);
                            break
                        }
                    }
                return a
            }, j.prototype.createMarker = function(b) {
                if (void 0 == b.lat && void 0 == b.lng && void 0 == b.position) throw "No latitude or longitude defined.";
                var c = this,
                    d = b.details,
                    e = b.fences,
                    f = b.outside,
                    g = {
                        position: new google.maps.LatLng(b.lat, b.lng),
                        map: null
                    },
                    h = a(g, b);
                delete h.lat, delete h.lng, delete h.fences, delete h.outside;
                var i = new google.maps.Marker(h);
                if (i.fences = e, b.infoWindow) {
                    i.infoWindow = new google.maps.InfoWindow(b.infoWindow);
                    for (var j = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], k = 0; k < j.length; k++) ! function(a, c) {
                        b.infoWindow[c] && google.maps.event.addListener(a, c, function(a) {
                            b.infoWindow[c].apply(this, [a])
                        })
                    }(i.infoWindow, j[k])
                }
                for (var l = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], m = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], k = 0; k < l.length; k++) ! function(a, c) {
                    b[c] && google.maps.event.addListener(a, c, function() {
                        b[c].apply(this, [this])
                    })
                }(i, l[k]);
                for (var k = 0; k < m.length; k++) ! function(a, c, d) {
                    b[d] && google.maps.event.addListener(c, d, function(c) {
                        c.pixel || (c.pixel = a.getProjection().fromLatLngToPoint(c.latLng)), b[d].apply(this, [c])
                    })
                }(this.map, i, m[k]);
                return google.maps.event.addListener(i, "click", function() {
                    this.details = d, b.click && b.click.apply(this, [this]), i.infoWindow && (c.hideInfoWindows(), i.infoWindow.open(c.map, i))
                }), google.maps.event.addListener(i, "rightclick", function(a) {
                    a.marker = this, b.rightclick && b.rightclick.apply(this, [a]), void 0 != window.context_menu[c.el.id].marker && c.buildContextMenu("marker", a)
                }), i.fences && google.maps.event.addListener(i, "dragend", function() {
                    c.checkMarkerGeofence(i, function(a, b) {
                        f(a, b)
                    })
                }), i
            }, j.prototype.addMarker = function(a) {
                var b;
                if (a.hasOwnProperty("gm_accessors_")) b = a;
                else {
                    if (!(a.hasOwnProperty("lat") && a.hasOwnProperty("lng") || a.position)) throw "No latitude or longitude defined.";
                    b = this.createMarker(a)
                }
                return b.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(b), this.markers.push(b), j.fire("marker_added", b, this), b
            }, j.prototype.addMarkers = function(a) {
                for (var b, c = 0; b = a[c]; c++) this.addMarker(b);
                return this.markers
            }, j.prototype.hideInfoWindows = function() {
                for (var a, b = 0; a = this.markers[b]; b++) a.infoWindow && a.infoWindow.close()
            }, j.prototype.removeMarker = function(a) {
                for (var b = 0; b < this.markers.length; b++)
                    if (this.markers[b] === a) {
                        this.markers[b].setMap(null), this.markers.splice(b, 1), this.markerClusterer && this.markerClusterer.removeMarker(a), j.fire("marker_removed", a, this);
                        break
                    }
                return a
            }, j.prototype.removeMarkers = function(a) {
                var b = [];
                if ("undefined" == typeof a) {
                    for (var c = 0; c < this.markers.length; c++) {
                        var d = this.markers[c];
                        d.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(d), j.fire("marker_removed", d, this)
                    }
                    this.markers = b
                } else {
                    for (var c = 0; c < a.length; c++) {
                        var e = this.markers.indexOf(a[c]);
                        if (e > -1) {
                            var d = this.markers[e];
                            d.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(d), j.fire("marker_removed", d, this)
                        }
                    }
                    for (var c = 0; c < this.markers.length; c++) {
                        var d = this.markers[c];
                        null != d.getMap() && b.push(d)
                    }
                    this.markers = b
                }
            }, j.prototype.drawOverlay = function(a) {
                var b = new google.maps.OverlayView,
                    c = !0;
                return b.setMap(this.map), null != a.auto_show && (c = a.auto_show), b.onAdd = function() {
                    var c = document.createElement("div");
                    c.style.borderStyle = "none", c.style.borderWidth = "0px", c.style.position = "absolute", c.style.zIndex = 100, c.innerHTML = a.content, b.el = c, a.layer || (a.layer = "overlayLayer");
                    var d = this.getPanes(),
                        e = d[a.layer],
                        f = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
                    e.appendChild(c);
                    for (var g = 0; g < f.length; g++) ! function(a, b) {
                        google.maps.event.addDomListener(a, b, function(a) {
                            -1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (a.cancelBubble = !0, a.returnValue = !1) : a.stopPropagation()
                        })
                    }(c, f[g]);
                    a.click && (d.overlayMouseTarget.appendChild(b.el), google.maps.event.addDomListener(b.el, "click", function() {
                        a.click.apply(b, [b])
                    })), google.maps.event.trigger(this, "ready")
                }, b.draw = function() {
                    var d = this.getProjection(),
                        e = d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat, a.lng));
                    a.horizontalOffset = a.horizontalOffset || 0, a.verticalOffset = a.verticalOffset || 0;
                    var f = b.el,
                        g = f.children[0],
                        h = g.clientHeight,
                        i = g.clientWidth;
                    switch (a.verticalAlign) {
                        case "top":
                            f.style.top = e.y - h + a.verticalOffset + "px";
                            break;
                        default:
                        case "middle":
                            f.style.top = e.y - h / 2 + a.verticalOffset + "px";
                            break;
                        case "bottom":
                            f.style.top = e.y + a.verticalOffset + "px"
                    }
                    switch (a.horizontalAlign) {
                        case "left":
                            f.style.left = e.x - i + a.horizontalOffset + "px";
                            break;
                        default:
                        case "center":
                            f.style.left = e.x - i / 2 + a.horizontalOffset + "px";
                            break;
                        case "right":
                            f.style.left = e.x + a.horizontalOffset + "px"
                    }
                    f.style.display = c ? "block" : "none", c || a.show.apply(this, [f])
                }, b.onRemove = function() {
                    var c = b.el;
                    a.remove ? a.remove.apply(this, [c]) : (b.el.parentNode.removeChild(b.el), b.el = null)
                }, this.overlays.push(b), b
            }, j.prototype.removeOverlay = function(a) {
                for (var b = 0; b < this.overlays.length; b++)
                    if (this.overlays[b] === a) {
                        this.overlays[b].setMap(null), this.overlays.splice(b, 1);
                        break
                    }
            }, j.prototype.removeOverlays = function() {
                for (var a, b = 0; a = this.overlays[b]; b++) a.setMap(null);
                this.overlays = []
            }, j.prototype.drawPolyline = function(a) {
                var b = [],
                    c = a.path;
                if (c.length)
                    if (void 0 === c[0][0]) b = c;
                    else
                        for (var d, e = 0; d = c[e]; e++) b.push(new google.maps.LatLng(d[0], d[1]));
                var f = {
                    map: this.map,
                    path: b,
                    strokeColor: a.strokeColor,
                    strokeOpacity: a.strokeOpacity,
                    strokeWeight: a.strokeWeight,
                    geodesic: a.geodesic,
                    clickable: !0,
                    editable: !1,
                    visible: !0
                };
                a.hasOwnProperty("clickable") && (f.clickable = a.clickable), a.hasOwnProperty("editable") && (f.editable = a.editable), a.hasOwnProperty("icons") && (f.icons = a.icons), a.hasOwnProperty("zIndex") && (f.zIndex = a.zIndex);
                for (var g = new google.maps.Polyline(f), h = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < h.length; i++) ! function(b, c) {
                    a[c] && google.maps.event.addListener(b, c, function(b) {
                        a[c].apply(this, [b])
                    })
                }(g, h[i]);
                return this.polylines.push(g), j.fire("polyline_added", g, this), g
            }, j.prototype.removePolyline = function(a) {
                for (var b = 0; b < this.polylines.length; b++)
                    if (this.polylines[b] === a) {
                        this.polylines[b].setMap(null), this.polylines.splice(b, 1), j.fire("polyline_removed", a, this);
                        break
                    }
            }, j.prototype.removePolylines = function() {
                for (var a, b = 0; a = this.polylines[b]; b++) a.setMap(null);
                this.polylines = []
            }, j.prototype.drawCircle = function(b) {
                b = a({
                    map: this.map,
                    center: new google.maps.LatLng(b.lat, b.lng)
                }, b), delete b.lat, delete b.lng;
                for (var c = new google.maps.Circle(b), d = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], e = 0; e < d.length; e++) ! function(a, c) {
                    b[c] && google.maps.event.addListener(a, c, function(a) {
                        b[c].apply(this, [a])
                    })
                }(c, d[e]);
                return this.polygons.push(c), c
            }, j.prototype.drawRectangle = function(b) {
                b = a({
                    map: this.map
                }, b);
                var c = new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0], b.bounds[0][1]), new google.maps.LatLng(b.bounds[1][0], b.bounds[1][1]));
                b.bounds = c;
                for (var d = new google.maps.Rectangle(b), e = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], f = 0; f < e.length; f++) ! function(a, c) {
                    b[c] && google.maps.event.addListener(a, c, function(a) {
                        b[c].apply(this, [a])
                    })
                }(d, e[f]);
                return this.polygons.push(d), d
            }, j.prototype.drawPolygon = function(d) {
                var e = !1;
                d.hasOwnProperty("useGeoJSON") && (e = d.useGeoJSON), delete d.useGeoJSON, d = a({
                    map: this.map
                }, d), 0 == e && (d.paths = [d.paths.slice(0)]), d.paths.length > 0 && d.paths[0].length > 0 && (d.paths = c(b(d.paths, f, e)));
                for (var g = new google.maps.Polygon(d), h = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < h.length; i++) ! function(a, b) {
                    d[b] && google.maps.event.addListener(a, b, function(a) {
                        d[b].apply(this, [a])
                    })
                }(g, h[i]);
                return this.polygons.push(g), j.fire("polygon_added", g, this), g
            }, j.prototype.removePolygon = function(a) {
                for (var b = 0; b < this.polygons.length; b++)
                    if (this.polygons[b] === a) {
                        this.polygons[b].setMap(null), this.polygons.splice(b, 1), j.fire("polygon_removed", a, this);
                        break
                    }
            }, j.prototype.removePolygons = function() {
                for (var a, b = 0; a = this.polygons[b]; b++) a.setMap(null);
                this.polygons = []
            }, j.prototype.getFromFusionTables = function(a) {
                var b = a.events;
                delete a.events;
                var c = a,
                    d = new google.maps.FusionTablesLayer(c);
                for (var e in b) ! function(a, c) {
                    google.maps.event.addListener(a, c, function(a) {
                        b[c].apply(this, [a])
                    })
                }(d, e);
                return this.layers.push(d), d
            }, j.prototype.loadFromFusionTables = function(a) {
                var b = this.getFromFusionTables(a);
                return b.setMap(this.map), b
            }, j.prototype.getFromKML = function(a) {
                var b = a.url,
                    c = a.events;
                delete a.url, delete a.events;
                var d = a,
                    e = new google.maps.KmlLayer(b, d);
                for (var f in c) ! function(a, b) {
                    google.maps.event.addListener(a, b, function(a) {
                        c[b].apply(this, [a])
                    })
                }(e, f);
                return this.layers.push(e), e
            }, j.prototype.loadFromKML = function(a) {
                var b = this.getFromKML(a);
                return b.setMap(this.map), b
            }, j.prototype.addLayer = function(a, b) {
                b = b || {};
                var c;
                switch (a) {
                    case "weather":
                        this.singleLayers.weather = c = new google.maps.weather.WeatherLayer;
                        break;
                    case "clouds":
                        this.singleLayers.clouds = c = new google.maps.weather.CloudLayer;
                        break;
                    case "traffic":
                        this.singleLayers.traffic = c = new google.maps.TrafficLayer;
                        break;
                    case "transit":
                        this.singleLayers.transit = c = new google.maps.TransitLayer;
                        break;
                    case "bicycling":
                        this.singleLayers.bicycling = c = new google.maps.BicyclingLayer;
                        break;
                    case "panoramio":
                        this.singleLayers.panoramio = c = new google.maps.panoramio.PanoramioLayer, c.setTag(b.filter), delete b.filter, b.click && google.maps.event.addListener(c, "click", function(a) {
                            b.click(a), delete b.click
                        });
                        break;
                    case "places":
                        if (this.singleLayers.places = c = new google.maps.places.PlacesService(this.map), b.search || b.nearbySearch || b.radarSearch) {
                            var d = {
                                bounds: b.bounds || null,
                                keyword: b.keyword || null,
                                location: b.location || null,
                                name: b.name || null,
                                radius: b.radius || null,
                                rankBy: b.rankBy || null,
                                types: b.types || null
                            };
                            b.radarSearch && c.radarSearch(d, b.radarSearch), b.search && c.search(d, b.search), b.nearbySearch && c.nearbySearch(d, b.nearbySearch)
                        }
                        if (b.textSearch) {
                            var e = {
                                bounds: b.bounds || null,
                                location: b.location || null,
                                query: b.query || null,
                                radius: b.radius || null
                            };
                            c.textSearch(e, b.textSearch)
                        }
                }
                return void 0 !== c ? ("function" == typeof c.setOptions && c.setOptions(b), "function" == typeof c.setMap && c.setMap(this.map), c) : void 0
            }, j.prototype.removeLayer = function(a) {
                if ("string" == typeof a && void 0 !== this.singleLayers[a]) this.singleLayers[a].setMap(null), delete this.singleLayers[a];
                else
                    for (var b = 0; b < this.layers.length; b++)
                        if (this.layers[b] === a) {
                            this.layers[b].setMap(null), this.layers.splice(b, 1);
                            break
                        }
            };
            var k, l;
            return j.prototype.getRoutes = function(b) {
                switch (b.travelMode) {
                    case "bicycling":
                        k = google.maps.TravelMode.BICYCLING;
                        break;
                    case "transit":
                        k = google.maps.TravelMode.TRANSIT;
                        break;
                    case "driving":
                        k = google.maps.TravelMode.DRIVING;
                        break;
                    default:
                        k = google.maps.TravelMode.WALKING
                }
                l = "imperial" === b.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
                var c = {
                        avoidHighways: !1,
                        avoidTolls: !1,
                        optimizeWaypoints: !1,
                        waypoints: []
                    },
                    d = a(c, b);
                d.origin = /string/.test(typeof b.origin) ? b.origin : new google.maps.LatLng(b.origin[0], b.origin[1]), d.destination = /string/.test(typeof b.destination) ? b.destination : new google.maps.LatLng(b.destination[0], b.destination[1]), d.travelMode = k, d.unitSystem = l, delete d.callback, delete d.error;
                var e = this,
                    f = new google.maps.DirectionsService;
                f.route(d, function(a, c) {
                    if (c === google.maps.DirectionsStatus.OK) {
                        for (var d in a.routes) a.routes.hasOwnProperty(d) && e.routes.push(a.routes[d]);
                        b.callback && b.callback(e.routes)
                    } else b.error && b.error(a, c)
                })
            }, j.prototype.removeRoutes = function() {
                this.routes = []
            }, j.prototype.getElevations = function(d) {
                d = a({
                    locations: [],
                    path: !1,
                    samples: 256
                }, d), d.locations.length > 0 && d.locations[0].length > 0 && (d.locations = c(b([d.locations], f, !1)));
                var e = d.callback;
                delete d.callback;
                var g = new google.maps.ElevationService;
                if (d.path) {
                    var h = {
                        path: d.locations,
                        samples: d.samples
                    };
                    g.getElevationAlongPath(h, function(a, b) {
                        e && "function" == typeof e && e(a, b)
                    })
                } else delete d.path, delete d.samples, g.getElevationForLocations(d, function(a, b) {
                    e && "function" == typeof e && e(a, b)
                })
            }, j.prototype.cleanRoute = j.prototype.removePolylines, j.prototype.drawRoute = function(a) {
                var b = this;
                this.getRoutes({
                    origin: a.origin,
                    destination: a.destination,
                    travelMode: a.travelMode,
                    waypoints: a.waypoints,
                    unitSystem: a.unitSystem,
                    error: a.error,
                    callback: function(c) {
                        if (c.length > 0) {
                            var d = {
                                path: c[c.length - 1].overview_path,
                                strokeColor: a.strokeColor,
                                strokeOpacity: a.strokeOpacity,
                                strokeWeight: a.strokeWeight
                            };
                            a.hasOwnProperty("icons") && (d.icons = a.icons), b.drawPolyline(d), a.callback && a.callback(c[c.length - 1])
                        }
                    }
                })
            }, j.prototype.travelRoute = function(a) {
                if (a.origin && a.destination) this.getRoutes({
                    origin: a.origin,
                    destination: a.destination,
                    travelMode: a.travelMode,
                    waypoints: a.waypoints,
                    unitSystem: a.unitSystem,
                    error: a.error,
                    callback: function(b) {
                        if (b.length > 0 && a.start && a.start(b[b.length - 1]), b.length > 0 && a.step) {
                            var c = b[b.length - 1];
                            if (c.legs.length > 0)
                                for (var d, e = c.legs[0].steps, f = 0; d = e[f]; f++) d.step_number = f, a.step(d, c.legs[0].steps.length - 1)
                        }
                        b.length > 0 && a.end && a.end(b[b.length - 1])
                    }
                });
                else if (a.route && a.route.legs.length > 0)
                    for (var b, c = a.route.legs[0].steps, d = 0; b = c[d]; d++) b.step_number = d, a.step(b)
            }, j.prototype.drawSteppedRoute = function(a) {
                var b = this;
                if (a.origin && a.destination) this.getRoutes({
                    origin: a.origin,
                    destination: a.destination,
                    travelMode: a.travelMode,
                    waypoints: a.waypoints,
                    error: a.error,
                    callback: function(c) {
                        if (c.length > 0 && a.start && a.start(c[c.length - 1]), c.length > 0 && a.step) {
                            var d = c[c.length - 1];
                            if (d.legs.length > 0)
                                for (var e, f = d.legs[0].steps, g = 0; e = f[g]; g++) {
                                    e.step_number = g;
                                    var h = {
                                        path: e.path,
                                        strokeColor: a.strokeColor,
                                        strokeOpacity: a.strokeOpacity,
                                        strokeWeight: a.strokeWeight
                                    };
                                    a.hasOwnProperty("icons") && (h.icons = a.icons), b.drawPolyline(h), a.step(e, d.legs[0].steps.length - 1)
                                }
                        }
                        c.length > 0 && a.end && a.end(c[c.length - 1])
                    }
                });
                else if (a.route && a.route.legs.length > 0)
                    for (var c, d = a.route.legs[0].steps, e = 0; c = d[e]; e++) {
                        c.step_number = e;
                        var f = {
                            path: c.path,
                            strokeColor: a.strokeColor,
                            strokeOpacity: a.strokeOpacity,
                            strokeWeight: a.strokeWeight
                        };
                        a.hasOwnProperty("icons") && (f.icons = a.icons), b.drawPolyline(f), a.step(c)
                    }
            }, j.Route = function(a) {
                this.origin = a.origin, this.destination = a.destination, this.waypoints = a.waypoints, this.map = a.map, this.route = a.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
                var b = {
                    path: new google.maps.MVCArray,
                    strokeColor: a.strokeColor,
                    strokeOpacity: a.strokeOpacity,
                    strokeWeight: a.strokeWeight
                };
                a.hasOwnProperty("icons") && (b.icons = a.icons), this.polyline = this.map.drawPolyline(b).getPath()
            }, j.Route.prototype.getRoute = function(a) {
                var b = this;
                this.map.getRoutes({
                    origin: this.origin,
                    destination: this.destination,
                    travelMode: a.travelMode,
                    waypoints: this.waypoints || [],
                    error: a.error,
                    callback: function() {
                        b.route = e[0], a.callback && a.callback.call(b)
                    }
                })
            }, j.Route.prototype.back = function() {
                if (this.step_count > 0) {
                    this.step_count--;
                    var a = this.route.legs[0].steps[this.step_count].path;
                    for (var b in a) a.hasOwnProperty(b) && this.polyline.pop()
                }
            }, j.Route.prototype.forward = function() {
                if (this.step_count < this.steps_length) {
                    var a = this.route.legs[0].steps[this.step_count].path;
                    for (var b in a) a.hasOwnProperty(b) && this.polyline.push(a[b]);
                    this.step_count++
                }
            }, j.prototype.checkGeofence = function(a, b, c) {
                return c.containsLatLng(new google.maps.LatLng(a, b))
            }, j.prototype.checkMarkerGeofence = function(a, b) {
                if (a.fences)
                    for (var c, d = 0; c = a.fences[d]; d++) {
                        var e = a.getPosition();
                        this.checkGeofence(e.lat(), e.lng(), c) || b(a, c)
                    }
            }, j.prototype.toImage = function(a) {
                var a = a || {},
                    b = {};
                if (b.size = a.size || [this.el.clientWidth, this.el.clientHeight], b.lat = this.getCenter().lat(), b.lng = this.getCenter().lng(), this.markers.length > 0) {
                    b.markers = [];
                    for (var c = 0; c < this.markers.length; c++) b.markers.push({
                        lat: this.markers[c].getPosition().lat(),
                        lng: this.markers[c].getPosition().lng()
                    })
                }
                if (this.polylines.length > 0) {
                    var d = this.polylines[0];
                    b.polyline = {}, b.polyline.path = google.maps.geometry.encoding.encodePath(d.getPath()), b.polyline.strokeColor = d.strokeColor, b.polyline.strokeOpacity = d.strokeOpacity, b.polyline.strokeWeight = d.strokeWeight
                }
                return j.staticMapURL(b)
            }, j.staticMapURL = function(a) {
                function b(a, b) {
                    if ("#" === a[0] && (a = a.replace("#", "0x"), b)) {
                        if (b = parseFloat(b), b = Math.min(1, Math.max(b, 0)), 0 === b) return "0x00000000";
                        b = (255 * b).toString(16), 1 === b.length && (b += b), a = a.slice(0, 8) + b
                    }
                    return a
                }
                var c, d = [],
                    e = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
                a.url && (e = a.url, delete a.url), e += "?";
                var f = a.markers;
                delete a.markers, !f && a.marker && (f = [a.marker], delete a.marker);
                var g = a.styles;
                delete a.styles;
                var h = a.polyline;
                if (delete a.polyline, a.center) d.push("center=" + a.center), delete a.center;
                else if (a.address) d.push("center=" + a.address), delete a.address;
                else if (a.lat) d.push(["center=", a.lat, ",", a.lng].join("")), delete a.lat, delete a.lng;
                else if (a.visible) {
                    var i = encodeURI(a.visible.join("|"));
                    d.push("visible=" + i)
                }
                var j = a.size;
                j ? (j.join && (j = j.join("x")), delete a.size) : j = "630x300", d.push("size=" + j), a.zoom || a.zoom === !1 || (a.zoom = 15);
                var k = a.hasOwnProperty("sensor") ? !!a.sensor : !0;
                delete a.sensor, d.push("sensor=" + k);
                for (var l in a) a.hasOwnProperty(l) && d.push(l + "=" + a[l]);
                if (f)
                    for (var m, n, o = 0; c = f[o]; o++) {
                        m = [], c.size && "normal" !== c.size ? (m.push("size:" + c.size), delete c.size) : c.icon && (m.push("icon:" + encodeURI(c.icon)), delete c.icon), c.color && (m.push("color:" + c.color.replace("#", "0x")), delete c.color), c.label && (m.push("label:" + c.label[0].toUpperCase()), delete c.label), n = c.address ? c.address : c.lat + "," + c.lng, delete c.address, delete c.lat, delete c.lng;
                        for (var l in c) c.hasOwnProperty(l) && m.push(l + ":" + c[l]);
                        m.length || 0 === o ? (m.push(n), m = m.join("|"), d.push("markers=" + encodeURI(m))) : (m = d.pop() + encodeURI("|" + n), d.push(m))
                    }
                if (g)
                    for (var o = 0; o < g.length; o++) {
                        var p = [];
                        g[o].featureType && p.push("feature:" + g[o].featureType.toLowerCase()), g[o].elementType && p.push("element:" + g[o].elementType.toLowerCase());
                        for (var q = 0; q < g[o].stylers.length; q++)
                            for (var r in g[o].stylers[q]) {
                                var s = g[o].stylers[q][r];
                                ("hue" == r || "color" == r) && (s = "0x" + s.substring(1)), p.push(r + ":" + s)
                            }
                        var t = p.join("|");
                        "" != t && d.push("style=" + t)
                    }
                if (h) {
                    if (c = h, h = [], c.strokeWeight && h.push("weight:" + parseInt(c.strokeWeight, 10)), c.strokeColor) {
                        var u = b(c.strokeColor, c.strokeOpacity);
                        h.push("color:" + u)
                    }
                    if (c.fillColor) {
                        var v = b(c.fillColor, c.fillOpacity);
                        h.push("fillcolor:" + v)
                    }
                    var w = c.path;
                    if (w.join)
                        for (var x, q = 0; x = w[q]; q++) h.push(x.join(","));
                    else h.push("enc:" + w);
                    h = h.join("|"), d.push("path=" + encodeURI(h))
                }
                var y = window.devicePixelRatio || 1;
                return d.push("scale=" + y), d = d.join("&"), e + d
            }, j.prototype.addMapType = function(a, b) {
                if (!b.hasOwnProperty("getTileUrl") || "function" != typeof b.getTileUrl) throw "'getTileUrl' function required.";
                b.tileSize = b.tileSize || new google.maps.Size(256, 256);
                var c = new google.maps.ImageMapType(b);
                this.map.mapTypes.set(a, c)
            }, j.prototype.addOverlayMapType = function(a) {
                if (!a.hasOwnProperty("getTile") || "function" != typeof a.getTile) throw "'getTile' function required.";
                var b = a.index;
                delete a.index, this.map.overlayMapTypes.insertAt(b, a)
            }, j.prototype.removeOverlayMapType = function(a) {
                this.map.overlayMapTypes.removeAt(a)
            }, j.prototype.addStyle = function(a) {
                var b = new google.maps.StyledMapType(a.styles, {
                    name: a.styledMapName
                });
                this.map.mapTypes.set(a.mapTypeId, b)
            }, j.prototype.setStyle = function(a) {
                this.map.setMapTypeId(a)
            }, j.prototype.createPanorama = function(a) {
                return a.hasOwnProperty("lat") && a.hasOwnProperty("lng") || (a.lat = this.getCenter().lat(), a.lng = this.getCenter().lng()), this.panorama = j.createPanorama(a), this.map.setStreetView(this.panorama), this.panorama
            }, j.createPanorama = function(b) {
                var c = h(b.el, b.context);
                b.position = new google.maps.LatLng(b.lat, b.lng), delete b.el, delete b.context, delete b.lat, delete b.lng;
                for (var d = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], e = a({
                        visible: !0
                    }, b), f = 0; f < d.length; f++) delete e[d[f]];
                for (var g = new google.maps.StreetViewPanorama(c, e), f = 0; f < d.length; f++) ! function(a, c) {
                    b[c] && google.maps.event.addListener(a, c, function() {
                        b[c].apply(this)
                    })
                }(g, d[f]);
                return g
            }, j.prototype.on = function(a, b) {
                return j.on(a, this, b)
            }, j.prototype.off = function(a) {
                j.off(a, this)
            }, j.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], j.on = function(a, b, c) {
                if (-1 == j.custom_events.indexOf(a)) return b instanceof j && (b = b.map), google.maps.event.addListener(b, a, c);
                var d = {
                    handler: c,
                    eventName: a
                };
                return b.registered_events[a] = b.registered_events[a] || [], b.registered_events[a].push(d), d
            }, j.off = function(a, b) {
                -1 == j.custom_events.indexOf(a) ? (b instanceof j && (b = b.map), google.maps.event.clearListeners(b, a)) : b.registered_events[a] = []
            }, j.fire = function(a, b, c) {
                if (-1 == j.custom_events.indexOf(a)) google.maps.event.trigger(b, a, Array.prototype.slice.apply(arguments).slice(2));
                else if (a in c.registered_events)
                    for (var d = c.registered_events[a], e = 0; e < d.length; e++) ! function(a, b, c) {
                        a.apply(b, [c])
                    }(d[e].handler, c, b)
            }, j.geolocate = function(a) {
                var b = a.always || a.complete;
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(c) {
                    a.success(c), b && b()
                }, function(c) {
                    a.error(c), b && b()
                }, a.options) : (a.not_supported(), b && b())
            }, j.geocode = function(a) {
                this.geocoder = new google.maps.Geocoder;
                var b = a.callback;
                a.hasOwnProperty("lat") && a.hasOwnProperty("lng") && (a.latLng = new google.maps.LatLng(a.lat, a.lng)), delete a.lat, delete a.lng, delete a.callback, this.geocoder.geocode(a, function(a, c) {
                    b(a, c)
                })
            }, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(a) {
                for (var b, c = new google.maps.LatLngBounds, d = this.getPaths(), e = 0; e < d.getLength(); e++) {
                    b = d.getAt(e);
                    for (var f = 0; f < b.getLength(); f++) c.extend(b.getAt(f))
                }
                return c
            }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(a) {
                var b = this.getBounds();
                if (null !== b && !b.contains(a)) return !1;
                for (var c = !1, d = this.getPaths().getLength(), e = 0; d > e; e++)
                    for (var f = this.getPaths().getAt(e), g = f.getLength(), h = g - 1, i = 0; g > i; i++) {
                        var j = f.getAt(i),
                            k = f.getAt(h);
                        (j.lng() < a.lng() && k.lng() >= a.lng() || k.lng() < a.lng() && j.lng() >= a.lng()) && j.lat() + (a.lng() - j.lng()) / (k.lng() - j.lng()) * (k.lat() - j.lat()) < a.lat() && (c = !c), h = i
                    }
                return c
            }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(a) {
                return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), a) <= this.getRadius() : !0
            }), google.maps.LatLngBounds.prototype.containsLatLng = function(a) {
                return this.contains(a)
            }, google.maps.Marker.prototype.setFences = function(a) {
                this.fences = a
            }, google.maps.Marker.prototype.addFence = function(a) {
                this.fences.push(a)
            }, google.maps.Marker.prototype.getId = function() {
                return this.__gm_id
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                if (null == this) throw new TypeError;
                var b = Object(this),
                    c = b.length >>> 0;
                if (0 === c) return -1;
                var d = 0;
                if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
                for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                    if (e in b && b[e] === a) return e;
                return -1
            }), j
        }),
        function(a) {
            function b(a) {
                var b = document.createElement("input"),
                    c = "on" + a,
                    d = c in b;
                return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, d
            }

            function c(a) {
                var b = "text" == a || "tel" == a || "password" == a;
                if (!b) {
                    var c = document.createElement("input");
                    c.setAttribute("type", a), b = "text" === c.type, c = null
                }
                return b
            }

            function d(b, c, e) {
                var f = e.aliases[b];
                return f ? (f.alias && d(f.alias, void 0, e), a.extend(!0, e, f), a.extend(!0, e, c), !0) : !1
            }

            function e(b, c) {
                function d(c) {
                    function d(a, b, c, d) {
                        this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = {
                            min: 1,
                            max: 1
                        }
                    }

                    function e(c, d, e) {
                        var f = b.definitions[d],
                            g = 0 == c.matches.length;
                        if (e = void 0 != e ? e : c.matches.length, f && !m) {
                            f.placeholder = a.isFunction(f.placeholder) ? f.placeholder.call(this, b) : f.placeholder;
                            for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) {
                                var k = i >= j ? h[j - 1] : [],
                                    l = k.validator,
                                    n = k.cardinality;
                                c.matches.splice(e++, 0, {
                                    fn: l ? "string" == typeof l ? new RegExp(l) : new function() {
                                        this.test = l
                                    } : new RegExp("."),
                                    cardinality: n ? n : 1,
                                    optionality: c.isOptional,
                                    newBlockMarker: g,
                                    casing: f.casing,
                                    def: f.definitionSymbol || d,
                                    placeholder: f.placeholder,
                                    mask: d
                                })
                            }
                            c.matches.splice(e++, 0, {
                                fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function() {
                                    this.test = f.validator
                                } : new RegExp("."),
                                cardinality: f.cardinality,
                                optionality: c.isOptional,
                                newBlockMarker: g,
                                casing: f.casing,
                                def: f.definitionSymbol || d,
                                placeholder: f.placeholder,
                                mask: d
                            })
                        } else c.matches.splice(e++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: c.isOptional,
                            newBlockMarker: g,
                            casing: null,
                            def: d,
                            placeholder: void 0,
                            mask: d
                        }), m = !1
                    }
                    for (var f, g, h, i, j, k, l = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g, m = !1, n = new d, o = [], p = []; f = l.exec(c);) switch (g = f[0], g.charAt(0)) {
                        case b.optionalmarker.end:
                        case b.groupmarker.end:
                            if (h = o.pop(), o.length > 0) {
                                if (i = o[o.length - 1], i.matches.push(h), i.isAlternator) {
                                    j = o.pop();
                                    for (var q = 0; q < j.matches.length; q++) j.matches[q].isGroup = !1;
                                    o.length > 0 ? (i = o[o.length - 1], i.matches.push(j)) : n.matches.push(j)
                                }
                            } else n.matches.push(h);
                            break;
                        case b.optionalmarker.start:
                            o.push(new d(!1, !0));
                            break;
                        case b.groupmarker.start:
                            o.push(new d(!0));
                            break;
                        case b.quantifiermarker.start:
                            var r = new d(!1, !1, !0);
                            g = g.replace(/[{}]/g, "");
                            var s = g.split(","),
                                t = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                                u = 1 == s.length ? t : isNaN(s[1]) ? s[1] : parseInt(s[1]);
                            if (("*" == u || "+" == u) && (t = "*" == u ? 0 : 1), r.quantifier = {
                                    min: t,
                                    max: u
                                }, o.length > 0) {
                                var v = o[o.length - 1].matches;
                                if (f = v.pop(), !f.isGroup) {
                                    var w = new d(!0);
                                    w.matches.push(f), f = w
                                }
                                v.push(f), v.push(r)
                            } else {
                                if (f = n.matches.pop(), !f.isGroup) {
                                    var w = new d(!0);
                                    w.matches.push(f), f = w
                                }
                                n.matches.push(f), n.matches.push(r)
                            }
                            break;
                        case b.escapeChar:
                            m = !0;
                            break;
                        case b.alternatormarker:
                            o.length > 0 ? (i = o[o.length - 1], k = i.matches.pop()) : k = n.matches.pop(), k.isAlternator ? o.push(k) : (j = new d(!1, !1, !1, !0), j.matches.push(k), o.push(j));
                            break;
                        default:
                            if (o.length > 0) {
                                if (i = o[o.length - 1], i.matches.length > 0 && !i.isAlternator && (k = i.matches[i.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end))), e(i, g), i.isAlternator) {
                                    j = o.pop();
                                    for (var q = 0; q < j.matches.length; q++) j.matches[q].isGroup = !1;
                                    o.length > 0 ? (i = o[o.length - 1], i.matches.push(j)) : n.matches.push(j)
                                }
                            } else n.matches.length > 0 && (k = n.matches[n.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end))), e(n, g)
                    }
                    return n.matches.length > 0 && (k = n.matches[n.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end)), p.push(n)), p
                }

                function e(e, f) {
                    if (void 0 == e || "" == e) return void 0;
                    if (1 == e.length && 0 == b.greedy && 0 != b.repeat && (b.placeholder = ""), b.repeat > 0 || "*" == b.repeat || "+" == b.repeat) {
                        var g = "*" == b.repeat ? 0 : "+" == b.repeat ? 1 : b.repeat;
                        e = b.groupmarker.start + e + b.groupmarker.end + b.quantifiermarker.start + g + "," + b.repeat + b.quantifiermarker.end
                    }
                    var h;
                    return void 0 == a.inputmask.masksCache[e] || c === !0 ? (h = {
                        mask: e,
                        maskToken: d(e),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        metadata: f
                    }, c !== !0 && (a.inputmask.masksCache[e] = h)) : h = a.extend(!0, {}, a.inputmask.masksCache[e]), h
                }

                function f(a) {
                    if (a = a.toString(), b.numericInput) {
                        a = a.split("").reverse();
                        for (var c = 0; c < a.length; c++) a[c] == b.optionalmarker.start ? a[c] = b.optionalmarker.end : a[c] == b.optionalmarker.end ? a[c] = b.optionalmarker.start : a[c] == b.groupmarker.start ? a[c] = b.groupmarker.end : a[c] == b.groupmarker.end && (a[c] = b.groupmarker.start);
                        a = a.join("")
                    }
                    return a
                }
                var g = void 0;
                if (a.isFunction(b.mask) && (b.mask = b.mask.call(this, b)), a.isArray(b.mask)) {
                    if (b.mask.length > 1) {
                        b.keepStatic = void 0 == b.keepStatic ? !0 : b.keepStatic;
                        var h = "(";
                        return a.each(b.mask, function(b, c) {
                            h.length > 1 && (h += ")|("), h += f(void 0 == c.mask || a.isFunction(c.mask) ? c : c.mask)
                        }), h += ")", e(h, b.mask)
                    }
                    b.mask = b.mask.pop()
                }
                return b.mask && (g = void 0 == b.mask.mask || a.isFunction(b.mask.mask) ? e(f(b.mask), b.mask) : e(f(b.mask.mask), b.mask)), g
            }

            function f(d, e, f) {
                function g(a, b, c) {
                    b = b || 0;
                    var d, e, f, g = [],
                        h = 0;
                    do {
                        if (a === !0 && l().validPositions[h]) {
                            var i = l().validPositions[h];
                            e = i.match, d = i.locator.slice(), g.push(c === !0 ? i.input : G(h, e))
                        } else f = q(h, d, h - 1), e = f.match, d = f.locator.slice(), g.push(G(h, e));
                        h++
                    } while ((void 0 == da || da > h - 1) && null != e.fn || null == e.fn && "" != e.def || b >= h);
                    return g.pop(), g
                }

                function l() {
                    return e
                }

                function m(a) {
                    var b = l();
                    b.buffer = void 0, b.tests = {}, a !== !0 && (b._buffer = void 0, b.validPositions = {}, b.p = 0)
                }

                function n(a, b) {
                    var c = l(),
                        d = -1,
                        e = c.validPositions;
                    void 0 == a && (a = -1);
                    var f = d,
                        g = d;
                    for (var h in e) {
                        var i = parseInt(h);
                        e[i] && (b || null != e[i].match.fn) && (a >= i && (f = i), i >= a && (g = i))
                    }
                    return d = -1 != f && a - f > 1 || a > g ? f : g
                }

                function o(b, c, d) {
                    if (f.insertMode && void 0 != l().validPositions[b] && void 0 == d) {
                        var e, g = a.extend(!0, {}, l().validPositions),
                            h = n();
                        for (e = b; h >= e; e++) delete l().validPositions[e];
                        l().validPositions[b] = c;
                        var i, j = !0,
                            k = l().validPositions;
                        for (e = i = b; h >= e; e++) {
                            var m = g[e];
                            if (void 0 != m)
                                for (var o = i; o < B() && (null == m.match.fn && k[e] && (k[e].match.optionalQuantifier === !0 || k[e].match.optionality === !0) || null != m.match.fn);) {
                                    if (null == m.match.fn || !f.keepStatic && k[e] && (void 0 != k[e + 1] && t(e + 1, k[e].locator.slice(), e).length > 1 || void 0 != k[e].alternation) ? o++ : o = C(i), s(o, m.match.def)) {
                                        j = z(o, m.input, !0, !0) !== !1, i = o;
                                        break
                                    }
                                    j = null == m.match.fn
                                }
                            if (!j) break
                        }
                        if (!j) return l().validPositions = a.extend(!0, {}, g), !1
                    } else l().validPositions[b] = c;
                    return !0
                }

                function p(a, b, c, d) {
                    var e, g = a;
                    l().p = a, void 0 != l().validPositions[a] && l().validPositions[a].input == f.radixPoint && (b++, g++);
                    for (e = g; b > e; e++) void 0 != l().validPositions[e] && (c === !0 || 0 != f.canClearPosition(l(), e, n(), d, f)) && delete l().validPositions[e];
                    for (m(!0), e = g + 1; e <= n();) {
                        for (; void 0 != l().validPositions[g];) g++;
                        var h = l().validPositions[g];
                        g > e && (e = g + 1);
                        var i = l().validPositions[e];
                        void 0 != i && void 0 == h ? (s(g, i.match.def) && z(g, i.input, !0) !== !1 && (delete l().validPositions[e], e++), g++) : e++
                    }
                    var j = n(),
                        k = B();
                    for (j >= a && void 0 != l().validPositions[j] && l().validPositions[j].input == f.radixPoint && delete l().validPositions[j], e = j + 1; k >= e; e++) l().validPositions[e] && delete l().validPositions[e];
                    m(!0)
                }

                function q(a, b, c) {
                    var d = l().validPositions[a];
                    if (void 0 == d)
                        for (var e = t(a, b, c), g = n(), h = l().validPositions[g] || t(0)[0], i = void 0 != h.alternation ? h.locator[h.alternation].toString().split(",") : [], j = 0; j < e.length && (d = e[j], !(d.match && (f.greedy && d.match.optionalQuantifier !== !0 || (d.match.optionality === !1 || d.match.newBlockMarker === !1) && d.match.optionalQuantifier !== !0) && (void 0 == h.alternation || h.alternation != d.alternation || void 0 != d.locator[h.alternation] && y(d.locator[h.alternation].toString().split(","), i)))); j++);
                    return d
                }

                function r(a) {
                    return l().validPositions[a] ? l().validPositions[a].match : t(a)[0].match
                }

                function s(a, b) {
                    for (var c = !1, d = t(a), e = 0; e < d.length; e++)
                        if (d[e].match && d[e].match.def == b) {
                            c = !0;
                            break
                        }
                    return c
                }

                function t(b, c, d, e) {
                    function f(c, d, e, g) {
                        function i(e, g, n) {
                            if (h > 1e4) return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l().mask), !0;
                            if (h == b && void 0 == e.matches) return j.push({
                                match: e,
                                locator: g.reverse()
                            }), !0;
                            if (void 0 != e.matches) {
                                if (e.isGroup && n !== !0) {
                                    if (e = i(c.matches[m + 1], g)) return !0
                                } else if (e.isOptional) {
                                    var o = e;
                                    if (e = f(e, d, g, n)) {
                                        var p = j[j.length - 1].match,
                                            q = 0 == a.inArray(p, o.matches);
                                        if (!q) return !0;
                                        k = !0, h = b
                                    }
                                } else if (e.isAlternator) {
                                    var r, s = e,
                                        t = [],
                                        u = j.slice(),
                                        v = g.length,
                                        w = d.length > 0 ? d.shift() : -1;
                                    if (-1 == w || "string" == typeof w) {
                                        var x = h,
                                            y = d.slice(),
                                            z = [];
                                        "string" == typeof w && (z = w.split(","));
                                        for (var A = 0; A < s.matches.length; A++) {
                                            if (j = [], e = i(s.matches[A], [A].concat(g), n) || e, e !== !0 && void 0 != e && z[z.length - 1] < s.matches.length) {
                                                var B = c.matches.indexOf(e) + 1;
                                                c.matches.length > B && (e = i(c.matches[B], [B].concat(g.slice(1, g.length)), n), e && (z.push(B.toString()), a.each(j, function(a, b) {
                                                    b.alternation = g.length - 1
                                                })))
                                            }
                                            r = j.slice(), h = x, j = [];
                                            for (var C = 0; C < y.length; C++) d[C] = y[C];
                                            for (var D = 0; D < r.length; D++) {
                                                var E = r[D];
                                                E.alternation = E.alternation || v;
                                                for (var F = 0; F < t.length; F++) {
                                                    var G = t[F];
                                                    if (E.match.mask == G.match.mask && ("string" != typeof w || -1 != a.inArray(E.locator[E.alternation].toString(), z))) {
                                                        r.splice(D, 1), D--, G.locator[E.alternation] = G.locator[E.alternation] + "," + E.locator[E.alternation], G.alternation = E.alternation;
                                                        break
                                                    }
                                                }
                                            }
                                            t = t.concat(r)
                                        }
                                        "string" == typeof w && (t = a.map(t, function(b, c) {
                                            if (isFinite(c)) {
                                                var d, e = b.alternation,
                                                    f = b.locator[e].toString().split(",");
                                                b.locator[e] = void 0, b.alternation = void 0;
                                                for (var g = 0; g < f.length; g++) d = -1 != a.inArray(f[g], z), d && (void 0 != b.locator[e] ? (b.locator[e] += ",", b.locator[e] += f[g]) : b.locator[e] = parseInt(f[g]), b.alternation = e);
                                                if (void 0 != b.locator[e]) return b
                                            }
                                        })), j = u.concat(t), h = b, k = j.length > 0
                                    } else e = s.matches[w] ? i(s.matches[w], [w].concat(g), n) : !1;
                                    if (e) return !0
                                } else if (e.isQuantifier && n !== !0)
                                    for (var H = e, I = d.length > 0 && n !== !0 ? d.shift() : 0; I < (isNaN(H.quantifier.max) ? I + 1 : H.quantifier.max) && b >= h; I++) {
                                        var J = c.matches[a.inArray(H, c.matches) - 1];
                                        if (e = i(J, [I].concat(g), !0)) {
                                            var p = j[j.length - 1].match;
                                            p.optionalQuantifier = I > H.quantifier.min - 1;
                                            var q = 0 == a.inArray(p, J.matches);
                                            if (q) {
                                                if (I > H.quantifier.min - 1) {
                                                    k = !0, h = b;
                                                    break
                                                }
                                                return !0
                                            }
                                            return !0
                                        }
                                    } else if (e = f(e, d, g, n)) return !0
                            } else h++
                        }
                        for (var m = d.length > 0 ? d.shift() : 0; m < c.matches.length; m++)
                            if (c.matches[m].isQuantifier !== !0) {
                                var n = i(c.matches[m], [m].concat(e), g);
                                if (n && h == b) return n;
                                if (h > b) break
                            }
                    }
                    var g = l().maskToken,
                        h = c ? d : 0,
                        i = c || [0],
                        j = [],
                        k = !1;
                    if (e === !0 && l().tests[b]) return l().tests[b];
                    if (void 0 == c) {
                        for (var m, n = b - 1; void 0 == (m = l().validPositions[n]) && n > -1 && (!l().tests[n] || void 0 == (m = l().tests[n][0]));) n--;
                        void 0 != m && n > -1 && (h = n, i = m.locator.slice())
                    }
                    for (var o = i.shift(); o < g.length; o++) {
                        var p = f(g[o], i, [o]);
                        if (p && h == b || h > b) break
                    }
                    return (0 == j.length || k) && j.push({
                        match: {
                            fn: null,
                            cardinality: 0,
                            optionality: !0,
                            casing: null,
                            def: ""
                        },
                        locator: []
                    }), l().tests[b] = a.extend(!0, [], j), l().tests[b]
                }

                function u() {
                    return void 0 == l()._buffer && (l()._buffer = g(!1, 1)), l()._buffer
                }

                function v() {
                    return void 0 == l().buffer && (l().buffer = g(!0, n(), !0)), l().buffer
                }

                function w(a, b, c) {
                    if (c = c || v().slice(), a === !0) m(), a = 0, b = c.length;
                    else
                        for (var d = a; b > d; d++) delete l().validPositions[d], delete l().tests[d];
                    for (var d = a; b > d; d++) c[d] != f.skipOptionalPartCharacter && z(d, c[d], !0, !0)
                }

                function x(a, b) {
                    switch (b.casing) {
                        case "upper":
                            a = a.toUpperCase();
                            break;
                        case "lower":
                            a = a.toLowerCase()
                    }
                    return a
                }

                function y(b, c) {
                    for (var d = f.greedy ? c : c.slice(0, 1), e = !1, g = 0; g < b.length; g++)
                        if (-1 != a.inArray(b[g], d)) {
                            e = !0;
                            break
                        }
                    return e
                }

                function z(b, c, d, e) {
                    function g(b, c, d, e) {
                        var g = !1;
                        return a.each(t(b), function(h, i) {
                            for (var j = i.match, k = c ? 1 : 0, q = "", r = (v(), j.cardinality); r > k; r--) q += E(b - (r - 1));
                            if (c && (q += c), g = null != j.fn ? j.fn.test(q, l(), b, d, f) : c != j.def && c != f.skipOptionalPartCharacter || "" == j.def ? !1 : {
                                    c: j.def,
                                    pos: b
                                }, g !== !1) {
                                var s = void 0 != g.c ? g.c : c;
                                s = s == f.skipOptionalPartCharacter && null === j.fn ? j.def : s;
                                var t = b,
                                    u = v();
                                if (void 0 != g.remove && (a.isArray(g.remove) || (g.remove = [g.remove]), a.each(g.remove.sort(function(a, b) {
                                        return b - a
                                    }), function(a, b) {
                                        p(b, b + 1, !0)
                                    })), void 0 != g.insert && (a.isArray(g.insert) || (g.insert = [g.insert]), a.each(g.insert.sort(function(a, b) {
                                        return a - b
                                    }), function(a, b) {
                                        z(b.pos, b.c, !0)
                                    })), g.refreshFromBuffer) {
                                    var y = g.refreshFromBuffer;
                                    if (d = !0, w(y === !0 ? y : y.start, y.end, u), void 0 == g.pos && void 0 == g.c) return g.pos = n(), !1;
                                    if (t = void 0 != g.pos ? g.pos : b, t != b) return g = a.extend(g, z(t, s, !0)), !1
                                } else if (g !== !0 && void 0 != g.pos && g.pos != b && (t = g.pos, w(b, t), t != b)) return g = a.extend(g, z(t, s, !0)), !1;
                                return 1 != g && void 0 == g.pos && void 0 == g.c ? !1 : (h > 0 && m(!0), o(t, a.extend({}, i, {
                                    input: x(s, j)
                                }), e) || (g = !1), !1)
                            }
                        }), g
                    }

                    function h(b, c, d, e) {
                        var g, h, i, j, k = a.extend(!0, {}, l().validPositions);
                        for (g = n(); g >= 0; g--)
                            if (j = l().validPositions[g], j && void 0 != j.alternation && j.locator[j.alternation].length > 1) {
                                h = l().validPositions[g].alternation;
                                break
                            }
                        if (void 0 != h)
                            for (var o in l().validPositions)
                                if (j = l().validPositions[o], parseInt(o) > parseInt(g) && void 0 != j.alternation) {
                                    for (var p = l().validPositions[g].locator[h].toString().split(","), q = j.locator[h] || p[0], r = 0; r < p.length; r++)
                                        if (q < p[r]) {
                                            for (var s, t, u = o - 1; u >= 0; u--)
                                                if (s = l().validPositions[u], void 0 != s) {
                                                    t = s.locator[h], s.locator[h] = parseInt(p[r]);
                                                    break
                                                }
                                            if (q != s.locator[h]) {
                                                for (var v = [], w = o; w < n() + 1; w++) {
                                                    var x = l().validPositions[w];
                                                    x && null != x.match.fn && v.push(x.input), delete l().validPositions[w], delete l().tests[w]
                                                }
                                                for (m(!0), f.keepStatic = !f.keepStatic, i = !0; v.length > 0;) {
                                                    var y = v.shift();
                                                    if (y != f.skipOptionalPartCharacter && !(i = z(n() + 1, y, !1, !0))) break
                                                }
                                                if (s.alternation = h, s.locator[h] = t, i) {
                                                    var A = n(b) + 1;
                                                    i = z(b > A ? A : b, c, d, e)
                                                }
                                                if (f.keepStatic = !f.keepStatic, i) return i;
                                                m(), l().validPositions = a.extend(!0, {}, k)
                                            }
                                        }
                                    break
                                }
                        return !1
                    }

                    function i(b, c) {
                        for (var d = l().validPositions[c], e = d.locator, f = e.length, g = b; c > g; g++)
                            if (!A(g)) {
                                var h = t(g),
                                    i = h[0],
                                    j = -1;
                                a.each(h, function(a, b) {
                                    for (var c = 0; f > c; c++) b.locator[c] && y(b.locator[c].toString().split(","), e[c].toString().split(",")) && c > j && (j = c, i = b)
                                }), o(g, a.extend({}, i, {
                                    input: i.match.def
                                }), !0)
                            }
                    }
                    d = d === !0;
                    for (var j = v(), k = b - 1; k > -1 && !l().validPositions[k]; k--);
                    for (k++; b > k; k++) void 0 == l().validPositions[k] && ((!A(k) || j[k] != G(k)) && t(k).length > 1 || j[k] == f.radixPoint || "0" == j[k] && a.inArray(f.radixPoint, j) < k) && g(k, j[k], !0);
                    var q = b,
                        r = !1,
                        s = a.extend(!0, {}, l().validPositions);
                    if (q < B() && (r = g(q, c, d, e), (!d || e) && r === !1)) {
                        var u = l().validPositions[q];
                        if (!u || null != u.match.fn || u.match.def != c && c != f.skipOptionalPartCharacter) {
                            if ((f.insertMode || void 0 == l().validPositions[C(q)]) && !A(q))
                                for (var D = q + 1, F = C(q); F >= D; D++)
                                    if (r = g(D, c, d, e), r !== !1) {
                                        i(q, D), q = D;
                                        break
                                    }
                        } else r = {
                            caret: C(q)
                        }
                    }
                    if (r === !1 && f.keepStatic && O(j) && (r = h(b, c, d, e)), r === !0 && (r = {
                            pos: q
                        }), a.isFunction(f.postValidation) && 0 != r && !d) {
                        m(!0);
                        var H = f.postValidation(v(), f);
                        if (!H) return m(!0), l().validPositions = a.extend(!0, {}, s), !1
                    }
                    return r
                }

                function A(a) {
                    var b = r(a);
                    if (null != b.fn) return b.fn;
                    if (!f.keepStatic && void 0 == l().validPositions[a]) {
                        for (var c = t(a), d = !0, e = 0; e < c.length; e++)
                            if ("" != c[e].match.def && (void 0 == c[e].alternation || c[e].locator[c[e].alternation].length > 1)) {
                                d = !1;
                                break
                            }
                        return d
                    }
                    return !1
                }

                function B() {
                    var a;
                    da = ca.prop("maxLength"), -1 == da && (da = void 0);
                    var b, c = n(),
                        d = l().validPositions[c],
                        e = void 0 != d ? d.locator.slice() : void 0;
                    for (b = c + 1; void 0 == d || null != d.match.fn || null == d.match.fn && "" != d.match.def; b++) d = q(b, e, b - 1), e = d.locator.slice();
                    var f = r(b - 1);
                    return a = "" != f.def ? b : b - 1, void 0 == da || da > a ? a : da
                }

                function C(a) {
                    var b = B();
                    if (a >= b) return b;
                    for (var c = a; ++c < b && !A(c) && (f.nojumps !== !0 || f.nojumpsThreshold > c););
                    return c
                }

                function D(a) {
                    var b = a;
                    if (0 >= b) return 0;
                    for (; --b > 0 && !A(b););
                    return b
                }

                function E(a) {
                    return void 0 == l().validPositions[a] ? G(a) : l().validPositions[a].input
                }

                function F(b, c, d, e, g) {
                    if (e && a.isFunction(f.onBeforeWrite)) {
                        var h = f.onBeforeWrite.call(b, e, c, d, f);
                        if (h) {
                            if (h.refreshFromBuffer) {
                                var i = h.refreshFromBuffer;
                                w(i === !0 ? i : i.start, i.end, h.buffer), m(!0), c = v()
                            }
                            d = h.caret || d
                        }
                    }
                    b._valueSet(c.join("")), void 0 != d && L(b, d), g === !0 && (ga = !0, a(b).trigger("input"))
                }

                function G(a, b) {
                    if (b = b || r(a), void 0 != b.placeholder) return b.placeholder;
                    if (null == b.fn) {
                        if (!f.keepStatic && void 0 == l().validPositions[a]) {
                            for (var c = t(a), d = !0, e = 0; e < c.length; e++)
                                if ("" != c[e].match.def && (null !== c[e].match.fn || void 0 == c[e].alternation || c[e].locator[c[e].alternation].length > 1)) {
                                    d = !1;
                                    break
                                }
                            if (d) return f.placeholder.charAt(a % f.placeholder.length)
                        }
                        return b.def
                    }
                    return f.placeholder.charAt(a % f.placeholder.length)
                }

                function H(b, c, d, e) {
                    function f() {
                        var a = !1,
                            b = u().slice(i, C(i)).join("").indexOf(h);
                        if (-1 != b && !A(i)) {
                            a = !0;
                            for (var c = u().slice(i, i + b), d = 0; d < c.length; d++)
                                if (" " != c[d]) {
                                    a = !1;
                                    break
                                }
                        }
                        return a
                    }
                    var g = void 0 != e ? e.slice() : b._valueGet().split(""),
                        h = "",
                        i = 0;
                    if (m(), l().p = C(-1), c && b._valueSet(""), !d) {
                        var j = u().slice(0, C(-1)).join(""),
                            k = g.join("").match(new RegExp(I(j), "g"));
                        k && k.length > 0 && (g.splice(0, k.length * j.length), i = C(i))
                    }
                    a.each(g, function(c, e) {
                        var g = a.Event("keypress");
                        g.which = e.charCodeAt(0), h += e;
                        var j = n(void 0, !0),
                            k = l().validPositions[j],
                            m = q(j + 1, k ? k.locator.slice() : void 0, j);
                        if (!f() || d) {
                            var o = d ? c : null == m.match.fn && m.match.optionality && j + 1 < l().p ? j + 1 : l().p;
                            U.call(b, g, !0, !1, d, o), i = o + 1, h = ""
                        } else U.call(b, g, !0, !1, !0, j + 1)
                    }), c && F(b, v(), a(b).is(":focus") ? C(n(0)) : void 0, a.Event("checkval"))
                }

                function I(b) {
                    return a.inputmask.escapeRegex(b)
                }

                function J(b) {
                    if (b.data("_inputmask") && !b.hasClass("hasDatepicker")) {
                        var c = [],
                            d = l().validPositions;
                        for (var e in d) d[e].match && null != d[e].match.fn && c.push(d[e].input);
                        var g = (ea ? c.reverse() : c).join(""),
                            h = (ea ? v().slice().reverse() : v()).join("");
                        return a.isFunction(f.onUnMask) && (g = f.onUnMask.call(b, h, g, f) || g), g
                    }
                    return b[0]._valueGet()
                }

                function K(a) {
                    if (ea && "number" == typeof a && (!f.greedy || "" != f.placeholder)) {
                        var b = v().length;
                        a = b - a
                    }
                    return a
                }

                function L(b, c, d) {
                    var e, g = b.jquery && b.length > 0 ? b[0] : b;
                    if ("number" != typeof c) return g.setSelectionRange ? (c = g.selectionStart, d = g.selectionEnd) : window.getSelection ? (e = window.getSelection().getRangeAt(0), e.commonAncestorContainer.parentNode == g && (c = e.startOffset, d = e.endOffset)) : document.selection && document.selection.createRange && (e = document.selection.createRange(), c = 0 - e.duplicate().moveStart("character", -1e5), d = c + e.text.length), {
                        begin: K(c),
                        end: K(d)
                    };
                    if (c = K(c), d = K(d), d = "number" == typeof d ? d : c, a(g).is(":visible")) {
                        var h = a(g).css("font-size").replace("px", "") * d;
                        if (g.scrollLeft = h > g.scrollWidth ? h : 0, i || 0 != f.insertMode || c != d || d++, g.setSelectionRange) g.selectionStart = c, g.selectionEnd = d;
                        else if (window.getSelection) {
                            e = document.createRange(), e.setStart(g.firstChild, c < g._valueGet().length ? c : g._valueGet().length), e.setEnd(g.firstChild, d < g._valueGet().length ? d : g._valueGet().length), e.collapse(!0);
                            var j = window.getSelection();
                            j.removeAllRanges(), j.addRange(e)
                        } else g.createTextRange && (e = g.createTextRange(), e.collapse(!0), e.moveEnd("character", d), e.moveStart("character", c), e.select())
                    }
                }

                function M(b) {
                    var c, d, e = v(),
                        f = e.length,
                        g = n(),
                        h = {},
                        i = l().validPositions[g],
                        j = void 0 != i ? i.locator.slice() : void 0;
                    for (c = g + 1; c < e.length; c++) d = q(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d);
                    var k = i && void 0 != i.alternation ? i.locator[i.alternation] : void 0;
                    for (c = f - 1; c > g && (d = h[c].match, (d.optionality || d.optionalQuantifier || k && k != h[c].locator[i.alternation]) && e[c] == G(c, d)); c--) f--;
                    return b ? {
                        l: f,
                        def: h[f] ? h[f].match : void 0
                    } : f
                }

                function N(a) {
                    for (var b = M(), c = a.length - 1; c > b && !A(c); c--);
                    return a.splice(b, c + 1 - b), a
                }

                function O(b) {
                    if (a.isFunction(f.isComplete)) return f.isComplete.call(ca, b, f);
                    if ("*" == f.repeat) return void 0;
                    var c = !1,
                        d = M(!0),
                        e = D(d.l);
                    n();
                    if (void 0 == d.def || d.def.newBlockMarker || d.def.optionality || d.def.optionalQuantifier) {
                        c = !0;
                        for (var g = 0; e >= g; g++) {
                            var h = q(g).match;
                            if (null != h.fn && void 0 == l().validPositions[g] && h.optionality !== !0 && h.optionalQuantifier !== !0 || null == h.fn && b[g] != G(g, h)) {
                                c = !1;
                                break
                            }
                        }
                    }
                    return c
                }

                function P(a, b) {
                    return ea ? a - b > 1 || a - b == 1 && f.insertMode : b - a > 1 || b - a == 1 && f.insertMode
                }

                function Q(b) {
                    var c = a._data(b).events,
                        d = !1;
                    a.each(c, function(b, c) {
                        a.each(c, function(a, b) {
                            if ("inputmask" == b.namespace && "setvalue" != b.type) {
                                var c = b.handler;
                                b.handler = function(a) {
                                    if (!this.disabled && (!this.readOnly || "keydown" == a.type && a.ctrlKey && 67 == a.keyCode)) {
                                        switch (a.type) {
                                            case "input":
                                                if (ga === !0 || d === !0) return ga = !1, a.preventDefault();
                                                break;
                                            case "keydown":
                                                fa = !1, d = !1;
                                                break;
                                            case "keypress":
                                                if (fa === !0) return a.preventDefault();
                                                fa = !0;
                                                break;
                                            case "compositionstart":
                                                d = !0;
                                                break;
                                            case "compositionupdate":
                                                ga = !0;
                                                break;
                                            case "compositionend":
                                                d = !1
                                        }
                                        return c.apply(this, arguments)
                                    }
                                    a.preventDefault()
                                }
                            }
                        })
                    })
                }

                function R(b) {
                    function c(b) {
                        if (void 0 == a.valHooks[b] || 1 != a.valHooks[b].inputmaskpatch) {
                            var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function(a) {
                                    return a.value
                                },
                                d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function(a, b) {
                                    return a.value = b, a
                                };
                            a.valHooks[b] = {
                                get: function(b) {
                                    var d = a(b);
                                    if (d.data("_inputmask")) {
                                        if (d.data("_inputmask").opts.autoUnmask) return d.inputmask("unmaskedvalue");
                                        var e = c(b),
                                            f = d.data("_inputmask"),
                                            g = f.maskset,
                                            h = g._buffer;
                                        return h = h ? h.join("") : "", e != h ? e : ""
                                    }
                                    return c(b)
                                },
                                set: function(b, c) {
                                    var e, f = a(b),
                                        g = f.data("_inputmask");
                                    return e = d(b, c), g && f.triggerHandler("setvalue.inputmask"), e
                                },
                                inputmaskpatch: !0
                            }
                        }
                    }

                    function d() {
                        var b = a(this),
                            c = a(this).data("_inputmask");
                        return c ? c.opts.autoUnmask ? b.inputmask("unmaskedvalue") : g.call(this) != u().join("") ? g.call(this) : "" : g.call(this)
                    }

                    function e(b) {
                        var c = a(this).data("_inputmask");
                        h.call(this, b), c && a(this).triggerHandler("setvalue.inputmask")
                    }

                    function f(b) {
                        a(b).bind("mouseenter.inputmask", function(b) {
                            var c = a(this),
                                d = this,
                                e = d._valueGet();
                            "" != e && e != v().join("") && c.triggerHandler("setvalue.inputmask")
                        });
                        var c = a._data(b).events,
                            d = c.mouseover;
                        if (d) {
                            for (var e = d[d.length - 1], f = d.length - 1; f > 0; f--) d[f] = d[f - 1];
                            d[0] = e
                        }
                    }
                    var g, h;
                    if (!b._valueGet) {
                        var i;
                        Object.getOwnPropertyDescriptor && void 0 == b.value ? (g = function() {
                            return this.textContent
                        }, h = function(a) {
                            this.textContent = a
                        }, Object.defineProperty(b, "value", {
                            get: d,
                            set: e
                        })) : ((i = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(b, "value")) && i.configurable, document.__lookupGetter__ && b.__lookupGetter__("value") ? (g = b.__lookupGetter__("value"), h = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e)) : (g = function() {
                            return b.value
                        }, h = function(a) {
                            b.value = a
                        }, c(b.type), f(b))), b._valueGet = function(a) {
                            return ea && a !== !0 ? g.call(this).split("").reverse().join("") : g.call(this)
                        }, b._valueSet = function(a) {
                            h.call(this, ea ? a.split("").reverse().join("") : a)
                        }
                    }
                }

                function S(b, c, d, e) {
                    function g() {
                        if (f.keepStatic) {
                            m(!0);
                            var c, d = [],
                                e = a.extend(!0, {}, l().validPositions);
                            for (c = n(); c >= 0; c--) {
                                var g = l().validPositions[c];
                                if (g) {
                                    if (void 0 != g.alternation && g.locator[g.alternation] == q(c).locator[g.alternation]) break;
                                    null != g.match.fn && d.push(g.input), delete l().validPositions[c]
                                }
                            }
                            if (c > 0)
                                for (; d.length > 0;) {
                                    l().p = C(n());
                                    var h = a.Event("keypress");
                                    h.which = d.pop().charCodeAt(0), U.call(b, h, !0, !1, !1, l().p)
                                } else l().validPositions = a.extend(!0, {}, e)
                        }
                    }
                    if ((f.numericInput || ea) && (c == a.inputmask.keyCode.BACKSPACE ? c = a.inputmask.keyCode.DELETE : c == a.inputmask.keyCode.DELETE && (c = a.inputmask.keyCode.BACKSPACE), ea)) {
                        var h = d.end;
                        d.end = d.begin, d.begin = h
                    }
                    if (c == a.inputmask.keyCode.BACKSPACE && (d.end - d.begin < 1 || 0 == f.insertMode) ? d.begin = D(d.begin) : c == a.inputmask.keyCode.DELETE && d.begin == d.end && (d.end = A(d.end) ? d.end + 1 : C(d.end) + 1), p(d.begin, d.end, !1, e), e !== !0) {
                        g();
                        var i = n(d.begin);
                        i < d.begin ? (-1 == i && m(), l().p = C(i)) : l().p = d.begin
                    }
                }

                function T(c) {
                    var d = this,
                        e = a(d),
                        g = c.keyCode,
                        i = L(d);
                    g == a.inputmask.keyCode.BACKSPACE || g == a.inputmask.keyCode.DELETE || h && 127 == g || c.ctrlKey && 88 == g && !b("cut") ? (c.preventDefault(), 88 == g && (_ = v().join("")), S(d, g, i), F(d, v(), l().p, c, _ != v().join("")), d._valueGet() == u().join("") ? e.trigger("cleared") : O(v()) === !0 && e.trigger("complete"), f.showTooltip && e.prop("title", l().mask)) : g == a.inputmask.keyCode.END || g == a.inputmask.keyCode.PAGE_DOWN ? setTimeout(function() {
                        var a = C(n());
                        f.insertMode || a != B() || c.shiftKey || a--, L(d, c.shiftKey ? i.begin : a, a)
                    }, 0) : g == a.inputmask.keyCode.HOME && !c.shiftKey || g == a.inputmask.keyCode.PAGE_UP ? L(d, 0, c.shiftKey ? i.begin : 0) : (f.undoOnEscape && g == a.inputmask.keyCode.ESCAPE || 90 == g && c.ctrlKey) && c.altKey !== !0 ? (H(d, !0, !1, _.split("")), e.click()) : g != a.inputmask.keyCode.INSERT || c.shiftKey || c.ctrlKey ? 0 != f.insertMode || c.shiftKey || (g == a.inputmask.keyCode.RIGHT ? setTimeout(function() {
                        var a = L(d);
                        L(d, a.begin)
                    }, 0) : g == a.inputmask.keyCode.LEFT && setTimeout(function() {
                        var a = L(d);
                        L(d, ea ? a.begin + 1 : a.begin - 1)
                    }, 0)) : (f.insertMode = !f.insertMode, L(d, f.insertMode || i.begin != B() ? i.begin : i.begin - 1)), f.onKeyDown.call(this, c, v(), L(d).begin, f), ha = -1 != a.inArray(g, f.ignorables)
                }

                function U(b, c, d, e, g) {
                    var h = this,
                        i = a(h),
                        j = b.which || b.charCode || b.keyCode;
                    if (!(c === !0 || b.ctrlKey && b.altKey) && (b.ctrlKey || b.metaKey || ha)) return !0;
                    if (j) {
                        46 == j && 0 == b.shiftKey && "," == f.radixPoint && (j = 44);
                        var k, n = c ? {
                                begin: g,
                                end: g
                            } : L(h),
                            p = String.fromCharCode(j),
                            q = P(n.begin, n.end);
                        q && (l().undoPositions = a.extend(!0, {}, l().validPositions), S(h, a.inputmask.keyCode.DELETE, n, !0), n.begin = l().p, f.insertMode || (f.insertMode = !f.insertMode, o(n.begin, e), f.insertMode = !f.insertMode), q = !f.multi), l().writeOutBuffer = !0;
                        var r = ea && !q ? n.end : n.begin,
                            s = z(r, p, e);
                        if (s !== !1) {
                            if (s !== !0 && (r = void 0 != s.pos ? s.pos : r, p = void 0 != s.c ? s.c : p), m(!0), void 0 != s.caret) k = s.caret;
                            else {
                                var u = l().validPositions;
                                k = !f.keepStatic && (void 0 != u[r + 1] && t(r + 1, u[r].locator.slice(), r).length > 1 || void 0 != u[r].alternation) ? r + 1 : C(r)
                            }
                            l().p = k
                        }
                        if (d !== !1) {
                            var x = this;
                            if (setTimeout(function() {
                                    f.onKeyValidation.call(x, s, f)
                                }, 0), l().writeOutBuffer && s !== !1) {
                                var y = v();
                                F(h, y, c ? void 0 : f.numericInput ? D(k) : k, b, c !== !0), c !== !0 && setTimeout(function() {
                                    O(y) === !0 && i.trigger("complete")
                                }, 0)
                            } else q && (l().buffer = void 0, l().validPositions = l().undoPositions)
                        } else q && (l().buffer = void 0, l().validPositions = l().undoPositions);
                        if (f.showTooltip && i.prop("title", l().mask), c && a.isFunction(f.onBeforeWrite)) {
                            var A = f.onBeforeWrite.call(this, b, v(), k, f);
                            if (A && A.refreshFromBuffer) {
                                var B = A.refreshFromBuffer;
                                w(B === !0 ? B : B.start, B.end, A.buffer), m(!0), A.caret && (l().p = A.caret)
                            }
                        }
                        b.preventDefault()
                    }
                }

                function V(b) {
                    var c = this,
                        d = a(c),
                        e = c._valueGet(!0),
                        g = L(c);
                    if ("propertychange" == b.type && c._valueGet().length <= B()) return !0;
                    if ("paste" == b.type) {
                        var h = e.substr(0, g.begin),
                            i = e.substr(g.end, e.length);
                        h == u().slice(0, g.begin).join("") && (h = ""), i == u().slice(g.end).join("") && (i = ""), window.clipboardData && window.clipboardData.getData ? e = h + window.clipboardData.getData("Text") + i : b.originalEvent && b.originalEvent.clipboardData && b.originalEvent.clipboardData.getData && (e = h + b.originalEvent.clipboardData.getData("text/plain") + i)
                    }
                    var j = e;
                    if (a.isFunction(f.onBeforePaste)) {
                        if (j = f.onBeforePaste.call(c, e, f), j === !1) return b.preventDefault(), !1;
                        j || (j = e)
                    }
                    return H(c, !0, !1, ea ? j.split("").reverse() : j.split("")), d.click(), O(v()) === !0 && d.trigger("complete"), !1
                }

                function W(b) {
                    var c = this;
                    H(c, !0, !1), O(v()) === !0 && a(c).trigger("complete"), b.preventDefault()
                }

                function X(a) {
                    var b = this;
                    _ = v().join(""), ("" == ba || 0 != a.originalEvent.data.indexOf(ba)) && (aa = L(b))
                }

                function Y(b) {
                    var c = this,
                        d = aa || L(c);
                    0 == b.originalEvent.data.indexOf(ba) && (m(), d = {
                        begin: 0,
                        end: 0
                    });
                    var e = b.originalEvent.data;
                    L(c, d.begin, d.end);
                    for (var g = 0; g < e.length; g++) {
                        var h = a.Event("keypress");
                        h.which = e.charCodeAt(g), fa = !1, ha = !1, U.call(c, h)
                    }
                    setTimeout(function() {
                        var a = l().p;
                        F(c, v(), f.numericInput ? D(a) : a)
                    }, 0), ba = b.originalEvent.data
                }

                function Z(a) {}

                function $(b) {
                    if (ca = a(b), ca.is(":input") && c(ca.attr("type")) || b.isContentEditable || ca.is("div")) {
                        if (ca.data("_inputmask", {
                                maskset: e,
                                opts: f,
                                isRTL: !1
                            }), f.showTooltip && ca.prop("title", l().mask), ("rtl" == b.dir || f.rightAlign) && ca.css("text-align", "right"), "rtl" == b.dir || f.numericInput) {
                            b.dir = "ltr", ca.removeAttr("dir");
                            var d = ca.data("_inputmask");
                            d.isRTL = !0, ca.data("_inputmask", d), ea = !0
                        }
                        ca.unbind(".inputmask"), (ca.is(":input") || b.isContentEditable) && (ca.closest("form").bind("submit", function(a) {
                            _ != v().join("") && ca.change(), ca[0]._valueGet && ca[0]._valueGet() == u().join("") && ca[0]._valueSet(""), f.removeMaskOnSubmit && ca.inputmask("remove")
                        }).bind("reset", function() {
                            setTimeout(function() {
                                ca.triggerHandler("setvalue.inputmask")
                            }, 0)
                        }), ca.bind("mouseenter.inputmask", function() {
                            var b = a(this),
                                c = this;
                            !b.is(":focus") && f.showMaskOnHover && c._valueGet() != v().join("") && F(c, v())
                        }).bind("blur.inputmask", function(b) {
                            var c = a(this),
                                d = this;
                            if (c.data("_inputmask")) {
                                var e = d._valueGet(),
                                    g = v().slice();
                                ia = !0, _ != g.join("") && setTimeout(function() {
                                    c.change(), _ = g.join("")
                                }, 0), "" != e && (f.clearMaskOnLostFocus && (e == u().join("") ? g = [] : N(g)), O(g) === !1 && (c.trigger("incomplete"), f.clearIncomplete && (m(), g = f.clearMaskOnLostFocus ? [] : u().slice())), F(d, g, void 0, b))
                            }
                        }).bind("focus.inputmask", function(b) {
                            var c = (a(this), this),
                                d = c._valueGet();
                            f.showMaskOnFocus && (!f.showMaskOnHover || f.showMaskOnHover && "" == d) && c._valueGet() != v().join("") && F(c, v(), C(n())), _ = v().join("")
                        }).bind("mouseleave.inputmask", function() {
                            var b = a(this),
                                c = this;
                            if (f.clearMaskOnLostFocus) {
                                var d = v().slice(),
                                    e = c._valueGet();
                                b.is(":focus") || e == b.attr("placeholder") || "" == e || (e == u().join("") ? d = [] : N(d), F(c, d))
                            }
                        }).bind("click.inputmask", function() {
                            var b = a(this),
                                c = this;
                            if (b.is(":focus")) {
                                var d = L(c);
                                if (d.begin == d.end)
                                    if (f.radixFocus && "" != f.radixPoint && -1 != a.inArray(f.radixPoint, v()) && (ia || v().join("") == u().join(""))) L(c, a.inArray(f.radixPoint, v())), ia = !1;
                                    else {
                                        var e = ea ? K(d.begin) : d.begin,
                                            g = C(n(e));
                                        g > e ? L(c, A(e) ? e : C(e)) : L(c, g)
                                    }
                            }
                        }).bind("dblclick.inputmask", function() {
                            var a = this;
                            setTimeout(function() {
                                L(a, 0, C(n()))
                            }, 0)
                        }).bind(k + ".inputmask dragdrop.inputmask drop.inputmask", V).bind("cut.inputmask", function(b) {
                            ga = !0;
                            var c = this,
                                d = a(c),
                                e = L(c);
                            S(c, a.inputmask.keyCode.DELETE, e), F(c, v(), l().p, b, _ != v().join("")), c._valueGet() == u().join("") && d.trigger("cleared"), f.showTooltip && d.prop("title", l().mask)
                        }).bind("complete.inputmask", f.oncomplete).bind("incomplete.inputmask", f.onincomplete).bind("cleared.inputmask", f.oncleared), ca.bind("keydown.inputmask", T).bind("keypress.inputmask", U), j || ca.bind("compositionstart.inputmask", X).bind("compositionupdate.inputmask", Y).bind("compositionend.inputmask", Z), "paste" === k && ca.bind("input.inputmask", W)), ca.bind("setvalue.inputmask", function() {
                            var b = this,
                                c = b._valueGet();
                            b._valueSet(a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(b, c, f) || c : c), H(b, !0, !1), _ = v().join(""), (f.clearMaskOnLostFocus || f.clearIncomplete) && b._valueGet() == u().join("") && b._valueSet("")
                        }), R(b);
                        var g = a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(b, b._valueGet(), f) || b._valueGet() : b._valueGet();
                        H(b, !0, !1, g.split(""));
                        var h = v().slice();
                        _ = h.join("");
                        var i;
                        try {
                            i = document.activeElement
                        } catch (o) {}
                        O(h) === !1 && f.clearIncomplete && m(), f.clearMaskOnLostFocus && (h.join("") == u().join("") ? h = [] : N(h)), F(b, h), i === b && L(b, C(n())), Q(b)
                    }
                }
                var _, aa, ba, ca, da, ea = !1,
                    fa = !1,
                    ga = !1,
                    ha = !1,
                    ia = !0;
                if (void 0 != d) switch (d.action) {
                    case "isComplete":
                        return ca = a(d.el), e = ca.data("_inputmask").maskset, f = ca.data("_inputmask").opts, O(d.buffer);
                    case "unmaskedvalue":
                        return ca = d.$input, e = ca.data("_inputmask").maskset, f = ca.data("_inputmask").opts, ea = d.$input.data("_inputmask").isRTL, J(d.$input);
                    case "mask":
                        _ = v().join(""), $(d.el);
                        break;
                    case "format":
                        ca = a({}), ca.data("_inputmask", {
                            maskset: e,
                            opts: f,
                            isRTL: f.numericInput
                        }), f.numericInput && (ea = !0);
                        var ja = (a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(ca, d.value, f) || d.value : d.value).split("");
                        return H(ca, !1, !1, ea ? ja.reverse() : ja), a.isFunction(f.onBeforeWrite) && f.onBeforeWrite.call(this, void 0, v(), 0, f), d.metadata ? {
                            value: ea ? v().slice().reverse().join("") : v().join(""),
                            metadata: ca.inputmask("getmetadata")
                        } : ea ? v().slice().reverse().join("") : v().join("");
                    case "isValid":
                        ca = a({}), ca.data("_inputmask", {
                            maskset: e,
                            opts: f,
                            isRTL: f.numericInput
                        }), f.numericInput && (ea = !0);
                        var ja = d.value.split("");
                        H(ca, !1, !0, ea ? ja.reverse() : ja);
                        for (var ka = v(), la = M(), ma = ka.length - 1; ma > la && !A(ma); ma--);
                        return ka.splice(la, ma + 1 - la), O(ka) && d.value == ka.join("");
                    case "getemptymask":
                        return ca = a(d.el), e = ca.data("_inputmask").maskset, f = ca.data("_inputmask").opts, u();
                    case "remove":
                        var na = d.el;
                        ca = a(na), e = ca.data("_inputmask").maskset, f = ca.data("_inputmask").opts, na._valueSet(J(ca)), ca.unbind(".inputmask"), ca.removeData("_inputmask");
                        var oa;
                        Object.getOwnPropertyDescriptor && (oa = Object.getOwnPropertyDescriptor(na, "value")), oa && oa.get ? na._valueGet && Object.defineProperty(na, "value", {
                            get: na._valueGet,
                            set: na._valueSet
                        }) : document.__lookupGetter__ && na.__lookupGetter__("value") && na._valueGet && (na.__defineGetter__("value", na._valueGet), na.__defineSetter__("value", na._valueSet));
                        try {
                            delete na._valueGet, delete na._valueSet
                        } catch (pa) {
                            na._valueGet = void 0, na._valueSet = void 0
                        }
                        break;
                    case "getmetadata":
                        if (ca = a(d.el), e = ca.data("_inputmask").maskset, f = ca.data("_inputmask").opts, a.isArray(e.metadata)) {
                            for (var qa, ra = n(), sa = ra; sa >= 0; sa--)
                                if (l().validPositions[sa] && void 0 != l().validPositions[sa].alternation) {
                                    qa = l().validPositions[sa].alternation;
                                    break
                                }
                            return void 0 != qa ? e.metadata[l().validPositions[ra].locator[qa]] : e.metadata[0]
                        }
                        return e.metadata
                }
            }
            if (void 0 === a.fn.inputmask) {
                var g = navigator.userAgent,
                    h = null !== g.match(new RegExp("iphone", "i")),
                    i = (null !== g.match(new RegExp("android.*safari.*", "i")), null !== g.match(new RegExp("android.*chrome.*", "i"))),
                    j = null !== g.match(new RegExp("android.*firefox.*", "i")),
                    k = (/Kindle/i.test(g) || /Silk/i.test(g) || /KFTT/i.test(g) || /KFOT/i.test(g) || /KFJWA/i.test(g) || /KFJWI/i.test(g) || /KFSOWI/i.test(g) || /KFTHWA/i.test(g) || /KFTHWI/i.test(g) || /KFAPWA/i.test(g) || /KFAPWI/i.test(g), b("paste") ? "paste" : b("input") ? "input" : "propertychange");
                a.inputmask = {
                    defaults: {
                        placeholder: "_",
                        optionalmarker: {
                            start: "[",
                            end: "]"
                        },
                        quantifiermarker: {
                            start: "{",
                            end: "}"
                        },
                        groupmarker: {
                            start: "(",
                            end: ")"
                        },
                        alternatormarker: "|",
                        escapeChar: "\\",
                        mask: null,
                        oncomplete: a.noop,
                        onincomplete: a.noop,
                        oncleared: a.noop,
                        repeat: 0,
                        greedy: !0,
                        autoUnmask: !1,
                        removeMaskOnSubmit: !1,
                        clearMaskOnLostFocus: !0,
                        insertMode: !0,
                        clearIncomplete: !1,
                        aliases: {},
                        alias: null,
                        onKeyDown: a.noop,
                        onBeforeMask: void 0,
                        onBeforePaste: void 0,
                        onBeforeWrite: void 0,
                        onUnMask: void 0,
                        showMaskOnFocus: !0,
                        showMaskOnHover: !0,
                        onKeyValidation: a.noop,
                        skipOptionalPartCharacter: " ",
                        showTooltip: !1,
                        numericInput: !1,
                        rightAlign: !1,
                        undoOnEscape: !0,
                        radixPoint: "",
                        radixFocus: !1,
                        nojumps: !1,
                        nojumpsThreshold: 0,
                        keepStatic: void 0,
                        definitions: {
                            9: {
                                validator: "[0-9]",
                                cardinality: 1,
                                definitionSymbol: "*"
                            },
                            a: {
                                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                cardinality: 1,
                                definitionSymbol: "*"
                            },
                            "*": {
                                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                cardinality: 1
                            }
                        },
                        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                        isComplete: void 0,
                        canClearPosition: a.noop,
                        postValidation: void 0
                    },
                    keyCode: {
                        ALT: 18,
                        BACKSPACE: 8,
                        CAPS_LOCK: 20,
                        COMMA: 188,
                        COMMAND: 91,
                        COMMAND_LEFT: 91,
                        COMMAND_RIGHT: 93,
                        CONTROL: 17,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        INSERT: 45,
                        LEFT: 37,
                        MENU: 93,
                        NUMPAD_ADD: 107,
                        NUMPAD_DECIMAL: 110,
                        NUMPAD_DIVIDE: 111,
                        NUMPAD_ENTER: 108,
                        NUMPAD_MULTIPLY: 106,
                        NUMPAD_SUBTRACT: 109,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SHIFT: 16,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38,
                        WINDOWS: 91
                    },
                    masksCache: {},
                    escapeRegex: function(a) {
                        var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
                        return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1")
                    },
                    format: function(b, c, g) {
                        var h = a.extend(!0, {}, a.inputmask.defaults, c);
                        return d(h.alias, c, h), f({
                            action: "format",
                            value: b,
                            metadata: g
                        }, e(h, c && void 0 !== c.definitions), h)
                    },
                    isValid: function(b, c) {
                        var g = a.extend(!0, {}, a.inputmask.defaults, c);
                        return d(g.alias, c, g), f({
                            action: "isValid",
                            value: b
                        }, e(g, c && void 0 !== c.definitions), g)
                    }
                }, a.fn.inputmask = function(b, c) {
                    function g(b, c, e) {
                        var f = a(b);
                        f.data("inputmask-alias") && d(f.data("inputmask-alias"), a.extend(!0, {}, c), c);
                        for (var g in c) {
                            var h = f.data("inputmask-" + g.toLowerCase());
                            void 0 != h && ("mask" == g && 0 == h.indexOf("[") ? (c[g] = h.replace(/[\s[\]]/g, "").split("','"), c[g][0] = c[g][0].replace("'", ""), c[g][c[g].length - 1] = c[g][c[g].length - 1].replace("'", "")) : c[g] = "boolean" == typeof h ? h : h.toString(), e && (e[g] = c[g]))
                        }
                        return c
                    }
                    var h, i = a.extend(!0, {}, a.inputmask.defaults, c);
                    if ("string" == typeof b) switch (b) {
                        case "mask":
                            return d(i.alias, c, i), this.each(function() {
                                return g(this, i), h = e(i, c && void 0 !== c.definitions), void 0 == h ? this : void f({
                                    action: "mask",
                                    el: this
                                }, h, i)
                            });
                        case "unmaskedvalue":
                            var j = a(this);
                            return j.data("_inputmask") ? f({
                                action: "unmaskedvalue",
                                $input: j
                            }) : j.val();
                        case "remove":
                            return this.each(function() {
                                var b = a(this);
                                b.data("_inputmask") && f({
                                    action: "remove",
                                    el: this
                                })
                            });
                        case "getemptymask":
                            return this.data("_inputmask") ? f({
                                action: "getemptymask",
                                el: this
                            }) : "";
                        case "hasMaskedValue":
                            return this.data("_inputmask") ? !this.data("_inputmask").opts.autoUnmask : !1;
                        case "isComplete":
                            return this.data("_inputmask") ? f({
                                action: "isComplete",
                                buffer: this[0]._valueGet().split(""),
                                el: this
                            }) : !0;
                        case "getmetadata":
                            return this.data("_inputmask") ? f({
                                action: "getmetadata",
                                el: this
                            }) : void 0;
                        default:
                            return d(i.alias, c, i), d(b, c, i) || (i.mask = b), this.each(function() {
                                return g(this, i), h = e(i, c && void 0 !== c.definitions), void 0 == h ? this : void f({
                                    action: "mask",
                                    el: this
                                }, h, i)
                            })
                    } else {
                        if ("object" == typeof b) return i = a.extend(!0, {}, a.inputmask.defaults, b), d(i.alias, b, i), this.each(function() {
                            return g(this, i), h = e(i, b && void 0 !== b.definitions), void 0 == h ? this : void f({
                                action: "mask",
                                el: this
                            }, h, i)
                        });
                        if (void 0 == b) return this.each(function() {
                            var b = a(this).attr("data-inputmask");
                            if (b && "" != b) try {
                                b = b.replace(new RegExp("'", "g"), '"');
                                var e = a.parseJSON("{" + b + "}");
                                a.extend(!0, e, c), i = a.extend(!0, {}, a.inputmask.defaults, e), i = g(this, i), d(i.alias, e, i), i.alias = void 0, a(this).inputmask("mask", i)
                            } catch (f) {}
                            if (a(this).attr("data-inputmask-mask") || a(this).attr("data-inputmask-alias")) {
                                i = a.extend(!0, {}, a.inputmask.defaults, {});
                                var h = {};
                                i = g(this, i, h), d(i.alias, h, i), i.alias = void 0, a(this).inputmask("mask", i)
                            }
                        })
                    }
                }
            }
            return a.fn.inputmask
        }(jQuery), ! function(a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
        }(function(a) {
            a.fn.jScrollPane = function(b) {
                function c(b, c) {
                    function d(c) {
                        var f, h, j, k, l, o, p = !1,
                            q = !1;
                        if (N = c, void 0 === O) l = b.scrollTop(), o = b.scrollLeft(), b.css({
                            overflow: "hidden",
                            padding: 0
                        }), P = b.innerWidth() + ra, Q = b.innerHeight(), b.width(P), O = a('<div class="jspPane" />').css("padding", qa).append(b.children()), R = a('<div class="jspContainer" />').css({
                            width: P + "px",
                            height: Q + "px"
                        }).append(O).appendTo(b);
                        else {
                            if (b.css("width", ""), p = N.stickToBottom && A(), q = N.stickToRight && B(), k = b.innerWidth() + ra != P || b.outerHeight() != Q, k && (P = b.innerWidth() + ra, Q = b.innerHeight(), R.css({
                                    width: P + "px",
                                    height: Q + "px"
                                })), !k && sa == S && O.outerHeight() == T) return void b.width(P);
                            sa = S, O.css("width", ""), b.width(P), R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                        }
                        O.css("overflow", "auto"), S = c.contentWidth ? c.contentWidth : O[0].scrollWidth, T = O[0].scrollHeight, O.css("overflow", ""), U = S / P, V = T / Q, W = V > 1, X = U > 1, X || W ? (b.addClass("jspScrollable"), f = N.maintainPosition && ($ || ba), f && (h = y(), j = z()), e(), g(), i(), f && (w(q ? S - P : h, !1), v(p ? T - Q : j, !1)), F(), C(), L(), N.enableKeyboardNavigation && H(), N.clickOnTrack && m(), J(), N.hijackInternalLinks && K()) : (b.removeClass("jspScrollable"), O.css({
                            top: 0,
                            left: 0,
                            width: R.width() - ra
                        }), D(), G(), I(), n()), N.autoReinitialise && !pa ? pa = setInterval(function() {
                            d(N)
                        }, N.autoReinitialiseDelay) : !N.autoReinitialise && pa && clearInterval(pa), l && b.scrollTop(0) && v(l, !1), o && b.scrollLeft(0) && w(o, !1), b.trigger("jsp-initialised", [X || W])
                    }

                    function e() {
                        W && (R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), ca = R.find(">.jspVerticalBar"), da = ca.find(">.jspTrack"), Y = da.find(">.jspDrag"), N.showArrows && (ha = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", k(0, -1)).bind("click.jsp", E), ia = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", k(0, 1)).bind("click.jsp", E), N.arrowScrollOnHover && (ha.bind("mouseover.jsp", k(0, -1, ha)), ia.bind("mouseover.jsp", k(0, 1, ia))), j(da, N.verticalArrowPositions, ha, ia)), fa = Q, R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                            fa -= a(this).outerHeight()
                        }), Y.hover(function() {
                            Y.addClass("jspHover")
                        }, function() {
                            Y.removeClass("jspHover")
                        }).bind("mousedown.jsp", function(b) {
                            a("html").bind("dragstart.jsp selectstart.jsp", E), Y.addClass("jspActive");
                            var c = b.pageY - Y.position().top;
                            return a("html").bind("mousemove.jsp", function(a) {
                                p(a.pageY - c, !1)
                            }).bind("mouseup.jsp mouseleave.jsp", o), !1
                        }), f())
                    }

                    function f() {
                        da.height(fa + "px"), $ = 0, ea = N.verticalGutter + da.outerWidth(), O.width(P - ea - ra);
                        try {
                            0 === ca.position().left && O.css("margin-left", ea + "px")
                        } catch (a) {}
                    }

                    function g() {
                        X && (R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), ja = R.find(">.jspHorizontalBar"), ka = ja.find(">.jspTrack"), _ = ka.find(">.jspDrag"), N.showArrows && (na = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", k(-1, 0)).bind("click.jsp", E), oa = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", k(1, 0)).bind("click.jsp", E), N.arrowScrollOnHover && (na.bind("mouseover.jsp", k(-1, 0, na)), oa.bind("mouseover.jsp", k(1, 0, oa))), j(ka, N.horizontalArrowPositions, na, oa)), _.hover(function() {
                            _.addClass("jspHover")
                        }, function() {
                            _.removeClass("jspHover")
                        }).bind("mousedown.jsp", function(b) {
                            a("html").bind("dragstart.jsp selectstart.jsp", E), _.addClass("jspActive");
                            var c = b.pageX - _.position().left;
                            return a("html").bind("mousemove.jsp", function(a) {
                                r(a.pageX - c, !1)
                            }).bind("mouseup.jsp mouseleave.jsp", o), !1
                        }), la = R.innerWidth(), h())
                    }

                    function h() {
                        R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                            la -= a(this).outerWidth()
                        }), ka.width(la + "px"), ba = 0
                    }

                    function i() {
                        if (X && W) {
                            var b = ka.outerHeight(),
                                c = da.outerWidth();
                            fa -= b, a(ja).find(">.jspCap:visible,>.jspArrow").each(function() {
                                la += a(this).outerWidth()
                            }), la -= c, Q -= c, P -= b, ka.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), f(), h()
                        }
                        X && O.width(R.outerWidth() - ra + "px"), T = O.outerHeight(), V = T / Q, X && (ma = Math.ceil(1 / U * la), ma > N.horizontalDragMaxWidth ? ma = N.horizontalDragMaxWidth : ma < N.horizontalDragMinWidth && (ma = N.horizontalDragMinWidth), _.width(ma + "px"), aa = la - ma, s(ba)), W && (ga = Math.ceil(1 / V * fa), ga > N.verticalDragMaxHeight ? ga = N.verticalDragMaxHeight : ga < N.verticalDragMinHeight && (ga = N.verticalDragMinHeight), Y.height(ga + "px"), Z = fa - ga, q($))
                    }

                    function j(a, b, c, d) {
                        var e, f = "before",
                            g = "after";
                        "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d)
                    }

                    function k(a, b, c) {
                        return function() {
                            return l(a, b, this, c), this.blur(), !1
                        }
                    }

                    function l(b, c, d, e) {
                        d = a(d).addClass("jspActive");
                        var f, g, h = !0,
                            i = function() {
                                0 !== b && ta.scrollByX(b * N.arrowButtonSpeed), 0 !== c && ta.scrollByY(c * N.arrowButtonSpeed), g = setTimeout(i, h ? N.initialDelay : N.arrowRepeatFreq), h = !1
                            };
                        i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function() {
                            d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f)
                        })
                    }

                    function m() {
                        n(), W && da.bind("mousedown.jsp", function(b) {
                            if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                                var c, d = a(this),
                                    e = d.offset(),
                                    f = b.pageY - e.top - $,
                                    g = !0,
                                    h = function() {
                                        var a = d.offset(),
                                            e = b.pageY - a.top - ga / 2,
                                            j = Q * N.scrollPagePercent,
                                            k = Z * j / (T - Q);
                                        if (0 > f) $ - k > e ? ta.scrollByY(-j) : p(e);
                                        else {
                                            if (!(f > 0)) return void i();
                                            e > $ + k ? ta.scrollByY(j) : p(e)
                                        }
                                        c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                                    },
                                    i = function() {
                                        c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                                    };
                                return h(), a(document).bind("mouseup.jsp", i), !1
                            }
                        }), X && ka.bind("mousedown.jsp", function(b) {
                            if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                                var c, d = a(this),
                                    e = d.offset(),
                                    f = b.pageX - e.left - ba,
                                    g = !0,
                                    h = function() {
                                        var a = d.offset(),
                                            e = b.pageX - a.left - ma / 2,
                                            j = P * N.scrollPagePercent,
                                            k = aa * j / (S - P);
                                        if (0 > f) ba - k > e ? ta.scrollByX(-j) : r(e);
                                        else {
                                            if (!(f > 0)) return void i();
                                            e > ba + k ? ta.scrollByX(j) : r(e)
                                        }
                                        c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                                    },
                                    i = function() {
                                        c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                                    };
                                return h(), a(document).bind("mouseup.jsp", i), !1
                            }
                        })
                    }

                    function n() {
                        ka && ka.unbind("mousedown.jsp"), da && da.unbind("mousedown.jsp")
                    }

                    function o() {
                        a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), Y && Y.removeClass("jspActive"), _ && _.removeClass("jspActive")
                    }

                    function p(a, b) {
                        W && (0 > a ? a = 0 : a > Z && (a = Z), void 0 === b && (b = N.animateScroll), b ? ta.animate(Y, "top", a, q) : (Y.css("top", a), q(a)))
                    }

                    function q(a) {
                        void 0 === a && (a = Y.position().top), R.scrollTop(0), $ = a || 0;
                        var c = 0 === $,
                            d = $ == Z,
                            e = a / Z,
                            f = -e * (T - Q);
                        (ua != c || wa != d) && (ua = c, wa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), t(c, d), O.css("top", f), b.trigger("jsp-scroll-y", [-f, c, d]).trigger("scroll")
                    }

                    function r(a, b) {
                        X && (0 > a ? a = 0 : a > aa && (a = aa), void 0 === b && (b = N.animateScroll), b ? ta.animate(_, "left", a, s) : (_.css("left", a), s(a)))
                    }

                    function s(a) {
                        void 0 === a && (a = _.position().left), R.scrollTop(0), ba = a || 0;
                        var c = 0 === ba,
                            d = ba == aa,
                            e = a / aa,
                            f = -e * (S - P);
                        (va != c || xa != d) && (va = c, xa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), u(c, d), O.css("left", f), b.trigger("jsp-scroll-x", [-f, c, d]).trigger("scroll")
                    }

                    function t(a, b) {
                        N.showArrows && (ha[a ? "addClass" : "removeClass"]("jspDisabled"), ia[b ? "addClass" : "removeClass"]("jspDisabled"))
                    }

                    function u(a, b) {
                        N.showArrows && (na[a ? "addClass" : "removeClass"]("jspDisabled"), oa[b ? "addClass" : "removeClass"]("jspDisabled"))
                    }

                    function v(a, b) {
                        var c = a / (T - Q);
                        p(c * Z, b)
                    }

                    function w(a, b) {
                        var c = a / (S - P);
                        r(c * aa, b)
                    }

                    function x(b, c, d) {
                        var e, f, g, h, i, j, k, l, m, n = 0,
                            o = 0;
                        try {
                            e = a(b)
                        } catch (p) {
                            return
                        }
                        for (f = e.outerHeight(), g = e.outerWidth(), R.scrollTop(0), R.scrollLeft(0); !e.is(".jspPane");)
                            if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
                        h = z(), j = h + Q, h > n || c ? l = n - N.horizontalGutter : n + f > j && (l = n - Q + f + N.horizontalGutter), isNaN(l) || v(l, d), i = y(), k = i + P, i > o || c ? m = o - N.horizontalGutter : o + g > k && (m = o - P + g + N.horizontalGutter), isNaN(m) || w(m, d)
                    }

                    function y() {
                        return -O.position().left
                    }

                    function z() {
                        return -O.position().top
                    }

                    function A() {
                        var a = T - Q;
                        return a > 20 && a - z() < 10
                    }

                    function B() {
                        var a = S - P;
                        return a > 20 && a - y() < 10
                    }

                    function C() {
                        R.unbind(za).bind(za, function(a, b, c, d) {
                            ba || (ba = 0), $ || ($ = 0);
                            var e = ba,
                                f = $,
                                g = a.deltaFactor || N.mouseWheelSpeed;
                            return ta.scrollBy(c * g, -d * g, !1), e == ba && f == $
                        })
                    }

                    function D() {
                        R.unbind(za)
                    }

                    function E() {
                        return !1
                    }

                    function F() {
                        O.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(a) {
                            x(a.target, !1)
                        })
                    }

                    function G() {
                        O.find(":input,a").unbind("focus.jsp")
                    }

                    function H() {
                        function c() {
                            var a = ba,
                                b = $;
                            switch (d) {
                                case 40:
                                    ta.scrollByY(N.keyboardSpeed, !1);
                                    break;
                                case 38:
                                    ta.scrollByY(-N.keyboardSpeed, !1);
                                    break;
                                case 34:
                                case 32:
                                    ta.scrollByY(Q * N.scrollPagePercent, !1);
                                    break;
                                case 33:
                                    ta.scrollByY(-Q * N.scrollPagePercent, !1);
                                    break;
                                case 39:
                                    ta.scrollByX(N.keyboardSpeed, !1);
                                    break;
                                case 37:
                                    ta.scrollByX(-N.keyboardSpeed, !1)
                            }
                            return e = a != ba || b != $
                        }
                        var d, e, f = [];
                        X && f.push(ja[0]), W && f.push(ca[0]), O.bind("focus.jsp", function() {
                            b.focus()
                        }), b.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(b) {
                            if (b.target === this || f.length && a(b.target).closest(f).length) {
                                var g = ba,
                                    h = $;
                                switch (b.keyCode) {
                                    case 40:
                                    case 38:
                                    case 34:
                                    case 32:
                                    case 33:
                                    case 39:
                                    case 37:
                                        d = b.keyCode, c();
                                        break;
                                    case 35:
                                        v(T - Q), d = null;
                                        break;
                                    case 36:
                                        v(0), d = null
                                }
                                return e = b.keyCode == d && g != ba || h != $, !e
                            }
                        }).bind("keypress.jsp", function(a) {
                            return a.keyCode == d && c(), !e
                        }), N.hideFocus ? (b.css("outline", "none"), "hideFocus" in R[0] && b.attr("hideFocus", !0)) : (b.css("outline", ""), "hideFocus" in R[0] && b.attr("hideFocus", !1))
                    }

                    function I() {
                        b.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), O.unbind(".jsp")
                    }

                    function J() {
                        if (location.hash && location.hash.length > 1) {
                            var b, c, d = escape(location.hash.substr(1));
                            try {
                                b = a("#" + d + ', a[name="' + d + '"]')
                            } catch (e) {
                                return
                            }
                            b.length && O.find(d) && (0 === R.scrollTop() ? c = setInterval(function() {
                                R.scrollTop() > 0 && (x(b, !0), a(document).scrollTop(R.position().top), clearInterval(c))
                            }, 50) : (x(b, !0), a(document).scrollTop(R.position().top)))
                        }
                    }

                    function K() {
                        a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function(b) {
                            var c, d, e, f, g, h, i = this.href.substr(0, this.href.indexOf("#")),
                                j = location.href;
                            if (-1 !== location.href.indexOf("#") && (j = location.href.substr(0, location.href.indexOf("#"))), i === j) {
                                c = escape(this.href.substr(this.href.indexOf("#") + 1));
                                try {
                                    d = a("#" + c + ', a[name="' + c + '"]')
                                } catch (k) {
                                    return
                                }
                                d.length && (e = d.closest(".jspScrollable"), f = e.data("jsp"), f.scrollToElement(d, !0), e[0].scrollIntoView && (g = a(window).scrollTop(), h = d.offset().top, (g > h || h > g + a(window).height()) && e[0].scrollIntoView()), b.preventDefault())
                            }
                        }))
                    }

                    function L() {
                        var a, b, c, d, e, f = !1;
                        R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g) {
                            var h = g.originalEvent.touches[0];
                            a = y(), b = z(), c = h.pageX, d = h.pageY, e = !1, f = !0
                        }).bind("touchmove.jsp", function(g) {
                            if (f) {
                                var h = g.originalEvent.touches[0],
                                    i = ba,
                                    j = $;
                                return ta.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == ba && j == $
                            }
                        }).bind("touchend.jsp", function(a) {
                            f = !1
                        }).bind("click.jsp-touchclick", function(a) {
                            return e ? (e = !1, !1) : void 0
                        })
                    }

                    function M() {
                        var a = z(),
                            c = y();
                        b.removeClass("jspScrollable").unbind(".jsp"), O.unbind(".jsp"), b.replaceWith(ya.append(O.children())), ya.scrollTop(a), ya.scrollLeft(c), pa && clearInterval(pa)
                    }
                    var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta = this,
                        ua = !0,
                        va = !0,
                        wa = !1,
                        xa = !1,
                        ya = b.clone(!1, !1).empty(),
                        za = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                    "border-box" === b.css("box-sizing") ? (qa = 0, ra = 0) : (qa = b.css("paddingTop") + " " + b.css("paddingRight") + " " + b.css("paddingBottom") + " " + b.css("paddingLeft"), ra = (parseInt(b.css("paddingLeft"), 10) || 0) + (parseInt(b.css("paddingRight"), 10) || 0)), a.extend(ta, {
                        reinitialise: function(b) {
                            b = a.extend({}, N, b), d(b)
                        },
                        scrollToElement: function(a, b, c) {
                            x(a, b, c)
                        },
                        scrollTo: function(a, b, c) {
                            w(a, c), v(b, c)
                        },
                        scrollToX: function(a, b) {
                            w(a, b)
                        },
                        scrollToY: function(a, b) {
                            v(a, b)
                        },
                        scrollToPercentX: function(a, b) {
                            w(a * (S - P), b)
                        },
                        scrollToPercentY: function(a, b) {
                            v(a * (T - Q), b)
                        },
                        scrollBy: function(a, b, c) {
                            ta.scrollByX(a, c), ta.scrollByY(b, c)
                        },
                        scrollByX: function(a, b) {
                            var c = y() + Math[0 > a ? "floor" : "ceil"](a),
                                d = c / (S - P);
                            r(d * aa, b)
                        },
                        scrollByY: function(a, b) {
                            var c = z() + Math[0 > a ? "floor" : "ceil"](a),
                                d = c / (T - Q);
                            p(d * Z, b)
                        },
                        positionDragX: function(a, b) {
                            r(a, b)
                        },
                        positionDragY: function(a, b) {
                            p(a, b)
                        },
                        animate: function(a, b, c, d) {
                            var e = {};
                            e[b] = c, a.animate(e, {
                                duration: N.animateDuration,
                                easing: N.animateEase,
                                queue: !1,
                                step: d
                            })
                        },
                        getContentPositionX: function() {
                            return y()
                        },
                        getContentPositionY: function() {
                            return z()
                        },
                        getContentWidth: function() {
                            return S
                        },
                        getContentHeight: function() {
                            return T
                        },
                        getPercentScrolledX: function() {
                            return y() / (S - P)
                        },
                        getPercentScrolledY: function() {
                            return z() / (T - Q)
                        },
                        getIsScrollableH: function() {
                            return X
                        },
                        getIsScrollableV: function() {
                            return W
                        },
                        getContentPane: function() {
                            return O
                        },
                        scrollToBottom: function(a) {
                            p(Z, a)
                        },
                        hijackInternalLinks: a.noop,
                        destroy: function() {
                            M()
                        }
                    }), d(c)
                }
                return b = a.extend({}, a.fn.jScrollPane.defaults, b), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                    b[this] = b[this] || b.speed
                }), this.each(function() {
                    var d = a(this),
                        e = d.data("jsp");
                    e ? e.reinitialise(b) : (a("script", d).filter('[type="text/javascript"],:not([type])').remove(), e = new c(d, b), d.data("jsp", e))
                })
            }, a.fn.jScrollPane.defaults = {
                showArrows: !1,
                maintainPosition: !0,
                stickToBottom: !1,
                stickToRight: !1,
                clickOnTrack: !0,
                autoReinitialise: !1,
                autoReinitialiseDelay: 500,
                verticalDragMinHeight: 0,
                verticalDragMaxHeight: 99999,
                horizontalDragMinWidth: 0,
                horizontalDragMaxWidth: 99999,
                contentWidth: void 0,
                animateScroll: !1,
                animateDuration: 300,
                animateEase: "linear",
                hijackInternalLinks: !1,
                verticalGutter: 4,
                horizontalGutter: 4,
                mouseWheelSpeed: 3,
                arrowButtonSpeed: 0,
                arrowRepeatFreq: 50,
                arrowScrollOnHover: !1,
                trackClickSpeed: 0,
                trackClickRepeatFreq: 70,
                verticalArrowPositions: "split",
                horizontalArrowPositions: "split",
                enableKeyboardNavigation: !0,
                hideFocus: !1,
                keyboardSpeed: 0,
                initialDelay: 300,
                speed: 30,
                scrollPagePercent: .8
            }
        }),
        function(a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
        }(function(a) {
            function b(b) {
                var g = b || window.event,
                    h = i.call(arguments, 1),
                    j = 0,
                    k = 0,
                    l = 0,
                    m = 0;
                if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (l = -1 * g.detail), "wheelDelta" in g && (l = g.wheelDelta), "wheelDeltaY" in g && (l = g.wheelDeltaY), "wheelDeltaX" in g && (k = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (k = -1 * l, l = 0), j = 0 === l ? k : l, "deltaY" in g && (l = -1 * g.deltaY, j = l), "deltaX" in g && (k = g.deltaX, 0 === l && (j = -1 * k)), 0 !== l || 0 !== k) {
                    if (1 === g.deltaMode) {
                        var n = a.data(this, "mousewheel-line-height");
                        j *= n, l *= n, k *= n
                    } else if (2 === g.deltaMode) {
                        var o = a.data(this, "mousewheel-page-height");
                        j *= o, l *= o, k *= o
                    }
                    return m = Math.max(Math.abs(l), Math.abs(k)), (!f || f > m) && (f = m, d(g, m) && (f /= 40)), d(g, m) && (j /= 40, k /= 40, l /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), k = Math[k >= 1 ? "floor" : "ceil"](k / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), b.deltaX = k, b.deltaY = l, b.deltaFactor = f, b.deltaMode = 0, h.unshift(b, j, k, l), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                }
            }

            function c() {
                f = null
            }

            function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
            }
            var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                i = Array.prototype.slice;
            if (a.event.fixHooks)
                for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            var k = a.event.special.mousewheel = {
                version: "3.1.9",
                setup: function() {
                    if (this.addEventListener)
                        for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                    else this.onmousewheel = b;
                    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var a = h.length; a;) this.removeEventListener(h[--a], b, !1);
                    else this.onmousewheel = null
                },
                getLineHeight: function(b) {
                    return parseInt(a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
                },
                getPageHeight: function(b) {
                    return a(b).height()
                },
                settings: {
                    adjustOldDeltas: !0
                }
            };
            a.fn.extend({
                mousewheel: function(a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                },
                unmousewheel: function(a) {
                    return this.unbind("mousewheel", a)
                }
            })
        }),
        function(a, b, c, d) {
            var e = function(d, e) {
                this.elem = d, this.$elem = a(d), this.options = e, this.metadata = this.$elem.data("plugin-options"), this.$win = a(b), this.sections = {}, this.didScroll = !1, this.$doc = a(c), this.docHeight = this.$doc.height()
            };
            e.prototype = {
                defaults: {
                    navItems: "a",
                    currentClass: "current",
                    changeHash: !1,
                    easing: "swing",
                    filter: "",
                    scrollSpeed: 750,
                    scrollThreshold: .5,
                    begin: !1,
                    end: !1,
                    scrollChange: !1
                },
                init: function() {
                    return this.config = a.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", a.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", a.proxy(this.getPositions, this)),
                        this
                },
                adjustNav: function(a, b) {
                    a.$elem.find("." + a.config.currentClass).removeClass(a.config.currentClass), b.addClass(a.config.currentClass)
                },
                bindInterval: function() {
                    var a, b = this;
                    b.$win.on("scroll.onePageNav", function() {
                        b.didScroll = !0
                    }), b.t = setInterval(function() {
                        a = b.$doc.height(), b.didScroll && (b.didScroll = !1, b.scrollChange()), a !== b.docHeight && (b.docHeight = a, b.getPositions())
                    }, 250)
                },
                getHash: function(a) {
                    return a.attr("href").split("#")[1]
                },
                getPositions: function() {
                    var b, c, d, e = this;
                    e.$nav.each(function() {
                        b = e.getHash(a(this)), d = a("#" + b), d.length && (c = d.offset().top, e.sections[b] = Math.round(c))
                    })
                },
                getSection: function(a) {
                    var b = null,
                        c = Math.round(this.$win.height() * this.config.scrollThreshold);
                    for (var d in this.sections) this.sections[d] - c < a && (b = d);
                    return b
                },
                handleClick: function(c) {
                    var d = this,
                        e = a(c.currentTarget),
                        f = e.parent(),
                        g = "#" + d.getHash(e);
                    f.hasClass(d.config.currentClass) || (d.config.begin && d.config.begin(), d.adjustNav(d, f), d.unbindInterval(), d.scrollTo(g, function() {
                        d.config.changeHash && (b.location.hash = g), d.bindInterval(), d.config.end && d.config.end()
                    })), c.preventDefault()
                },
                scrollChange: function() {
                    var a, b = this.$win.scrollTop(),
                        c = this.getSection(b);
                    null !== c && (a = this.$elem.find('a[href$="#' + c + '"]').parent(), a.hasClass(this.config.currentClass) || (this.adjustNav(this, a), this.config.scrollChange && this.config.scrollChange(a)))
                },
                scrollTo: function(b, c) {
                    var d = a(b).offset().top;
                    a("html, body").animate({
                        scrollTop: d
                    }, this.config.scrollSpeed, this.config.easing, c)
                },
                unbindInterval: function() {
                    clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
                }
            }, e.defaults = e.prototype.defaults, a.fn.onePageNav = function(a) {
                return this.each(function() {
                    new e(this, a).init()
                })
            }
        }(jQuery, window, document), ! function(a, b) {
            "use strict";
            return "function" == typeof define && define.amd ? void define(["jquery"], function(c) {
                return b(a, c, !1)
            }) : void b(a, a.jQuery || a.Zepto || a.ender || a.$, !0)
        }(this, function(a, b, c) {
            "use strict";
            var d;
            return d = {
                options: {
                    timeout: null,
                    meter: b(".scroolly"),
                    body: document
                },
                theCSSPrefix: "",
                theDashedCSSPrefix: "",
                isMobile: !1,
                isInitialized: !1,
                animFrame: null,
                direction: 0,
                scrollTop: 0,
                scrollCenter: 0,
                scrollBottom: 0,
                docHeight: 0,
                docMiddle: 0,
                winHeight: b(window).height()
            }, d.scrollLayout = {}, d._isObject = function(a) {
                return "object" == typeof a
            }, d._isArray = function(a) {
                return a instanceof Array
            }, d._isNumber = function(a) {
                return a instanceof Number || "number" == typeof a
            }, d._isString = function(a) {
                return a instanceof String || "string" == typeof a
            }, d._default = function(a, b, c) {
                void 0 === c && (c = null);
                var e = (b + "").split(".");
                if (a && (d._isObject(a) || d._isArray(a))) {
                    var f, g = a;
                    for (var h in e) {
                        if (f = e[h], !d._isObject(g) && !d._isArray(g) || void 0 === g[f]) return c;
                        g = g[f]
                    }
                    return g
                }
                return c
            }, d.parseCoords = function(a) {
                var b = a.split(/\s*=\s*/),
                    c = b[0] || "doc-top",
                    e = d.parseCoord(c),
                    f = b[1] || e.anchor,
                    g = d.parseCoord(f);
                return [e, g]
            }, d.parseCoord = function(a) {
                var b = /((vp|doc|el|con)-)?(top|center|bottom)?/i,
                    c = "(\\+|-)?\\s*(\\d+)(\\%|vp|doc|el|con)?",
                    d = new RegExp(c, "gi"),
                    e = a.match(b),
                    f = a.match(d);
                if (!e && !f) return !1;
                var g = e[1] ? e[2] : "vp",
                    h = e[3] || "top",
                    i = [];
                if (f) {
                    d = new RegExp(c, "i");
                    for (var j, k, l, m, n, o = 0; o < f.length; o++) j = f[o], k = j.match(d), l = k[1] && "-" === k[1] ? -1 : 1, m = k[2] && parseInt(k[2]) * l || 0, n = "px", k[3] && (n = "%" === k[3] ? g : k[3]), i.push({
                        offset: m,
                        subject: n
                    })
                }
                return {
                    original: a,
                    subject: g,
                    anchor: h,
                    offsets: i
                }
            }, d.calculateCoord = function(a, b, c) {
                d._isString(a) && (a = d.parseCoord(a));
                var e = 0;
                if ("vp" === a.subject) switch (a.anchor) {
                        case "top":
                            e = d.scrollTop;
                            break;
                        case "center":
                            e = d.scrollCenter;
                            break;
                        case "bottom":
                            e = d.scrollBottom
                    } else if ("doc" === a.subject) switch (a.anchor) {
                        case "top":
                            e = 0;
                            break;
                        case "center":
                            e = d.docMiddle;
                            break;
                        case "bottom":
                            e = d.docHeight
                    } else {
                        var f = "con" === a.subject ? c : b,
                            g = f.outerHeight(),
                            h = f.offset().top,
                            i = h + g,
                            j = h + Math.floor(g / 2);
                        switch (a.anchor) {
                            case "top":
                                e = h;
                                break;
                            case "center":
                                e = j;
                                break;
                            case "bottom":
                                e = i
                        }
                    }
                    var k, l, m, n;
                for (k = 0; k < a.offsets.length; k++) {
                    if (l = a.offsets[k], m = l.offset, "px" !== l.subject) {
                        switch (n = 0, l.subject) {
                            case "vp":
                                n = d.winHeight;
                                break;
                            case "doc":
                                n = d.docHeight;
                                break;
                            case "el":
                                n = b.outerHeight();
                                break;
                            case "con":
                                n = c.outerHeight()
                        }
                        m = Math.ceil(l.offset / 100 * n)
                    }
                    e += m
                }
                return e
            }, d.cmpCoords = function(a, b, c) {
                return d.calculateCoord(a[0], b, c) - d.calculateCoord(a[1], b, c)
            }, d.isRuleInActiveWidthRange = function(a) {
                var c, e, f, g = d._default(a, "minWidth", 0),
                    h = d._default(a, "maxWidth", "infinity"),
                    i = d._default(d.options, "meter"),
                    j = b(window).width();
                return i.length ? (c = i.length ? parseInt(i.css("min-width")) : 0, e = i.length ? i.css("max-width") : "none", e = "none" === e ? "infinity" : parseInt(e), f = c >= g && ("infinity" === h || h >= e)) : j > g && ("infinity" === h || h >= j)
            }, d.isRuleActive = function(a, b, c) {
                var e = d.isRuleInActiveWidthRange(a);
                if (!e) return !1;
                var f = d._default(a, "direction", 0),
                    g = d.direction;
                if (f && (f > 0 && 0 > g || 0 > f && g >= 0)) return !1;
                var h = d._default(a, "from", "0"),
                    i = d._default(a, "to", "finish"),
                    j = d.cmpCoords(h, b, c);
                if (j > 0) return !1;
                var k = d.cmpCoords(i, b, c);
                return 0 >= k ? !1 : {
                    offset: -j,
                    length: k - j
                }
            }, d.addItem = function(a, c, e, f) {
                if (!c.length) return !1;
                f = f || "self";
                var g, h, i, j, k, l, m;
                m = function(a, b, c, e) {
                    var f, g, h = b / c,
                        i = d._default(e, "cssFrom"),
                        j = d._default(e, "cssTo"),
                        k = {};
                    for (var l in i) f = i[l], g = d._default(j, l, f), k[l] = d.getTransitionValue(f, g, h);
                    a.css(d.extendCssWithPrefix(k))
                };
                for (var n in e) g = e[n], h = !f, i = d._default(g, "from", "doc-top"), (d._isString(i) || d._isNumber(i)) && (i = d.parseCoords("" + i), g.from = i), j = d._default(g, "to", "doc-bottom"), (d._isString(j) || d._isNumber(j)) && (j = d.parseCoords("" + j), g.to = j), k = d._default(g, "cssFrom"), l = d._default(g, "cssTo"), k && l && (g.cssOnScroll = m);
                if (c.length > 1) return c.each(function(c) {
                    for (var g, h, i = [], j = null, k = 0; k < e.length; k++) g = e[k], h = {}, b.extend(h, g), i.push(h);
                    f && (j = "self" === f ? f : f.length > 1 && c < f.length ? b(f[c]) : f), d.addItem(a + "-" + c, b(this), i, j)
                }), !0;
                var o = d._default(d.scrollLayout, a);
                return o ? o.rules.concat(e) : d.scrollLayout[a] = {
                    element: c,
                    container: f,
                    rules: e
                }, !0
            }, d.factory = function(a, b, c, e) {
                return d.init(), a.length && b ? (e = e || a[0].tagName + "_" + Object.keys(d.scrollLayout).length, void d.addItem(e, a, b, c, !1)) : !1
            }, d.stickItem = function(a, b, c) {
                d.stickItemXY(a, b, c instanceof Array ? c : [c])
            }, d.stickItemXY = function(a, c, e) {
                e = e || [];
                var f, g, h, i, j, k, l, m, n = [];
                for (var o in e) f = e[o], g = d._default(f, "$bottomContainer", b("body")), h = d._default(f, "mode"), i = d._default(f, "offsetTop", 0), j = d._default(f, "offsetBottom", 0), k = d._default(f, "minWidth", 0), l = d._default(f, "maxWidth", "infinity"), m = d._default(f, "static", !1), "next" === g ? (h = h || "margin", g = b(c).next()) : "parent" !== g && g || (h = h || "padding", g = b(c).parent()), m ? n.push({
                    source: "sticky",
                    alias: "static",
                    minWidth: k,
                    maxWidth: l,
                    bottomContainer: g
                }) : (n.push({
                    source: "sticky",
                    alias: "top",
                    minWidth: k,
                    maxWidth: l,
                    offsetTop: i,
                    offsetBottom: j,
                    bottomContainer: g,
                    mode: h
                }), n.push({
                    source: "sticky",
                    alias: "fixed",
                    minWidth: k,
                    maxWidth: l,
                    offsetTop: i,
                    offsetBottom: j,
                    bottomContainer: g,
                    mode: h
                }), n.push({
                    source: "sticky",
                    alias: "bottom",
                    minWidth: k,
                    maxWidth: l,
                    offsetTop: i,
                    offsetBottom: j,
                    bottomContainer: g,
                    mode: h
                }));
                d.addItem(a, b(c), n)
            }, d.processStickyItemRange = function(a, c) {
                c = c || {};
                var e = d._default(c, "bottomContainer", b("body")),
                    f = (d._default(c, "mode"), d._default(c, "offsetTop", 0)),
                    g = d._default(c, "offsetBottom", 0),
                    h = parseInt(a.css("margin-top")) + a.height() + parseInt(a.css("margin-bottom"));
                "border-box" === a.css("box-sizing") && (h += parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom")));
                var i = parseInt(e.css("margin-top")) + e.height() + parseInt(e.css("margin-bottom"));
                "border-box" === e.css("box-sizing") && (i += parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom")));
                var j = Math.round(a.offset().top - parseInt(a.css("margin-top"))),
                    k = Math.round(e.offset().top + (i - h - g));
                switch (c.alias) {
                    case "top":
                        c.from = 0, c.to = j - f, c.css = {
                            position: "absolute",
                            top: j + "px"
                        }, c.itemHeight = h;
                        break;
                    case "fixed":
                        c.from = j - f, c.to = k, c.css = {
                            position: "fixed",
                            top: f + "px"
                        }, c.itemHeight = h;
                        break;
                    case "bottom":
                        c.from = k, c.css = {
                            position: "absolute",
                            top: k + f + "px"
                        }, c.itemHeight = h;
                        break;
                    case "static":
                        c.from = 0, c.css = {
                            position: "",
                            top: ""
                        }, c.itemHeight = 0
                }
                return c
            }, d.onResize = function() {
                d.winHeight = b(window).height(), d.docHeight = d.body.height(), d.docMiddle = Math.floor(d.docHeight / 2);
                var a = !1;
                for (var c in d.scrollLayout) {
                    var e, f, g, h = d.scrollLayout[c];
                    for (var i in h.rules) e = h.rules[i], f = d.isRuleInActiveWidthRange(e), a |= f, f && void 0 === e.from && (b(h.element).css("position", ""), b(h.element).css("top", ""), e.bottomContainer && e.bottomContainer.css("margin-top", ""), g = d._default(e, "source"), "sticky" === g && (h.rules[i] = d.processStickyItemRange(h.element, e)))
                }
                return a && (d.scrollLayout = d.scrollLayout, setTimeout(function() {
                    d.onScroll(!0)
                }, 0)), !0
            }, d.getProgress = function(a, b) {
                var c = a / b;
                return {
                    offset: a,
                    length: b,
                    relative: c,
                    left: b - a,
                    leftRelative: 1 - c
                }
            }, d.getTransitionFloatValue = function(a, b, c) {
                return 0 >= c ? a : c >= 1 ? b : a + (b - a) * c
            }, d.getTransitionIntValue = function(a, b, c) {
                return Math.round(d.getTransitionFloatValue(a, b, c))
            }, d.hashColor2rgb = function(a) {
                var b = a.match(/^#([0-9a-f]{3})$/i);
                return b ? [17 * parseInt(b[1].charAt(0), 16), 17 * parseInt(b[1].charAt(1), 16), 17 * parseInt(b[1].charAt(2), 16)] : (b = a.match(/^#([0-9a-f]{6})$/i)) ? [parseInt(b[1].substr(0, 2), 16), parseInt(b[1].substr(2, 2), 16), parseInt(b[1].substr(4, 2), 16)] : [0, 0, 0]
            }, d.rgb2HashColor = function() {
                var a, b, c = "#";
                for (var d in arguments) a = arguments[d], b = a.toString(16), 16 > a && (b = "0" + b), c += b;
                return c
            }, d.getTransitionColorValue = function(a, b, c) {
                if (0 >= c) return a;
                if (c >= 1) return b;
                var e = d.hashColor2rgb(a),
                    f = d.hashColor2rgb(b),
                    g = d.getTransitionIntValue(e[0], f[0], c),
                    h = d.getTransitionIntValue(e[1], f[1], c),
                    i = d.getTransitionIntValue(e[2], f[2], c);
                return d.rgb2HashColor(g, h, i)
            }, d.getTransitionValue = function(a, b, c) {
                if (0 >= c) return a;
                if (c >= 1) return b;
                var e = 0;
                if (d._isNumber(a) && d._isNumber(b)) return d.getTransitionFloatValue(a, a, c);
                var f = /(\d*\.\d+)|(\d+)|(#[0-9a-f]{6})|(#[0-9a-f]{3})/gi,
                    g = ("" + b).match(f);
                return ("" + a).replace(f, function(a, b, f, h, i) {
                    var j = g[e];
                    return e++, f && f.length ? /\d*\.\d+/.test(j) ? d.getTransitionFloatValue(parseFloat(a), parseFloat(j), c) : d.getTransitionIntValue(parseInt(a), parseInt(j), c) : b && b.length ? d.getTransitionFloatValue(parseFloat(a), parseFloat(j), c) : h && h.length || i && i.length ? d.getTransitionColorValue(a, j, c) : a
                })
            }, d.onScroll = function(a) {
                var b = d.body.scrollTop();
                if (!a && b === d.scrollTop) return !1;
                var c = d.scrollTop,
                    e = d.direction;
                d.scrollTop = b, d.scrollBottom = b + d.winHeight, d.scrollCenter = b + Math.floor(d.winHeight / 2), d.direction = b - c;
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = !(d.direction === e || d.direction < 0 && 0 > e || d.direction > 0 && e > 0);
                for (k in d.scrollLayout) {
                    for (f = d.scrollLayout[k], g = f.rules.length, h = [], i = [], j = [], l = 0; g > l; l++) o = f.rules[l], p = d._default(o, "minWidth", 0), q = d._default(o, "maxWidth", "infinity"), r = "self" === f.container ? f.element : f.container, o.checkin = d.isRuleActive(o, f.element, r), o["class"] = o["class"] || "scroll-pos-" + o.alias + " window-width-" + p + "-to-" + q, o.checkin ? (j.push(l), o.isActive || (o.isActive = !0, h.push(l))) : o.isActive && (o.isActive = !1, i.push(l)), f.rules[l] = o;
                    for (n = 0; n < i.length; n++) l = i[n], o = f.rules[l], f.element.removeClass(o["class"]), o.cssOnScroll && (m = o.length || 0, o.cssOnScroll(f.element, b > c ? m : 0, m, o)), o.onScroll && (m = o.length || 0, o.onScroll(f.element, b > c ? m : 0, m, o)), o.onCheckOut && o.onCheckOut(f.element, o), o.onTopOut && c > b ? o.onTopOut(f.element, o) : o.onBottomOut && b > c && o.onBottomOut(f.element, o);
                    for (n = 0; n < h.length; n++) l = h[n], o = f.rules[l], o.css && f.element.css(d.extendCssWithPrefix(o.css)), o.addClass && f.element.addClass(o.addClass), o.removeClass && f.element.removeClass(o.removeClass), f.element.addClass(o["class"]), s = d._default(o, "bottomContainer"), t = d._default(o, "mode"), u = d._default(o, "itemHeight"), s && t && u && s.css(t + "-top", u + "px"), o.onCheckIn && o.onCheckIn(f.element, o), o.onTopIn && b > c ? o.onTopIn(f.element, o) : o.onBottomIn && c > b && o.onBottomIn(f.element, o), o.length = o.checkin.length;
                    for (n = 0; n < j.length; n++) l = j[n], o = f.rules[l], o.cssOnScroll && o.cssOnScroll(f.element, o.checkin.offset, o.checkin.length, o), o.onScroll && o.onScroll(f.element, o.checkin.offset, o.checkin.length, o), v && o.onDirectionChanged && o.onDirectionChanged(f.element, d.direction, o);
                    d.scrollLayout[k] = f
                }
            }, d.detectCSSPrefix = function() {
                var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (window.getComputedStyle) {
                    var b = window.getComputedStyle(document.body, null);
                    for (var c in b)
                        if (d.theCSSPrefix = c.match(a) || +c === c && b[c].match(a), d.theCSSPrefix) break;
                    if (!d.theCSSPrefix) return void(d.theCSSPrefix = d.theDashedCSSPrefix = "");
                    d.theCSSPrefix = d.theCSSPrefix[0], "-" === d.theCSSPrefix.slice(0, 1) ? (d.theDashedCSSPrefix = d.theCSSPrefix, d.theCSSPrefix = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[d.theCSSPrefix]) : d.theDashedCSSPrefix = "-" + d.theCSSPrefix.toLowerCase() + "-"
                }
            }, d.cssPrefix = function(a) {
                return d.theDashedCSSPrefix + a
            }, d.extendCssWithPrefix = function(a) {
                var c, e, f, g, h, i = {};
                for (c in a) e = /^-(moz-|webkit-|o-|ms-)?/i, f = c.match(e), g = c.slice(1), f && !f[1] && (h = a[c], i[g] = h, i[d.cssPrefix(g)] = h, delete a[c]);
                return b.extend(a, i), a
            }, d.now = Date.now || function() {
                return +new Date
            }, d.getRAF = function() {
                var a = window.requestAnimationFrame || window[d.theCSSPrefix.toLowerCase() + "RequestAnimationFrame"],
                    b = d.now();
                return a || (a = function(a) {
                    var c = d.now() - b,
                        e = Math.max(0, 1e3 / 60 - c);
                    return window.setTimeout(function() {
                        b = d.now(), a()
                    }, e)
                }), a
            }, d.getCAF = function() {
                var a = window.cancelAnimationFrame || window[d.theCSSPrefix.toLowerCase() + "CancelAnimationFrame"];
                return (d.isMobile || !a) && (a = function(a) {
                    return window.clearTimeout(a)
                }), a
            }, d.animLoop = function() {
                d.onScroll(), d.animFrame = window.requestAnimFrame(d.animLoop)
            }, d.init = function(a) {
                return d.isInitialized ? !1 : (b.extend(d.options, a), d.isMobile = d._default(d.options, "isMobile", /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)), d.detectCSSPrefix(), d.body = b(d.options.body), window.requestAnimFrame = d.getRAF(), window.cancelAnimFrame = d.getCAF(), d.timesCalled = 0, b(document).ready(function() {
                    b(window).resize(d.onResize).resize(), d.animLoop()
                }), void(d.isInitialized = !0))
            }, d.destroy = function() {
                window.cancelAnimFrame(d.animFrame)
            }, d.factorySticky = function(a, b, c) {
                return c = c || a[0].tagName + "_" + Object.keys(d.scrollLayout).length, d.stickItemXY(c, a, b instanceof Array ? b : [b]) ? c : !1
            }, c && (b.scroolly = d, b.fn.scroolly = function(a, b, c) {
                return d.factory(this, a, b, c), this
            }, b.fn.scroollySticky = function(a, b) {
                return d.init(), this.length ? d.factorySticky(this, a, b) : !1
            }), d
        }),
        function(a) {
            jQuery.fn.teslalign = function(b) {
                var b = a.extend({
                    children: !1,
                    items: !1
                }, b);
                b = a.extend({
                    children: !1,
                    items: !1
                }, b);
                var c = function() {
                    if (b.children && b.items) {
                        var c = b.children,
                            d = b.items;
                        a(this).each(function() {
                            for (var b = a(this), e = b.find(c), f = e.length, g = 0, h = 0, i = []; f >= g; g++) {
                                if (h == d || g == f) {
                                    for (var j = 0, k = 0; k <= i.length; k++) {
                                        var l = e.eq(i[k - 1]);
                                        l.height() > j && (j = l.height())
                                    }
                                    for (var k = 0; k <= i.length; k++) e.eq(i[k - 1]).height(j);
                                    h = 0, i = []
                                }
                                i.push(g), h++
                            }
                        })
                    } else console.log("Не указаны свойства для плагина teslalign")
                };
                return this.each(c)
            }
        }(jQuery), $(document).ready(function() {
            fullscreen(), mapSize(), initGallery(), goGallery(0, 0), initServiceSlider(), initMap(), stickyFooter(), autoCloseFilter(), sliderActiv(), setting(), setSlideTitle(), styleMenu(), $(".cart").length && cart(), $(".loader").addClass("loader--hidden"), $(".blocks").on("mouseenter", ".block", function() {
                $(this).find(".block__popup").slideDown()
            }).on("mouseleave", ".block", function() {
                $(this).find(".block__popup").fadeOut()
            }), $(".product__img, .product__link--increase").fancybox(), $(".catalog__in").teslalign({
                children: ".catalog__item",
                items: 4
            }), $(".menu__item").on("click", function() {
                styleMenu()
            }), $("body").on("click", ".hide", function() {
                return !1
            }), $(".scrolling").scroolly([{
                to: "doc-top + 100el = vp-top",
                direction: 1,
                css: {
                    "-transition": "none",
                    position: "relative",
                    top: "",
                    width: "100%"
                },
                removeClass: "fix",
                onCheckIn: function(a, b) {
                    cheeckMenu()
                }
            }, {
                direction: 1,
                from: "doc-top + 100el = vp-top",
                css: {
                    "-transition": "none",
                    position: "fixed",
                    top: "0px",
                    width: "100%"
                },
                addClass: "fix",
                onCheckIn: function(a, b) {
                    cheeckMenu()
                }
            }, {
                to: "doc-top + 100el = vp-top",
                direction: -1,
                css: {
                    "-transition": "none",
                    position: "relative",
                    top: "",
                    width: "100%"
                },
                removeClass: "fix",
                onCheckIn: function(a, b) {
                    cheeckMenu()
                }
            }, {
                direction: -1,
                from: "doc-top + 100el = vp-top",
                css: {
                    "-transition": "none",
                    position: "fixed",
                    top: "0px",
                    width: "100%"
                },
                addClass: "fix",
                onCheckIn: function(a, b) {
                    cheeckMenu()
                }
            }], $(".catalog")), $("body").hasClass("goslider") || $(".menu").onePageNav({
                currentClass: "menu__item--current",
                changeHash: !0,
                scrollThreshold: .1
            }), $("select").styler({
                onSelectOpened: function() {
                    $(this).find(".jq-selectbox__dropdown").jScrollPane({
                        verticalGutter: 0
                    })
                }
            }), $(".b_link").on("click", function() {
                var a = $(this),
                    b = a.index() + 1,
                    c = a.parents(".caroufredsel_wrapper").siblings(".services-screen__nav").find("a");
                c.eq(b).trigger("click")
            }), $('input[type="tel"]').inputmask({
                mask: "+7 (999) 999-99-99",
                placeholder: " ",
                showMaskOnHover: !1
            }), $("body").find(".roll").on("click", function() {
                var a = $(this);
                openFilter(a)
            }), $("body").on("scroll", function() {
                autoCloseFilter()
            }), $(".count").on("click", ".purchase__control--minus", function() {
                var a = $(this).siblings(".purchase__quantity").find("input"),
                    b = parseFloat(a.val()) - 1;
                b > 0 && a.val(b)
            }).on("click", ".purchase__control--plus", function() {
                var a = $(this).siblings(".purchase__quantity").find("input"),
                    b = parseFloat(a.val()) + 1;
                b > 999 ? a.val(999) : a.val(b)
            }), $(".purchase__quantity").find("input").on("keyup keypress keydown change", function() {
                this.value.match(/[^0-9]/g) && (this.value = this.value.replace(/[^0-9]/g, ""))
            }).on("change", function() {
                var a = $(this),
                    b = parseFloat(a.val());
                b > 999 && a.val(999)
            }), $("body").find("purchase__control"), $("body").find(".open-cart").on("click", function() {
                var a = 0;
                SimpleBasket.getData(function(b) {
                    return a = $(b.items).size(), 0 == a ? !1 : ($("body").find(".cart").addClass("cart--open"), $("body").find(".fill").addClass("open"), $("body").css({
                        overflow: "hidden"
                    }), void 0)
                })
            }), $("body").find(".close-cart").on("click", function() {
                $("body").find(".cart").removeClass("cart--open"), $("body").find(".fill").removeClass("open"), $("body").css({
                    overflow: "visible"
                })




            }), $("body").find(".open-popup").on("click", function() {
                $(this).hasClass("hide") || ($("body").find(".popup").addClass("popup--open"), $("body").css({
                    overflow: "hidden"
                }))
            }), $("body").find(".open-popup2").on("click", function() {
                $("body").find(".popup2").addClass("popup--open"), $("body").css({
                    overflow: "hidden"
                })
            }), $("body").find(".close-popup").on("click", function() {
                $("body").find(".popup").removeClass("popup--open"), (!$(".screen").length || $("body").hasClass("noslider")) && $("body").css({
                    "overflow-y": "visible"
                })
            }),




             $("body.goslider").find(".screen").length ? $("body.goslider").on("mousewheel", function(a, b, c, d) {
                $(this).hasClass("body--scrolling") || scrollMainSlider(a, b, c, d)
            }) : $("body").on("mousewheel", function() {
                styleMenu()
            }), $("body").find(".switch").on("click", function() {
                var a = $(this).find(".switch__item"),
                    b = $(this).parent().find(".switch-title--left"),
                    c = $(this).parent().find(".switch-title--right"),
                    d = $(this).parent().siblings(".blocks").find(".popup-block");
                a.toggleClass("switch__item_right"), b.toggleClass("switch-title--disable"), c.toggleClass("switch-title--disable"), d.toggleClass("popup-block--hidden")
            }), $("body").find(".switch-title").on("click", function() {
                var a = $(this),
                    b = a.siblings(".switch-title"),
                    c = $(this).siblings(".switch").find(".switch__item"),
                    d = $(this).parent().siblings(".blocks").find(".popup-block");
                a.hasClass("switch-title--disable") && (a.toggleClass("switch-title--disable"), b.toggleClass("switch-title--disable"), c.toggleClass("switch__item_right"), d.toggleClass("popup-block--hidden"))
            }), $(".slider__nav--prev").on("click", function() {
                prevGallery($(this).parents("section").find(".slider"))
            }), $(".slider__nav--next").on("click", function() {
                nextGallery($(this).parents("section").find(".slider"))
            }), $(".clients .screen_nav__pin").on("click", function() {
                var a = $(this).index(),
                    b = $(this).parents("section").find(".slider");
                goGallery(a, b, 500)
            }), $(".navigation").on("click", ".navigation__pin", function() {
                var a = $(this),
                    b = a.index();
                $("body").hasClass("body--scrolling") || mainSlider(a, b)
            }), $("body").hasClass("goslider") && !$(this).hasClass("menu__item--catalog") && $(".menu").on("click", ".menu__item", function() {
                var a = $(this).index(),
                    b = $("body").find(".navigation__pin").eq(a);
                return $("body").hasClass("body--scrolling") || (0 >= a ? $(this) = $("body").find(".navigation__pin").eq(1) : $(this).hasClass("menu__item--catalog") && $(this).find("a").trigger("click"), $(this).addClass("menu__item--current").siblings().removeClass("menu__item--current"), mainSlider(b, a)), !1
            }), $(".intro-screen__next").on("click", function() {
                var a = 1,
                    b = $("body").find(".navigation__pin").eq(1);
                $("body").hasClass("body--scrolling") || mainSlider(b, a)
            }), window.onresize = function() {
                fullscreen(), mapSize(), stickyFooter(), sliderActiv(), setting(), $(".cart").length && cart(), $("body.goslider").find(".screen").length && $("body.goslider").on("mousewheel", function(a, b, c, d) {
                    $(this).hasClass("body--scrolling") || scrollMainSlider(a, b, c, d)
                })
            }
        }), $(document).scroll(function() {
            autoCloseFilter()
        });
    var cheekFilter = !0;
