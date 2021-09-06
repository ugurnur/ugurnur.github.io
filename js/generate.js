var cardHtml;

var questions = [
    `25. Smoke Testing`,
    `26. Which part of regression test should be automated?`,
    `27. How do you ensure that your regression tests are effective?`,
    `28. A number of critical bugs are fixed in software. All the bugs are in one module, related to reports. The test manager decides to do regression testing only on the report’s module.`,
    `29. Which technique can be used to achieve input and output coverage?`,
    `30. How do you run your regression? How often, how many VMs, how many days, how many tests?`,
    `31. What is black box testing? What are the different black box testing techniques?`,
    `32. What is Equivalence partitioning testing?`
]

for (let i= 1, image=25, q=0; i< 9; i++, image++, q++) {
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