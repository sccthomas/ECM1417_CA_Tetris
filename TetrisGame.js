document.addEventListener('DOMContentLoaded', () => {
    let tetrisGrid = [["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]];
    const gamePieces = {
        "L": [[1, 1], [1, 2], [1, 3], [2, 1]],
        "Z": [[1, 1], [2, 1], [2, 2], [3, 2]],
        "S": [[1, 2], [2, 1], [2, 2], [3, 1]],
        "T": [[1, 1], [2, 1], [2, 2], [3, 1]],
        "O": [[1, 1], [1, 2], [2, 1], [2, 2]],
        "I": [[1, 1], [1, 2], [1, 3], [1, 4]]
    };
    const gamePieces2 = {
        "L": [[1, 1], [1, 2], [2, 2], [3, 2]],
        "Z": [[1, 3], [1, 2], [2, 2], [2, 1]],
        "S": [[1, 1], [1, 2], [2, 2], [2, 3]],
        "T": [[1, 1], [1, 2], [2, 2], [1, 3]],
        "O": [[1, 1], [1, 2], [2, 1], [2, 2]],
        "I": [[1, 1], [2, 1], [3, 1], [4, 1]]
    };
    const gamePieces3 = {
        "L": [[1, 3], [2, 3], [2, 2], [2, 1]],
        "Z": [[1, 1], [2, 1], [2, 2], [3, 2]],
        "S": [[1, 2], [2, 1], [2, 2], [3, 1]],
        "T": [[1, 2], [2, 2], [2, 1], [3, 2]],
        "O": [[1, 1], [1, 2], [2, 1], [2, 2]],
        "I": [[1, 1], [1, 2], [1, 3], [1, 4]]
    };
    const gamePieces4 = {
        "L": [[3, 2], [3, 1], [2, 1], [1, 1]],
        "Z": [[1, 3], [1, 2], [2, 2], [2, 1]],
        "S": [[1, 1], [1, 2], [2, 2], [2, 3]],
        "T": [[3, 3], [3, 2], [2, 2], [3, 1]],
        "O": [[1, 1], [1, 2], [2, 1], [2, 2]],
        "I": [[1, 1], [2, 1], [3, 1], [4, 1]]
    };
    const Pieces = [gamePieces, gamePieces2, gamePieces3, gamePieces4]

    let Down = 0;
    let Score = -1;
    let rotateCounter = 0;
    let start = document.getElementById('start_game')
    let again = document.getElementById('play_again');
    let xPosition = 3;
    let currentBlockKey = null;
    let currentBlock = generateNewBlock();
    let currentBlockPrevious = [];
    let currentBlockCords = [];

    function refreshGrid() {
        // A function to generate a grid on the html page, using the grid array above
        document.getElementById("tetris-bg").innerHTML = "";
        document.getElementById("tetris-bg_cover").innerHTML = "";
        for (let y = 0; y < tetrisGrid.length; y++) {
            for (let x = 0; x < tetrisGrid[y].length; x++) {
                if (tetrisGrid[y][x] === "") {
                    document.getElementById("tetris-bg").innerHTML += "<div></div>";
                } else if (tetrisGrid[y][x] === "L") {
                    document.getElementById("tetris-bg").innerHTML += "<div id = 'L'></div>";
                } else if (tetrisGrid[y][x] === "Z") {
                    document.getElementById("tetris-bg").innerHTML += "<div id = 'Z'></div>";
                } else if (tetrisGrid[y][x] === "S") {
                    document.getElementById("tetris-bg").innerHTML += "<div id = 'S'></div>";
                } else if (tetrisGrid[y][x] === "T") {
                    document.getElementById("tetris-bg").innerHTML += "<div id = 'T'></div>";
                } else if (tetrisGrid[y][x] === "O") {
                    document.getElementById("tetris-bg").innerHTML += "<div id = 'O'></div>";
                } else if (tetrisGrid[y][x] === "I") {
                    document.getElementById("tetris-bg").innerHTML += "<div id = 'I'></div>";
                }
            }
            document.getElementById("tetris-bg").innerHTML += "<br>";
        }
    }

    function generateNewBlock() {
        xPosition = 3;
        Score += 1;
        document.getElementById("score").innerHTML = Score;
        document.getElementById("tetris-bg_cover").innerHTML = "";
        // A function that will generate a new tetris block
        let keys = Array(Object.keys(gamePieces))[0];
        currentBlockKey = keys[(Math.floor(Math.random() * keys.length))];
        for (let i = 0; i < gamePieces[currentBlockKey].length; i++) {
            document.getElementById("tetris-bg_cover").innerHTML += "<div class = 'cb'></div>";
        }
        return gamePieces[currentBlockKey];
    }

    function checkIfTopEmpty() {
        // A function to check if the top of the grid is full
        for (let i = 0; i < currentBlock.length; i++) {
            if (currentBlock[i][0] === 1) {
                if (tetrisGrid[0][currentBlock[i][0] + xPosition] !== "") {
                    document.getElementById("score").innerHTML = Score;
                    postScore();
                    //postScore_();
                    return true;
                }
            }
        }
    }

    function addBlockLeftRight() {
        let blocks = [];
        if (checkIfTopEmpty()) {
            console.log("Full")
        } else {
            let factor = 0;
            let array = Array.from(document.querySelectorAll('.cb'));

            for (let i = 0; i < currentBlock.length; i++) {
                let SubPiece = currentBlock[i];
                let SubPieceRow = currentBlockCords[i][0];
                let SubPieceCol = SubPiece[1] + xPosition;
                tetrisGrid[SubPieceRow][SubPieceCol] = currentBlockKey;
                currentBlockPrevious.push([SubPieceRow, SubPieceCol])
                blocks.push([SubPieceRow, SubPieceCol])

                let yCSS = ((SubPieceRow) * 30);
                let xCSS = (SubPieceCol * 30) - factor;
                array[i].style.transform = "translate(" + xCSS + "px, " + yCSS + "px)";
                array[i].id = currentBlockKey;
                factor += 30;
            }
            currentBlockCords = blocks;
        }
    }

    function addBlockDown() {
        let blocks = [];
        if (checkIfTopEmpty()) {
            console.log("Full")
        } else {
            let factor = 0;
            let array = Array.from(document.querySelectorAll('.cb'));

            for (let i = 0; i < currentBlock.length; i++) {
                let SubPiece = currentBlock[i];
                let SubPieceRow = SubPiece[0] + Down;
                let SubPieceCol = SubPiece[1] + xPosition;
                tetrisGrid[SubPieceRow - 1][SubPieceCol] = currentBlockKey;
                currentBlockPrevious.push([SubPieceRow - 1, SubPieceCol])
                blocks.push([SubPieceRow - 1, SubPieceCol])

                let yCSS = ((SubPieceRow - 1) * 30);
                let xCSS = (SubPieceCol * 30) - factor;
                array[i].style.transform = "translate(" + xCSS + "px, " + yCSS + "px)";
                array[i].id = currentBlockKey;
                factor += 30;
            }
            currentBlockCords = blocks;
        }
    }

    function addBlockRotate() {
        let blocks = [];
        let factor = 0;
        let array = Array.from(document.querySelectorAll('.cb'));
        for (let i = 0; i < currentBlock.length; i++) {
            let SubPiece = currentBlock[i];
            let SubPieceRow = SubPiece[0] + Down - 1;
            let SubPieceCol = SubPiece[1] + xPosition;
            tetrisGrid[SubPieceRow][SubPieceCol] = currentBlockKey;
            currentBlockPrevious.push([SubPieceRow, SubPieceCol])
            blocks.push([SubPieceRow, SubPieceCol])
            let yCSS = ((SubPieceRow) * 30);
            let xCSS = (SubPieceCol * 30) - factor;
            array[i].style.transform = "translate(" + xCSS + "px, " + yCSS + "px)";
            array[i].id = currentBlockKey;
            factor += 30;
        }
        currentBlockCords = blocks;
    }

    function removePrevious() {
        // Function to remove the previous position of the currentBlock
        for (let i = 0; i < currentBlockPrevious.length; i++) {
            if (tetrisGrid[currentBlockPrevious[i][0]][currentBlockPrevious[i][1]] !== "") {
                tetrisGrid[currentBlockPrevious[i][0]][currentBlockPrevious[i][1]] = "";
            }
        }
        currentBlockPrevious = [];
    }

    function collisionDown() {
        for (let i = 0; i < currentBlockCords.length; i++) {
            let curRow = currentBlockCords[i][0];
            let curCol = currentBlockCords[i][1];
            if (curRow === 19) {
                refreshGrid();
                checkIfRowFull();
                refreshGrid();
                currentBlock = generateNewBlock();
                currentBlockCords = [];
                Down = 0;
                currentBlockPrevious = [];
                moveTetrisPieceDown();
                checkIfRowFull();
                return true;
            } else if (tetrisGrid[curRow + 1][curCol] !== "") {
                if (currentBlockCords.some(row => JSON.stringify(row) === JSON.stringify([curRow + 1, curCol])) === false) {
                    refreshGrid();
                    checkIfRowFull();
                    refreshGrid();
                    currentBlock = generateNewBlock();
                    currentBlockCords = [];
                    Down = 0;
                    currentBlockPrevious = [];
                    moveTetrisPieceDown();
                    return true;
                }
            }
        }
        return false;
    }

    function collisionRight() {
        for (let i = 0; i < currentBlockCords.length; i++) {
            let curRow = currentBlockCords[i][0];
            let curCol = currentBlockCords[i][1];
            if (curRow === 19) {
                checkIfRowFull();
                return true;
            } else if (tetrisGrid[curRow][curCol + 1] !== "") {
                if (currentBlockCords.some(row => JSON.stringify(row) === JSON.stringify([curRow, curCol + 1])) === false) {
                    checkIfRowFull();
                    return true;
                }
            }
        }
        return false;
    }

    function collisionLeft() {
        for (let i = 0; i < currentBlockCords.length; i++) {
            let curRow = currentBlockCords[i][0];
            let curCol = currentBlockCords[i][1];
            if (curRow === 19) {
                checkIfRowFull();
                return true;
            } else if (tetrisGrid[curRow][curCol - 1] !== "") {
                if (currentBlockCords.some(row => JSON.stringify(row) === JSON.stringify([curRow, curCol - 1])) === false) {
                    checkIfRowFull();
                    return true;
                }
            }
        }
        return false;
    }

    function collisionRotate(coords) {
        let translateCoords = [];
        for (let i = 0; i < coords.length; i++) {
            let SubPiece = coords[i];
            let SubPieceRow = SubPiece[0] + Down;
            let SubPieceCol = SubPiece[1] + xPosition;
            translateCoords.push([SubPieceRow, SubPieceCol])
        }
        for (let i = 0; i < translateCoords.length; i++) {
            let SubPiece = translateCoords[i];
            let SubPieceRow = SubPiece[0]
            let SubPieceCol = SubPiece[1]
            if (tetrisGrid[SubPieceRow][SubPieceCol] !== "") {
                if (currentBlockCords.some(row => JSON.stringify(row) === JSON.stringify([SubPieceRow, SubPieceCol])) === false) {
                    return true;
                }
            } else if (SubPieceCol === 10) {
                return true;
            } else if (SubPieceCol === 0) {
                return true;
            }
        }
        return false;
    }

    function moveTetrisPieceDown() {
        removePrevious();
        addBlockDown();
        Down += 1;

    }

    function moveTetrisPieceLeft() {
        removePrevious();
        xPosition -= 1;
        addBlockLeftRight();

    }

    function moveTetrisPieceRight() {
        removePrevious();
        xPosition += 1;
        addBlockLeftRight();
    }

    function keyControl(key) {
        if (key.keyCode === 37) {
            if (xPosition === -1) {
                return;
            } else {
                let freeze = collisionLeft();
                if (freeze === false) {
                    moveTetrisPieceLeft();
                }
            }
        }
        if (key.keyCode === 39) {
            let wall = false;
            for (let i = 0; i < currentBlockCords.length; i++) {
                let col = currentBlockCords[i][1];
                if (col === 9) {
                    wall = true;
                    break;
                }
            }
            if (wall) {
                return;
            } else {
                let freeze = collisionRight();
                if (freeze === false) {
                    moveTetrisPieceRight();
                }
            }
        }
        if (key.keyCode === 40) {
            let freeze = collisionDown();
            if (freeze === false) {
                moveTetrisPieceDown();
            }
        }
        if (key.keyCode === 38) {
            rotate();
        }
    }

    function main() {
        let freeze = collisionDown();
        if (freeze === false) {
            moveTetrisPieceDown();
        }
        //checkIfRowFull();
    }

    function checkIfRowFull() {
        for (let i = 0; i < tetrisGrid.length; i++) {
            let count = 0;
            for (let j = 0; j < tetrisGrid[i].length; j++) {
                if (tetrisGrid[i][j] !== "") {
                    count += 1
                }
            }
            if (count === 10) {
                for (let j = 0; j < tetrisGrid[i].length; j++) {
                    tetrisGrid[i][j] = "";
                }
                moveAllDown(i);
            }
        }
    }

    function moveAllDown(row) {
        tetrisGrid.splice(row, 1);
        tetrisGrid.unshift(["", "", "", "", "", "", "", "", "", ""]);
        //refreshGrid();
        //document.getElementById("tetris-bg_cover").innerHTML ="";
    }

    function rotate() {
        if (rotateCounter === 3) {
            rotateCounter = 0;
        } else {
            rotateCounter += 1;
        }
        let GamePieceArray = Pieces[rotateCounter];
        if (collisionRotate(GamePieceArray[currentBlockKey]) === false) {
            currentBlock = GamePieceArray[currentBlockKey];
            addBlockRotate();
            removePrevious();
        }

    }

    function reset() {
        clearInterval(tetrisTimer);
        document.removeEventListener("keyup", keyControl);
        document.getElementById("tetris-bg").innerHTML = "";
        document.getElementById("tetris-bg_cover").innerHTML = "";
        tetrisGrid = [["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]];
        Down = 0;
        Score = -1;
        rotateCounter = 0;
        xPosition = 3;
        currentBlockKey = null;
        currentBlock = generateNewBlock();
        currentBlockPrevious = [];
        currentBlockCords = [];
    }

    function postScore() {
        document.getElementById('postScore').innerHTML += '<form id="scoreForm" action="leaderboard.php" method="POST"></form>';
        document.getElementById('scoreForm').innerHTML += "<input type='hidden' name='score_final' value=" + Score + ">"
        document.getElementById("scoreForm").submit();
        document.getElementById('postScore').innerHTML = '';

        reset();
        clearInterval(tetrisTimer);
        document.removeEventListener("keyup", keyControl);
    }

    start.addEventListener('click', () => {
        tetrisTimer = setInterval(main, 1000);
        document.addEventListener("keyup", keyControl)
    })
    again.addEventListener('click', () => {
        reset();
        clearInterval(tetrisTimer);
        document.removeEventListener("keyup", keyControl);
    })
})
