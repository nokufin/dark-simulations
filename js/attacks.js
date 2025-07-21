// WORM

function startWorm() {
    let wormCount = 1;
    const maxWorms = 1000;

    const warning = document.createElement("div");
    warning.className = "warning-message";
    warning.textContent = "⚠️ DANGER: System infection in progress! ⚠️";
    document.body.appendChild(warning);

    function createWormElement(count) {
        const wormElement = document.createElement("div");
        wormElement.className = "worm";

        const messages = [
            `INFECTED #${count}`,
            `VIRUS #${count}`,
            `MALWARE #${count}`,
            `CORRUPTED #${count}`,
            `HACKED #${count}`,
        ];
        wormElement.textContent =
            messages[Math.floor(Math.random() * messages.length)];

        wormElement.style.position = "fixed";
        wormElement.style.left = `${Math.random() * 100}vw`;
        wormElement.style.top = `${Math.random() * 100}vh`;
        wormElement.style.backgroundColor = `rgb(
            ${Math.random() * 255},
            ${Math.random() * 255},
            ${Math.random() * 255}
        )`;
        wormElement.style.padding = "5px";
        wormElement.style.zIndex = "9999";

        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;

        wormElement.style.setProperty("--moveX", `${moveX}px`);
        wormElement.style.setProperty("--moveY", `${moveY}px`);

        wormElement.style.animation = `moveWorm ${
            1 + Math.random() * 2
        }s infinite alternate ease-in-out`;

        return wormElement;
    }

    const consoleMessages = [
        "🔓 SECURITY BREACH DETECTED IN SYSTEM32",
        "⚠️ FIREWALL BYPASSED - ACCESS GRANTED",
        "❌ ENCRYPTION KEYS COMPROMISED",
        "⚡ SYSTEM MEMORY CORRUPTION AT 0x8B4F2A1",
        "🔥 CRITICAL SYSTEM FILES BEING MODIFIED",
        "💀 MALICIOUS CODE INJECTION DETECTED",
        "⚠️ NETWORK SECURITY COMPROMISED",
        "🔒 ADMIN PRIVILEGES ESCALATED",
        "⚡ SYSTEM REGISTRY BEING MODIFIED",
        "💾 DISK CORRUPTION IN PROGRESS",
        "🌐 UNAUTHORIZED ACCESS TO NETWORK RESOURCES",
        "📡 DATA TRANSMISSION TO UNKNOWN SERVERS",
        "🔍 SCANNING FOR VULNERABILITIES...",
        "⚡ MEMORY LEAK DETECTED IN KERNEL",
        "🔥 CPU USAGE CRITICAL - MINING PROCESS DETECTED",
    ];

    const errorMessages = [
        "FATAL ERROR: Memory corruption at address 0x7FFE8B4F2A1",
        "CRITICAL: System32 integrity check failed",
        "WARNING: Unauthorized DLL injection detected",
        "ERROR: Kernel security compromised",
        "ALERT: Boot sector modification detected",
        "CRITICAL: Stack overflow in system process",
        "ERROR: Registry hive corruption detected",
        "FATAL: Master boot record modified",
        "WARNING: Network stack compromised",
        "CRITICAL: System restore points deleted",
    ];

    function randomConsoleMessage() {
        const styles = [
            "color: red; font-size: 14px; font-weight: bold;",
            "color: #00ff00; font-size: 14px; font-weight: bold;",
            "color: orange; font-size: 14px; font-weight: bold;",
            "background: red; color: white; font-size: 14px; font-weight: bold;",
            "background: #000; color: #00ff00; font-size: 14px; font-weight: bold;",
        ];

        // Random üzenet kiválasztása
        const message =
            Math.random() < 0.7
                ? consoleMessages[
                      Math.floor(Math.random() * consoleMessages.length)
                  ]
                : errorMessages[
                      Math.floor(Math.random() * errorMessages.length)
                  ];

        const style = styles[Math.floor(Math.random() * styles.length)];

        // 20% esély error
        if (Math.random() < 0.2) {
            console.error(message);
        }
        // 20% esély warning
        else if (Math.random() < 0.4) {
            console.warn(message);
        }
        // 60% esély stilizált log
        else {
            console.log(`%c${message}`, style);
        }

        setTimeout(randomConsoleMessage, Math.random() * 200 + 100);
    }

    console.clear();
    console.log(
        "%cSYSTEM COMPROMISED",
        "color: red; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
    );

    function showProgressBar() {
        const actions = [
            "ENCRYPTING SYSTEM FILES",
            "DOWNLOADING MALWARE",
            "CORRUPTING MEMORY",
            "BYPASSING SECURITY",
            "INSTALLING ROOTKIT",
            "HIJACKING PROCESSES",
        ];

        const action = actions[Math.floor(Math.random() * actions.length)];
        let progress = 0;

        console.log(`%c${action}`, "color: #ff0000; font-weight: bold;");

        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                console.log(
                    `%c${action} COMPLETE!`,
                    "color: #00ff00; font-weight: bold;"
                );
                clearInterval(interval);
                setTimeout(showProgressBar, Math.random() * 5000); // 5 mp új progress bar
            } else {
                const bar =
                    "█".repeat(Math.floor(progress / 5)) +
                    "▒".repeat(20 - Math.floor(progress / 5));
                console.log(
                    `%c${bar} ${Math.floor(progress)}%`,
                    "color: #00ff00; font-weight: bold;"
                );
            }
        }, 200);
    }

    // hamis ip-k
    function showNetworkActivity() {
        const ips = [
            "192.168.1.",
            "10.0.0.",
            "172.16.0.",
            "45.89.123.",
            "91.234.56.",
        ];

        setInterval(() => {
            const ip =
                ips[Math.floor(Math.random() * ips.length)] +
                Math.floor(Math.random() * 255);
            const port = Math.floor(Math.random() * 65535);
            console.log(
                `%c[NETWORK] Connection established: ${ip}:${port}`,
                "color: #ffa500;"
            );
        }, 1500);
    }

    // hamis fájlmódosítások
    function showFileChanges() {
        const files = [
            "C:\\Windows\\System32\\kernel32.dll",
            "C:\\Windows\\System32\\ntoskrnl.exe",
            "C:\\Windows\\System32\\drivers\\tcpip.sys",
            "/etc/passwd",
            "/var/log/syslog",
            "C:\\Program Files\\Important\\config.ini",
            "C:\\Users\\Administrator\\Documents\\sensitive.doc",
        ];

        setInterval(() => {
            const file = files[Math.floor(Math.random() * files.length)];
            const actions = [
                "MODIFIED",
                "ENCRYPTED",
                "CORRUPTED",
                "DELETED",
                "ACCESSED",
            ];
            const action = actions[Math.floor(Math.random() * actions.length)];
            console.log(
                `%c[FILE] ${file} has been ${action}`,
                "color: #ff4500;"
            );
        }, 800);
    }

    // Rendszer erőforrás "monitorozás"
    function showSystemStatus() {
        setInterval(() => {
            const cpu = Math.floor(80 + Math.random() * 20);
            const ram = Math.floor(85 + Math.random() * 15);
            const disk = Math.floor(90 + Math.random() * 10);

            console.log(
                `%c[SYSTEM] CPU: ${cpu}% | RAM: ${ram}% | DISK: ${disk}%`,
                "color: #ff0000; background: #300;"
            );
        }, 2000);
    }

    // start
    console.clear();
    console.log(
        "%cSYSTEM FULLY COMPROMISED",
        "color: red; font-size: 48px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
    );
    setTimeout(showProgressBar, 1000);
    setTimeout(showNetworkActivity, 2000);
    setTimeout(showFileChanges, 3000);
    setTimeout(showSystemStatus, 4000);

    randomConsoleMessage();
    function worm() {
        if (wormCount < maxWorms) {
            setTimeout(() => {
                const wormElement = createWormElement(wormCount);
                document.body.appendChild(wormElement);

                wormCount++;
                worm();
            }, Math.random() * 1);
        }
    }
    worm();
}

// POPUP
function startAggressivePopup() {
    let popupWindow = [];
    const maxWindows = 7;

    const gifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHNmaGNhbXJqdjdtdmdkdzBiZnZudWMwbTVqdndjeXJxMGp2YmgzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H4zeDO4ocDYqY/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzBlcnRucTI2cnh6amoyd2dsNGFucjU5cXdrejF4OXoyOGhzb3VlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oAt1NiCiTCZrlZvy0/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjdtMnR6YndjNGk5bDByeTRvbGtwanRiaDVudGg3ZzBjb29ncnBrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0hLOxvKJHArT2OjHba/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmNqYzNpZnVrNTFsM3lsMmtjbzNrcmx6OHl5eWppbjdmbDJxM2x1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DohrzSCB07moM/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXB2ejVmandrMTJ3ZXZoYjhraXRhZTlqeGpjM3NuODAyZ2hxYXJneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXozazNicm4ydW9pdTNjNHhjaGY0ajNhbGNzb3p0bm8weW9xb3BpeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/33zX3zllJBGY8/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFvcWtibHRqczhhbGVnMzYyMmVwcTZoem5sdXg5cnFsZ3Z1b2FjYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2GrNmaGsI2ybu/giphy.gif",
    ];

    const mainGif = [
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjVnN3pyeWR5d3hsanNycndxZW1rcG9vOWVvYjRhNmxmMHBxZmlxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9S5rl57C2dgIpfUU3r/giphy.gif",
    ];

    const h2_vars = [
        "LOOK AT THIS CUTE PUPPY!",
        "I BET YOU WON'T STOP WATCHING THIS!",
        "YOU'RE GETTING SLEEPY, AREN'T YOU?",
        "READY FOR THE CUTEST CHICKEN EVER?",
        "NO ESCAPE, JUST ENJOY THIS GUY!",
        "FEELING ANGRY? LOOK AT THIS FLUFFY ANIMAL!",
        "IS THIS CUTE? I THINK YES!",
    ];

    const p_vars = [
        "DON'T YOU WANT TO ADOPT HIM... OR MAYBE NOT?",
        "JUST LOOK AT THIS LOUNGING BOI FOR A SECOND!",
        "ISN'T THIS CUTEEE JUST TOO ADORABLE?",
        "DON'T TRY TO CLOSE ME, I DARE YOU!",
        "LOOK AT THAT SMILE, ISN'T IT JUST TOO MUCH?",
        "IT'S IMPOSSIBLE TO BE MAD AFTER SEEING THIS!",
        "YOU CAN'T SAY NO TO THAT FACE, RIGHT?",
    ];

    let usedH2s = [];
    let usedPs = [];
    let usedGifs = [];

    function getRandomH2() {
        const availableH2 = h2_vars.filter((p) => !usedH2s.includes(p));
        const randomH2 =
            availableH2[Math.floor(Math.random() * availableH2.length)];
        usedPs.push(randomH2);
        return randomH2;
    }

    function getRandomP() {
        const availablePhrases = p_vars.filter((p) => !usedPs.includes(p));
        const randomP =
            availablePhrases[
                Math.floor(Math.random() * availablePhrases.length)
            ];
        usedPs.push(randomP);
        return randomP;
    }

    function getRandomGif() {
        const availableGifs = gifs.filter((p) => !usedGifs.includes(p));
        const randomGif =
            availableGifs[Math.floor(Math.random() * availableGifs.length)];
        usedGifs.push(randomGif);
        return randomGif;
    }

    function getRandomPosition() {
        const width = 400;
        const height = 400;

        const availWidth = document.documentElement.clientWidth;
        const availHeight = document.documentElement.clientHeight;

        const left = Math.floor(Math.random() * (availWidth - width));
        const top = Math.floor(Math.random() * (availHeight - height));

        return {
            left: left,
            top: top,
            specs: `width=${width},height=${height},left=${left},top=${top}`,
        };
    }

    function shakeWindow(window) {
        if (window && !window.closed) {
            const originalPos = {
                left: window.screenLeft,
                top: window.screenTop,
            };

            const shakeAmount = 20; // rezgés erőssége
            let shakeCount = 0;
            const maxShakes = 200; // rezegés mennyisége

            const shake = () => {
                if (shakeCount < maxShakes) {
                    const randomX =
                        originalPos.left +
                        (Math.random() * shakeAmount - shakeAmount / 2);
                    const randomY =
                        originalPos.top +
                        (Math.random() * shakeAmount - shakeAmount / 2);
                    window.moveTo(randomX, randomY);
                    shakeCount++;
                    setTimeout(shake, 50);
                } else {
                    // eredeti pozícióba visszaállítás
                    window.moveTo(originalPos.left, originalPos.top);
                    // 2-5 mp és újra rezeg
                    setTimeout(() => {
                        shakeCount = 0;
                        shake();
                    }, Math.random() * 3000 + 2000);
                }
            };

            shake();
        }
    }

    let moveStopped = false;

    function moveWindow(window) {
        if (window && !window.closed && !moveStopped) {
            const pos = getRandomPosition();
            window.moveTo(pos.left, pos.top);
            setTimeout(() => moveWindow(window), 500);
        }
    }

    setTimeout(() => {
        moveStopped = true;
        popupWindow.forEach((window) => {
            shakeWindow(window);
        });
    }, 4000);

    function openPopup() {
        const position = getRandomPosition();
        const newWindow = window.open(
            "",
            "_blank",
            position.specs + ",resizable=no"
        );

        if (newWindow) {
            popupWindow.push(newWindow);

            const randomGif = getRandomGif();
            const randomH2 = getRandomH2();
            const randomP = getRandomP();

            newWindow.document.write(`
            <html>
            <head>
                <title>WHATSUP MY NEW FRIEND</title>
                <style>
                    *{
                        margin: 0;
                    }
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-image: url(${randomGif});
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        color: #fff;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        font-size: 20px;
                        overflow: hidden;
                    }
                    h1 {
                        font-size: 32px;
                        color: #00ffff; 
                        font-weight: bold;
                    }
                    h2 {
                        font-size: 24px;
                        color: #ffcc00;
                        font-weight: bold;
                    }
                    p {
                        font-weight: bold;
                        animation: flash 1s infinite;
                    }
                    @keyframes flash {
                        0% {
                            color: #ff0000;
                        }
                        50% {
                            color: #ff00ff;
                        }
                        100% {
                            color: #ff0000;
                        }
                    }
                    .newPopup {
                        padding: 20px;
                        background-color: transparent;
                        margin: 20px;
                    }
                    .gif-container {
                        width: 100%;
                        height: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .gif-container img {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                    }
                </style>
            </head>
            <body>
                <div class="newPopup">
                    <h1>HELLO DARLING</h1>
                    <h2>${randomH2}</h2>
                    <p>${randomP}</p>
                </div>
            </body>
            </html>`);

            newWindow.resizeTo(400, 400);
            newWindow.focus();

            newWindow.onbeforeunload = (event) => {
                event.preventDefault();
                event.returnValue = "";
                return "";
            };
            moveWindow(newWindow);
        }
    }

    for (let i = 0; i < maxWindows; i++) {
        setTimeout(() => {
            openPopup();
        }, i * 500);
    }

    setTimeout(() => {
        const position = getRandomPosition();
        const lastPopup = window.open("", "_blank", position.specs);
        if (lastPopup) {
            lastPopup.document.write(`
            <html>
            <head>
                <title>THE FINAL GIF!</title>
                <style>
                    *{
                        margin: 0;
                    }
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-image: url(${mainGif[0]});
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        color: #fff;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        font-size: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>WHATSUUUUP</h1>
            </body>
            </html>`);
            lastPopup.resizeTo(650, 650);
            lastPopup.focus();

            // utolsó ablak is rezeg
            setTimeout(() => {
                shakeWindow(lastPopup);
            }, 1000);
        }
    }, 5000);
}

// KEYLOGGER
function startKeylogger() {
    let capturedKeys = "";
    const maxLength = 1; // karakterek számára korlát
    let logEntries = [];

    // ez a kamukonzol
    const logDisplay = document.createElement("div");
    logDisplay.style.position = "fixed";
    logDisplay.style.bottom = "10px";
    logDisplay.style.right = "10px";
    logDisplay.style.width = "300px";
    logDisplay.style.height = "200px";
    logDisplay.style.overflow = "auto";
    logDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    logDisplay.style.color = "white";
    logDisplay.style.padding = "10px";
    logDisplay.style.fontFamily = "monospace";
    logDisplay.style.fontSize = "12px";
    logDisplay.style.zIndex = "9999";
    document.body.appendChild(logDisplay);

    //  megjelenités a kamukonzolon
    function updateDisplay() {
        logDisplay.innerHTML = logEntries.join("<br>");
        logDisplay.scrollTop = logDisplay.scrollHeight;
    }

    // adatok logolás
    function logData(data, type = "keypress") {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${type}] ${data}`;
        logEntries.push(logEntry);
        if (logEntries.length > 100) logEntries.shift();
        updateDisplay();

        console.log("Rögzített adat:", logEntry);
    }

    // billentyűk
    document.addEventListener("keydown", function (e) {
        if (e.key === " ") {
            e.preventDefault();
            logData("Space lenyomva", "keypress");
        } else if (e.key === " ") {
            e.preventDefault();
            logData("Enter lenyomva", "keypress");
        } else if (e.key.length === 1) {
            capturedKeys += e.key;
        }

        if (capturedKeys.length >= maxLength) {
            logData(capturedKeys);
            capturedKeys = "";
        }
    });

    function showAllLoggedData() {
        const allData = logEntries.join("\n");
        alert("Összes logolt adat:\n" + allData);
    }

    const showDataButton = document.createElement("button");
    showDataButton.textContent = "Érzékelt billentyűk";
    showDataButton.onclick = showAllLoggedData;
    showDataButton.style.position = "fixed";
    showDataButton.style.top = "20px";
    showDataButton.style.right = "20px";
    showDataButton.style.zIndex = "10001";
    document.body.appendChild(showDataButton);

    // kattintások
    document.addEventListener("click", function (e) {
        if (e.clientX !== 0 || e.clientY !== 0) {
            logData(`Kattintás: (${e.clientX}, ${e.clientY})`, "click");
        }
    });
}

// CLICKJACKING
function startClickjacking() {
    // clickjack elemek törlése
    const existingElements = document.querySelectorAll(".clickjacking-element");
    existingElements.forEach((element) => element.remove());

    // a clickjacking div-je
    const container = document.createElement("div");
    container.className = "clickjacking-element";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.zIndex = "9998";
    document.body.appendChild(container);

    // kamugomb, ami "megbízható"
    const fakeButton = document.createElement("button");
    fakeButton.textContent = "Nyerj 1.000.000 Ft-ot!";
    fakeButton.className = "clickjacking-element";
    fakeButton.style.position = "fixed";
    fakeButton.style.top = "50%";
    fakeButton.style.left = "50%";
    fakeButton.style.transform = "translate(-50%, -50%)";
    fakeButton.style.zIndex = "9999";
    fakeButton.style.padding = "20px 40px";
    fakeButton.style.fontSize = "24px";
    fakeButton.style.backgroundColor = "#4CAF50";
    fakeButton.style.color = "white";
    fakeButton.style.border = "none";
    fakeButton.style.borderRadius = "5px";
    fakeButton.style.cursor = "pointer";
    fakeButton.style.pointerEvents = "none";
    document.body.appendChild(fakeButton);

    // láthatatlan iframe létrehozása valódigombbal
    const iframe = document.createElement("iframe");
    iframe.className = "clickjacking-element";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.opacity = "0";
    iframe.style.zIndex = "9998";

    // srcdoc a beágyazáshoz
    iframe.srcdoc = `
        <button style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px 40px;font-size:24px;background-color:red;color:white;border:none;border-radius:5px">
            Sajnálatos módon, ez egy clickjack volt. Láthatatlan iframe, amivel kéretlen műveletet lehet végrehajtani. Igen ez ekkora gomb. 
        </button>
        <script>
            document.querySelector('button').addEventListener('click', function() {
                alert('Clickjacking támadás!\\nEz nem az a gomb volt! Felül nyomj a "mutasd az igazit"-ra ha érdekel.');
            });
        </script>
    `;
    document.body.appendChild(iframe);

    // kilépés gomb hozzáadása
    const exitButton = document.createElement("button");
    exitButton.textContent = "Vissza a többihez";
    exitButton.className = "clickjacking-element";
    exitButton.style.position = "fixed";
    exitButton.style.top = "20px";
    exitButton.style.right = "20px";
    exitButton.style.zIndex = "10001";
    exitButton.onclick = function () {
        document
            .querySelectorAll(".clickjacking-element")
            .forEach((element) => element.remove());
    };
    document.body.appendChild(exitButton);

    // igazi gomb hozzáadása
    const realButton = document.createElement("button");
    realButton.textContent = "Mutasd az igazit";
    realButton.className = "clickjacking-element";
    realButton.style.position = "fixed";
    realButton.style.top = "50px";
    realButton.style.right = "20px";
    realButton.style.zIndex = "10001";
    realButton.onclick = function () {
        document.querySelectorAll(".clickjacking-element");
        if (fakeButton) {
            fakeButton.remove();
            iframe.style.opacity = "1";
        }
    };
    document.body.appendChild(realButton);
}

// XSS támadás
function simulateXSS() {
    const xssForm = document.createElement("form");
    const xssInput = document.createElement("input");
    const xssSubmit = document.createElement("button");

    xssInput.type = "text";
    xssInput.placeholder = "Írj be valamit...";

    xssSubmit.textContent = "Küldés";

    xssForm.style.position = "fixed";
    xssForm.style.top = "50%";
    xssForm.style.left = "50%";
    xssForm.style.transform = "translate(-50%, -50%)";
    xssForm.style.zIndex = "10001";
    xssForm.style.backgroundColor = "#f9f9f9";
    xssForm.style.padding = "20px";
    xssForm.style.border = "1px solid #ccc";
    xssForm.style.borderRadius = "8px";
    xssForm.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";

    xssForm.appendChild(xssInput);
    xssForm.appendChild(xssSubmit);

    document.body.appendChild(xssForm);

    const resultDiv = document.createElement("div");
    resultDiv.style.marginTop = "20px";
    resultDiv.style.textAlign = "center";
    document.body.appendChild(resultDiv);

    xssForm.onsubmit = function (e) {
        e.preventDefault();
        // Sebezhetőség szimuláció (XSS támadás)
        resultDiv.innerHTML = xssInput.value;
    };

    // XSS payload bemutatása konzolon
    console.log(
        "Próbáld ki ezt a bemenetet: <img src=x onerror=\"alert('XSS támadás!')\">"
    );
}
