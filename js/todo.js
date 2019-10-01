$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented

        toggleTaskStatus();

        $("#button").click(function(){
            $("ol").append('<li id="' + generateUUID() + '" class=""> <input name="done-todo" type="checkbox" class="done-todo">' + ' ' + $('input:text').val() + '</li>');
            toggleTaskStatus();
        });

        function toggleTaskStatus() {
            $('input[type="checkbox"]').click(function(){
                if($(this).prop("checked") == true){
                    $(this).parent().css({ 'color': 'gray', 'text-decoration': 'line-through' });
                }
                else if($(this).prop("checked") == false){
                    $(this).parent().css({ 'color': 'black', 'text-decoration': 'none' });
                }
            });
        }

        $('#filters li a').click(function() { 
            let allItems = $("ol").children();

            if($(this).attr('data-filter') == "all") {
                allItems.show();
            }

            if($(this).attr('data-filter') == "active") {
                allItems.hide();
                $('input[type="checkbox"]').each(function() {
                    if($(this).prop("checked") == false){
                        $(this).parent().show();
                    }
                });
            }

            if($(this).attr('data-filter') == "complete") {
                allItems.hide();
                $('input[type="checkbox"]').each(function() {
                    if($(this).prop("checked") == true){
                        $(this).parent().show();
                    }
                });
            }
        });
    });