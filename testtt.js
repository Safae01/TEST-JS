fetch('test.json')
      .then(response => response.json())
      .then(data => {
        const continentSelect = document.getElementById('continent');
        const countrySelect = document.getElementById('country');
        const citySelect = document.getElementById('city');

        Object.keys(data).forEach(continent => {
          const option = document.createElement('option');
          option.value = continent;
          option.textContent = continent;
          continentSelect.appendChild(option);
        
        //   Object.keys(data[continent]).forEach(country => {
        //     const option = document.createElement('option');
        //       option.value = country;
        //       option.textContent = country;
        //       countrySelect.appendChild(option);
            

        //       data[continent][country].forEach(city => {
        //         const option = document.createElement('option');
        //         option.value = city;
        //         option.textContent = city;
        //         citySelect.appendChild(option); 
        //     });
        //     });
            
        });
        
        continentSelect.addEventListener("change",()=>{
            const continent = continentSelect.value;
            const countrySelect = document.getElementById('country');
            countrySelect.innerHTML = '<option value="">Select a country</option>';
            citySelect.innerHTML = '<option value="">Select a city</option>';
            Object.keys(data[continent]).forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        })          
            countrySelect.addEventListener("change",()=>{
                const continent = continentSelect.value;
                const country = countrySelect.value;
                const citySelect = document.getElementById('city');
                citySelect.innerHTML = '<option value="">Select a city</option>';

                    data[continent][country].forEach(city => {
                        const option = document.createElement('option');
                            option.value = city;
                            option.textContent = city;
                            citySelect.appendChild(option); 

            });
        })
        
    //     // Handle continent change
    //     continentSelect.addEventListener('change', () => {
    //       const selectedContinent = continentSelect.value;
    //       countrySelect.innerHTML = '<option value="">Select a country</option>';
    //       citySelect.innerHTML = '<option value="">Select a city</option>';

    //       if (selectedContinent && data[selectedContinent]) {
    //         Object.keys(data[selectedContinent]).forEach(country => {
    //           const option = document.createElement('option');
    //           option.value = country;
    //           option.textContent = country
    //           countrySelect.appendChild(option);
    //         });
    //       }
    //     });

    //     // Handle country change
    //     countrySelect.addEventListener('change', () => {
    //       const selectedContinent = continentSelect.value;
    //       const selectedCountry = countrySelect.value;
    //       citySelect.innerHTML = '<option value="">Select a city</option>';

    //       if (selectedCountry && data[selectedContinent][selectedCountry]) {
    //         data[selectedContinent][selectedCountry].forEach(city => {
    //           const option = document.createElement('option');
    //           option.value = city;
    //           option.textContent = city;
    //           citySelect.appendChild(option);
    //         });
    //       }
    //     });
      })
    //   .catch(error => console.error('Error fetching JSON:', error));