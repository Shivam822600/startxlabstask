 <script>

function isEvenOrOdd(L, R)
{
	let oddCount = Math.floor((R - L) / 2);

	if (R % 2 == 1 || L % 2 == 1)
		oddCount++;

	

	if (oddCount % 2 == 0)
		return "Even";
	else
		return "Odd";
}



	let L = 5, R = 15;

	document.write(isEvenOrOdd(L, R));


</script>