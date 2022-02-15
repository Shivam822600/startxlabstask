<script>


    function ConvertSectoDay(n) {
        var day =parseInt( n / (24 * 3600));

        n = n % (24 * 3600);
        var hour = parseInt(n / 3600);

        n %= 3600;
        var minutes = n / 60;

        n %= 60;
        var seconds = n;

        document.write(
                day + " " + "days " + hour + " " + "hours "
                + minutes.toFixed() + " " + "minutes " +
                seconds.toFixed() + " " + "seconds ");
    }


        var n = 129600;
        ConvertSectoDay(n);

</script>