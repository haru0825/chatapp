'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent', userName);
}

// 退出者以外が受け取る信号
socket.on('receiveAnotherExitEvent', function (data) {
    $('#thread').prepend('<p class="threadd center notail">' + data[0] + 'さんが退室しました。</p>');
    $('.login-user').remove();
    for (const user of data[1]) {
        $('#login-users').append('<h6 class="login-user">・' + user + 'さん</h6>');
    }
});

// 退出者が受け取る信号
socket.on('receiveMyExitEvent', function () {
    // 退室
    location.href = '/';
});
