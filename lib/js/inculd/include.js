/**
 * Created by acer on 2016/2/26.
 */

function include(url) {
    $.ajax({
        type: "get",
        url: url,
        data: null,
        dataType: "text",
        async: false,
        success: function (data) {
            document.write(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}
