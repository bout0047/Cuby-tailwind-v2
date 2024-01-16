export const load = async () => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:3011/events');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch events data: ${response.statusText}`);
      }
  
      const eventData = await response.json();
      return eventData;
    };
  
    return {
      events: fetchEvents(),
    };
  };
  