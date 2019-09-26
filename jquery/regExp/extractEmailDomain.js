$('.email').bind('keyup',function(event){
    $email = event.target.value;
    $id = $email
    // 正規表現でメールアドレスのドメイン部分だけを抜き取る
    if($email.includes('@')){
        $result = $email.match(/(.+?)@/i);
        $id = $result[1];
    }
    console.log($id);
    $('.id').val($id);
});

