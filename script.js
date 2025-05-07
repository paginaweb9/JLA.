document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    menuToggle.classList.toggle('active');
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        
        if (mobileNav.classList.contains('show')) {
          mobileNav.classList.remove('show');
          menuToggle.classList.remove('active');
        }
      }
    });
  });
  
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.background = '#ffffff';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = '#ffffff';
      header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
  });

  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {

      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
    
      item.classList.toggle('active');
    });
  });
});