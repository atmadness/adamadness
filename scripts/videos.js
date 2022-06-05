
var allVideos = document.getElementsByClassName('video');
var stopmotionVideos = document.getElementsByClassName('stopmotion');
var otherVideos = document.getElementsByClassName('other');

function DisplayAll()
{
	console.log("Display All");
	console.log(allVideos.length);
	for(var i = 0; i < allVideos.length; i++)
	{
		allVideos[i].style.display = "inline-block";
	}
}

function DisplayStopMotion()
{
	console.log("Display Stop Motion");
	console.log(stopmotionVideos.length);
	for(var i = 0; i < allVideos.length; i++)
	{
		allVideos[i].style.display = "none";
	}
	for(var j = 0; j < stopmotionVideos.length; j++)
	{
		stopmotionVideos[j].style.display = "inline-block";
	}
}

function DisplayOthers()
{
	console.log("Display Others");
	console.log(otherVideos.length);
	for(var i = 0; i < allVideos.length; i++)
	{
		allVideos[i].style.display = "none";
	}
	for(var j = 0; j < otherVideos.length; j++)
	{
		otherVideos[j].style.display = "inline-block";
	}
}