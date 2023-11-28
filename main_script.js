$(document).ready(function () {
    var searchTags = [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Python",
        "Java",
        "iOS",
        "Swift",
        "React",
        "Web Design",
        "Web Development"
    ];

    $("#search").autocomplete({
        source: searchTags
    });

    $("#online").click(function () {
        $(".pfp").toggleClass("pfp-offline", false)
    });
    $("#offline").click(function () {
        $(".pfp").toggleClass("pfp-offline", true);
    })

    $(".fa-bookmark").attr({
        "data-bs-toggle": "tooltip", "data-placement": "top", "title": "Add to Bookmarks", "role": "button", "type": "button"
    });
    $("[data-bs-toggle='tooltip']").tooltip();

    $(".fa-bookmark").click(function(e) {
        e.preventDefault();
        $(this).closest(".card").clone().addClass("bookmarked-card").appendTo("#bookmark-section .offcanvas-body");
    });
});