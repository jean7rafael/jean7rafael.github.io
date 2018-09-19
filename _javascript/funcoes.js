	var w = screen.width;

/*Animação do inicio*/
function mudaInicio(n){
	var inc = document.getElementById('inicio');
	var im = document.getElementById('logo');
	var bt = document.getElementById('botao');
	var txtseatel = document.getElementById('textseatel');
	
	var o = 1; var x; var y; var a = 0; var t = 10; var count = 0;
	var b; var src; var back; var val; var dist; var text; var texttop; var titl; var textsize;
	
	var info = [['botin1', 'logo_int', 'int', 'entre no site', 20, "A SEATEL, Semana de Atualização em Engenharia Elétrica, é um evento que está sendo organizado pelas entidades do curso de Engenharia Elétrica da UFPR - EMJEL E PET – cujo objetivo é desenvolver o conhecimento técnico e da área de graduação por meio de minicursos, cursos, visitas técnicas e palestras.", 25, "o que é a seatel?", "200%", "45%"],['botin0', 'inicio/logo2', 'int2', 'vamos fazer juntos?', 10, "Muitos devem estar se perguntando o motivo da frase 'Vamos fazer juntos?' estar presente em todas as publicações e artes que envolvem a SEATEL 2016. Os organizadores da SEATEL 2016, preocupados com gerar impacto social, decidiram abraçar uma causa: a NOSSA causa.</br>Nesse ano, o valor de participação será reduzido para que você possa fazer a doação de 1kg de alimento ao realizar a inscrição. Todos os alimentos arrecadados serão doados para o Hospital Pequeno Príncipe! Ou seja, ao fazer parte da SEATEL 2016, você também faz parte de uma geração que se importa em ajudar, que abraça a causa humana. Então, vamos fazer juntos?", 18, "causa social", "190%", "65%"]];
	
	if(!n){
		t += 13.75;
	}
	
	document.getElementById("botin0").disabled = true;
	document.getElementById("botin1").disabled = true;
	
	document.getElementById("botin"+n).src = '_imagens/inicio/bot2.png';
	document.getElementById(info[n][0]).src = '_imagens/inicio/bot1.png';
	
	x = setInterval(opMenos, 20);	
	
	/*Funções*/
	function opMenos(){
		if(count >= 25){
			count = 0;			

			if(w < 480){
				info[0][4] = 10; info[0][6] = 18; info[0][8] = '30pt';
				info[1][4] = 5;	info[1][6] = 14; info[1][8] = '22pt';
				bt.style.width = info[n][9];
			}				
			
			txtseatel.style.top = info[n][6] + "%";		
			document.getElementById('tit').innerHTML = info[n][7];
			txtseatel.style.fontSize = info[n][8];
			txtseatel.innerHTML = info[n][5];
			document.getElementById('pt8').style.backgroundImage = "url('../_imagens/inicio/fundo_" + info[n][2] + ".png')";
			inc.style.backgroundImage = "url('../_imagens/inicio/fundo_" + info[n][2] + ".png')";
			bt.value = info[n][3];
			im.src = '_imagens/' + info[n][1] + '.png';			

		
			y = setInterval(opMais, 20);
			
			clearInterval(x);
		}
		else{
			o -= 0.02;
			count ++;
			
			inc.style.opacity = o;
			im.style.opacity = o;
			bt.style.opacity = o;
		}
	}
	
	function opMais(){
		if(count >= 25){
			document.getElementById(info[n][0]).disabled = false;
			
			clearInterval(y);
		}
		else{
			t += 0.25;
			o += 0.02;
			count++;
		
			inc.style.opacity = o;
			im.style.top = t + "%";
			bt.style.top = (t + info[n][4]) + "%";
			im.style.opacity = o;
			bt.style.opacity = o;
		}		
	}
}

/*Animação do menu*/
function mudaEstilo(){
	var i = document.getElementById('menu').style.left;
	var menu; var botao; var site; var back; var coor; var log; var log2; var j1; var j2;
	
	if(w < 480){
		j1 = 70
		j2 = 1.5;
		j3 = 2;
	}else{
		j1 = 80;
		j2 = 1;
		j3 = 3;
	}
	
	if(i == j1 + '%'){
		
		menu = j1;
		botao = 102 - j1;
		site = -10;
		b = j3 + (10 * j2);
		coor = 5 + (10 * j2);
		log = 12;
		log2 = 11.3;
		
		setInterval(saiMenu, 20);
	}else if(i == "100%"){
		
		menu = 100;
		botao = 2;
		site = 0;
		b = j3;
		coor = 5;
		log = 2;
		log2 = 2.2;
		
		var f = setInterval(entraMenu, 20);
	}
	
	function entraMenu(){
		if(menu == j1){		
			clearInterval(f);
		}else{
			botao += j2;
			site -= 0.5;
			menu -= j2;
			b += j2/2;
			coor += j2/2;
			log += 0.5;
			log2 += 0.455;
			
			
			var divs = document.getElementsByClassName("site");	
			var logseatel = document.getElementsByClassName('logo_seatel');
			var logseatel2 = document.getElementsByClassName('logo_seatel2');
			document.getElementById('menu').style.left = menu + '%';
			document.getElementById('botmenu').style.right = botao + '%';
			document.getElementById('coordn').style.right = 'calc(' + coor + '% + 41px';
			document.getElementById('botup').style.right = b + '%';
			document.getElementById('botdown').style.right = botao + '%';
			
			var u = 0;
			for(u; u < logseatel2.length; u++){
				logseatel2[u].style.left = log2 + '%';
			}
			
			var h = 0;
			for(h; h < logseatel.length; h++){
				logseatel[h].style.left = log + '%';
			}
			
			var v = 0;
			for(v; v < divs.length; v++){
				divs[v].style.left = site + '%';
			}
		}
	}
	
	function saiMenu(){
		if(menu == 100){
			document.getElementById('botmenu').disabled = false;	
			
			clearInterval();
		}else{
			botao -= j2;
			site += 0.5;
			menu += j2;
			b -= j2/2;
			coor -= j2/2;
			log -= 0.5;
			log2 -= 0.455;

			var divs = document.getElementsByClassName('site');
			var logseatel = document.getElementsByClassName('logo_seatel');
			var logseatel2 = document.getElementsByClassName('logo_seatel2');
			document.getElementById('menu').style.left = menu + '%';
			document.getElementById('botmenu').style.right = botao + '%';
			document.getElementById('botup').style.right = b + '%';		
			document.getElementById('coordn').style.right = 'calc(' + coor + '% + 41px';
			document.getElementById('botdown').style.right = botao + '%';
	
			var u = 0;
			for(u; u < logseatel2.length; u++){
				logseatel2[u].style.left = log2 + '%';
			}
			
			var h = 0;
			for(h; h < logseatel.length; h++){
				logseatel[h].style.left = log + '%';
			}
			
			var v = 0;
			for(v; v < divs.length; v++){
				divs[v].style.left = site + '%';
			}
		}
	}
}


/*Animação do slider da programação*/
function trocaImg1(direcao, im1){
	document.getElementById('sesq1').disabled= true;
	document.getElementById('sdir1').disabled= true;
 
	var im0 = im1 - 1;
	var im2 = im1 + 1;
	var im3 = im1 + 2;
	
	var sorce = document.getElementById('c' + im1).src;
	var nsorce = sorce.replace('circl2', 'circl1');
	
	if(im0 == -1){
		im0 = 3;
	}else if(im2 == 4){
		im2 = 0;
		im3 = 1;
	}else if(im3 == 4){
		im3 = 0;
	}
	
	var eleme = document.getElementById('prog' + im0);
	var elemc = document.getElementById('prog' + im1);
	var elemd = document.getElementById('prog' + im2);
	var elemh1 = document.getElementById('prog' + im3);
	
	var i = 0;
	var cen = [-410, 700, 0, 420];
	var esq = [-1148, 495, 57, 305];
	var dir = [533, 495, 57, 305];

	if(direcao){
		var hid1 = 1271;
		
			document.getElementById('c' + im1).src = nsorce;			
			document.getElementById('c' + im2).src = sorce;
		
		var f = setInterval(moveEsq, 16);
	}
	else{
		var hid1 = -1886;	
		
			document.getElementById('c' + im1).src = nsorce;			
			document.getElementById('c' + im0).src = sorce;

		var f = setInterval(moveDir, 16);
	}
	
	/*FUNÇÕES*/
	/*Movimento para a esquerda*/
	function moveEsq(){
		if(i == 50){		
			document.getElementById('sesq1').onclick = function(){
				trocaImg1(0, im2);
			};
			document.getElementById('sdir1').onclick = function() {
				trocaImg1(1, im2);
			};			

			document.getElementById('sesq1').disabled= false;
			document.getElementById('sdir1').disabled= false;			
	
			clearInterval(f);
		}else{
			i++;
			
			/*centro*/
			cen[3] -= 2.3;
			cen[2] += 1.14;
			cen[1] -= 4.1;
			cen[0] -= 14.76;

			elemc.style.left = 'calc(46% + ' + cen[0] + 'px)';
			elemc.style.width = cen[1] + 'px';
			elemc.style.top = cen[2] + 'px';
			elemc.style.height = cen[3] + 'px';
			
			/*direita*/
			dir[3] += 2.3;
			dir[2] -= 1.14;
			dir[1] += 4.1;
			dir[0] -= 18.86;
			
			elemd.style.left = 'calc(46% + ' + dir[0] + 'px)';
			elemd.style.width = dir[1] + 'px';
			elemd.style.top = dir[2] + 'px';
			elemd.style.height = dir[3] + 'px';
			
			/*esquerda*/
			esq[0] -= 14.76;
			
			eleme.style.left = 'calc(46% + ' + esq[0] + 'px)';
			
			/*escondida*/
			hid1 -= 14.76;
			
			elemh1.style.left = 'calc(46% + ' + hid1 + 'px)';		
		}
	}

	/*Movimento para a direita*/	
	function moveDir(){
		if(i == 50){
			document.getElementById('sesq1').onclick = function() {
				trocaImg1(0, im0);
			};			
			document.getElementById('sdir1').onclick = function() {
				trocaImg1(1, im0);
			};					
		
			document.getElementById('sesq1').disabled= false;
			document.getElementById('sdir1').disabled= false;			
		
			clearInterval(f);
		}else{
			i++;
			
			/*centro*/
			cen[3] -= 2.3;
			cen[2] += 1.14;
			cen[1] -= 4.1;
			cen[0] += 18.86;

			elemc.style.left = 'calc(46% + ' + cen[0] + 'px)';
			elemc.style.width = cen[1] + 'px';
			elemc.style.top = cen[2] + 'px';
			elemc.style.height = cen[3] + 'px';
			
			/*esquerda*/
			esq[3] += 2.3;
			esq[2] -= 1.14;
			esq[1] += 4.1;
			esq[0] += 14.76;
			
			eleme.style.left = 'calc(46% + ' + esq[0] + 'px)';
			eleme.style.width = esq[1] + 'px';
			eleme.style.top = esq[2] + 'px';
			eleme.style.height = esq[3] + 'px';
			
			/*direita*/
			dir[0] += 14.76;
			
			elemd.style.left = 'calc(46% + ' + dir[0] + 'px)';
			
			/*escondida*/
			hid1 += 14.76;
			
			elemh1.style.left = 'calc(46% + ' + hid1 + 'px)';			
		}
	}
}

/*Mapa das programações*/
function revMapa(lin, ev){
	document.getElementById(ev).innerHTML = '<iframe src="https://www.google.com/maps/' + lin +'" width="600px" height="347px"></iframe>';
}

/*Animações do slider das equipes1*/
function trocaImg2(dir, n, num){
	document.getElementById('sesq2').disabled= true;
	document.getElementById('sdir2').disabled= true;
	
	var cargos = [['coordenador geral','assessor'],['coordenadora','assessora','assessora'],['coordenador','assessor','assessor','assessor','assessor','assessora'],['coordenadora','assessor','assessor','assessor','assessora'],['coordenador','assessor','assessor','assessor','assessora'],['coordenador','assessor','assessora']];
	var nomes = [['BRUNO TARUI','HENRIQUE RANGEL'],['VERIDIANA G. VON PARASKI','ILANA FIRST','RENATA BUSATO'],['VICTOR GABRIEL LOPES','DANIEL GARBI','EDUARDO ESMANHOTTO','VANDIR JÚNIOR','VINÍCIUS BARTOLOMEU','ALESSANDRA ANAMI'],['THAÍS LAGE', 'LEONARDO NATAN BERGAMINI','JEAN RAFAEL MARTINS','JÚLIO SOLER','CAROLINE BAGATIN'],['MAURO OBLADEN','CAIO NATALINO','GILBERTO KOZECHEN','RENATO TREVIZAN','ANDRESSA BASSETTI'],['RAFAEL VIDAL','LUIGI FACCIN','AMANDA JANETE']];
	var elem1 = document.getElementById('foto');
	var elem2 = document.getElementById('esc');
	var cent = 80;

	var max = nomes[n-1].length;
	
	if(dir == 1){		
		num ++;	
		if(num == max){
			num = 0;
		}
		document.getElementById('nome').innerHTML = nomes[n-1][num];
		document.getElementById('cargo').innerHTML = cargos[n-1][num];	
		
		elem2.src = '_imagens/equipe/fotos/foto' + n + '.' + num + '.jpg';
		var hid = -80;
		
		var f = setInterval(moveEsq1, 1);
		
	}else{
		num --;
		if(num == -1){
			num = max - 1;
		}
		document.getElementById('nome').innerHTML = nomes[n-1][num];
		document.getElementById('cargo').innerHTML = cargos[n-1][num];
		
		elem2.src = '_imagens/equipe/fotos/foto' + n + '.' + num + '.jpg';
		var hid = 240;
	
		var f = setInterval(moveDir1, 1);
	}
	
	/*FUNÇÕES*/
	/*Mocimento para a direita*/
	function moveDir1(){
		if(cent == -80){
			elem2.id = 'foto';
			elem1.id = 'esc';

	document.getElementById("sdir2").onclick = function() {
		trocaImg2(1, n, num);
	};	
	document.getElementById("sesq2").onclick = function() {
		trocaImg2(0, n, num);
	};	
			
			document.getElementById('sesq2').disabled = false;
			document.getElementById('sdir2').disabled = false;	
			
			clearInterval(f);
		}else{	
		
			elem1.style.left = 'calc(50% - ' + cent + 'px)';
			elem2.style.left = 'calc(50% - ' + hid + 'px)';
			cent -= 1;
			hid -= 1;
		}
	}
	
	/*Movimento para a esquerda*/
	function moveEsq1(){
		if(cent == 240){		
			elem2.id = 'foto';
			elem1.id = 'esc';	
			
	document.getElementById("sdir2").onclick = function() {
		trocaImg2(1, n, num);
	};	
	document.getElementById("sesq2").onclick = function() {
		trocaImg2(0, n, num);
	};
			
			document.getElementById('sesq2').disabled = false;
			document.getElementById('sdir2').disabled = false;
			
			clearInterval(f);
		}else{
			
			elem1.style.left = 'calc(50% - ' + cent + 'px)';
			elem2.style.left = 'calc(50% - ' + hid + 'px)';			
			cent += 1;	
			hid += 1;			
		}
	}
}

/*Animações do slider das equipes2*/
function trocaSlider(n){
	document.getElementById('botup').disabled= true;
	document.getElementById('sesq2').disabled= true;
	document.getElementById('sdir2').disabled= true;
	
	var masc = document.getElementById('mascara');
	var fot = document.getElementById('foto');
	
	/*Matrizes*/
	var cores = ['rgb(0, 112, 224)','rgb(112, 224,0)','rgb(255, 0, 0)','rgb(0, 112, 224)','rgb(112, 224,0)','rgb(255, 0, 0)'];
	var nomes = ['BRUNO TARUI','VERIDIANA G. VON PARASKI','VICTOR LOPES GABRIEL','THAÍS LAGE','MAURO OBLADEN','RAFAEL VIDAL'];
	var cargos = ['coordenador geral','coordenadora','coordenador','coordenadora','coordenador','coordenador'];
	var coordenadorias = ['geral','negócios','conteúdo','divulgação','financeiro','infraestrutura'];	
	
	var c; var a = n - 1;
	n ++;
	if(n == (coordenadorias.length) + 1){
		n = 1;
	}

	if(n > 3){
		c = n - 3;
	}else{
		c = n;
	}
	
	/*Clonando o slider*/
	var antigo = document.getElementById('slider2');
    clone = antigo.cloneNode(true);
	clone.id = 'novo';
	document.getElementById('pt7').appendChild(clone);
	var nov = document.getElementById('novo');
	
	/*Mudando CSS*/
	nov.style.height = '100%';
	nov.style.top = '-100%';
	nov.style.borderRight = '300px solid ' + cores[a];
	nov.style.backgroundColor = cores[a];
	antigo.style.borderColor =  cores[n - 1];
	antigo.style.backgroundColor = cores[n - 1];
	antigo.style.top = '100%';
	
	masc.src = '_imagens/equipe/mask' + c + '.png';
	fot.src = '_imagens/equipe/fotos/foto' + n + '.0.jpg';
	
	document.getElementById('nome').innerHTML = nomes[n-1];
	document.getElementById('cargo').innerHTML = cargos[n-1];
	document.getElementById('coordn').innerHTML = coordenadorias[n-1];
	
	var x; var y; var k = 1;
	var t = 0;
	var lim = -20;
	var l = setInterval(sobeDivs, 20);
	
	setTimeout(function(){

		x = setInterval(sobeDivs, 5);
	}, 400);

	setTimeout(function(){

		y = setInterval(sobeDivs, 5);
	}, 650);
	
	/*Funções*/
	function sobeDivs(){
		if(t <= lim){
			if(lim == -20){
				lim = -70;
				clearInterval(l);
				
			}else if(lim == -70){
				lim = -100;
				clearInterval(x);
			
			}else if(lim == -100){	
				document.getElementById('pt7').removeChild(nov);
				
		document.getElementById("botup").onclick = function() {
			trocaSlider(n);
		};			
		document.getElementById("sdir2").onclick = function() {
			trocaImg2(1, n, 0);
		};	
		document.getElementById("sesq2").onclick = function() {
			trocaImg2(0, n, 0);
		};
			
			document.getElementById('botup').disabled= false;
			document.getElementById('sesq2').disabled= false;
			document.getElementById('sdir2').disabled= false;
		
				clearInterval(y);
			}
		}else{
			if(lim == -100){
				t -= k;
				
				antigo.style.top = 100 + t + '%';
				nov.style.top = -100 + t + '%';	

				k = k * 0.968;
			}else{
				t--;
				
				antigo.style.top = 100 + t + '%';
				nov.style.top = -100 + t + '%';
			}
		}
	}
}

/*Mapas*/
