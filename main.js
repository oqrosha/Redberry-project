function GoingToExperience(){
    document.getElementById("Next");
    window.location.href = "./Experience.html";
}

function GoingToEducation(){
    document.getElementById("Next2");
    window.location.href = "./Education.html";
}

function GoingToResume(){
    document.getElementById("Next3");
    window.location.href = "./Resume.html";
}

function GoingToStart(){
    document.getElementsByClassName("fa-chevron-left");
    window.location.href = "./index.html";
}

function GoingBackToExperience(){
    document.getElementById("back2");
    window.location.href = "./Experience.html";
}

function GoingBackToPrivateInfo(){
    document.getElementById("back");
    window.location.href = "./privateInfo.html";
}

function validation1() {
    let Input1Value = document.getElementById("Input1").value;
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("Input1").value);
    
    if (Input1Value.length < 3 || bool == false) {
        document.getElementById("Input1").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning1").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified1").style.display = "none";
    } else{
        document.getElementById("Input1").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified1").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning1").style.display = "none";
    }
}

function validation2() {
    let Input2Value = document.getElementById("Input2").value;
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("Input2").value);
    
    if (Input2Value.length < 3 || bool == false) {
        document.getElementById("Input2").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning2").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified2").style.display = "none";
    } else{
        document.getElementById("Input2").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified2").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning2").style.display = "none";
    }
}

function validation3() {
    let Input4Value = document.getElementById("Input4").value;
    const Mail = /@redberry.ge$/;
    const MailValidation = Mail.test(document.getElementById("Input4").value);
    
    if (MailValidation) {
        document.getElementById("Input4").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified4").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning4").style.display = "none";
    } else{
        document.getElementById("Input4").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning4").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified4").style.display = "none";
    }
}

function validation4() {
    let Input5Value = document.getElementById("Input5").value;
    const MobileNumber = /(995)(?:\W*\d){0,8}\d$/;
    const MobileNumberValidation = MobileNumber.test(Input5Value);
    
    if (MobileNumberValidation) {
        document.getElementById("Input5").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified5").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning5").style.display = "none";
    } else{
        document.getElementById("Input5").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning5").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified5").style.display = "none";
    }
}

function validation5() {
    let Input6Value = document.getElementById("Input6").value;
    
    if (Input6Value.length < 3) {
        document.getElementById("Input6").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning6").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified6").style.display = "none";
    } else{
        document.getElementById("Input6").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified6").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning6").style.display = "none";
    }
}

function validation6() {
    let Input7Value = document.getElementById("Input7").value;
    
    if (Input7Value.length < 3) {
        document.getElementById("Input7").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning7").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified7").style.display = "none";
    } else{
        document.getElementById("Input7").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified7").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning7").style.display = "none";
    }
}

function validation7() {
    let Input8Value = document.getElementById("inputCalendar1").value;
    
    if (Input8Value.length == 0) {
        document.getElementById("inputCalendar1").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning8").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
    } else{
        document.getElementById("inputCalendar1").style.border = "1px solid #98E37E";
        document.getElementById("Warning8").style.display = "none";
    }
}

function validation8() {
    let Input9Value = document.getElementById("inputCalendar2").value;
    
    if (Input9Value.length == 0) {
        document.getElementById("inputCalendar2").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning9").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
    } else{
        document.getElementById("inputCalendar2").style.border = "1px solid #98E37E";
        document.getElementById("Warning9").style.display = "none";
    }
}

function validation9() {
    let Input10Value = document.getElementById("Input10").value;
    
    if (Input10Value.length == 0) {
        document.getElementById("Input10").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning10").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified10").style.display = "none";
    } else{
        document.getElementById("Input10").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified10").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning10").style.display = "none";
    }
}

function validation10() {
    let Input11Value = document.getElementById("Input11").value;
    
    if (Input11Value.length < 3) {
        document.getElementById("Input11").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning11").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified11").style.display = "none";
    } else{
        document.getElementById("Input11").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified11").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning11").style.display = "none";
    }
}

function validation11() {
    let Input12Value = document.getElementById("Input12").value;
    
    if (Input12Value == 0) {
        document.getElementById("Input12").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning12").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
    } else{
        document.getElementById("Input12").style.border = "1px solid #98E37E";
        document.getElementById("Warning12").style.display = "none";
    }
}

function validation12() {
    let Input13Value = document.getElementById("inputCalendar3").value;
    
    if (Input13Value.length == 0) {
        document.getElementById("inputCalendar3").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning13").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
    } else{
        document.getElementById("inputCalendar3").style.border = "1px solid #98E37E";
        document.getElementById("Warning13").style.display = "none";
    }
}

function validation13() {
    let Input14Value = document.getElementById("Input14").value;
    
    if (Input14Value.length == 0) {
        document.getElementById("Input14").style.border = "1px solid #F02424";
        let Input = document.getElementById("Warning14").style.display = "block";
        Input.innerHTML += `
            <i id="Warning" class="fa-solid fa-triangle-exclamation"></i>
        `;
        document.getElementById("Verified14").style.display = "none";
    } else{
        document.getElementById("Input14").style.border = "1px solid #98E37E";
        let Input = document.getElementById("Verified14").style.display = "block";
        Input.innerHTML += `
            <i id="Verified" class="fa-solid fa-circle-check"></i>
        `;
        document.getElementById("Warning14").style.display = "none";
    }
}