const sdata = [
    {
        heading:"CSS BattleGround (Competetion)<br>",
        heading1:"About<br>",
        head_description:"<center>CSS BattleGround is an online CSS code golfing game...<br>CSS BattleGround is one of its kind game for frontend developers.<br>The objective of the game is to write CSS to replicate the given target image in the least code possible <br>in the given time allotted.</center",
        heading2:"Price",
        head2_description:"There were 3 position<br><p>🥇 Ist position got ₹1500 cash price<br> 🥈 IInd position got ₹1000 cash price<br> 🥉 IIIrd position got ₹500 cash price<br> 🎫 100% Certification</p><p> Total participants: 110</p>",
        line:"<hr color='red'>",
        heading3:"Tools and Technologies Used!",
        head3_description:"HTML, CSS, CSS(Preprocessor)",
        button1:"More Info.",
        button2:"Photos",
        display:"block",
    },
    {
        heading:"Web Development Workshop<br>",
        heading1:"Project We Built<br>",
        head_description:"The Railway Bus Management System is a real-time tracking system that aims to facilitate the railways passengers to transport them from <br>distributed locations throughout the city/region to their respective railway stations conveniently and within time.<br> Further this model shall reduce overcrowding at stations and passenger traffic on roads.<br><br>The system takes train's arrival information and passengers’ location as input. It analyses the information and provides the passengers an interactive list<br> and routes of appropriate buses available near them with their appropriate timings which can drop them directly at their station within time.<br> An Admin module controls all the predefined factors like management of buses, routes, timings, conductors, logins; handling availability of buses etc.<br> <br>The workshop was accomplished successfully with 20 participants, 8 mentors and 3 instructor</p>",
        heading2:"",
        head2_description:"",
        line:"<hr color='red'>",
        heading3:"Tools and Technologies Used!",
        head3_description:"Throughout the workshop we used following tools and Technologies:<br><br>Frontend: HTML, CSS, JavaScript, ReactJs, jQuery<br>Framework: Bootstrap, ReactJs<br>Backend: JAVA Servlets, MySQL<br>Deployment: AWS Cloud",
        button1:"",
        button2:"",
        display:"none",
    }
]
// scroller in workshop section <start>

const cover = document.getElementById("cover");
sdata.forEach((e, i) => {
	cover.innerHTML += `
    <div class="box center" style="right:-${i*100}vw;">
    <h1>${e.heading}</h1>
    <br>
    <h2>${e.heading1}</h2><br>
    <p>${e.head_description}</p>
    <h2>${e.heading2}</h2><br>
    <p>${e.head2_description}</p><br>
    ${e.line}<br>
    <h2>${e.heading3}</h2><br>
    <p>${e.head3_description}</p><br><br>
    <div class="center" style="justify-content: space-evenly;">
    <a href="https://cxi-miet.github.io/cssbattleground/" class="s_button" style="display:${e.display};">${e.button1}</a>
    <a class="s_button" onclick="show_card('cssbattleground')" style="display:${e.display};">${e.button2}</a>
    </div>
    </div>
    `
});
let transform = 0;
document.getElementById('right').addEventListener('click', () => {
	if (transform == sdata.length - 1) {
		transform = 0;
	} else {
		transform++;
	}
	cover.style = `transform:translate(-${transform*100}vw)`
})
document.getElementById('left').addEventListener('click', () => {
	if (transform == 0) {
		transform = sdata.length - 1;
	} else {
		transform--;
	}
	cover.style = `transform:translate(-${transform*100}vw)`
})
// scroller in workshop section <over>