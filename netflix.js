window.addEventListener("scroll",() => {
  const navbar=document.querySelector(".navbar");
  if(window.scrollY>100)
  { navbar.classList.add("scrolled");}
  else
  { navbar.classList.remove("scrolled");}
});

const profile=document.querySelector(".profile-icon");
profile.addEventListener("click",()=>
{ window.location.href="profile_details.html";});

const moviecard=document.querySelector(".content-card");
moviecard.forEach((card)=>
{ card.addEventListener("mouseEnter", ()=> { card.style.transform="scale(1.05)";});
 card.addEventListener("mouseleave",() => {card.style.transform="scale(1)"});
});
