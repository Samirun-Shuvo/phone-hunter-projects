
const phoneSearch = async () => {
    const serchField = document.getElementById('search-field');
    serchText = serchField.value;
    serchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${serchText}`
    // console.log(url);
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.data);
    displaySearchResult(data.data);
}
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    phones?.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card phn-img">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.brand}</h5>
                    <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Explore Phone</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}
const phoneDetails = async phoneid => {
    // console.log(phoneid);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneid}`
    // console.log(url);
    const res = await fetch(url)
    const data = await res.json()
    displayPhoneDetails(data.data);
}
const displayPhoneDetails = phone => {
    console.log(phone);
    const phoneDetailsContaine = document.getElementById('phone-details');
    phoneDetailsContaine.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card mb-3 mx-auto" style="max-width: 1000px;">
        <div class="row g-0">
            <div class="col-md-4 details-img">
                <div class="p-5">
                    <div>
                        <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="mt-2">
                        <h6 class="card-title">Name: ${phone.name}</h6>
                        <h6 class="card-title">Release Date: ${phone.releaseDate ? phone.releaseDate : 'Not Found'}</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body p-5">
                    <h5 class="card-title">Main Features:</h5>
                    <p class="card-text">Chip-Set: ${phone.mainFeatures.chipSet}</p>
                    <p class="card-text">Display-Size: ${phone.mainFeatures.displaySize}</p>
                    <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
                    <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
                    <h5 class="card-title">Sensors:</h5>
                    <p class="card-text">${phone.mainFeatures.sensors[0]},
                        ${phone.mainFeatures.sensors[1]},${phone.mainFeatures.sensors[2]},
                        ${phone.mainFeatures.sensors[3]},${phone.mainFeatures.sensors[4]},
                        ${phone.mainFeatures.sensors[5]}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
    phoneDetailsContaine.appendChild(div);

}