let ReasonforLeavingTable = document.querySelector('.ReasonforLeavingTable')

let allSelectOption = document.querySelectorAll("select")




let applicantInfo = {
    full_name:"",
    other_name:"",
    mailing_address:"",
    city:"",
    state:"",
    zip_code:"",
    phone_number:"",
    email_address:"",
    Height:"",
    Weight:"",
    date_of_birth:"",
    place_of_birth:"",
    Country_of_Citizenship:"",
    Marital_Status:"",
    date_of_entry:"",
    how_to_enter:"",
    place_of_entry:"",
    have_you_ever_left_the_US:"no",
    reason1:"",
    reason2:"",
    isContinuousResidence:"",
    address1:"",
    from_date1:"",
    to_date1:"",
    address2:"",
    from_date2:"",
    to_date2:"",
    current_education_status:"",
    where_education_received:"",
    left_US:"",
    why_left_us:"",
    current_annual_income:"",
    current_annual_expenses:"",
    current_value_of_assets:"",
    why_work_auth:"",
}
let applicationInfoWarnning = {
    full_name:"",
    other_name:"",
    mailing_address:"",
    city:"",
    state:"",
    zip_code:"",
    phone_number:"",
    email_address:"",
    Height:"",
    Weight:"",
    date_of_birth:"",
    place_of_birth:"",
    Country_of_Citizenship:"",
    Marital_Status:"",
};
  // %%%%%%%phase1%%%%%%%%
  // &&&&&&&&&&&collect data&&&&&&&&&&&&&
const phase1 = document.getElementById("phase1");
let phase1input = document.querySelectorAll("#phase1 .inputRow input");
let isValidatePhase1 = 'false';
// ----collect phase1 input value----
phase1input.forEach((input) => {
    input.addEventListener("click", () => {
        input.classList.remove('warnInput');
    });
    input.addEventListener("input", (e) => {
        console.log(e.target);
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),

        }
    });
})
// -----make Warning message-----
allSelectOption[0].addEventListener('input',(e)=>{
    applicantInfo={
        ...applicantInfo,
        [e.target.name]: e.target.value.trim(),
    }
})
// ----validate phase 1-----
function validatePhaseOne (){
    phase1input.forEach((input)=>{
        // all are required
        if(input.value==""){
            for(x in applicationInfoWarnning){
                applicationInfoWarnning[x] = "required"
            }
        };
        if(input.value==""){
            input.classList.add('warnInput')
        }else{
            input.classList.remove('warnInput');
        }
    })
    // ---check all field are fild--
    if(!applicantInfo.full_name || !applicantInfo.other_name || !applicantInfo.mailing_address || !applicantInfo.city || !applicantInfo.state || !applicantInfo.zip_code || !applicantInfo.phone_number || !applicantInfo.email_address || !applicantInfo.Height || !applicantInfo.Weight ||  !applicantInfo.date_of_birth || !applicantInfo.place_of_birth || !applicantInfo.Country_of_Citizenship || !applicantInfo.Marital_Status){
        isValidatePhase1 = "false";
    }else{isValidatePhase1="true"};
    // ----go to next step-----
    if(isValidatePhase1 == "true"){
        phase1.classList.add('hidden');
        document.getElementById('phase2').classList.remove('hidden')
    }
}
function checkChanges(){
    validatePhaseOne();
}
// %%%%%%%%%%%END OF PHASE ONE%%%%%%%%%%%%%%
// @@@@@@@@@@ START OF PHASE 2 TWO @@@@@@@@@@@@@@@@@
const phase2 = document.getElementById("phase2");
const phase2Inputs = document.querySelectorAll('#phase2 input');
let isValidatePhase2 = "false";
// ---colllect phase two data---
phase2Inputs.forEach((input) => {
    input.addEventListener("click", () => {
        input.classList.remove('warnInput');
    });
    input.addEventListener("input", (e) => {
        console.log(e.target);
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
    });
})
// -----collect phase two select data-----
allSelectOption[1].addEventListener('input',(e)=>{
    applicantInfo={
        ...applicantInfo,
        [e.target.name]: e.target.value.trim(),
    }
    if(applicantInfo.have_you_ever_left_the_US == "yes"){
        ReasonforLeavingTable.classList.remove('hidden');

    }else{
        ReasonforLeavingTable.classList.add('hidden');
    }
})

// -----validate phase two-----
function validatePhaseTwo (){
    phase2Inputs.forEach((input)=>{
        // all are required
        if(input.value==""){
            for(x in applicationInfoWarnning){
                applicationInfoWarnning[x] = "required"
            }
        };
        if(input.value==""){
            input.classList.add('warnInput')
        }else{
            input.classList.remove('warnInput');
        }
    })
    // ---check all field are fild--
    if(!applicantInfo.date_of_entry || !applicantInfo.how_to_enter || !applicantInfo.place_of_entry || !applicantInfo.have_you_ever_left_the_US){
        isValidatePhase2 = "false";
    }else{isValidatePhase2="true"};
    
    // ----go to next step-----
    if(isValidatePhase2 == "true"){
        phase2.classList.add('hidden');
        document.getElementById('phase3').classList.remove('hidden')
    }
}
function handlePhase2btn(){
    validatePhaseTwo();
    console.log(applicantInfo);
    console.log(phase2Inputs);
    
    
}
// @@@@@@@@@@ END OF PHASE 2 TWO @@@@@@@@@@@@@@@@@
// %%%%%%%%%% phase three 3 start here %%%%%%%%%%%
const isContinuousResidence = document.querySelectorAll('#phase3 input[name="isContinuousResidence"]');
const phase3Input = document.querySelectorAll('#phase3 input');
const phase3select = document.querySelectorAll('#phase3 select');
let isValidatePhase3 = 'false';
// ---collect data form phase3 select----
isContinuousResidence.forEach((radio)=>{
    radio.addEventListener('click',(e)=>{
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
        if(applicantInfo.isContinuousResidence == 'yes'){
            document.getElementById('residences').classList.remove('hidden')
        }else{document.getElementById('residences').classList.add('hidden')}
        
    })
})
// ---collect data form phase3 input----
phase3Input.forEach((input)=>{
    input.addEventListener("click", () => {
        input.classList.remove('warnInput');
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
    });
    input.addEventListener("input", (e) => {
        console.log(e.target);
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
    });
});
// ----collect data from select----
phase3select.forEach((select)=>{
    select.addEventListener('click',(e)=>{
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
    });
})
// ---validate phase3 three----
function validatePhase3 (){
    phase3Input.forEach((input)=>{
        if(input.value==""){
            input.classList.add('warnInput')
        }else{
            input.classList.remove('warnInput');
        }
    })
    phase3select.forEach((select)=>{
        if(select.value.trim() === ""){
            select.classList.add('warnInput')
        };
        console.log(applicantInfo);
    })
};
function handlePhase3btn(){
    // isContinuousResidence[0].style.setProperty("accent-color", "red", "important");
    console.log("phase3");
    validatePhase3();
    document.getElementById('phase3').classList.add('hidden');
    document.getElementById('phase4').classList.remove('hidden');
    
}
// %%%%%%%%%% phase three 3 end here %%%%%%%%%%%
// ###########phase four start here############
function handlePhaseFourBtn(){
    document.getElementById('phase4').classList.add('hidden');
    document.getElementById('phase5').classList.remove('hidden');
}
// ###########phase four end here############
// %%%%%%%%%%%%%%phase five start here%%%%%%%%%%%%%%
function handlePhaseFiveBtn(){
    document.getElementById('phase5').classList.add('hidden');
    document.getElementById('phase6').classList.remove('hidden');
}
// %%%%%%%%%%%%%%phase five end here%%%%%%%%%%%%%%


// ReasonforLeavingTable