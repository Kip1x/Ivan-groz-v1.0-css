// квиз
function checkQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');
    let score = 0;
    const totalQuestions = 8;

    const formData = new FormData(form);
    
    for (let value of formData.values()) {
        score += parseInt(value);
    }

    const answeredQuestions = Array.from(formData.keys()).length;
    
    if (answeredQuestions < totalQuestions) {
        resultDiv.style.color = "#3498db";
        resultDiv.innerHTML = `Пожалуйста, ответьте на все вопросы. (Отвечено: ${answeredQuestions} из ${totalQuestions})`;
        return;
    }

    resultDiv.innerHTML = `Ваш результат: ${score} из ${totalQuestions} правильных ответов.`;
    
    
    if (score === totalQuestions) {
        resultDiv.style.color = "#27ae60";
        resultDiv.innerHTML += " <br>Великолепно! Вы настоящий знаток эпохи Ивана IV.";
    } else if (score >= 5) {
        resultDiv.style.color = "#f39c12";
        resultDiv.innerHTML += " <br>Хорошие знания, вы неплохо разбираетесь в истории.";
    } else {
        resultDiv.style.color = "#e74c3c";
        resultDiv.innerHTML += " <br>Стоит еще раз внимательно изучить материал страницы.";
    }
}


//модальное окно
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector('.modal-close');

    const reformImages = document.querySelectorAll('#reform img');
    const galleryImages = document.querySelectorAll('#gallery img');
    const BioImages = document.querySelectorAll('#Bio img');
    const vnechnaiapolitika = document.querySelectorAll('#vnechnaiapolitika img');


    reformImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    galleryImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    BioImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    vnechnaiapolitika.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
//Всплывание
    let t
const o = document.querySelector('section')
document.querySelector('#container').addEventListener('scroll', _ => {
  if (t) clearTimeout(t)
  o.classList.add('on')
  t = setTimeout(_ => o.classList.remove('on'), 1000)
})
}
