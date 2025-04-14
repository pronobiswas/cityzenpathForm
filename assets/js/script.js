let ReasonforLeavingTable = document.querySelector('.ReasonforLeavingTable')
let phase1input = document.querySelectorAll("#phase1 .inputRow input");
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
    have_you_ever_left_the_US:"",
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
let have_you_ever_left_the_US = document.getElementById("have_you_ever_left_the_US");
have_you_ever_left_the_US.onclick = () => {
    if(have_you_ever_left_the_US.value === "yes"){
        ReasonforLeavingTable.classList.remove("hidden")
    }else{
        ReasonforLeavingTable.classList.add("hidden")
    }
  };

// &&&&&&&&&&&collect data&&&&&&&&&&&&&
// %%%%%%%phase1%%%%%%%%
const phase1 = document.getElementById("phase1");
phase1input.forEach((input) => {
    input.addEventListener("click", () => {
        console.log(applicantInfo);
        
    });
    input.addEventListener("input", (e) => {
        console.log(e.target);
        applicantInfo={
            ...applicantInfo,
            [e.target.name]: e.target.value.trim(),

        }
    });
})
allSelectOption[0].addEventListener('input',(e)=>{
    applicantInfo={
        ...applicantInfo,
        [e.target.name]: e.target.value.trim(),
    }
})

function validatePhaseOne (){

    phase1input.forEach((input)=>{
        // all are required
        if(input.value==""){
            for(x in applicationInfoWarnning){
                applicationInfoWarnning[x] = "required"
            }
        }
    })
}

function checkChanges(){
    validatePhaseOne();
    console.log(applicantInfo);
    console.log(applicationInfoWarnning);
    
}


