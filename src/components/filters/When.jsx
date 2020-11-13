import React from 'react';

class When extends React.Component {
  render() {
    return (
      <section className="When">
        <span className="today">Aujourd`hui</span>
        <span className="in-day">Journée</span>
        <span className="in-evening">Soirée</span>
        <span className="w-e">Wee-end</span>
      </section>
    );
  }
}

export default When;
