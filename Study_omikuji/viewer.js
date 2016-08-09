//グローバル変数
var picNo = 1;

//←の処理
function revBtnClik() {
    picNo--;
    document.getElementById('no').innerHTML = 'No' + picNo;
    document.getElementById('pic').src = 'pic/' + picNo + '.JPG';
    if (picNo === 1) {
        document.getElementById('rev_btn').disabled = 'disabled';
    }else if(picNo === 3) {
        document.getElementById('fwd_btn').disabled = false;
        document.getElementById('no').className = 'no1';
    }
}


//→の処理
function fwdBtnClik() {
    picNo++;
    document.getElementById('no').innerHTML = 'No' + picNo;
    document.getElementById('pic').src = 'pic/' + picNo + '.JPG';
    if (picNo === 4) {
        document.getElementById('no').className = 'no2';
        document.getElementById('fwd_btn').disabled = 'disabled';
    }else if(picNo === 2) {
        document.getElementById('rev_btn').disabled = false;
    }
}