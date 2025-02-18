let subjects = [

  // SURPRISES
  {
    name: `If you could be any animal, what would you be?`,
    class: `Surprise`,
    difficulty: `FUN`,
    unit: `Surprise`,
    hint: `Woof Woof!`,
    definition: ``
  },
  {
    name: `What is the weirdest dream you've ever had?`,
    class: `Surprise`,
    difficulty: `FUN`,
    unit: `Surprise`,
    hint: `Zzzzzzz Zzzzzzz`,
    definition: ``
  },
  {
    name: `What's your dream career / job / practice?`,
    class: `Surprise`,
    difficulty: `FUN`,
    unit: `Surprise`,
    hint: `Woohooo!`,
    definition: ``
  },
  {
    name: `What's your strangest theory about the universe?`,
    class: `Surprise`,
    difficulty: `FUN`,
    unit: `Surprise`,
    hint: `Wooo`,
    definition: ``
  },
  {
    name: `What was the first album you ever bought / torrented?`,
    class: `Surprise`,
    difficulty: `FUN`,
    unit: `Surprise`,
    hint: `yeaaa!`,
    definition: ``
  },

  // EXISTENTIAL QUESTIONS
  {
    name: `Now that we can record music and sounds, how has our relationship with creating and listening to music changed?`,
    class: `Existential`,
    difficulty: `Existential`,
    unit: `Existential`,
    hint: `Woaaa!`,
    definition: ``
  },
  {
    name: `Does your skill or ability to distinguish information influence your ability to hear or listen? How are these things connected?`,
    class: `Existential`,
    difficulty: `Existential`,
    unit: `Existential`,
    hint: `Think about the fact that a trained musician can isolate specific instruments in an orchestra...`,
    definition: `woa`
  },

  // EVENTS
  {
    name: `Everyone permanently change seats, sit next to someone you don't know. We'll talk for 1 minute.`,
    class: `Event`,
    difficulty: `Event`,
    unit: `Event`,
    hint: `Howdy!`,
    definition: ``
  },

  // CLASS 01: WHAT IS SOUND
  {
    name: `Constructive & Destructive Interference`,
    class: `01: What is Sound`,
    difficulty: 1,
    unit: `Audio`,
    hint: `Think about waves as pressure differentials`,
    definition: `
    When two sound waves meet, their pressure variations can add together 
    (constructive interference) or cancel each other out (destructive interference). 
    Constructive interference happens when the peaks of the waves align, 
    boosting amplitude. Destructive interference occurs when a peak aligns with a trough, 
    reducing or silencing the wave. This same principle is used in noise-canceling headphones, 
    where the same sound wave is produced with reversed phase, allowing destructive interference 
    to effectively silence the sound. 
    <br><br><br><br>
    <div style='width:100%; text-align:center'>
    <img src='Images/waves.gif'>
    </div>
    `
  },
  {
    name: `Formula for Calculating the Wavelength of a Sound Wave with a Given Frequency`,
    class: `01`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Sound travels a certain distance in a second. How do we divide that up to see the length of one wave?`,
    definition: ``
  },
  {
    name: `The Doppler Effect`,
    class: `01: What is Sound`,
    difficulty: 3,
    unit: `Audio`,
    hint: `Is our experience of sound relative? Think about the train example from class.`,
    definition: `
    The Doppler Effect is the change in perceived pitch when the source of a sound 
    moves relative to the listener. As the source approaches, waves get compressed, 
    increasing the frequency and making the pitch seem higher. As it moves away, the waves are stretched, 
    lowering the frequency and making the pitch seem lower. Consider the change in sound as an ambulance 
    passes by, or a plane flies overhead.`
  },
  {
    name: `Harmonic Series & Timbre`,
    class: `01: What is Sound`,
    difficulty: 3,
    unit: `Audio`,
    hint: `This is what we are mixing in Operator in Ableton. What is the fundamental frequency?`,
    definition: `
    A harmonic series is a set of frequencies that are integer multiples of a 
    fundamental frequency. These harmonics shape an instrument or sound source’s 
    unique timbre (tone color) because each sound contains a different balance of harmonics. 
    The fundamental frequency determines the pitch, while the overtones define the sound’s character. 
    For instance, any instrument can play a fundamental frequency of 440 Hz (A4), but depending on the 
    materials and shape of the instrument, the harmonics will be mixed differently.`
  },
  {
    name: `Additive Synthesis`,
    class: `01: What is Sound`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Adding sine waves together; think about overtones and harmonics.`,
    definition: `
    Additive synthesis is a technique of creating complex sounds by adding 
    together multiple sine waves (or other simple waveforms) at different frequencies 
    (the fundamental plus harmonics). By adjusting the amplitude and frequency of each component, 
    you can sculpt a wide variety of timbres. Often this is how instruments are digitally simulated—the 
    mixing of the fundamental frequency and harmonics is mimicked to create a similar waveform.`
  },
  {
    name: `Resonant Frequency`,
    class: `01: What is Sound`,
    difficulty: 2,
    unit: `Audio`,
    hint: `What does the shape of a room or a box have to do with how it affects the air in it?`,
    definition: `
      A resonant frequency is the natural frequency at which a system (like a room, 
      musical instrument, or enclosure) most efficiently vibrates. When sound waves at or near 
      this frequency enter the space, they are reinforced, causing certain pitches or frequencies 
      to sound louder and more pronounced. Think about the Alvin Lucier piece we looked at—any room 
      shape will naturally reinforce specific frequencies.`
  },
  {
    name: `Frequency Modulation Synthesis (FM Synthesis)`,
    class: `01: What is Sound`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Carrier and Modulator`,
    definition: `
    FM Synthesis creates new timbres by using one waveform (the modulator) to 
    periodically change the frequency of another waveform (the carrier). The resulting sound 
    contains additional frequencies not present in the original signals, often producing complex 
    and evolving tones widely used in electronic music. Recall the example in class where we used a 
    1 Hz modulator to influence our carrier wave, causing the pitch to oscillate up and down once 
    per second.`
  },
  {
    name: `The Speed of Sound in Air and Different Mediums`,
    class: `01: What is Sound`,
    difficulty: 1,
    unit: `Audio`,
    hint: `Think of water vs hot air vs cold air.`,
    definition: `
    Sound travels at different speeds depending on the medium. In air at 
    room temperature, it’s roughly 343 m/s. In water, it’s much faster (around 1482 m/s) 
    because molecules are closer together. Temperature also affects speed: hotter air allows sound 
    to move faster, while colder air slows it down.`
  },

  // CLASS 02: HOW DO WE HEAR
  {
    name: `Tonotopicity`,
    class: `02: How do we Hear`,
    difficulty: 1,
    unit: `Audio`,
    hint: `Topographic and TONAL`,
    definition: `
    Tonotopicity is how the auditory system is organized 
    so that different frequencies (tones) are processed in different physical locations. 
    The inner ear and parts of the brain map low frequencies at one end of a structure and 
    high frequencies at the other, creating a “tonal map.” Recall that lower frequencies are 
    parsed closer to the opening of the cochlea, and higher pitches further down the spiral.`
  },
  {
    name: `Critical Bands / Cochlear Bands`,
    class: `02: How do we Hear`,
    difficulty: 4,
    unit: `Audio`,
    hint: `Consonance and Dissonance in hearing.`,
    definition: `
    Critical bands refer to the frequency ranges over which the ear integrates
     sound energy on the basilar membrane. Sounds within the same critical band can interfere 
     or mask each other, influencing our perception of consonance 
     (pleasantness) and dissonance (harshness). Remember that these "Critical Bands" vary in size throughout the cochlea. 

      <br><br><br><br>
      <div style='width:100%; text-align:center'>
        <img src='Images/placecodingb.jpg'>
      </div>
      <br><br>
      Check out this interactive sketch to explore critical bands:
      <a href="https://editor.p5js.org/dunkFig/sketches/n8Jg45_wS\">UNDERSTANDING CRITICAL BANDS</a>`
  },
  {
    name: `Basilar Membrane`,
    class: `02: How do we Hear`,
    difficulty: 3,
    unit: `Audio`,
    hint: `This will eventually stimulate the inner ear hair cells.`,
    definition: `
    The basilar membrane is the key structure within the cochlea that 
    vibrates in response to sound waves. Different parts of the membrane respond to 
    different frequencies: high frequencies near the base, and low frequencies near the apex. 
    These vibrations stimulate hair cells that convert mechanical movement into nerve signals.`
  },
  {
    name: `The Cochlea`,
    class: `02: How do we Hear`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Inner ear, think Tonotopicity`,
    definition: `The cochlea is the spiral-shaped, fluid-filled part of the inner 
    ear responsible for converting vibrations into neural signals. 
    It contains the basilar membrane and hair cells, which separate 
    different frequencies along its length—another manifestation of tonotopicity.`
  },
  {
    name: `Limits of Audio Frequency Perception in Humans`,
    class: `02: How do we Hear`,
    difficulty: 2,
    unit: `Audio`,
    hint: `The low frequency is 20 Hz`,
    definition: `Humans with typical hearing can detect sounds from about 
    20 Hz (low pitch) to 20 kHz (high pitch). This range can vary by individual and tends 
    to narrow with age or hearing damage.`
  },
  {
    name: `What is the Resolution of our Pitch Perception?`,
    class: `02: How do we Hear`,
    difficulty: 3,
    unit: `Audio`,
    hint: `We have 3500 inner ear hair cells, and can hear from 20 to 20k Hz.`,
    definition: `We have around 3500 inner ear hair cells, and can hear from 
    20 Hz to 20 kHz. Our approximate resolution for pitch is about 3.6 Hz, though 
    this changes in different areas of the ear, depending on hair cell distribution and how 
    they interact in that region.`
  },
  {
    name: `Analogue to Digital Processing of our Ear`,
    class: `02: How do we Hear`,
    difficulty: 3,
    unit: `Audio`,
    hint: `Continuous wave to 1 or 0`,
    definition: `The ear receives continuous (analog) sound waves, which then get 
    converted into electrochemical signals by the hair cells. These signals are sent as 
    discrete nerve impulses to the brain—essentially digitizing the continuous wave into 
    “all-or-nothing” spikes, somewhat analogous to analog-to-digital conversion.`
  },

  // CLASS 03: RECORD & AMPLIFY
  {
    name: `What is Sample Rate in Digital Recording?`,
    class: `03: Record and Amplify`,
    difficulty: 3,
    unit: `Audio`,
    hint: `How are we capturing all frequencies of sounds digitally?`,
    definition: `Sample rate is how many times per second (in Hz) 
    an analog audio signal is measured (or “sampled”). A higher sample rate captures higher 
    frequencies more accurately, up to the Nyquist limit (half the sample rate). You can 
    experiment with sample rates in Ableton using devices like a bit crusher or Redux.`
  },
  {
    name: `What is Aliasing in terms of Audio Sample Rate?`,
    class: `03: Record and Amplify`,
    difficulty: 4,
    unit: `Audio`,
    hint: `What sample rate would we need to capture the highest frequency we can hear?`,
    definition: `Aliasing is a distortion that occurs when a frequency higher than 
    half the sampling rate (the Nyquist frequency) is recorded without proper filtering. 
    The system “misreads” the wave, producing unwanted artifacts (false lower frequencies) 
    instead of the original signal. You can hear aliasing artifacts in Ableton using tools 
    like a bit crusher or Redux.`
  },
  {
    name: `What is the difference between analogue and digital recording?`,
    class: `03: Record and Amplify`,
    difficulty: 3,
    unit: `Audio`,
    hint: `Is there a physical representation of the waveform?`,
    definition: `Analog recording captures a continuous waveform 
    (e.g., grooves in a vinyl record or magnetized particles on tape). 
    Digital recording measures (samples) the signal at discrete intervals, storing it 
    as numerical data (bits). Analog is a physical representation; digital is a 
    mathematical approximation.`
  },
  {
    name: `How does a Transducer Microphone Work?`,
    class: `03: Record and Amplify`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Air Pressure moves something, which moves electrons.`,
    definition: `A microphone’s diaphragm moves in response to pressure changes in the air. 
    This mechanical movement is transformed (transduced) into an electrical signal—usually 
    through electromagnetic or electrostatic principles—creating a voltage that corresponds 
    to the sound wave’s amplitude and frequency.`
  },
  {
    name: `How do Speakers Work?`,
    class: `03: Record and Amplify`,
    difficulty: 1,
    unit: `Audio`,
    hint: `Magnets—how do they work?`,
    definition: `A speaker essentially reverses the microphone process: an 
    electrical audio signal drives a coil attached to a flexible cone. The 
    coil moves in a magnetic field, causing the cone to vibrate and push air, 
    forming pressure waves we perceive as sound.`
  },
  {
    name: `How does a CD store sonic information?`,
    class: `03: Record and Amplify`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Is this digital or analog?`,
    definition: `A CD digitally encodes audio as tiny pits and lands on a 
    reflective disc surface. A laser reads these variations as binary (1s and 0s), 
    which represent the sampled and quantized audio data. It’s entirely digital, 
    relying on precise numerical encoding.`
  },
  {
    name: `How does a Vinyl Record store sonic information?`,
    class: `03: Record and Amplify`,
    difficulty: 1,
    unit: `Audio`,
    hint: `Think of the “Musical Road” example.`,
    definition: `A vinyl record is an analog medium. 
    Its groove physically mirrors the waveform’s variations. As the stylus 
    (needle) travels along this groove, it vibrates in correspondence with those tiny undulations, 
    creating an electrical signal in the cartridge that is then amplified.`
  },
  {
    name: `How does a Tape Cassette store sonic information?`,
    class: `03: Record and Amplify`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Iron oxide doing what?`,
    definition: `Tape recorders magnetize iron oxide particles on a tape in patterns 
    corresponding to the incoming audio waveform. When played back, the tape’s magnetic 
    imprint induces a corresponding current in the playback head, reproducing the original analog signal.`
  },

  // CLASS 04
  {
    name: `What is Bit-Depth?`,
    class: `03: Record and Amplify`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Sample rate is how often we sample in time, but bit depth is...`,
    definition: `Bit depth is how much amplitude information is captured 
    per sample. A higher bit depth provides more dynamic range and detail.`
  },
  {
    name: `What is Lossy vs. Lossless Compression?`,
    class: `03: Record and Amplify`,
    difficulty: 2,
    unit: `Audio`,
    hint: `They might sound the same (or similar) but one has a lot less data—why?`,
    definition: `Lossless digital files (like .wav) retain all the 
    original information captured during recording. Lossy files (like .mp3) use various
    psychoacoustic techniques to discard data we might not notice (frequencies out of range,
    masked sounds, etc.). As a result, lossy files can be much smaller in size, but at the 
    expense of permanently removed data.`
  },
  {
    name: `What is dB a measure of?`,
    class: `04: Environmental Sound`,
    difficulty: 3,
    unit: `Audio`,
    hint: `pressures on...`,
    definition: `dB (decibels) is a measurement of sound pressure level,
     but more generally how loud something is. The equation for decibels is: dB = 10 * 
     log(Target Pressure / Reference Pressure). These pressures are measured in pascals, 
     and the reference pressure is usually the quietest sound humans can hear (~20 × 10⁻⁶ Pa). 
     If you want to compare loudness between two sources, you change the reference accordingly.`
  },
  {
    name: `What is the typical resolution of being able to tell the difference between two volumes?`,
    class: `04: Environmental Sound`,
    difficulty: 3,
    unit: `Audio`,
    hint: `When can you tell something got louder...`,
    definition: `1 dB is typically the smallest change required for most people to 
    detect a difference in loudness. But 
    if you’re curious, 
    <a href="https://www.audiocheck.net/blindtests_level.php">test yourself here!</a>`
  },
  {
    name: `What is Unity Gain?`,
    class: `04: Environmental Sound`,
    difficulty: 3,
    unit: `Audio`,
    hint: `Why do dBs go up to 0 in Ableton?`,
    definition: `In the context of Ableton (or most DAWs and mixers), 
    "unity gain" means the fader, knob, or control is set so it neither 
    amplifies nor attenuates the signal—it’s passing audio at its original level.
     Seeing a track fader at “0 dB” means the output equals the input.`
  },

  // CLASS 05 PSYCH
  {
    name: `Is preference for Harmony biological or cultural?`,
    class: `05: Does Language Influence our Hearing?`,
    difficulty: 3,
    unit: `Audio`,
    hint: `Remember the paper we looked at with the Tsimane people.`,
    definition: `The study we discussed indicated that the 
    preference for harmony is largely cultural. Other cultures not exposed to 
    Western music could still differentiate harmony vs. disharmony, but did not 
    necessarily prefer one over the other. Interestingly, everyone in the study reported disliking 
    "rough" tones more than smooth ones (where two tones within the same critical band cause beating).`
  },
  {
    name: `Are there certain sounds we lose the ability to hear once we specialize to learning a specific language?`,
    class: `05: Does Language Influence our Hearing?`,
    difficulty: 2,
    unit: `Audio`,
    hint: `When can you tell something has gotten louder...?`,
    definition: `Yes, certain phonemes in foreign languages may be 
    indistinguishable if you haven’t been exposed to them from a young age. 
    Although you still hear them as some sound, you might not differentiate 
    certain contrasts (like Qi vs. Ki), while a native speaker of that language 
    would distinguish them easily.`
  },
  {
    name: `Explain Barthes' Description of the Pheno-Song & the Geno-Song`,
    class: `05: Does Language Influence our Hearing?`,
    difficulty: 4,
    unit: `Audio`,
    hint: `Clarity of Song vs. Materiality`,
    definition: `The Pheno-Song focuses on the clarity of the voice—lyrics, 
    melody, emotional delivery. The Geno-Song refers to the underlying materiality of 
    the voice (the physicality, the “flesh” of the language) that can convey meaning 
    beyond the immediate or obvious aspects of the performance.`
  },


  /// CLASS 06 Technology
  {
    name: `Talk About Peer to Peer Networks (Napster, Limewire, etc..), how did these influence listening habits?`,
    class: `06: How does Technology Influence how we Listen?`,
    difficulty: 2,
    unit: `Audio`,
    hint: `Illegal or Not?`,
    definition: `Peer to Peer Networks like Napster were networks where individuals could
    access eachothers files through the internet. Napster particularly had a central Index Server
    where the files were listed, although limewire did not have this feature. Later sites like "The Pirate
    Bay" used torrents, which essentially were ways that users could download a 
    little bit of the file of their choice from many different users - like having everyone give you a small piece of the file i
    instead of downloading it from the same place. 
    `
  },


];
