let money = 0;

function updateMoneyDisplay() {
    document.getElementById('money-display').innerText = '소지금: ' + money;
}

function createBuilding(x, y, type) {
    const building = document.createElement('div');
    building.className = 'building ' + type;
    building.style.left = x + 'px';
    building.style.top = y + 'px';
    building.addEventListener('click', function() {
        if (type === 'casino') {
            money += 100;
            updateMoneyDisplay();
        }
        // 다른 건물에 대한 로직 추가 가능
    });
    document.getElementById('game-container').appendChild(building);
}

// 예시로 카지노와 카페 건물 생성
createBuilding(200, 300, 'casino');
createBuilding(400, 300, 'cafe');
