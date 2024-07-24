

function getInputAndSubmit() {
    // Lấy giá trị từ các ô input
    let nValue = +document.getElementById('input_n').value;
   
    
    // Gọi hàm sum_to_n_a với các giá trị từ input
      
    let sumWay1 = sum_to_n_a(nValue);
    console.log(sumWay1);
    document.getElementById('way1').innerHTML=`Sum 1: ${sumWay1}`;
 // Gọi hàm sum_to_n_b với các giá trị từ input
      
 let sumWay2 = sum_to_n_b(nValue);
 console.log(sumWay2);
 document.getElementById('way2').innerHTML=`Sum 2: ${sumWay2}`;
    // Gọi hàm sum_to_n_c với các giá trị từ input
      
 let sumWay3 = sum_to_n_c(nValue);
 console.log(sumWay3);
 document.getElementById('way3').innerHTML=`Sum 3: ${sumWay3}`;
    
}

// Way 1

var sum_to_n_a  = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    

    return sum;
   

}
// Way 2

var sum_to_n_b = function(n) {
    // your code here

    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_b(n - 1);




};

// Way 3
var sum_to_n_c = function(n) {
    // your code here

return n * (n + 1) / 2;
};









