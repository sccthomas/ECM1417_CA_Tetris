<html>
<head>
    <?php
        session_start();
        if(isset($_SESSION['username']) === false){
            header("location: index.php");
        }
    ?>
    <link rel="stylesheet" href="MainStyleSheet.css">
    <meta charset="utf-8">
    <script src="TetrisGame.js" charset="utf-8" ></script>
    <ul class="NavBar">
        <li><a id="alignleft" name="home" href="index.php">Home</a></li>
        <li><a id="alignright" name="tetris" href="tetris.php">Tetris</a></li>
        <li><a id="alignright" name="leaderboard" href="leaderboard.php">Leaderboard</a></li>
    </ul>
</head>
<body>
    <div class = main >
        <div id = "tetris_all">
            <h3>Score: <span id="score">0</span></h3>
            <button id="start_game">Start Game</button>
            <button id="play_again">Play Again</button><br><br>
            <div id = "tetris-bg" >

            </div>
            <div id = "tetris-bg_cover" >

            </div>
            <div id = 'postScore'>

            </div>
        </div>
    </div>
</body>
</html>
