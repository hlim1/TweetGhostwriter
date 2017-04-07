function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Do you know?", "Have you realized?", "Oh, well", "Isn't it so amazing?"];
  var body  = ["this weather", "my candle", "that puppy", "that person standing over there", "our class"];
  var end   = ["is perfect", "is so fancy", "is too hot", "is so chill", "is so adorable"];

  randIndex = randomUpTo(intro.length);
  sentence  = intro[randIndex];
  randIndex = randomUpTo(body.length);
  sentence  = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length);
  sentence  += " " + end[randIndex];

  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
