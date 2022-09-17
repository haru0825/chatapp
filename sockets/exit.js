'use strict';

module.exports = function (socket, io) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        const index = io.login_users.indexOf(data);
        io.login_users.splice(index, 1);
        console.log(io.login_users);
        socket.emit('receiveMyExitEvent');
        socket.broadcast.emit('receiveAnotherExitEvent', [data, io.login_users]);
    });
};
