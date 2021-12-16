
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

    let cards = Array.from(document.getElementsByClassName('ghx-issue'));

    // Filter out items from first column (_todo items)
    const grid = Array.from(document.getElementsByClassName('ghx-columns'));
    Array.isArray(grid) && grid.map(columns => {
        const columnElements = columns.getElementsByClassName('ghx-column');
        const firstColumnElements = columnElements.length > 0 ? Array.from(columnElements[0].children) : null;
        Array.isArray(firstColumnElements) && firstColumnElements.map(firstColumnElement => {
            cards = cards.filter(card => card !== firstColumnElement);
        })
    })

    // Fill cards with color
    Array.isArray(cards) && cards.map(card => {
        if (card.classList && card.classList.length > 0 && !card.classList.contains('ghx-done')) {
            card.classList.forEach(className => {
                const matches = className.match(/ghx-days-(\d+)/);
                if (matches && matches.length > 1) {
                    card.style.backgroundColor = getColor(Number.parseInt(matches[1]));
                }
            })
        }
    })
}

setTimeout(changeCardsColor, 1000);
