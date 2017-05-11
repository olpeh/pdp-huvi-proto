import React from 'react';
import moment from 'moment';
import './LaundryInfo.scss';

function renderWeekdayShort(weekDay) {
  return (
    <div className="weekday-short">
      {weekDay.weekDay === moment().isoWeekday()
        ? <div className="current">{weekDay.dayShort}</div>
        : weekDay.dayShort}
    </div>
  );
}

function renderWeekdayDataContents(
  weekDay,
  withDetails = false,
  hideLaundry = false
) {
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
      {hideLaundry
        ? null
        : <div className="weekday-data-wrapper">
            <div className="weekday-data-icon laundry" />
          </div>}
    </div>
  );
}

function renderWeekdayData(weekDay) {
  if (!weekDay.data) {
    return <div className="weekday-data" />;
  }

  return renderWeekdayDataContents(weekDay);
}

const LaundryInfo = () => {
  const weekdayNow = moment().isoWeekday();
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const weekData = [
    {
      weekDayData: [
        {
          weekDay: weekdayNow,
          day: weekdays[(weekdayNow - 1) % 5],
          dayShort: weekdaysShort[(weekdayNow - 1) % 5],
        },
        {
          weekDay: weekdayNow + 1,
          day: weekdays[weekdayNow % 5],
          dayShort: weekdaysShort[weekdayNow % 5],
          data: {
            jackets: {
              amount: 1,
              details: 'Alepa Softshell Jacket',
            },
            pants: {
              amount: 2,
              details: 'Alepa Trousers',
            },
            shirts: {
              amount: 3,
              details: 'Alepa T-Shirt',
            },
            laundryDay: true,
          },
        },
        {
          weekDay: weekdayNow + 2,
          day: weekdays[(weekdayNow + 1) % 5],
          dayShort: weekdaysShort[(weekdayNow + 1) % 5],
        },
        {
          weekDay: weekdayNow + 3,
          day: weekdays[(weekdayNow + 2) % 5],
          dayShort: weekdaysShort[(weekdayNow + 2) % 5],
        },
        {
          weekDay: weekdayNow + 4,
          day: weekdays[(weekdayNow + 3) % 5],
          dayShort: weekdaysShort[(weekdayNow + 3) % 5],
        },
      ],
    },
  ];

  const remainingGarments = {
    weekDay: weekdayNow + 1,
    day: weekdays[weekdayNow % 5],
    dayShort: weekdaysShort[weekdayNow % 5],
    data: {
      jackets: {
        amount: 1,
        details: 'Alepa Softshell Jacket',
      },
      pants: {
        amount: 1,
        details: 'Alepa Trousers',
      },
      shirts: {
        amount: 1,
        details: 'Alepa T-Shirt',
      },
    },
  };

  return (
    <div className="LaundryInfo">
      <div className="LaundryInfo-heading">
        New clean workwear will arrive <b>tomorrow</b>. Have a nice workday!
      </div>
      <div className="LaundryInfo-date-info">
        {moment().format('DD.MM.YYYY')}
      </div>
      <div className="LaundryInfo-week-calendar">
        {weekData[0].weekDayData.map(weekDay => {
          const classes = `week-calendar-day ${weekDay.day}`;
          return (
            <div className={classes} key={weekDay.day}>
              {renderWeekdayData(weekDay)}
              {renderWeekdayShort(weekDay)}
            </div>
          );
        })}
      </div>
      <div className="LaundryInfo-details-wrapper">
        <div className="LaundryInfo-details">
          <div className="LaundryInfo-details-heading">
            Clean clothes remaining:
          </div>
          {renderWeekdayDataContents(remainingGarments, false, true)}
        </div>
        <div className="LaundryInfo-notification">
          <div>
            Remember to drop your dirty garments to the laundry bin
            {' '}
            <b>today!</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryInfo;
