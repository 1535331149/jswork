function calendar(y) {
    var w = new Date(y, 0).getDay();
    var html = '<div class="box">';
    for (var m = 1; m <= 12; ++m) {
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + y + '年' + m + '月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td><tr>';

        var max = new Date(y, m, 0).getDate();
        html += '<tr>';
        for (var d = 1; d <= max; ++d) {
            if (w && d == 1) {
                html += '<td colspan="' + w + '"> </td>';
            }
            html += '<td>' + d + '</td>';
            if (w == 6 && d != max) {
                html += '</tr><tr>';
            } else if (d == max) {
                html += '</tr>';
            }
            w = (w + 1 > 6) ? 0 : w + 1;
        }
        html += '</table>';
    }
    html += '</div>';
    return html;
}
/*function calendar(x) {
    var e = new Date(y-1, 0).getDay();
    var html = '<div class="box">';
    for (var a = 1; a <= 12; ++a) {
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + y-1 + '年' + a + '月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td><tr>';

        var max = new Date(y-1, a, 0).getDate();
        html += '<tr>';
        for (var f = 1; f <= max; ++f) {
            if (e && f == 1) {
                html += '<td colspan="' + e + '"> </td>';
            }
            html += '<td>' + f + '</td>';
            if (w == 6 && f != max) {
                html += '</tr><tr>';
            } else if (f == max) {
                html += '</tr>';
            }
            e = (e + 1 > 6) ? 0 : e + 1;
        }
        html += '</table>';
    }
    html += '</div>';
    return html;
}*/