module.exports = function(orders) {
    let summaryTime = 0;
    let countOrders = 0;
    const maxExpiredAt = orders[orders.length - 1].expiredAt; // Получаем крайний срок из последнего заказа
  
    const sortedByExecutionTimeOrders = [...orders].sort((a, b) => a.executionTime - b.executionTime);
  
    for (let i = 0; i < sortedByExecutionTimeOrders.length; i++) {
      let fastestOrder = sortedByExecutionTimeOrders[i];
      let indexOfFastestOrder = orders.findIndex(order => order.id === fastestOrder.id); // Ищем индекс заказа в исходном массиве
  
      if (
        fastestOrder.expiredAt >= fastestOrder.executionTime &&
        fastestOrder.executionTime + summaryTime <= maxExpiredAt
      ) {
        countOrders += 1;
        summaryTime += fastestOrder.executionTime;
  
        if (indexOfFastestOrder + 1 < orders.length) {
          for (let j = indexOfFastestOrder + 1; j < orders.length; j++) {
            orders[j].expiredAt -= fastestOrder.executionTime;
          }
        }
      }
    }
  
    return countOrders;
  };

function runTests() {
    // Тест 1
    const input1 = [
        { index: "0000", executionTime: 100, expiredAt: 200 },
        { index: "0001", executionTime: 1000, expiredAt: 1250 },
        { index: "0002", executionTime: 200, expiredAt: 1300 },
        { index: "0003", executionTime: 2000, expiredAt: 3200 }
    ];
    const output1 = processOrders(input1);
    console.log("Test 1 Pass:", output1 === 3);

    // Тест 2
    const input2 = [
        { index: "0000", executionTime: 1, expiredAt: 2 }
    ];
    const output2 = processOrders(input2);
    console.log("Test 2 Pass:", output2 === 1);

    // Тест 3
    const input3 = [
        { index: "0000", executionTime: 3, expiredAt: 2 },
        { index: "0001", executionTime: 4, expiredAt: 3 }
    ];
    const output3 = processOrders(input3);
    console.log("Test 3 Pass:", output3 === 0);

    // Тест 4
    const input4 = [
        { index: "0000", executionTime: 300, expiredAt: 300 },
        { index: "0001", executionTime: 2, expiredAt: 301 },
        { index: "0002", executionTime: 3, expiredAt: 302 }
    ];
    const output4 = processOrders(input4);
    console.log("Test 4 Pass:", output4 === 2);

    // Тест 5
    const input5 = [
        { index: "0000", executionTime: 300, expiredAt: 300 },
        { index: "0001", executionTime: 1, expiredAt: 600 },
        { index: "0002", executionTime: 2, expiredAt: 600 }
    ];
    const output5 = processOrders(input5);
    console.log("Test 5 Pass:", output5 === 3);
}

runTests();
