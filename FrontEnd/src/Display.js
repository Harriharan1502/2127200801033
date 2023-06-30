import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    this.fetchTrainSchedules();
  }

  fetchTrainSchedules = async () => {
    try {
      const rreact = await axios.get('API_ENDPOINT_URL');
      
      console.log(rreact.data);
    } catch (error) {
      
      console.error('Error fetching train schedules:', error);
    }
  };

  load() {

        return (
            <div>
              <h2>Train Schedule</h2>
              {trainData.length > 0 ? (
                <table>
                  
                    <tr>
                      <th>Train Number</th>
                      <th>Departure Time</th>
                      <th>Arrival Time</th>
                      {/* Add more columns for other schedule details */}
                    </tr>
                  
                  <tbody>
                    {trainData.map((train) => (
                      <tr key={train.id}>
                        <td>{train.trainNo}</td>
                        <td>{train.departureTime}</td>
                        <td>{train.arrivalTime}</td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>train schedule...</p>
              )}
            </div>
          );
        };
        

  }
  export default Schedule;
