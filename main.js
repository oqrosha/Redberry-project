function GoingToExperience(){
    if(GoingToExperienceValidation() === true && localStorage.getItem("photo1") != null){
        document.getElementById("Next");
        window.location.href = "./Experience.html";
    } else if(localStorage.getItem("photo1") == null){
        return alert("You should upload image");
    } else {
        return alert("You should fill all the important inputs");
    }
}

function GoingToExperienceValidation(){
    if(validation1() === true && validation2() === true && validation3() === true && validation4() === true) {  
        return true;
    } else {
        validation1();
        validation2();
        validation3();
        validation4();
    }
}

function GoingToEducation(){
    if(GoingToEducationValidation() === true){
        document.getElementById("Next2");
        window.location.href = "./Education.html";
    } else {
        return alert("You should fill all the important inputs");
    }
}

function GoingToEducationValidation(){
    if(validation5() === true && validation6() === true && validation7() === true && validation8() === true && validation9() === true) {  
        return true;
    } else {
        validation5();
        validation6();
        validation7();
        validation8();
        validation9();
    }
}

function GoingToResume(){
    if(GoingToResumeValidation() === true){
        document.getElementById("Next3");
        window.location.href = "./Resume.html";
    }else{
        return alert("You should fill all the important inputs");
    }
}

function GoingToResumeValidation(){
    if(validation10() === true && validation11() === true && validation12() === true && validation13() === true) {  
        return true;
    } else {
        validation10();
        validation11();
        validation12();
        validation13();
    }
}

function GoingToStart(){
    document.getElementsByClassName("fa-chevron-left");
    localStorage.removeItem("name");
    localStorage.removeItem("Surname");
    localStorage.removeItem("Description");
    localStorage.removeItem("mail");
    localStorage.removeItem("Mobile number");
    document.getElementById("RightImage").style.display = "none";
    localStorage.removeItem("photo1");
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

function storage1(){
    let Input1StorageValue = document.getElementById("Input1").value;

    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("Input1").value);
    if(Input1StorageValue.length != 0 && bool){
        sessionStorage.setItem("name",document.getElementById("Input1").value);
        localStorage.setItem("name",document.getElementById("Input1").value);
        const name = document.getElementById("RightName");
        name.innerHTML = document.getElementById("Input1").value;
        name.style.display= "inline";
    }else{
        localStorage.setItem("name",document.getElementById("Input1").value);
        document.getElementById("RightName").style.display= "none";
    }
}

function storage2(){
    let Input2StorageValue = document.getElementById("Input2").value;

    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("Input2").value);
    if(bool && Input2StorageValue.length != 0){
        sessionStorage.setItem("Surname",document.getElementById("Input2").value);
        localStorage.setItem("Surname",document.getElementById("Input2").value);
        const Surname = document.getElementById("RightSurame");
        Surname.innerHTML = document.getElementById("Input2").value;
        Surname.style.display= "inline";
    } else{
        localStorage.setItem("Surname",document.getElementById("Input2").value);
        document.getElementById("RightSurame").style.display= "none";
    }
}

function storage3(){
    let Input3StorageValue = document.getElementById("Input3").value;
    if(Input3StorageValue.length != 0){
        sessionStorage.setItem("Description",document.getElementById("Input3").value);
        localStorage.setItem("Description",document.getElementById("Input3").value);
        document.getElementById("RightAboutMe").style.display= "block";
        const justText = document.getElementById("RightAboutMeInput");
        justText.innerHTML = document.getElementById("Input3").value;
        justText.style.display= "block";
    } else{
        localStorage.setItem("Description",document.getElementById("Input3").value);
        document.getElementById("RightAboutMeInput").style.display= "none";
        document.getElementById("RightAboutMe").style.display= "none";
    }
}

function storage4(){
    let Input4StorageValue = document.getElementById("Input4").value;
    if(Input4StorageValue.length != 0){
        sessionStorage.setItem("mail",document.getElementById("Input4").value);
        localStorage.setItem("mail",document.getElementById("Input4").value);
        document.getElementById("fa-at").style.display= "block";
        const mail = document.getElementById("RightMail");
        mail.innerHTML = document.getElementById("Input4").value;
        mail.style.display= "block";
    } else{
        localStorage.setItem("mail",document.getElementById("Input4").value);
        document.getElementById("RightMail").style.display= "none";
        document.getElementById("fa-at").style.display= "none";
    }
}

function storage5(){
    let Input5StorageValue = document.getElementById("Input5").value;
    if(Input5StorageValue.length != 0){
        sessionStorage.setItem("Mobile number",document.getElementById("Input5").value);
        localStorage.setItem("Mobile number",document.getElementById("Input5").value);
        document.getElementById("fa-phone").style.display= "block";
        const number = document.getElementById("RightPhoneNumber");
        number.innerHTML = document.getElementById("Input5").value;
        number.style.display= "block";
    } else{
        localStorage.setItem("Mobile number",document.getElementById("Input5").value);
        document.getElementById("RightPhoneNumber").style.display= "none";
        document.getElementById("fa-phone").style.display= "none";
    }
}

function storage6(){
    let Input6StorageValue = document.getElementById("Input6").value;
    if(Input6StorageValue.length != 0){
        sessionStorage.setItem("Position",document.getElementById("Input6").value);
        localStorage.setItem("Position",document.getElementById("Input6").value);
        document.getElementById("ExperiencePElement").style.display= "block";
        const position = document.getElementById("EmployeeInput");
        position.innerHTML = document.getElementById("Input6").value + ",";
        position.style.display= "inline-block";
    } else{
        localStorage.setItem("Position",document.getElementById("Input6").value);
        document.getElementById("EmployeeInput").style.display= "none";
        document.getElementById("ExperiencePElement").style.display= "none";
    }
}

function storage7(){
    let Input7StorageValue = document.getElementById("Input7").value;
    if(Input7StorageValue.length != 0){
        sessionStorage.setItem("Employer",document.getElementById("Input7").value);
        localStorage.setItem("Employer",document.getElementById("Input7").value);
        const employer = document.getElementById("EmployerInput");
        employer.innerHTML = document.getElementById("Input7").value;
        employer.style.display= "inline-block";
    } else{
        localStorage.setItem("Employer",document.getElementById("Input7").value);
        document.getElementById("EmployerInput").style.display= "none";
    }
}

function storage8(){
    let Input8StorageValue = document.getElementById("inputCalendar1").value;
    if(Input8StorageValue != ""){
        sessionStorage.setItem("Start time",document.getElementById("inputCalendar1").value);
        localStorage.setItem("Start time",document.getElementById("inputCalendar1").value);
        const employer = document.getElementById("StartTime");
        employer.innerHTML = document.getElementById("inputCalendar1").value + " - ";
        employer.style.display= "block";
    } else{
        localStorage.setItem("Start time",document.getElementById("inputCalendar1").value);
        document.getElementById("StartTime").style.display= "none";
    }
}

function storage9(){
    let Input9StorageValue = document.getElementById("inputCalendar2").value;
    if(Input9StorageValue != ""){
        sessionStorage.setItem("End time",document.getElementById("inputCalendar2").value);
        localStorage.setItem("End time",document.getElementById("inputCalendar2").value);
        const employer = document.getElementById("EndTime");
        employer.innerHTML = document.getElementById("inputCalendar2").value;
        employer.style.display= "block";
    } else{
        localStorage.setItem("End time",document.getElementById("inputCalendar2").value);
        document.getElementById("EndTime").style.display= "none";
    }
}

function storage10(){
    let Input10StorageValue = document.getElementById("Input10").value;
    if(Input10StorageValue != ""){
        sessionStorage.setItem("Experience description",document.getElementById("Input10").value);
        localStorage.setItem("Experience description",document.getElementById("Input10").value);
        const employer = document.getElementById("ExperienceDescription");
        employer.innerHTML = document.getElementById("Input10").value;
        employer.style.display= "block";
    } else{
        localStorage.setItem("Experience description",document.getElementById("Input10").value);
        document.getElementById("ExperienceDescription").style.display= "none";
    }
}

function storage11(){
    let Input11StorageValue = document.getElementById("Input11").value;
    if(Input11StorageValue.length != 0){
        sessionStorage.setItem("Academy",document.getElementById("Input11").value);
        localStorage.setItem("Academy",document.getElementById("Input11").value);
        document.getElementById("RightEducationElement").style.display= "block";
        const position = document.getElementById("RightAcademy");
        position.innerHTML = document.getElementById("Input11").value + ",";
        position.style.display= "inline-block";
    } else{
        localStorage.setItem("Academy",document.getElementById("Input11").value);
        document.getElementById("RightAcademy").style.display= "none";
        document.getElementById("RightEducationElement").style.display= "none";
    }
}

function storage12(){
    let Input12StorageValue = document.getElementsByName('Input12')[0];
    let Text = Input12StorageValue.options[Input12StorageValue.selectedIndex].text;
    if(Text != "" && Input12StorageValue.value != 0){
        sessionStorage.setItem("Degree", Text);
        localStorage.setItem("Degree", Text);
        const employer = document.getElementById("RightSelect");
        employer.innerHTML = Text;
        employer.style.display= "inline-block";
    } else{
        localStorage.setItem("Degree", Text);
        document.getElementById("RightSelect").style.display= "none";
    }
}

function storage13(){
    let Input13StorageValue = document.getElementById("inputCalendar3").value;
    if(Input13StorageValue != ""){
        sessionStorage.setItem("Degree end time",document.getElementById("inputCalendar3").value);
        localStorage.setItem("Degree end time",document.getElementById("inputCalendar3").value);
        const employer = document.getElementById("RightEndTime2");
        employer.innerHTML = document.getElementById("inputCalendar3").value;
        employer.style.display= "block";
    } else{
        localStorage.setItem("Degree end time",document.getElementById("inputCalendar3").value);
        document.getElementById("RightEndTime2").style.display= "none";
    }
}

function storage14(){
    let Input14StorageValue = document.getElementById("Input14").value;
    if(Input14StorageValue != ""){
        sessionStorage.setItem("Education Description", document.getElementById("Input14").value);
        localStorage.setItem("Education Description", document.getElementById("Input14").value);
        const employer = document.getElementById("EducationDescription");
        employer.innerHTML = document.getElementById("Input14").value;
        employer.style.display= "block";
    } else{
        localStorage.setItem("Education Description", document.getElementById("Input14").value);
        document.getElementById("EducationDescription").style.display= "none";
    }
}

function validation1() {
    let Input1Value = document.getElementById("Input1").value;
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("Input1").value);
    
    if (Input1Value.length < 2 || bool == false) {
        document.getElementById("Input1").style.border = "1px solid #F02424";
        document.getElementById("Warning1").style.display = "block";
        document.getElementById("Verified1").style.display = "none";
        return false;
    } else{
        document.getElementById("Input1").style.border = "1px solid #98E37E";
        document.getElementById("Verified1").style.display = "block";
        document.getElementById("Warning1").style.display = "none";
        return true;
    }
}

function validation2() {
    let Input2Value = document.getElementById("Input2").value;
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("Input2").value);
    
    if (Input2Value.length < 2 || bool == false) {
        document.getElementById("Input2").style.border = "1px solid #F02424";
        document.getElementById("Warning2").style.display = "block";
        document.getElementById("Verified2").style.display = "none";
        return false;
    } else{
        document.getElementById("Input2").style.border = "1px solid #98E37E";
        document.getElementById("Verified2").style.display = "block";
        document.getElementById("Warning2").style.display = "none";
        return true;
    }
}

function validation3() {
    let Input4Value = document.getElementById("Input4").value;
    const Mail = /^[a-zA-Z0-9.]+@redberry.ge$/;
    const MailValidation = Mail.test(document.getElementById("Input4").value);
    
    if (Input4Value.length != 0 && MailValidation) {
        document.getElementById("Input4").style.border = "1px solid #98E37E";
        document.getElementById("Verified4").style.display = "block";
        document.getElementById("Warning4").style.display = "none";
        return true;
    } else{
        document.getElementById("Input4").style.border = "1px solid #F02424";
        document.getElementById("Warning4").style.display = "block";
        document.getElementById("Verified4").style.display = "none";
        return false;
    }
}

function validation4() {
    let Input5Value = document.getElementById("Input5").value;
    const MobileNumber = /(995)(?:\W*\d){0,8}\d$/;
    const MobileNumberValidation = MobileNumber.test(Input5Value);
    
    if (MobileNumberValidation) {
        document.getElementById("Input5").style.border = "1px solid #98E37E";
        document.getElementById("Verified5").style.display = "block";
        document.getElementById("Warning5").style.display = "none";
        return true;
    } else{
        document.getElementById("Input5").style.border = "1px solid #F02424";
        document.getElementById("Warning5").style.display = "block";
        document.getElementById("Verified5").style.display = "none";
        return false;
    }
}

function validation5() {
    let Input6Value = document.getElementById("Input6").value;
    
    if (Input6Value.length < 3) {
        document.getElementById("Input6").style.border = "1px solid #F02424";
        document.getElementById("Warning6").style.display = "block";
        document.getElementById("Verified6").style.display = "none";
        return false;
    } else{
        document.getElementById("Input6").style.border = "1px solid #98E37E";
        document.getElementById("Verified6").style.display = "block";
        document.getElementById("Warning6").style.display = "none";
        return true;
    }
}

function validation6() {
    let Input7Value = document.getElementById("Input7").value;
    
    if (Input7Value.length < 3) {
        document.getElementById("Input7").style.border = "1px solid #F02424";
        document.getElementById("Warning7").style.display = "block";
        document.getElementById("Verified7").style.display = "none";
        return false;
    } else{
        document.getElementById("Input7").style.border = "1px solid #98E37E";
        document.getElementById("Verified7").style.display = "block";
        document.getElementById("Warning7").style.display = "none";
        return true;
    }
}

function validation7() {
    let Input8Value = document.getElementById("inputCalendar1").value;
    
    if (Input8Value.length == 0) {
        document.getElementById("inputCalendar1").style.border = "1px solid #F02424";
        document.getElementById("Warning8").style.display = "block";
        return false;
    } else{
        document.getElementById("inputCalendar1").style.border = "1px solid #98E37E";
        document.getElementById("Warning8").style.display = "none";
        return true;
    }
}

function validation8() {
    let Input9Value = document.getElementById("inputCalendar2").value;
    
    if (Input9Value.length == 0) {
        document.getElementById("inputCalendar2").style.border = "1px solid #F02424";
        document.getElementById("Warning9").style.display = "block";
        return false;
    } else{
        document.getElementById("inputCalendar2").style.border = "1px solid #98E37E";
        document.getElementById("Warning9").style.display = "none";
        return true;
    }
}

function validation9() {
    let Input10Value = document.getElementById("Input10").value;
    
    if (Input10Value.length == 0) {
        document.getElementById("Input10").style.border = "1px solid #F02424";
        document.getElementById("Warning10").style.display = "block";
        return false;
    } else{
        document.getElementById("Input10").style.border = "1px solid #98E37E";
        document.getElementById("Warning10").style.display = "none";
        return true;
    }
}

function validation10() {
    let Input11Value = document.getElementById("Input11").value;
    
    if (Input11Value.length < 3) {
        document.getElementById("Input11").style.border = "1px solid #F02424";
        document.getElementById("Warning11").style.display = "block";
        document.getElementById("Verified11").style.display = "none";
        return false;
    } else{
        document.getElementById("Input11").style.border = "1px solid #98E37E";
        document.getElementById("Verified11").style.display = "block";
        document.getElementById("Warning11").style.display = "none";
        return true;
    }
}

function validation11() {
    let SelectOption = document.getElementsByName('Input12')[0];
    let Text = SelectOption.options[SelectOption.selectedIndex].text;
    
    if (SelectOption.value == 0 && Text != "") {
        document.getElementById("Input12").style.border = "1px solid #F02424";
        document.getElementById("Warning12").style.display = "block";
        return false;
    } else{
        document.getElementById("Input12").style.border = "1px solid #98E37E";
        document.getElementById("Warning12").style.display = "none";
        return true;
    }
}

function validation12() {
    let Input13Value = document.getElementById("inputCalendar3").value;
    
    if (Input13Value.length == 0) {
        document.getElementById("inputCalendar3").style.border = "1px solid #F02424";
        document.getElementById("Warning13").style.display = "block";
        return false;
    } else{
        document.getElementById("inputCalendar3").style.border = "1px solid #98E37E";
        document.getElementById("Warning13").style.display = "none";
        return true;
    }
}

function validation13() {
    let Input14Value = document.getElementById("Input14").value;
    
    if (Input14Value.length == 0) {
        document.getElementById("Input14").style.border = "1px solid #F02424";
        document.getElementById("Warning14").style.display = "block";
        return false;
    } else{
        document.getElementById("Input14").style.border = "1px solid #98E37E";
        document.getElementById("Warning14").style.display = "none";
        return true;
    }
}

function validationOfDescription(){
    let textArea = document.getElementById("Input3").value;
    if(textArea.length > 0){
        document.getElementById("Input3").style.border = "1px solid #98E37E";
    } else{
        document.getElementById("Input3").style.border = "1px solid #BCBCBC";
    }
}

function DisplayDataFromPrivateInfo(){
    if(document.getElementById("RightImage").style.content = "url("+localStorage.getItem("photo1")+")"){
        document.getElementById("RightImage").style.display = "block";
    }

    if(document.getElementById("RightName").value = localStorage.getItem("name")){
        let object = document.getElementById("RightName");
        object.style.display= "inline";
        object.innerHTML = document.getElementById("RightName").value;
    }
    if(document.getElementById("RightSurame").value = localStorage.getItem("Surname")){
        let object2 = document.getElementById("RightSurame");
        object2.style.display= "inline";
        object2.innerHTML = document.getElementById("RightSurame").value;
    }
    if(document.getElementById("RightAboutMeInput").value = localStorage.getItem("Description")){
        let object3 = document.getElementById("RightAboutMeInput");
        object3.style.display= "block";
        object3.innerHTML = document.getElementById("RightAboutMeInput").value;
        document.getElementById("RightAboutMe").style.display = "block";
    }
    if(document.getElementById("RightMail").value = localStorage.getItem("mail")){
        let object4 = document.getElementById("RightMail");
        object4.style.display= "block";
        object4.innerHTML = document.getElementById("RightMail").value;
        document.getElementById("fa-at").style.display = "block";
    }
    if(document.getElementById("RightPhoneNumber").value = localStorage.getItem("Mobile number")){
        let object5 = document.getElementById("RightPhoneNumber");
        object5.style.display= "block";
        object5.innerHTML = document.getElementById("RightPhoneNumber").value;
        document.getElementById("fa-phone").style.display = "block";
    }
}

function DisplayDataFromExperience(){
    if(document.getElementById("RightImage").style.content = "url("+localStorage.getItem("photo1")+")"){
        document.getElementById("RightImage").style.display = "block";
    }

    if(document.getElementById("RightName").value = localStorage.getItem("name")){
        let object = document.getElementById("RightName");
        object.style.display= "inline";
        object.innerHTML = document.getElementById("RightName").value;
    }
    if(document.getElementById("RightSurame").value = localStorage.getItem("Surname")){
        let object2 = document.getElementById("RightSurame");
        object2.style.display= "inline";
        object2.innerHTML = document.getElementById("RightSurame").value;
    }
    if(document.getElementById("RightAboutMeInput").value = localStorage.getItem("Description")){
        let object3 = document.getElementById("RightAboutMeInput");
        object3.style.display= "block";
        object3.innerHTML = document.getElementById("RightAboutMeInput").value;
        document.getElementById("RightAboutMe").style.display = "block";
    }
    if(document.getElementById("RightMail").value = localStorage.getItem("mail")){
        let object4 = document.getElementById("RightMail");
        object4.style.display= "block";
        object4.innerHTML = document.getElementById("RightMail").value;
        document.getElementById("fa-at").style.display = "block";
    }
    if(document.getElementById("RightPhoneNumber").value = localStorage.getItem("Mobile number")){
        let object5 = document.getElementById("RightPhoneNumber");
        object5.style.display= "block";
        object5.innerHTML = document.getElementById("RightPhoneNumber").value;
        document.getElementById("fa-phone").style.display = "block";
    }
    if(document.getElementById("EmployeeInput").value = localStorage.getItem("Position")){
        let object6 = document.getElementById("EmployeeInput");
        object6.style.display= "inline-block";
        object6.innerHTML = document.getElementById("EmployeeInput").value + ",";
        document.getElementById("ExperiencePElement").style.display = "block";
    }
    if(document.getElementById("EmployerInput").value = localStorage.getItem("Employer")){
        let object7 = document.getElementById("EmployerInput");
        object7.style.display= "inline-block";
        object7.innerHTML = document.getElementById("EmployerInput").value;
    }
    if(document.getElementById("StartTime").value = localStorage.getItem("Start time")){
        let object8 = document.getElementById("StartTime");
        object8.style.display= "block";
        object8.innerHTML = document.getElementById("StartTime").value + " - ";
    }
    if(document.getElementById("EndTime").value = localStorage.getItem("End time")){
        let object9 = document.getElementById("EndTime");
        object9.style.display= "block";
        object9.innerHTML = document.getElementById("EndTime").value;
    }
    if(document.getElementById("ExperienceDescription").value = localStorage.getItem("Experience description")){
        let object10 = document.getElementById("ExperienceDescription");
        object10.style.display= "block";
        object10.innerHTML = document.getElementById("ExperienceDescription").value;
    }
}