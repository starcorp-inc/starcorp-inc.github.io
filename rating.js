function updaterating() {
 $(document).ready(function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = process;
  xhr.open("GET", "https://data.sparkfun.com/output/NJb4Ed1oaKigpVl9p3QA.json", true);
  xhr.send();

  function process() {
   if (xhr.readyState == 4) {
    var countl1 = (xhr.responseText.match(/L1/g) || []).length;
    var countd1 = (xhr.responseText.match(/D1/g) || []).length;
    document.getElementById("l1").innerHTML = countl1;
    document.getElementById("d1").innerHTML = countd1;
    document.querySelector("#votes").style.display = "block";
   }
  }
 });
}

updaterating();

function votelike() {
if (document.cookie.indexOf("voted") >= 0) {
  alert("You already voted!");
}
else {
	like();
}
}

function votedislike() {
if (document.cookie.indexOf("voted") >= 0) {
  alert("You already voted!");
}
else {
	dislike();
}
}

function like() {
 $.ajax("https://data.sparkfun.com/input/" + "NJb4Ed1oaKigpVl9p3QA?" + "private_key=5dmx78416oi6vAEMvYm0" + "&dislike=D0" + "&from=" + "UNKNOWN" + "&like=L1", {
   type: 'POST'
  })
 }
 var l1state = document.getElementById("l1").innerHTML
 document.getElementById("l1").innerHTML = ++l1state;
 document.cookie = "voted";
}

function dislike() {
 $.ajax("https://data.sparkfun.com/input/" + "NJb4Ed1oaKigpVl9p3QA?" + "private_key=5dmx78416oi6vAEMvYm0" + "&dislike=D1" + "&from=" + "UNKNOWN" + "&like=L0", {
   type: 'POST'
  })
 }
 var d1state = document.getElementById("d1").innerHTML
 document.getElementById("d1").innerHTML = ++d1state;
 document.cookie = "voted";
}
