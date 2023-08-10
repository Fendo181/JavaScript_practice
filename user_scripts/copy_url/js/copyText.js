var clipboard = new ClipboardJS('.btn');
// クリップ成功
clipboard.on('success', (e) => {
    alert(e.text + 'をコピーしたよ');
});

function copyToTextboxClipboard() {
    var copyClipboard = document.getElementById("copyTarget")

    copyTarget.select()
    // コピー対処のテキストをクリップボードにコピーする
    document.execCommand('copy');
    console.log("コピーできました!" + copyClipboard.value);    
}

function copyToTextSpan(){
    //範囲を指定
    let range = document.createRange();
    let span = document.getElementById('copyTargetSpan');
    range.selectNodeContents(span);
  
    //指定した範囲を選択状態にする
    let selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  
    //コピー
    document.execCommand('copy'); 
}
