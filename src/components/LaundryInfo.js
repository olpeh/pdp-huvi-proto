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

function renderWeekDayDataContents(weekDay, withDetails = false) {
  return (
    <div className="weekday-data">
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon jackets" />
        <div className="weekday-data-text">
          x{weekDay.data.jackets.amount}
        </div>
        <div className="weekday-data-details">
          {withDetails ? weekDay.data.jackets.details : null}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon pants" />
        <div className="weekday-data-text">
          x{weekDay.data.pants.amount}
        </div>
        <div className="weekday-data-details">
          {withDetails ? weekDay.data.pants.details : null}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon shirts" />
        <div className="weekday-data-text">
          x{weekDay.data.shirts.amount}
        </div>
        <div className="weekday-data-details">
          {withDetails ? weekDay.data.shirts.details : null}
        </div>
      </div>
      {withDetails
        ? null
        : <div className="weekday-data-wrapper">
            <div className="weekday-data-icon laundry" />
          </div>}
    </div>
  );
}

function renderWeekDayData(weekDay) {
  if (!weekDay.data) {
    return <div className="weekday-data" />;
  }

  return renderWeekDayDataContents(weekDay);
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
            jackets: {
              amount: 1,
              details: 'Alepa Softshell Jacket',
            },
            pants: {
              amount: 2,
              details: 'Alepa T-Shirt',
            },
            shirts: {
              amount: 3,
              details: 'Alepa Trousers',
            },
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
      <div className="LaundryInfo-details-wrapper">
        <div className="LaundryInfo-details">
          <div className="LaundryInfo-details-heading">
            Clothes remaining until laundry day:
          </div>
          {renderWeekDayDataContents(weekData[0].weekDayData[3], true)}
        </div>
        <div className="LaundryInfo-week-number">
          Week {moment().format('W')}
        </div>
      </div>
    </div>
  );
};

export default LaundryInfo;
