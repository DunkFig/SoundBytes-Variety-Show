let students = [
  "Kobie",
  "Ella",
  "Eli",
  "Sasha",
  "Efram",
  "Charlotte",
  "George",
  "Marcelo",
  "Findlay",
  "Sangmin",
  "Lu",
  "Elleyse",
  "Ryder",
  "Case",
  "Alia",
  "Pheonix",
  "Catalina",
  "Ky",
  "Ryan"
]


//Audio Colors based on Difficulty
let AudioColorList = 
[
  "#D5F9D5", // Very light green (easiest)
  "#A9EBA9", // Light pastel green (easy)
  "#7DC47D", // Medium green (moderate)
  "#4F9B4F"  // Deeper green (hardest)
]


let StudentColorList = 
[
  "#D5F0FA", // Very light blue
  "#A9DAF2", // Light pastel blue
  "#7CBFEB", // Medium, vibrant blue
  "#4F9AE4"  // Deeper, rich blue
]

let millisecond
let startTime
let Interval = 50
let SpinCount = 0
let SpinTotal = 10
let synth
let synthVic
let studentSynth
let PlayedWin = false
let StudentSpinRoll = false
let StudentCount = 0
let StudentTotal = 18
let currentSubject = 0
let currentStudent
let StudentIndex
let SubjectIndex

let subjectHolder = document.getElementById("SubjectHolder")
let studentHolder = document.getElementById("studentHolder")
let hintDiv = document.getElementById("hintDiv")
let answerDiv = document.getElementById("answerDiv")

function setup(){
synth = new Tone.Synth().toDestination();
synthVic = new Tone.Synth().toDestination();
studentSynth = new Tone.Synth().toDestination();

}


function draw(){
  millisecond = millis()
  
//Logic for Subject Spin
  if(millisecond > startTime && SpinCount < SpinTotal){
    SubjectIndex = int(random(subjects.length))
    currentSubject = subjects[SubjectIndex]

    subjectHolder.innerHTML = ` 
    ${currentSubject.name}
    <br>
    <p style="font-size: 14px"> 
    Unit: ${currentSubject.unit} <br>
    Class ${currentSubject.class}<br>
    Difficulty: ${currentSubject.difficulty}</p>
    `

    answerDiv.innerHTML = `
    <div style="font-size: 24px;">${currentSubject.name}</div>
    <br>
    <br>
    <p style="font-size: 16px; text-align:left;">${currentSubject.definition}</p>
    
    `



    if(currentSubject.unit == 'Audio')
    {
      subjectHolder.style.background = AudioColorList[currentSubject.difficulty - 1]
      subjectHolder.style.color = '#1f1f1f'
    }
    else if (currentSubject.unit == 'Surprise')
    {
      subjectHolder.style.background = `linear-gradient( #ff3030, #cdff45 )`
      subjectHolder.style.color = '#ffffff'
    }
    else if (currentSubject.unit == 'Event')
    {
      subjectHolder.style.backgroundImage = "url('Images/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__08__CollectionOfCloudsAgainstABlueSky-8cae9f3109d14dcf98d9facc5775222f.jpg')"
      subjectHolder.style.color = '#000000'
    }
    else if (currentSubject.unit == 'Existential')
    {
      subjectHolder.style.backgroundImage = "url('Images/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg')"
      subjectHolder.style.color = '#ccff66'
    }

    synth.triggerAttackRelease("C4", "8n");
    startTime += Interval
    Interval *= 1.2
    SpinCount ++
  }

//Logic to end Subject Spin
  if(SpinCount >= SpinTotal && PlayedWin == false){
    synthVic.triggerAttackRelease("G3",  "8n");
    PlayedWin = true
    StudentSpinRoll = true
    StudentCount = 0
  }

  //Logic for Student Spin
  if(StudentSpinRoll && StudentCount < StudentTotal){
    // console.log(students[int(random(students.length))])
    StudentIndex = int(random(students.length))
    currentStudent = students[StudentIndex]
    studentHolder.style.backgroundColor = StudentColorList[int(random(0,  StudentColorList.length))]
    studentHolder.innerHTML = `<br> <br> <br>  ${currentStudent}`
    studentSynth.triggerAttackRelease(random(300, 800), "16n");
    StudentCount ++
  }
  
  //Logic to end Student Spin
  if(StudentCount >= StudentTotal){
    
    if(StudentSpinRoll){
    console.log(students[StudentIndex] + " REMOVED.")
    students.splice(StudentIndex, 1)
    
    console.log(subjects[SubjectIndex].name + " REMOVED")
    subjects.splice(SubjectIndex, 1)

    }
    StudentSpinRoll = false
  }
  
}

//Hint MouseOver
hintDiv.addEventListener("mouseover", () =>{
  if(currentSubject != 0){
    hintDiv.innerHTML = ` <br><br><i>${currentSubject.hint}</i>`
    hintDiv.style.fontSize = '14px'
  }
    hintDiv.style.backgroundColor = '#fcfe7d'
})
//Hint MouseOut
hintDiv.addEventListener("mouseout", () =>{
  hintDiv.innerHTML = '<br><i>hint</i>'
  hintDiv.style.fontSize = '24px'
  hintDiv.style.backgroundColor = '#e3e643'
})



// Function to Spin Wheel
function spinWheel(){
  
  //Reset All Subject Spin Variables
  startTime = millis() + 500
  Interval = random(50, 100)
  SpinCount = 0
  SpinTotal = int(random(5, 18))
  PlayedWin = false

}
