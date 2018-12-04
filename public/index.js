
google.charts.load('current', {packages:['corechart','line']});
google.charts.setOnLoadCallback(Graph);
function createArray()
{
	var array = [100];
	var exercise = document.querySelectorAll('#liftName');
	var weight = document.querySelectorAll('#weightPounds');
	console.log("in creatarray",exercise);
}


/*object added to graph*/
var thing2 = { vals: [[1, 3],[2, 7],[3, 5],[4, 8]]}; //diz is an object
console.log("thing2", thing2); //printing because idk
var stringyly = JSON.stringify(thing2.vals); //your making this a string or something and storing it in stringyly
console.log("thing2 parsed", stringyly); // printing the stringyly stuff

function Graph()
{
	var array = createArray();
	//makes data table you can add args that represent cols and rows
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('number','date');
	dataTable.addColumn('number','Bench Press');
	//manually adding rows to test graph but should use object

	dataTable.addRows(JSON.parse(stringyly)); //adding to EPIC graph!
	var lineGraph = new google.visualization.LineChart(document.getElementById("benchGraph"));
	var options = {
		hAxis: {
			title: 'Weight'
		},
		vAxis: {
			title: 'Date'
		}
	};

lineGraph.draw(dataTable,options);
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
	var tr = document.createElement('tr');
	var newExercise = document.createElement('th');
	var newReps = document.createElement('th');
	var newSets = document.createElement('th');
	var newWeight = document.createElement('th');
	var name1 = "Exercise: ";
	var name2 = "Weight: ";
	var name3 = "Sets: ";
	var name4 = "Reps: ";
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
	console.log("liftButton Handler");
	var exercise = document.getElementById('exer-input');
	var sets = document.getElementById('set-input');
	var reps = document.getElementById('rep-input');
	var weight = document.getElementById('weight-input');
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
		addTable(exercise,sets,reps,weight);
	}
}
var button = document.getElementById('maxbutton');
button.addEventListener('click',maxButtonHandler);

var percentButton = document.getElementById('percentButton');
percentButton.addEventListener('click',percentButtonHandler);

var liftButton = document.getElementById('exerciseButton');
liftButton.addEventListener('click',liftButtonHandler);
