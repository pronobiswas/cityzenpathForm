// ======form======

const ESTA = document.getElementById('ESTA');
const successRes = document.getElementById('successRes');
const errorRes = document.getElementById('errorRes');

// =====Applicant information=====
let applicantInfo = {
    haveAorGvisa : "",
    visaProgram : "",
}



// =====functions are append here======
function checkVisaType(){
    
    let visatype = document.querySelector(
        'input[name="AorGvisa"]:checked'
      ).value;

    if(visatype === "yes"){
        applicantInfo.haveAorGvisa = "yes"
        errorRes.classList.remove('hidden');
        ESTA.classList.add('hidden');
    }else if (visatype === "no") {
        applicantInfo.haveAorGvisa = "no"
        errorRes.classList.add('hidden');
        ESTA.classList.remove('hidden');
        
    }
}
// =====visa program====
function checkVisaProgram(){
    
    let visaProgram = document.querySelector(
        'input[name="WaiverProgram"]:checked'
      ).value;

    if(visaProgram === "yes"){
        applicantInfo.visaProgram = "yes"
        errorRes.classList.remove('hidden');
        successRes.classList.add('hidden');
    }else if (visaProgram === "no") {
        applicantInfo.visaProgram = "no"
        errorRes.classList.add('hidden');
        successRes.classList.remove('hidden');
        
    }
}