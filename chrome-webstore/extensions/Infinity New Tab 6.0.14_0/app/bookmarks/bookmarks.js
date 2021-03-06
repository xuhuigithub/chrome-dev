$(document).ready(function() {
    function o(o) {
        return "[object Array]" === Object.prototype.toString.call(o)
    }
    window.$bookmarks = {
        ini: function() {
            try {
                $bookmarks.onClickFolder(), $bookmarks.onSearch(), $bookmarks.onOpen(), chrome.bookmarks.getTree(function(o) {
                    var r = o[0];
                    $bookmarks.bookmarksFolder = [], $bookmarks.getIn(r), $bookmarks.showFolders($bookmarks.bookmarksFolder)
                })
            } catch (o) {}
        },
        bookmarksFolder: [],
        onSearch: function() {
            $("#searchBookmarks").live("input", function(o) {
                $(".bookmarksFolders").css({
                    color: "",
                    "background-color": ""
                }), $("#searchFolder").css({
                    height: "40px"
                }), $("#bookmarksLeft").animate({
                    scrollTop: "0px"
                }, 200);
                var r = $(this).val();
                if (chrome.bookmarks.search(r, function(o) {
                        $bookmarks.showSearchResult(o)
                    }), "" == $(this).val()) {
                    $(".bookmarksFolders").css({
                        color: "",
                        "background-color": ""
                    }), $("#searchFolder").css({
                        height: "0px"
                    }), $(".bookmarksFolders:nth-child(2)").css({
                        color: "#fdfdfd",
                        "background-color": "#2980B9"
                    });
                    var e = $(".bookmarksFolders:nth-child(2)").attr("bookmarkfolderid");
                    $bookmarks.getBookmarks(e)
                }
            })
        },
        showFolders: function(o) {
            for (var r = "", e = 0; e < $bookmarks.bookmarksFolder.length; e++) {
                if (0 == e) {
                    $bookmarks.getBookmarks($bookmarks.bookmarksFolder[0].id);
                    var t = "\tbackground-color: #2980B9;color:#fdfdfd;";
                    r += '<div class="bookmarksFolders" id="searchFolder" bookmarkfolderid="' + $bookmarks.bookmarksFolder[e].id + '">' + i18n("search") + "</div>"
                } else var t = "";
                r += '<div class="bookmarksFolders" style="' + t + '" title="' + $bookmarks.bookmarksFolder[e].title + '" bookmarkfolderid="' + $bookmarks.bookmarksFolder[e].id + '">' + $bookmarks.bookmarksFolder[e].title + "</div>"
            }
            $("#bookmarksLeft").html(stripscript(r))
        },
        getIn: function(r) {
            if ("object" == typeof r && !o(r))
                for (var e in r)
                    if ("children" == e) {
                        try {
                            if ("undefined" != typeof r[e].dateGroupModified || "undefined" == typeof r[s].url) {
                                var t = {
                                    id: r[e].id,
                                    title: r[e].title
                                };
                                $bookmarks.bookmarksFolder.push(t)
                            }
                        } catch (a) {}
                        $bookmarks.getIn(r[e])
                    }
            if (o(r))
                for (var s = 0; s < r.length; s++) {
                    try {
                        if ("undefined" != typeof r[s].dateGroupModified || "undefined" == typeof r[s].url) {
                            var t = {
                                id: r[s].id,
                                title: r[s].title
                            };
                            $bookmarks.bookmarksFolder.push(t)
                        }
                    } catch (a) {}
                    $bookmarks.getIn(r[s])
                }
        },
        getBookmarks: function(o) {
            chrome.bookmarks.getChildren(o, function(o) {
                for (var r = "", e = 0; e < o.length; e++) try {
                    o[e].url = html2Escape(o[e].url), "undefined" == typeof o[e].dateGroupModified && "undefined" != typeof o[e].url && (r += '<div class="bookmarksItem" url="' + o[e].url + '" title="' + (o[e].title ? o[e].title : o[e].url) + '">', r += '<img src="chrome://favicon/' + o[e].url + '" class="bookmarksIcon">', r += '<div class="bookmarksName">' + (o[e].title ? o[e].title : o[e].url) + "</div>", r += "</div>")
                } catch (t) {
                    continue
                }
                $("#bookmarksRight").html(stripscript(r))
            })
        },
        showSearchResult: function(o) {
            for (var r = "", e = 0; e < o.length; e++) try {
                o[e].url = html2Escape(o[e].url), "undefined" == typeof o[e].dateGroupModified && "undefined" != typeof o[e].url && (r += '<div class="bookmarksItem" url="' + o[e].url + '" title="' + (o[e].title ? o[e].title : o[e].url) + '">', r += '<img src="chrome://favicon/' + o[e].url + '" class="bookmarksIcon">', r += '<div class="bookmarksName">' + (o[e].title ? o[e].title : o[e].url) + "</div>", r += "</div>")
            } catch (t) {
                continue
            }
            $("#bookmarksRight").html(stripscript(r))
        },
        onClickFolder: function() {
            $(".bookmarksFolders").live("click", function(o) {
                $(".bookmarksFolders").css({
                    color: "",
                    "background-color": ""
                }), $("#searchFolder").css({
                    height: "0px"
                }), $(this).css({
                    color: "#fdfdfd",
                    "background-color": "#2980B9"
                });
                var r = $(this).attr("bookmarkfolderid");
                $bookmarks.getBookmarks(r)
            })
        },
        onOpen: function() {
            $(".bookmarksItem").live("click", function(o) {
                var r = $(this).attr("url"),
                    e = $setting.get("OpenBookmarksInNewtab");
                if (0 == r.indexOf("chrome://")) chrome.tabs.getCurrent(function(o) {
                    var e = o.index + 1;
                    chrome.tabs.create({
                        index: e,
                        url: r
                    }, function() {
                        return !1
                    })
                });
                else {
                    if (e) var t = "_blank";
                    else var t = "_self";
                    window.event.ctrlKey ? window.open(r, "_blank") : window.open(r, t)
                }
            }), $(".bookmarksItem").live("mousedown", function(o) {
                var r = $(this).attr("url");
                if (2 == o.which) return 0 == r.indexOf("chrome://") ? chrome.tabs.getCurrent(function(o) {
                    var e = o.index + 1;
                    chrome.tabs.create({
                        index: e,
                        url: r
                    }, function() {
                        return !1
                    })
                }) : window.open(r, "_blank"), !1
            })
        }
    };
    try {
        $bookmarks.ini()
    } catch (r) {}
});