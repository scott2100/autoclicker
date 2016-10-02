var autoClicker;
var autoClickerHtml;
var autoClickerHtmlDiv = document.createElement('div');

function startAutoClicker() {
   console.log("Started autoclicker");

   autoClicker = setInterval(
    function() {
      Game.ClickCookie();
      console.log("Cookie Clicked"); 
    }, 
  15);
}

function stopAutoClicker() {
  
  console.log("Stopped autoclicker");
  clearInterval(autoClicker);

}



autoClickerHtmlDiv.setAttribute("style","position:absolute;width:100px;height:auto;background-color:black;z-index:5");

autoClickerHtml = '<button onclick="startAutoClicker()" type="button1">Start autoclicker!</button><br/>';
autoClickerHtml += '<button onclick="stopAutoClicker()" type="button1">Stop autoclicker!</button>';

autoClickerHtmlDiv.innerHTML = autoClickerHtml;
document.getElementById("wrapper").appendChild(autoClickerHtmlDiv);


