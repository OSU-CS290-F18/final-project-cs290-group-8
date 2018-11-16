google.charts.load('current', {packages:['corechart','line']});
google.charts.setOnLoadCallback(Graph);

function Graph()
{
	//makes data table you can add args that represent cols and rows
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('number','date');
	dataTable.addColumn('number','Bench Press');
	//manually adding rows to test graph but should use object
	dataTable.addRows([[1,100],[3,400],[5,600]]);
	var lineGraph = new google.visualization.LineChart(document.querySelector(".graph"));

lineGraph.draw(dataTable); 
}
function percentMaxWeight(input , weight ,parentElement)
{
	var percentage;

	percentage = input.value * weight.value /100;
	console.log("percent max", percentage);
	addSpan(parentElement,percentage);
	
}
function percentButtonHandler()
{
	console.log('percent Handler');
	var percentInput = document.getElementById("percentInput");
	var benchPercent = document.getElementById("benchPercent");
	var squatPercent = document.getElementById("squatPercent");
	var deadliftPercent = document.getElementById("deadliftPercent");
	var benchParent = document.querySelector("div.percentBench");
	var squatParent = document.querySelector("div.percentSquat");
	var deadliftParent = document.querySelector("div.percentDeadlift");
	if(
		   	percentInput.value == "" ||
		   	benchPercent.value == "" ||
		   	squatPercent.value == "" ||
		   	deadliftPercent.value == ""
	  )
	{
		alert("Please Fill In All of the Fields");
	}	
	else
	{
		percentMaxWeight(percentInput,benchPercent,benchParent);
		percentMaxWeight(percentInput,squatPercent,squatParent);
		percentMaxWeight(percentInput,deadliftPercent,deadliftParent);
	}

}

function maxButtonHandler()
{
	var deadliftWeight = document.getElementById('deadliftWeight');
	var benchWeight = document.getElementById('benchWeight');
	var squatWeight = document.getElementById('squatWeight');
	var deadliftRep = document.getElementById('deadliftRep');
	var benchRep = document.getElementById('benchRep');
	var squatRep = document.getElementById('squatRep');
	var parentBench = document.querySelector('div.bench'); 
	var parentDeadlift = document.querySelector('div.deadlift'); 
	var parentSquat = document.querySelector('div.squat'); 
	if( deadliftWeight.value == "" || deadliftRep.value == "" ||
			benchWeight.value == "" || benchRep.value == "" ||
			squatWeight.value == "" || squatRep.value == "" 
	  )
	{
		alert("Need to Fill in All Fields");
	}
	else
	{
		getMax(benchWeight,benchRep, parentBench);
	getMax(deadliftWeight,deadliftRep, parentDeadlift);
	getMax(squatWeight,squatRep, parentSquat);
	}

}

function getMax(weight , reps , parentTransfer)
{
	var max;
	if (Number(reps.value) >= '10')
	{
		max = Number(weight.value) * 100.0 / 75.0;  
		console.log("max weight",max);
	}
	if (Number(reps.value) <= '9' && Number(reps.value) >= '6')
	{
		max = Number(weight.value) * 100.0 / 83.0; 
		console.log("max weight 83 ",max);
	}
	if (Number(reps.value) <= '5' && Number(reps.value) >= '4')
	{
		max = Number(weight.value) * 100.0 / 87.0; 
		console.log("max weight 87 ",max);
	}

	if (Number(reps.value) == '3')
	{
		max = Number(weight.value) * 100.0 / 90.0; 
		console.log("max weight 90 ",max);
	}
	if (Number(reps.value) == '2')
	{
		max = Number(weight.value) * 100.0 / 95.0; 
		console.log("max weight 95 ",max);
	}
	if (Number(reps.value) == '1')
	{
		max = Number(weight.value); 
		console.log("max weight 100 ",max);
	}
	addSpan(parentTransfer,max);
}

function addSpan(parentStart , value)
{
	console.log("adding a span");
	var check = parentStart.querySelector("span");
	if(check == null)
	{	
		var label = document.createElement('span');
		label.textContent = "Value is:   ";
		parentStart.appendChild(label);
		var element = document.createElement('span');
		element.textContent = value;
		label.appendChild(element);
	}
	else
	{
		check.querySelector('span').textContent = value;
	}
}
function addTable(exercise, reps, sets)
{
	console.log("Add Table");
}
function liftButtonHandler()
{
	console.log("liftButton Handler");
	var exercise = document.getElementById('exer-input');
	var sets = document.getElementById('set-input');
	var reps = document.getElementById('rep-input');
	if(
			exercise.value == "" ||
			sets.value == "" ||
			reps.value == ""
	  )
	{
		alert("Please Fill Out All Fields");
	}	
	else
	{
		addTable(exercise,sets,reps);
	}
}
var button = document.getElementById('maxbutton');
button.addEventListener('click',maxButtonHandler);

var percentButton = document.getElementById('percentButton');
percentButton.addEventListener('click',percentButtonHandler);

var liftButton = document.getElementById('exerciseButton');
liftButton.addEventListener('click',liftButtonHandler);




