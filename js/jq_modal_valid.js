
$(document).ready(function() {
    $('#online_phone,  #online_phone1').mask('+375(99)999-99-99');
    $('#timer, #timer1').mask('00.00');
    $.validator.addMethod("onlyLetters", function(value,element) {
        return (/^[А-Яа-яЁё\s]+$/).test(value)||(/^[a-zA-Z]+$/).test(value); /*только слова на латинице или на кирилице*/
    });
    /*$('#reg').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var tel = $('#online_phone').val();
        var time = $('#time').val();

        $(".error").remove();
        if (name.length < 1) {
            $('#name').after('<br><span class="error">Укажите как вас зовут</span>');
        }
        if (tel.length < 7) {
            $('#online_phone').after('<br><span class="error">Укажите ваш номер телефона</span>');
        }
        if (time.length < 1) {
            $('#time').after('<br><span class="error">Укажите желаемое время</span>');
        }
    });*/
    $('#reg').validate({
        rules: { /*здесь указываем атрибут name*/
           name: {required:true,
               onlyLetters:true,
            },
           num_tel: {
                required: true,
                minlength: 16,
            },
           time: {
               required: true,
               minlength: 5,
           }
        },
        messages: {
            name: {required:'* Укажите как вас зовут',onlyLetters:'только буквы'},
            num_tel: {required:'*Укажите ваш номер телефона',minlength:'Вы ввели не полный номер'},
            time: {required:'Укажите желаемое время',minlength:'Не корректное время'}
            /*тут можно указывать name, но если указать id ,то будет отслеживать minlenght при вводе без правила */
        },
        errorElement: 'div',/*По умолчанию сообщение с ошибкой выводится в сестринском элементе label. Чтобы изменить, например, label на div достаточно указать: errorElement: 'div'*/
        errorClass: "errorMessages",
        validClass: "success",
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .removeClass(errorClass);
        },
        /*Чтобы регулировать поведение некорректных элементов, существуют две функции highlight (как выделять некорректны элемент) и unhighlight (ошибка ликвидирована, по умолчанию удалят error-класс). Обе функции принимают три аргумента: element, errorClass, validClass*/
        submitHandler: function() {
            var form_data = $('#reg').serialize();
            $.ajax({
                url: 'mail.php',
                type: "POST",
                data: form_data,
                success: function () {
                    alert('Заявка принята!');
                    document.reg.reset(); /* сброс формы*/
                    close();
                    addOverlay();
                },


                error: function () {
                    alert("Ошибка,данные не отправлены");
                }
            });
            return false;
        }
    });
    $('#reg2').validate({
        rules: { /*здесь указываем атрибут name*/
            name: {required:true,
                onlyLetters:true,
            },
            num_tel: {
                required: true,
                minlength: 16,
            },
            time: {
                required: true,
                minlength: 5,
            }
        },
        messages: {
            name: {required:'* Укажите как вас зовут',onlyLetters:'только буквы'},
            num_tel: {required:'*Укажите ваш номер телефона',minlength:'Вы ввели не полный номер'},
            time: {required:'Укажите желаемое время',minlength:'Не корректное время'}
            /*тут можно указывать name, но если указать id ,то будет отслеживать minlenght при вводе без правила */
        },
        errorElement: 'div',/*По умолчанию сообщение с ошибкой выводится в сестринском элементе label. Чтобы изменить, например, label на div достаточно указать: errorElement: 'div'*/
        errorClass: "errorMessages",
        validClass: "success",
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .removeClass(errorClass);
        },
        /*Чтобы регулировать поведение некорректных элементов, существуют две функции highlight (как выделять некорректны элемент) и unhighlight (ошибка ликвидирована, по умолчанию удалят error-класс). Обе функции принимают три аргумента: element, errorClass, validClass*/
        submitHandler: function() {
            var form_data = $('#reg2').serialize();
            $.ajax({
                url: 'mail.php',
                type: "POST",
                data: form_data,
                success: function () {
                    alert('Заявка принята!');
                    document.reg2.reset();
                    $('#modal2').css('display','none');
                },
                error: function () {
                    alert("Ошибка,данные не отправлены");
                }
            });
            return false;
        }
    });
});