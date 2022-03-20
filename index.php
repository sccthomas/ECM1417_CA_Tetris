<?php
    session_start();
?>

<html>
    <head>
        <link rel="stylesheet" href="MainStyleSheet.css">
        <ul class="NavBar">
            <li><a id="alignleft" name="home" href="index.php">Home</a></li>
            <li><a id="alignright" name="tetris" href="tetris.php">Tetris</a></li>
            <li><a id="alignright" name="leaderboard" href="leaderboard.php">Leaderboard</a></li>
        </ul>
    </head>
    <div class = "main">
        <div class="login_segment">
	    <?php
            $logged_in = isset($_SESSION['username']) and isset($_SESSION['password']);
            if ( $logged_in == True ) { ?>
                <form id="IndexForm" >
                    <h1>Welcome to Tetris </h1>
                    <a><button id ="playbutton" formaction="tetris.php">Click here to play</button></a>
                    <a><button id ="logoutbutton" formaction= "Log-outHandler.php">Log-out</button></a>
                </form>
            <?php } ?>
            <?php
            if ($logged_in == False) { ?>
                <form id="login_form" action="Log-inHandler.php">
                    <p>Login</p><br>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"><br><hr>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"><hr>
                    <button type="submit" style="height:50px;width:80px">Login</button><br><br>
                    <p>Don't have a user account? <a href="register.php">Register now?</a></p>
                </form>
            <?php } ?>
        </div>

    </div>


</html>
