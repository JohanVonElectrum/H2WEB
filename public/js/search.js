function search(ul, query) {
    $("#" + ul).children("li").each((i, li) => {
        if (unformat(li.id).toLowerCase().includes(unformat(query).toLowerCase())) $(li).show();
        else $(li).hide();
    })
}

function unformat(str) {
    str = str.toLowerCase();
    while (str.includes(" ")) str = str.replace(" ", "");
    return str;
}