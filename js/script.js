$(document).ready(function()    {
    //Przypisanie obsługi eventu kliknięcia na przycisk
    $('#pobierz-dane').click(function() {
        //Wysłanie żądania AJAX do serwera
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            dataType: 'json',
            success: function(data) {
                //Gdy dane zostaną pobrane pomyślnie, wyśtwietla się je w nowym <div>
                let daneProgramisty = $('#dane-programisty');
                daneProgramisty.empty(); //Usunięcie wcześniejszych danych z <div>

                //Tworzenie elementów HTML z danymi + div'y
                daneProgramisty.append('<p>Imię: ' + data.imie + '</p>');
                daneProgramisty.append('<p>Nazwisko: ' + data.nazwisko + '</p>');
                daneProgramisty.append('<p>Zawód: ' + data.zawod + '</p>');
                daneProgramisty.append('<p>Firma: ' + data.firma + '</p>');
            },
            error:function()    {
                //W przypadku błędu - musi być komunikat
                let daneProgramisty = $('#dane-programisty');
                daneProgramisty.text('Wystąpił błąd podczas pobierania danych.');
            }
        })
    })
})