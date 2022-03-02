// added the title 
var newTitle =document.createElement('title');
var newTitleText =document.createTextNode('form-Students');

newTitle.appendChild(newTitleText)

let Contitle=document.querySelector('head')

Contitle.appendChild(newTitle)
//*************************************
//section created 
var newSection = document.createElement('section')
newSection.className='section0';
newSection.id='sectionid';

document.querySelector('body').appendChild(newSection);
//*********************** */
// created a new div 
var newDiv=document.createElement('div');
newDiv.className='container';
newDiv.id='container1';

var sec1= document.querySelector('#sectionid');
sec1.appendChild(newDiv);
newDiv.innerHTML='<h1> Student details form </h1>'
////  created a form


var form=document.createElement('form');
form.className='form_passing';
form.id='formId'
newDiv.appendChild(form);

//label*************************

var label0=document.createElement('label');
label0.className='fname';

label0.appendChild(document.createTextNode('First Name'));
form.appendChild(label0);
form.appendChild(document.createElement('br'));
//input***********************************
var input0=document.createElement('input');
input0.type='text';
input0.name='fname';
input0.id='name';

form.appendChild(input0);
form.appendChild(document.createElement('br'));
//////label_1**************

var label1=document.createElement('label');
label1.className='la_name';

label1.appendChild(document.createTextNode('Last Name'));
form.appendChild(label1);
form.appendChild(document.createElement('br'));
////input 1************
var input1=document.createElement('input');
input1.type='text';
input1.name='lname';
input1.id='Lname';

form.appendChild(input1);
form.appendChild(document.createElement('br'));
//lable 2***********************

var label2=document.createElement('label');


label2.appendChild(document.createTextNode('Email'));
form.appendChild(label2);
form.appendChild(document.createElement('br'));
//input 2********************
var input2=document.createElement('input');
input2.type='text';
input2.name='email';
input2.id='email';

form.appendChild(input2);
form.appendChild(document.createElement('br'));
///laber 3***********************

var label3=document.createElement('label');

label3.appendChild(document.createTextNode('Mobile Number '));
form.appendChild(label3);
form.appendChild(document.createElement('br'));

//input 3************************8
var input3=document.createElement('input');
input3.type='text';
input3.name='number';
input3.id='number';

form.appendChild(input3);
form.appendChild(document.createElement('br'));
//**************************************************** */
///adding button******************************
var button11=document.createElement('button')

button11.className='btn1';
button11.id='btn';

button11.appendChild(document.createTextNode('Submit'));

form.appendChild(button11);


//butoon 2

// var button12=document.createElement('button')

// button12.className='btn1';
// button12.id='btn2';

// button12.appendChild(document.createTextNode('Reset'));

// form.appendChild(button12);

/////to display created a div ***************

var div2=document.createElement('div');
div2.className='display';
div2.id='display1';

var sec1= document.querySelector('#sectionid');
sec1.appendChild(div2);
///&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&###############################
//#######################################################
let id="no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
       let Lname=document.getElementById('Lname').value;
       let mail=document.getElementById('email').value;
       let num=document.getElementById('number').value;

	if(name==''){
		document.getElementById('msg').innerHTML='Please enter your name';
	}else{
		//console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[{name,Lname,mail,num}];
				setCrudData(data);
			}else{
				arr.push({                                     
                                   name,
                                   Lname,
                                   mail,
                                   num,
                                 });
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			         arr[id].name=name;
                     arr[id].Lname=Lname;
                     arr[id].mail=mail;
                     arr[id].num=num;

			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
		document.getElementById('Lname').value='';
       	mail=document.getElementById('email').value='';
       	num=document.getElementById('number').value='';
		selectData();
	}
}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k].name} ${arr[k].Lname}</td><td>${arr[k].mail}</td><td>${arr[k].num}</td><td><a href="javascript:void(0)" 
			onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
              
	
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid].name;
       document.getElementById('Lname').value=arr[rid].Lname;
       document.getElementById('email').value=arr[rid].mail;
       document.getElementById('number').value=arr[rid].num;
	   setCrudData(arr);
	selectData();
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}

var sub=document.getElementById("btn")

sub.addEventListener('click',(e)=>{
  e.preventDefault();
  manageData();})

//********************************************************** */
///*************************************************************
/************************************************************ *


////********************************************* */

// var submitBtn=document.querySelector('#btn');
// var resetBtn=document.querySelector('#btn2');

// resetBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let name = document.getElementById('name');
//     let Lname = document.getElementById('Lname');
//     let email = document.getElementById('email');
//     let number = document.getElementById('number');
    

//     name.value=" ";
//     Lname.value=" ";
//     email.value=" ";
//     number.value=" ";
    
// })


// submitBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let name = document.getElementById('name');
//     let Lname = document.getElementById('Lname');
//     let email = document.getElementById('email');
//     let number = document.getElementById('number');

   
//     let array=[];
//    data=`${Date.now()}`
    
   
//    name = name.value;
//     array.push(name)
//    // localStorage.setItem('name', name);

//     Lname=Lname.value;
//     //localStorage.setItem('Lname',Lname)
//     array.push(Lname)
    
//     email = email.value;
//     array.push(email)
//     //localStorage.setItem('email', email);

//     number = number.value;
//     array.push(number)
//     //localStorage.setItem('number', number);
//     localStorage.setItem(data,JSON.stringify(array))
    
   
    
// })


//******************************************************************
//*******************************************************************
//*******************************************************************

///******Adding the background image*/

var body1=document.querySelector('body');
body1.style.backgroundImage="url('back.jpg')";
body1.style.backgroundSize='cover';
body1.style.backgroundRepeat='no-repeat';

//submit btn style
var formP =document.querySelector('.btn1');

formP.style.borderRadius='20px';
formP.style. padding='10px 20px';
formP.style.backgroundColor='rgb(255, 102, 102)'
formP.style.marginLeft= '2px';
formP.style.marginTop='10px';
//*******
// //reset btn
// var formP2=document.querySelector('#btn2')

// formP2.style.borderRadius='20px';
// formP2.style. padding='10px 20px';
// formP2.style.backgroundColor='rgb(255, 102, 102)'
// formP2.style.marginLeft= '20px';

//div 1

var div1=document.querySelector('.container');

div1.style.background='Linear-gradient(to top left, #142952 50%, #0f1e3e 50%)';
div1.style. marginTop= '100px';
div1.style.marginLeft= '31%';
div1.style.marginRight= '45%';
div1.style.padding='20px 40px';
div1.style.borderRadius= '10px';

//div2 
// div2.style.backgroundColor= "#111111";
// div2.style.color="white";
// div2.style.marginTop="2%";
// div2.style.marginLeft= '30%';
// div2.style.marginRight= '45%';
// div2.style.padding='20px 40px';
// div2.style.borderRadius= '10px';



//*******form */

var from2= document.querySelector('.form_passing')

from2.style.color='white';

//************h1 */

var header1=document.querySelector('h1');

header1.style.color='white';

// //********input style******/

var input11= document.querySelectorAll('input');

input11.forEach((input)=>{
       input.style.marginLeft= '10px';
       input.style.padding='5px 10px';
})
