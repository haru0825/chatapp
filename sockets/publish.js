'use strict';
let previous_messanger = null
let consecutive_send_count = 0

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        const messanger = data[0];
        const message = data[1];
        if (previous_messanger === messanger) {
            consecutive_send_count += 1;
        } else {
            consecutive_send_count = 1;
        }
        
        if (consecutive_send_count > 3){
            data = "The maximum number of consecutive transmissions";
            socket.emit('recieveMessage', data);
        } else {
            previous_messanger = messanger
            io.sockets.emit('recieveMessage', data);
        }
        console.log(`messanger = ${messanger}, message = ${message}, previous = ${previous_messanger}, consecutive_send_count = ${consecutive_send_count}`);

    });
};

