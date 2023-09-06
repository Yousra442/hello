'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

const header=document.querySelector('.header')

const jj=document.querySelector('.header')



const allbutto=document.getElementsByTagName('button');

const message=document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='we use cookied for improve<button class="btn btn--close-cookie">got it!</button>';

// header.append(message)
header.after(message)

document.querySelector('.btn--close-cookie').addEventListener('click',()=>{
  message.remove()
})
// const btnscroleto=document.querySelector('.btn--scroll-to');
// const section1=document.querySelector('#section--1');
// // btnscroleto.addEventListener('click',(e)=>{
// // section1.scrollIntoView({behavior:'smooth'})
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id=e.target .getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    })
  }
})

  // tabbed component
  const tab=document.querySelectorAll('.operations__tab')

  const tabcontainer=document.querySelector('.operations__tab-container');
  const tabscontant=document.querySelectorAll('.operations__content');
  tabcontainer.addEventListener('click',function(e){
    const clicked=e.target.closest('.operations__tab');
    if(!clicked)return;
    tab.forEach(t=>t.classList.remove('operations__tab--active'))
    tabscontant.forEach(c=>c.classList.remove('operations__content--active'))
    clicked.classList.add('operations__tab--active');
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  })
  const nav=document.querySelector('.nav');
  const handlehover=function(e,opacity){
   
    if(e.target.classList.contains('nav__link')){
      const link=e.target;
      const siblings=link.closest('.nav').querySelectorAll('.nav__link');
      const logo=link.closest('.nav').querySelector('img');
      siblings.forEach(el=>{
        if(el !== link) el.style.opacity=this
      })
      logo.style.opacity=this;
    
    }

  }
 nav.addEventListener('mouseover',
  handlehover.bind(0.5)
)
 nav.addEventListener('mouseout',
  handlehover.bind(1)
 )
 const featurs=document.querySelector('#section--1');
 const topdata=featurs.getBoundingClientRect()
//  console.log(topdata);
// window.addEventListener('scroll',function(){
//   if(window.scrollY > topdata.top){
//     nav.classList.add('sticky')
//   }
//   else{
//     nav.classList.remove('sticky')
//   }
 
// })

// const head=document.querySelector('.header');
// const navhight=nav.getBoundingClientRect().height
// const headfubs=function(entries){
//   const[entir]=entries;
//   console.log(entir);
//  if(!entir.isIntersecting){
//   nav.classList.add('sticky')
//  }
//  else{
//   nav.classList.remove('sticky')
//  }

// }
// const observerjj=new IntersectionObserver(headfubs,{
//   root:null,
//   threshold:0,
//   rootMargin:`-${navhight}px`
// })
// observerjj.observe(head,observerjj);
// reveal sections

const revealsection=function(entries,observe){
  const[entry]=entries;
  if(!entry.isIntersecting)return;
entry.target.classList.remove('section--hidden');  
observe.unobserve(entry.target)

}

const allsection=document.querySelectorAll('.section');
const sectionobserver=new IntersectionObserver(revealsection,{
  root:null,
  threshold:0.15

})
allsection.forEach(function(sectin){
  sectionobserver.observe(sectin)
  sectin.classList.add('section--hidden');

})
const newfeat=()=>{
  console.log('jsjsj');
}
newfeat()