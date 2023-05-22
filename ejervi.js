const leer=require('prompt-sync')()
const Escribir=console
class ejercicios{
    sumanumero2(){
		console.log("Presentar la suma de 2 numeros")
	let n1,n2,res 
	n1=0;n2=0;res=0
	n1=parseInt (leer( " digite numero1: "))
	 n2=parseInt (leer(" digite numero2: "))
	 res = n1+n2
	console.log (" La suma de los 2 numeros es : " , res)
    }
sumanumero3(){
	console.log("presentar la suma de 3 numeros")
    let n1,n2,n3,res 
	n1=0;n2=0;n3=0;res=0
	n1=parseInt (leer( " digite numero1: "))
	 n2=parseInt (leer(" digite numero2: "))
     n3=parseInt (leer(" digite numero3: "))
	 res = n1+n2+n3
	console.log (" La suma de los 3 numeros es : " , res)
}
cantidadsegundos(){
	console.log("Calcular la cantidad de segundos que estan incluidos en el numero de horas,minutos y segundos por el usuario")
let h,m,s,hs,ms,ts 
	h=parseInt(leer( " Ingrese las horas "))
	m=parseInt(leer( " Ingrese los minutos "))
	s=parseInt(leer( " Ingrese los segundos "))
	hs = h*3600
	ms = m*60
	ts = hs+ms+s
	console.log( " La cantidad de segundos son : " , ts)
}
porcentajeHM(){
	console.log("Un maestro desea saber que porcentaje de hombre y que porcentaje de mujeres hay en un grupo de estudiantes")
    let nh,nm,te,ph,pm   
	nh=parseInt(leer( " Ingrese el numero de hombres "))
	nm=parseInt(leer( " Ingrese el numero de mujeres "))
	te= nh + nm
	ph = nh / te * 100
	pm = nm / te * 100
	console.log( " El porcentaje de hombres es: " , ph , "%")
	console.log( " El porcentaje de mujeres es: " , pm , "%")
}
tiempocalificaciones(){
	console.log( " Un profesor prepara 3 cuestionarios para una evaluacion final:A, B y C.")
	console.log( " Se sabe que se tarda 5 minutos en revisar el cuestionario A,8 en revisar el cuestionario B y 6 en el C ")
	console.log( " La cantidad de examenes de cada tipo se entran x teclado.")
	console.log( "¿ Cuantas horas y cuantos minutos se tardara en revisar todas las evaluaciones?")
    let CA,CB,CC,TA,TB,TC,TT,H,M 
	CA=parseInt(leer( " Ingrese la cantidad de cuestionario A "))
	CB=parseInt(leer( " Ingrese la cantidad de cuestionario B "))
	CC=parseInt(leer(" Ingrese la cantidad de cuestionario C "))
	TA = CA * 5
	TB = CB * 8
	TC = CC * 6
	TT = TA + TB + TC 
	H= Math.trunc(TT/60)
	M=TT % 60
	console.log( "Se tarda ",H, " Horas  "),"y",( M, " Minutos ")
}
precioapagar(){
	console.log( " Una tienda ofrece um descuento del 15% sobre el total de la compra." )
	console.log(  "y un cliente desea saber cuanto debera pagar finalmente por su compra")
    let pre,des,pf 
	pre=parseInt(leer( " Ingrese el pecio a pagar "))
	des = pre * .15
	pf = pre - des
	console.log( " El precio a pagar es de: " , pf)
}
calificacionfinal(){
	console.log( " Un alumno desea saber cual sera su calificacion final en la materia de algoritmo. ")
	console.log( " Dicha calificacion se compone de los siguientes porcentajes:")
	console.log( "55% del promedio de sus tres calificaciones parciales.")
	console.log( "30% de la calificacion del examen final.")
	console.log( "15% de la calificacion de un trabajo final.")
    let n1,n2,n3,prom,ne,nef,nt,ntf,tn
	n1=parseInt(leer( " Ingrese nota 1 " ))
	n2=parseInt(leer( "Ingrese nota 2 "))
    n3=parseInt(leer("Ingrese nota 3"))
	prom = (n1+n2+n3)/3
	nt = prom*.55
	ne=parseInt(leer( " Ingrese la nota del examen "))
	nef = ne*.30
	nt=parseInt(leer( " Ingrese la nota del trabajo "))
	ntf = nt*.15
	tn = nt+nef+ntf
	console.log( " La calificacion final es: " , tn)
}
numparoimpar(){
	console.log("Ingrese un numero y reportar si es par o impar")
let num 
num=parseInt(leer("ingrese un numero"))
if (num%2===0){
    console.log( " es un numero par ")
}
else{  
    console.log( " es un numero impar ")
}
}
aprobarmateria(){
	console.log( " Determinar si un alumno aprueba o reprueba un curso,sabiendo que aprobara si su promedio de,")
	console.log (" 3 calificaciones es mayor a 70,caso contrario reprueba.")
    let n1,n2,n3,prom 
	n1=parseInt(leer( "Ingrese nota 1"))
    n2=parseInt(leer("Ingrese nota 2"))
    n3=parseInt(leer("Ingrese nota 3"))
	prom = (n1+n2+n3)/3
	if (prom >= 70){
		console.log( " El alumno esta aprobado con: ",prom)
    }
	else{
		console.log( " El alumno esta desaprobado con: ",prom)
    }
}
desctotal(){
	console.log( " En un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100.")
	console.log(" ¿Cual sera la cantidad que pagara una persona por su compra?")
    let precio,des
	precio=parseInt(leer("Ingrese el precio de la compra"))
	if( precio>100){
		des = precio*0.20
	}
	else{
		if(precio<100){
        des=0+precio 
	}
}
	console.log( ' El precio a pagar es: ',des)
}
resulnum(){
	console.log( " Leer 2 numeros si son iguales que los multiplique,si el primero es mayor,")
	console.log( " que el segundo que los reste y si no que los sume")
	let n1,n2,res 
	n1=parseInt(leer("digite numero1"))
	n2=parseInt(leer("digite numero2"))
	if (n1=n1){ 
	res=n1*n2
	}
	else{
		if ( n1>n2){
			res=n1-n2
		}
	
		else{
			res=n1+n2
		}
	}
	console.log( " Su resultado es: ",res)
}
 numma(){
	console.log("Leer 3 numeros diferentes e imprimir el numero mayor de los 3")
	let n1,n2,n3,mayor 
	n1=parseInt(leer("Ingrese numero 1 "))
	n2=parseInt(leer("Ingrese numero 2 "))
	n3=parseInt(leer("Ingrese numero 3 "))
	if( n1>n2 && n1>n3){
		mayor=n1
	}
	else if( n2>n1 && n2>n3){
			mayor=n2
		}
		
		else{
			mayor=n3
		}
		console.log("numero mayor es: " ,mayor)
}
 numcorri(){
	console.log("Imprimir por pantalla los numeros del 1 al 10")
	for(let i=1;i<=10;i++){
		console.log( i )
	}
}
 numcorri2(){
	console.log("Imprimir por pantalla los numeros del 1 al 10")
	let i=1
	while (i<=10){
	console.log(i)
	i++
	}
}
 sumanum(){
	console.log("Calcular la suma de N primeros numeros")
	let num,sum 
	num=parseInt(leer("ingrese cantidad de numero "))
	sum=0
	for( let i=1;i<= num;i++){
		sum=sum+i
	}
	console.log( " La suma es " ,sum)
}
 parimpar(){
	console.log("Se desea calcular la suma de los pares e impares entre el 1 al 50")
	let spar,simp
	spar=0
	simp=0
	for( let i=2;i <= 49;i++){
		if( i % 2==0){
		spar=spar+i
		}
		else {
			simp=simp+i
		}
		}
console.log( " La suma de los pares son: ",spar)
console.log( " La suma de los impares son: ",simp)	
}
 npns(){
	console.log("Leer 10 numeros e imprimir cuantos son positivos,cuantos negativos y cuantos neutros")
	let num,cp,cn,cneu 
	cp=0 
	cn=0
	cneu=0
	for( let i=1;i<= 10;i++){
		num=parseInt(leer ("Digite numero "))
		if( num>0 ){
			cp++
		}
		else if(num==0){
				cneu++
		}
			else{
				cn++
 }
}
    console.log( " Los numeros NEUTROS son: ",cneu)
	console.log(" Los numeros POSITIVOS son: ",cp)
	console.log( " Los numeros NEGATIVOS son: ",cn)
}
 califica(){
	console.log("Realizar un algoritmo para calcular la calificacion promedio y la calificacion mas bajade todo el grupo")
	let sum,ntb,ntp,nt
	sum=0
	ntb=99999
	for( let i=1; i<= 10;i++){
		nt=parseInt(leer("Digite la calificacion"))
		sum=sum+nt
		if( nt< ntb){
			ntb=nt
		}
 }
 ntp=sum/10
 console.log( "Clificacion promedio es: ",ntp)
 console.log(  "La calificacion mas baja es: ",ntb)
}
kilomanzana(){
let preki,ki,prei,des,pref  
preki=parseInt(leer("ingrese precio del kilo de manzana"))
ki=parseInt(leer("cantidad de kilos comprado"))
prei = preki + ki
if (ki>=0 && ki<=2){
	des = 0
}
else if (ki>=2.01 && ki<=5){
		des = prei*0.1
}
	else if( ki>=5.01 && ki<=10){
			des = prei*0.15
	}
		else{
			des = prei*0.2
		}
	pref = prei-des
	console.log( 'El precio a pagar es: ',pref)
}
 sum1(){
	console.log("el numero se va a sumar por 20 ")
	let a,b,c,res 
	a=10
	b=10
	c=parseInt(leer("digite numero"))
	res = a+b+c
	console.log( " El resultado de la suma es : " , res)
}
 cambiovariable(){
	console.log("Hacer un programa para intercambiar el valor de 2 variables")
	let a,b,aux 
	a=parseInt(leer("Ingrese el valor de A "))
	b=parseInt(leer("Ingrese el valor de B "))
	aux=a
	a=b
	b=aux
	console.log( " El valor de A ahora es : " , a)
	console.log( " El valor de B ahora es : " , b)
}
solulogica(){
	console.log("determinar la solucion logica de la siguiente operacion")
let a,b,res  
a=parseInt(leer("Ingrese valor de A "))
b=parseInt(leer("Ingrese valor de B "))
res = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b)
console.log( " El resultado es : " , res)
}
exprealgorit(){
	console.log("Escribir la siguiente expresion en forma de expresion algoritmica" )
	let a,b,c,res
	a=parseInt(leer("Ingrese valor de A "))
	b=parseInt(leer("Ingrese valor de B "))
	c=parseInt(leer("Ingrese valor de C "))
	res=(-b +Math.sqrt(b**2 - 4*a*c))/(2*a)
	console.log( "El resultado es : " , res)
}
aniver(){
	console.log("Ingrese aniversario de cada decada hasta los 60")
	let dec
	dec=parseInt(leer())
	switch (dec){
	case 10:
		console.log("bodas de hojalata")
		break
		case 20:
			console.log(" bodas de porcelana")
			break
			case 30:
				console.log("bodas de perlas")
				break
				case 40:
					console.log("bodas de ruby")
					break
					case 50:
						console.log("bodas de oro")
						break
						case 60:
							console.log("bodas de diamantes")
							break
							default:
							console.log("decada no existente")
	}
}
  sumatorian(){
	console.log( "Calcular la siguiente sumatoria de los N elementos ")
	let ne,i,sum 
	ne=parseInt(leer("Digite el numero a sumar "))
	i=1
	sum=0
	while (i<=ne){
		sum=sum+i**2
		i=i+1
	}
	console.log( " La suma de los numero elevado al cuadrado es: ",sum)
}
diasemana(){
console.log( "Elaborar un programa que se muestre los dias de las semanas")
	console.log( " cuando ingrese los siete primeros numeros")
	let dia
	dia=parseInt(leer("Digite un numero del dia de la semana(1-7):"))
	switch (dia){
	case 1:
		console.log("LUNES")
		break
		case 2:
			console.log(" MARTES")
			break
			case 3:
				console.log("MIERCOLES")
				break
				case 4:
					console.log("JUEVES")
					break
					case 5:
						console.log("VIERNES")
						break
						case 6:
							console.log("SABADO")
							break
							case 7:
								console.log("DOMINGO")
								break
							default:
							console.log("Error, no existe dia para ser numero")
}
}
}
let ejer1 =new ejercicios()
ejer1.sumanumero2()
let ejer2 =new ejercicios()
ejer2.sumanumero3()
let ejer3 =new ejercicios()
ejer3.cantidadsegundos()
let ejer4=new ejercicios()
ejer4.porcentajeHM()
let ejer5 =new ejercicios()
ejer5.tiempocalificaciones()
let ejer6 =new ejercicios()
ejer6.precioapagar()
let ejer7 =new ejercicios()
ejer7.calificacionfinal()
let ejer8 =new ejercicios()
ejer8.numparoimpar()
let ejer9 =new ejercicios()
ejer9.aprobarmateria()
let ejer10 =new ejercicios()
ejer10.desctotal()
let ejer11=new ejercicios()
ejer11.resulnum()
let ejer12 =new ejercicios()
ejer12.numma()
let ejer13 =new ejercicios()
ejer13.numcorri()
ejer14 =new ejercicios()
ejer14.numcorri2()
ejer15 = new ejercicios()
ejer15.sumanum()
ejer16 =new ejercicios()
ejer16.parimpar()
ejer17 = new ejercicios()
ejer17.npns()
let ejer18 =new ejercicios()
ejer18.califica()
ejer19 =new ejercicios()
ejer19.kilomanzana()
let ejer20 =new ejercicios
ejer20.sum1()
let ejer21 =new ejercicios()
ejer21.cambiovariable()
let ejer22= new ejercicios()
ejer22.solulogica()
let ejer23 =new ejercicios()
ejer23.exprealgorit()
let ejer24 =new ejercicios()
ejer24.aniver()
let ejer25=new ejercicios()
ejer25.sumatorian()
let ejer26 =new ejercicios()
ejer26.diasemana()