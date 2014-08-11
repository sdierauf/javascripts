//code to actually run the simulation

(function(){

    var interval;

    function init() {
        //make the board
        //add the board
        //make the buttons
        var initialState = generateInitialStateArray();
        drawBoard(initialState);
        interval = setInterval(function() { step(initialState) }, 1000);
    }

    function generateBoard(dataArray) {
        console.log(dataArray);
        var board = document.createElement('table');
        var body = document.createElement('tbody');
        for (var i = 0; i < dataArray.length; i++) {
            var subArr = dataArray[i];
            console.log(subArr);
            var row = document.createElement('tr');
            for (var j = 0; j < subArr.length; j++) {
                console.log(subArr[j]);
                var datum = document.createElement('td');
                datum.innerHTML = subArr[j];
                row.appendChild(datum);
            }
            body.appendChild(row);
        }
        board.appendChild(body);

        return board;

    }

    function drawBoard(dataArray) {
        var completedBoard = generateBoard(dataArray);
        document.getElementById('sim').innerHTML = '';
        document.getElementById('sim').appendChild(completedBoard);
    }

    function generateInitialStateArray() {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            var subArr = [];
            for (var j = 0; j < 5; j++) {
                subArr.push(i * j);
            }
            arr.push(subArr);
        }

        return arr;
    }

    function step(dataArray) {
        console.log('stepping');
        for (var i = 0; i < dataArray.length; i++) {
            for (var j = 0; j < dataArray[i].length; j++) {
                if (dataArray[i][j] > 0) {
                    console.log('happened!');
                    dataArray[i][j]--;
                }
            }
        }
        drawBoard(dataArray);
    }




    window.onload = init;

})();