$(function() {

    var $details = $('#details');
    var $p = $('para');
    var $moreDetails = $('#Moredetails');
    var $p = $('para1');
    // for only one movie
    $('#searct-btn').on('click', function() {
        var mvTital = $("#searchBox").val();
        $.ajax({

            type: 'GET',
            url: 'http://www.omdbapi.com/?t=' + mvTital + '&y=&plot=short&r=json',
            success: function(details) {
                // console.log('http://www.omdbapi.com/?t=' + mvTital + '&y=&plot=short&r=json');

                if (details.Response === "True") {
                    $details.html('<tr> <td>Title:' + details.Title + "</td></tr><tr><td>Year:" + details.Year +
                        "</td></tr><tr><td>Released:" + details.Released + "</td></tr><tr><td> Director:" + details.Director +
                        "</td></tr><tr><td> Actors:" + details.Actors + "</td></tr><tr><td><img src=" + details.Poster + "</td></tr>");

                } else {
                    alert("zero data found");
                }
            }
        });
    });
    //for more then one movie
    $('#search-btn-words').on('click', function() {
        var Titals = $("#searchWords").val();
        $("#Moredetails").empty();
        $.ajax({
            type: 'GET',
            url: 'http://www.omdbapi.com/?s=' + Titals,
            dataType: "json",
            success: function(details) {
                console.log(details);
                $.each(details, function(i, detail) {
                    console.log(detail);
                    $.each(detail, function(i, data) {
                        console.log(data);
                        $moreDetails.append('<tr> <td>Title:' + data.Title + "</td></tr><tr><td>Year:" + data.Year +
                            "</td></tr><tr><td><img src=" + data.Poster + "</td></tr>");
                    });
                });
            }
        });
    });

});
