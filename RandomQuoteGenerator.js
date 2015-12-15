 $(document).ready(function() {

 var interval;
 $("#auto").click(function() {
   randomQuote();
   interval = setInterval(randomQuote, 10000);
 });

 $("#latest").click(function() {
   clearInterval(interval);
   latestQuote();
 });

 $("#clickbutton").click(function() {
   clearInterval(interval);
   randomQuote();
 });
   
 $("#tweetbtn").click(function() {
 window.open("https://twitter.com/intent/tweet?text=" + $("#newquote").text() + " (John Oliver)")
 });

 });

 var ar = new Array(16);
 ar[0] = "Drug companies are a bit like high school boyfriends - they're much more concerned with getting inside you than being effective once they're in there."
 ar[1] = "It was like falling in love with a girl who was just throwing up all over herself -- softly holding her hair back and whispering to her that everything was going to be alright. To me, that's what the last eight years were like, here in America: projectile vomiting all over yourself as the rest of the world rubbed your back, saying, 'Sssshhh, that's it. Let it all out.'"
 ar[2] = "America doesn't need libraries; you don’t need books here. There are plenty of books in the world, and plenty of people who've read them. It's not your area of expertise.... Stick to what you are truly great at - TV."
 ar[3] = "(The IRS) combines two of the things that we hate the most in life: Someone taking our money and math."
 ar[4] = "Essentially, student debt is like HPV. If you go to college, you're almost certanly going to get it. And if you do, it will follow you for the rest of your life."
 ar[5] = "The internet is supposed to be free, like parking on Sundays or drinks at a wedding thrown by non-as**holes."
 ar[6] = "Congress is like Jazz... It's really about the bills they're not passing. Also like jazz, most people hate it, and even those who say they don't are lying."
 ar[7] = 'The death penalty is like the McRib. When you can\'t have it, it seems so tantalizing. But when they bring it back, you, think, "Wow, this is ethically wrong."'
 ar[8] = 'Infrastructure is like Legos. Building is fun, destroying is fun, bot a Lego maintenance set would be the most boring f...king toy in the world.'
 ar[9] = "New Year's Eve is like the death of a pet. You know it's going to happen, but somehow you're never really prepared for how truly awful it is."
 ar[10] = "Payday loans are like the Lay's Potato Chips of finance. You can't have just one and they're TERRIBLE for you."
 ar[11] = "We tolerate pumpkin spice because we like the fall. It's the best season because you get to stop thinking about how weird your legs look in shorts."
 ar[12] = "Cranberries are, I think we can all agree, nature's most disgusting berry. Cranberries taste like cherries who hate you. Cranberries taste like what a raspberry drinks before a colonoscopy."
 ar[13] = "You don't need people’s opinion on a fact. You might as well have a poll asking: ‘Which number is bigger, 15 or 5?’ or ‘Do owls exist?’ or ‘Are there hats?'"
 ar[14] = "News is not a game show. You don't win a car if you happen to be right."
 ar[15] = "Congress never loses its capacity to disappoint you."

 function randomQuote() {

   var randomquote = '"' + ar[Math.floor(Math.random() * (ar.length - 1))] + '"';

   while ($("#newquote").html() === randomquote) {
     randomquote =  ar[Math.floor(Math.random() * (ar.length - 1))];
   };

   $("#newquote").html(randomquote);

 };

 function latestQuote() {
   var latestquote = '"' + ar[ar.length - 1] + '"';
   $("#newquote").html(latestquote);
 };