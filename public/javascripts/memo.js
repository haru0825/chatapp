'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    
    // メモの内容を表示
    if(message.length === 0 || !message.match(/\S/g)){
        alert("メモを入力してください。");
    }else{
        $('#thread').prepend('<p class="threadd right notail">' + 'メモ：' + '<br>' + message + '</p>');
        // 送信後textareaからメッセージを削除
        $('#message').val('');
    }

    return false;
}
