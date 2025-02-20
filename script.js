// ======form======
// ======state variable=====
let isShowError = "false"
let k= 0;
let flag =false;
// ====select element by id=====
const eligibility = document.getElementById('eligibility');
const ESTA = document.getElementById('ESTA');
const pageOptions = document.getElementById('pageOptions');
const successRes = document.getElementById('successRes');
const errorResAorG = document.getElementById('errorResAorG');
const errorResESTA = document.getElementById('errorResESTA');
const addressSegment = document.getElementById('addressSegment');
const personalInfoSegment = document.getElementById('personalInfoSegment');
const formStaper = document.getElementById('formStaper');
const complitionBox = document.getElementById('complitionBox');
const mailingAddress = document.getElementById('mailingAddress');
const nextBTN = document.getElementById('nextBTN');
const nextBTN2 = document.getElementById('nextBTN2');
const prevBTN = document.getElementById('prevBTN');
const pageNum = document.getElementById('pageNum');
const AorGvisaHeading = document.getElementById('AorGvisaHeading');
const Formparagraph = document.getElementById('Formparagraph');
const estaHeading = document.getElementById('estaHeading');
// ====querySelector class===
const formPagenetion = document.querySelector('.formPagenetion')
// ====selected required row======
let streetNumberNameRow = document.getElementById("streetNumberName");
let cityORtownRow = document.getElementById("cityORtownRow");
let apartmentRow = document.getElementById("apartmentRow");
let TerritoryRow = document.getElementById("TerritoryRow");
let ZipCodeRow = document.getElementById("ZipCodeRow");
// ===============
let StreetNumbernamePresent = document.getElementById("StreetNumbernamePresent");
let apartmentRowPresent = document.getElementById("apartmentRowPresent");
let cityORtownRowPresent = document.getElementById("cityORtownRowPresent");
let TerritoryRowPresent = document.getElementById("TerritoryRowPresent");
let ZipCodeRowPresent = document.getElementById("ZipCodeRowPresent");

// =====eventlistener========
pageOptions.addEventListener('click',()=>{

    if (flag === false) {
        formPagenetion.style.display = "block";
        flag = true;
    } else {
        formPagenetion.style.display = "none";
        flag = false;
    }
})

// =====Applicant information=====
let applicantInfo = {
    haveAorGvisa : "",
    visaProgram : "",
    // previous
    streetNumber : "",
    cityorTown :"",
    isApartmentSuiteorFlor:"",
    state:"",
    zipCode:"",
    // present
    StreetNumberPresent: "",
    CityorTownPresent :"",
    isApartmentSuiteorFlorPresent:"",
    statePresent:"",
    zipCodePresent:"",
    // personal
    firstName:"",
    middleName:"",
    lastName:"",
}

// =====applicant form error object=====
let applicantFormError ={
    haveAorGvisaError : "",
    visaProgramError : "",
    // previous
    streetNumberError : "",
    cityorTownError :"",
    isApartmentSuiteorFlorError:"",
    stateError:"",
    zipCodeError:"",
    // present
    StreetNumberPresentError: "",
    CityorTownPresentError :"",
    isApartmentSuiteorFlorPresentError:"",
    statePresentError:"",
    zipCodePresentError:"",
};



// =====oniput function======
function handleInput(event){
    applicantInfo={
        ...applicantInfo,
        [event.target.name] : event.target.value.trim()
    }
    // ====remove warning====
    if(event.target.name ==="streetNumber"){
        streetNumberNameRow.classList.remove("ErrorRow");

    }
    if(event.target.name ==="cityorTown"){
        cityORtownRow.classList.remove("ErrorRow");
    }
    if(event.target.name ==="isApartmentSuiteorFlor"){
        apartmentRow.classList.remove("ErrorRow");
    }
    if(event.target.name ==="state"){
        TerritoryRow.classList.remove("ErrorRow");
    }
    if(event.target.name ==="zipCode"){
        ZipCodeRow.classList.remove("ErrorRow");
    }
    

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
    let isShowError ="false"
    let isNext = "";
    // --DisplayError---
    if(addressSegment.style.display !=="none"){
        isShowError = "true"
    }

    if(applicantInfo.haveAorGvisa ==="no" && applicantInfo.visaProgram === "no"){
        isNext="true"
    }
    
    if(isNext){
        eligibility.classList.add("hidden");
        successRes.classList.add("hidden");
        addressSegment.classList.remove("hidden");
        FormHeading.innerText = "Let's get started with information about your addresses";
        prevBTN.classList.remove("hidden");
        pageNum.innerText="2";
        nextBTN.classList.add("hidden");
        successRes.classList.add("hidden");
        nextBTN2.classList.remove("hidden");
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
    
    
    
    

}
// ====mailing function=====
function displayMailingForm (){
    let mailingAddressIsSame = document.querySelector(
        'input[name="isSameMailaddress"]:checked'
    ).value;
    if(mailingAddressIsSame ==="no"){
        mailingAddress.classList.remove("hidden");
    }else{
        mailingAddress.classList.add("hidden")
    }
    
    
}
function handleNextBtn2(){
    // ========validate form======
    // addressFormValidation();
    // showError ();
    personalInfoSegment.classList.remove("hidden");
    addressSegment.classList.add("hidden");
    eligibility.classList.add("hidden");
    formStaper.classList.add("hidden");
    complitionBox.classList.remove("hidden")
    pageNum.innerText="3";
    
    
    
}

// ====handle prev button====
function handlePrevBtn(){
    eligibility.classList.remove("hidden");
    addressSegment.classList.add("hidden");
    if(eligibility.style.display !=="none"){
        prevBTN.classList.add("hidden");
    }
    nextBTN.classList.remove("hidden");
    nextBTN2.classList.add("hidden");
}

// =======form validation======
function addressFormValidation(){
    // --StreetNumber--
    if(!applicantInfo.streetNumber){
        applicantFormError.streetNumberError ="must be fild";
        streetNumberNameRow.classList.add("ErrorRow")
    }else{
        applicantFormError.streetNumberError=""
    }
    // --isApartment Suite or Flor Present--
    if(!applicantInfo.isApartmentSuiteorFlor){
        applicantFormError.isApartmentSuiteorFlorError ="must be fild"
    }else{
        applicantFormError.isApartmentSuiteorFlorError=""
    }
    // --City or Town--
    if(!applicantInfo.cityorTown){
        applicantFormError.cityorTownError ="must be fild"
    }else{
        applicantFormError.cityorTownError=""
    }
    // --state or triotori--
    if(!applicantInfo.state){
        applicantFormError.stateError ="must be fild"
    }else{
        applicantFormError.stateError=""
    }
     // --CZip Code--
     if(!applicantInfo.zipCode){
        applicantFormError.zipCodeError ="must be fild"
    }else{
        applicantFormError.zipCodeError=""
    }
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // --Present-StreetNumber--
    if(!applicantInfo.StreetNumberPresent){
        applicantFormError.StreetNumberPresentError ="must be fild"
    }else{
        applicantFormError.StreetNumberPresentError=""
    }
    // --Present-CityorTownPresentError--
    if(!applicantInfo.CityorTownPresent){
        applicantFormError.CityorTownPresentError ="must be fild"
    }else{
        applicantFormError.CityorTownPresentError=""
    }
     // --Present-isApartmentSuiteorFlorPresentError--
     if(!applicantInfo.isApartmentSuiteorFlorPresent){
        applicantFormError.isApartmentSuiteorFlorPresentError ="must be fild"
    }else{
        applicantFormError.isApartmentSuiteorFlorPresentError=""
    }
    // --Present-statePresentError--
    if(!applicantInfo.statePresent){
        applicantFormError.statePresentError ="must be fild"
    }else{
        applicantFormError.statePresentError=""
    }
    // --Present-statePresentError--
    if(!applicantInfo.zipCodePresent){
        applicantFormError.zipCodePresentError ="must be fild"
    }else{
        applicantFormError.zipCodePresentError=""
    }
}
// ======show error=====
function showError (){
    // =====StreetNumberError====
    if(applicantFormError.streetNumberError){
        streetNumberNameRow.classList.add("ErrorRow")
    }else{
        streetNumberNameRow.classList.remove("ErrorRow")
    }
    // =====isApartmentSuiteorFlorError====
    if(applicantFormError.isApartmentSuiteorFlorError){
        apartmentRow.classList.add("ErrorRow")
    }else{
        apartmentRow.classList.remove("ErrorRow")
    }
    // =====CityorTownError====
    if(applicantFormError.cityorTownError){
        cityORtownRow.classList.add("ErrorRow")
    }else{
        cityORtownRow.classList.remove("ErrorRow")
    }
     // =====state or tiriotory====
     if(applicantFormError.stateError){
        TerritoryRow.classList.add("ErrorRow")
    }else{
        TerritoryRow.classList.remove("ErrorRow")
    }
    // =====state or zipCodeError====
    if(applicantFormError.zipCodeError){
        ZipCodeRow.classList.add("ErrorRow")
    }else{
        ZipCodeRow.classList.remove("ErrorRow")
    }
    // ====$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$===
     // =====Street Number Present Error====
     if(applicantFormError.StreetNumberPresentError){
        StreetNumbernamePresent.classList.add("ErrorRow")
    }else{
        StreetNumbernamePresent.classList.remove("ErrorRow")
    }
     // =====cityORtownRowPresent====
     if(applicantFormError.CityorTownPresentError){
        cityORtownRowPresent.classList.add("ErrorRow")
    }else{
        cityORtownRowPresent.classList.remove("ErrorRow")
    }
    // =====isApartmentSuiteorFlorPresentError====
    if(applicantFormError.isApartmentSuiteorFlorPresentError){
        apartmentRowPresent.classList.add("ErrorRow")
    }else{
        apartmentRowPresent.classList.remove("ErrorRow")
    }
    // =====statePresentError====
    if(applicantFormError.statePresentError){
        TerritoryRowPresent.classList.add("ErrorRow")
    }else{
        TerritoryRowPresent.classList.remove("ErrorRow")
    }
    // =====statePresentError====
    if(applicantFormError.zipCodePresentError){
        ZipCodeRowPresent.classList.add("ErrorRow")
    }else{
        ZipCodeRowPresent.classList.remove("ErrorRow")
    }
}


// =======navigation=======
function pageOne(){
    console.log("success page one");
    addressSegment.classList.add("hidden");
    personalInfoSegment.classList.add("hidden");
    complitionBox.classList.add("hidden");
    personalInfoSegment.classList.add("hidden");
    prevBTN.classList.add("hidden");
    eligibility.classList.remove("hidden");
    formStaper.classList.remove("hidden");
    pageNum.innerText="1"
    

}
function pageTwo(){
    console.log("success page two");
    eligibility.classList.add("hidden");
    personalInfoSegment.classList.add("hidden");
    complitionBox.classList.add("hidden");
    formStaper.classList.remove("hidden");
    addressSegment.classList.remove("hidden");
    pageNum.innerText="2";
    FormHeading.innerText="You're almost done. We just need some information about you."
    Formparagraph.innerText="Complete the information below to prepare a free Form AR-11. Use the AR-11 to notify USCIS of an address change."
}
function pageThree(){
    console.log("success page three");
    // eligibility.classList.add("hidden");
    // personalInfoSegment.classList.add("hidden");
    // complitionBox.classList.add("hidden");
    // formStaper.classList.remove("hidden");
    // addressSegment.classList.remove("hidden");
    pageNum.innerText="3";
}