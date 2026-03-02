import eventsData from '../data/events.json'

export default function Events() {
    return (
        <section className="page-section">
            <div className="container">
                <h1 className="section-title">Exclusive Events</h1>
                <div className="events-grid">
                    {eventsData.map(event => (
                        <div key={event.id} className="event-card">
                            <div className="event-img-wrapper" style={{ background: `linear-gradient(135deg, ${event.color} 0%, ${event.color}dd 100%)` }}>
                                <img src={event.image} alt={event.title} loading="lazy" />
                            </div>
                            <div className="event-info">
                                <h3>{event.title}</h3>
                                <p>{event.date} • {event.location}</p>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
