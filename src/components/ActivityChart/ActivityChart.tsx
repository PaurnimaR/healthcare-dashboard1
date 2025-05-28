import './ActivityChart.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const ActivityChart = () => {
  // Simulated heights for the 3 bars per day (can be made dynamic)
  const data = days.map(() => [
    30 + Math.random() * 40, // grey
    40 + Math.random() * 50, // cyan
    20 + Math.random() * 50  // purple
  ]);

  return (
    <div className="activity-chart">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointments on this week</span>
      </div>

      <div className="bar-chart">
        {data.map((heights, idx) => (
          <div className="bar-group" key={idx}>
            <div className="bars">
              <div className="bar grey" style={{ height: `${heights[0]}px` }} />
              <div className="bar cyan" style={{ height: `${heights[1]}px` }} />
              <div className="bar purple" style={{ height: `${heights[2]}px` }} />
            </div>
            <span className="day-label">{days[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
