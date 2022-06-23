function addUser(){
    var player_1=document.getElementById("player1_name_input").value;//Document means HTML file. 
    var player_2=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1 name",player_1);//Storing the data in the local storage in key:value format.
    localStorage.setItem("player2 name",player_2);
    document.getElementById("player1_name_input").value="";//This is for clearing out the box.
    document.getElementById("player2_name_input").value="";
    window.location="game_page.html";//This command is used for moving from one page to another page.
}