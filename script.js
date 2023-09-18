// on window load
window.onload = function() {
function getIncomeValues() {
  // get input value for januaryIncome
  var januaryIncome = document.getElementById("januaryIncome").value;
  // get input value for februaryIncome
  var februaryIncome = document.getElementById("februaryIncome").value;
  // get input value for marchIncome
  var marchIncome = document.getElementById("marchIncome").value;
  // get input value for aprilIncome
  var aprilIncome = document.getElementById("aprilIncome").value;
  // get input value for mayIncome
  var mayIncome = document.getElementById("mayIncome").value;
  // get input value for juneIncome
  var juneIncome = document.getElementById("juneIncome").value;
  // get input value for julyIncome
  var julyIncome = document.getElementById("julyIncome").value;
  // get input value for augustIncome
  var augustIncome = document.getElementById("augustIncome").value;
  // get input value for septemberIncome
  var septemberIncome = document.getElementById("septemberIncome").value;
  // get input value for octoberIncome
  var octoberIncome = document.getElementById("octoberIncome").value;
  // get input value for novemberIncome
  var novemberIncome = document.getElementById("novemberIncome").value;
  // get input value for decemberIncome
  var decemberIncome = document.getElementById("decemberIncome").value;
  return [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome];
}

function getExpenseValues() {
    // get input value for januaryExpense
    var januaryExpense = document.getElementById("januaryExpenses").value;
    // get input value for februaryExpense
    var februaryExpense = document.getElementById("februaryExpenses").value;
    // get input value for marchExpense
    var marchExpense = document.getElementById("marchExpenses").value;
    // get input value for aprilExpense
    var aprilExpense = document.getElementById("aprilExpenses").value;
    // get input value for mayExpense
    var mayExpense = document.getElementById("mayExpenses").value;
    // get input value for juneExpense
    var juneExpense = document.getElementById("juneExpenses").value;
    // get input value for julyExpense
    var julyExpense = document.getElementById("julyExpenses").value;
    // get input value for augustExpense
    var augustExpense = document.getElementById("augustExpenses").value;
    // get input value for septemberExpense
    var septemberExpense = document.getElementById("septemberExpenses").value;
    // get input value for octoberExpense
    var octoberExpense = document.getElementById("octoberExpenses").value;
    // get input value for novemberExpense
    var novemberExpense = document.getElementById("novemberExpenses").value;
    // get input value for decemberExpense
    var decemberExpense = document.getElementById("decemberExpenses").value;
    return [januaryExpense, februaryExpense, marchExpense, aprilExpense, mayExpense, juneExpense, julyExpense, augustExpense, septemberExpense, octoberExpense, novemberExpense, decemberExpense];
}
// red : 'rgba(255, 99, 132, 0.2)', 'rgb(255, 99, 132)',
// green : 'rgba(75, 192, 192, 0.2)', 'rgb(75, 192, 192)',

// create chart jss bar chart for id myChart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart =  new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'],
    datasets: [{
      label: 'Expenses',
      data: getExpenseValues(),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)'
        
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)'
       
      ],
      borderWidth: 1
    },
    {
        label: 'Income',
        data: getIncomeValues(),
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            
          ],
          borderColor: [
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)'
           
          ],
        borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 // download function 
    document.getElementById("download").addEventListener("click", function() {
        /*Get image of canvas element*/
        var canvas = document.getElementById("myChart");
        var image = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = "myChart.png";
        link.href = image;
        link.click();
    }
);
    
// click handler for chart-tab
document.getElementById("chart-tab").addEventListener("click", function() {
    myChart.data.datasets[0].data = getIncomeValues();
    myChart.data.datasets[1].data = getExpenseValues();
    // update chart
    myChart.update();
});
};