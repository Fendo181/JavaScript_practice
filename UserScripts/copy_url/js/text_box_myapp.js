function copyToTextboxClipboard() {
    var copyClipboard = document.getElementById("copyTarget")

    copyTarget.select()
    // コピー対処のテキストをクリップボードにコピーする
    document.execCommand('Copy');
    console.log("コピーできました!" + copyClipboard.value);    
}