import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getStudyProgramm } from '../../redux/actions/programmAction';
import StudyProgramm from '../Study-programm/StudyProgramm';
import Footer from '../Footer/Footer';
import './Main.css';
import StudyProgrammMobile from '../StudyProgrammMobile/StudyProgrammMobile';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudyProgramm());
  }, []);
  const sProgramm = useSelector((state) => state.programms);

  const isMobile = useMediaQuery({
    query: '(max-width: 375px)',
  });

  console.log(isMobile);

  return (
    <div className="main">
      <h2 className="header">Специализированные дисциплины</h2>
      <div className="study_container">
        {sProgramm.map((el, id) =>
          isMobile ? (
            <StudyProgrammMobile key={id} id={id} el={el} />
            ) : (
            <StudyProgramm key={id} id={id} el={el} />
          )
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Main;
