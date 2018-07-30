var tablero;
var jugador;

function nuevoJuego(){
	tablero = ["","","","","","","","",""];
	jugador = "X";
	imprimirTablero();
	document.getElementById("estado").innerHTML = "Turno del jugador X";
}

function juega(id){
	if(tablero[id]===""){
		document.getElementById(id).innerHTML = jugador;
		if(jugador === "X"){
			document.getElementById(id).style.color = "#5499C7";
		}
		else{
			document.getElementById(id).style.color = "#85929E";	
		}
		tablero[id] = jugador;

		if(victoria(id)){
			document.getElementById("estado").innerHTML="Victoria jugador - " + jugador;
			tablero = ["-","-","-","-","-","-","-","-","-"];
		}
		else if(empate()){
			document.getElementById("estado").innerHTML="El juego termina en empate";			
		}
		else{
			cambiarJugador();
			document.getElementById("estado").innerHTML = "Turno del jugador " + jugador;
		}
	}
}

function cambiarJugador(){
	if(jugador === "X"){
		jugador = "O";
	}
	else{
		jugador = "X";
	}
}

function imprimirTablero(){
	for(var i=0; i<9; i++){
		document.getElementById(i).innerHTML = tablero[i];
	}	
}

function empate(){
	for(var i=0; i<9; i++){
		if(tablero[i]===""){
			return false;
		}
	}
	return true;
}


function victoria(td_id){

  switch (td_id) {
    case "0":
      if(rowUp()){
        
        return true;
      }
      else if(columnLeft()){        
        return true;
      }
      else if(extremoCero()){        
        return true;
      }
      break;

    case "1":
      if(rowUp()){        
        return true;
      }
      else if(columnCenter()){        
        return true;
      }
      break;

    case "2":
      if(rowUp()){        
        return true;
      }
      else if(columnRight()){        
        return true;
      }
      else if(extremoDos()){        
        return true;
      }
      break;

    case "3":
      if(rowCenter()){        
        return true;
      }
      else if(columnLeft()){        
        return true;
      }
      break;

    case "4":
      if(rowCenter()){        
        return true;
      }
      else if(columnCenter()){        
        return true;
      }
      else if(extremoCero()){        
        return true;
      }
      else if (extremoDos()){        
        return true;
      }
      break;

    case "5":
      if(rowCenter()){        
        return true;
      }
      else if(columnRight()){        
        return true;
      }
      break;

    case "6":
      if(rowDown()){        
        return true;
      }
      else if(columnLeft()){        
        return true;
      }
      else if(extremoDos()){        
        return true;
      }
      break;

    case "7":
      if(rowDown()){        
        return true;
      }
      else if(columnCenter()){        
        return true;
      }
      break;

    case "8":
      if(rowDown()){        
        return true;
      }
      else if(columnRight()){        
        return true;
      }
      else if(extremoCero()){        
        return true;
      }
      break;
  }
  return false;
}

function rowUp(){
  if(tablero[0] === tablero[1] && tablero[1] === tablero[2]){
    return true;
  }
  return false;
}

function rowCenter(){
  if(tablero[3] === tablero[4] && tablero[4] === tablero[5]){
    return true;
  }
  return false;
}

function rowDown(){
  if(tablero[6] === tablero[7] && tablero[7] === tablero[8]){
    return true;
  }
  return false;
}

function columnLeft(){
  if(tablero[0] === tablero[3] && tablero[3] === tablero[6]){
    return true;
  }
  return false;
}

function columnCenter(){
  if(tablero[1] === tablero[4] && tablero[4] === tablero[7]){
    return true;
  }
  return false;
}

function columnRight(){
  if(tablero[2] === tablero[5] && tablero[5] === tablero[8]){
    return true;
  }
  return false;
}

function extremoCero(){
  if(tablero[0] === tablero[4] && tablero[4] === tablero[8]){
    return true;
  }
  return false;
}

function extremoDos(){
  if(tablero[2] === tablero[4] && tablero[4] === tablero[6]){
    return true;
  }
  return false;
}