var cardHtml;

var questions = [
  `33. What is Boundary value testing?`,
  `34. Why does the boundary value analysis provide good test cases?`,
  `35. Why we use decision tables?`,
  `36. What is white box testing and list the types of white box testing?`,
  `37. In white box testing what do you verify?`,
  `38. What is Gray Box Testing?`,
  `39. What is the difference between static and dynamic testing?`,
  `40. What is maintenance testing?`
]

for (let i= 1, image=33, q=0; i< 9; i++, image++, q++) {
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
              <img src="images\\answer${image}.jpg" alt="">
          </div>
        </div>
        </div>`

}

console.log(cardHtml);