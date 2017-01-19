

// Лоудер
$(document).ready(setTimeout(function() {
    $(".loader").addClass("loader_hidden");}, 1000)
);

$(document).ready(function() {

// Навигация по слайдам
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'services', 'projects', 'clients', 'partners', 'contacts'],
    });

// Открытие попапов
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
    }),

// Закрытие попапов
    $('body').find('.popup_close').on('click', function() {
        $('body').find('.popup').removeClass('active')
    }),

    $('select').styler({
        onSelectOpened: function() {
            $(this).find('.jq-selectbox__dropdown').jScrollPane({
                verticalGutter  : 0,
            });
        }
    }),

    $('input[type="tel"]').inputmask({
        mask: '+7 (999) 999-99-99',
        placeholder: ' ',
        showMaskOnHover: false
    }),

// Переключатель в форме Связаться
    $('body').find('.switch').on('click', function() {
        var $switcher = $(this).find('.switch__item'),
        $titleLeft = $(this).parent().find('.switch-title_left'),
        $titleRight = $(this).parent().find('.switch-title_right'),
        $forms = $(this).parent().siblings('.blocks').find('.popup-block');
        $switcher.toggleClass('switch__item_right');
        $titleLeft.toggleClass('switch-title_disable');
        $titleRight.toggleClass('switch-title_disable');
        $forms.toggleClass('popup-block_hidden');
    }),
    $('body').find('.switch-title').on('click', function() {
        var $this = $(this),
        $secondTitle = $this.siblings('.switch-title'),
        $switcher = $(this).siblings('.switch').find('.switch__item'),
        $forms = $(this).parent().siblings('.blocks').find('.popup-block');
        if ($this.hasClass('switch-title_disable')) {
            $this.toggleClass('switch-title_disable');
            $secondTitle.toggleClass('switch-title_disable');
            $switcher.toggleClass('switch__item_right');
            $forms.toggleClass('popup-block_hidden');
        }
    });
});



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
    });
