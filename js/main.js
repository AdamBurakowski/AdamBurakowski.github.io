const content = {
    'en': {
        'Who am I?': '<p class="moreinfo">My name is Adam Burakowski,<br>I do many things, but mainly I program in C and Python, make videos on YouTube, and write short stories on Wattpad. You can find all of my stuff on my platforms linked below.</p>',
        'My personal projects': '<p class="moreinfo">Currently I don\'t have any big projects to share here, however you can find everything I\'ve done on my Github. It\'s linked below with my socials.</p>',
        'Donate': '<div id="container"><div class="donateblock" id="donateinfo"><p class="moreinfo">You can support my work via Patronite, or make a donation to one of my crypto wallets</p></div><div class="donateblock" id="patronite"><a href="https://patronite.pl/adam-burakowski" target="_blank" class="link">Patronite</a></div><div class="donateblock" id="cryptowallets"><a href="./wallets" class="link">My Wallets</a></div></div>',
        'Quote': '„We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard”<br>—John F. Kennedy',
        'Language': 'Language: ',
        'Wai': 'Who am I?',
        'Mpp': 'My personal projects',
        'Dnt': 'Donate',
        'Footer': '2023 © Adam Burakowski - Programmer, writer and YouTube creator. Contact me at adam.burakowski.kontakt@gmail.com',
    },
    'pl': {
        'Who am I?': '<p class="moreinfo">Nazywam się Adam Burakowski,<br>Zajmuję się wieloma rzeczami, jednak głównie programuję w C i Pythonie, tworzę filmy na YouTubie, i piszę opowiadania na Wattpadzie. Wszystkie te rzeczy znajdziesz na moich platformach, do których linki znajdują się poniżej.</p>',
        'My personal projects': '<p class="moreinfo">Na ten moment nie mam za sobą żadnych większych projektów, Jednak możesz znaleźć wszystko co zrobiłem na Githubie, do którego link znajduje się pośród moich social mediów</p>',
        'Donate': '<div id="container"><div class="donateblock" id="donateinfo"><p class="moreinfo">Możesz mnie wspierać, zostając patronem w serwisie Patronite, lub przesyłając pieniądze na jeden z moich portweli kryptowalut</p></div><div class="donateblock" id="patronite"><a href="https://patronite.pl/adam-burakowski" target="_blank" class="link">Patronite</a></div><div class="donateblock" id="cryptowallets"><a href="./wallets" class="link">Portfele</a></div></div>',
        'Quote': '„Wybieramy się na Księżyc w tej dekadzie i podejmujemy inne wyzwania, nie dlatego, że są łatwe, ale dlatego, że są trudne”<br>—John F. Kennedy',
        'Language': 'Język: ',
        'Wai': 'Kim jestem?',
        'Mpp': 'Moje projekty',
        'Dnt': 'Wsparcie',
        'Footer': '2023 © Adam Burakowski - Programista, pisarz oraz twórca YouTube. Mail kontaktowy: adam.burakowski.kontakt@gmail.com',
    }
};

var storedLanguage = localStorage.getItem('selectedLanguage');

let currentLanguage = storedLanguage || 'en';
let currentKey = 'Who am I?';

function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    document.getElementById('quote').innerHTML = content[currentLanguage]['Quote'];
    document.getElementById('language').innerText = content[currentLanguage]['Language'];
    document.getElementById('wai').innerText = content[currentLanguage]['Wai'];
    document.getElementById('mpp').innerText = content[currentLanguage]['Mpp'];
    document.getElementById('dnt').innerText = content[currentLanguage]['Dnt'];
    document.getElementsByTagName('footer')[0].innerText = content[currentLanguage]['Footer']
    
    updateBigBlock();
}

function changeKey(key) {
    currentKey = key;

    updateBigBlock();
}

function updateBigBlock() {
    // Update the content of bigblock with the clicked block's text
    document.getElementById('bigblock').innerHTML = content[currentLanguage][currentKey];
}

changeLanguage(currentLanguage);
