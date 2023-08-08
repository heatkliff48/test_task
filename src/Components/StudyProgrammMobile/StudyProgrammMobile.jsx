import './SPM.css';
function StudyProgrammMobile({ id, el }) {
  return (
    <div className="programm_block">
      <h3>{el[0].title}</h3>
      <div className="accordion" id="customAccordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link custom-accordion-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Иконка слева <span className="accordion-icon">+</span>
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#customAccordion"
          >
            <div className="card-body">Содержание здесь.</div>
          </div>
        </div>
      </div>

      {/* <div className="study_programm_mobile">
        <div className="dropdown">
          <h3 className="dropdown-title">1 модуль</h3>
          <div className="dropdown-content">
            <ul>
              {el[0].whatWillYouLearn.map((elLearn, id) => {
                return (
                  <li key={id}>
                    <p>{elLearn.string}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default StudyProgrammMobile;
