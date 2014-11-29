$(function () {
    $(".contact").on("click", function () {
        $(".popUp").show();
        $(".highlight").show();
        $("html,body").addClass("pop");
        return false;
    });
    $(".close").on("click", function () {
        $(".popUp").hide();
        $(".highlight").hide();
        $("html,body").removeClass("pop");
        $("#form-messages").text("").hide();
        return false
    });
    var e = $("#ajax-contact");
    var t = $("#form-messages");
    $(e).submit(function (n) {
        n.preventDefault();
        var r = $(e).serialize();
        $.ajax({type: "POST", url: $(e).attr("action"), data: r}).done(function (e) {
            $(t).removeClass("error");
            $(t).addClass("success");
            $(t).text(e);
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
            ga("send", "event", "formsubmit", "submit")
        }).fail(function (e) {
            $(t).removeClass("success");
            $(t).addClass("error");
            if (e.responseText !== "") {
                $(t).text(e.responseText)
            } else {
                $(t).text("Oops! An error occured and your message could not be sent.").show();
            }
        })
    })
})