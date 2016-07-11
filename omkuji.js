/
        document.getElementById('btn').addEventListener('click', function () {
            var omikuji = ['大吉!', '小吉!', '中吉!', '凶!', '吉!','大凶!'];
            //決まり文句
            var number= Math.floor(Math.random() * omikuji.length);
            
            /*
            var num=document.getElementById('unsei').innerHTML = omikuji[number];
            */
            
            var num=omikuji[number];
            if(num=='大吉!'){
                document.getElementById('unsei') = '大吉ですよ!';
            }else if(num=='小吉!'){
                document.getElementById('unsei').innerHTML = '小吉ですよ!';
            }else if(num=='中吉!'){
                document.getElementById('unsei').innerHTML = '中吉ですよ';
            }else if(num=='凶!'){
                document.getElementById('unsei').innerHTML = '凶ですよ!';
            }else if(num=='吉!'){
                document.getElementById('unsei').innerHTML = '吉ですよ!';
            }else if(num=='大凶!'){
                 document.getElementById('unsei').innerHTML = '大凶ですよ!';
            }
        });