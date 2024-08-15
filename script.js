document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll('.Filter ul li');
    
    const cards = document.querySelectorAll('.Product_cards .card');

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.textContent.trim();
            if (category == 'Всі товари') {
                cards.forEach(card => { 
                    card.style.display = 'block';
                })
            } else {
                cards.forEach(card => {
                const cardTitle = card.querySelector('.card-title').textContent;
                

                if (cardTitle.toLowerCase().includes(category.toLowerCase())) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            }

            
        });
    });
});