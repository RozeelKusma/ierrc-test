import React from "react";
import "./volunteer.css";

const VolunteerForm = () => {
  return (
    <div className="volunteer_main">
      <div className="volunteer_container">
        <div className="volunteer_info">
          <p className="v_details">
            Green after-school and farm stay, located in a remote community
            namely Dingla, Nepal is looking for volunteers who are willing to
            work with us and support our community youth and children teaching
            them one of the following skills as per their convenience:
            <ul>
              <li>
                Teaching English through the use of literature (e.g. drama)
              </li>
              <li>
                Guiding students in carrying out thematic projects, e.g.
                composting and kitchen gardening, recycling non-biodegradable
                waste, entrepreneurship and any other eco-friendly projects
              </li>
              <li>Guiding students in yoga and meditation</li>
            </ul>
          </p>
          <p>
            <b>Volunteering hours: </b>5 days a week, 2 hrs a day with flexible
            schedule (mornings or evenings).
            <br />
            <b>Students age range: </b>8 - 20 years <br />
            <b>Accommodation: </b>
            <ol>
              <li>Sleep in tent or typical village hut: 20$ per month</li>
              <li>
                Shared room in the after-school building with shared bathroom:
                100$ per month
              </li>
              <li>Separate room with separate bathroom: 200$ per month</li>
            </ol>
            <b>Fooding: </b><br/>
            For sustainability, the farm stay operates a local outlet. It sells
            affordable Nepali dal bhat, dumplings, millet/buckwheat bread, and
            seasonal fruits and vegetables.
            <br /> Example:
            <br /> Millet pan cake with local jam: 1$
            <br /> Vegetable Dumpling: 2$
            <br /> A set of Dal, Bhat and curry: 5$
          </p>
        </div>
        <div className="vform_container">
            Volunteer Form
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
