import { useEffect, useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import 'react-calendar/dist/Calendar.css';
import { DivStyled } from './Calendar.styled';

const MEETS = new Set(['2023-09-09', '2023-09-12', '2023-09-22']);

export const Calendar = ({ schedule, setValue }) => {
  const [t, i18n] = useTranslation('global');
  const [today, setToday] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const hours = schedule.find(item => item.date === currentDate);

    if (hours) {
      setHours(prev => hours.time);
    }
  }, [schedule, currentDate]);

  const handleChangeDate = date => {
    const changedDate = format(new Date(date), 'yyyy-MM-dd');

    setValue('appointment_date', changedDate, {
      shouldValidate: true,
    });

    setCurrentDate(prev => changedDate);
  };

  const handleClickTime = time => {
    setValue('appointment_time', time, {
      shouldValidate: true,
    });
  };

  const checkDate = date => {
    const result = format(new Date(date), 'yyyy-MM-dd');

    if (MEETS.has(result)) {
      return 'content';
    }
    return null;
  };

  return (
    <DivStyled>
      <h2>{t('appointmentForm.thirdTitle')}</h2>

      <ReactCalendar
        onChange={handleChangeDate}
        // tileClassName="content"
        value={today}
        locale={'uk'}
        tileDisabled={({ activeStartDate, date, view }) =>
          date.getDay() === 0 || date.getDay() === 6
        }
        tileContent={({ activeStartDate, date, view }) =>
          view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null
        }
        tileClassName={({ activeStartDate, date, view }) => {
          if (view === 'month') {
            return checkDate(date);
          }
        }}
      />

      {hours.length > 0 && (
        <>
          <h2>{t('appointmentForm.fourthTitle')}</h2>
          <div>
            <ul>
              {hours.map((time, idx) => (
                <li key={idx} onClick={() => handleClickTime(time)}>
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </DivStyled>
  );
};

Calendar.propTypes = {
  schedule: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
