function enaple() {
    var check = [document.getElementById("check"),
    document.getElementById("check2"),
    document.getElementById("check3"),
    document.getElementById("check4"),
    document.getElementById("check5"),
    document.getElementById("check6"),
    document.getElementById("check7"),
    document.getElementById("check8"),
    document.getElementById("check9"),
    document.getElementById("check10")];

    var expgrade = [document.getElementById("grade"),
        document.getElementById("grade2"),
        document.getElementById("grade3"),
        document.getElementById("grade4"),
        document.getElementById("grade5"),
        document.getElementById("grade6"),
        document.getElementById("grade7"),
        document.getElementById("grade8"),
        document.getElementById("grade9"),
        document.getElementById("grade10")];

    for (var i = 0; i < 10; i++) {
        if (check[i].checked) {
            expgrade[i].removeAttribute("disabled");
        } else {
            expgrade[i].disabled = "true";
        }
    }
}

function calculate() {
    var checkGPA = parseFloat(document.getElementById("currentGPA").value);
    var error = document.getElementById("error");
    var cumulative_gpa = parseFloat(document.getElementById("currentGPA").value);
    var totalHours = parseFloat(document.getElementById("totalHours").value);
    var total_point_first = cumulative_gpa * totalHours;
    var total_grade_point = 0;
    var total_credit_hours = 0;
    var current_GPA_this_semester = 0;
    var total_point = 0;
    var total_repeted_hours = 0;
    const thead1 = document.querySelector(".thead1");
    const tbodyel = document.querySelector(".tbodyel");
    const tit1 = document.querySelector(".answer");
    var   tota_grade_point_current =0;
    var credit_hours_for_this_Semester = 0;
    if (checkGPA >= 0.0 && checkGPA <= 4.0 && isNaN(checkGPA) == false) {
       
        if (totalHours >= 0 && totalHours <= 999 && isNaN(totalHours) == false){
        var check = [document.getElementById("check"),
        document.getElementById("check2"),
        document.getElementById("check3"),
        document.getElementById("check4"),
        document.getElementById("check5"),
        document.getElementById("check6"),
        document.getElementById("check7"),
        document.getElementById("check8"),
        document.getElementById("check9"),
        document.getElementById("check10")];


        var expgrade = [parseFloat(document.getElementById("expgrade").value),
        parseFloat(document.getElementById("expgrade2").value),
        parseFloat(document.getElementById("expgrade3").value),
        parseFloat(document.getElementById("expgrade4").value),
        parseFloat(document.getElementById("expgrade5").value),
        parseFloat(document.getElementById("expgrade6").value),
        parseFloat(document.getElementById("expgrade7").value),
        parseFloat(document.getElementById("expgrade8").value),
        parseFloat(document.getElementById("expgrade9").value),
        parseFloat(document.getElementById("expgrade10").value)];


        var course_grade = [parseFloat(document.getElementById("grade").value), parseFloat(document.getElementById("grade2").value), parseFloat(document.getElementById("grade3").value),
        parseFloat(document.getElementById("grade4").value),
        parseFloat(document.getElementById("grade5").value),
        parseFloat(document.getElementById("grade6").value),
        parseFloat(document.getElementById("grade7").value),
        parseFloat(document.getElementById("grade8").value),
        parseFloat(document.getElementById("grade9").value),
        parseFloat(document.getElementById("grade10").value)];


        var credit_hours = [parseFloat(document.getElementById("Credit1").value), parseFloat(document.getElementById("Credit2").value),
        parseFloat(document.getElementById("Credit3").value), parseFloat(document.getElementById("Credit4").value),
        parseFloat(document.getElementById("Credit5").value), parseFloat(document.getElementById("Credit6").value),
        parseFloat(document.getElementById("Credit7").value), parseFloat(document.getElementById("Credit8").value),
        parseFloat(document.getElementById("Credit9").value), parseFloat(document.getElementById("Credit10").value)];
        

        for (var i = 0; i < 10; i++) {
                if (check[i].checked && expgrade[i] > course_grade[i]) {
                    total_point += (course_grade[i] * credit_hours[i]);
                    total_grade_point += (expgrade[i] * credit_hours[i]);
                    tota_grade_point_current += (expgrade[i] * credit_hours[i]);
                    totalHours += 0;
                    total_credit_hours += credit_hours[i];
                    total_repeted_hours += credit_hours[i];

                } else if (check[i].checked && expgrade[i] < course_grade[i]) {
                    totalHours += 0;
                    total_credit_hours += credit_hours[i];
                    total_repeted_hours += credit_hours[i];
                    tota_grade_point_current += (expgrade[i] * credit_hours[i]);
                } else {
                    total_grade_point += (expgrade[i] * credit_hours[i]);
                    tota_grade_point_current += (expgrade[i] * credit_hours[i]);
                    totalHours += credit_hours[i];
                    total_credit_hours += credit_hours[i];
                }
            }
            
        


        if (tota_grade_point_current == 0 && total_credit_hours == 0) {
            current_GPA_this_semester = 0;
        } else {
            current_GPA_this_semester = (tota_grade_point_current / total_credit_hours);
        }

        if (totalHours == 0 && ((total_point_first - total_point) + total_grade_point) == 0) {
            cumulative_gpa = 0;
        } else {
            cumulative_gpa = (((total_point_first - total_point) + total_grade_point) / totalHours);
        }

        for (var i = 0; i < 10; i++) {
            if (isNaN(credit_hours[i]) == true){
                error.textContent = "Number of Credit Hours for course " + (i + 1) + " is Invalid";
                error.style.color = "red";
                tit1.innerHTML = ``;
                thead1.innerHTML = ``;
                tbodyel.innerHTML = ``;
                break;
            }
            else if (credit_hours[i] < 0.0 || credit_hours[i] > 14) {
                error.textContent = "Number of Credit Hours for course " + (i+1) + " is Invalid";
                error.style.color = "red";
                tit1.innerHTML = ``;
                thead1.innerHTML = ``;
                tbodyel.innerHTML = ``;
                break;
            } else if (check[i].checked && parseFloat(document.getElementById("totalHours").value) <= total_repeted_hours) {
                error.textContent = "Total credit hours must be equal to or greater than the sum of all repeated class credit hours.";
                error.style.color = "red";
                tit1.innerHTML = ``;
                thead1.innerHTML = ``;
                tbodyel.innerHTML = ``;
                break;
            } else if (check[i].checked && expgrade[i] > 3.3 && course_grade[i] == 0) {
                error.textContent = "The highest grade that can be obtained is B+";
                error.style.color = "red";
                tit1.innerHTML = ``;
                thead1.innerHTML = ``;
                tbodyel.innerHTML = ``;
                break;
            }else {

                tit1.innerHTML = `
            <h2>Projected GPA</h2>
        `


                thead1.innerHTML = `
            <th class="hours m-test"><label class="m-test" for="current-GPA">Projected Semester GPA</label></th>
                        <th class="hours"><label for="credit-hours">Credit Hours for this Semester</label></th>
                        <th class="hours"><label for="cumulative-GPA">Projected Overall GPA</label></th>
                        <th class="hours"><label for="total-credit-hours">Total Credit hours</label></th>
        `
                tbodyel.innerHTML = `
            <tr>
                <td>${current_GPA_this_semester.toFixed(3)}</td>
                <td>${(total_credit_hours + credit_hours_for_this_Semester)}</td>
                <td>${cumulative_gpa.toFixed(3)}</td>
                <td>${totalHours}</td>
            </tr>
        `
                error.textContent = "";
                error.style.color = "white";
            }
        }}else{
            error.textContent = "The total hours must be grater than 0";
            error.style.color = "red";
            tit1.innerHTML = ``;
            thead1.innerHTML = ``;
            tbodyel.innerHTML = ``;
        }
    } else {
        error.textContent = "The GPA must be between 0 and 4.";
        error.style.color = "red";
        tit1.innerHTML = ``;
        thead1.innerHTML = ``;
        tbodyel.innerHTML = ``;
    }


}

function delete_result() {
    const thead1 = document.querySelector(".thead1");
    const tbodyel = document.querySelector(".tbodyel");
    const tit1 = document.querySelector(".answer");
    var error = document.getElementById("error");

    tit1.innerHTML = ``;
    thead1.innerHTML = ``;
    tbodyel.innerHTML = ``;
    error.textContent = "";
    error.style.color = "white";
}

function targeGPA() {
    var checktarget_GPA = parseFloat(document.getElementById("target_GPA").value);
    var checkcurrent_GPA = parseFloat(document.getElementById("currentGPA-goal-GPA").value);
    var target_GPA = parseFloat(document.getElementById("target_GPA").value);
    var completed_Credit_Hours = parseFloat(document.getElementById("completed_Credit_Hours").value);
    var planned_Credit_Hours = parseFloat(document.getElementById("planned_Credit_Hours").value);
    var current_GPA = parseFloat(document.getElementById("currentGPA-goal-GPA").value);
    var goal_GPA;
    const result = document.querySelector(".target_GPA_result");

    if ((checkcurrent_GPA > 0 && checkcurrent_GPA <= 4)){
        if (completed_Credit_Hours > 0.0 && completed_Credit_Hours <= 350.0){
            if ((checktarget_GPA > 0 && checktarget_GPA <= 4)){
                if (planned_Credit_Hours >= 0.0 && planned_Credit_Hours <= 350.0){
            goal_GPA = ((target_GPA * (completed_Credit_Hours + planned_Credit_Hours)) - (current_GPA * completed_Credit_Hours)) / planned_Credit_Hours;
            if (goal_GPA >= 0 && goal_GPA <= 4) {
                result.textContent = `You will need a GPA of ${goal_GPA.toFixed(3)} to meet your goal of ${target_GPA.toFixed(3)} while taking ${planned_Credit_Hours} credits this semester.`;
                document.getElementById("goal-result").style.color = "black";
            } else {
                result.textContent = `Unfortunately, you would need a GPA of ${goal_GPA.toFixed(3)} to meet your goal of ${target_GPA.toFixed(3)} which is not possible while taking ${planned_Credit_Hours} credits this semester.`
                document.getElementById("goal-result").style.color = "black";
            }
        }else{
                result.textContent = `Credits for this semester must be greater than 0.`;
                document.getElementById("goal-result").style.color="red";
        }
        } else {
                result.textContent = `Your desired GPA must be between 0 and 4.`;
                document.getElementById("goal-result").style.color = "red";
        }
    }else{
            result.textContent = `Total Credit Hours this Semester is Invalid`;
            document.getElementById("goal-result").style.color = "red";
    }
       
    }else{
        result.textContent = `The current GPA must be between 0 and 4.`;
        document.getElementById("goal-result").style.color = "red";
    }

  
}

function delete_target_GPA() {
    const result = document.querySelector(".target_GPA_result");
    result.textContent = ``;
}


