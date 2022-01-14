function calculate() {
    var side = [];
    var angle = [];
    var count1 = 0;
    var count2 = 0;

    if (document.getElementById("s1").value != '') {
        side.push(document.getElementById("s1").value);
    }
    if (document.getElementById("s2").value != '') {
        side.push(document.getElementById("s2").value);
    }
    if (document.getElementById("s3").value != '') {
        side.push(document.getElementById("s3").value);
    }
    if (document.getElementById("a1").value != '') {
        angle.push(document.getElementById("a1").value);
    }
    if (document.getElementById("a2").value != '') {
        angle.push(document.getElementById("a2").value);
    }
    if (document.getElementById("a3").value != '') {
        angle.push(document.getElementById("a3").value);
    }
    var a1 = document.getElementById("s1").value;
    var b = document.getElementById("s2").value;
    var c = document.getElementById("s3").value;
    var A = document.getElementById("a1").value;
    var B = document.getElementById("a2").value;
    var C = document.getElementById("a3").value;
    var s = [];
    var a = [];
    s[0] = a1;
    s[1] = b;
    s[2] = c;
    a[0] = A;
    a[1] = B;
    a[2] = C;


    if ((side.length + angle.length) != 3) {
        alert("Please make absolutely three input")
    }
    if (side.length == 3) {

        if (parseFloat(side[0]) + parseFloat(side[1]) > parseFloat(side[2]) && parseFloat(side[1]) + parseFloat(side[2]) > parseFloat(side[0]) && parseFloat(side[0]) + parseFloat(side[2]) > parseFloat(side[1]) && parseFloat(side[0]) > 0 && parseFloat(side[1]) > 0 && parseFloat(side[2]) > 0) {
            document.getElementById("a1").value = (Math.acos((side[0] * side[0] + side[1] * side[1] - side[2] * side[2]) / (2 * side[0] * side[1]))) * 180 / Math.PI;
            document.getElementById("a2").value = (Math.acos((side[0] * side[0] - side[1] * side[1] + side[2] * side[2]) / (2 * side[0] * side[2]))) * 180 / Math.PI;
            document.getElementById("a3").value = (Math.acos((-side[0] * side[0] + side[1] * side[1] + side[2] * side[2]) / (2 * side[2] * side[1]))) * 180 / Math.PI;
        } else {
            alert("reload the site Put proper values ")
        }
    }
    if (side.length == 2 && angle.length == 1) {
        if (angle[0] >= 180 && side[0] > 0 && side[1] > 0) {
            alert("put proper values");
        } else {
            var g;
            var n;
            for (k = 0; k < s.length; k++) {
                if (s[k] == '') {
                    g = k;

                }
            }
            for (i = 0; i < a.length; i++) {
                if (a[i] != '') {

                    if (i == g) {

                        var h = Math.cos(a[i] / 180 * Math.PI);
                        // alert("h="+h);
                        var l = 2;
                        var m = 0;
                        for (k = 0; k < s.length; k++) {
                            if (s[k] != '') {
                                l = parseInt(l) * parseInt(s[k]);
                                m = parseInt(m) + parseInt(s[k] * s[k]);
                            }
                        }
                        var u = Math.sqrt(m - l * h);
                        // alert(u);

                        document.getElementById("s" + (g + 1)).value = u;
                        n = (document.getElementById("s" + (g + 1)).value) / (Math.sin(a[i] / 180 * Math.PI));
                    }
                }
            }
            for (i = 0; i < a.length; i++) {
                if (a[i] == '') {
                    document.getElementById("a" + (i + 1)).value = (Math.asin((document.getElementById("s" + (i + 1)).value) / (parseInt(n)))) * 180 / Math.PI;
                }
            }
            var o;
            var r;

            for (i = 0; i < a.length; i++) {
                if (a[i] != '') {
                    // alert("i=" + i);
                    r = i;
                }
            }
            if (r != g) {
                o = (document.getElementById("s" + (r + 1)).value) / (Math.sin((a[r]) / 180 * Math.PI));
                // alert("o=" + o);

                // alert("r=" + r);
                var q = a[r];
                // alert("q=" + q)
                for (k = 0; k < s.length; k++) {
                    if (s[k] != '' && k != r) {

                        // alert("k=" + k);
                        document.getElementById("a" + (k + 1)).value = (Math.asin((document.getElementById("s" + (k + 1)).value) / o)) * 180 / Math.PI;

                        var p = document.getElementById("a" + (k + 1)).value;
                        // alert("p=" + p)
                        var t = 180 - p - q;
                        // alert("t=" + t);
                    }
                }
                for (k = 0; k < s.length; k++) {
                    if (s[k] == '') {
                        document.getElementById("s" + (k + 1)).value = o * (Math.sin(t / 180 * Math.PI));
                        document.getElementById("a" + (k + 1)).value = t;
                    }
                }
            }

        }


    }
    var sum = 0;
    if (side.length == 1 && angle.length == 2 && side[0] > 0) {
        if ((parseFloat(angle[0]) + parseFloat(angle[1])) > 180) {
            alert("put proper values");
        } else {


            for (i = 0; i < a.length; i++) {

                if (a[i] != '') {

                    sum = parseInt(sum) + parseInt(a[i]);

                }
            }
            for (i = 0; i < a.length; i++) {
                if (a[i] == '') {
                    var e = parseInt(i) + 1;

                }

            }
            document.getElementById("a" + e).value = 180 - parseInt(sum);
            var d;
            var f;
            console.log(document.getElementById("s1").value);
            console.log(document.getElementById("s2").value);
            console.log(document.getElementById("s3").value);
            for (k = 0; k < s.length; k++) {
                if (s[k] != '') {

                    f = parseInt(k) + 1;
                    d = parseInt(s[parseInt(f) - 1]) / Math.sin((document.getElementById("a" + f).value) / 180 * Math.PI);
                    //   alert(d);

                }
            }
            for (j = 1; j <= s.length; j++) {
                if (s[j - 1] == '') {

                    document.getElementById("s" + j).value = d * (Math.sin((document.getElementById("a" + j).value) / 180 * Math.PI));
                    // alert((Math.sin((document.getElementById("a" + j).value) / 180 * Math.PI)))
                }
            }
            console.log(document.getElementById("s1").value);
            console.log(document.getElementById("s2").value);
            console.log(document.getElementById("s3").value);
        }
    }    
}

function reset(){
    alert("All Values Reset")
    let btnClear = document.querySelector('#reset');
    let inputs = document.querySelectorAll('input');
    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
    });
}