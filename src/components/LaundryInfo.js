import React from 'react';
import moment from 'moment';
import './LaundryInfo.scss';

function renderWeekDayData(weekDay) {
  if (!weekDay.data) {
    return <div className="weekday-data" />;
  }

  return (
    <div className="weekday-data">
      <div className="weekday-data-icon jackets">
        x{weekDay.data.jackets}
      </div>
      <div className="weekday-data-icon pants">
        x{weekDay.data.pants}
      </div>
      <div className="weekday-data-icon shirts">
        x{weekDay.data.shirts}
      </div>
      <div className="weekday-data-icon laundry" />
    </div>
  );
}

const LaundryInfo = () => {
  const weekData = [
    {
      weekDayData: [
        {
          day: 'Monday',
          dayShort: 'Mon',
        },
        {
          day: 'Tuesday',
          dayShort: 'Tue',
        },
        {
          day: 'Wednesday',
          dayShort: 'Wed',
        },
        {
          day: 'Thursday',
          dayShort: 'Thu',
          data: {
            jackets: 1,
            pants: 2,
            shirts: 3,
            laundryDay: true,
          },
        },
        {
          day: 'Friday',
          dayShort: 'Fri',
        },
      ],
    },
  ];
  return (
    <div className="LaundryInfo">
      <div className="LaundryInfo-heading">
        New clean workwear will arrive on <b>Thursday</b>. Have a nice week!
      </div>
      <div className="LaundryInfo-date-info">
        {moment().format('DD.MM.YYYY')}
      </div>
      <div className="LaundryInfo-week-calendar">
        {weekData[0].weekDayData.map(weekDay => (
          <div className="week-calendar-day" key={weekDay.day}>
            {renderWeekDayData(weekDay)}
            <div className="weekday-short">
              {weekDay.dayShort}
            </div>
          </div>
        ))}
      </div>
      <span className="LaundryInfo-week-number">{moment().format('W')}</span>
    </div>
  );
};

export default LaundryInfo;
