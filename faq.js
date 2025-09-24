const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    // Tutup FAQ lain
    faqItems.forEach(other => {
      if(other !== item) other.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Toggle jawaban
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
