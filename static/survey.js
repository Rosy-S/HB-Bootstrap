//$('#myModal').hide();
function submitProfile(evt) {
    evt.preventDefault();

    $.post("/profile",
        $('#profile-form').serialize(),
        function (result) {
            $('#submitted').append(
                "<p>" + "Name: " + result.fullname + "</p>",
                "<p>" + "Age: " + result.age + "</p>",
                "<p>" + "Salary: " + result.salary + "</p>",
                "<p>" + "Education: " + result.education + "</p>",
                "<p>" + "State: " + result.state + "</p>",
                "<p>" + "City Type: " + result.city_type + "</p>",
                "<p>" + "Gardener: " + result.garden + "</p>",
                "<p>" + "TV Watcher: " + result.tv + "</p>");
        }
    );
}

// function thankUser(evt){
//     $('#myModal').show();
// }
$('#myModal').on('shown.bs.modal', function () {
    // $('#profile-form').serialize(),
    //         $('#submitted').append(
    //             "<p>" + "Name: " + result.fullname + "</p>",
    //             "<p>" + "Age: " + result.age + "</p>",
    //             "<p>" + "Salary: " + result.salary + "</p>",
    //             "<p>" + "Education: " + result.education + "</p>",
    //             "<p>" + "State: " + result.state + "</p>",
    //             "<p>" + "City Type: " + result.city_type + "</p>",
    //             "<p>" + "Gardener: " + result.garden + "</p>",
    //             "<p>" + "TV Watcher: " + result.tv + "</p>");
    //     };
  $('#myInput').focus();


});
$("#profile-form").on('submit', submitProfile);
// $("#profile-form").on('submit', thankUser);