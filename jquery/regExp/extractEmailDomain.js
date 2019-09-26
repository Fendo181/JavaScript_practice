$('.email').bind('keyup',function(event){
    let email = event.target.value;
    let id = email
    // 正規表現でメールアドレスのドメイン部分だけを抜き取る
    if(email.includes('@')){
        result = email.match(/(.+?)@/i);
        id = result[1];
    }
    $('.id').val(id);
});