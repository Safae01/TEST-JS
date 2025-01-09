fetch("test.json")
.then((reponse)=>reponse.json())
.then((data)=>{
    const selectcontinent= document.getElementById('continent');
    const selectcountry=document.getElementById('country');
    const selectcity=document.getElementById('city');
    Object.keys(data).forEach(continent => {
        const option=document.createElement('option');
        option.value=continent;
        option.textContent=continent;
        selectcontinent.appendChild(option)
    });
    
    selectcontinent.addEventListener("change",()=>{
        const continent = selectcontinent.value;
        selectcountry.innerHTML='<option value="" >Select a country</option>';
        selectcity.innerHTML='<option value="" >Select a country</option>'
        Object.keys(data[continent]).forEach(country => {
            const option=document.createElement('option');
            option.value=country;
            option.textContent=country;
            selectcountry.appendChild(option)
        });
    })

    selectcountry.addEventListener("change",()=>{

        const continent = selectcontinent.value;
        const country= selectcountry.value;
        selectcity.innerHTML='<option value="" >Select a country</option>'

        data[continent][country].forEach(city => {
            const option =document.createElement('option');
            option.value=city;
            option.textContent=city;
            selectcity.appendChild(option);
        });
    })

    

})