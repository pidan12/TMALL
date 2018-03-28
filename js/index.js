//topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        if (st > 700) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 500) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//头部导航1
{
    $(".head_di_right2")
        .mouseenter(function () {
            let index=$(this).index(".head_di_right2");
            $(".head_di_right2_chu").eq(index).show()
        })
        .mouseleave(function () {
            let index = $(this).index(".head_di_right2");
            $(".head_di_right2_chu").eq(index).hide()
        })
}
//头部导航2
{
    $(".head_di_right4")
        .mouseenter(function () {
            $(".hdr41").show()
        })
        .mouseleave(function () {
            $(".hdr41").hide()
        })
}
//头部导航3
{
    $(".head_di_right1")
        .mouseenter(function () {
            $(".wzdh_chu").show()
        })
        .mouseleave(function () {
            $(".wzdh_chu").hide()
        })
}
//banner左
{
    $(".lunboxia_left_li")
        .mouseenter(function () {
            let index = $(this).index(".lunboxia_left_li");
            $(".lunboxia_left_li_chu").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".lunboxia_left_li");
            $(".lunboxia_left_li_chu").eq(index).hide();
        })
}
//banner
