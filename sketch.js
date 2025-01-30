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
// SUPRISES
  {
    name: "If you could be any animal, what would you be?",
    class: "Surprise",
    difficulty: "FUN",
    unit: "Surprise",
    hint: "Woof Woof!",
    definition: ""
  },

// CLASS 01
  {
    name: "Constructive & Destructive Interference",
    class: "01: What is Sound",
    difficulty: 01,
    unit: "Audio",
    hint: "Think about waves as pressure differentials",
    definition: ""
  },
   {
    name: "Formula for Calculating the Wavelength of a Sound Wave with a Given Frequency",
    class: "01",
    difficulty: 02,
    unit: "Audio",
    hint: "Sound travels a certain distance in a second, how do we split that up to see the length of one wave?",
    definition: ""
  },
  {
    name: "The Doppler Effect",
    class: "01: What is Sound",
    difficulty: 03,
    unit: "Audio",
    hint: "Is our experience of sound relative. Think about the train example from class.",
    definition: ""
  },
  {
    name: "Harmonic Series & Timbre",
    class: "01: What is Sound",
    difficulty: 03,
    unit: "Audio",
    hint: "This is what we are mixing in the Operator in Ableton. What is the fundamental frequency?",
    definition: ""
  },
  {
    name: "Additive Synthesis",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "Adding Sine waves together, think about overtones and harmonics.",
    definition: ""
  },
  {
    name: "Resonant Frequency",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "What does the shape of a room of a box have to do with how it effects the air in it?",
    definition: ""
  },
  {
    name: "Frequency Modulation Synthesis (FM Synthesis)",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "Carrier and Modulator.",
    definition: ""
  },
  {
    name: "The Speed of Sound in Air and Different Mediums",
    class: "01: What is Sound",
    difficulty: 01,
    unit: "Audio",
    hint: "Think of water vs Hot air vs Cold Air.",
    definition: ""
  },
  
  //// CLASS 02
    {
    name: "Tonotopicity",
    class: "02: How do we Hear",
    difficulty: 01,
    unit: "Audio",
    hint: "Topographic and TONAL",
    definition: ""
  },
  {
    name: "Critical Bands / Cochlear Bands",
    class: "02: How do we Hear",
    difficulty: 04,
    unit: "Audio",
    hint: "Consonance and Dissonance in hearing.",
    definition: ""
  },
  {
    name: "Basillar Membrane",
    class: "02: How do we Hear",
    difficulty: 03,
    unit: "Audio",
    hint: "This will eventually stimulate the inner ear hair cells.",
    definition: ""
  },
  {
    name: "The Cochlea",
    class: "02: How do we Hear",
    difficulty: 02,
    unit: "Audio",
    hint: "Inner ear, think Tonotopicity",
    definition: ""
  },
  {
    name: "Limits of Audio Frequency Perception in Humans",
    class: "02: How do we Hear",
    difficulty: 02,
    unit: "Audio",
    hint: "The low frequency is 20hz",
    definition: ""
  },
  {
    name: "What is the Resolution of our Pitch Perception?",
    class: "02: How do we Hear",
    difficulty: 03,
    unit: "Audio",
    hint: "We have 3500 inner ear hair cells, and can hear from 20 to 20k hz.",
    definition: ""
  },
  {
    name: "Analogue to Digital Processing of our ear.",
    class: "02: How do we Hear",
    difficulty: 03,
    unit: "Audio",
    hint: "Continous Wave to 1 or 0",
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
let currentSubject = 0
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
    currentSubject = subjects[int(random(subjects.length))]
    subjectHolder.innerHTML = ` 
    ${currentSubject.name}
    <br>
    <p style="font-size: 14px"> 
    Unit: ${currentSubject.unit} <br>
    Class ${currentSubject.class}<br>
    Difficulty: ${currentSubject.difficulty}</p>
    `
    if(currentSubject.unit == 'Audio'){
    subjectHolder.style.background = AudioColorList[currentSubject.difficulty - 1]
    subjectHolder.style.color = '#1f1f1f'
    }else if (currentSubject.unit == 'Surprise'){
      subjectHolder.style.background = `linear-gradient( #ff3030, #cdff45 )`
      subjectHolder.style.color = '#ffffff'
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
  if(currentSubject != 0){
    hintDiv.innerHTML = ` <p style="font-size:14px; padding: 20px;"><i>${currentSubject.hint}</i></p>`
  }
    hintDiv.style.backgroundColor = '#fcfe7d'
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

