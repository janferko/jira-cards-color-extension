
function getColor(days) {
    if (days >= 10) {
        return '#CD6155';
    } else if (days >= 5) {
        return '#E59866';
    } else if (days >= 2) {
        return '#F9E79F';
    } else {
        return '';
    }
}

function changeCardsColor() {

    const cards = document.getElementsByClassName('ghx-issue');
    if (cards.length > 0) {
        for (var i = 0; i < cards.length; i++) {
            const card = cards[i];
            if (card.classList && card.classList.length > 0 && !card.classList.contains('ghx-done')) {
                card.classList.forEach(className => {
                    const matches = className.match(/ghx-days-(\d+)/);
                    console.log(matches)
                    if (matches && matches.length > 1) {
                        card.style.backgroundColor = getColor(Number.parseInt(matches[1]));
                    }
                })
            }
        }
    }
}

setTimeout(changeCardsColor, 1000);
