/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{

	let vNombre;
	let vCategoria;
	let vPrecio;
	let vRespuesta;
	let vAcuMayor = 0;

	do
	{
	  vNombre = prompt("Ingrese Nombre del articulo");
	  vCategoria = prompt("Ingrese categoria del articulo: almacen, lacteos, bebidas o limpieza", "almacen, lacteos, bebidas o limpieza");
	  vPrecio = parseInt(prompt("Ingrese el precio del articulo"));
	  vRespuesta = prompt("Desea ingresar mas articulos? s/n","s/n")
	  if(vPrecio>vAcuMayor){
	    vAcuMayor = vAcuMayor+ vPrecio;
		vNombre = vNombre;
	} if (vCategoria== "lacteos" && vPrecio ){

	}
	
	}while(vRespuesta== "s");

	

	document.write("El articulo con mayor precio es "+vNombre+"<br>");
}