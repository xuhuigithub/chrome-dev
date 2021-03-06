_maxResults_ = 50, $(document).ready(function() {
    window.$Historys = {
        ini: function() {
            $Historys.showIni(""), $Historys.open(""), $Historys.search(""), $Historys["delete"](), $("#historyContain").scroll(function(t) {
                var i = $(this)[0].scrollHeight,
                    e = $(this)[0].scrollTop,
                    s = $(this).height();
                e + s + 10 >= i && i - s > 11 && $Historys.showNext()
            })
        },
        showIni: function(t) {
            chrome.history.search({
                text: t,
                maxResults: _maxResults_
            }, function(t) {
                $Historys.show(t)
            })
        },
        show: function(t) {
            for (var i = "", e = 0; e < t.length; e++) {
                var s = t[e];
                s.url = html2Escape(s.url), i += '<div class="historyItem">', i += '<img class="historyIcon" src="chrome://favicon/' + s.url + '">', i += '<div class="historyName" url="' + s.url + '">' + (s.title ? s.title : s.url) + "</div>", i += '<div class="historyDelete" title="' + (s.title ? s.title : s.url) + '" url="' + s.url + '"></div>', i += "</div>"
            }
            $("#historyContain").html(stripscript(i))
        },
        showNext: function() {
            chrome.history.search({
                text: "",
                maxResults: _maxResults_ + 50
            }, function(t) {
                _maxResults_ += 50, $Historys.show(t)
            })
        },
        "delete": function() {
            $(".historyItem").live("mouseover", function(t) {
                $(this).children(".historyDelete").show()
            }), $(".historyItem").live("mouseleave", function(t) {
                $(this).children(".historyDelete").hide()
            }), $(".historyDelete").live("click", function(t) {
                var i = $(this),
                    e = i.attr("url"),
                    s = '"' + i.attr("title").substring(0, 12) + '..."' + i18n("HasBeenDeleted");
                chrome.history.deleteUrl({
                    url: e
                }, function() {
                    i.parent().fadeOut(100), $notification.show(s, 1)
                })
            }), $("#clearAllHistory").live("click", function(t) {
                $("#waiting").fadeIn(100), chrome.history.deleteAll(function() {
                    $("#waiting").fadeOut(100), $("#historyContain").html("");
                    var t = i18n("BrowsingHistoryHasBeenCleared");
                    $notification.show(t, 1)
                })
            })
        },
        search: function() {
            $("#searchhistory").live("input", function(t) {
                var i = $(this).val();
                $Historys.showIni(i)
            })
        },
        open: function() {
            $(".historyName").live("mousedown", function(t) {
                if (2 == t.which) {
                    var i = $(this).attr("url");
                    window.open(i, "_blank")
                }
            }), $(".historyName").live("click", function(t) {
                var i = $(this).attr("url"),
                    e = "",
                    s = $setting.get("openInNewtab");
                return e = s ? "_blank" : "_self", window.event.ctrlKey ? window.open(i, "_blank") : window.open(i, e), !1
            })
        }
    }, $Historys.ini()
});