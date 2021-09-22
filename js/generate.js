var cardHtml;



var questions = [
  `32.  How do you sort an object that you created?      `,
  `33.  Difference between Hashtable and HashMap in Java?      `,
  `34.  How would you handle Exception?     `,
  
]

for (let i= 1, image=32, q=0; i< 4; i++, image++, q++) {
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
              <img src="images\\java\\answer${image}.jpg" alt="">
          </div>
        </div>
        </div>`

}

console.log(cardHtml);