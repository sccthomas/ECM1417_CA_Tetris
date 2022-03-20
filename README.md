# **INSTRUCTIONS FOR TETRIS WEBSITE**

## **INTRODUCTION**


This program creates a tetris website. This website contains many pages, a home page, a leaderboard page and a tetris game page. Any user will be able to create an account that they will be able to use to store game results
and use the full system. The game of tetris is to place as may blocks in the grid before they all stack up to the top of the page. There is also a leaderboard where if the user chooses to they can display thier games scores 
for other users to view and compete against. In this project I have used the following langauages to achieve this task, these are, Javascript, php, SQL, and HTML. 


## **USING THE WEBSITE**

- ACCESSING THE WEBSITE:
  In order to access the tetris website you must follow this link, http://ml-lab-4d78f073-aa49-4f0e-bce2-31e5254052c7.ukwest.cloudapp.azure.com:63969/Tetris/index.php . 


- INDEX.PHP:
  The index.php page acts as the home page for the tetris website. This webiste contains the ability to log-in, log-out and direct you to either playing tetris or registering an account. If logged out, the user will see a log-in 
  form in the center of their screen, allowing them to log-in to the system. If they do not have an account they can click a hyper link to register for an account. Once either of these have been completed the user will be logged 
  into the system and shown a new icon with the options play the game or log-out.
  

- REGISTER.PHP:
  The register.php page provides the user to register an account on the webiste, which will add them to the SQL database that the website uses. The user will be able to input their full name, create a username, choose a password, adn select whether they want their data shown in the leaderboard system. 

- LEADERBOARD.PHP:
  The leaderboard.php page allows the user to potentially store their score and compete with other users to be the top of the leaderboard. This page displays a table of contents and with each user and their highest score. 
  

- TETRIS.PHP:
  The tetris.php page is the web page where the user will play the game tetris. In the centre of the page is a 10 by 20 grid that when the start game button is pressed will be populated with a tetramino that will sequencely move down the grid. The play again button is thier to restart the game. At the top of the grid is the current score. The user has the ability to rotate and move tertraminos around the grid. The aim is to get as many peices in the grid as possible, filling in a row in with blocks will cause the grid to move down giving the user more opportunity to make more points. The game will end when the top of the grid is full. 

  Controls: 
    - Left arrow key: move tetramino left
    - Right arrow key: move teramino right 
    - Down arrow key: move tetramino down 
    - Up arrow key: rotate the tetramino 

  

#### **HOW THE CODE IS STRUCTURED:**

The code is structured, where there are 5 modules, each with a purpose and job in the composition of the dashboard.

- INDEX.PHP:
    The index page is structured with the use of sessions. The program will check if there is a session set for username and password to identify if the user is already logged in or not: 
    From here the program may:
    - Provide the user with a login page: 
      - They login: 
        - Route to log-inHandler.php which will check if the credentials they have inputted match those in the SQL database using a query, if so the session will be updated, if not entry is    denied. 
      - They don't have an account so are sent to the register.php page by clicking the URL.  
    - Provide the user with the options to play the game or logout:
     - They choose to log-out, sending them to the log-outHandler.php, which will remove the session with their login-credential
     - they choose to play the game and are sent to the tetris game 

- REGISTER.PHP:
  The register page has all the required data entries for the user to input into. Once they have inputted the correct data they can submit. From here the registered_handling.php file will be called which will collect they data through a POST request, with this data they will be inputted into the SQL database using a query, as well as be logged-in. 

- LEADERBOARD.PHP:
  The leaderboard page collects using the data from the scores table in the SQL database using an SQL query. From here a table is generated on the web page and all the data from the database outputted. 
  
- TETRIS.PHP:
  The tetris page is where the user will play the tetris game. They logic of the game is such a tetramino is spawned on the grid. This tetramino is moving down every second. There is constant checking for collsions for the tetris piece bny anticisating where is will be next is a button is pressed or no button is pressed. If there will be a collision then the block will be frozen in that position on the grid, and the next tetramino loaded. 
  
- MAINSTYLESHEET.CSS:
  This is my CSS styling file that contains all the styling formats for each of my pages of the tetris website. This is crutial for my tetris game and how all the aspecst of the website appear.
  

## **APPENDIX**

- GitHub:
  link : https://github.com/sccthomas/ECM1417_CA_Tetris
