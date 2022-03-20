<?php
    session_start();	
    if(isset($_POST['registered'])){
        $fname = $_REQUEST['fname'];
        $lname = $_REQUEST['lname'];
        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];
        $cpassword = $_REQUEST['cpassword'];
        $display = $_REQUEST['display'];
        //Connect to the database
        $conn = new mysqli('localhost',"webdev","pass","tetris");

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";

        //Check if the passwords inputted are the same
        if($password !== $cpassword){
            header("Location: register.php");
        }else{
		echo "Passwords correct";                    
	}
        //Try to insert the register data to the user's table in the database
	try{
	    $sql = "INSERT INTO Users VALUES('" . $username . "','" . $fname . "','" . $lname . "','" . $password . "'," . $display . ")";
	    if( mysqli_query($conn, $sql) ) {
		    echo 'Success';
	    }
	    mysqli_commit($conn);
            mysqli_close($conn);           
            $_SESSION["username"] = $username;
	    $_SESSION["password"] = $password;
	    header("Location: index.php");
        }catch(PDOException $e){
            echo "Username already in use";
	}
    }else{ 
	header("Location: register.php");
    }

?>




