const userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0]; // this date select only this data and priveous date select

const result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today  = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear(); 

    let d3, m3, y3;

    y3 = y2 -y1;

    if (m2 >=  m1) { // 10 >= 7
        m3 = m2 - m1; // m3 = 10 - 7 = 3
    }
    else{
        y3--;    // 2024-1999 = 25-- == 24
        m3 = 12 + m2 -m1;   // m3 = 12 + 5 -7 => m3 = 12 - 2 = 10 month
    }

    if (d2 >=d1) {   // `12 >= 7 = 2 // false
        d3 = d2 - d1; // 12-7= 5 
    }
    else{
        m3--; // 9 month 
        d3 = getDaysInMonth(y1, m1) + d2 - d1; // 
    }

    result.innerHTML = ` you are  ${y3} years ${m3} month ${d3} days old`;
     
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}

// let date  = new Date(1999, 7, 0).getDate();
// console.log(date);

// adaptability hote hobe // 
// Team work 
// design pattern jante hobe

// Remote job 



