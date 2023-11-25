const content = {
    'en': {
        'Header': 'You can send some Cryptocurrency to one of these wallets',
        'WalletFooter': '<h2>You can go back to the main site by clicking the back button.</h2><div id="backbutton"><a href="index.html" class="link">Back</a></div>',
        'Language': 'Language: ',
        'Footer': '2023 © Adam Burakowski - Programmer, writer and YouTube creator. Contact me at adam.burakowski.kontakt@gmail.com',
        'Tooltip': 'Copy to clipboard',
    },
    'pl': {
        'Header': 'Możesz przesłać mi kryptowalutę na jeden z tych portfeli',
        'WalletFooter': '<h2>Możesz wrócić do strony głównej naciskając przycisk powrót.</h2><div id="backbutton"><a href="index.html" class="link">Powrót</a></div>',
        'Language': 'Język: ',
        'Footer': '2023 © Adam Burakowski - Programista, pisarz oraz twórca YouTube. Mail kontaktowy: adam.burakowski.kontakt@gmail.com',
        'Tooltip': 'Skopiuj do schowka',
    },
    'universal': {
        'Paragraphs': '<p>Monero:<br><span class="wallet" id="monero">41wwRgNbQMm6ctxEqgffwbCsodRTQFq528HyQgnoUXZB877JJsbSYiLEiDTB9UNPYk669o9E9Zvst69eZp3ZGA3iPkPRqzD<span class="tooltip"></span></span></p><br><p>Bitcoin:<br><span class="wallet" id="bitcoin">bc1q77kv9pfd4h389kg288lcdd7kuv336ujyuh9l4z<span class="tooltip"></span></span></p><br><br><br>',
    }
};

var storedLanguage = localStorage.getItem('selectedLanguage');

let currentLanguage = storedLanguage || 'en';

function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    document.getElementById('language').innerText = content[currentLanguage]['Language'];
    document.getElementsByTagName('footer')[0].innerText = content[currentLanguage]['Footer']
    updateWalletsList();
    setupWalletEvents();
}

function updateWalletsList() {
    document.getElementById('walletheader').innerText = content[currentLanguage]['Header'];
    document.getElementById('walletparagraphs').innerHTML = content['universal']['Paragraphs'];
    var tooltips = document.getElementsByClassName('tooltip');

    Array.from(tooltips).forEach(function(tooltip) {
        tooltip.innerText = content[currentLanguage]['Tooltip'];
    })
    document.getElementById('walletfooter').innerHTML = content[currentLanguage]['WalletFooter'];
}

function copyToClipboard(key) {
    var keyElement = document.getElementById(key)
    var textToCopy = keyElement.textContent || keyElement.innerText;

    var tooltipElement = keyElement.querySelector('.tooltip');
    if (tooltipElement) {
        var tooltipText = tooltipElement.textContent || tooltipElement.innerText;
        textToCopy = textToCopy.replace(tooltipText, '')
    }

    navigator.clipboard.writeText(textToCopy)
        .then(function(){
            console.log('Text succesfully copied to clipboard');
        })
        .catch(function(err){
            console.log('Unable to copy text to clipboard', err);
    })
}

function setupWalletEvents(){
    var wallets = document.getElementsByClassName('wallet');

    Array.from(wallets).forEach(function(wallet) {
        var tooltipElement = wallet.querySelector('.tooltip');

        wallet.addEventListener('click', function(){
            copyToClipboard(wallet.id);
        });

        wallet.addEventListener('mousemove', function(e){
            var x = ((e.clientX - wallet.offsetLeft) / wallet.offsetWidth) * 100 + '%';
            var y = ((e.clientY - wallet.offsetTop) / wallet.offsetHeight) * 100 + '%';

            tooltipElement.style.left = x;
            tooltipElement.style.top = y;
        });

        wallet.addEventListener('mouseover', function(){
            tooltipElement.style.display = 'block';
            wallet.style.color = 'orange';
        });

        wallet.addEventListener('mouseout', function(){
            tooltipElement.style.display = 'none';
            wallet.style.color = '';
        });
    });
}

changeLanguage(currentLanguage);
setupWalletEvents();