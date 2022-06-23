player1_name = localStorage.getItem("player1 name");//getItem is used for taking the values from the local storage.
	player2_name = localStorage.getItem("player2 name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);//We are taking the character at the position number 1.
	console.log(charAt1);//In the word watermelon "a" is in position number 1.

	lenght_divide_2 = Math.floor(word.length/2);//We are taking the middle character of every word.
	charAt2 = word.charAt(lenght_divide_2);//In the word watermelon there are 10 characters so 10/2=5.
	console.log(charAt2);//The character "m" is at the position number 5.

    lenght_minus_1 = word.length - 1;//We are taing the last charcter of the word.
    charAt3 = word.charAt(lenght_minus_1);//In the word watermelon 10-1=9.
	console.log(charAt3);//The character "n" is at the position number 9.

    remove_charAt1 = word.replace(charAt1, "_");//We are replacing the charAt1 by "_"
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)//Here we are checking the user input and the answer.
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;//We are incrimenting the score by one.
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;//Incrimenting the player 2 score by one.
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"//We are flipping the turns. Now player 2 will be asking the question.
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"//We are flipping the turns. Now player 1 will be asking the question.
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"//We are flipping the turns. Now player 2 will be answering.
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"//We are flipping the turns. Now player 1 will be answering.
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
