document.addEventListener("keydown",function(e){var s=e.key;switch(console.log(s),pressed(s),e.key){case"s":var a=new Audio("./sounds/squirrel.mp3");a.play(),setTimeout(function(){a.pause()},1500);break;case"d":var n=new Audio("./sounds/deer.mp3");n.play(),setTimeout(function(){n.pause()},1500);break;case"m":var o=new Audio("./sounds/scream.mp3");o.play(),setTimeout(function(){o.pause()},3e3),console.log(e.key);var r=document.querySelector("."+e.key);r.classList.remove("women"),r.classList.add("zombie"),setTimeout(function(){r.classList.remove("zombie"),r.classList.add("women")},2e3);break;default:console.log("no found")}});var animals=document.querySelectorAll(".animal");for(console.log(animals),i=0;i<animals.length;i++)animals[i].addEventListener("click",function(){var e=this.innerHTML,s=e.length;switch(console.log(e.slice(s-1)),console.log(this),e.slice(s-2,s-1)){case"s":var a=new Audio("./sounds/squirrel.mp3");a.play(),setTimeout(function(){a.pause()},1500);break;case"d":var n=new Audio("./sounds/deer.mp3");n.play(),setTimeout(function(){n.pause()},1500);break;case"m":var o=new Audio("./sounds/scream.mp3");o.play(),setTimeout(function(){o.pause()},3e3),this.classList.remove("women"),this.classList.add("zombie");var r=this;setTimeout(function(){r.classList.remove("zombie"),r.classList.add("women")},2e3);break;default:console.log("no found")}});function pressed(e){var s=document.querySelector("."+e);s.classList.add("pressed"),setTimeout(function(){s.classList.toggle("pressed")},150)}