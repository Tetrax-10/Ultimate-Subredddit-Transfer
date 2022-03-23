(function () {
    var q = [];
    $(".remove").each(function () {
        var that = this;
        var f = function (index) {
            $(that).trigger("click");
            $(that).trigger("mousedown");
            setTimeout(function () {
                if (q[index]) {
                    q[index](index + 1);
                } else {
                    if (downVoteTimer) {
                        window.clearTimeout(upVoteTimer);
                    }
                }
            }, 500);
        };
        q.push(f);
    });
    var downVoteTimer = window.setTimeout(function () {
        q[0](1);
    }, 50);
})();