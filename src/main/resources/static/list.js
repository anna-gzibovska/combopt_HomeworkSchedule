$(document).ready(function () {
    $.getJSON("/homework/list", function(homeworkSchedules) {
        var listOfSchedules = $("#listOfSchedules");
        $.each(homeworkSchedules, function(idx, schedule) {
            listOfSchedules.append($('<li><a href="schedule.html?id='+ schedule.solutionId + '">' +
                schedule.score + '</a> ' +
                ' Assignments: ' + schedule.AssignmentList.length + '</li>'));
        });
    });
});
