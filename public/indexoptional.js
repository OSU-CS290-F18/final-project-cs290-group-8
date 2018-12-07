google.charts.load('current', {packages:['corechart','line']});
google.charts.setOnLoadCallback(Graph);
function createArray()
{
	var array = [100];
	var exercise = document.querySelectorAll('#liftName');
	var weight = document.querySelectorAll('#weightPounds');
	console.log("in creatarray",exercise);
}

var i = 0;
var m = 0;
var k = 0;
var arr  = [];
var arr2  = [];
var arr3  = [];


function Graph(i,m,k,exercise)
{
	if(i === undefined || exercise.value === "Bench Press")
	{
	var graphpos = { vals: [[0,0]] };
	for (var j = 1; j < i+1; j++) {
	graphpos.vals.push([j, arr[j-1]]);
	}
	var datapoints = JSON.stringify(graphpos.vals);
	//makes data table you can add args that represent cols and rows
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('number','Reps');
	dataTable.addColumn('number','Bench Press');
	//manually adding rows to test graph but should use object

	console.log("json parsing to graph",JSON.parse(datapoints));
	dataTable.addRows(JSON.parse(datapoints));
	var lineGraph = new google.visualization.LineChart(document.getElementById("benchGraph"));
	var options = {
		hAxis: {
			title: 'Bench Press'
		},
		vAxis: {
			title: 'Reps'
		}
	};
	lineGraph.draw(dataTable,options);
}
if(m === undefined || exercise.value === "Deadlift"){
	var graphpos2 = { vals: [[0,0]] };
	for (var j = 1; j < m+1; j++) {
	graphpos2.vals.push([j, arr2[j-1]]);
	}
	var datapoints = JSON.stringify(graphpos2.vals);
	var array = createArray();
	//makes data table you can add args that represent cols and rows
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('number','Reps');
	dataTable.addColumn('number','Deadlift');
	//manually adding rows to test graph but should use object

	console.log("json parsing to graph",JSON.parse(datapoints));
	dataTable.addRows(JSON.parse(datapoints));
	var lineGraph = new google.visualization.LineChart(document.getElementById("deadliftGraph"));
	var options = {
		hAxis: {
			title: 'Deadlift'
		},
		vAxis: {
			title: 'Reps'
		}
	};
	lineGraph.draw(dataTable,options);
}
if(k === undefined || exercise.value === "Squat"){
	var graphpos3 = { vals: [[0,0]] };
	for (var j = 1; j < k+1; j++) {
	graphpos3.vals.push([j, arr3[j-1]]);
	}
	var datapoints = JSON.stringify(graphpos3.vals);
	var array = createArray();
	//makes data table you can add args that represent cols and rows
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('number','Reps');
	dataTable.addColumn('number','Squat');
	//manually adding rows to test graph but should use object

	console.log("json parsing to graph",JSON.parse(datapoints));
	dataTable.addRows(JSON.parse(datapoints));
	var lineGraph = new google.visualization.LineChart(document.getElementById("squatGraph"));
	var options = {
		hAxis: {
			title: 'Squat'
		},
		vAxis: {
			title: 'Reps'
		}
	};
	lineGraph.draw(dataTable,options);
}


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

function addTable(exercise, reps, sets, weight)
{
	console.log("in add table e r s w",exercise, reps, sets, weight);
	var tr = document.createElement('tr');
	var newExercise = document.createElement('th');
	var newReps = document.createElement('th');
	var newSets = document.createElement('th');
	var newWeight = document.createElement('th');
	var name1 = "Exercise: ";
	var name2 = "Sets: ";
	var name3 = "Reps: ";
	var name4 = "Weight: ";
	newExercise.textContent = (name1 + exercise.value);
	newReps.textContent = (name4 + reps.value);
	newSets.textContent = (name3 + sets.value);
	newWeight.textContent = (name2 + weight.value);
	newExercise.setAttribute('id','liftName');
	newWeight.setAttribute('id','weightPounds');
	newSets.setAttribute('id','amountSets');
	newReps.setAttribute('id','amountReps');
	var tablememe = document.getElementById("postBody");
	tablememe.appendChild(tr);
	tr.appendChild(newExercise);
	tr.appendChild(newReps);
	tr.appendChild(newWeight);
	tr.appendChild(newSets);
}

function liftButtonHandler()
{
	var exercise = document.getElementById('exer-input');
	var sets = document.getElementById('set-input');
	var reps = document.getElementById('rep-input');
	var weight = document.getElementById('weight-input');
	console.log("liftButton Handler e s r w", exercise.value,sets.value,reps.value,weight.value);
	if(
			exercise.value == "" ||
			sets.value == "" ||
			reps.value == ""||
			weight.value == ""
	  )
	{
		alert("Please Fill Out All Fields");
	}
	else
	{
		var request = new XMLHttpRequest();
		var reqUrl= window.location.pathname +"/person";
		request.open('POST',reqUrl);
		var mail = {
			"personID":window.location.pathname,
				"exercise" : exercise.value,
				"weight": weight.value,
				"sets" : sets.value,
				"reps" : reps.value
		};
		console.log("mail",mail);
		var requestBody = JSON.stringify(mail);
		console.log("req url", reqUrl);
		request.setRequestHeader('Content-Type','application/json');
		request.send(requestBody);
		request.addEventListener('load',function(event)
				{
					if (event.target.status !== 200)
		{
			alert("Didnt save excerise into Mongo");
		}
				});

	console.log("liftButton Handler e s r w", exercise.value,sets.value,reps.value,weight.value);

		addTable(exercise,weight,reps,sets);

		if(exercise.value === "Bench Press")
		{
			i++;
			arr.push(parseInt(reps.value));
		}
		else if(exercise.value === "Deadlift")
		{
			m++;
			arr2.push(parseInt(reps.value));
		}
		else if(exercise.value === "Squat")
		{
			k++;
			arr3.push(parseInt(reps.value));
		}
		Graph(i,m,k,exercise);
	}
}
var button = document.getElementById('maxbutton');
button.addEventListener('click',maxButtonHandler);

var percentButton = document.getElementById('percentButton');
percentButton.addEventListener('click',percentButtonHandler);

var liftButton = document.getElementById('exerciseButton');
liftButton.addEventListener('click',liftButtonHandler);
