
// Навигация по слайдам
$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'services', 'projects', 'clients', 'partners', 'contacts'],
    });
});

// Отображение попапа
function PopUpShow_menu(){
    $("#popup_1").removeClass("hide");
}
function PopUpShow_contacts(){
    $("#popup_2").removeClass("hide");
}
function PopUpShow_production(){
    $("#popup_3").removeClass("hide");
}
function PopUpShow_event(){
    $("#popup_4").removeClass("hide");
}
function PopUpShow_creative(){
    $("#popup_5").removeClass("hide");
}
function PopUpShow_digital(){
    $("#popup_6").removeClass("hide");
}

// Cкрытие попапа
function PopUpHide(){
    $("#popup_1, #popup_2, #popup_3, #popup_4, #popup_5, #popup_6").addClass("hide");
};
