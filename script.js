// ======form======
// ====select element by id=====
const eligibility = document.getElementById('eligibility');
const ESTA = document.getElementById('ESTA');
const pageOptions = document.getElementById('pageOptions');
const successRes = document.getElementById('successRes');
const errorResAorG = document.getElementById('errorResAorG');
const errorResESTA = document.getElementById('errorResESTA');
const addressSegment = document.getElementById('addressSegment');
const prevBTN = document.getElementById('prevBTN');
const pageNum = document.getElementById('pageNum');
const AorGvisaHeading = document.getElementById('AorGvisaHeading');
const estaHeading = document.getElementById('estaHeading');
// ====querySelector class===
const formPagenetion = document.querySelector('.formPagenetion')


// =====eventlistener========

pageOptions.addEventListener('click',()=>{
    formPagenetion.classList.remove("hidden");
    if (formPagenetion.style.display === "none") {
        formPagenetion.style.display = "block";
    } else {
        formPagenetion.style.display = "none";
    }
})

// =====Applicant information=====
let applicantInfo = {
    haveAorGvisa : "",
    visaProgram : "",
    StreetNumber : "",
    CityorTown :"",
    isApartmentSuiteorFlor:"",
    state:"",
    zipCode:"",
    StreetNumberPresent: "",
    CityorTownPresent :"",
    isApartmentSuiteorFlorPresent:"",
    statePresent:"",
    zipCodePresent:"",
}

// =====oniput function======
function handleInput(event){
    applicantInfo={
        ...applicantInfo,
        [event.target.name] : event.target.value.trim()
    }
    
    console.log(event.target);
    console.log(event.target.parentElement.parentElement);
    
}
// ====form validation===

// =====functions are append here======
function checkVisaType(){
    
    let visatype = document.querySelector(
        'input[name="AorGvisa"]:checked'
      ).value;

    if(visatype === "yes"){
        applicantInfo.haveAorGvisa = "yes";
        errorResAorG.classList.remove('hidden');
        ESTA.classList.add('hidden');
        successRes.classList.add('hidden');
        errorResESTA.classList.add('hidden');
        AorGvisaHeading.style.backgroundColor = "#1e90ff"
    }else if (visatype === "no") {
        applicantInfo.haveAorGvisa = "no"
        errorResAorG.classList.add('hidden');
        ESTA.classList.remove('hidden');
        AorGvisaHeading.style.backgroundColor = "#1e90ff"
        
    }
}
// =====visa program====
function checkVisaProgram(){
    let visaProgram = document.querySelector(
        'input[name="WaiverProgram"]:checked'
      ).value;
    if(visaProgram === "yes"){
        applicantInfo.visaProgram = "yes"
        errorResESTA.classList.remove('hidden');
        successRes.classList.add('hidden');
        estaHeading.style.backgroundColor = "#1e90ff";
    }else if (visaProgram === "no") {
        applicantInfo.visaProgram = "no"
        errorResESTA.classList.add('hidden');
        successRes.classList.remove('hidden');
        estaHeading.style.backgroundColor = "#1e90ff";
    }
}


// ====handle next button======
function handleNextBtn(){
    let FormHeading = document.getElementById("FormHeading");
    let isNext = "";
    if(applicantInfo.haveAorGvisa ==="no" && applicantInfo.visaProgram === "no"){
        isNext="true"
    }
    if(isNext){
        eligibility.classList.add("hidden");
        successRes.classList.add("hidden");
        addressSegment.classList.remove("hidden");
        FormHeading.innerText = "Let's get started with information about your addresses";
        prevBTN.classList.remove("hidden");
        pageNum.innerText="2"
        
    }else{
        FormHeading.innerText = "First, let's determine your eligibility to prepare Form AR-11, Alien's Change of Address";
         prevBTN.classList.add("hidden")
         pageNum.innerText="1"
    }

    if(applicantInfo.haveAorGvisa ===""){
        AorGvisaHeading.style.backgroundColor = "red"
    }
    if(applicantInfo.visaProgram ===""){
        estaHeading.style.backgroundColor = "red"
    }
    
    console.log(applicantInfo);
    let obj={
        Street_Number_name:"",
        apartment:"",
        cityORtowns:"",
    }
    
}

// ====handle prev button====
function handlePrevBtn(){
    eligibility.classList.remove("hidden");
    addressSegment.classList.add("hidden");
    if(eligibility.style.display !=="none"){
        prevBTN.classList.add("hidden");
    }
    
}