function getBotResponse(input){
  //FOR ADMISSION ENQUIRIES
  if (input == "What is your cut off mark for new students"){
    return "The university cut off mark for any average student is 170";
  }

  else if (input == "I would like to make admission enquiries about the university"){
  	return "Thanks.. what would you like to know";
  }

  else if (input == "What documents are required of me when entering the university"){
  	return "You would be required to come with:<li>O-level result WAEC and NECO Included</li> <li>Your original Jamb Print out slip</li><li>4 Passport photos</li><li>Your birth certificate</li>"
  }

 /*else if (input == "Alright Thanks" || "Thanks" || "Alright") {
 	return "You are welcome, let me know how i can assist you anytime!";
 }*/

/*else {
	return "Thanks for choosing us";
}*/



//FOR HOSTEL ENQUIRIES
else if (input == "I would like to make enquiries concerning the room accomodation"){
 return "Please follow the link for more instructions";
}

else if(input =="Please how much is the university fee for sociology department" 
  || input == "Please how much is your school fees"
  || input == "please how much is your school fees?"){
	//return "Here is the list of various department we have and their Tuition fees";
  //return "<img src = './pix/../static/../script/responses.js/fee1.jpg/'>"} 
  return "<a href = 'responses.js/./script/./static/about.html'>AboutUs</a>";
}
else if (input == "Alright" || "Thank you" || "Alright thank you"){
	return "You are welcome, let me know how i can assist you anytime!";
}

else {
	return "Please visit the university home page get all the necessary information ou may need or call +2349168461718 for more clarity";
}

}