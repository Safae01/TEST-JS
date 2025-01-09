// Fetch pour numbers.json uniquement
fetch("numbers.json")
    .then((response) => response.json())
    .then((data) => {
        const numberSelect = document.getElementById('numberSelect');
        const secondNumberSelect = document.getElementById('secondNumberSelect');
        
        // Remplir le premier select avec data[0].numbers
        data[0].numbers.forEach(element => {
            const option = document.createElement("option");
            option.value = element;
            option.textContent = element;
            numberSelect.appendChild(option);
        });

        // Remplir le deuxième select avec data[1].note
        data[1].note.forEach(element => {
            const option = document.createElement("option");
            option.value = element;
            option.textContent = element;
            secondNumberSelect.appendChild(option);
        });
    })
    .catch((error) => console.error("Erreur lors du chargement du JSON", error));

document.getElementById('calculateBtn').addEventListener("click", () => {
    if(!document.querySelector("input[name='operation']:checked")) {
        alert("Veuillez sélectionner une opération");
        return;
    }

    const selectNumber = parseFloat(document.getElementById("numberSelect").value);
    const secondNumber = parseFloat(document.getElementById("secondNumberSelect").value);
    const operation = document.querySelector("input[name='operation']:checked").value;
    
    

    // Vérification si le nombre existe dans le premier select
    let numberExists = false;
    const firstSelectOptions = document.getElementById("numberSelect").options;
    for (let i = 0; i < firstSelectOptions.length; i++) {
        if (parseFloat(firstSelectOptions[i].value) === secondNumber) {
            numberExists = true;
            break;
        }
    }
    
    if (numberExists) {
        alert("Attention : Le nombre sélectionné dans le deuxième select existe déjà dans le premier select !");
    }

    let result;
    
    switch(operation) {
        case "add":
            result = selectNumber + secondNumber;
            break;
        case "substruct":
            result = selectNumber - secondNumber;
            break;
        case "multiply":
            result = selectNumber * secondNumber;
            break;
        case "devide":
            if(secondNumber === 0) {
                alert("Impossible de diviser par 0");
                return;
            }
            result = selectNumber / secondNumber;
            break;
        default:
            result = 0;
    }
    
    document.getElementById('result').textContent = result;
    
    let red = document.getElementById('red');
    red.innerHTML = '';
    for(let i = 0; i < result; i++){
        const scare = document.createElement("div");
        scare.style.cssText = "height:30px; width:30px; border-radius:50%; background-color:red; display:inline-block; margin:2px";
        red.appendChild(scare);
    }
});

// fetch("test.json")
// .then((reponse)=>reponse.json())
// .then((data)=>{
//     let numberSelect=document.getElementById("numberSelect");
//     data.numbers.forEach(element => {
//         const option = document.createElement("option");
//         option.value= element;
//         option.textContent= element;
//         numberSelect.appendChild(option)
//     });
// })

// let btn = document.getElementById("calculateBtn");

// btn.addEventListener("click", ()=>{
//     let selectNumber=parseFloat(document.getElementById("numberSelect").value);
//     let userInput=parseFloat(document.getElementById("userInput").value);
//     let operation =document.querySelector('input[name="operation"]:checked').value;

//     if(isNaN(userInput)){
//         alert("enter a number")
//     }
//     let result

//     switch(operation) {
//                 case "add":
//                     result = selectNumber + userInput;
//                     break;
//                 case "substruct":
//                     result = selectNumber - userInput;
//                     break;
//                 case "multiply":
//                     result = selectNumber * userInput;
//                     break;
//                 case "devide":
//                     if(userInput === 0) {
//                         alert("Impossible de diviser par 0");
//                         return;
//                     }
//                     result = selectNumber / userInput;
//                     break;
//                 default:
//                     result = 0;
//             }
//         document.getElementById("result").textContent=result
// })
