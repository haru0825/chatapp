'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('enterMyselfEvent', function (data) {
        // console.log("data = " + data);
        socket.broadcast.emit('sendEnterMyselfEvent', data);
        io.login_users.push(data);
        io.sockets.emit('enterEvent', io.login_users);
    });
};
