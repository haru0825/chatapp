'use strict';

// 入室メッセージをサーバに送信する

// 入力されたユーザ名を取得する
const userName = $("#userName").val();
// 入室メッセージイベントを送信する
socket.emit('enterMyselfEvent', userName);


// サーバから受信した入室メッセージを画面上に表示する
socket.on('sendEnterMyselfEvent', function (data) {
    $('#thread').prepend('<p class="threadd center notail">' + data + 'さんが入室しました。</p>');
});

socket.on('enterEvent', function (data) {
    $('.login-user').remove();
    for (const user of data) {
        $('#login-users').append('<h6 class="login-user">・' + user + 'さん</h6>');
    }
});
