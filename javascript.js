let typingText=document.querySelector(".typing-text p");
let input=document.querySelector(".wrapper .input-field");
let time=document.querySelector(".time span b");;
let mistakes=document.querySelector(".mistake span");
let wpm=document.querySelector(".wpm span ");
let cpm=document.querySelector(".cpm span");
let btn=document.querySelector("button");
// set value
let timer;
let maxtime=60;
let lefttime=maxtime;
let charIndex=0;
let mistake=0;
let istyping=false;
function loadparagraph(){
    let paragraph=[" Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"];
    const randomIndex = Math.floor(Math.random()*paragraph.length);
    typingText.innerHTML='';
    for(const char of paragraph[randomIndex]){
        console.log(char);
        typingText.innerHTML+= `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
}
function inittyping(){
    const char=typingText.querySelectorAll('span');
    
}

loadparagraph();
// const fruits = ["Mango", "Pineapple", "Oranges"];
// for (const fruit in fruits) {
//   console.log(fruit);
// }



let a="hello";
let array=a.split('');
let arr=array.reverse();
let arrjoin=arr.join('');
console.log(arrjoin);
// let a = 5/0;
// // console.log(++a); // 6 (already incremented)
// // console.log(a++); // 6 (then a becomes 7)
// // console.log(++a)  // 8 (already incremented)
// console.log(a);

