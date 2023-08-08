import './Footer.css';
function Footer() {
  return (
    <div className="footer_container">
      <div className="block_raw_footer">
        <div className="block_column_red">
          <div className="block_item_red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
              >
                <path d="M0 0L43 43H0V0Z" fill="#CD1800" />
              </svg>
              <path
                d="M43 43L-6.07005e-07 -5.90783e-07L43 3.8147e-06L43 43Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="block_text">
            <div className="title_footer">Практические модули</div>
            <div>
              <p className='p_footer'>
                Работа над собственными проектами: практика групповых взаимодействий,
                кейс-методы, эссе
              </p>
            </div>
          </div>
        </div>
        <div className="block_column_black">
          <div className="block_item_black">
            <div className="title_footer">Итоговая аттестация</div>
            <div>
              <ul>
                <li>
                  <p className='p_footer'>
                    Бизнес-проектирование (подготовка итоговой аттестационной работы,
                    консультирование по бизнес-проектированию)
                  </p>
                </li>
                <li>
                  <p className='p_footer'>Защита итоговой аттестационной работы</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
