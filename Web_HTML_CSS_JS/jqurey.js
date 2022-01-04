$(document).ready(function() {
    let blackColor = $('#blackText');
    let redColor = $('#redText');
    let title = $('.title');
    let label = $('label');
    let btn = $('button');
    blackColor.change(function() {
        if ($(this).is(':checked')) {
            title.css('color' , 'black');
            label.css('color' , 'black');
        }
    })
    redColor.change(function() {
        if ($(this).is(':checked')) {
            title.css('color' , 'red');
            label.css('color' , 'red');
        }
    })
    let noneColor = $('#noneBg');
    let greenColor = $('#greenBg');
    let orangeColor = $('#orangeBg');
    if(noneColor.prop('checked')) {
        title.css('backgroundColor', 'white');
        btn.css('backgroundColor', 'white');
    }
    if(greenColor.prop('checked')) {
        title.css('backgroundColor', 'green');
        btn.css('backgroundColor', 'green');
    }
    if(orangeColor.prop('checked')) {
        title.css('backgroundColor', 'orange');
        btn.css('backgroundColor', 'orange');
    }
    let result = $('#result');

    // var regex = new Regex(/[a-zA-Z]+$/g)

    $('#form').submit(function(e) {
        e.preventDefault();
        $(this.lop).val()
    })
    $('#subbmit').click(function(event) {
        console.log('dssss')
        event.preventDefault();
        let name = $('#name').val();
        let selectClass = $('#selectClass option:selected').text();
        let htmlcssMark = $('#htmlcss').val();
        let jsMark = $('#js').val();
        let jqueryMark = $('#jquery').val();
        let tb = (parseFloat(htmlcssMark) + parseFloat(jsMark) + parseFloat(jqueryMark)) / 3;
        let result = `<tr>
                        <td>${name}</td>
                        <td>${selectClass}</td>
                        <td>${html}</td>
                        <td>${java}</td>
                        <td>${jque}</td>
                        <td>${parseFloat(tb)}</td>
                    </tr>`;
        $('#result').append(result);
    })

})
