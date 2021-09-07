var cardHtml;



var questions = [
  `33.  DML (Data Manipulation Language) vs DDL (Data Definition Language)  `,
  `34.  PL / SQL functions and Triggers in Oracle? `,
  `35.  SQL JOIN JOINS  `,
  `36.  UNION `,
  `37.  How to find top 3 high paid employees?  `
]

for (let i= 1, image=33, q=0; i< 6; i++, image++, q++) {
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
              <img src="images\\sql\\answer${image}.jpg" alt="">
          </div>
        </div>
        </div>`

}

console.log(cardHtml);