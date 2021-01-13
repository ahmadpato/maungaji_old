! function e(t, a, o) {
    function i(s, r) {
        if (!a[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!r && l) return l(s, !0);
                if (n) return n(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var c = a[s] = {
                exports: {}
            };
            t[s][0].call(c.exports, function(e) {
                var a = t[s][1][e];
                return i(a ? a : e)
            }, c, c.exports, e, t, a, o)
        }
        return a[s].exports
    }
    for (var n = "function" == typeof require && require, s = 0; s < o.length; s++) i(o[s]);
    return i
}({
    1: [function(e, t, a) {
        "use strict";
        e("./modules/header.js"), e("./modules/footer.js"), e("./modules/blog.js"), e("./modules/about.js"), e("./modules/user-review.js"), e("./modules/navigation.js"), e("./modules/navigation.larismanis.js"), e("./modules/services.js"), e("./modules/faq.js"), e("./modules/gallery.js"), e("./modules/promo-banner.js"), e("./modules/gallery.js"), e("./modules/how-to-use.js"), e("./modules/talent-story.js"), e("./modules/join-frame.js"), e("./modules/career.js"), e("./views/gosend/join.js"), e("./views/goauto-join.js"), e("./views/gobox.js"), e("./views/goresto.js"), e("./views/gopoints.js"), e("./views/gomed-join.js"), e("./views/gosend-join.js"), e("./views/gosend-join-larismanis.js"), e("./views/govideo.js"), e("./views/gocar.js"), e("./views/gofood-updatemenu.js"), e("./views/ramadhan/gopoint.js"), e("./views/goclean.js"), e("./views/golife.js"), e("./views/gotix.js"), e("./views/gomassage.js"), e("./views/goglam.js");
        var o = function() {
            this.loadComplete = function() {
                var e = $("body");
                $(window).on("load", function() {
                    e.removeClass("fixed--body"), e.find(".loader--wrapper").fadeOut(500)
                })
            }
        };
        $(function() {
            var e = new o;
            e.loadComplete()
        })
    }, {
        "./modules/about.js": 2,
        "./modules/blog.js": 3,
        "./modules/career.js": 4,
        "./modules/faq.js": 5,
        "./modules/footer.js": 6,
        "./modules/gallery.js": 7,
        "./modules/header.js": 8,
        "./modules/how-to-use.js": 9,
        "./modules/join-frame.js": 10,
        "./modules/navigation.js": 11,
        "./modules/navigation.larismanis.js": 12,
        "./modules/promo-banner.js": 13,
        "./modules/services.js": 14,
        "./modules/talent-story.js": 15,
        "./modules/user-review.js": 16,
        "./views/goauto-join.js": 17,
        "./views/gobox.js": 18,
        "./views/gocar.js": 19,
        "./views/goclean.js": 20,
        "./views/gofood-updatemenu.js": 21,
        "./views/goglam.js": 22,
        "./views/golife.js": 23,
        "./views/gomassage.js": 24,
        "./views/gomed-join.js": 25,
        "./views/gopoints.js": 26,
        "./views/goresto.js": 27,
        "./views/gosend-join-larismanis.js": 28,
        "./views/gosend-join.js": 29,
        "./views/gosend/join.js": 30,
        "./views/gotix.js": 31,
        "./views/govideo.js": 32,
        "./views/ramadhan/gopoint.js": 33
    }],
    2: [function(e, t, a) {
        function o() {
            var e = $("#golife").find(".img-container-2");
            e.slick({
                infinite: !0,
                speed: 500,
                autoplay: !0,
                slidesToScroll: 1,
                arrows: !1,
                slidesToShow: 1,
                initialSlide: 0,
                dots: !0
            })
        }
        $(function() {
            var e = $("#js-about-video"),
                t = $("#js-play-video"),
                a = $("#js-video-cover"),
                i = $("#OurValuesSlider"),
                n = '<div id="js-about-video-close" class="video-close"></div>',
                s = 'frameborder="0" allowfullscreen',
                r = '<iframe src="' + e.data("src") + '"' + s + "></iframe>" + n,
                l = function() {
                    var o = $("#js-about-video-close");
                    o.click(function() {
                        e.empty(), e.toggle(), t.toggle(), a.toggle()
                    })
                };
            t.click(function() {
                e.html(r), e.toggle(), a.toggle(), t.toggle(), l()
            }), i.slick({
                infinite: !1,
                slidesToShow: 1,
                accessibility: !0,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                prevArrow: $("#arrow-prev"),
                nextArrow: $("#arrow-next")
            }), i.on("afterChange", function(e, t, a) {
                2 === a ? $("#arrow-next").addClass("disabled") : $("#arrow-next").removeClass("disabled"), 0 === a ? $("#arrow-prev").addClass("disabled") : $("#arrow-prev").removeClass("disabled")
            }), o()
        })
    }, {}],
    3: [function(e, t, a) {
        var o = window.location.host,
            i = window.location.hash;
        if (i) {
            var i = i.replace("#", "").toUpperCase(),
                n = $("select#services option:contains(" + i + ")").val();
            $("#blog--listing").hide(), $("select#services").val(n), setTimeout(function() {
                $("select#services").change(), $("#blog--listing").show(), console.log("a")
            }, 1e3)
        }
        var s = function() {
            var e = this,
                t = $(".load--more");
            this.dataPostType = t.length ? t.data("post-type") : $("#services").data("filter"), this.dataLayout = t.data("layout"), this.point = 10, this.i = 1, this.waitLoad = !1, this.limit = 10, this.data = [], this.nextUrl = null, this.get = function(a, o, i) {
                var n = "";
                n = "data" === o ? "post" : o;
                var s, r = API_ENDPOINT("post/"),
                    l = r + "&limit=10&offset=10";
                s = null !== this.nextUrl ? this.nextUrl + i : l + i, $.ajax({
                    url: s,
                    method: "GET",
                    success: function(o) {
                        e.data = o, a(e.data), e.nextUrl = r + "&limit=10&offset=" + (e.data.meta.offset + e.data.meta.limit), e.waitLoad = !1, t.find("p").text("MEMUAT BLOG");
                        var i = $(".post-item").length;
                        console.log(i), null === e.data.meta.next ? t.hide() : t.show()
                    },
                    error: function(e) {
                        console.log(e)
                    }
                })
            }
        };
        s.prototype.appendData = function() {
            var e = this;
            $(".load--more").on("click", function() {
                var t = $(this).data("media");
                e.waitLoad === !1 && (e.waitLoad = !0, $(this).find("p").text("MEMUAT BLOG"), e.loadMore(e.dataPostType, e.dataLayout, t))
            })
        }, s.prototype.__setData = function(e, t, a) {
            var i = "";
            return $.each(e.objects, function(e, n) {
                "post" === t || "data" === t ? i += '<div class="post-item" data-service=' + n.service[1].toLowerCase() + '><div class="pure-g"><div class="service--logo"></div><div class="pre--title"><p class="post--type">' + n.categories[0].name + '</p><p class="service">' + n.service[1] + '</p><p class="time">' + n.published_at + '</p></div></div><div class="pure-g"><h3 class="post--title"><a href="/blog/' + n.slug + '">' + n.title + "</a></h3>" + (n.featured_image_url.length ? '<img class="post--image" src=' + n.featured_image_url + " alt=" + n.title + ">" : "") + '<p class="post--abstract">' + n.excerpt + '</p><a href="/blog/' + n.slug + '" class="read--more">Selanjutnya</a></div></div>' : "careerpost" === t ? i += '<div class="post-item"><div class="pure-g"><div class="pre--title"><p class="post--type">' + n.categories[0].name + '</p><p class="service">' + n.division + '</p><p class="time">' + n.published_at + '</p></div></div><div class="pure-g"><h3 class="post--title"><a href="/blog/' + n.slug + '">' + n.title + "</a></h3>" + (n.featured_image_url.length ? '<img class="post--image" src=' + n.featured_image_url + " alt=" + n.title + ">" : "") + '<p class="post--abstract">' + n.excerpt + '</p><a href="/blog/' + n.slug + '" class="read--more">Selanjutnya</a><div class="post--share"><div class="share--on"><span>Bagikan</span></div><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + o + "/blog/" + n.slug + '/" class="fa fa-facebook socmed"></a><a target="_blank" href="https://twitter.com/home?status=http%3A//' + o + "/blog/" + n.slug + '/" class="fa fa-twitter socmed"></a></div></div></div>' : "careerpost" === t && "career-index" === a && (i += '<div class="pure-u-1 pure-u-md-1-3" data-service="gojek"><a href="/career/blog/' + n.slug + '"><div class="content"><div class="blog-card-title"><p>' + n.categories[0].name + '</p><h4><a href="/career/blog/' + n.slug + '">' + n.title + '</a></h4></div><div class="read--more"><a href="/career/blog/' + n.slug + '">Selanjutnya</a></div>' + (n.featured_image_url.length ? '<div class="blog-card-img" style="background-image: url(' + n.featured_image_url + ')"></div>' : '<div class="blog-card-img" style="background-image: url(' + n.featured_image + ')"></div>') + "</div></a></div>")
            }), i
        }, s.prototype.__setBanner = function(e) {
            var t = "";
            return $.each(e.sidebar_banners, function(e, a) {
                t += '<a href="' + a.url + '" class="sidebar--link"><img src="' + a.desktop + '" alt="' + a.title + '"></a>'
            }), t
        }, s.prototype.loadMore = function(e, t, a) {
            var o = this,
                i = $("select#services").val(),
                n = $("select#categories").val(),
                s = null;
            s = 1 == a ? s = "&categories__name__iexact=press%20release" : "all" === i && "all" === n ? "" : "&service__id=" + i + "&categories__id=" + n + "&offset=0", this.get(function(a) {
                $("#blog--listing").append(o.__setData(a, e, t))
            }, e, params())
        }, s.prototype.getDataSelect = function() {
            var e = this;
            e.servicesVal = "all", e.categoriesVal = "all", $("select#services").on("change", function() {
                e.servicesVal = $(this).val(), e.__filterData(e.servicesVal, e.categoriesVal, e.dataPostType)
            }), $("select#categories").on("change", function() {
                e.categoriesVal = $(this).val(), e.__filterData(e.servicesVal, e.categoriesVal, e.dataPostType)
            })
        }, s.prototype.__filterData = function(e, t, a) {
            var o = this,
                i = $("#blog--listing");
            i.addClass("active--filter");
            var n = function() {
                var o = "";
                return o = "data" === a ? "all" === e ? "&categories__name__iexact=data&offset=0" : "all" !== e ? "&service__id=" + e + "&categories__name__iexact=data&offset=0" : "&service__id=" + e + "&categories__name__iexact=data&offset=0" : "all" === e && "all" === t ? "&offset=0" : "all" !== e && "all" === t ? "&service__id=" + e + "&offset=0" : "all" === e && "all" !== t ? "&categories__id=" + t + "&offset=0" : "&service__id=" + e + "&categories__id=" + t + "&offset=0"
            };
            i.html('<p class="no--results">Memuat Data...</p>'), this.get(function(e) {
                e.objects ? i.html(o.__setData(e, a)) : i.html('<p class="no--results">Tidak Ada Hasil.</p>');
                var t = $(".special--banner").find("figure");
                e.sidebar_banners && (e.sidebar_banners.length ? t.html(o.__setBanner(e)) : t.html('<a href="/go-points" class="sidebar--link"><img src="/static/dist/img/sidebar-banner/banner-gopoint-1.jpg" alt="Banner GO-JEK"></a>')), setTimeout(function() {
                    i.removeClass("active--filter")
                }, 500)
            }, a, n())
        };
        var r = function() {
                this.getVal = function() {
                    $('[data-menu="menu-list"]').find("select").on("change", function() {
                        var e = $(this).val();
                        window.location.href = "/blog/" + e
                    })
                }, this.setActiveMenu = function() {
                    var e = $(".header-line"),
                        t = window.location.pathname,
                        a = t.split("/")[2],
                        o = e.find('[data-menu="menu-list"] select > option');
                    $.each(o, function(e, t) {
                        var o = $(t),
                            i = $(this).data("val");
                        i === a && o.prop("selected", !0)
                    })
                }
            },
            l = function() {
                this.breakWord = function() {
                    var e = $(".blog-list"),
                        t = e.find("h1.title, .text-content h3"),
                        a = e.find("h1.title").text().split(" "),
                        o = "";
                    $.each(a, function(e, t) {
                        o += t.length > 15 ? '<span class="word-break">' + t + "</span> " : 0 === t.indexOf("GO-") ? '<span class="inline">' + t + "</span> " : t + " "
                    }), t.html(o)
                }
            };
        $(function() {
            var e = new s,
                t = new r,
                a = new l;
            a.breakWord(), e.appendData(), e.getDataSelect(), t.getVal(), t.setActiveMenu(), $(".mobile").slick({
                slidesToShow: 3,
                initialSlide: 0,
                infinite: !1,
                prevArrow: "#custom-prev",
                nextArrow: "#custom-next",
                arrows: !1,
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        centerMode: !0,
                        centerPadding: "60px",
                        slidesToShow: 1,
                        arrows: !0
                    }
                }, {
                    breakpoint: 325,
                    settings: {
                        centerMode: !0,
                        centerPadding: "30px",
                        slidesToShow: 1,
                        arrows: !0
                    }
                }]
            }), $(".articles--feed .slider").slick({
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 3,
                infinite: !1,
                initialSlide: 1,
                prevArrow: "#feed-prev--desktop",
                nextArrow: "#feed-next--desktop",
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        initialSlide: 0,
                        centerMode: !0,
                        centerPadding: "60px",
                        slidesToShow: 1,
                        arrows: !0,
                        prevArrow: "#feed-prev--mobile",
                        nextArrow: "#feed-next--mobile"
                    }
                }, {
                    breakpoint: 325,
                    settings: {
                        initialSlide: 0,
                        centerMode: !0,
                        centerPadding: "30px",
                        slidesToShow: 1,
                        arrows: !0,
                        prevArrow: "#feed-prev--mobile",
                        nextArrow: "#feed-next--mobile"
                    }
                }]
            })
        })
    }, {}],
    4: [function(e, t, a) {
        "use_strict";
        var o = function() {
            var e = function() {
                    t(), a("#karir .search-options"), o(), i()
                },
                t = function() {
                    var e = $(".wrapper-grid"),
                        t = function(e, t) {
                            $(e).children("img").css({
                                transform: "translateX(-50%) scale(" + t + ")"
                            })
                        };
                    e.on("mouseover", function() {
                        t(this, 1.5)
                    }), e.on("mouseout", function() {
                        t(this, 1)
                    })
                },
                a = function(e) {
                    var t = $(e),
                        a = ($("#option-icon").find("i"), $("#job-search")),
                        o = $("#city-search"),
                        i = t.find("option:selected").data("name");
                    "position" == i ? ($('select[name="city"]').prop("disabled", !0), a.prop("disabled", !1), a.show(), o.hide()) : (a.prop("disabled", !0), $('select[name="city"]').prop("disabled", !1), o.show(), a.hide())
                },
                o = function() {
                    $(document).on("change", ".search-options", function() {
                        a(this)
                    })
                },
                i = function() {
                    $(window).on("scroll", function() {
                        var e = $(this).scrollTop(),
                            t = $("#activeNav");
                        e > 200 ? t.addClass("no--active") : t.removeClass("no--active")
                    })
                };
            return {
                init: e
            }
        }();
        $(function() {
            o.init()
        }), $("#submenu").on("click", function() {
            $("#contentSubmenu,#containerSubmenu,#iconDownSubmenu").toggleClass("active")
        }), $("#containerSubmenu").click(function(e) {
            var t = $(e.target);
            t.is("#contentSubmenu") || t.parents().is("#contentSubmenu") || $("#contentSubmenu,#containerSubmenu,#iconDownSubmenu").removeClass("active")
        })
    }, {}],
    5: [function(e, t, a) {
        var o = {
            header: "fa fa-plus fa-lg",
            activeHeader: "fa fa-minus fa-lg"
        };
        $(document).ready(function() {
            $(window).width() < 768 && ($("#faq-list-menu #faq-list-content").accordion({
                header: ".title-content",
                icons: o,
                heightStyle: "ul > ul",
                active: !0,
                collapsible: !0
            }), $("#faq-list-menu .detail-item").accordion({
                header: ".title-item",
                icons: o,
                heightStyle: "ul > ul",
                active: !0,
                collapsible: !0
            })), $("#landing-faq .out-warp").click(function() {
                var e = $(this),
                    t = e.data("attr");
                window.location = "faq-category?page=" + t
            }), $("#karir #landing-faq .out-warp").click(function() {
                var e = $(this),
                    t = e.data("attr");
                window.location = "/career/detail-list#" + t
            });
            var e = window.location.hash,
                t = e + "-box",
                a = e + "-content";
            $(t).addClass("active"), $(a).show(), $("#faq-list-menu .box").on("click", function() {
                var e = $(this),
                    t = e.data("tab");
                $("#faq-list-menu .box").removeClass("active"), e.addClass("active"), $("#faq-list-menu .content").hide(), $("#faq-list-menu #" + t + "-content").show()
            }), $("#faq-list-menu .category-akun div").removeClass("pure-u-lg-1-4"), $("#faq-list-menu .category-aplikasi div").removeClass("pure-u-lg-1-4");
            var i = $("#faq-detail .item").children();
            $(i).hide(), e.length ? $(e).show() : $("#faq-detail .item > div:first-child").show(), $("#faq-detail .faq-body img").addClass("pure-img"), $("#faq-detail .menu ul li").on("click", function() {
                var e = $(this),
                    t = e.data("tab");
                $(i).hide(), $("#" + t).show()
            }), $(document).ready(function() {
                var e = $("#faq-detail .faq-body");
                $.each(e, function(e, t) {
                    var a = $(t),
                        o = a.text().replace(/\s/g, "");
                    "None" === o && a.html("<p> Maaf konten tidak tersedia. Silakan tweet pertanyaan Anda dan mention @gojekindonesia untuk mendapatkan respon yang cepat </p>")
                })
            });
            var n = window.location.pathname,
                s = n.substring(1, n.length),
                r = s.split("/")[0];
            "" !== r && $(document).ready(function() {
                $("#faq-head option[value=" + r + "]").attr("selected", "selected")
            }), $("#faq-head #faqMobileMenu").change(function() {
                var e = $(this).find(":selected").val(),
                    t = window.location.host,
                    a = "http://" + t + "/" + e;
                window.location = a
            })
        })
    }, {}],
    6: [function(e, t, a) {
        ! function(e) {
            e("#accordion > li").click(function() {
                e(window).width() < 768 && (e(this).next().is(":visible") === !1 && e("#accordion ul").slideUp(300), e(this).next().slideToggle(300), e(this).find("i").toggleClass("fa-chevron-down"), e(this).find("i").toggleClass("fa-chevron-up"), e(this).find("ul").css("display", "inherit"))
            }), e("#accordion ul:eq(0)").show()
        }(jQuery);
        var o = {
            header: "fa fa-chevron-down",
            activeHeader: "fa fa-chevron-up"
        };
        $(window).resize(function() {
            if ($(window).width() < 768) $(".footer-accordion").accordion({
                header: ".title-content",
                icons: o,
                heightStyle: "ul > ul",
                active: !1,
                collapsible: !0
            });
            else {
                var e = $(".footer-accordion");
                "undefined" != typeof e.data("ui-accordion") && e.accordion("destroy")
            }
        }), $(document).ready(function() {
            $(window).width() < 768 && $(".footer-accordion").accordion({
                header: ".title-content",
                icons: o,
                heightStyle: "ul > ul",
                active: !1,
                collapsible: !0
            })
        })
    }, {}],
    7: [function(e, t, a) {
        var o = e("instafeed.js"),
            i = $("body").attr("id"),
            n = function(e, t, a) {
                var i = new o({
                    accessToken: t,
                    get: "user",
                    userId: a,
                    template: '<div class="pure-u-1 pure-u-md-1-3"><a href="{{link}}" target="_blank" class="ig--picture"><img src="{{image}}" /></a></div>',
                    resolution: "standard_resolution",
                    limit: 6,
                    target: e,
                    sortBy: "most-recent"
                });
                i.run()
            };
        $(function() {
            var e = $("#instafeed");
            e.length && ("gomart" === i ? n("instafeed", "2080258394.034725c.b7bcd58c5c274a3b877122d04519ec1c", "2080258394") : n("instafeed", "1367852158.1677ed0.1734e4a0218d49669a67b12a4c4093df", "1367852158"))
        });
        var s = $("#hashtag-insta").data("hashtag"),
            r = "https://www.instagram.com/explore/tags/" + s + "/?__a=1";
        s && $.getJSON(r, function(e) {
            var t = 0;
            $.each(e.tag.media.nodes, function(e, a) {
                t < 6 && $("#hashtag-insta[data-hashtag=" + s + "]").append('<div class="pure-u-1 pure-u-md-1-3"><a href="https://www.instagram.com/p/' + a.code + '/"><img src="' + a.thumbnail_src + '" /></a></div>'), t++
            })
        })
    }, {
        "instafeed.js": 34
    }],
    8: [function(e, t, a) {
        "use_strict";
        var o = function(e) {
                "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function() {
                    "loading" !== document.readyState && e()
                })
            },
            i = function(e, t) {
                for (var a = [], o = 0; o < t.length; o++) t[o] !== e && a.push(t[o]);
                return a
            },
            n = function(e) {
                this.sliderList = document.querySelectorAll(e)
            };
        n.prototype.__fadeSlider = function() {
            var e = this,
                t = 0,
                a = e.sliderList,
                o = a.length - 1;
            if (a.length) var n = setInterval(function() {
                t = t === o ? 0 : t + 1, a[t].style.opacity = 1;
                for (var e = i(a[t], a), s = 0; s < e.length; s++) e[s].style.opacity = 0;
                t === o && clearInterval(n)
            }, 3e3)
        }, n.prototype.__setSlider = function() {
            setTimeout(function() {
                var e = $("header.hero").outerHeight();
                $("header.hero").find(".slide--wrapper").height(e)
            }, 1e3)
        }, o(function() {
            var e = new n(".slide--wrapper ul > li");
            e.__fadeSlider(), e.__setSlider()
        })
    }, {}],
    9: [function(e, t, a) {
        ! function(e) {
            var t = e(".section-how-to-use .slider-image"),
                a = e(".section-how-to-use .slider"),
                o = e(".arrow-up"),
                i = e(".arrow-down"),
                n = e(".new-slide-phone"),
                s = e(".slide-content");
            n.each(function() {
                e(this).slick({
                    asNavFor: e(this).parent().parent().parent().find(".slide-content"),
                    arrows: !1
                })
            }), s.each(function() {
                e(this).slick({
                    asNavFor: e(this).parent().parent().parent().parent().find(".new-slide-phone"),
                    dots: !0,
                    prevArrow: '<div class="slide-prevArrow"><img src="https://www.go-jek.com/static/dist/img/arrow-white.svg" class="rotate-arrow"></div>',
                    nextArrow: '<div class="slide-nextArrow"><img src="https://www.go-jek.com/static/dist/img/arrow-white.svg"></div>',
                    dotsClass: "phoneSlide-dots"
                })
            }), s.each(function() {
                e(this).on("beforeChange", function() {
                    e(this).parent().find(".number > div").removeClass("active")
                })
            }), s.each(function() {
                e(this).on("afterChange", function(t, a, o) {
                    e(this).parent().find('.number > div[data-number="' + o + '"]').addClass("active")
                })
            }), a.slick({
                dots: !1,
                infinite: !0,
                speed: 1e3,
                adaptiveHeight: !0,
                slickPlay: !0,
                arrows: !0,
                vertical: !0,
                verticalSwiping: !0,
                accessibility: !0,
                asNavFor: ".section-how-to-use .slider-image",
                prevArrow: o,
                nextArrow: i,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1,
                        dots: !0
                    }
                }]
            }), t.slick({
                dots: !0,
                infinite: !0,
                speed: 1e3,
                adaptiveHeight: !0,
                slickPlay: !0,
                arrows: !0,
                vertical: !0,
                verticalSwiping: !0,
                accessibility: !0,
                asNavFor: ".section-how-to-use .slider",
                prevArrow: o,
                nextArrow: i,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1,
                        dots: !0
                    }
                }]
            }), a.on("beforeChange", function(t, a, o, i) {
                e('[data-slick-index="' + o + '"] .text-wrapper').css({
                    opacity: "0.0",
                    transition: "all 0.1s ease 0s"
                }), e('[data-slick-index="' + i + '"] .text-wrapper').css({
                    opacity: "0.0",
                    transition: "all 0.1s ease 0s"
                })
            }), a.on("afterChange", function(t, a, o) {
                e('[data-slick-index="' + o + '"] .text-wrapper').css({
                    opacity: "1.0",
                    transition: "all 0.3s ease 0s"
                })
            }), t.on("beforeChange", function(t, a, o, i) {
                e('[data-slick-index="' + o + '"] .text-wrapper').css({
                    opacity: "0.0",
                    transition: "all 0.1s ease 0s"
                }), e('[data-slick-index="' + i + '"] .text-wrapper').css({
                    opacity: "0.0",
                    transition: "all 0.1s ease 0s"
                })
            }), t.on("afterChange", function(t, a, o) {
                e('[data-slick-index="' + o + '"] .text-wrapper').css({
                    opacity: "1.0",
                    transition: "all 0.3s ease 0s"
                })
            })
        }(jQuery)
    }, {}],
    10: [function(e, t, a) {
        $(document).ready(function() {
            function e() {
                var e = $(window).width(),
                    t = function(e, t) {
                        var a = $(e);
                        a.length && a.find("iframe.join-iframe").height(t)
                    };
                e < 568 ? (t("#goride", 3100), t("#gocar", 4300), t("#gosend", 3e3), t("#gopoint", 3300), t("#gotix", 1700), t("#goglam", 1300), t("#goclean", 1300), t("#gobox", 3800), t("#gofood", 3200), t("#gomassage", 5850), t("#gomart", 3500), t("#gojek", 14750)) : e < 800 ? (t("#goride", 2200), t("#gocar", 3500), t("#gosend", 3570), t("#gopoint", 2e3), t("#gotix", 1500), t("#goglam", 1200), t("#goclean", 1200), t("#gobox", 2600), t("#gofood", 3600), t("#gomassage", 5550), t("#gomart", 3200), t("#gojek", 11200)) : e > 801 && (t("#goride", 2100), t("#gocar", 2800), t("#gosend", 2600), t("#gopoint", 2e3), t("#gotix", 1300), t("#goglam", 1200), t("#goclean", 1200), t("#gobox", 1650), t("#gofood", 2100), t("#gomassage", 4e3), t("#gomart", 2500), t("#gojek", 7370))
            }
            e(), $(window).resize(e)
        })
    }, {}],
    11: [function(e, t, a) {
        $(function() {
            function e() {
                p = !1, u = !1
            }

            function t() {
                p === !1 && u === !1 ? $("html").removeClass("overflow-y-hidden") : p !== !1 && u !== !1 || $("html").addClass("overflow-y-hidden")
            }
            var a = $(".navbar"),
                o = $("#joinButton"),
                i = $("#productButton"),
                n = $(".hamburger-menu"),
                s = $("#hamburger-btn-open"),
                r = $("#hamburger-btn-close"),
                l = $(".megamenu.product"),
                c = $(".megamenu.product .toggleClose"),
                d = $(".megamenu.join"),
                p = !1,
                u = !1,
                m = $(".megamenu.join .toggleClose"),
                h = $("#current-lang"),
                f = $("#language"),
                v = $("#close-lang"),
                g = $("#selectLang > div"),
                _ = $("#optionLanguage");
            $(document).ready(function() {
                $(window).scrollTop() > 0 && a.addClass("navbar-active"), $(window).scroll(function() {
                    $(window).scrollTop() > 10 ? a.addClass("navbar-active") : a.removeClass("navbar-active")
                })
            }), h.on("click", function() {
                f.addClass("active")
            }), v.on("click", function() {
                f.removeClass("active")
            }), v.on("click", function() {
                f.removeClass("active")
            }), $(document).click(function(e) {
                $(e.target).is(".select-lang, #current-lang > div") || f.removeClass("active")
            }), g.on("click", function() {
                var e = $(this).data("lang"),
                    t = $("form#language-swicher");
                _.val(e), t.find('input[name="language"]').val(e), t.submit()
            }), s.on("click", function() {
                n.fadeIn("slow")
            }), $("#newHam").on("click", function() {
                $("#newHam > div,#overlayMenuMobile,#overlayMenuMobile > .content-menu").toggleClass("active"), $(".accordion").removeClass("active"), $("#main-menu-list").removeClass("disactive")
            }), r.on("click", function() {
                n.fadeOut("slow")
            }), i.on("click", function() {
                u !== !1 && u ? u = !1 : (p = !1, u = !0), t(), $("#productButton").toggleClass("active"), a.addClass("navbar-active"), l.slideToggle("normal"), d.fadeOut("normal")
            }), c.on("click", function(a) {
                return a.preventDefault(), $("#productButton").removeClass("active"), l.slideToggle("normal"), $("body, html").removeClass("overflow-y-hidden"), e(), t(), !1
            }), o.on("click", function() {
                p !== !1 && p ? p = !1 : (u = !1, p = !0), t(), $("#productButton").removeClass("active"), a.addClass("navbar-active"), d.slideToggle("normal"), l.fadeOut("normal")
            }), m.on("click", function(a) {
                return a.preventDefault(), $("body, html").removeClass("overflow-y-hidden"), e(), t(), d.slideToggle("normal"), !1
            }), $("#hamburgerMenu_Layanan_new").on("click", function() {
                $("#main-menu-list").addClass("disactive"), $(".accordion").removeClass("active"), $("#sub-layanan-menu").addClass("active")
            }), $(".back-menu").on("click", function() {
                $(".accordion").removeClass("active"), $("#main-menu-list").removeClass("disactive")
            }), $("#hamburgerMenu_Gabung_new").on("click", function() {
                $("#main-menu-list").addClass("disactive"), $(".accordion").removeClass("active"), $("#sub-gabung-menu").addClass("active")
            }), $("#hamburgerMenu_Layanan").on("click", function() {
                $("#arrow-service").toggleClass("fa-chevron-down"), $(".hamburger.accordion.service").slideToggle("normal")
            }), $("#hamburgerMenu_Gabung").on("click", function() {
                $("#arrow-join").toggleClass("fa-chevron-down"), $(".hamburger.accordion.gabung").slideToggle("normal")
            }), $(".service_group").on("click", function() {
                var e = $(this).attr("data-group");
                $("#arrow-group[data-group=" + e + "]").toggleClass("rotate-down"), $(".service_name[data-services=" + e + "]").slideToggle("normal")
            })
        })
    }, {}],
    12: [function(e, t, a) {
        $(function() {
            var e = $("#joinButtonLarisManis"),
                t = $(".lm_btnGrandPrize"),
                a = $(".lm_btnDescription"),
                o = $(".lm_btnWeeklyPromo"),
                i = $(".lm_btnLeaderboard"),
                n = $(".lm_btnMekanisme"),
                s = $(".lm_btnSyaratKetentuan"),
                r = {
                    goToSection: function(e) {
                        $("html, body").animate({
                            scrollTop: $(e).offset().top
                        }, 1200)
                    }
                };
            e.on("click", function() {
                r.goToSection(".section-join-form")
            }), t.on("click", function() {
                r.goToSection("#grand-prize")
            }), a.on("click", function() {
                r.goToSection("#talent-story.description")
            }), o.on("click", function() {
                r.goToSection(".about.weeklypromo")
            }), i.on("click", function() {
                r.goToSection("#bg-as-seen-on.leaderboard")
            }), n.on("click", function() {
                r.goToSection(".how-it-works--wrapper.mekanisme")
            }), s.on("click", function() {
                r.goToSection("#syarat-ketentuan-wrapper")
            })
        })
    }, {}],
    13: [function(e, t, a) {
        $(document).ready(function() {
            $("#promo-banner .slider").slick({
                slidesToShow: 1,
                initialSlide: 0,
                infinite: !1,
                vertical: !0,
                verticalSwiping: !1,
                adaptiveHeight: !0,
                prevArrow: "#promo-banner .custom-nav #up",
                nextArrow: "#promo-banner .custom-nav #down",
                asNavFor: "#promo-banner .img-slide",
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1
                    }
                }]
            }), $("#promo-banner .img-slide").slick({
                slidesToShow: 1,
                arrows: !1,
                initialSlide: 0,
                infinite: !1,
                vertical: !0,
                asNavFor: "#promo-banner .slider",
                adaptiveHeight: !0,
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        vertical: !1
                    }
                }]
            }), $("#promo-banner .slider, #promo-banner .img-slide").on("afterChange", function(e, t, a) {
                2 === a ? $("#promo-banner .custom-nav #up").addClass("disabled") : $("#promo-banner .custom-nav #up").removeClass("disabled"), 0 === a ? $("#promo-banner .custom-nav #down").addClass("disabled") : $("#promo-banner .custom-nav #down").removeClass("disabled")
            });
            var e = -1;
            $("#promo-banner .slick-slide").each(function() {
                $(this).height() > e && (e = $(this).height()), $(this).height() < e && $(this).css("margin", Math.ceil((e - $(this).height()) / 2) + "px 0")
            })
        })
    }, {}],
    14: [function(e, t, a) {
        $(function() {
            var e = function(e) {
                var t = $('[data-target="' + e + '"]'),
                    a = function() {
                        t.find(".service-container").slick({
                            lazyLoad: "ondemand",
                            centerMode: !1,
                            infinite: !1,
                            speed: 500,
                            autoplay: !1,
                            arrows: !0,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            initialSlide: 0,
                            variableWidth: !0,
                            draggable: !0,
                            dragging: !0,
                            prevArrow: t.find(".js-service-prev"),
                            nextArrow: t.find(".js-service-next"),
                            responsive: [{
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }]
                        })
                    };
                a()
            };
            $(".services").each(function() {
                var t = $(this).data("target");
                e(t)
            })
        })
    }, {}],
    15: [function(e, t, a) {
        $(document).ready(function() {
            $("#talent-story .slider").slick({
                slidesToShow: 1,
                initialSlide: 0,
                infinite: !1,
                vertical: !0,
                verticalSwiping: !1,
                prevArrow: "#talent-story .custom-nav #up",
                nextArrow: "#talent-story .custom-nav #down",
                asNavFor: "#talent-story .img-slide",
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1,
                        dots: !0
                    }
                }]
            }), $("#talent-story .img-slide").slick({
                slidesToShow: 1,
                arrows: !1,
                initialSlide: 0,
                infinite: !1,
                vertical: !0,
                asNavFor: "#talent-story .slider",
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1
                    }
                }]
            }), $("#talent-story .slider, #talent-story .img-slide").on("afterChange", function(e, t, a) {
                2 === a ? $("#talent-story .custom-nav #up").addClass("disabled") : $("#talent-story .custom-nav #up").removeClass("disabled"), 0 === a ? $("#talent-story .custom-nav #down").addClass("disabled") : $("#talent-story .custom-nav #down").removeClass("disabled")
            });
            var e = $(".buy-ticket").find(".detail--text"),
                t = $(".buy-ticket").find(".img-slides");
            $(".buy-ticket").find(".img-slides").slick({
                arrows: !0,
                infinite: !1,
                vertical: !0,
                verticalSwiping: !0,
                prevArrow: ".buy-ticket .custom-nav #up",
                nextArrow: ".buy-ticket .custom-nav #down",
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1
                    }
                }]
            }), t.on("beforeChange", function(t, a, o, i) {
                e.removeClass("active-detail"), $(".buy-ticket").find("[data-slide=" + i + "]").addClass("active-detail")
            }), e.click(function() {
                var a = $(this),
                    o = a.data("slide");
                e.removeClass("active-detail"), a.addClass("active-detail"), t.slick("slickGoTo", o)
            })
        })
    }, {}],
    16: [function(e, t, a) {
        ! function(e) {
            var t = e(".section-user-review .slider");
            t.slick({
                infinite: !1,
                slidesToShow: 3,
                accessibility: !0,
                slidesToScroll: 3,
                arrows: !0,
                dots: !0,
                prevArrow: e(".arrow-prev"),
                nextArrow: e(".arrow-next"),
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        }(jQuery)
    }, {}],
    17: [function(e, t, a) {
        $(function() {
            function e() {
                var e = $("#form_score"),
                    t = $(".form-score"),
                    a = $(".form-reason-wrapper");
                t.click(function() {
                    var t = $(this).data("value");
                    nextValidation(), e.val(t), e.val() < 4 ? ($("#form_reason").removeClass("exception"), nextValidation(), a.removeAttr("hidden")) : (a.attr("hidden", !0), $("#form_reason").addClass("exception"), nextValidation())
                })
            }

            function t(e, t, a) {
                if ("changes" === e) {
                    nextValidation();
                    var o = $("#" + t);
                    null === a && (a = ""), "" === o.val() || null === o.val() ? "form_reason" === t && "service_area" === t || (o.addClass("error-input"), 0 === $("#mandatory_messages_" + t).length && o.after('<div class="error-messages" id="mandatory_messages_' + t + '"><i>Bidang ini tidak boleh kosong.</i></div>')) : ($("#email ") && o.removeClass("error-input"), $("#mandatory_messages_" + t).remove())
                }
            }

            function a(e, t) {
                $("html, body").animate({
                    scrollTop: e.offset().top - t
                }, 1e3)
            }

            function o() {
                endpoints = API_ENDPOINT("goauto-service-area-city/"), $.ajax({
                    url: endpoints,
                    type: "GET",
                    contentType: "application/json",
                    processData: !1,
                    success: function(e) {
                        var t = e.objects;
                        $.each(t, function(e, t) {
                            console.log(t.name), $("#service_area").append($("<option>", {
                                value: t.id,
                                text: t.name
                            }))
                        })
                    },
                    error: function(e, t, a) {
                        console.log("Error"), console.log(e), console.log(t), console.log(a)
                    }
                })
            }
            var i, n, s, r, l, c, d, p, u;
            i = $("form#goauto-form"), n = $("#goauto input[type=text], #goauto input[type=number], #goauto select"), c = $("#goauto button.next"), d = $("#goauto button.back"), s = $("#goauto [data-step=1]"), r = $("#goauto [data-step=2]"), c.click(function() {
                var e = $("section.join"),
                    t = $("#__step").val(),
                    o = nextValidation();
                o ? (s.addClass("hidden"), r.removeClass("hidden"), a(e, 200), $("#__step").val(parseInt(t) + 1), nextValidation()) : alertSlide("Harap mengisi semua bidang sebelum melanjutkan.")
            }), d.click(function() {
                var e = $("section.join"),
                    t = $("#__step").val();
                s.removeClass("hidden"), r.addClass("hidden"), a(e, 200), $("#__step").val(parseInt(t) - 1), nextValidation()
            }), $(document).ready(function() {
                $("#goauto").length && (e(), o())
            }), n.each(function() {
                var e = this.id;
                $("#" + e).blur(function() {
                    t("changes", e, null)
                })
            }), i.submit(function(e) {
                $(".uil-ring-css").show(), $("[data-wrap]").css({
                    opacity: ".25"
                });
                var t = $("#service_area").val(),
                    a = $("#service_area_city").val(),
                    o = $("#name").val(),
                    i = $("#gender").val(),
                    n = $("#phone").val(),
                    s = $("#no_ktp").val(),
                    r = $("#birth_place").val(),
                    c = $("#last_education").val(),
                    d = $("#status").val(),
                    u = $("#mother_name").val(),
                    m = $("#district").val(),
                    h = $("#uniform_size").val(),
                    f = $("#using_android").val(),
                    v = $("#maintenance_field").val(),
                    g = $("#address").val(),
                    _ = $("#city").val(),
                    y = $("#house_status").val(),
                    w = $("#monthly_income").val(),
                    b = $("#relatives").val(),
                    k = $("#history_job").val(),
                    x = $("#time_allocation").val(),
                    j = $("#join_reason").val(),
                    S = $("#info_from").val(),
                    C = $("#form_score").val(),
                    T = $("#form_reason").val();
                formJSON = {
                    service_area: t,
                    service_area_city: a,
                    name: o,
                    gender: i,
                    phone: n,
                    no_ktp: s,
                    birth_place: r,
                    last_education: c,
                    status: d,
                    mother_name: u,
                    uniform_size: h,
                    using_android: f,
                    district: m,
                    maintenance_field: v,
                    address: g,
                    city: _,
                    house_status: y,
                    monthly_income: w,
                    relatives: b,
                    history_job: k,
                    time_allocation: x,
                    join_reason: j,
                    info_from: S,
                    form_score: C,
                    form_reason: T,
                    "g-recaptcha-response": grecaptcha.getResponse()
                }, p = API_ENDPOINT("goauto-partner/"), l = JSON.stringify(formJSON), $.ajax({
                    url: p,
                    type: "POST",
                    contentType: "application/json",
                    data: l,
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "/go-auto/thankyou", $(".uil-ring-css").hide(), $("[data-wrap]").css({
                            opacity: "1.0"
                        })
                    },
                    error: function(e, t, a) {
                        200 === e.status && (window.top.location.href = "/go-auto/thankyou"), $(".uil-ring-css").hide(), $("[data-wrap]").css({
                            opacity: "1.0"
                        }), console.log("Error"), console.log(e), console.log(t), console.log(a)
                    }
                }), e.preventDefault()
            }), $("#phone").change(function() {
                var e = $(this).val();
                validatePhone(e) ? $("#mandatory_messages_phone_62").remove() : 0 === $("#mandatory_messages_phone_62").length && $(this).after('<div class="error-messages" id="mandatory_messages_phone_62"><i>Nomor Telepon tidak sesuai format (contoh +6281234567890)</i></div>')
            }), $("#goauto #service_area").change(function() {
                var e = $(this).val(),
                    t = API_ENDPOINT("goauto-service-area-city/") + e + u;
                $.ajax({
                    url: t,
                    type: "GET",
                    dataType: "json",
                    processData: !1,
                    beforeSend: function() {
                        $("#mandatory_messages_service_area_city").remove(), $("#service_area_city").empty().append("<option selected disabled></option>")
                    },
                    success: function(e) {
                        var t = e.cities;
                        console.log("here"), 0 === t.length ? ($("#service_area_city").addClass("exception"), $("#service_area_city").attr("disabled", !0), $("#service_area_city").attr("style", "border: 1px solid rgba(0, 0, 0, .25) !important;")) : ($("#service_area_city").removeClass("exception"), $("#service_area_city").attr("disabled", !1), $.each(t, function(e, t) {
                            console.log(t.kota__nama), $("#service_area_city").append($("<option>", {
                                value: t.id,
                                text: t.kota__nama
                            }))
                        }))
                    },
                    error: function(e, t, a) {
                        console.log("Error"), console.log(e.status), console.log(t), console.log(a)
                    }
                })
            })
        })
    }, {}],
    18: [function(e, t, a) {
        function o(e) {
            if ("business" === e) {
                $("#end-submit").html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>'), endpoint = API_ENDPOINT("gobox/business/");
                var t = $("#name").val(),
                    a = $("#categories").val(),
                    o = $("#title").val(),
                    i = $("#company").val(),
                    n = $("#industry").val(),
                    s = $("#phone").val(),
                    r = $("#email").val(),
                    l = $("#service_area").val();
                $("#shipping_purpose").val();
                formJSON = {
                    name: t,
                    title: o,
                    company: i,
                    industry: n,
                    phone: s,
                    email: r,
                    service_area: l,
                    category: a,
                    "g-recaptcha-response": grecaptcha.getResponse()
                }, formData = JSON.stringify(formJSON), $.ajax({
                    url: endpoint,
                    type: "POST",
                    contentType: "application/json",
                    data: formData,
                    dataType: "json",
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "/go-box/thankyou", console.log(e)
                    },
                    error: function(e, t, a) {
                        200 !== e.status && 201 !== e.status || (window.top.location.href = "/go-box/thankyou"), $("#end-submit").html("Submit");
                        var o = e.responseJSON["gobox/form"];
                        o && (console.log(o), $.each(o, function(e, t) {
                            $('[data-response="' + e + '"]').parsley().addError("custom-error", {
                                message: t
                            })
                        }), $("html, body").animate({
                            scrollTop: $("#golife-form").offset().top
                        }, 2e3)), console.log("Error"), console.log(e), console.log(t), console.log(a)
                    }
                }), $("[data-response]").focusin(function() {
                    $(this).next("ul").find(".parsley-custom-error").remove(), $(this).parsley().reset()
                })
            } else {
                $("#end-submit").html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>'), endpoint = API_ENDPOINT("gobox/form/");
                var c = $("#vendor_name").val(),
                    d = $("#vendor_address").val(),
                    p = $("#driver_name").val(),
                    u = $("#driver_phone").val(),
                    m = $("#vehicle").val(),
                    h = $("#vehicle_plate_number").val(),
                    f = $("#vehicle_kir_number").val(),
                    v = $("#vehicle_brand").val(),
                    g = $("#vehicle_production_year").val();
                formJSON = {
                    vendor_name: c,
                    vendor_address: d,
                    driver_name: p,
                    driver_phone: u,
                    vehicle: m,
                    vehicle_plate_number: h,
                    vehicle_kir_number: f,
                    vehicle_brand: v,
                    vehicle_production_year: g,
                    "g-recaptcha-response": grecaptcha.getResponse()
                }, formData = JSON.stringify(formJSON), $.ajax({
                    url: endpoint,
                    type: "POST",
                    contentType: "application/json",
                    data: formData,
                    dataType: "json",
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "/go-box/thankyou", console.log(e)
                    },
                    error: function(e, t, a) {
                        200 !== e.status && 201 !== e.status || (window.top.location.href = "/go-box/thankyou"), $("#end-submit").html("Submit");
                        var o = e.responseJSON["gobox/form"];
                        o && (console.log(o), $.each(o, function(e, t) {
                            $('[data-response="' + e + '"]').parsley().addError("custom-error", {
                                message: t
                            })
                        }), $("html, body").animate({
                            scrollTop: $("#golife-form").offset().top
                        }, 2e3)), console.log("Error"), console.log(e), console.log(t), console.log(a)
                    }
                }), $("[data-response]").focusin(function() {
                    $(this).next("ul").find(".parsley-custom-error").remove(), $(this).parsley().reset()
                })
            }
            console.log(endpoint)
        }
        param = "", $("#gobox-business-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && o("business"), e.preventDefault()
        }), $("#gobox-join-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && o("join"), e.preventDefault()
        })
    }, {}],
    19: [function(e, t, a) {
        $(function() {
            function e() {
                var e = $(this);
                e.val() > 90 && e.val(90)
            }

            function t() {
                return event.charCode >= 48 && event.charCode <= 57
            }

            function a(e) {
                var t = Math.ceil(e),
                    a = t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
                    o = a.replace(/\.00/, "");
                return o
            }

            function o(e) {
                var t = $(".messages-alert"),
                    a = $(".messages-alert h5.text");
                a.html(e), t.slideDown(), setTimeout(function() {
                    t.slideUp(), a.html("")
                }, 5e3)
            }
            var i;
            i = $("#gocar form#income-calculator"), i.submit(function(e) {
                var t = $(".output .loader"),
                    i = $(this).find("#week_hours").val(),
                    n = $(this).find("#service_area_id").val();
                formJSON = {
                    week_hours: i,
                    service_area_id: n
                };
                var s = "https://pocoranaka.go-jek.com/go-car/income-calculator?week_hours=" + i + "&service_area_id=" + n;
                formData = JSON.stringify(formJSON), $.ajax({
                    url: s,
                    type: "GET",
                    contentType: "application/json",
                    processData: !1,
                    beforeSend: function() {
                        t.show(), $(window).width() <= 568 ? $(".side .form").hide() : ($(".output .image").hide(), $(".output .result").hide())
                    },
                    success: function(e) {
                        var t = e.week_total_income;
                        $(window).width() <= 568 ? ($(".side .form").hide(), $(".output .result").show()) : ($(".output .image").hide(), $(".output .result").show()), t = a(t), $("#week_total_income").html(t)
                    },
                    error: function(e, t, a) {
                        var i = JSON.parse(e.responseText.slice(0, -1));
                        400 === e.status && o(i.error), $(window).width() <= 568 ? ($(".side .form").show(), $(".output .image").hide(), $(".output .result").hide()) : ($(".output .image").show(), $(".output .result").hide())
                    },
                    complete: function() {
                        t.hide()
                    }
                }), e.preventDefault()
            }), $(".close").click(function() {
                $(".side .form").show(), $(".output .result").hide()
            }), $("#week_hours").keypress(t).keyup(e)
        })
    }, {}],
    20: [function(e, t, a) {
        function o() {
            console.log("submit"), $("#end-submit").html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>');
            var e = $("#input-name").val(),
                t = $("#input-phone").val(),
                a = $("#select-gender").val(),
                o = $("#select-daerah").val(),
                i = $("#select-work-experience").val(),
                n = $("#input-work-place").val(),
                s = $("#select-channel").val();
            formJSON = {
                name: e,
                phone: t,
                gender: a,
                service_area: o,
                work_experience: i,
                work_place: n,
                channel: s,
                "g-recaptcha-response": grecaptcha.getResponse()
            }, endpoint = API_ENDPOINT("goclean/talent-registration/"), formData = JSON.stringify(formJSON), $.ajax({
                url: endpoint,
                type: "POST",
                contentType: "application/json",
                data: formData,
                dataType: "json",
                processData: !1,
                success: function(e) {
                    window.top.location.href = "/go-clean/thankyou", console.log(e)
                },
                error: function(e, t, a) {
                    200 !== e.status && 201 !== e.status || (window.top.location.href = "/go-clean/thankyou"), $("#end-submit").html("Submit");
                    var o = e.responseJSON["goclean/talent-registration"];
                    o && (console.log(o), $.each(o, function(e, t) {
                        $('[data-response="' + e + '"]').parsley().addError("custom-error", {
                            message: t
                        })
                    }), $("html, body").animate({
                        scrollTop: $("#goclean-form").offset().top
                    }, 2e3)), console.log("Error"), console.log(e), console.log(t), console.log(a)
                }
            }), $("[data-response]").focusin(function() {
                $(this).next("ul").find(".parsley-custom-error").remove(), $(this).parsley().reset()
            })
        }! function(e) {
            e("#goclean .service .content .data .title").click(function() {
                e(window).width() < 568 && (e(this).next().is(":visible") === !1 ? (e("#goclean .service .content .data ul").slideUp(200), e(this).addClass("active")) : e(this).removeClass("active"), e(this).next().slideToggle(200))
            })
        }(jQuery);
        var i = {
            header: "fa fa-plus",
            activeHeader: "fa fa-minus"
        };
        $(document).ready(function() {
            $(window).width() < 568 && ($("#goclean .service .content .data ul").hide(), $("#goclean .service .content").accordion({
                header: ".data h4",
                icons: i,
                heightStyle: "ul > li",
                active: !1,
                collapsible: !0
            }))
        }), $("#goclean-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && o(), e.preventDefault()
        })
    }, {}],
    21: [function(e, t, a) {
        $(function() {
            function e(e) {
                var t = $(".messages-alert"),
                    a = $(".messages-alert h5.text");
                a.html(e), t.slideDown(), $("html, body").animate({
                    scrollTop: 0
                }, "fast"), setTimeout(function() {
                    t.slideUp(), a.html("")
                }, 5e3)
            }

            function t() {
                new google.maps.Map(document.getElementById("maps-display"), {
                    center: {
                        lat: -6.121435,
                        lng: 106.774124
                    },
                    scrollwheel: !1,
                    zoom: 8
                })
            }

            function a(t) {
                var a = $("#page-offset"),
                    o = $("#button-submit-go"),
                    i = $("#button-navigation-next"),
                    n = $("#button-navigation-back"),
                    s = $("#merchant_name").val(),
                    r = $("#address").val(),
                    l = $("#phone").val(),
                    c = $("#lng").val(),
                    d = $("#lat").val();
                if ("next" === t) {
                    if ("" !== l && "" !== r && "" !== s)
                        if ("" !== c && "" !== d) {
                            var p = parseInt(a.val()),
                                u = p + 1;
                            a.val(u), $(".form-container[data-step='" + p + "']").hide(), $(".form-container[data-step='" + u + "']").show(), n.show(), 3 === u && (o.show(), i.hide())
                        } else e("Harap isi alamat sesuai dengan Google Maps.")
                } else if ("back" === t) {
                    var p = parseInt(a.val()),
                        m = p - 1;
                    a.val(m), $(".form-container[data-step='" + p + "']").hide(), $(".form-container[data-step='" + m + "']").show(), 1 === m ? (n.hide(), i.show(), o.hide()) : 2 === m && (n.show(), i.show(), o.hide())
                }
            }

            function o() {
                var e = $("#page-offset").val(),
                    t = $("#button-navigation-next"),
                    a = $("#merchant_name").val(),
                    o = $("#address").val(),
                    i = $("#phone").val(),
                    n = $("#is_partner").val();
                1 == e ? "" !== i && "" !== o && "" !== a && "" !== n ? (t.removeClass("button-disabled"), clearInterval(interval)) : t.addClass("button-disabled") : 2 == e && (interval = setInterval(function() {
                    var e = $("#img-count-step-2").val();
                    0 == e ? (t.addClass("button-disabled"), t.attr("disabled", !0)) : (t.attr("disabled", !1), t.removeClass("button-disabled"), clearInterval(interval))
                }, 500))
            }

            function i(t, a) {
                var i = parseInt($("#img-count-step-" + a).val());
                if (0 == i) var n = document.getElementById("input-upload-first-step-" + a);
                else var n = document.getElementById("input-addmore-step-" + a);
                var s = n.files.item(0).name,
                    r = n.files.item(0).size,
                    l = n.files.item(0).type;
                if (t.files && t.files[0])
                    if (r >= 2e6) e("File tidak boleh lebih dari 2 MB");
                    else if ("application/pdf" === l || "image/jpeg" === l || "image/png" === l) {
                    var c = new FileReader;
                    c.onload = function(e) {
                        if ($("#img-count-step-" + a).val(i + 1), "application/pdf" === l) {
                            var t = "";
                            t += '<div class="pure-u-lg-4-24 pure-u-sm-12-24 box preview" data-attachment="' + i + '">', t += '<a href="javascript:void(0)" class="removebutton" onclick="deleteAttachment(' + i + ');" style="float: right;">', t += '<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="position: relative; z-index: 99;">', t += '<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />', t += '<path class="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" />', t += "</svg>", t += "</a>", t += '<input type="hidden" class="img-filename" value="' + s + '">', t += '<img src="http://megaicons.net/static/img/icons_sizes/8/178/512/very-basic-file-icon.png" id="img-' + i + '" class="pure-img">', t += "</div>", $('.form-container[data-step="' + a + '"] .upload-list .img-list').append(t)
                        } else {
                            var t = "";
                            t += '<div class="pure-u-lg-4-24 pure-u-sm-12-24 box preview" data-attachment="' + i + '">', t += '<a href="javascript:void(0)" class="removebutton" onclick="deleteAttachment(' + i + ');" style="float: right;">', t += '<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="position: relative; z-index: 99;">', t += '<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />', t += '<path class="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" />', t += "</svg>", t += "</a>", t += '<input type="hidden" class="img-filename" value="' + s + '">', t += '<img src="" id="img-' + i + '" class="pure-img">', t += "</div>", $('.form-container[data-step="' + a + '"] .upload-list .img-list').append(t), $('.form-container[data-step="' + a + '"] .upload-list #img-' + i).attr("src", e.target.result)
                        }
                        $('.form-container[data-step="' + a + '"] .upload-list').css({
                            display: "block"
                        }), $('.form-container[data-step="' + a + '"] .upload-first').hide()
                    }, c.readAsDataURL(t.files[0]), o()
                } else e("Format file tidak sesuai")
            }

            function n(e, t) {
                var a = $("#" + e);
                if (null === t)
                    if ("" === a.val() || null === a.val()) {
                        if ("additional_information" !== e && (a.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + e).length)) {
                            a.after('<div style="color: red !important; margin-top: 10px; letter-spacing: .45px; font-style: italic;" id="mandatory_messages_' + e + '">Bidang ini tidak boleh kosong.</div>')
                        }
                    } else a.attr("style", "border: 1px solid rgba(0, 0, 0, .25);"), $("#mandatory_messages_" + e).remove();
                else {
                    if (a.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + e).length) {
                        a.after('<div style="color: red !important;" id="mandatory_messages_' + e + '">' + t + "</div>")
                    }
                    a.on("change", function() {
                        a.attr("style", "border: 1px solid rgba(0, 0, 0, .25);"), $("#mandatory_messages_" + e).remove()
                    })
                }
            }
            $(document).ready(function() {
                var e = $("#button-navigation-next"),
                    i = $("#button-navigation-back"),
                    n = $("#merchant_name"),
                    s = $("#address"),
                    r = $("#phone"),
                    l = $(".is_partner");
                e.on("click", function() {
                    var e = $("#page-offset").val();
                    2 == e ? 0 != $("#img-count-step-2").val() && (a("next"), o()) : a("next"), o()
                }), i.on("click", function() {
                    a("back"), o()
                }), $("#maps-display").length && t(), n.on("change", function() {
                    o()
                }), r.on("change", function() {
                    o()
                }), s.on("keyup", function() {
                    o()
                }), l.on("click", function() {
                    o()
                }), $("#maps-display").show(), $("#map").addClass("maps-hide"), $("#map").removeClass("maps-show"), $("#maps-display").addClass("maps-show"), $("#maps-display").removeClass("maps-hide"), $("#lng").val("106.82286399999998"), $("#lat").val("-6.1761317")
            }), $("#input-form-gofood-updatemenu").on("submit", function(t) {
                $(".upload-loader").css({
                    display: "block"
                }), $(".upload-list").css({
                    opacity: ".4"
                });
                var a = $("#address").val(),
                    o = $("#merchant_name").val(),
                    i = $("#phone").val(),
                    n = $("#service_area").val(),
                    s = $("#lat").val(),
                    r = $("#lng").val(),
                    l = $("#additional_information").val(),
                    c = $("#is_partner").val(),
                    d = [],
                    p = $(".form-container .upload-list .img-list .box.preview");
                c = "true" === c, p.each(function() {
                    var e = $(this).find("img"),
                        t = $(this).find("input.img-filename");
                    d.push({
                        name: t.val(),
                        data: e.attr("src")
                    })
                });
                var u = {
                    address: a,
                    name: o,
                    phone: i,
                    service_area: parseInt(n),
                    lat: s,
                    lon: r,
                    additional_information: l,
                    is_partner: c,
                    "g-recaptcha-response": grecaptcha.getResponse()
                };
                u.data_step2 = d;
                var m = JSON.stringify(u),
                    h = API_ENDPOINT("gofood-merchant-update");
                $.ajax({
                    url: h,
                    type: "POST",
                    contentType: "application/json",
                    data: m,
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "https://www.go-jek.com/go-food/updatemenu/thankyou", $(".upload-loader").css({
                            display: "none"
                        }), $(".upload-list").css({
                            opacity: "1.0"
                        }), grecaptcha.reset()
                    },
                    error: function(t, a, o) {
                        if (200 === t.status) window.top.location.href = "https://www.go-jek.com/go-food/updatemenu/thankyou", $(".upload-loader").css({
                            display: "none"
                        }), $(".upload-list").css({
                            opacity: "1.0"
                        });
                        else {
                            var i = t.status,
                                n = t.responseJSON["gofood-merchant-update"];
                            400 === i && $.each(n, function(t, a) {
                                e("data_step2" === t ? "Terjadi kesalahan: Tolong Unggah File Foto!" : "Terjadi kesalahan! " + t + ": " + a)
                            }), $(".upload-loader").css({
                                display: "none"
                            }), $(".upload-list").css({
                                opacity: "1.0"
                            }), grecaptcha.reset()
                        }
                    }
                }), t.preventDefault()
            }), $("#input-form-gofood-updatemenu input[type=text], #input-form-gofood-updatemenu input[type=number], #input-form-gofood-updatemenu textarea, #input-form-gofood-updatemenu select").each(function() {
                var e = this.id;
                $("#" + this.id).blur(function() {
                    n(e, null)
                })
            }), $(".input-upload-first-step-2").change(function() {
                i(this, 2)
            }), $(".input-addmore-step-2").change(function() {
                i(this, 2)
            }), $(".input-upload-first-step-3").change(function() {
                i(this, 3)
            }), $(".input-addmore-step-3").change(function() {
                i(this, 3)
            }), $("#address").change(function() {
                "" === $(this).val() || null === $(this).val() ? ($("#maps-display").show(), $("#map").addClass("maps-hide"), $("#map").removeClass("maps-show"), $("#maps-display").addClass("maps-show"), $("#maps-display").removeClass("maps-hide"), $("#lng").val(""), $("#lat").val("")) : ($("#maps-display").hide(), $("#maps-display").removeClass("maps-show"), $("#maps-display").addClass("maps-hide"), $("#map").addClass("maps-show"), $("#map").removeClass("maps-hide")), o()
            })
        })
    }, {}],
    22: [function(e, t, a) {
        param = "", $("#goglam-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && doneSubmit(), e.preventDefault()
        })
    }, {}],
    23: [function(e, t, a) {
        function o() {
            console.log("submit"), $("#end-submit").html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>');
            var e = $("#input-nama-penanggung-jawab").val(),
                t = $("#input-hp-penanggung-jawab").val(),
                a = $("#input-email-penanggung-jawab").val(),
                o = $("#image-upload-ktp").attr("src"),
                i = $("#input-nama-perusahaan").val(),
                n = $("#select-bussiness-unit").val(),
                s = $("#select-kota").val(),
                r = $("#input-telepon-perusahaan").val(),
                l = $("#select-legalitas").val(),
                c = $("#image-upload-legalitas").attr("src"),
                d = $("#image-upload-profil").attr("src"),
                p = $("#select-sumber").val(),
                u = $("#input-rate").val();
            formJSON = {
                name: e,
                phone: t,
                email: a,
                ktp: o,
                company_name: i,
                service: n,
                service_area: s,
                company_phone: r,
                company: l,
                legal: c,
                profile: d,
                referral: p,
                rating: u,
                "g-recaptcha-response": grecaptcha.getResponse()
            }, endpoint = API_ENDPOINT("golife/form/"), formData = JSON.stringify(formJSON), $.ajax({
                url: endpoint,
                type: "POST",
                contentType: "application/json",
                data: formData,
                dataType: "json",
                processData: !1,
                success: function(e) {
                    window.top.location.href = "/go-life/thankyou", console.log(e)
                },
                error: function(e, t, a) {
                    200 !== e.status && 201 !== e.status || (window.top.location.href = "/go-life/thankyou"), $("#end-submit").html("Submit");
                    var o = e.responseJSON["golife/form"];
                    o && (console.log(o), $.each(o, function(e, t) {
                        $('[data-response="' + e + '"]').parsley().addError("custom-error", {
                            message: t
                        })
                    }), $("html, body").animate({
                        scrollTop: $("#golife-form").offset().top
                    }, 2e3)), console.log("Error"), console.log(e), console.log(t), console.log(a)
                }
            }), $("[data-response]").focusin(function() {
                $(this).next("ul").find(".parsley-custom-error").remove(), $(this).parsley().reset()
            })
        }
        param = "", $("#golife-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && o(), e.preventDefault()
        }), $("#chooseStar > span").on("click", function() {
            var e = $(this).data("value");
            $('input[name="star"] + ul.parsley-errors-list').hide(), $('input[name="star"]').val(e), $("#chooseStar > span").removeClass("active"), $(this).addClass("active")
        }), $('input[type="file"].image-golife').on("change", function() {
            var e = $(this).data("show-image"),
                t = $("input[name=" + e + "]")[0].files[0],
                a = t.name.split(".").pop(),
                o = Math.round(t.size / 1e3);
            if ($('img.prev-img[data-trigger-image="' + e + '"]').attr("src", ""), o > 5e3) alert("File tidak boleh lebih dari 5 Mb"), $("input[name=" + e + "]").val("");
            else if ("jpg" !== a && "png" !== a && "pdf" !== a && "jpeg" !== a) alert("format file tidak sesuai"), $("input[name=" + e + "]").val("");
            else {
                var i = new FileReader;
                i.onload = function(t) {
                    $('img.prev-img[data-trigger-image="' + e + '"]').attr("src", t.target.result)
                }, i.readAsDataURL(t), $("div.info[data-trigger-image=" + e + "]").hide(), $("button.submit-image[data-trigger-image=" + e + "]").text("Ubah"), $("div.preview-image[data-trigger-image=" + e + "]").show()
            }
        }), $(".preview-image .image .close[data-close-image]").on("click", function() {
            var e = $(this).data("close-image");
            $("input[name=" + e + "]").val(""), $("div.preview-image[data-trigger-image=" + e + "]").hide(), $("button.submit-image[data-trigger-image=" + e + "]").text("Pilih"), $("div.info[data-trigger-image=" + e + "]").show()
        }), $("#select-bussiness-unit").on("change", function() {
            var e = $(this).val();
            $("#select-kota").attr("disabled", !1), $("#select-kota option:not(.separator)").each(function() {
                $(this).data("service") == e || $(this).parent().is("span") ? $(this).data("service") == e && $(this).parent().is("span") && $(this).unwrap("<span>") : $(this).wrap("<span>")
            }), $("#select-kota").val("")
        })
    }, {}],
    24: [function(e, t, a) {
        param = "", $("#chooseStar > span").on("click", function() {
            var e = $(this).data("value");
            $('input[name="form_score"] + ul.parsley-errors-list').hide(), $('input[name="form_score"]').val(e), $("#chooseStar > span").removeClass("active"), $(this).addClass("active")
        }), $("#gomassage-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && doneSubmit(), e.preventDefault()
        }), $(function() {
            $("#id_last_education_hidden").hide(), $("#id_last_education").change(function() {
                "Lainnya" == $("#id_last_education").val() ? ($("#id_last_education_hidden").show().attr("name", "last_education"), $("#id_last_education_hidden").prop("required", !0), $("#id_last_education").attr("name", "")) : ($("#id_last_education_hidden").hide(), $("#id_last_education_hidden").removeAttr("name"), $("#id_last_education_hidden").prop("required", !1))
            })
        }), $(function() {
            $("#id_city_hidden").hide(), $("#id_city").change(function() {
                "Lainnya" == $("#id_city").val() ? ($("#id_city_hidden").show().attr("name", "city"), $("#id_city_hidden").prop("required", !0), $("#id_city").attr("name", "")) : ($("#id_city_hidden").hide(), $("#id_city_hidden").removeAttr("name"), $("#id_city_hidden").prop("required", !1))
            })
        }), $(function() {
            $("#id_house_status_hidden").hide(), $("#id_house_status").change(function() {
                "Lainnya" == $("#id_house_status").val() ? ($("#id_house_status_hidden").show().attr("name", "house_status"), $("#id_house_status_hidden").prop("required", !0), $("#id_house_status").attr("name", "")) : ($("#id_house_status_hidden").hide(), $("#id_house_status_hidden").removeAttr("name"), $("#id_house_status_hidden").prop("required", !1))
            })
        }), $(function() {
            $("#id_info_from_hidden").hide(), $("#id_info_from").change(function() {
                "Lainnya" == $("#id_info_from").val() ? ($("#id_info_from_hidden").show().attr("name", "info_from"), $("#id_info_from_hidden").prop("required", !0), $("#id_info_from").attr("name", "")) : ($("#id_info_from_hidden").hide(), $("#id_info_from_hidden").removeAttr("name"), $("#id_info_from_hidden").prop("required", !1))
            })
        }), $(function() {
            $("#id_join_reason_hidden").hide(), $("#id_join_reason").change(function() {
                "Lainnya" == $("#id_join_reason").val() ? ($("#id_join_reason_hidden").show().attr("name", "join_reason"), $("#id_join_reason_hidden").prop("required", !0), $("#id_join_reason").attr("name", "")) : ($("#id_join_reason_hidden").hide(), $("#id_join_reason_hidden").removeAttr("name"), $("#id_join_reason_hidden").prop("required", !1))
            })
        }), $(function() {
            $("#id_parttime_hidden").hide(), $("#id_time_allocation").change(function() {
                2 == $("#id_time_allocation").val() ? ($("#id_parttime_hidden").show(), $("#id_parttime_reason").prop("required", !0), $("#id_possibility_to_fulltime").prop("required", !0), $("#id_parttime_reason_hidden").hide(), $("#id_parttime_reason").change(function() {
                    "Lainnya" == $("#id_parttime_reason").val() ? ($("#id_parttime_reason_hidden").show().attr("name", "parttime_reason"), $("#id_parttime_reason_hidden").prop("required", !0), $("#id_parttime_reason").attr("name", "")) : ($("#id_parttime_reason_hidden").hide(), $("#id_parttime_reason_hidden").removeAttr("name"), $("#id_parttime_reason_hidden").prop("required", !1))
                }), $("#id_possibility_to_fulltime").change(function() {
                    "True" == $("#id_possibility_to_fulltime").val() ? $("#id_reason_to_fulltime").prop("required", !0) : $("#id_reason_to_fulltime").prop("required", !1)
                })) : ($("#id_parttime_hidden").hide(), $("#id_parttime_reason").prop("required", !1), $("#id_possibility_to_fulltime").prop("required", !1))
            })
        }), $(function() {
            $("#id_parttime_reason_hidden").hide(), $("#id_parttime_reason").val(""), $("#id_parttime_reason_hidden").val(""), $("#id_possibility_to_fulltime").val(""), $("#id_reason_to_fulltime").val(""), $("#id_parttime_reason").change(function() {
                "Lainnya" == $("#id_parttime_reason").val() ? ($("#id_parttime_reason_hidden").show().attr("name", "parttime_reason"), $("#id_parttime_reason").attr("name", "")) : $("#id_parttime_reason_hidden").hide()
            })
        }), $("#id_service_area").on("change", function() {
            "Jabodetabek" == $("#id_service_area option:selected").text() ? ($("#id_service_area_city").prop("disabled", !1), $("#id_service_area_city").prop("required", !0)) : ($("#id_service_area_city").prop("disabled", !0), $("#id_service_area_city").prop("required", !1), $("#id_service_area_city").val($("#id_service_area_city option:first").val()))
        })
    }, {}],
    25: [function(e, t, a) {
        $(function() {
            function e(e, t, a) {
                if ("changes" === e) {
                    var o = $("#" + t);
                    null === a && (a = ""), "" === o.val() || null === o.val() ? (o.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + t).length && o.after('<div class="error_messages" id="mandatory_messages_' + t + '"></div>')) : (o.attr("style", "border: 1px solid rgba(0, 0, 0, .25);"), $("#mandatory_messages_" + t).remove())
                } else if ("submit" === e) {
                    var o = $("#" + t);
                    o.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + t).length && o.after('<div class="error_messages" id="mandatory_messages_' + t + '">' + a + "</div>")
                }
            }
            var t = $("#gomed-join-form"),
                a = $("#gomed-join-form input, #gomed-join-form select, #gomed-join-form textarea");
            a.each(function() {
                var t = this.id;
                $("#" + t).blur(function() {
                    e("changes", t, null)
                })
            }), t.on("submit", function(t) {
                $(".loader-wrapper").css({
                    display: "block"
                }), $(".form-container").css({
                    opacity: ".25"
                });
                var a = $("#merchant_name").val(),
                    o = $("#pharmacy_type").val(),
                    i = $("#pic").val(),
                    n = $("#email").val(),
                    s = $("#address").val(),
                    r = $("#city").val(),
                    l = $("#phone").val(),
                    c = {
                        name: a,
                        pharmacy: o,
                        pic: i,
                        email: n,
                        address: s,
                        service_area: r,
                        phone: l,
                        "g-recaptcha-response": grecaptcha.getResponse()
                    },
                    d = JSON.stringify(c),
                    p = API_ENDPOINT("gomed-merchant");
                $.ajax({
                    url: p,
                    type: "POST",
                    contentType: "application/json",
                    data: d,
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "https://www.go-jek.com/go-med/join/thankyou", $(".loader-wrapper").css({
                            display: "none"
                        }), $(".form-container").css({
                            opacity: "1.0"
                        })
                    },
                    error: function(t, a, o) {
                        var i = t.status,
                            n = t.responseJSON["gomed-merchant"];
                        400 === i && $.each(n, function(t, a) {
                            e("submit", t, a)
                        }), $(".loader-wrapper").css({
                            display: "none"
                        }), $(".form-container").css({
                            opacity: "1.0"
                        })
                    }
                }), t.preventDefault()
            })
        })
    }, {}],
    26: [function(e, t, a) {
        $(function() {
            function e(e) {
                var t = $(".messages-alert"),
                    a = $(".messages-alert h5.text");
                a.html(e), t.slideDown(), setTimeout(function() {
                    t.slideUp(), a.html("")
                }, 5e3)
            }

            function t(e, t, a) {
                var o = $("#" + t);
                "changes" === e ? (null === a && (a = ""), "" === o.val() || null === o.val() ? "form_reason" === t && "service_area" === t || (o.addClass("error-input"), 0 === $("#mandatory_messages_" + t).length && o.after('<div class="error-messages" id="mandatory_messages_' + t + '"><i>Bidang ini tidak boleh kosong.</i></div>')) : (o.removeClass("error-input"), $("#mandatory_messages_" + t).remove())) : (o.addClass("error-input"), 0 === $("#mandatory_messages_" + t).length && o.after('<div class="error-messages" id="mandatory_messages_' + t + '"><i>' + a + "</i></div>"))
            }
            var a, o, i, n;
            a = $("form#gopoints"), o = $("#gopoints input[type=text], #gopoints input[type=number], #gopoints input[type=email], #gopoints select"), o.each(function() {
                var e = this.id;
                $("#" + e).blur(function() {
                    t("changes", e, null)
                })
            }), a.submit(function(a) {
                $(".uil-ring-css").show(), $("[data-wrap]").css({
                    opacity: ".25"
                });
                var o = $("#company_name").val(),
                    s = $("#category").val(),
                    r = $("#company_address").val(),
                    l = $("#city").val(),
                    c = $("#website").val(),
                    d = $("#company_phone").val(),
                    p = $("#voucher").val(),
                    u = $("#voucher_value_id").val(),
                    m = $("#voucher_quantity_id").val(),
                    h = $("#name").val(),
                    f = $("#email").val(),
                    v = $("#phone").val(),
                    g = $("#message").val();
                formJSON = {
                    company_name: o,
                    category: s,
                    company_address: r,
                    city: l,
                    website: c,
                    company_phone: d,
                    voucher: p,
                    voucher_value_id: u,
                    voucher_quantity: m,
                    name: h,
                    email: f,
                    phone: v,
                    message: g,
                    "g-recaptcha-response": grecaptcha.getResponse()
                }, n = API_ENDPOINT("gopoints/joinforms/"), i = JSON.stringify(formJSON), $.ajax({
                    url: n,
                    type: "POST",
                    contentType: "application/json",
                    data: i,
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "/go-points/thankyou", $(".uil-ring-css").hide(), $("[data-wrap]").css({
                            opacity: "1.0"
                        }), grecaptcha.reset()
                    },
                    error: function(a, o, i) {
                        200 === a.status && (window.top.location.href = "/go-points/thankyou");
                        var n = a.responseJSON["gopoints/joinforms"];
                        $.each(n, function(a, o) {
                            e(a + ": " + o), "captcha" !== a && t("triggered", a, o)
                        }), $(".uil-ring-css").hide(), $("[data-wrap]").css({
                            opacity: "1.0"
                        }), grecaptcha.reset()
                    }
                }), a.preventDefault()
            })
        })
    }, {}],
    27: [function(e, t, a) {
        $(function() {
            function e(e, t) {
                var a = $("#button-next");
                $("#button-back"), $("#button-submit");
                $("html, body").animate({
                    scrollTop: e.offset().top - t
                }, 1e3), a.attr("disabled", !0), a.addClass("button-disabled")
            }

            function t(e) {
                var t = $(".messages-alert"),
                    a = $(".messages-alert h5.text");
                a.html(e), t.slideDown(), setTimeout(function() {
                    t.slideUp(), a.html("")
                }, 5e3)
            }

            function a(e, a) {
                var o = document.querySelector('[name="' + a + '"]');
                if (o) {
                    var i = o.files.item(0).name,
                        n = o.files.item(0).size,
                        s = o.files.item(0).type;
                    if (n >= 3e6) t("File tidak boleh lebih dari 3MB");
                    else if ("application/pdf" === s || "image/jpeg" === s || "image/png" === s) {
                        var r = new FileReader;
                        r.onload = function(e) {
                            if ("application/pdf" === s) {
                                var t = "";
                                t += '<div class="pure-u-lg-6-24 pure-u-sm-12-24 box preview" data-attachment="' + img_count + '">', t += '<input type="hidden" class="img-filename" value="' + i + '">', t += '<img src="http://megaicons.net/static/img/icons_sizes/8/178/512/very-basic-file-icon.png" id="img-' + img_count + '" style="max-width 45px;" class="pure-img">', t += "</div>", $('.goresto .form-container[data-step="' + a + '"] .upload-list .img-list').append(t)
                            } else $("#" + a).val(i), $("#" + a).attr("src", e.target.result);
                            $('.goresto .form-container .upload-box[data-group="' + a + '"] .upload-list').css({
                                display: "block"
                            }), $('.goresto .form-container .upload-box[data-group="' + a + '"] .upload-first').hide(), 1 === a || 2 === a ? ($('.goresto .form-container[data-step="' + a + '"] .upload-list').css({
                                display: "block"
                            }), $('.goresto .form-container[data-step="' + a + '"] .upload-first').hide()) : ($('.goresto .upload-list[data-upload="' + a + '"]').css({
                                display: "block"
                            }), $('.goresto .upload-first[data-upload="' + a + '"]').hide())
                        }, r.readAsDataURL(e.files[0])
                    } else t("Format tidak sesuai")
                }
            }
            var o = ($("#goresto-form"), $("#goresto-form input, #goresto-form select, #goresto-form textarea"), $("section.result-resto"), $("section.result-resto .body"), $("section.result-resto .body .loader"), $("section.result-resto .body .merchant"), $("section.result-resto .body .merchant-info"), $(".modal.welcome"), $(".modal.tnc"), $(".modal-overlay"), $(".outlet-search")),
                i = $("#outlet_search_input"),
                n = ($(".outlet-search.active"), $("#addmore-outlet")),
                s = $("#addmore-outlet h4"),
                r = null;
            API_ENDPOINT("gofood-merchant"), API_ENDPOINT("gofood-merchant-claim");
            $('input[name="company-identity--file"]').change(function() {
                a(this, "company-identity--file")
            }), $('input[name="bank-account--file"]').change(function() {
                a(this, "bank-account--file")
            }), $('input[name="director-identity--file"]').change(function() {
                a(this, "director-identity--file")
            }), $('input[name="company-npwp--file"]').change(function() {
                a(this, "company-npwp--file")
            }), $('input[name="procuration--file"]').change(function() {
                a(this, "procuration--file")
            }), $('input[name="procuration_identity_file"]').change(function() {
                a(this, "procuration_identity_file")
            }), i.on("keyup", function() {
                var e = this.value;
                clearTimeout(r), r = setTimeout(function() {
                    searchOutlet(e)
                }, 300)
            }), n.click(function() {
                o.slideToggle("slow", function() {
                    o.toggleClass("active")
                }), $(".outlet-search.active")[0] ? s.html("+ Tambah Outlet") : s.html("- Batalkan")
            }), $("#claim-merchant-call, #claim-merchant-call-bottom").click(function() {
                e($(".search-resto"), 200)
            })
        })
    }, {}],
    28: [function(e, t, a) {
        $(function() {
            function e() {
                $("#popup_box.success").fadeOut("slow"), $("#popup_box.error").fadeOut("slow"), $("#container").css({
                    opacity: "1"
                })
            }

            function t(e, t) {
                var a = $("#" + e);
                if (null === t)
                    if ("" === a.val() || null === a.val()) {
                        if ("inp_lainnya" !== e && (a.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + e).length));
                    } else a.attr("style", "border: 1px solid rgba(0, 0, 0, .25);"), $("#mandatory_messages_" + e).remove();
                else {
                    if (a.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + e).length) {
                        a.after('<div style="color: red !important;" id="mandatory_messages_' + e + '">' + t + "</div>")
                    }
                    a.on("change", function() {
                        a.attr("style", "border: 1px solid rgba(0, 0, 0, .25);"), $("#mandatory_messages_" + e).remove()
                    })
                }
            }
            $("#business_types").on("change", function() {
                var e = $("#business_types option:selected").text();
                "Lainnya" === e ? ($(".other-responses").css({
                    opacity: "1.0"
                }), $("#inp_lainnya").attr("required", "required")) : ($(".other-responses").css({
                    opacity: "0.0"
                }), $("#inp_lainnya").val(""), $("#inp_lainnya").removeAttr("required"))
            }), $("#province").on("change", function() {
                $("#city").html(""), $("#city").html("<option selected disabled>Memuat daftar kota..</option>");
                var e = $(this).val();
                $.ajax({
                    url: "https://rl27mhrkd5.execute-api.ap-southeast-1.amazonaws.com/staging/city/",
                    type: "GET",
                    contentType: "application/json",
                    data: "province__id=" + e + "&limit=0",
                    dataType: "json",
                    processData: !1,
                    success: function(e) {
                        $("#city").html("");
                        for (var t = 0; t < e.objects.length; t++) $("#city").append('<option value="' + e.objects[t].id + '">' + e.objects[t].nama + "</option>")
                    }
                })
            }), $("#input-form-larismanis").on("submit", function(e) {
                var a = $("#email").val(),
                    o = $("#instagram").val(),
                    i = $("#name").val(),
                    n = $("#number_of_instagram_follower").val(),
                    s = $("#weekly_delivery_estimation").val(),
                    r = $("#phone").val(),
                    l = $("#province").val(),
                    c = $("#city").val(),
                    d = $("#business_types").val(),
                    p = $("#inp_lainnya").val(),
                    u = {
                        email: a,
                        instagram: o,
                        name: i,
                        number_of_instagram_follower: n,
                        phone: r,
                        weekly_delivery_estimation: s,
                        city: c,
                        province: l,
                        business_type: d,
                        other_business_type: p,
                        "g-recaptcha-response": grecaptcha.getResponse()
                    },
                    m = JSON.stringify(u),
                    h = "https://rl27mhrkd5.execute-api.ap-southeast-1.amazonaws.com/staging/gosend-merchant/";
                $.ajax({
                    url: h,
                    type: "POST",
                    contentType: "application/json",
                    data: m,
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "https://www.go-jek.com/larismanis/thankyou"
                    },
                    error: function(e, a, o) {
                        var i = e.status,
                            n = e.responseJSON["gosend-merchant"];
                        400 === i && $.each(n, function(e, a) {
                            t(e, a)
                        })
                    }
                }), e.preventDefault()
            }), $("#input-form-larismanis input, #input-form-larismanis select").each(function() {
                var e = this.id;
                $("#" + this.id).blur(function() {
                    t(e, null)
                })
            }), $(".popupBoxClose").click(function() {
                e()
            })
        })
    }, {}],
    29: [function(e, t, a) {
        $(function() {
            function e(e) {
                var t = $("#" + e);
                if ("" === t.val() || null === t.val()) {
                    if ("inp_lainnya" !== e && (t.attr("style", "border: 1px solid #E0164A !important"), 0 === $("#mandatory_messages_" + e).length)) {
                        var a = 'class="error_messages"',
                            o = "mandatory_messages_" + e;
                        $(t).after('<div id="' + o + '"' + a + "></div>")
                    }
                } else t.attr("style", "border: 1px solid rgba(0, 0, 0, .25);"), $("#mandatory_messages_" + e).remove()
            }

            function t(e, t) {
                if ($("#bt_" + t).is(":checked")) "lainnya" === t ? ($(".other-responses").css({
                    opacity: "1.0"
                }), $("#inp_lainnya").focus()) : $("#inp_" + t).val(e);
                else {
                    var a = t;
                    "lainnya" === a ? ($(".other-responses").css({
                        opacity: "0.0"
                    }), $("#inp_lainnya").val("")) : $("#inp_" + a).val("")
                }
            }

            function a() {
                $("#popup_box").fadeOut("slow"), $("#container").css({
                    opacity: "1"
                })
            }

            function o() {
                $("#popup_box").fadeIn("slow"), $("#container").css({
                    opacity: "0.3"
                })
            }
            $("#input-form-merchant").on("submit", function() {
                var e = "entry.1880528184",
                    t = encodeURIComponent($("#business_name").val()),
                    a = "entry.334167893",
                    i = encodeURIComponent($("#pic_name").val()),
                    n = "entry.1134320059",
                    s = encodeURIComponent($("#pic_title_name").val()),
                    r = "entry.247212121",
                    l = encodeURIComponent($("#email_address").val()),
                    c = "entry.257535446",
                    d = encodeURIComponent($("#phone_no").val()),
                    p = "entry.821325619",
                    u = encodeURIComponent($("#city").val()),
                    m = "entry.135692494",
                    h = encodeURIComponent($("#province-merchant").val()),
                    f = "entry.614243014",
                    v = encodeURIComponent($("#shipping_estimate").val()),
                    g = "entry.647990572",
                    _ = encodeURIComponent($("#inp_makananMinuman").val()),
                    y = encodeURIComponent($("#inp_fashionAksesoris").val()),
                    w = encodeURIComponent($("#inp_elektronik").val()),
                    b = encodeURIComponent($("#inp_florist").val()),
                    k = encodeURIComponent($("#inp_peralatanKantor").val()),
                    x = "entry.647990572.other_option_response",
                    j = encodeURIComponent($("#inp_lainnya").val()),
                    S = "https://docs.google.com/a/go-jek.com/forms/d/e/1FAIpQLSf8YHNYy6d8Mx5vJiMPmgh4GSqXEx6ZIN-LZPujvb02ZYXlfw/formResponse?",
                    C = "&submit=Submit",
                    T = S + e + "=" + t + "&" + r + "=" + l + "&" + c + "=" + d + "&" + p + "=" + u + "&" + a + "=" + i + "&" + n + "=" + s + "&" + m + "=" + h + "&" + f + "=" + v + "&" + g + "=" + _ + "&" + g + "=" + y + "&" + g + "=" + w + "&" + g + "=" + b + "&" + g + "=" + k + "&" + g + "=__other_option__&" + x + "=" + j + C;
                $(this)[0].action = T, $(this)[0].reset(), o()
            }), $("#input-form-merchant input, #input-form-merchant select").each(function() {
                var t = this.id;
                $("#" + this.id).blur(function() {
                    e(t, null)
                })
            }), $("#bt_makananMinuman").click(function() {
                t("Makanan & Minuman", "makananMinuman")
            }), $("#bt_fashionAksesoris").click(function() {
                t("Fashion & Aksesoris", "fashionAksesoris")
            }), $("#bt_elektronik").click(function() {
                t("Elektronik", "elektronik")
            }), $("#bt_florist").click(function() {
                t("Florist", "florist")
            }), $("#bt_peralatanKantor").click(function() {
                t("Peralatan Kantor", "peralatanKantor")
            }), $("#bt_lainnya").click(function() {
                t("Lainnya", "lainnya")
            }), $("#popupBoxClose").click(function() {
                a()
            })
        })
    }, {}],
    30: [function(e, t, a) {
        $(function() {
            function e(e, t) {
                var a = $("#" + e);
                t = null === t ? "Bidang ini tidak boleh kosong." : "", "" === a.val() || null === a.val() ? (a.addClass("error"), 0 === $('[data-messages="' + e + '"]').length && a.after('<div class="error-message" data-messages="' + e + '"><i>' + t + "</i></div>")) : (a.removeClass("error"), $('[data-messages="' + e + '"]').remove())
            }

            function t(e) {
                var t = $(".messages-alert"),
                    a = $(".messages-alert h5.text");
                a.html(e), t.slideDown(), setTimeout(function() {
                    t.slideUp(), a.html("")
                }, 5e3)
            }
            var a = $("#gosend-form");
            $(document).ready(function() {
                var t = $("#gosend-form input[type=text], #gosend-form select");
                t.each(function() {
                    var t = this.id;
                    $("#" + t).blur(function() {
                        "date_of_birth" !== t && e(t, null)
                    })
                })
            }), a.submit(function(e) {
                $("#end-submit").html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>');
                var a = $("#first_name").val(),
                    o = $("#last_name").val(),
                    i = $("#email").val(),
                    n = $("#phone").val(),
                    s = $("#service_area").val(),
                    r = $("#date_of_birth").val(),
                    l = $("#vehicle_type").val(),
                    c = $("#vehicle_year").val(),
                    d = $("#vehicle_tnkb").val(),
                    p = $("#smartphone_ram").val(),
                    u = $("#smartphone_merk").val(),
                    m = $("#smartphone_model").val(),
                    h = $("#worked").val(),
                    f = $("#agree_worked").val(),
                    v = $("#work_other").val(),
                    g = $("#source").val(),
                    _ = $("#gtm").val();
                formJSON = {
                    first_name: a,
                    last_name: o,
                    email: i,
                    phone: n,
                    service_area: s,
                    date_of_birth: r,
                    vehicle_type: l,
                    vehicle_year: c,
                    vehicle_tnkb: d,
                    smartphone_ram: p,
                    smartphone_merk: u,
                    smartphone_model: m,
                    worked: h,
                    agree_worked: f,
                    work_other: v,
                    source: g,
                    gtm: _,
                    "g-recaptcha-response": grecaptcha.getResponse()
                }, formData = JSON.stringify(formJSON);
                var y = API_ENDPOINT("gosend/join-form/");
                $.ajax({
                    url: y,
                    type: "POST",
                    contentType: "application/json",
                    data: formData,
                    processData: !1,
                    success: function(e) {
                        window.top.location.href = "/go-send/thankyou", grecaptcha.reset()
                    },
                    error: function(e, a, o) {
                        t(400 === e.status ? "Terjadi kesalahan, pastikan memeriksa setiap bidang." : "Terjadi kesalahan."), grecaptcha.reset(), $("#end-submit").html("Gabung"), console.log("Error"), console.log(e), console.log(a), console.log(o)
                    }
                }), e.preventDefault()
            })
        })
    }, {}],
    31: [function(e, t, a) {
        function o() {
            $("#end-submit").html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>');
            var e = $('input[name="organization_name"]').val(),
                t = $('input[name="name"]').val(),
                a = $('input[name="email"]').val(),
                o = $('select[name="category"]').val(),
                i = $('input[name="phone"]').val(),
                n = $('input[name="audience_capacity"]').val(),
                s = $('input[name="is_pay"]').val(),
                r = $('textarea[name="information"]').val();
            formJSON = {
                organization_name: e,
                name: t,
                email: a,
                category: o,
                phone: i,
                audience_capacity: n,
                is_pay: s,
                information: r,
                "g-recaptcha-response": grecaptcha.getResponse()
            }, formData = JSON.stringify(formJSON), $.ajax({
                url: API_ENDPOINT("gotix/form/"),
                type: "POST",
                contentType: "application/json",
                data: formData,
                dataType: "json",
                processData: !1,
                success: function(e) {
                    window.top.location.href = "/go-tix/thankyou", console.log(e)
                },
                error: function(e, t, a) {
                    200 !== e.status && 201 !== e.status || (window.top.location.href = "/go-tix/thankyou");
                    var o = e.responseJSON["gotix/form"];
                    o && (console.log(o), $.each(o, function(e, t) {
                        $('[data-response="' + e + '"]').parsley().addError("custom-error", {
                            message: t
                        })
                    }), $("html, body").animate({
                        scrollTop: $("#gotix-form").offset().top
                    }, 2e3)), console.log(e), $("#end-submit").html("Submit"), console.log(o)
                }
            })
        }
        $("#gotix-form").submit(function(e) {
            var t = grecaptcha.getResponse();
            t && $("#check-captcha").val(t), $(this).parsley().validate(), $(this).parsley().isValid() && (o(), e.preventDefault()), e.preventDefault()
        })
    }, {}],
    32: [function(e, t, a) {
        function o() {
            $("#govideo #slide-judges").slick({
                infinite: !1,
                prevArrow: $(".container-arrow-judges > svg:first-child"),
                nextArrow: $(".container-arrow-judges > svg:last-child"),
                responsive: [{
                    breakpoint: 9999,
                    settings: "unslick"
                }, {
                    breakpoint: 769
                }]
            })
        }

        function i() {
            $("#govideo #slide-category").slick({
                infinite: !1,
                prevArrow: '<div class="arrow-left float-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 89" class="js-service-prev slick-arrow" aria-disabled="false" style="display: inline;"><g fill="none"><g transform="translate(-702 -402)translate(746.5 446.5)scale(-1 1)translate(-746.5 -446.5)translate(704 404)"><ellipse cx="42.5" cy="42.5" rx="42.5" ry="42.5" style="stroke-width:3;stroke:#48AF4A"></ellipse><polygon transform="translate(43.125 42.268728)scale(-1 1)translate(-43.125 -42.268728)" points="56.3 40.8 35.4 40.8 40.5 35.7 38.5 33.8 30 42.3 38.5 50.8 40.5 48.8 35.4 43.7 56.3 43.7" fill="#48AF4A"></polygon></g></g></svg></div>',
                nextArrow: '<div class="arrow-right float-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 89" class="js-service-next slick-arrow" aria-disabled="false" style="display: inline;"><g fill="none"><g transform="translate(-829 -402)translate(831 404)"><ellipse cx="42.5" cy="42.5" rx="42.5" ry="42.5" style="stroke-width:3;stroke:#48AF4A"></ellipse><polygon transform="translate(43.125 42.268728)scale(-1 1)translate(-43.125 -42.268728)" points="56.3 40.8 35.4 40.8 40.5 35.7 38.5 33.8 30 42.3 38.5 50.8 40.5 48.8 35.4 43.7 56.3 43.7" fill="#48AF4A"></polygon></g></g></svg></div>',
                responsive: [{
                    breakpoint: 9999,
                    settings: "unslick"
                }, {
                    breakpoint: 769
                }]
            })
        }
        $(window).on("resize", function() {
            $(window).width() > 768 && $(".slide-container").hasClass("slick-initialized") ? ($("#govideo #slide-judges").slick("unslick"), $("#govideo #slide-category").slick("unslick")) : $(window).width() < 768 && !$(".slide-container").hasClass("slick-initialized") && (o(), i())
        }), $(document).ready(function() {
            o(), i(), $("#govideo .how-to .slide .text-slide").slick({
                dots: !0,
                appendDots: "#govideo .how-to .dots-slide",
                slidesToShow: 1,
                initialSlide: 0,
                infinite: !1,
                vertical: !0,
                verticalSwiping: !0,
                adaptiveHeight: !0,
                prevArrow: "#govideo .how-to .nav-slide .nav-up",
                nextArrow: "#govideo .how-to .nav-slide .nav-down",
                asNavFor: "#govideo .how-to .slide .image-slide .item",
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        vertical: !1,
                        verticalSwiping: !1
                    }
                }]
            }), $("#govideo .how-to .slide .image-slide .item").slick({
                slidesToShow: 1,
                arrows: !1,
                initialSlide: 0,
                infinite: !1,
                vertical: !0,
                asNavFor: "#govideo .how-to .slide .text-slide",
                adaptiveHeight: !0,
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        vertical: !1
                    }
                }]
            });
            var e, t = $(window),
                a = $("#govideo .video-list.homepage"),
                n = !1;
            e = function() {
                t.width() <= 540 ? (n = !0, a.slick({
                    infinite: !1,
                    prevArrow: $("#govideo .participant #nextArrow"),
                    nextArrow: $("#govideo .participant #prevArrow")
                })) : n && a.slick("unslick")
            }, t.resize(e), e(), $("#govideo .how-to .slide .text-slide, #govideo .how-to .image-slide .item").on("afterChange", function(e, t, a) {
                2 == a ? $("#govideo .how-to .nav-slide .nav-up").addClass("disabled") : $("#govideo .how-to .nav-slide .nav-down").removeClass("disabled"), 0 == a ? $("#govideo .how-to .nav-slide .nav-down").addClass("disabled") : $("#govideo .how-to .nav-slide .nav-down").removeClass("disabled")
            });
            var s = -1;
            $("#govideo .how-to .slide").each(function() {
                $(this).height() > s && (s = $(this).height()), $(this).height() < s && $(this).css("margin", Math.ceil((s - $(this).height()) / 2) + "px 0")
            })
        }), $("#option-snk > li").on("click", function() {
            var e = $(this).attr("value");
            $("#option-snk > li").removeClass("active"), $(this).addClass("active"), $(".content").removeClass("active"), $('.content[value="' + e + '"]').addClass("active")
        }), $("#upload").on("click", function() {
            $('input[name="poster"]').click()
        }), $("#js-play-discover").on("click", function() {
            var e = $("#js-discover-video").attr("data-src");
            $("#container-js-video").append('<iframe src="' + e + '" allowfullscreen></iframe>'), $("#container-js-video").addClass("active")
        }), $("#close-js-video").on("click", function() {
            $("#container-js-video").removeClass("active"), $("#container-js-video iframe").remove()
        }), $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                    scrollTop: e.offset().top - 150
                }, 1e3), !1
            }
        })
    }, {}],
    33: [function(e, t, a) {
        $(function() {
            var e = $("#gopoint #link-tentang"),
                t = $("#gopoint #link-hadiah"),
                a = $("#gopoint #link-mekanisme"),
                o = $("#gopoint #link-snk"),
                i = {
                    goToSection: function(e) {
                        $("html, body").animate({
                            scrollTop: $(e).offset().top
                        }, 1200)
                    }
                };
            e.on("click", function() {
                i.goToSection(".about")
            }), t.on("click", function() {
                i.goToSection("#promo-banner")
            }), a.on("click", function() {
                i.goToSection(".section-user-review")
            }), o.on("click", function() {
                i.goToSection(".how-it-works--wrapper")
            })
        })
    }, {}],
    34: [function(e, t, a) {
        (function() {
            var e;
            e = function() {
                    function e(e, t) {
                        var a, o;
                        if (this.options = {
                                target: "instafeed",
                                get: "popular",
                                resolution: "thumbnail",
                                sortBy: "none",
                                links: !0,
                                mock: !1,
                                useHttp: !1
                            }, "object" == typeof e)
                            for (a in e) o = e[a], this.options[a] = o;
                        this.context = null != t ? t : this, this.unique = this._genKey()
                    }
                    return e.prototype.hasNext = function() {
                        return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
                    }, e.prototype.next = function() {
                        return !!this.hasNext() && this.run(this.context.nextUrl)
                    }, e.prototype.run = function(t) {
                        var a, o, i;
                        if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                        if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                        return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), a = document.getElementsByTagName("head"), a[0].appendChild(i), o = "instafeedCache" + this.unique, window[o] = new e(this.options, this), window[o].unique = this.unique), !0
                    }, e.prototype.parse = function(e) {
                        var t, a, o, i, n, s, r, l, c, d, p, u, m, h, f, v, g, $, _, y, w, b, k, x, j, S, C, T, N, A, O, D, I;
                        if ("object" != typeof e) {
                            if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                            throw new Error("Invalid JSON response")
                        }
                        if (200 !== e.meta.code) {
                            if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
                            throw new Error("Error from Instagram: " + e.meta.error_message)
                        }
                        if (0 === e.data.length) {
                            if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                            throw new Error("No images were returned from Instagram")
                        }
                        if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (O = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), A = "least" === O[0], O[1]) {
                            case "random":
                                e.data.sort(function() {
                                    return .5 - Math.random()
                                });
                                break;
                            case "recent":
                                e.data = this._sortBy(e.data, "created_time", A);
                                break;
                            case "liked":
                                e.data = this._sortBy(e.data, "likes.count", A);
                                break;
                            case "commented":
                                e.data = this._sortBy(e.data, "comments.count", A);
                                break;
                            default:
                                throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                        }
                        if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                            if (v = e.data, N = parseInt(this.options.limit, 10), null != this.options.limit && v.length > N && (v = v.slice(0, N)), r = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (v = this._filter(v, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                                for (c = "", h = "", y = "", I = document.createElement("div"), p = 0, j = v.length; p < j; p++) {
                                    if (u = v[p], m = u.images[this.options.resolution], "object" != typeof m) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
                                    w = m.width, $ = m.height, _ = "square", w > $ && (_ = "landscape"), w < $ && (_ = "portrait"), f = m.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (f = f.replace(/https?:\/\//, "//")), h = this._makeTemplate(this.options.template, {
                                        model: u,
                                        id: u.id,
                                        link: u.link,
                                        type: u.type,
                                        image: f,
                                        width: w,
                                        height: $,
                                        orientation: _,
                                        caption: this._getObjectProperty(u, "caption.text"),
                                        likes: u.likes.count,
                                        comments: u.comments.count,
                                        location: this._getObjectProperty(u, "location.name")
                                    }), c += h
                                }
                                for (I.innerHTML = c, i = [], o = 0, a = I.childNodes.length; o < a;) i.push(I.childNodes[o]), o += 1;
                                for (k = 0, S = i.length; k < S; k++) T = i[k], r.appendChild(T)
                            } else
                                for (x = 0, C = v.length; x < C; x++) {
                                    if (u = v[x], g = document.createElement("img"), m = u.images[this.options.resolution], "object" != typeof m) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
                                    f = m.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (f = f.replace(/https?:\/\//, "//")), g.src = f, this.options.links === !0 ? (t = document.createElement("a"), t.href = u.link, t.appendChild(g), r.appendChild(t)) : r.appendChild(g)
                                }
                            if (D = this.options.target, "string" == typeof D && (D = document.getElementById(D)), null == D) throw s = 'No element with id="' + this.options.target + '" on page.', new Error(s);
                            D.appendChild(r), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), b = "instafeedCache" + this.unique, window[b] = void 0;
                            try {
                                delete window[b]
                            } catch (E) {
                                n = E
                            }
                        }
                        return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
                    }, e.prototype._buildUrl = function() {
                        var e, t, a;
                        switch (e = "https://api.instagram.com/v1", this.options.get) {
                            case "popular":
                                t = "media/popular";
                                break;
                            case "tagged":
                                if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                                t = "tags/" + this.options.tagName + "/media/recent";
                                break;
                            case "location":
                                if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                                t = "locations/" + this.options.locationId + "/media/recent";
                                break;
                            case "user":
                                if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                                t = "users/" + this.options.userId + "/media/recent";
                                break;
                            default:
                                throw new Error("Invalid option for get: '" + this.options.get + "'.")
                        }
                        return a = e + "/" + t, a += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (a += "&count=" + this.options.limit), a += "&callback=instafeedCache" + this.unique + ".parse"
                    }, e.prototype._genKey = function() {
                        var e;
                        return e = function() {
                            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                        }, "" + e() + e() + e() + e()
                    }, e.prototype._makeTemplate = function(e, t) {
                        var a, o, i, n, s;
                        for (o = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, a = e; o.test(a);) n = a.match(o)[1], s = null != (i = this._getObjectProperty(t, n)) ? i : "", a = a.replace(o, function() {
                            return "" + s
                        });
                        return a
                    }, e.prototype._getObjectProperty = function(e, t) {
                        var a, o;
                        for (t = t.replace(/\[(\w+)\]/g, ".$1"), o = t.split("."); o.length;) {
                            if (a = o.shift(), !(null != e && a in e)) return null;
                            e = e[a]
                        }
                        return e
                    }, e.prototype._sortBy = function(e, t, a) {
                        var o;
                        return o = function(e, o) {
                            var i, n;
                            return i = this._getObjectProperty(e, t), n = this._getObjectProperty(o, t), a ? i > n ? 1 : -1 : i < n ? 1 : -1
                        }, e.sort(o.bind(this)), e
                    }, e.prototype._filter = function(e, t) {
                        var a, o, i, n, s;
                        for (a = [], o = function(e) {
                                if (t(e)) return a.push(e)
                            }, i = 0, s = e.length; i < s; i++) n = e[i], o(n);
                        return a
                    }, e
                }(),
                function(e, a) {
                    return "function" == typeof define && define.amd ? define([], a) : "object" == typeof t && t.exports ? t.exports = a() : e.Instafeed = a()
                }(this, function() {
                    return e
                })
        }).call(this)
    }, {}]
}, {}, [1]);
//# sourceMappingURL=main.js.map