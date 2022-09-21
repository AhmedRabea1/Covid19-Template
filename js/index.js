let mybutton = document.getElementById("btn-back-to-top");
let firstButton = document.getElementById('disease-q');
let secondButton = document.getElementById('spread-q');
let thirdButton = document.getElementById('protect-q');
let fourthButton = document.getElementById('symptoms-q');
let fifthButton = document.getElementById('outbreak-q');
let sixthButton = document.getElementById('myth-q');
let mainDiv = document.getElementById('collapsed-content');
let firstButtonAccordion = document.getElementById('accordion-1');
let secondButtonAccordion = document.getElementById('accordion-2');
let thirdButtonAccordion = document.getElementById('accordion-3');
let fourthButtonAccordion = document.getElementById('accordion-4');
let fifthButtonAccordion = document.getElementById('accordion-5');
let sixthButtonAccordion = document.getElementById('accordion-6');

let sections = document.querySelectorAll('section');
let navLi = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('text-primary');
        document.querySelector('nav a[href*= ' + current + ']').classList.add('text-primary');
    });
});



// When the user scrolls down 20px from the top of the document, show the button
mybutton.addEventListener("click", backToTop);
window.addEventListener('scroll',scrollFunction);
firstButton.addEventListener("click",collapseOne);
secondButton.addEventListener("click",collapseTwo);
thirdButton.addEventListener("click",collapseThree);
fourthButton.addEventListener("click",collapseFour);
fifthButton.addEventListener("click",collapseFifth);
sixthButton.addEventListener("click",collapseSixth);

// window.addEventListener('scroll',() => {
//     var scrollPosition = document.documentElement.scrollTop;

// sections.forEach((section) =>
// {
//     if(scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop+ section.offsetHeight)
//     {
//         var currentId = section.attributes.id.value;
//         console.log(currentId);
//         removeAllActive();
//         addActive(currentId);
//     }
// }
// )
// })




// var removeAllActive  = function() {
//     document.querySelectorAll("nav a").forEach((el) => {
//         el.classList.remove("active");
//     })
// }

// var addActive = function(id) {
//     console.log(id);
//     var selector = `nav a [href="#${id}"]`;
//     document.querySelector(selector).classList.add("active");
// }
function scrollFunction() {
if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function collapseOne(){
    // let myAccordion = document.createElement('div');
    // let myAccordionElement = document.createElement('div');
    // let myAccordionHeading = document.createElement('h2');
    // let myAccordionButton = document.createElement('button');
    // let myAccordionCollapse = document.createElement('div');
    // let myAccordionBody = document.createElement('div');
    // myAccordion.setAttribute('class','accordion');
    // myAccordion.setAttribute('id','accordion-example');
    // myAccordionElement.setAttribute('class','accordion-item');
    // myAccordionHeading.setAttribute('class','accordion-header');
    // myAccordionHeading.setAttribute('id','headingOne');
    // myAccordionButton.setAttribute('class','accordion-button collapsed');
    // myAccordionButton.setAttribute('type','button');
    // myAccordionButton.setAttribute('data-bs-toggle','collapse');
    // myAccordionButton.setAttribute('data-bs-target','#collapseOne');
    // myAccordionButton.innerText = 'What is a novel coronavirus?';
    // myAccordionHeading.appendChild(myAccordionButton);
    // myAccordionElement.appendChild(myAccordionHeading);
    // myAccordion.style.width = '100%';
    // myAccordionCollapse.setAttribute('id','collapseOne');
    // myAccordionCollapse.setAttribute('class','accordion-collapse collapse');
    // myAccordionCollapse.setAttribute('aria-labelledby','headingOne');
    // myAccordionBody.setAttribute('class','accordion-body');
    // myAccordionBody.innerText = `On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019. abbreviated as COVID-19. In COVID-19, 'CO' stands for 'corona, VI' for virus,' and D' for disease. Formerly, this disease was referred to as "2019 novel coronavirus" or "2019-nCoV"
    // A novel coronavirus is a new coronavirus that has not been previously identified.The virus causing coronavirus disease 2019 (COVID-19). is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold`;
    // myAccordionCollapse.appendChild(myAccordionBody);
    // myAccordionElement.appendChild(myAccordionCollapse);
    // myAccordion.appendChild(myAccordionElement);
    // mainDiv.append(myAccordion);
    firstButtonAccordion.classList.remove('d-none');
    secondButtonAccordion.classList.add('d-none');
    thirdButtonAccordion.classList.add('d-none');
    fourthButtonAccordion.classList.add('d-none');
    fifthButtonAccordion.classList.add('d-none');
    sixthButtonAccordion.classList.add('d-none');
}
function collapseTwo()
{
    firstButtonAccordion.classList.add('d-none');
    secondButtonAccordion.classList.remove('d-none');
    thirdButtonAccordion.classList.add('d-none');
    fourthButtonAccordion.classList.add('d-none');
    fifthButtonAccordion.classList.add('d-none');
    sixthButtonAccordion.classList.add('d-none');
}
function collapseThree()
{
    firstButtonAccordion.classList.add('d-none');
    secondButtonAccordion.classList.add('d-none');
    thirdButtonAccordion.classList.remove('d-none');
    fourthButtonAccordion.classList.add('d-none');
    fifthButtonAccordion.classList.add('d-none');
    sixthButtonAccordion.classList.add('d-none');
}
function collapseFour()
{
    firstButtonAccordion.classList.add('d-none');
    secondButtonAccordion.classList.add('d-none');
    thirdButtonAccordion.classList.add('d-none');
    fourthButtonAccordion.classList.remove('d-none');
    fifthButtonAccordion.classList.add('d-none');
    sixthButtonAccordion.classList.add('d-none');
}
function collapseFifth()
{
    firstButtonAccordion.classList.add('d-none');
    secondButtonAccordion.classList.add('d-none');
    thirdButtonAccordion.classList.add('d-none');
    fourthButtonAccordion.classList.add('d-none');
    fifthButtonAccordion.classList.remove('d-none');
    sixthButtonAccordion.classList.add('d-none');
}
function collapseSixth()
{
    firstButtonAccordion.classList.add('d-none');
    secondButtonAccordion.classList.add('d-none');
    thirdButtonAccordion.classList.add('d-none');
    fourthButtonAccordion.classList.add('d-none');
    fifthButtonAccordion.classList.add('d-none');
    sixthButtonAccordion.classList.remove('d-none');
}