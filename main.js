function loadjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == "200"){
			callback(xhr.responseText);
		}
	
};
xhr.send(null);
}
loadjson("data.json",function(text){
	var data = JSON.parse(text);
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
    qualify(data.educationalqualification);
    skillset(data.skills);
    acheivements(data.acheivements);

})
var left  = document.querySelector(".left");
function basics(det){
 img = document.createElement("img");
 img.src = det.image;
 left.appendChild(img);
 var name1 = document.createElement("h3");
name1.textContent = det.name;
left.appendChild(name1);
var phoneno = document.createElement("h3");
phoneno.textContent = det.phoneno;
left.appendChild(phoneno);
var email = document.createElement("h3");
email.textContent = det.email;
left.appendChild(email);
var add = document.createElement("h2");
add.textContent = "Address";
left.appendChild(add);
var hrz = document.createElement("hr");
left.appendChild(hrz);
var address = document.createElement("h3");
address.textContent = det.address;
left.appendChild(address);
}
var right = document.querySelector(".right");
function careerinfo(info1){
var career1 = document.createElement("h3");
career1.textContent = "CAREER OBJECT";
right.appendChild(career1);
var hrz = document.createElement("hr");
right.appendChild(hrz);
var info = document.createElement("h3");
info.textContent = info1.info;
right.appendChild(info);
}
var right = document.querySelector(".right");
function qualify(info){
var add = document.createElement("h2");
	add.textContent = "EDUCATIONAL QUALIFICATION";
	right.appendChild(add);
var hrz = document.createElement("hr");
right.appendChild(hrz);

var table1 = document.createElement("table");
table1.border = "2";
right.appendChild(table1);
tabledata = "";
for(i=0;i<info.length;i++){
  tabledata+= "<tr><td>"+info[i].qualification+"</td><td>"+info[i].institute+"</td<td>"+info[i].percentage+"</td><td>"+info[i].year+"</td></tr>";
}
table1.innerHTML=tabledata;



}
function skillset(skill){
    var sk = document.createElement("h1");
	sk.textContent = "TECHNICAL SKILLS";
	right.appendChild(sk);
	var hr = document.createElement("hr");
	right.appendChild(hr);


	for(i=0;i<skill.length;i++)
	{
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
	
var ul = document.createElement("ul");
var li = document.createElement("li");
li.textContent = skill[i].info;
ul.appendChild(li);
right.appendChild(ul);
	}
}
function acheivements(ac){
 var sk1 = document.createElement("h1");
	sk1.textContent = "ACHIEVEMENTS";
	right.appendChild(sk1);
	var hr = document.createElement("hr");
	right.appendChild(hr);
    for(i=0;i<ac.length;i++)
    {
    	var s = document.createElement("h3");
		s.textContent = ac[i].title;
		right.appendChild(s);
    
    }


 }
 function openpage(){
 	window.open("resume.html","_self",true)
 }







 