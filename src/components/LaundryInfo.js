import React from 'react';
import moment from 'moment';
import './LaundryInfo.scss';

function renderWeekDayShort(weekDay) {
  let classes = 'weekday-short';
  if (weekDay.weekDay === moment().isoWeekday()) {
    classes = 'weekday-short current';
  }

  return (
    <div className={classes}>
      {weekDay.dayShort}
    </div>
  );
}
function renderWeekDayData(weekDay) {
  if (!weekDay.data) {
    return <div className="weekday-data" />;
  }

  return (
    <div className="weekday-data">
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon jackets" />
        <div className="weekday-data-text">
          x{weekDay.data.jackets}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon pants" />
        <div className="weekday-data-text">
          x{weekDay.data.pants}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon shirts" />
        <div className="weekday-data-text">
          x{weekDay.data.shirts}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon laundry" />
      </div>
    </div>
  );
}

const LaundryInfo = () => {
  const weekData = [
    {
      weekDayData: [
        {
          weekDay: 1,
          day: 'Monday',
          dayShort: 'Mon',
        },
        {
          weekDay: 2,
          day: 'Tuesday',
          dayShort: 'Tue',
        },
        {
          weekDay: 3,
          day: 'Wednesday',
          dayShort: 'Wed',
        },
        {
          weekDay: 4,
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
          weekDay: 5,
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
            {renderWeekDayShort(weekDay)}
          </div>
        ))}
      </div>
      <span className="LaundryInfo-week-number">{moment().format('W')}</span>
    </div>
  );
};

export default LaundryInfo;
