const chapters = [
    {
      title: "Capítulo 1 – O Primeiro Encontro",
      text: "Era uma tarde qualquer quando IFILFY avistou Kora pela primeira vez. Algo no ar mudou. O que IFILFY faz?",
      image: "encontro.jpg",
      choices: [
        { text: "Se aproxima com coragem", next: 1 },
        { text: "Finge que não viu, mas fica curioso", next: 1 }
      ]
    },
    {
      title: "Capítulo 2 – O Beijo da Aurora",
      text: "Em meio a risadas e olhares tímidos, o momento chegou. Um beijo que parou o tempo. IFILFY lembra desse dia como...",
      image: "beijo.jpg",
      choices: [
        { text: "O começo de tudo", next: 2 },
        { text: "Um sonho que virou real", next: 2 }
      ]
    },
    {
      title: "Capítulo 3 – O Festival dos Namorados",
      text: "O primeiro Dia dos Namorados chegou. IFILFY preparou uma surpresa para Kora. Mas...",
      image: "festival.jpg",
      choices: [
        { text: "Esqueceu onde escondeu o presente!", next: 3 },
        { text: "Kora chegou antes da hora!", next: 3 }
      ]
    },
    {
      title: "Capítulo 4 – A Jornada a Sós",
      text: "Um dia só deles, sem pressa, sem roteiro. Eles exploraram o mundo e a si mesmos. Nesse dia, IFILFY se sentiu...",
      image: "jornada.jpg",
      choices: [
        { text: "Mais perto de Kora do que nunca", next: 4 },
        { text: "Livre e completo ao lado dela", next: 4 }
      ]
    },
    {
      title: "Capítulo 5 – O Aniversário da Eternidade",
      text: "Chega o marco de 1 ano. IFILFY olha para trás e vê uma linda jornada. Ele segura a mão de Kora e diz:",
      image: "aniversario.jpg",
      choices: [
        { text: "'Ainda é só o começo.'", next: "end" },
        { text: "'Te escolheria mil vezes.'", next: "end" }
      ]
    }
  ];
  
  const finalLink = "https://seusitefinal.com"; // troque aqui depois
  
  const titleEl = document.getElementById("chapter-title");
  const imageEl = document.getElementById("chapter-image");
  const textEl = document.getElementById("text");
  const choicesEl = document.getElementById("choices");
  const progressBar = document.getElementById("progress-bar");
  
  const clickSound = document.getElementById("click-sound");
  const advanceSound = document.getElementById("advance-sound");
  
  function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }
  
  function showChapter(index) {
    playSound(advanceSound);
  
    if (index === "end") {
      titleEl.innerText = "Fim da Jornada";
      imageEl.style.opacity = "0";
      textEl.innerHTML = `IFILFY e Kora continuaram sua história, agora ainda mais fortes.<br><br><a href="${finalLink}" target="_blank">Clique aqui para ver o próximo capítulo...</a>`;
      choicesEl.innerHTML = "";
      progressBar.style.width = "100%";
      return;
    }
  
    const chapter = chapters[index];
  
    titleEl.innerText = chapter.title;
  
    // imagem com fade
    imageEl.style.opacity = "0";
    setTimeout(() => {
      imageEl.src = chapter.image;
      imageEl.style.opacity = "1";
    }, 300);
  
    textEl.innerText = chapter.text;
  
    choicesEl.innerHTML = "";
    chapter.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => {
        playSound(clickSound);
        showChapter(choice.next);
        updateProgress(index);
      };
      choicesEl.appendChild(btn);
    });
  
    updateProgress(index);
  }
  
  function updateProgress(currentIndex) {
    const percent = ((currentIndex + 1) / chapters.length) * 100;
    progressBar.style.width = percent + "%";
  }
  
  showChapter(0);
  