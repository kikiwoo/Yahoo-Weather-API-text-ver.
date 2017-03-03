//  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
//  reference: http://creative-coding.decontextualize.com/text-and-type/
//  edited by Tze Ki Woo(Kiki) - Feb2017




function setup() {
  //set Canvas to size of window
  createCanvas(600, 600);
  

//Intoduction Page
  background(232,149,35);
    
  //create Button object 1 (Hong Kong)
  button1 = createButton('Hong Kong');
  button1.position(100, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kowloon%2C%20Hong%20Kong%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (Toronto, Canada)
  button2 = createButton('Toronto');
  button2.position(195, 20);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22toronto%2C%20Canada%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (Los Angeles, CA, US)
  button3 = createButton('Los Angeles');
  button3.position(270, 20);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22los%20angeles%2C%20USA%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (Osaka, Japan)
  button4 = createButton('Osaka');
  button4.position(370, 20);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22osaka%2C%20Japan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Seoul, Korea)
  button5 = createButton('Seoul');
  button5.position(445, 20);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22seoul%2C%20korea%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}

function draw() {
  noStroke();
  fill(255);
 fill(0 + sin(frameCount*0.2) * 255);
  text("Weather Announcement.", 150, 500);
}
  
  function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;
  
// HOW to get avarage of tempD2H+tempD2L?!?!
  var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
print(temp);
print(windSpeed);
print(tempD2H);
print(tempD2L);
print(windDirection);
print(tempforcast1);


  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
background(232,149,35);


  textSize(30);
  textFont("Times");
     
    fill(255,241,0)
    text(windSpeed, 500, 290 - 50);
    fill(255,0,170);
    text(temp, 500, 340 - 30);
    fill(0);
    text(windDirection, 500, 390 - 10);
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(255,241,0);
  noStroke();
  ellipse(600 / 2, 600 / 2, windSpeed * 10, windSpeed * 10);
  
   //create ellipse and set width and height of the ellipse to temp data
  noFill();
  strokeWeight(7);
  stroke(255,0,170);
  ellipse(600 / 4, 600 / 2, temp * 2, temp * 2);
  
  
  //create rect and set rotation of rect to windDirection
  translate(600 / 2, 600 / 2);
  fill(0);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rotate(tempforcast1);
  rect(0, 0, 150, 5);

}


