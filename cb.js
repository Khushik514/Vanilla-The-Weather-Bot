var me = {};
var you = {};
you.avatar = "data:image/jpeg;base64,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";
me.avatar = "data:image/png;base64,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";
var weatherConditions;
var text;


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function myFunction() {
  var element = document.body;
      element.classList.toggle("dark-mode");
     var element1 = document.getElementById("box");
      element1.classList.toggle("b-dr");
    
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time) {
    if (time === undefined) {
        time = 0;
    }
    var y;
    var control = "";
    var control2 = "";
    var control3 = "";
    var control4 = "";
    var date = formatAMPM(new Date());

    if (who == "me") {
        control = '<li style="width:100%">' +
            '<div class="msj macro">' +
            '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
            '<div class="text text-l">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '</div>' +
            '</li>';
        $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
        /* setTimeout(
             function(){                        
                 $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
             }, time); */
        function formatData(data) {
            return {
                location: `${data.location.name},${data.location.country}`,
                temperature: data.current.temperature,
                condition: data.current.weather_descriptions[0],
                code: data.current.weather_code,
                icon: data.current.weather_icons
            }
        }
        var result = "";
        const RAPID_API_URL = "http://api.weatherstack.com/current?acess_key=";
        var access_key = '9d0fdc6ba63847e8feb8458abeda2ed6';
        console.log(text.indexOf("Hello"));
        if (text.indexOf("Hi") >= 0 || text.indexOf("Hello") >= 0 || text.indexOf("Hey") >= 0 || text.indexOf("Heya") >= 0 || text.indexOf("Hola") >= 0 || text.indexOf("hello") >= 0 || text.indexOf("heya") >= 0 || text.indexOf("hola") >= 0 || text.indexOf("hey") >= 0) {
            result = "Greetings to u too. How may I help you?";
            console.log(text, result);
            control3 = '<li style="width:100%;">' +
                '<div class="msj-rta macro">' +
                '<div class="text text-r">' +
                '<p>' + result + '</p>' +
                '<p><small>' + date + '</small></p>' +
                '</div>' +
                '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
                '</li>';
            $("ul").append(control3).scrollTop($("ul").prop('scrollHeight'));
        }
        else if (text.indexOf("Bye") >= 0 || text.indexOf("bye") >= 0 || text.indexOf("Bubye") >= 0 || text.indexOf("bubye") >= 0 || text.indexOf("Quit") >= 0 || text.indexOf("quit") >= 0 || text.indexOf("exit") >= 0 || text.indexOf("Exit") >= 0 || text.indexOf("Close") >= 0 || text.indexOf("close") >= 0 || text.indexOf("End") >= 0 || text.indexOf("end") >= 0 || text.indexOf("Tata") >= 0 || text.indexOf("tata") >= 0 || text.indexOf("goodbye") >= 0 || text.indexOf("Goodbye") >= 0) {
            you.avatar = "data:image/jpeg;base64,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";
            result = "Have a nice day...Goodbye";
            console.log(text, result);
            control4 = '<li style="width:100%;">' +
                '<div class="msj-rta macro">' +
                '<div class="text text-r">' +
                '<p>' + result + '</p>' +
                '<p><small>' + date + '</small></p>' +
                '</div>' +
                '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
                '</li>';
            $("ul").append(control4).scrollTop($("ul").prop('scrollHeight'));
        }
        /*
                const patternDict = [{
                    pattern: '\\b(?<greeting>Hi|Hello|Hey|Heya|Hi|Hola)\\b',
                    intent: 'Hello'
                },
                {
                    pattern: '\\b(Bye|Bubye|Quit|Exit|Close|End|Tata|Goodbye)\\b',
                    intent: 'Exit'
                },
                {
                    pattern: 'in\\s\\b(?<city>.+)',
                    intent: 'CurrentWeather'
                }];*/
        else {
            var i = text.indexOf("in");
            if (i != -1)
                text = text.substr(i + 3);
            else
                text = text;
            var query = text;
            var params =
            {
                access_key: '9d0fdc6ba63847e8feb8458abeda2ed6',
                query: text
            };
            axios.get(`${RAPID_API_URL}${access_key}&query=${query}`, { params }).then((response) => {
                weatherConditions = formatData(response.data);
                var prefix = "";
                var prefix2 = "";
                var code1 = [
                    395,
                    392,
                    389,
                    386,
                    359,
                    356,
                    353,
                    338,
                    335,
                    332,
                    329,
                    326,
                    323,
                    320,
                    317,
                    314,
                    311,
                    308,
                    305,
                    302,
                    299,
                    296,
                    293,
                    284,
                    281,
                    266,
                    263,
                    260,
                    248,
                    230,
                    185,
                    182,
                    179,
                    176,
                    143
                ];
                code2 = [377, 374, 371, 368, 365, 362, 350, 200];
                code3 = [227, 113, 116, 119, 122];
                if (code1.includes(weatherConditions.code))
                    prefix = "there is";
                else if (code2.includes(weatherConditions.code))
                    prefix = "there are";
                else if (code3.includes(weatherConditions.code))
                    prefix = "it is";
                if (weatherConditions.temperature < 5) {
                    prefix2 = 'shivering cold';
                } else if (weatherConditions.temperature >= 5 && weatherConditions.temperature < 15) {
                    prefix2 = 'pretty cold';
                } else if (weatherConditions.temperature >= 15 && weatherConditions.temperature < 25) {
                    prefix2 = 'moderately cold';
                } else if (weatherConditions.temperature >= 25 && weatherConditions.temperature < 32) {
                    prefix2 = 'quite warm';
                } else if (weatherConditions.temperature >= 32 && weatherConditions.temperature < 40) {
                    prefix2 = 'very hot';
                } else {
                    prefix2 = 'super hot';
                }
                you.avatar=weatherConditions.icon;
                result = "Right now, " + prefix + " " + weatherConditions.condition + " in " + weatherConditions.location + ". " + "It is " + prefix2 + " at " + weatherConditions.temperature + " degree Celsius";
                console.log(text, result);
                control2 = '<li style="width:100%;">' +
                    '<div class="msj-rta macro">' +
                    '<div class="text text-r">' +
                    '<p>' + result + '</p>' +
                    '<p><small>' + date + '</small></p>' +
                    '</div>' +
                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
                    '</li>';
                $("ul").append(control2).scrollTop($("ul").prop('scrollHeight'));
            }

            );

        }
    }
    /*setTimeout(
        function(){                        
            $("ul").append(control2).scrollTop($("ul").prop('scrollHeight'));
        }, time);*/

}

function resetChat() {
    $("ul").empty();
}

$(".mytext").on("keydown", function (e) {
    if (e.which == 13) {
        var text = $(this).val();
        if (text !== "") {
            insertChat("me", text);
            $(this).val('');
        }
    }
});

$('body > div > div > div:nth-child(2) > span').click(function () {
    $(".mytext").trigger({ type: 'keydown', which: 13, keyCode: 13 });
})

//-- Clear Chat
resetChat();

//-- Print Messages
//-- NOTE: No use time on insertChat.
