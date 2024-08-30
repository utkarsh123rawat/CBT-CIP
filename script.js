document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    const newEvent = {
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation
    };

    // Retrieve existing events from localStorage
    let events = JSON.parse(localStorage.getItem('events')) || [];
    // Add new event
    events.push(newEvent);
    // Save updated events to localStorage
    localStorage.setItem('events', JSON.stringify(events));

    displayEvents();
    document.getElementById('eventForm').reset();
});

function displayEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.forEach(storedEvent => {
        const listItem = document.createElement('li');
        listItem.textContent = `Event: ${storedEvent.name} | Date: ${storedEvent.date} | Time: ${storedEvent.time} | Location: ${storedEvent.location}`;
        eventList.appendChild(listItem);
    });
}

// Display events when the page loads
document.addEventListener('DOMContentLoaded', displayEvents);
