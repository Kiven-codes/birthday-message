document.addEventListener("DOMContentLoaded", () => {
    const happinessScreen = document.getElementById("happinessScreen")
    const happinessContent = document.getElementById("happinessContent")
    const whyScreen = document.getElementById("whyScreen")
    const cardScreen = document.getElementById("cardScreen")
    const yesBtn = document.getElementById("yesBtn")
    const noBtn = document.getElementById("noBtn")
    const ateNeneBtn = document.getElementById("ateNeneBtn")
    const prinsBtn = document.getElementById("prinsBtn")
    const dhayBtn = document.getElementById("dhayBtn")
    const piaBtn = document.getElementById("piaBtn")
    const frenzBtn = document.getElementById("frenzBtn")
    const skipBtn = document.getElementById("skipBtn")
    const backBtn = document.getElementById("backBtn")
    const birthdayCard = document.getElementById("birthdayCard")
    const closeBtn = document.getElementById("closeBtn")
    const letterContent = document.getElementById("letterContent")
    const letterTitle = document.getElementById("letterTitle")
    const letterSignature = document.getElementById("letterSignature")
  
    let audioEnabled = true
    let audioContext = null
    let currentVolume = 0.5
  
    let isOpened = false
    let selectedWriter = null
  
    
    const today = new Date()
    const dateString = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    document.querySelector(".letter-date").textContent = dateString
  
    
    yesBtn.addEventListener("click", () => {
      selectedWriter = "kiven"
  
      
      yesBtn.disabled = true
      noBtn.disabled = true
      happinessContent.classList.add("fade-out")
  
      
      setTimeout(() => {
        transitionToCard()
        setupKivenLetter()
      }, 500)
    })
  
    
    noBtn.addEventListener("click", () => {
      
      yesBtn.disabled = true
      noBtn.disabled = true
      happinessContent.classList.add("fade-out")
  
      
      setTimeout(() => {
        transitionToOthers()
      }, 500)
    })
  
    
    ateNeneBtn.addEventListener("click", () => {
      selectedWriter = "ateNene"
      transitionToCard()
      setupAteNeneLetter()
    })
  
    prinsBtn.addEventListener("click", () => {
      selectedWriter = "prins"
      transitionToCard()
      setupPrinsLetter()
    })
  
    dhayBtn.addEventListener("click", () => {
      selectedWriter = "dhay"
      transitionToCard()
      setupDhayLetter()
    })
  
    piaBtn.addEventListener("click", () => {
      selectedWriter = "pia"
      transitionToCard()
      setupPiaLetter()
    })
  
    frenzBtn.addEventListener("click", () => {
      selectedWriter = "frenz"
      transitionToCard()
      setupFrenzLetter()
    })
  
    
    skipBtn.addEventListener("click", () => {
      selectedWriter = "all"
      transitionToCard()
      setupAllMessages()
    })
  
    
    backBtn.addEventListener("click", () => {
      resetToSelection()
    })
  
    
    function setupKivenLetter() {
      letterTitle.textContent = "A Letter from Kiven"
      letterSignature.innerHTML = "With love,<br>Kiven 💝"
      letterContent.innerHTML = `
        <textarea class="message-input">Hiiii gorlllll goodmorning, Happy happy birthday 20 kaaa naaaa, daee koo knowwss kung ano ilalaag kooo WAHAHAHAHHAHAHAHA, ako si nag plano kani tas ako talaga si mayo pang maisip na message. 

Unii naa daw HAHAHAHAHAHA, just enjoy yourr very very special dayyy, sorry huhu na busyyy subagoo kaya dae ako naka uwi agad, hmmm... yang regalo na yann dae ko sure kung legitt yan HAHAHAHAHA pero basta i hopeee na magustohan mooo hehe, may God bless you and may God guide you in every step of your wayyy,  no matter what happens, never ever givee upp haaa, its been a very tough year and look you've madee ittt, kayaa mo yann heree langg kamii para mag support saimooo hehe, I wanna see myself/you successful with each other's back. Harayoo paa peroo harayoo naa hehe. 

And last but not the least enjoy yourr dayy with your familyyyy hehe, bawiii nalang kitaa sa Saturdayyy, wishing you all the besttt.... 

Te amo Mi Amor ❤️❤️❤️🎉</textarea>
      `
    }
  
    function setupAteNeneLetter() {
      letterTitle.textContent = "A Letter from Ate Nene"
      letterSignature.innerHTML = "With love,<br>Ate Nene 💝"
      letterContent.innerHTML = `
        <textarea class="message-input">Hi nics!!! Happy happy birthday! No more dramas muna pero aram mo naman baga ang big wish ko saimo as tita nindo haha sana maabot mo ang dream mo na (To be a licensed Architect) in the future and aram ko na halawig pa ang taon para maabot moyan pero as tita aram ko kaya moyan - kapag kaipohan mo ako i assure na One Call Away lang ako tita ba naman. Bsta iyo na iyan hahah no more secrets ta na experience ko nayan! Bsta masasabi kolng nasa safe place tita's kamo dragon man minsan pero para man yan saindo Hahah No more pressure sa study just go with the flow uwu. Enjoy your day, everyday, every second, every year! HAHAH goodnight haha</textarea>
      `
    }
  
    function setupPrinsLetter() {
      letterTitle.textContent = "A Letter from Prins"
      letterSignature.innerHTML = "With love,<br>Prins 💝"
      letterContent.innerHTML = `
        <textarea class="message-input">Happy Birthday teh Nicole🥳🎉 Here's to another year of chasing dreams, making memories, and living your best life I wish you all the best teh May this year bring you new opportunities, experiences, and growth Happy Birthday ulit and MBTC🥳🥳🎉🎉</textarea>
      `
    }
  
    function setupDhayLetter() {
      letterTitle.textContent = "A Letter from Dhay"
      letterSignature.innerHTML = "With love,<br>Dhay 💝"
      letterContent.innerHTML = `
        <textarea class="message-input">Happy birthday te Nicole namin🥰, nawa'y maging maligaya ka from this day and so on and so forth. Thank you uli te nicole sa always pag help sa akin you knowrrr sa academicss so helpful ba naman, talagang sasaksesss. And bukod na sa helpful aynaku pretty soarrmuchhh pa, and saro ka te nicole sa naging inspirasyon ko pag nag ddrawing dahil when i was a kid pa lang nag ddraw ako mga stickman tas kan nagiling ko si mga outputs mo omygod standing ovation, maski ako bilib sa mga talent saka sa skills mo saro sa tinitingalaan ko eh, pero sa personal opo mabait HAHAHAHHAHAHHA. yudiee 20 na shaaa bigyan nga 20 jackets yan, omygadd madalion ang panahon dati tigtutuyuan ko lang kamo HAHAHAHHA pero maray man ta pag nag ulay an saro barati man kita kaagad-agad. Moreover, shesh HAHAHAHAHHAHAA wish ko te nics na magka good health ka dai pagpabayaan ang sadiri and kaya ta yan maaabot ta ang dreams ta with the guide of Lord Jesus Christ.
In conclusion, HAHAHAHAHAHHA dawa sa ano man na problema dai mag suko 'cause yan ang way na tinao sato to be a better and stronger person and ang mistakes ta is the evidence na we are trying, and mistakes can get us some learnings sheshhh discussion yern... again Happy Happy 20th birthday te nicoleeeyalaaaaaaa mwaaamwaachupchup ❤️❤️❤️💗💗💗</textarea>
      `
    }
  
    function setupPiaLetter() {
      letterTitle.textContent = "A Letter from Pia"
      letterSignature.innerHTML = "With love,<br>Pia 💝"
      letterContent.innerHTML = `
        <textarea class="message-input">HAPPY BIRTHDAY ATE NICSSS!,I hope u enjoy ur day po!,thank u po for helping me for my assignments(or kua),especially thank u po for bieng a good sister for me!,that's all po HAPPY BIRTHDAYYY POOO ulittt!!♥️🥳🎂</textarea>
      `
    }
  
    function setupFrenzLetter() {
      letterTitle.textContent = "A Letter from Frenz"
      letterSignature.innerHTML = "With love,<br>Frenz 💝"
      letterContent.innerHTML = `
        <textarea class="message-input">Happy 20th birthday, Ate Nics! I don’t say this often, pero I’m really grateful to have you as my sister. Thank you for being my Ate and for always listening to me kahit puro stupid at nonsense lang ang pinagsasabi ko minsan and kapag tungkol sa ykyk. Thank you rin for teaching me things—academic man or hindi. You’re my “biggest snitch,” pero I still tell you my secrets kasi you’re my Ate and I trust you (🤏🏻). I see how hard you try in your academics and sa paggawa ng plates, kaya I just want to remind you na you’re doing your best—keep going! I pray na ma-achieve mo lahat ng dreams mo, and I know na pagiging licensed architect is part of that. Naalala ko sa mga movies na napanood ko, minsan yung older sister nagbabago kapag tumatanda—they stop spending time with their younger siblings. Kaya I hope you won’t be like that, garo man niyo. Please continue watching TV with me kahit tumatanda ka na, please don’t stop being childish sometimes, please keep spending time with us like you always do, kahit sobrang busy ka, and please, wag masyadong mainitin ang ulo 🙄. I think you know—actually, everyone knows—na I really admire you a lot as my Ate. I always look up to you—Char, minsan lang, makulog kaya pag always nakatingala. And last but not the least, just know that I’m always a solid JannaxKiv supporter. xD (Teynkz por enrolling me 🥺) 'Yan lang, Happy birthday ulit!</textarea>
      `
    }
  
    function setupAllMessages() {
      letterTitle.textContent = "All in One Birthday Messages from Everyone - Zoom Out for better view!"
      letterSignature.innerHTML = "With love from all of us 💝"
      letterContent.innerHTML = `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #e17055; margin-bottom: 10px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
            <img src="images/kiven.jfif" alt="Kiven" style="border-radius: 50%; width: 40px; height: 40px;" />
            From Kiven:
          </h3>
          <textarea class="message-input" style="min-height: 120px; margin-bottom: 15px;">Hiiii gorlllll goodmorning, Happy happy birthday 20 kaaa naaaa, daee koo knowwss kung ano ilalaag kooo WAHAHAHAHHAHAHAHA, ako si nag plano kani tas ako talaga si mayo pang maisip na message. 

Unii naa daw HAHAHAHAHAHA, just enjoy yourr very very special dayyy, sorry huhu na busyyy subagoo kaya dae ako naka uwi agad, hmmm... yang regalo na yann dae ko sure kung legitt yan HAHAHAHAHA pero basta i hopeee na magustohan mooo hehe, may God bless you and may God guide you in every step of your wayyy,  no matter what happens, never ever givee upp haaa, its been a very tough year and look you've madee ittt, kayaa mo yann heree langg kamii para mag support saimooo hehe, I wanna see myself/you successful with each other's back. Harayoo paa peroo harayoo naa hehe. 

And last but not the least enjoy yourr dayy with your familyyyy hehe, bawiii nalang kitaa sa Saturdayyy, wishing you all the besttt.... 

Te amo Mi Amor ❤️❤️❤️</textarea>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #e17055; margin-bottom: 10px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
            <img src="images/ate nene.jpg" alt="Ate Nene" style="border-radius: 50%; width: 40px; height: 40px;" />
            From Ate Nene:
          </h3>
          <textarea class="message-input" style="min-height: 120px; margin-bottom: 15px;">Hi nics!!! Happy happy birthday! No more dramas muna pero aram mo naman baga ang big wish ko saimo as tita nindo haha sana maabot mo ang dream mo na (To be a licensed Architect) in the future and aram ko na halawig pa ang taon para maabot moyan pero as tita aram ko kaya moyan - kapag kaipohan mo ako i assure na One Call Away lang ako tita ba naman. Bsta iyo na iyan hahah no more secrets ta na experience ko nayan! Bsta masasabi kolng nasa safe place tita's kamo dragon man minsan pero para man yan saindo Hahah No more pressure sa study just go with the flow uwu. Enjoy your day, everyday, every second, every year! HAHAH goodnight haha</textarea>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #e17055; margin-bottom: 10px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
            <img src="images/prins.jpg" alt="Prins" style="border-radius: 50%; width: 40px; height: 40px;" />
            From Prins:
          </h3>
          <textarea class="message-input" style="min-height: 120px; margin-bottom: 15px;">Happy Birthday teh Nicole🥳🎉 Here's to another year of chasing dreams, making memories, and living your best life I wish you all the best teh May this year bring you new opportunities, experiences, and growth Happy Birthday ulit and MBTC🥳🥳🎉🎉</textarea>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #e17055; margin-bottom: 10px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
            <img src="images/dhay.jpg" alt="Dhay" style="border-radius: 50%; width: 40px; height: 40px;" />
            From Dhay:
          </h3>
          <textarea class="message-input" style="min-height: 120px; margin-bottom: 15px;">Happy birthday te Nicole namin🥰, nawa'y maging maligaya ka from this day and so on and so forth. Thank you uli te nicole sa always pag help sa akin you knowrrr sa academicss so helpful ba naman, talagang sasaksesss. And bukod na sa helpful aynaku pretty soarrmuchhh pa, and saro ka te nicole sa naging inspirasyon ko pag nag ddrawing dahil when i was a kid pa lang nag ddraw ako mga stickman tas kan nagiling ko si mga outputs mo omygod standing ovation, maski ako bilib sa mga talent saka sa skills mo saro sa tinitingalaan ko eh, pero sa personal opo mabait HAHAHAHHAHAHHA. yudiee 20 na shaaa bigyan nga 20 jackets yan, omygadd madalion ang panahon dati tigtutuyuan ko lang kamo HAHAHAHHA pero maray man ta pag nag ulay an saro barati man kita kaagad-agad. Moreover, shesh HAHAHAHAHHAHAA wish ko te nics na magka good health ka dai pagpabayaan ang sadiri and kaya ta yan maaabot ta ang dreams ta with the guide of Lord Jesus Christ.
In conclusion, HAHAHAHAHAHHA dawa sa ano man na problema dai mag suko 'cause yan ang way na tinao sato to be a better and stronger person and ang mistakes ta is the evidence na we are trying, and mistakes can get us some learnings sheshhh discussion yern... again Happy Happy 20th birthday te nicoleeeyalaaaaaaa mwaaamwaachupchup ❤️❤️❤️💗💗💗</textarea>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #e17055; margin-bottom: 10px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
            <img src="images/PIA.jfif" alt="Pia" style="border-radius: 50%; width: 40px; height: 40px;" />
            From Pia:
          </h3>
          <textarea class="message-input" style="min-height: 120px; margin-bottom: 15px;">HAPPY BIRTHDAY ATE NICSSS!,I hope u enjoy ur day po!,thank u po for helping me for my assignments(or kua),especially thank u po for bieng a good sister for me!,that's all po HAPPY BIRTHDAYYY POOO ulittt!!♥️🥳🎂</textarea>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #e17055; margin-bottom: 10px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
            <img src="images/frenz.jpg" alt="Frenz" style="border-radius: 50%; width: 40px; height: 40px;" />
            From Frenz:
          </h3>
          <textarea class="message-input" style="min-height: 120px; margin-bottom: 15px;">Happy 20th birthday, Ate Nics! I don’t say this often, pero I’m really grateful to have you as my sister. Thank you for being my Ate and for always listening to me kahit puro stupid at nonsense lang ang pinagsasabi ko minsan and kapag tungkol sa ykyk. Thank you rin for teaching me things—academic man or hindi. You’re my “biggest snitch,” pero I still tell you my secrets kasi you’re my Ate and I trust you (🤏🏻). I see how hard you try in your academics and sa paggawa ng plates, kaya I just want to remind you na you’re doing your best—keep going! I pray na ma-achieve mo lahat ng dreams mo, and I know na pagiging licensed architect is part of that. Naalala ko sa mga movies na napanood ko, minsan yung older sister nagbabago kapag tumatanda—they stop spending time with their younger siblings. Kaya I hope you won’t be like that, garo man niyo. Please continue watching TV with me kahit tumatanda ka na, please don’t stop being childish sometimes, please keep spending time with us like you always do, kahit sobrang busy ka, and please, wag masyadong mainitin ang ulo 🙄. I think you know—actually, everyone knows—na I really admire you a lot as my Ate. I always look up to you—Char, minsan lang, makulog kaya pag always nakatingala. And last but not the least, just know that I’m always a solid JannaxKiv supporter. xD (Teynkz por enrolling me 🥺) 'Yan lang, Happy birthday ulit!</textarea>
        </div>
      `
    }
  
    
    function transitionToOthers() {
      happinessScreen.classList.add("hidden")
      setTimeout(() => {
        whyScreen.classList.add("visible")
      }, 400)
    }
  
    function transitionToCard() {
      happinessScreen.classList.add("hidden")
      whyScreen.classList.remove("visible")
      setTimeout(() => {
        cardScreen.classList.add("visible")
      }, 400)
    }
  
    function resetToSelection() {
      
      cardScreen.classList.remove("visible")
      whyScreen.classList.remove("visible")
      birthdayCard.classList.remove("opened")
      isOpened = false
  
      
      setTimeout(() => {
        happinessScreen.classList.remove("hidden")
        happinessContent.classList.remove("fade-out")
        yesBtn.disabled = false
        noBtn.disabled = false
      }, 400)
    }
  
    
    birthdayCard.addEventListener("click", (e) => {
      if (!isOpened && !e.target.classList.contains("close-btn")) {
        birthdayCard.classList.add("opened")
        isOpened = true
        playBirthdaySong()
        createConfetti()
      }
    })
  
    
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      birthdayCard.classList.remove("opened")
      isOpened = false
    })
  
    
    function createConfetti() {
      const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd"]
  
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const confetti = document.createElement("div")
          confetti.className = "confetti"
          confetti.style.left = Math.random() * 100 + "vw"
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
          confetti.style.animationDelay = Math.random() * 3 + "s"
          confetti.style.animationDuration = Math.random() * 3 + 2 + "s"
          document.body.appendChild(confetti)
  
          setTimeout(() => {
            confetti.remove()
          }, 5000)
        }, i * 100)
      }
    }
  
    
    function playBirthdaySong() {
      if (!audioEnabled) return
  
      try {
        
        if (!audioContext) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)()
        }
  
        
        if (audioContext.state === "suspended") {
          audioContext.resume()
        }
  
        
        const melody = [
          
          { freq: 261.63, duration: 0.5 }, 
          { freq: 261.63, duration: 0.5 }, 
          { freq: 293.66, duration: 1.0 }, 
          { freq: 261.63, duration: 1.0 }, 
          { freq: 349.23, duration: 1.0 }, 
          { freq: 329.63, duration: 2.0 }, 
  
          
          { freq: 261.63, duration: 0.5 }, 
          { freq: 261.63, duration: 0.5 }, 
          { freq: 293.66, duration: 1.0 }, 
          { freq: 261.63, duration: 1.0 }, 
          { freq: 392.0, duration: 1.0 }, 
          { freq: 349.23, duration: 2.0 }, 
  
          
          { freq: 261.63, duration: 0.5 }, 
          { freq: 261.63, duration: 0.5 }, 
          { freq: 523.25, duration: 1.0 }, 
          { freq: 440.0, duration: 1.0 }, 
          { freq: 349.23, duration: 1.0 }, 
          { freq: 329.63, duration: 1.0 }, 
          { freq: 293.66, duration: 2.0 }, 
  
          
          { freq: 466.16, duration: 0.5 }, 
          { freq: 466.16, duration: 0.5 }, 
          { freq: 440.0, duration: 1.0 }, 
          { freq: 349.23, duration: 1.0 }, 
          { freq: 392.0, duration: 1.0 }, 
          { freq: 349.23, duration: 2.0 }, 
        ]
  
        let currentTime = audioContext.currentTime
  
        melody.forEach((note) => {
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()
  
          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)
  
          oscillator.frequency.setValueAtTime(note.freq, currentTime)
          oscillator.type = "sine"
  
          
          gainNode.gain.setValueAtTime(0, currentTime)
          gainNode.gain.linearRampToValueAtTime(currentVolume * 0.3, currentTime + 0.01)
          gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + note.duration - 0.01)
  
          oscillator.start(currentTime)
          oscillator.stop(currentTime + note.duration)
  
          currentTime += note.duration
        })
  
        
        showAudioControls()
      } catch (error) {
        console.log("Audio playback not supported or failed:", error)
      }
    }
  
    
    function showAudioControls() {
      let audioControls = document.getElementById("audioControls")
  
      if (!audioControls) {
        audioControls = document.createElement("div")
        audioControls.id = "audioControls"
        audioControls.className = "audio-controls"
        audioControls.innerHTML = `
          <button class="audio-toggle" id="audioToggle" title="Toggle audio">
            🔊
          </button>
          <span class="audio-label">Music</span>
          <input type="range" class="volume-control" id="volumeControl" 
                 min="0" max="1" step="0.1" value="${currentVolume}">
        `
        document.body.appendChild(audioControls)
  
        
        document.getElementById("audioToggle").addEventListener("click", toggleAudio)
        document.getElementById("volumeControl").addEventListener("input", adjustVolume)
      }
  
      audioControls.classList.add("visible")
  
      
      setTimeout(() => {
        audioControls.classList.remove("visible")
      }, 5000)
    }
  
    
    function toggleAudio() {
      audioEnabled = !audioEnabled
      const toggleBtn = document.getElementById("audioToggle")
      toggleBtn.textContent = audioEnabled ? "🔊" : "🔇"
      toggleBtn.title = audioEnabled ? "Disable audio" : "Enable audio"
    }
  
    
    function adjustVolume(e) {
      currentVolume = Number.parseFloat(e.target.value)
    }
  
    
    function createSparkles() {
      const sparkles = ["✨", "⭐", "💫", "🌟"]
      const cardFront = document.querySelector(".card-front")
  
      setInterval(() => {
        if (!isOpened && cardScreen.classList.contains("visible")) {
          const sparkle = document.createElement("div")
          sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)]
          sparkle.style.position = "absolute"
          sparkle.style.left = Math.random() * 100 + "%"
          sparkle.style.top = Math.random() * 100 + "%"
          sparkle.style.fontSize = "1rem"
          sparkle.style.pointerEvents = "none"
          sparkle.style.animation = "sparkle 2s ease-out forwards"
          cardFront.appendChild(sparkle)
  
          setTimeout(() => {
            sparkle.remove()
          }, 2000)
        }
      }, 1500)
    }
  
    
    createSparkles()
  })
  
