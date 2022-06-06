function result() {

	var score=0;
	if (document.getElementByid('correct Q1').checked)
	{
		score++;
	}
	if (document.getElementByid('correct Q2').checked)
	{
		score++;
	}
	
	document.write("Your score is:"+score)

}