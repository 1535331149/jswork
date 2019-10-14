str = '<table border="1">'
for (let i = 1; i < 10; ++i) {
    str += '<tr>'
    for (let j = 1; j < 10; ++j) {
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table1').innerHTML = str

str = '<table border="1">'
for (let z = 9; z > 0; --z) {
    str += '<tr>'
    for (var x = z; x > 0; --x) {
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

str = '<table border="1">'
for (let c = 9; c > 0; --c) {
    str += '<tr>'
    for (var v = 1; v <= c; ++v) {
        str += '<td>' + c + '*' + v + '=' + (c * v) + '</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML = str;