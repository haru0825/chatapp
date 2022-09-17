module.exports = function (socket, io) {
    // 入室前に名前に重複がないか確認信号を受け取る
    socket.on('confirm', function (data) {
        if (!io.hasOwnProperty("login_users")) {
            io.login_users = [];
        }
        // ログインユーザの中に同一名がなければ、OK、存在していればNO
        if (io.login_users.indexOf(data) === -1) {
            socket.emit('OK');
        }
        else {
            socket.emit('NO', data);
        }
    });
};
