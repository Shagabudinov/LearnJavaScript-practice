function solution({ users, rooms }) {
    const visitors = new Map();
    const timesForVasiliy = []
    const roomsTraffic = [];
    let prevRoom = null
    let currentRoom = null
    let prevTraffic = null


    for (let i = 0; i < users.length; i++) {
        users[i].push(i)
    }

    for (let i = 0; i < rooms.length; i++) {
        roomsTraffic[i] = 0;
    }

    for (let i = 0; i <= 23; i++) {
        for (const user of users) {
            if (user[1] === i) {
                roomsTraffic[visitors.get(user[2])] -= 1;
            } else if (user[0] === i) {
                for (let j = 0; j < roomsTraffic.length; j++) {
                    if (roomsTraffic[j] < rooms[j]) {
                        roomsTraffic[j] += 1;
                        visitors.set(user[2], j);
                    }
                }
            }
        }
        for (let j = 0; j < roomsTraffic.length; j++) {
            if (roomsTraffic[j] === 1) {
                //timesForVasiliy.push(i)
                //continue
            } 
            if (prevTraffic && prevTraffic === 1 && roomsTraffic[j] === 0) {
                timesForVasiliy.push(i)
            }
            prevTraffic = roomsTraffic[j]
            

            

        }
        console.log(`В ${i} часов в комнате ${roomsTraffic} человек`)
    }
    console.log(timesForVasiliy)
    console.log(visitors)
}

// Пример использования функции
solution({
    users: [
        [10, 13],
        [10, 14],
        [11, 13]
    ],
    rooms: [2, 1]
});


// console.log(solution(
//     {
//         "users": [
//             [10, 12],
//             [13, 17],
//             [14, 15]
//         ],
//         "rooms": [2]
//     }
// ))