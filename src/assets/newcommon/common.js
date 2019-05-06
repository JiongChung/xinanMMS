$(document).click(function(event){
    if($(event.target).closest(".select3-selection").length > 0)
    {
        if($(event.target).closest(".select3-container").find(".selection-show-item").hasClass('show')){
            $(".selection-show-item").removeClass('show');           
        }else{
            $(event.target).closest(".select3-container").find(".selection-show-item").addClass('show');
        }
    }else{
        if($(event.target).closest(".selection-show-item").length > 0 || $(event.target).hasClass("selection-show-item")){
            $(event.target).closest(".select3-container").find(".selection-show-item").addClass('show');
        }else{
            $(".selection-show-item").removeClass('show');
            if($(event.target).parent().hasClass('select-label-info')){
                $(".selection-show-item").addClass('show');
            }
        }
    }
});