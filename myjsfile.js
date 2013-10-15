var closeall = function() {
	$("#home").hide();
	$("#research").hide();
	$("#cv").hide();
	$("#contact").hide();
	$("#ps").hide();
	$("#future").hide();
	$("#scholar").hide();
}
var calPoint = function(tmp) {
    switch(tmp){
        case 'B+': {grade=3.3; break;}
        case 'A-': {grade=3.7; break;}
        case 'quit': {grade=-1; break;}
        case 'B': {grade=3; break;}
        case 'B-': {grade=2.7; break;}
        case 'Pass': {grade=-1; break;}
        case 'A': {grade=4.0; break;}
        case '': {grade=-1; break;}
        default: {
            if(tmp>=95) grade=4.3;
            else if(tmp>=90) grade=4.0;
            else if(tmp>=85) grade=3.7;
            else if(tmp>=82) grade=3.3;
            else if(tmp>=78) grade=3.0;
            else if(tmp>=75) grade=2.7;
            else if(tmp>=72) grade=2.3;
            else if(tmp>=68) grade=2.0;
            else if(tmp>=65) grade=1.7;
            else if(tmp>=64) grade=1.5;
            else if(tmp>=61) grade=1.3;
            else if(tmp>=60) grade=1.0;
            else grade=0;
        }
    }
    return grade;
}
var calPoint2 = function(tmp) {
    switch(tmp){
        case 'B+': {grade=3.0; break;}
        case 'A-': {grade=4.0; break;}
        case 'quit': {grade=-1; break;}
        case 'B': {grade=3.0; break;}
        case 'B-': {grade=3.0; break;}
        case 'Pass': {grade=-1; break;}
        case 'A': {grade=4.0; break;}
        case '': {grade=-1; break;}
        default: {
            if(tmp>=90) grade=4.0;
            else if(tmp>=80) grade=3.0;
            else if(tmp>=70) grade=2.0;
            else if(tmp>=60) grade=1.0;
        }
    }
    return grade;
}
var calGPA = function() {
    a = $('#data tr');
    sum43=0;
    sum4 = 0;
    count=0;
    sumgrade=0;
    for(i=0;i<a.length;i++){
        if(a.eq(i).find('input').prop('checked')){
            tmp = a.eq(i).children().eq(1).html();
            point43 = calPoint(tmp);
            point4 = calPoint2(tmp);
            if(point4==-1) continue;
            credit = a.eq(i).children().eq(3).html();
            sum43 += point43*credit;
            sum4 += point4*credit;
            if(tmp=='A'||tmp=='A-'||tmp=='B+'||tmp=='B'||tmp=='Pass'||tmp=='quit'){
                ;
            }
            else{
                sumgrade += parseFloat(tmp)*credit;
                alert(sumgrade);
                alert(tmp);
            }
            count += parseFloat(credit);
        }
    }
    gpa43 = sum43/count;
    gpa4 = sum4/count;
    avergrade = sumgrade/count;
    $("#CREDITCOUNT").text('Total Credit: '+count.toPrecision(3));
    $("#GPA43").text('GPA: '+gpa43.toPrecision(3)+'/4.3');
    $("#GPA4").text('GPA: '+gpa4.toPrecision(3)+'/4.0');
    $("#AVERGRADE").text('Average Grade: '+avergrade.toPrecision(3)+'/100');
}
var addCheckBox = function() {
    a = $("#data tr");
    for(i=0;i<a.length;i++){
        a.eq(i).html(function(i, origin){
            return origin+'<td><input type="checkbox" checked=true/></td>';
        });
    }
}
var csOnClick = function() {
    a = $(".CS");
    for(i=0;i<a.length;i++)
        if($("#cs_check").prop("checked"))
            a.eq(i).find('input').prop("checked", true);
        else
            a.eq(i).find('input').prop("checked", false);
}
var eeOnClick = function() {
    a = $(".EE");
    for(i=0;i<a.length;i++)
        if($("#ee_check").prop("checked"))
            a.eq(i).find('input').prop("checked", true);
        else
            a.eq(i).find('input').prop("checked", false);
}
var mathOnClick = function() {
    a = $(".Math");
    for(i=0;i<a.length;i++)
        if($("#math_check").prop("checked"))
            a.eq(i).find('input').prop("checked", true);
        else
            a.eq(i).find('input').prop("checked", false);
}
var otherOnClick = function() {
    a = $("#data tr");
    for(i=0;i<a.length;i++){
        if(a.eq(i).attr("class"))
            continue;
        if($("#other_check").prop("checked"))
            a.eq(i).find('input').prop("checked", true);
        else
            a.eq(i).find('input').prop("checked", false);
    }
}
$(document).ready(function(){
    addCheckBox();
		$(".hometab").click(function(){
			closeall();
			$("#home").toggle();
		})
		$(".cvtab").click(function() {
			closeall();
			$("#cv").toggle();
		})
		$(".researchtab").click(function() {
			closeall();
			$("#research").toggle();
		})
		$(".contacttab").click(function() {
			closeall();
			$("#contact").toggle();
		})
		$(".testButton").click(function() {
			//closeall();
			//$("#ps").toggle();
            a = $('#data tr.CS');
            sum=0;
            count = 0;
            for(i=0;i<a.length;i++){
                tmp = a.eq(i).children().eq(1).html();
                point = calPoint2(tmp);
                if(point==-1) continue;
                credit = a.eq(i).children().eq(3).html();
                sum += point*credit;
                count += parseFloat(credit);
            }
            alert(sum);
            alert(count);
            alert(sum/count);
		})
		$(".futuretab").click(function() {
			closeall();
			$("#future").toggle();
		})
		$(".scholartab").click(function() {
			closeall();
			$("#scholar").toggle();
		})
		})
