// JavaScript Document

var dom =[{}];
var par = document.getElementsByTagName('body');
dom=generateJson(par[0],dom);
console.log(dom);
//var json =JSON.stringify(dom);
//console.log(json); 
function generateJson(parent, object){
	var children = parent.childNodes;
	var attr=parent.attributes;
	var cnt=0;
	object["tag"]=parent.tagName;
	if(attr!= undefined){
		for(var i=0;i<attr.length;i++){
			if(object[attr[i]] != 'wrappedJSObject'){
				object[attr[i].nodeName]=attr[i].nodeValue;
			}
		}
	}
	if(children.length>0){
		object['children']=[];
		for(var i=0;i<children.length;i++){
			if (children[i].tagName!=undefined && children[i].tagName!='SCRIPT' && children[i].tagName!='LINK'){
				object["children"].push({});
				generateJson(children[i],object['children'][cnt]);
				cnt++;
			}
		}
	}
	return object;
}
	
/*	
function generateJson(parent){
	//var elms = document.getElementById(parent);
	//console.log(elms);
	var ele=parent.childNodes;
	console.log(ele);
	if(ele!=undefined){
		for(var i=0;i<ele.length;i++){
			//console.log(ele[i].nodevalue);
			dom[j].tag=ele[i].tagName;
			dom[j].class=ele[i].className();
			console.log('hellow');
			console.log(ele[i].className());
		
			if(ele[i].tagName=='DIV'){
				console.log('hellow world');
				generate(ele[i]);
			}
		}
	}
}	
*/