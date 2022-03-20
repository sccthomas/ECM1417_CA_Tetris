<?php
    //Connect to the database
    $conn = new mysqli('localhost',"webdev", "pass","tetris");
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";

    $input_username = $_REQUEST['username'];
    $input_password = $_REQUEST['password'];

    $sql = 'SELECT * FROM Users';
    $result = $conn->query($sql);
    $count = 0;
    while($row = $result->fetch_assoc()){
        if (($row['UserName'] == $input_username) and ($row['Password'] == $input_password)){
	    session_start();	
	    $_SESSION["username"] = $input_username;
	    $_SESSION["password"] = $input_password;	
	    echo "password correct";
	    break; 
        }else{
            $count += 1;
        }

    }
    if ($count == sizeof($result->fetch_all())){
        echo "incorrect password";
    }
    header("location: index.php");
?>
