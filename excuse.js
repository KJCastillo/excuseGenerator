function excuseGenerator() {
var who = ['The Batman ', 'The Avengers ', 'The Mandalorian ', 'Baby Yoda ' ]
var verb = [' desintegrated ', ' ate ', ' confiscated ', ' blew up ']
var what = [' my laptop ', ' my car ', ' my christmas tree ', 'my playstation  ']
var when = [' yesterday!', ' this morning!', ' just now!', ' last night!']

var name = who[Math.floor(Math.random() * who.length)];
var action = verb[Math.floor(Math.random() * verb.length)];
var item = what[Math.floor(Math.random() * what.length)];
var time = when[Math.floor(Math.random() * when.length)];

document.write("But i can't make it to class because " + name + action + item + time + " Can you believe it?!")
}

excuseGenerator();
