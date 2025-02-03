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
  {
    name: "What is the weirdest dream you've ever had?",
    class: "Surprise",
    difficulty: "FUN",
    unit: "Surprise",
    hint: "Zzzzzzz Zzzzzzz",
    definition: ""
  },
  {
    name: "Whats your dream Career / Job / Practice?",
    class: "Surprise",
    difficulty: "FUN",
    unit: "Surprise",
    hint: "Oh No!",
    definition: ""
  },
// EXISTENTIAL QUESTION
  {
    name: "How has digital Recording changed the world for better and for worse?",
    class: "Existential",
    difficulty: "Existential",
    unit: "Existential",
    hint: "Woaaa!",
    definition: ""
  },


// EVENTS
  {
    name: "Everyone permanently Change Seats, sit next to someone you don't know. We'll, talk for 1 minute.",
    class: "Event",
    difficulty: "Event",
    unit: "Event",
    hint: "Howdy!",
    definition: ""
  },

// CLASS 01
  {
    name: "Constructive & Destructive Interference",
    class: "01: What is Sound",
    difficulty: 01,
    unit: "Audio",
    hint: "Think about waves as pressure differentials",
    definition: "When two sound waves meet, their pressure variations can add together (constructive interference) or cancel each other out (destructive interference). Constructive interference happens when the peaks of the waves align, boosting amplitude. Destructive interference occurs when a peak aligns with a trough, reducing or silencing the wave. This is the same technique which is used in noise canceling headphones, the same soundwave is produced and the phase is reversed, allowing destructive interference to silence the sound around you."
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
    definition: "The Doppler Effect is the change in perceived pitch when the source of a sound moves relative to the listener. As the source approaches, waves get compressed, increasing the frequency and making the pitch seem higher. As it moves away, the waves are stretched, lowering the frequency and making the pitch seem lower. Think about the change in sound as an ambulance passes by, or a plane flies over head."
  },
  {
    name: "Harmonic Series & Timbre",
    class: "01: What is Sound",
    difficulty: 03,
    unit: "Audio",
    hint: "This is what we are mixing in the Operator in Ableton. What is the fundamental frequency?",
    definition: "A harmonic series is a set of frequencies that are integer multiples of a fundamental frequency. These harmonics shape an instrument or sound source’s unique timbre (tone color) because each sound contains a different balance of harmonics. The fundamental frequency determines the pitch, while the overtones define the sound’s character. For instance any instrument can play a fundamental frequency of 440 hz (A4), but depending on the materials and shape of the instrument the harmonics will be mixed differently."
  },
  {
    name: "Additive Synthesis",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "Adding Sine waves together, think about overtones and harmonics.",
    definition: "Additive synthesis is a technique of creating complex sounds by adding together multiple sine waves (or other simple waveforms) at different frequencies (the fundamental plus harmonics). By adjusting the amplitude and frequency of each component, you can sculpt a wide variety of timbres. Often this is how instruments are digitally simulated - the mixing of the fundamental frequency and harmonics are mimiced to get a similar waveform."
  },
  {
    name: "Resonant Frequency",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "What does the shape of a room of a box have to do with how it effects the air in it?",
    definition: "A resonant frequency is the natural frequency at which a system (like a room, musical instrument, or enclosure) most efficiently vibrates. When sound waves at or near this frequency enter the space, they are reinforced, causing certain pitches or frequencies to sound louder and more pronounced. Think about the Alvin Lucier Piece we looked at, the shape of any room will always reinforce certain frequencies."
  },
  {
    name: "Frequency Modulation Synthesis (FM Synthesis)",
    class: "01: What is Sound",
    difficulty: 02,
    unit: "Audio",
    hint: "Carrier and Modulator.",
    definition: "FM Synthesis creates new timbres by using one waveform (the modulator) to periodically change the frequency of another waveform (the carrier). The resulting sound contains additional frequencies not present in the original signals, often producing complex and evolving tones widely used in electronic music. Remember the example we used in class where we use a 1hz modulator to influence our carrier wave, and had our pitch oscillate up and down once per second."
  },
  {
    name: "The Speed of Sound in Air and Different Mediums",
    class: "01: What is Sound",
    difficulty: 01,
    unit: "Audio",
    hint: "Think of water vs Hot air vs Cold Air.",
    definition: "Sound travels at different speeds depending on the medium. In air at room temperature, it’s roughly 343 m/s. In water, it’s much faster (around 1482 m/s) because molecules are closer together. Temperature also affects speed: hotter air allows sound to move faster, while colder air slows it down."
  },
  
  //// CLASS 02
    {
    name: "Tonotopicity",
    class: "02: How do we Hear",
    difficulty: 01,
    unit: "Audio",
    hint: "Topographic and TONAL",
    definition: "Tonotopicity is the way the auditory system is organized so that different frequencies (tones) are processed in different physical locations. The inner ear and parts of the brain map low frequencies at one end of a structure and high frequencies at the other, creating a “tonal map.” Remember lower frequencies are parsed closer to the opening of the cochlea, and higher pitch sounds further down the spiral."
  },
  {
    name: "Critical Bands / Cochlear Bands",
    class: "02: How do we Hear",
    difficulty: 04,
    unit: "Audio",
    hint: "Consonance and Dissonance in hearing.",
    definition: "Critical bands refer to the frequency ranges over which the ear integrates sound energy on the basilar membrane. Sounds that fall within the same critical band can interfere or mask each other, influencing our perception of consonance (pleasantness) and dissonance (harshness). Remember that these 'Critical Bands' are different sizes throughout the cohlea. Take a look at the picture below for a better understanding: <br><br><br><br><div style='width:100%; text-align:center'><img src='Images/placecodingb.jpg'> </div>"
  },
  {
    name: "Basillar Membrane",
    class: "02: How do we Hear",
    difficulty: 03,
    unit: "Audio",
    hint: "This will eventually stimulate the inner ear hair cells.",
    definition: "The basilar membrane is the key structure within the cochlea that vibrates in response to sound waves. Different parts of the membrane respond to different frequencies: high frequencies near the base, and low frequencies near the apex. These vibrations stimulate hair cells that convert mechanical movement into nerve signals."
  },
  {
    name: "The Cochlea",
    class: "02: How do we Hear",
    difficulty: 02,
    unit: "Audio",
    hint: "Inner ear, think Tonotopicity",
    definition: "The cochlea is the spiral-shaped, fluid-filled part of the inner ear responsible for converting vibrations into neural signals. It contains the basilar membrane and hair cells, which separate different frequencies along its length—another manifestation of tonotopicity."
  },
  {
    name: "Limits of Audio Frequency Perception in Humans",
    class: "02: How do we Hear",
    difficulty: 02,
    unit: "Audio",
    hint: "The low frequency is 20hz",
    definition: "Humans with typical hearing can detect sounds from about 20 Hz (low pitch) to 20 kHz (high pitch). This range can vary by individual and tends to narrow with age or hearing damage."
  },
  {
    name: "What is the Resolution of our Pitch Perception?",
    class: "02: How do we Hear",
    difficulty: 03,
    unit: "Audio",
    hint: "We have 3500 inner ear hair cells, and can hear from 20 to 20k hz.",
    definition: "We have 3500 inner ear hair cells, and can hear from 20 to 20k hz. We have an approximate resolution for pitch around 3.6hz, however this changes in different areas of the ear based on where our hair cells are, and the amount of influence they have on eachother in that area."
  },
  {
    name: "Analogue to Digital Processing of our ear.",
    class: "02: How do we Hear",
    difficulty: 03,
    unit: "Audio",
    hint: "Continous Wave to 1 or 0",
    definition: "The ear receives continuous analog sound waves, which then get converted into electrochemical signals by the hair cells. These signals are sent as discrete nerve impulses to the brain—essentially digitizing the continuous wave into “all-or-nothing” spikes, similar to analog-to-digital conversion."
  },

  //CLASS 03
  {
    name: "What is Sample Rate in Digital Recording?",
    class: "03: Record and Amplify",
    difficulty: 03,
    unit: "Audio",
    hint: "How are we measuring all frequencies of sounds by digital means?",
    definition: "Sample rate is how many times per second (samples per second, in Hz) an analog audio signal is measured (or “sampled”) in digital recording. A higher sample rate can capture higher frequencies more accurately, up to the Nyquist limit (half the sample rate). We can play with the sample rate of certain instruments in ableton by using a bit crusher or Redux."
  },
  {
    name: "What is Aliasing in terms of Audio Sample Rate?",
    class: "03: Record and Amplify",
    difficulty: 04,
    unit: "Audio",
    hint: "What samplerate would we need to measure the highest frequency we can hear?",
    definition: "Aliasing is a distortion that occurs when a frequency higher than half the sampling rate (the Nyquist frequency) is recorded without proper filtering. The system “misreads” the wave, producing unwanted artifacts (false lower frequencies) instead of the original signal. We can play with the sample rate of certain instruments in ableton by using a bit crusher or Redux."
  },
  {
    name: "What is the difference between analogue and digital recording?",
    class: "03: Record and Amplify",
    difficulty: 03,
    unit: "Audio",
    hint: "Is there a representation of the waveform in there?",
    definition: "Analog recording captures a continuous waveform (e.g., grooves in a vinyl record, magnetized particles on tape). Digital recording measures (samples) the signal at discrete intervals, storing it as numerical data (bits). Analog is a physical representation; digital is a mathematical approximation."
  },
  {
    name: "How does a Transducer microphone work?",
    class: "03: Record and Amplify",
    difficulty: 02,
    unit: "Audio",
    hint: "Air Pressure moves something which moves electrons.",
    definition: "A microphone’s diaphragm moves in response to pressure changes in the air. This mechanical movement is transformed (transduced) into an electrical signal—usually through electromagnetic or electrostatic principles—giving a voltage that corresponds to the sound wave’s amplitude and frequency."
  },
  {
    name: "How do speakers work?",
    class: "03: Record and Amplify",
    difficulty: 01,
    unit: "Audio",
    hint: "Magnets, how do they work?",
    definition: "A speaker reverses the microphone process: an electrical audio signal drives a coil attached to a flexible cone. The coil moves in a magnetic field, causing the cone to vibrate and push air, creating pressure waves we perceive as sound."
  },
  {
    name: "How does a CD store sonic information?",
    class: "03: Record and Amplify",
    difficulty: 02,
    unit: "Audio",
    hint: "Is this digital or Analogue?",
    definition: "A CD digitally encodes audio as pits and lands on a disc’s reflective surface. A laser reads these variations as binary (1s and 0s), which represent the sampled and quantized audio data. It’s entirely digital, relying on precise encoding of numerical values."
  },
  {
    name: "How does a Vinyl Record store sonic information?",
    class: "03: Record and Amplify",
    difficulty: 01,
    unit: "Audio",
    hint: "Think of the Musical Road!",
    definition: "A vinyl record is an analog medium. Its groove physically mirrors the waveform’s variations. As the stylus (needle) travels along the groove, it vibrates in correspondence to these tiny undulations, creating an electrical signal in the cartridge that is then amplified."
  },
  {
    name: "How does a Tape Casette store sonic information?",
    class: "03: Record and Amplify",
    difficulty: 02,
    unit: "Audio",
    hint: "Iron Oxide doing what?",
    definition: "Tape recorders magnetize iron oxide particles on a tape in patterns corresponding to the incoming sound signal’s waveform. When played back, the tape’s magnetic imprint induces a corresponding current in the playback head, reproducing the original analog audio signal."
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
    currentSubject = subjects[int(random(subjects.length))]
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
      subjectHolder.style.backgroundImage = "url('Images/organiser-soiree-1000x585.jpg')"
      subjectHolder.style.color = '#ccff66'
      subjectHolder.style.textShadow = '2px 2px 0px #FF0000; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10'
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
    currentStudent = students[int(random(students.length))]
    studentHolder.style.backgroundColor = StudentColorList[int(random(0,  StudentColorList.length))]
    studentHolder.innerHTML = `<br> <br> <br>  ${currentStudent}`
    studentSynth.triggerAttackRelease(random(300, 800), "16n");
    StudentCount ++
  }
  
  //Logic to end Student Spin
  if(StudentCount >= StudentTotal){
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
  SpinTotal = int(random(5, 25))
  PlayedWin = false

}

