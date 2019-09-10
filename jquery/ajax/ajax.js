console.log('ajaxしてますね')
$('.button').on('click',function(){
    $.ajax({
        url:'./request.php',
        type:'POST',
        data:{
            'userid':$('#userid').val(),
            'password':$('#password').val(),
        }
    })
    .done((data)=> {
        $('.result').html(data);
    });
});