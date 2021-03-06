"use strict";

function getDragId() {
    var t = $setting.get("iconNum");
    if ("2x5" == t) var r = "dragIn1";
    if ("3x4" == t) var r = "dragIn2";
    if ("3x5" == t) var r = "dragIn3";
    if ("3x6" == t) var r = "dragIn4";
    return r
}

function getCurrentNum() {
    var t = $setting.get("iconNum"),
        r = t.split("x"),
        i = parseInt(r[0]),
        e = parseInt(r[1]),
        n = i * e;
    return n
}
window.$drag = function() {
    document.ondragover = function(t) {
        t.preventDefault()
    }, $(".icon").live("dragstart", function(t) {
        $(this).parent().attr("drop", "true");
        var r = $(this).parent().parent().index(),
            i = $(this).index(),
            e = getDragId(),
            n = $(this)[0],
            o = JSON.parse(localStorage.main);
        1 != o.length && $("#right,#left").show(), $(n)[0].ondrag = function(t) {
            $(n).before('<div id="' + e + '"></div>'), $(n).remove()
        }, console.log(n), $(n)[0].ondragend = function(t) {
            var n = $("#" + e).parent().parent().index(),
                o = $("#" + e).index(),
                a = getCurrentNum();
            $("#" + e).remove(), $("#right,#left").hide(), $("#right,#left").css("opacity", "0"), $("#right,#left").attr("do", "true"), $(".groupIn").attr("drop", "false"), $("#noti").fadeOut(100);
            var l = JSON.parse(localStorage.main);
            if (o == a);
            else {
                var d = l[r][i];
                l[r].splice(i, 1), l[n].splice(o, 0, d)
            }
            var s = l,
                c = s[r].length;
            0 == c && s.splice(r, 1), $iconIni.load(s), localStorage.main = JSON.stringify(l), $(".point").css("background-color", ""), $(".point:nth-child(" + (n + 1) + ")").css("background-color", i18n("pointColor")), $setting.sync(), setAllNotiNum(), G_Infinity_Open_Lock = !1, Show_Noti_Num = !0
        }
    }), $("#right").live("dragover", function(t) {
        if ($("#mainAll").is(":animated")) return !1;
        var r = getDragId();
        $(this).css("opacity", 1), "true" == $(this).attr("do") && ($(".groupIn").attr("drop", "false"), $("#noti").fadeOut(100), $onSlide.toLeft("#mainAll", function(t) {
            var i = getCurrentNum(),
                e = $(".group:nth-child(" + t + ")").children().children().length;
            $("#" + r).insertAfter($(".group:nth-child(" + t + ")").children().children(":last")), e == i ? ($notification.show(i18n("NoSpace")), $("#" + r).hide()) : ($("#" + r).show(), $(".group:nth-child(" + t + ")").children().attr("drop", "true"))
        }), $(this).attr("do", "false"))
    }), $("#left").live("dragover", function(t) {
        if ($("#mainAll").is(":animated")) return !1;
        var r = getDragId();
        $(this).css("opacity", 1), "true" == $(this).attr("do") && ($(".groupIn").attr("drop", "false"), $("#noti").fadeOut(100), $onSlide.toRight("#mainAll", function(t) {
            var i = getCurrentNum();
            if ("last" == t) {
                var e = $(".group:last").children().children().length;
                $("#" + r).insertAfter($(".group:last").children().children(":last")), e == i ? ($("#" + r).hide(), $notification.show(i18n("NoSpace"))) : ($("#" + r).show(), $(".group:last").children().attr("drop", "true"))
            } else {
                var e = $(".group:nth-child(" + t + ")").children().children().length;
                $("#" + r).insertAfter($(".group:nth-child(" + t + ")").children().children(":last")), e == i ? ($("#" + r).hide(), $notification.show(i18n("NoSpace"))) : ($("#" + r).show(), $(".group:nth-child(" + t + ")").children().attr("drop", "true"))
            }
        }), $(this).attr("do", "false"))
    }), $("#right,#left").live("dragleave", function(t) {
        $(this).css("opacity", 0), $("#right,#left").attr("do", "true")
    }), $(".icon").live("dragover", function(t) {
        if ("true" == $(this).parent().attr("drop")) {
            var r = getDragId(),
                i = $("#" + r).index(),
                e = $(this).index();
            e < i && $("#" + r).insertBefore($(this)), e > i && $("#" + r).insertAfter($(this))
        }
    })
};