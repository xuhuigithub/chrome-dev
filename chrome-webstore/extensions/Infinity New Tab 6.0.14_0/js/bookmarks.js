function bookmarks() {
    _openbookmark = $setting.get("OpenBookmarksInNewtab") ? "_blank" : "_self", chrome.bookmarks.getTree(function(e) {
        for (var o = e[0].children, i = 0; i < o.length; i++)
            if (0 == i) {
                var n = '<div class="book">';
                n += '<div class="bookss">', n += '<div class="linksss" id="open_apps"><img class="booksss_ico" id="open_apps" src="img/apps.png"/>' + chrome.i18n.getMessage("application") + "</div></div>";
                for (var t = 0; t < o[0].children.length; t++) "object" == typeof o[0].children[t].children ? (n += '<div class="booksss" bookindex="0" bookid="' + o[0].children[t].id + '" parentId="' + o[0].children[t].parentId + '" type="books">' + o[0].children[t].title, n += "</div>") : (n += '<div class="linksss" bookindex="0" bookid="' + o[0].children[t].id + ' " bookurl="' + o[0].children[t].url + '" type="links"><img class="linksss_ico" " bookurl="' + o[0].children[t].url + '" src="' + Favicon_Api + o[0].children[t].url + '"/>' + o[0].children[t].title, n += "</div>");
                n += "</div>";
                try {
                    n += '<div class="other" ><div id="more" bookindex="0" class="linksss">»</div>';
                    for (var s = 1; s < o.length; s++) n += '<div class="booksss" bookindex="0" id="other_bookmarks" bookid="' + o[s].id + '" parentId="' + o[s].parentId + '">' + o[s].title + "</div>";
                    n += '<div class="linksss" bookindex="0" id="manage_bookmarks"><img class="booksss_ico" src="img/bookmarks.png" id="manage_bookmarks"/>' + chrome.i18n.getMessage("bookmark_manage") + "</div></div>"
                } catch (r) {}
                n += "</div>", $(".BookmarkBar").append(stripscript(n))
            }
    })
}

function load_bookmarks() {
    return _new_book = !1, _p_id2 = 0, _book_id = "", _bigest_index = 0, $(document).mousedown(function(e) {
        "manage_bookmarks" == e.target.id && chrome.tabs.getCurrent(function(e) {
            var o = e.index + 1;
            chrome.tabs.create({
                index: o,
                url: "chrome://bookmarks/"
            }, function() {
                return !1
            })
        })
    }), $(document).mousedown(function(e) {
        "open_apps" == e.target.id && chrome.tabs.getCurrent(function(e) {
            var o = e.index + 1;
            chrome.tabs.create({
                index: o,
                url: "chrome://apps/"
            }, function() {
                return !1
            })
        })
    }), $(document).click(function(e) {
        if (!(1 != e.which && 2 != e.which || "linksss" != e.target.className && "linksss_ico" != e.target.className || "open_apps" == e.target.id || "manage_bookmarks" == e.target.id || "more" == e.target.id)) {
            var o = $(e.target).attr("bookurl");
            return 1 == e.which ? (0 == o.indexOf("chrome://") ? chrome.tabs.getCurrent(function(e) {
                var i = e.index + 1;
                chrome.tabs.create({
                    index: i,
                    url: o
                }, function() {
                    return !1
                })
            }) : window.event.ctrlKey ? window.open(o, "_blank") : window.open(o, _openbookmark), !1) : (2 == e.which && (0 == o.indexOf("chrome://") ? chrome.tabs.getCurrent(function(e) {
                var i = e.index + 1;
                chrome.tabs.create({
                    index: i,
                    url: o
                }, function() {
                    return !1
                })
            }) : window.open(o, "_blank")), !1)
        }
    }), $(document).click(function(e) {
        if ("booksss" == e.target.className) {
            $(".newbook").remove(), $(".newbook2").remove(), $my.G_SlideOut = !1;
            var o = e.target;
            _book_id = "", _new_book = !0;
            var i = $(window).width(),
                n = $(o).offset().left,
                t = i - n,
                s = $(o).attr("bookindex");
            s = parseInt(s), s += 1;
            var r = $(o).attr("bookid");
            if (n <= i / 2) var a = '<div bookindex="' + s + '" class="newbook" style="left:' + n + 'px">';
            else var a = '<div bookindex="' + s + '" class="newbook" style="right:' + t + 'px">';
            a += '<div class="newclear" type="links"></div>', chrome.bookmarks.getChildren(r, function(e) {
                if (0 == e.length) a += '<div class="newlinks" type="links"  ><img class="newlinkico" src="img/false.png"/>' + chrome.i18n.getMessage("emp") + "</div>";
                else
                    for (var o = 0; o < e.length; o++) a += "undefined" == typeof e[o].url ? '<div bookindex="' + s + '" class="newbooks" type="books" bookid="' + e[o].id + '" parentId="' + e[o].parentId + '" >' + e[o].title + "</div>" : '<div bookindex="' + s + '" class="newlinks" type="links" bookurl="' + e[o].url + '" bookid="' + e[o].id + '" parentId="' + e[o].parentId + '" ><img class="newlinkico" src="' + Favicon_Api + e[o].url + '"/>' + e[o].title + "</div>";
                a += '<div class="newclear" type="links" style="height:4px;"></div>', a += "</div>", $("#all").append(stripscript(a))
            })
        }
    }), $(document).mouseover(function(e) {
        if (0 == _new_book) return !1;
        if ("booksss" == e.target.className) {
            $(".newbook").remove(), $(".newbook2").remove(), $my.G_SlideOut = !1;
            var o = e.target;
            _book_id = "";
            var i = $(window).width(),
                n = $(o).offset().left,
                t = i - n,
                s = $(o).attr("bookindex");
            s = parseInt(s), s += 1;
            var r = $(o).attr("bookid");
            if (n <= i / 2) var a = '<div bookindex="' + s + '" class="newbook" style="left:' + n + 'px">';
            else var a = '<div bookindex="' + s + '" class="newbook" style="right:' + t + 'px">';
            a += '<div class="newclear" type="links"></div>', chrome.bookmarks.getChildren(r, function(e) {
                if (0 == e.length) a += '<div class="newlinks" type="links"  ><img class="newlinkico" src="img/false.png"/>' + chrome.i18n.getMessage("emp") + "</div>";
                else
                    for (var o = 0; o < e.length; o++) a += "undefined" == typeof e[o].url ? '<div bookindex="' + s + '" class="newbooks" type="books" bookid="' + e[o].id + '" parentId="' + e[o].parentId + '" >' + e[o].title + "</div>" : '<div bookindex="' + s + '" class="newlinks" type="links" bookurl="' + e[o].url + '" bookid="' + e[o].id + '" parentId="' + e[o].parentId + '"><img class="newlinkico" src="' + Favicon_Api + e[o].url + '"/>' + e[o].title + "</div>";
                a += '<div class="newclear" type="links" style="height:4px;"></div>', a += "</div>", $("#all").append(stripscript(a))
            })
        }
    }), $(document).mousedown(function(e) {
        "newbooks" != e.target.className && "newlinks" != e.target.className && "newbook" != e.target.className && "newlinkico" != e.target.className && "booksss" != e.target.className && ($(".newbook").remove(), $(".newbook2").remove(), _new_book = !1, $my.G_SlideOut = !0)
    }), $(document).mouseover(function(e) {
        if ("newbooks" == e.target.className) {
            $my.G_SlideOut = !1;
            var o = e.target,
                i = $(o).attr("parentId");
            i = parseInt(i), _p_id2 = parseInt(_p_id2);
            var n = (_p_id2.toString(), $(o).attr("bookid")),
                t = $(o).attr("bookindex");
            if (t = parseInt(t), _p_id2 >= i && n != _book_id) try {
                for (var s = t + 1; s < _bigest_index + 1; s++) $("[bookindex=" + s + "]").remove()
            } catch (e) {}
            if (n == _book_id) return !1;
            t += 1, _bigest_index <= t && (_bigest_index = t);
            var r = $(window).width(),
                a = ($(window).height(), $(o).offset().left),
                d = ($(o).offset().top - 30, a + 330),
                l = r - a,
                c = $(o).attr("bookid");
            if (a <= r / 2) var k = '<div bookindex="' + t + '" class="newbook2" style="left:' + d + 'px;">';
            else var k = '<div bookindex="' + t + '" class="newbook2" style="right:' + l + 'px;">';
            k += '<div class="newclear" type="links"></div>', chrome.bookmarks.getChildren(c, function(e) {
                if (0 == e.length) k += '<div bookindex="' + t + '" class="newlinks" type="links"  ><img class="newlinkico" src="img/false.png"/>' + chrome.i18n.getMessage("emp") + "</div>";
                else
                    for (var o = 0; o < e.length; o++) k += "undefined" == typeof e[o].url ? '<div bookindex="' + t + '" class="newbooks" type="books" bookid="' + e[o].id + '" parentId="' + e[o].parentId + '">' + e[o].title + "</div>" : '<div bookindex="' + t + '" class="newlinks" type="links" bookurl="' + e[o].url + '" bookid="' + e[o].id + '"><img class="newlinkico" src="' + Favicon_Api + e[o].url + '"/>' + e[o].title + "</div>";
                k += '<div class="newclear" type="links" style="height:4px;"></div>', k += "</div>", $("#all").append(stripscript(k))
            }), _p_id2 = i, _book_id = n
        }
    }), $(document).click(function(e) {
        if ("more" == e.target.id) {
            $my.G_SlideOut = !1, $(".newbook").remove(), $(".newbook2").remove(), _book_id = "", _new_book = !0;
            for (var o = e.target, i = $(o).offset().left, n = 0; n < $(".book").children().length; n++) {
                var t = $($(".book").children()[n]).offset().left;
                if (i < t + 152) {
                    break
                }
            }
            var s = $(o).attr("bookindex");
            s = parseInt(s), s += 1;
            var r = '<div bookindex="' + s + '" class="newbook" style="right:0px">';
            r += '<div class="newclear" type="links"></div>', chrome.bookmarks.getTree(function(e) {
                var o = e[0].children[0].children;
                if (0 == o.length) r += '<div class="newlinks" type="links"  ><img class="newlinkico" src="img/false.png"/>' + chrome.i18n.getMessage("emp") + "</div>";
                else
                    for (var i = n; i < o.length; i++) r += "undefined" == typeof o[i].url ? '<div bookindex="' + s + '" class="newbooks" type="books" bookid="' + o[i].id + '" parentId="' + o[i].parentId + '" >' + o[i].title + "</div>" : '<div bookindex="' + s + '" class="newlinks" type="links" bookurl="' + o[i].url + '" bookid="' + o[i].id + '" parentId="' + o[i].parentId + '" ><img class="newlinkico" src="' + Favicon_Api + o[i].url + '"/>' + o[i].title + "</div>";
                r += '<div class="newclear" type="links" style="height:4px;"></div>', r += "</div>", $("#all").append(stripscript(r))
            })
        }
    }), $(document).mouseover(function(e) {
        if ("more" == e.target.id) {
            if (0 == _new_book) return !1;
            $my.G_SlideOut = !1, $(".newbook").remove(), $(".newbook2").remove(), _book_id = "";
            for (var o = e.target, i = $(o).offset().left, n = 0; n < $(".book").children().length; n++) {
                var t = $($(".book").children()[n]).offset().left;
                if (i < t + 152) {
                    break
                }
            }
            var s = $(o).attr("bookindex");
            s = parseInt(s), s += 1;
            var r = '<div bookindex="' + s + '" class="newbook" style="right:0px">';
            r += '<div class="newclear" type="links"></div>', chrome.bookmarks.getTree(function(e) {
                var o = e[0].children[0].children;
                if (0 == o.length) r += '<div class="newlinks" type="links"  ><img class="newlinkico" src="img/false.png"/>' + chrome.i18n.getMessage("emp") + "</div>";
                else
                    for (var i = n; i < o.length; i++) r += "undefined" == typeof o[i].url ? '<div bookindex="' + s + '" class="newbooks" type="books" bookid="' + o[i].id + '" parentId="' + o[i].parentId + '" >' + o[i].title + "</div>" : '<div bookindex="' + s + '" class="newlinks" type="links" bookurl="' + o[i].url + '" bookid="' + o[i].id + '" parentId="' + o[i].parentId + '" ><img class="newlinkico" src="' + Favicon_Api + o[i].url + '"/>' + o[i].title + "</div>";
                r += '<div class="newclear" type="links" style="height:4px;"></div>', r += "</div>", $("#all").append(stripscript(r))
            })
        }
    }), $(document).click(function(e) {
        if (_openbookmark = $setting.get("OpenBookmarksInNewtab") ? "_blank" : "_self", !(1 != e.which && 2 != e.which || "newlinks" != e.target.className && "newlinkico" != e.target.className)) {
            if ("newlinkico" == e.target.className) var o = e.target.parentNode;
            else var o = e.target;
            var i = $(o).attr("bookurl");
            return $(".newbook").remove(), $(".newbook2").remove(), 1 == e.which && (0 == i.indexOf("chrome://") ? chrome.tabs.getCurrent(function(e) {
                var o = e.index + 1;
                chrome.tabs.create({
                    index: o,
                    url: i
                }, function() {
                    return !1
                })
            }) : window.event.ctrlKey ? window.open(i, "_blank") : window.open(i, _openbookmark)), 2 == e.which && (0 == i.indexOf("chrome://") ? chrome.tabs.getCurrent(function(e) {
                var o = e.index + 1;
                chrome.tabs.create({
                    index: o,
                    url: i
                }, function() {
                    return !1
                })
            }) : window.open(i, "_blank")), _new_book = !1, $my.G_SlideOut = !0, !1
        }
    }), !1
}
Favicon_Api = "chrome://favicon/";