<html>
<head>
    <link rel="stylesheet" href="MainStyleSheet.css">
    <ul class="NavBar">
        <li><a id="alignleft" name="home" href="index.php">Home</a></li>
        <li><a id="alignright" name="tetris" href="tetris.php">Tetris</a></li>
        <li><a id="alignright" name="leaderboard" href="leaderboard.php">Leaderboard</a></li>
    </ul>
</head>
    <body>
        <div class = main>
            <div class = tetris-bg >

            </div>
            <div class="leaderboard">
                <?php
                    try{
                        session_start();
                        $score = $_REQUEST['score_final'];
                        $username = $_SESSION['username'];
                        $conn = new mysqli('localhost',"webdev","pass","tetris");
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }

                        //Checking if they want info displayed 
                        $sql_info = "SELECT Display FROM Users WHERE UserName = '".$username."'";
                        $result_info = $conn->query($sql_info);
                        $display = 1;
                        while($row = $result_info->fetch_assoc()){
                            $display = $row['Display'];
                        }


                        //Getting previous score 
                        $sql_pre_score = "SELECT Score FROM Scores WHERE UserName = '".$username."'";
                        $result_pre_score = $conn->query($sql_pre_score);
                        $oldScore = 0;
                        while($row = $result_pre_score->fetch_assoc()){
                            $oldScore = $row['Score'];
                        }
                        if($oldScore < $score){
                            if($display == 1){
                                    //Insert into Scores table
                                    //Delete previous score 
                                    $sql_del = "DELETE FROM Scores WHERE UserName = '".$username."'";
                                    if (mysqli_query($conn, $sql_del)){
                                        //echo " Success";
                                    }else{
                                        //echo " Fail";
                                    }
                                    $sql_insert = "INSERT INTO Scores (Username, Score) VALUES('" . $username . "'," . $score . ")";
                                    if (mysqli_query($conn, $sql_insert)){
                                        //echo " Success";
                                    }else{
                                        //echo " Fail";
                                    }
                                    mysqli_commit($conn);
                                    mysqli_close($conn);
                                }
                        }

                    }catch(Exception $e){
                        
                    }
                    $conn = new mysqli('localhost',"webdev", "pass","tetris");
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                        }
                    $sql = "SELECT * FROM Scores ORDER BY Score DESC";
                    $result = $conn->query($sql);
                    echo "<table><th>Username</th><th>Score</th>";
                    while ($row = $result->fetch_assoc()){
                    echo "<tr><td>".$row["Username"]."</td><td>".$row["Score"];
                    }
                    echo "</table>";
                    ?>
            </div>
        </div>
    </body>
</html>
