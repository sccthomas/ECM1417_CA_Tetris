<html>
    <head>
        <link rel="stylesheet" href="MainStyleSheet.css">
        <ul class="NavBar">
            <li><a id="alignleft" name="home" href="index.php" >Home</a></li>
            <li><a id="alignright" name="tetris" href="tetris.php">Tetris</a></li>
            <li><a id="alignright" name="leaderboard" href="leaderboard.php">Leaderboard</a></li>
        </ul>
    </head>
    <link rel="stylesheet" href="MainStyleSheet.css">
    <div class="main">
        <div class="form">
            <form action="registered_handling.php"  method="POST">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="Enter First Name" required>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Enter Last Name" required><br><br>
                <hr>

                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter Username" required><br><br>
                <hr>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password">

                <label for="cpassword">Confirm Password</label>
                <input type="password" id="password" name="cpassword" placeholder="Enter Password" required><br><br>
                <hr>

                <a>Display Scores on leaderboard</a><br><br>
                <input type="radio" id="display_yes_button" name="display" value=1 required>
                <label for="display_yes" id="display_yes">Yes</label><br>

                <input type="radio" id="display_no_button" name="display" value=0 required>
                <label for="display_no" id="display_no">No</label><br><br>

                <button type="submit" name="registered">Submit</button>
            </form>
        </div>
    </div>
</html>
