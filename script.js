// script.js

document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('monthYear');
    const calendarDates = document.getElementById('calendarDates');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        monthYear.textContent = `${months[month]} ${year}`;
        calendarDates.innerHTML = '';
        
        for (let i = 0; i < firstDay; i++) {
            calendarDates.innerHTML += '<div></div>';
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            calendarDates.innerHTML += `<div>${day}</div>`;
        }
    }
    
    prevButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });
    
    nextButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    });
    
    generateCalendar(currentMonth, currentYear);
});
