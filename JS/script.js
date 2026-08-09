function electricityBill(units){
    var rate;
    var bill;
    var status;

    if(units<=100){
        rate=5;
    }
    else if(units<=300){
        rate=7;
    }
    else{
        rate=10;
    }

    bill=units*rate;

    if(bill>2000){
        status="High Bill";
    }
    else{
        status="Normal Bill";
    }

    document.getElementById("electricity").innerText =
    "Electricity Bill\n\n"+
    "Units Used : "+units+
    "\nRate : "+rate+" Tk/unit"+
    "\nTotal Bill : "+bill+" Tk"+
    "\nBill Status : "+status;
}


var username = prompt('Give Your Username')
var password = prompt('Give Your Password')

if(username == 'admin' && password == 1234)
    console.log('Login Successful')

else {
    console.log('Login Denied')
}


function studentResult(name,bangla,english,math,science,ict){

    var total=bangla+english+math+science+ict;
    var average=total/5;


if(bangla < 33|| english <33|| math < 33 || science < 33 || ict < 33) {
    alert(" Student has Failed")
    return;
}


    var grade;
    var scholarship;
    var status;

    if(average>=80){

        grade="A+";
        scholarship="100%";

        document.getElementById("box2").style.backgroundColor="steelblue";

    }

    else if(average>=70){

        grade="A";
        scholarship="75%";

        document.getElementById("box2").style.backgroundColor="cadeblue";

    }

    else if(average>=60){

        grade="A-";
        scholarship="50%";

        document.getElementById("box2").style.backgroundColor="lightblue";

    }

    else if(average>=50){

        grade="B";
        scholarship="25%";

        document.getElementById("box2").style.backgroundColor="cornflowerblue";

    }

    else{

        grade="F";
        scholarship="0%";

        document.getElementById("box2").style.backgroundColor="red";

    }


    if(average>=50){

        status="Pass";
        document.getElementById("box2").style.color="black";

    }
    else{

        status="Fail";
        document.getElementById("box2").style.color="white";

    }


    document.getElementById("studentName").innerText =
    "Student Name : "+name;

    document.getElementById("studentMarks").innerText =
    "Total Marks : "+total;

    document.getElementById("studentAverage").innerText =
    "Average : "+average;

    document.getElementById("studentGrade").innerText =
    "Grade : "+grade;

    document.getElementById("studentStatus").innerText =
    "Status : "+status;

    document.getElementById("studentScholarship").innerText =
    "Scholarship : "+scholarship;

}
