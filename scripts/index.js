//let Lodash = require('lodash');
//let JQ=require('jquery');
let People = [
    {name: "Person#1", age: 93, YearIncome:1000},
    {name: "Person#2", age: 75,YearIncome:1400},
    {name: "Person#3", age: 57,YearIncome:10220},
    {name: "Person#4", age: 112,YearIncome:16400},
    {name: "Person#5", age: 758,YearIncome:12340}
];
let changer=0;
$("#displayAscending").on('click', function() {
    let sorted = _.orderBy(People, ['YearIncome'], ['asc']);
    render(sorted);
});

$("#displayDescending").on('click', function() {
    let sorted = _.orderBy(People, ['YearIncome'], ['desc']);
    render(sorted);
});

$("#random").on('click', function() {
    let sorted = _.shuffle(People);
    render(sorted);
});


$("#clampAndDescending").on('click', function() {

   
    let clampedAges = People.map(person => _.clamp(person.age, 30, 70));
    let PeopleCopy=People;
    for (let index = 0; index < People.length; index++) {
        PeopleCopy[index].age = clampedAges[index];
        
    }
     sortedOrdered = _.orderBy(PeopleCopy, ['age'], ['desc']);
    render(sortedOrdered);
});



$("#clampAndAscending").on('click', function() {
    let clampedAges = People.map(person => _.clamp(person.age, 30, 70));
    let PeopleCopy=People;
    for (let index = 0; index < People.length; index++) {
        PeopleCopy[index].age = clampedAges[index];
        
    }
     sortedOrdered = _.orderBy(PeopleCopy, ['age'], ['asc']);
    render(sortedOrdered);

});


$("#Merge").on('click', function() {
    let PeopleAdd = [
        {name: "Person#6", age: 93, YearIncome:1000},
        {name: "Person#7", age: 75,YearIncome:1400},
    ];
    
     Concated = _.concat(People, PeopleAdd)
    render(Concated);

});



//It will only remove first element from the original array
$("#DropFirst").on('click', function() {
     AfterDrop = _.drop(People, 1)
    render(AfterDrop);

});

$("#Union").on('click', function() {
    let U1 = [
        {name: "Person#6", age: 93, YearIncome:1000},
        {name: "Person#7", age: 75,YearIncome:1400},
    ];
    let U2 = [
        {name: "Person#8", age: 93, YearIncome:1000},
        {name: "Person#9", age: 75,YearIncome:1400},
    ];
    let U3 = [
        {name: "Person#10", age: 93, YearIncome:1000},
        {name: "Person#11", age: 75,YearIncome:1400},
    ];
    let U4 = [
        {name: "Person#12", age: 93, YearIncome:1000},
        {name: "Person#13", age: 75,YearIncome:1400},
    ];
    Union = _.union(People,U1,U2,U3,U4);
   render(Union);

});



$("#DropFirstFromTheEnd").on('click', function() {

    AfterDrop = _.dropRight(People, 1)
    render(AfterDrop);

});


$("#Slice").on('click', function() {
    AfterDrop= _.slice(People, 0, 2);
    render(AfterDrop);

});


$("#HideMod").on('click', function() {
    $("#List").empty();

});

$("#ShowOriginal").on('click', function() {

    if(changer==0){
        $("#ShowOriginal").text("Hide original")
        renderOriginal(People)
        changer=1;
    }else{
        $("#ShowOriginal").text("Show original")
Clear();
        changer=0
    }
  

});




function render(PeopleList) {
    let $list = $("#List");
    $list.empty(); // Clear existing list

    PeopleList.forEach(element => {
        const Card = `
            <div class="card">
                <h3>${element.name}</h3>
                <p>Age: ${element.age}</p>
                <p>Income: ${element.YearIncome}</p>
            </div>
        `;
        $list.append(Card);
    });
}

function Clear(){
    let $list = $("#ListOr");
    $list.empty(); 
}

function renderOriginal(PeopleList) {
    let $list = $("#ListOr");
    $list.empty(); // Clear existing list

    PeopleList.forEach(element => {
        const Card = `
            <div>
                <h3>${element.name}</h3>
                <p>Age: ${element.age}</p>
                <p>Income: ${element.YearIncome}</p>
            </div>
        `;
        $list.append(Card);
    });
}