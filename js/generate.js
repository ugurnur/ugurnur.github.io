var cardHtml;



var questions = [
  `1.    What is API?    `,
  `2.    API vs Webservices?    `,
  `3.    What is SoapUI? and how did you use it in your current project?  `,
  `4.    Name of some commonly used HTTP methods in REST based architecture?  `,
  `5.    HTML Status Codes?`,
  `6.    What first thing you check when you get response?  `,
  `7.    Http methods and request types  `


  
]

for (let i= 1, image=1, q=0; i< 8; i++, image++, q++) {
    cardHtml += `<div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapseThree">
              ${questions[q]}
            </button>
          </h2>
        </div>
        <div id="collapse${i}" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
              <img src="images\\api\\answer${image}.jpg" alt="">
          </div>
        </div>
        </div>`

}

console.log(cardHtml);