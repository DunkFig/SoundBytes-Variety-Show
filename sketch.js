let students = [
  "Kobie",
  "Ella",
  "Eli",
  "Sasha",
  "Ephram",
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
  "Ky"
]
let subjects = [
  {
    name: "Constructive & Destructive Interference",
    class: "01: What is Sound",
    difficulty: 01,
    unit: "Audio",
    hint: "",
    definition: ""
  },
   {
    name: "Formula for Calculating the Wavelength of a Sound Wave with a Given Frequency",
    class: "01",
    difficulty: 02,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "The Doppler Effect",
    class: "01: What is Sound",
    difficulty: 03,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Harmonic Series & Timbre",
    class: "01: What is Sound",
    difficulty: 03,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Additive Synthesis",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Resonant Frequency",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Frequency Modulation Synthesis (FM Synthesis)",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "The Speed of Sound in Air and Different Mediums",
    class: "01: What is Sound",
    difficulty: 01,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  
  //// CLASS 02
    {
    name: "Tonotopicity",
    class: "02: How do we Hear",
    difficulty: 01,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Critical Bands / Cochlear Bands",
    class: "02: How do we Hear",
    difficulty: 04,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Basillar Membrane",
    class: "02: How do we Hear",
    difficulty: 02,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "The Cochlea",
    class: "02: How do we Hear",
    difficulty: 01,
    unit: "Audio",
    hint: "",
    definition: ""
  },
  {
    name: "Limits of Audio Frequency Perception in Humans",
    class: "02: How do we Hear",
    difficulty: 01,
    unit: "Audio",
    hint: "",
    definition: ""
  }
  
] 

//Audio Colors based on Difficulty
let AudioColorList = 
[
'#B1D488',
'#97B574',
'#7A925D',
'#687D50',
]

let StudentColorList = 
[
  '#FFFD98',
  '#BDE4A7',
  '#B3D2B2',
  '#9FBBCC',
  '#7A9CC6'

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
let currentSubject 
let currentStudent

let subjectHolder = document.getElementById("SubjectHolder")
let studentHolder = document.getElementById("studentHolder")
let hintDiv = document.getElementById("hintDiv")

function setup(){
synth = new Tone.Synth().toDestination();
synthVic = new Tone.Synth().toDestination();
studentSynth = new Tone.Synth().toDestination();

}


function draw(){
  millisecond = millis()
  
//Logic for Subject Spin
  if(millisecond > startTime && SpinCount < SpinTotal){
    // console.log(subjects[int(random(subjects.length))].name)
    currentSubject = subjects[int(random(subjects.length))]
    subjectHolder.innerHTML = ` 
    ${currentSubject.name}
    <br>
    <p style="font-size: 14px"> 
    Unit: ${currentSubject.unit} <br>
    Class ${currentSubject.class}<br>
    Difficulty: ${currentSubject.difficulty}</p>
    
    `
    subjectHolder.style.backgroundColor = AudioColorList[currentSubject.difficulty - 1]
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
    currentStudent = students[int(random(students.length))]
    studentHolder.style.backgroundColor = StudentColorList[int(random(0,  StudentColorList.length))]
    studentHolder.innerHTML = `<br> <br>  ${currentStudent}`
    studentSynth.triggerAttackRelease(random(300, 800), "16n");
    StudentCount ++
  }
  
  //Logic to end Student Spin
  if(StudentCount >= StudentTotal){
    StudentSpinRoll = false
  }
  
}

hintDiv.addEventListener("mouseover", () =>{
    hintDiv.innerHTML = currentSubject.hint
    hintDiv.style.backgroundColor = '#e3e643'
})

hintDiv.addEventListener("mouseout", () =>{
  hintDiv.innerHTML = '<br><i>hint</i>'
  hintDiv.style.backgroundColor = '#e3e643'
})



// Function to Spin Wheel
function spinWheel(){
  
  //Reset All Subject Spin Variables
  startTime = millis() + 500
  Interval = random(50, 100)
  SpinCount = 0
  SpinTotal = int(random(1, 20))
  PlayedWin = false

}

