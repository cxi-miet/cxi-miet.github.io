import {events} from "./eventdata.js";

const upcomingEventRow = document.querySelector("#upcoming-event-cover");
const pastEventRow = document.querySelector("#past-event-cover");

const upcomingEventTemp = document.querySelector("#up-event-temp");
const pastEventTemp = document.querySelector("#past-event-temp");

const date = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

window.addEventListener("load", createEvent);

function createEvent(){
    events.map((evt) => {
        const evtDate = new Date(evt.date);
        if(evtDate > date) {
            const upcomingEvt = upcomingEventTemp.content.cloneNode(true);
            entries(upcomingEvt, evt, evtDate);
            upcomingEvt.querySelector(".reg-date").textContent = new Date(evt.registration).toLocaleDateString();
            upcomingEventRow.append(upcomingEvt);
        }
        else {
            const pastEvt = pastEventTemp.content.cloneNode(true);
            entries(pastEvt, evt, evtDate);
            pastEventRow.append(pastEvt);
        }
    }) 
}

function entries(clone, evt, evtDate){
    clone.querySelector(".day").textContent = (evtDate.getDate().toString().length==1)?`0${evtDate.getDate()}`:evtDate.getDate();
    clone.querySelector(".month").textContent = months[evtDate.getMonth()];
    console.log(clone.querySelector(".year"))
    clone.querySelector(".year").textContent = evtDate.getFullYear();
    clone.querySelector(".event-name").textContent = evt.name;
    clone.querySelector(".mode").textContent = evt.mode;
    clone.querySelector(".prize").textContent = evt.prize;
    clone.querySelector(".event-desc").textContent = evt.description;
    clone.querySelector(".link").href = evt.link;  
}

