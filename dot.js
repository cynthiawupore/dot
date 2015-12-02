// toExponential 保留小数点( 0-20 bit )
	document.writeln(Math.PI.toExponential(0)); //3e+0 
	document.writeln(Math.PI.toExponential(2)); //3.14e+0
	document.writeln(Math.PI.toExponential(4)); //3.1416e+0
	document.writeln(Math.PI.toExponential(7)); //3.1415927e+0

// toFixed 换成十进制后 保留小数点( 0-20 bit ) 
    document.writeln(Math.PI.toFixed(0)); 
	document.writeln(Math.PI.toFixed(2)); 
	document.writeln(Math.PI.toFixed(4)); 
	document.writeln(Math.PI.toFixed(7)); //3.1415927

// toPrecision 换成十进制后 保留小数点( 1-21 bit ) 
	document.writeln(Math.PI.toPrecision(1)); //3 
	document.writeln(Math.PI.toPrecision(2)); //3.1 
	document.writeln(Math.PI.toPrecision(4)); //3.142 
	document.writeln(Math.PI.toPrecision(7)); //3.141593

// toString(radix) radix是基数 默认为10 换成十进制后 保留小数点( 2-36 bit ) 
	document.writeln(Math.PI.toString(2)); //11.001001000011111101101010100010001000010110100011
	document.writeln(Math.PI.toString(8)); //3.1103755242102643
	document.writeln(Math.PI.toString(16)); //3.243f6a8885a3 
	document.writeln(Math.PI.toString()); //3.141592653589793