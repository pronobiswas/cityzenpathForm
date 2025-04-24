let ReasonforLeavingTable = document.querySelector('#ReasonforLeavingTable')

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
    isContinuousResidence:"no",
    address1:"",
    from_date1:"",
    to_date1:"",
    address2:"",
    from_date2:"",
    to_date2:"",
    current_education_status:"",
    where_education_received:"",
    left_US:"no",
    why_left_us:"",
    current_annual_income:"",
    current_emloyer_name:"",
    current_emloyer_address:"",
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
let phase1input = document.querySelectorAll("#phase1 .pro_input_Row input");
let isValidatePhase1 = 'false';
// ----collect phase1 input value----
phase1input.forEach((input) => {
    input.addEventListener("click", () => {
        input.classList.remove('warnInput');
    });
    input.addEventListener("input", (e) => {
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
    console.log(isValidatePhase1);
    console.log(applicantInfo.full_name, applicantInfo.other_name,applicantInfo.mailing_address , applicantInfo.city ,applicantInfo.zip_code ,applicantInfo.phone_number, applicantInfo.email_address, applicantInfo.Height, applicantInfo.Weight, applicantInfo.date_of_birth, applicantInfo.place_of_birth, applicantInfo.Country_of_Citizenship,applicantInfo.Marital_Status );
    
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
document.getElementById('have_you_ever_left_the_US').addEventListener('input',(e)=>{
    console.log(document.getElementById('have_you_ever_left_the_US').value);
    
    applicantInfo={
        ...applicantInfo,
        [e.target.name]: e.target.value.trim(),
    }
    if(document.getElementById('have_you_ever_left_the_US').value == "yes"){
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
const left_US = document.querySelectorAll('#phase3 input[name="left_US"]');
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
// ---collect data from left_US---
left_US.forEach((radio)=>{
    radio.addEventListener('click',(e)=>{
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
        if(e.target.value == 'yes'){
            document.getElementById('explainLeftReason').classList.remove('hidden');
        }else{document.getElementById('explainLeftReason').classList.add('hidden')};
    });
});
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
// ########### PHASE4 FOUR START HERE ############
const phase4Input = document.querySelectorAll('#phase4 input');
let isValidatePhase4 = 'false';
// --collect data from phase four input---
phase4Input.forEach((input)=>{
    input.addEventListener("click", (e) => {
        input.classList.remove('warnInput');
    });
    input.addEventListener("input", (e) => {
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),
        }
    });
});
// --collect data from phase four textarea---
document.querySelector('#phase4 textarea').addEventListener('input',(e)=>{
    applicantInfo={
        ...applicantInfo,
        [e.target.name]: e.target.value.trim(),
    }
})
// ----validate phase4 four-------
function validatePhase4 (){
    // ---check empty fild and mark it---
    phase4Input.forEach((input)=>{
        if(input.value==""){
            input.classList.add('warnInput')
        }else{
            input.classList.remove('warnInput');
        }
    })
    if(document.querySelector('#phase4 textarea').value.trim()==""){
        document.querySelector('#phase4 textarea').classList.add('warnInput')
    }else{document.querySelector('#phase4 textarea').classList.remove('warnInput')};
    // ----check isEligable for next phase-----
    if(!applicantInfo.current_annual_income || !applicantInfo.current_emloyer_name || !applicantInfo.current_emloyer_address || !applicantInfo.why_work_auth){
        isValidatePhase4 = "false";
    }else{isValidatePhase4="true"};
};
function handlePhaseFourBtn(){
    validatePhase4();
    if(isValidatePhase4 == "true"){
        document.getElementById('phase4').classList.add('hidden');
        document.getElementById('phase5').classList.remove('hidden');
    }
}
// ###########phase four end here############
// %%%%%%%%%%%%%%phase five start here%%%%%%%%%%%%%%
const phase5 = document.getElementById('phase5');
const phase5Input = phase5.querySelectorAll('textarea , input');
let isValidatePhase5 = "false";
// ---phase5 all input event---
phase5Input.forEach((input)=>{
    input.addEventListener('click',(e)=>{
        console.log(e.target);
        
        input.classList.remove('warnInput');
    });
});
// ---collect phase5 input data---
phase5Input.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim()
        }
    });
});
// ----validate phase5 input----
function validatePhase5(){
    phase5Input.forEach((input)=>{
            if(input.value==""){
                input.classList.add('warnInput')
            }else{
                input.classList.remove('warnInput');
            }
    });
     // ----check isEligable for next phase-----
     if (
        !applicantInfo.spouse_name ||
        !applicantInfo.cityzenship_of_spouse ||
        !applicantInfo.current_address_of_spouse ||
        !applicantInfo.spouseImmigration ||
        !applicantInfo.spouse_aline_registration_number ||
        !applicantInfo.spouse_birth_date ||
        !applicantInfo.spouse_country_of_birth ||
        !applicantInfo.spouse_earn_per_week ||
        !applicantInfo.spouse_social_security_number ||
        !applicantInfo.date_of_marriage ||
        !applicantInfo.place_of_marriage ||
        !applicantInfo.spouse_maiden_name ||

        !applicantInfo.place_spouse_first_entered_us ||
        !applicantInfo.date_spouse_first_entered_us || 
        !applicantInfo.date_spouse_become_us_citizen ||

        !applicantInfo.full_name_of_spouse_employer ||
        !applicantInfo.full_address_of_spouse_employer ||
        !applicantInfo.earning_per_week_of_spouse ||
        !applicantInfo.type_of_work_preformed_by_spouse ||
        !applicantInfo.start_of_employment ||
        !applicantInfo.end_of_employment
      ) {
        isValidatePhase5 = "false";
        console.log("validate fail");
        
      } else {
        isValidatePhase5 = "true";
        console.log("validate");
        
      }
      
    
}

function handlePhaseFiveBtn(){
    validatePhase5();
    console.log(applicantInfo);
    console.log(isValidatePhase5);
    if(isValidatePhase5 == "true"){
        document.getElementById('phase5').classList.add('hidden');
        document.getElementById('phase6').classList.remove('hidden');
    }
}
// %%%%%%%%%%%%%%phase five end here%%%%%%%%%%%%%%
// $$$$$$$$$ PHASE 6 START HERE $$$$$$$$$$$$
const phase6 = document.getElementById('phase6');
const phase6btn = document.getElementById('phase6btn');

function handleAddmore1(){
    document.querySelector('#phase6 .part2').classList.toggle('hidden');
}
phase6btn.addEventListener('click',()=>{
    phase6.classList.add('hidden');
    document.getElementById('phase7').classList.remove('hidden');
})
// $$$$$$$$$ PHASE 6 end HERE $$$$$$$$$$$$
// %%%%%%%%%%%% PHASE7 START HERE %%%%%%%%%%%%%
document.getElementById('pahase7btn').addEventListener('click',()=>{
    document.getElementById('phase7').classList.add('hidden');
    document.getElementById('phase8').classList.remove('hidden');
});
// %%%%%%%%%%%% PHASE7 END HERE %%%%%%%%%%%%%
// %%%%%%%%%%%% PHASE8 START HERE %%%%%%%%%%%%%
document.getElementById('pahase8btn').addEventListener('click',()=>{
    document.getElementById('phase8').classList.add('hidden');
    document.getElementById('phase9').classList.remove('hidden');
});
// %%%%%%%%%%%% PHASE8 END HERE %%%%%%%%%%%%%
// $$$$$$$$$$$ PHASE9 START HERE $$$$$$$$$$$$$$ 
document.getElementById('pahase9btn').addEventListener('click',()=>{
    document.getElementById('phase9').classList.add('hidden');
    document.getElementById('phase10').classList.remove('hidden');
});
// $$$$$$$$$$$ PHASE9 end HERE $$$$$$$$$$$$$$ 


// ReasonforLeavingTable

// @@@@@@@@@@@@@@ handle previous button @@@@@@@@@@@@@ 
function handlePreviousBtn(previousSection,currentSection){
    console.log("previousSection:" ,previousSection);
    console.log("currentSection:" ,currentSection);
    previousSection.classList.remove("hidden");
    currentSection.classList.add("hidden");
    
}