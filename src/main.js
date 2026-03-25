fetch('../assets/characterHero.svg')
    .then(res => res.text())
    .then(svg => {
        const hero = document.getElementById('hero');
        hero.innerHTML = svg;

        const pupilsGroup = document.getElementById("pupils");
        console.log("Pupils Group:", pupilsGroup);

        window.addEventListener("mousemove", (e) => {
            if (!pupilsGroup) return;

            const maxMove = 7;

            const x = (e.clientX / window.innerWidth - 0.5) * maxMove * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * maxMove * 2;

            pupilsGroup.style.transform = `translate(${x}px, ${y}px)`;
            pupilsGroup.style.transformOrigin = "center";
        });
    });