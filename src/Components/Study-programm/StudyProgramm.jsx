import './Studyprogramm.css';
function StudyProgramm({ id, el }) {

  return (
    <div className="programm_block">
      <h3>{el[0].title}</h3>
      <div className="flex_container">
        <div className="block_column">
          <div>
            <div className="line" />
            <div className="title">1 модуль</div>
          </div>
          <div className="block_item">
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
        <div className="block_column">
          <div>
            <div className="line" />
            <div className="title">2 модуль</div>
          </div>
          <div className="block_item">
            <ul>
              {el[1].whatWillYouLearn.map((elLearn, id) => {
                return (
                  <li key={id}>
                    <p>{elLearn.string}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyProgramm;
