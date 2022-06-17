const submitForm = (e) => {
    e.preventDefault();
}


document.getElementById('btn').addEventListener('click', function (e) {

    document.getElementById('form-one').style.display = 'none'
    document.getElementById('company-info').style.display = 'none'
    document.getElementById('info-one').style.display = 'none'
    document.getElementById('btn').style.display = 'none'
    document.getElementById('btn2').style.left= "-60%";
   
    document.getElementById('form-two').innerHTML = `
    <div class="info">
        <img class="location2" src="../images/location.png" alt="">
        <img class="arrow" src="../images/arrow.png" alt="">
        <img class="phone2" src="../images/phone.png" alt="">
        <img class="arrow" src="../images/arrow.png" alt="">
        <img class="delivery" src="../images/delivery.png" alt="">
    </div>
    <div class="company-info">
        <h1>Tell us about your company</h1>
    </div>
    <form onSubmit="submitForm">
        <input id type="text" placeholder="Number of trucks 2"> <br />
        <input type="text" placeholder="website 2"> <br />
        <input type="text" placeholder="Load type"> <br />
        <input type="text" placeholder="Your company insurance amount"> <br />
        <input type="text" placeholder="Type of equipement for transport"> <br />
        <input type="text" placeholder="service category preference"> <br />
        <input type="text" placeholder="Country Served"><br />
        <input type="text" placeholder="Area Served by the carriern 6">

        </form>
    `
 
});





document.getElementById('btn2').addEventListener('click', function (e) {
    
    document.getElementById('form-one').style.display = 'none'
    document.getElementById('company-info').style.display = 'none'
    document.getElementById('info-one').style.display = 'none'
    document.getElementById('btn2').style.display = 'none'
    document.getElementById('form-three').innerHTML = `
    <div class="info">
        <img class="location2" src="../images/location.png" alt="">
        <img class="arrow" src="../images/arrow.png" alt="">
        <img class="phone" src="../images/phone.png" alt="">
        <img class="arrow" src="../images/arrow.png" alt="">
        <img class="delivery" src="../images/delivery.png" alt="">
    </div>
    <div class="company-info">
        <h1>Tell us about your company</h1>
    </div>
    <form onSubmit="submitForm">
        <input id type="text" placeholder="Number of trucks 3"> <br />
        <input type="text" placeholder="website 3"> <br />
        <input type="text" placeholder="Load type"> <br />
        <input type="text" placeholder="Your company insurance amount"> <br />
        <input type="text" placeholder="Type of equipement for transport"> <br />
        <input type="text" placeholder="service category preference"> <br />
        <input type="text" placeholder="Country Served"><br />
        <input type="text" placeholder="Area Served by the carriern 10">
    </form>
    `
});

