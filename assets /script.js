const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('show'); });
},{threshold:.12});
reveals.forEach(el=>io.observe(el));

document.querySelector('.menu')?.addEventListener('click',()=>{
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '70px'; nav.style.left = '5vw'; nav.style.right = '5vw';
  nav.style.flexDirection = 'column'; nav.style.padding = '18px'; nav.style.border = '1px solid rgba(255,255,255,.12)';
  nav.style.borderRadius = '20px'; nav.style.background = 'rgba(0,0,0,.92)';
});
