'use strict';

// チャットルームに入室するための段階1
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
 
    // ユーザ名が未入力でないかチェックする
    if(userName.length === 0 || !userName.match(/\S/g)){
        alert("ユーザ名を入力してください。");
    }else{
        socket.emit('confirm', userName);
    }
    
    //userName == "" ? alert("ユーザ名を入力してください。") : $('form').submit();
}

// チャットルームに入室するための段階2 --> ユーザ名に重複がない場合に帰ってくる信号
socket.on('OK', function () {
    $('form').submit();
});

// ユーザ名に重複があった場合に帰ってくる信号 --> エラー表示
socket.on('NO', function (data) {
    $('.errorMessage').remove();
    $('#sameNameError').append('<p class="errorMessage">既にユーザ名："' + data + '"が存在するので、別の名前でログインして下さい</p>');
});
