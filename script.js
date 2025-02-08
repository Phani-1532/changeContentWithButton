document.addEventListener('DOMContentLoaded', function () {
    const allBtns = document.getElementById('allBtns');
    const content = document.getElementById('content');

    allBtns.addEventListener('click', function (e) {
        // Remove active class from all buttons first
        const buttons = allBtns.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        if (e.target.tagName === 'BUTTON') {
            e.target.classList.add('active');

            let value = e.target.value;
            if (value === 'First Content') {
                content.innerHTML = 'The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal. Completed in 1648, it is a masterpiece of Mughal architecture, blending Persian, Islamic, and Indian styles. Recognized as a UNESCO World Heritage Site, the Taj Mahal is famous for its intricate carvings, symmetrical gardens, and the way its appearance changes with the light. It stands as a symbol of love and is one of the most visited monuments in the world.'
                content.style.display = 'block'
            } else if (value === 'Second Content') {
                content.innerHTML = 'The best time to visit the Taj Mahal is from October to March when the weather is pleasant and ideal for sightseeing. Early mornings or late afternoons offer the best views, with softer lighting enhancing its beauty. Visiting during sunrise or sunset provides a magical experience, while the full moon nights offer a breathtaking view of the monument under moonlight. It is open every day except Fridays, with special night viewings available on select days.'
                content.style.display = 'block'
            } else if (value === 'Third Content') {
                content.innerHTML = 'The Taj Mahal complex offers several attractions, including the stunning white marble mausoleum, the grand entrance gate, the beautifully landscaped Mughal gardens, and the reflecting pool. The intricate calligraphy, inlaid gemstone designs, and symmetrical minarets add to its charm. Visitors can also explore the nearby Mehtab Bagh for a picturesque view of the Taj Mahal across the Yamuna River. The adjacent Agra Fort and the bustling local markets further enhance the experience.'
                content.style.display = 'block'
            }
        }
    })
})

