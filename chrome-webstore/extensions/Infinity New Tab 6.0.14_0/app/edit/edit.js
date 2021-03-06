"use strict";
$(document).ready(function() {
    $("#Editflat1").spectrum({
        preferredFormat: "rgb",
        flat: !0,
        showInput: !0
    });
    var t = Math.round($setting.get("iconFillet")) / 2 + "%";
    $("#EditiconPreviewTop").css("border-radius", t);
    try {
        $("#EdituploadImage")[0].onchange = function() {
            try {
                $("#EditiconPreview").text("");
                var t = this.files[0],
                    i = new FileReader,
                    e = document.getElementById("Editmycanvas"),
                    r = e.getContext("2d");
                i.onload = function(t) {
                    var i = new Image;
                    i.onload = function() {
                        $(e).attr("cimg", i.src), e.width = 300, e.height = 300;
                        var t = 300,
                            o = Math.round(300 * i.height / i.width),
                            a = Math.round((300 - t) / 2),
                            d = Math.round((300 - o) / 2);
                        r.drawImage(i, a, d, t, o), $("#EditiconPreview").attr("bgImg", e.toDataURL()), $("#EditiconPreview").attr({
                            left: a,
                            top: d
                        })
                    }, i.src = t.target.result
                }, i.readAsDataURL(t), $("#Editremove,#EditimgSize,#EditimageSize,.EditadjustBu").fadeIn(100), $("#EditiconPreview").attr("dragMove", "true"), $("#EditiconPreviewTop").css({
                    "background-color": "transparent",
                    "background-image": "url(../img/transparent.png)"
                }), $(".EditicobgColor").css("border-color", "transparent"), $("#EdittransparentBg").css("border-color", "#ccc")
            } catch (o) {}
        }, $("#EditimgSize").live("input", function(t) {
            $("#EditiconPreview").text("");
            var i = $(this).val(),
                e = document.getElementById("Editmycanvas"),
                r = e.getContext("2d");
            r.clearRect(0, 0, e.width, e.height);
            var o = $(e).attr("cimg"),
                a = new Image;
            a.src = o;
            var d = i,
                c = Math.round(i * a.height / a.width),
                n = Math.round((300 - d) / 2),
                s = Math.round((300 - c) / 2);
            r.drawImage(a, n, s, d, c), $("#EditiconPreview").attr({
                left: n,
                top: s
            }), $("#EditiconPreview").attr("bgImg", e.toDataURL())
        }), $("#EditiconPreviewTop").live("mousedown", function(t) {
            var i = t.pageX,
                e = t.pageY,
                r = $("#EditiconPreview").attr("left"),
                o = $("#EditiconPreview").attr("top");
            $("#EditiconPreview").attr({
                useleft: r,
                usetop: o
            }), $(this).attr({
                x: i,
                y: e
            })
        }), $("#EditiconPreviewTop").live("mousemove", function(t) {
            if (1 == t.which && "true" == $("#EditiconPreview").attr("dragMove")) {
                $("#EditiconPreview").text("");
                var i = $("#EditimgSize").val(),
                    e = parseInt($(this).attr("x")),
                    r = parseInt($(this).attr("y")),
                    o = t.pageX,
                    a = t.pageY,
                    d = Math.round($("#EditiconPreview").attr("useleft")),
                    c = Math.round($("#EditiconPreview").attr("usetop")),
                    n = d + 3 * (o - e),
                    s = c + 3 * (a - r),
                    l = document.getElementById("Editmycanvas"),
                    g = l.getContext("2d");
                g.clearRect(0, 0, l.width, l.height);
                var E = $(l).attr("cimg"),
                    v = new Image;
                v.src = E;
                var u = i,
                    h = Math.round(i * v.height / v.width),
                    p = Math.round((300 - u) / 2);
                Math.round((300 - h) / 2);
                g.drawImage(v, p + n, p + s, u, h), $("#EditiconPreview").attr("left", n), $("#EditiconPreview").attr("top", s), $("#EditiconPreview").attr("bgImg", l.toDataURL())
            }
        }), $("#Editremove").click(function(t) {
            $("#EditiconPreview").css("background-image", ""), $("#EditiconPreview").attr("bgImg", ""), $("#EditiconPreview").attr({
                top: "0",
                left: "0"
            }), $("#EdituploadImage").val("");
            var i = document.getElementById("Editmycanvas"),
                e = i.getContext("2d");
            e.clearRect(0, 0, i.width, i.height), $("#Editremove,#EditimgSize,#EditimageSize,.EditadjustBu,#EditshareIcon").fadeOut(100), $("#EditiconPreview").text($("#EditaddTitle").val().substring(0, 4)), $("#EditiconPreview").attr("dragMove", "false"), $(".EditicobgColor").css("border-color", "transparent");
            var r = $(".EditicobgColorPre:nth-child(1)").css("background-color");
            $(".EditicobgColorPre:nth-child(1)").css("border-color", r), $("#EditiconPreviewTop").css({
                "background-color": r,
                "background-image": ""
            })
        }), $(".editico").live("click", function(t) {
            if (isAllSlideFalse());
            else {
                slideLock(), $("#EditiconPreview").text(""), $("#editBoxHover").show(), $("#EditiconPreview").attr("dragMove", "false"), $(".EditicobgColor").css("border-color", "transparent");
                for (var i = RGBToHex($(this).parent().attr("bgColor")), e = 1; e < 10; e++) RGBToHex($(".EditicobgColorPre:nth-child(" + e + ")").css("background-color")) == i && $(".EditicobgColorPre:nth-child(" + e + ")").css("border-color", i);
                $("#EditiconPreviewTop").css({
                    "background-color": i,
                    "background-image": ""
                }), $("#Editremove,#EditimgSize,#EditimageSize,.EditadjustBu,#EditshareIcon").hide(), $("#EditiconPreview").css("background-image", ""), $("#EditiconPreview").attr("bgImg", ""), $("#EditiconPreview").attr({
                    top: "0",
                    left: "0"
                }), $("#EdituploadImage").val("");
                var e = $(this).parent().index(),
                    r = $(this).parent().parent().parent().index(),
                    o = $(this).parent().attr("type");
                $("#EditiconPreview").attr({
                    n: r,
                    i: e,
                    icotype: o
                });
                var a = document.getElementById("Editmycanvas"),
                    d = a.getContext("2d");
                d.clearRect(0, 0, a.width, a.height);
                var c = $(this).parent().attr("url"),
                    n = $(this).parent().attr("iconname"),
                    s = $(this).parent().attr("ico");
                if ($("#EditaddTitle").val(n), $("#EditaddUrl").val(c), $("#EditpreviewName").text(n), "" != s) {
                    var a = document.getElementById("Editmycanvas"),
                        d = a.getContext("2d"),
                        l = new Image;
                    if (l.src = s, l.onload = function() {
                            $(a).attr("cimg", l.src), a.width = 300, a.height = 300;
                            var t = 300,
                                i = Math.round(300 * l.height / l.width),
                                e = Math.round((300 - t) / 2),
                                r = Math.round((300 - i) / 2);
                            d.drawImage(l, e, r, t, i), $("#EditiconPreview").attr("bgImg", a.toDataURL()), $("#EditiconPreview").attr({
                                left: e,
                                top: r
                            })
                        }, $("#Editremove,#EditimgSize,#EditimageSize,.EditadjustBu").show(), $("#EditiconPreview").attr("dragMove", "true"), "#" == ebgColor) $("#EditiconPreviewTop").css({
                        "background-color": "transparent",
                        "background-image": "url(../img/transparent.png)"
                    });
                    else {
                        for (var e = 1; e < 10; e++) RGBToHex($(".EditicobgColorPre:nth-child(" + e + ")").css("background-color")) == ebgColor && $(".EditicobgColorPre:nth-child(" + e + ")").css("border-color", ebgColor);
                        $("#EditiconPreviewTop").css({
                            "background-color": ebgColor,
                            "background-image": ""
                        })
                    }
                    $(".EditicobgColor").css("border-color", "transparent"), $("#EdittransparentBg").css("border-color", "#ccc")
                } else $("#EditiconPreview").text(n)
            }
        }), $(".EditicobgColorPre").live("click", function(t) {
            $(".EditicobgColor").css("border-color", "transparent");
            var i = $(this).css("background-color");
            $(this).css("border-color", i), $("#EditiconPreviewTop").css({
                "background-color": i,
                "background-image": ""
            })
        }), $(".sp-input").attr("disabled", "disabled"), $("#EditColorPicker").click(function() {
            if ("true" == $(this).attr("show")) {
                $("#Editpicker").fadeOut(100);
                var t = $("#Editpicker .sp-input").val();
                $("#EditiconPreviewTop").css({
                    "background-color": t
                }), $(".EditicobgColor").css("border-color", ""), $("#EditColorPicker").css("border-color", t), $(this).attr("show", "false")
            } else $("#Editpicker").fadeIn(100), $(this).attr("show", "true")
        }), $("#Editpicker").live("mousemove", function(t) {
            if (1 == t.which) {
                var i = $("#Editpicker .sp-input").val();
                $(".EditicobgColor").css("border-color", ""), $("#EditiconPreviewTop").css({
                    "background-color": i,
                    "background-image": ""
                }), $("#EditColorPicker").css("border-color", i)
            }
        }), $(document).mousedown(function(t) {
            "Editpicker" != t.target.id && "EditBu" != t.target.id && ("EditColorPicker" == t.target.id || ($("#Editpicker").fadeOut(100), $("#EditColorPicker").attr("show", "false")))
        }), $("#EdittransparentBg").live("click", function(t) {
            $(".EditicobgColor").css("border-color", ""), $(this).css("border-color", "#ccc"), $("#EditiconPreviewTop").css({
                "background-color": "transparent",
                "background-image": "url(../img/transparent.png)"
            })
        }), $("#EditaddTitle").live("input", function(t) {
            var i = $(this).val(),
                e = "";
            $("#EditpreviewName").text(i), e = i.substring(0, 4), "" == $("#EditiconPreview").attr("bgImg") && ("" == i && $("#EditpreviewName").text(i18n("addTitle")), $("#EditiconPreview").text(e))
        }), $("#EditBu").live("click", function(t) {
            try {
                var i = $("#EditaddTitle").val(),
                    e = $("#EditaddUrl").val();
                e.indexOf("://") > 0 || e.indexOf("mailto:") >= 0 || (e = "http://" + e);
                var r = $("#EditiconPreviewTop").css("background-color"),
                    o = $("#EditiconPreview").attr("bgImg"),
                    a = $("#EditiconPreview").text(),
                    d = parseInt($("#EditiconPreview").attr("n")),
                    c = parseInt($("#EditiconPreview").attr("i")),
                    n = $("#EditiconPreview").attr("icotype");
                "app" == n && (n = "ico");
                var s = {
                        type: n,
                        name: i,
                        url: e,
                        bgColor: r,
                        title: a,
                        ico: o
                    },
                    l = JSON.parse(localStorage.main);
                l[d][c] = s, localStorage.main = JSON.stringify(l), $iconIni.load(l), $(".groupIn:nth-child(" + (d + 1) + ")").children(".icon:nth-child(" + (c + 1) + ")").css({
                    "-webkit-animation": "zoomOut 0.2s ease",
                    "-webkit-transform": "scale(1)"
                });
                var g = _getCurrentN() + 1;
                $(".point").css("background-color", ""), $(".point:nth-child(" + g + ")").css("background-color", i18n("pointColor")), $notification.show(i + i18n("HasBeenUpdated"), !0), $setting.sync()
            } catch (E) {}
        })
    } catch (i) {}
});