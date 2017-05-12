import React from 'react';
import moment from 'moment';
import './LaundryInfo.scss';

function renderDate(x, weekday) {
  const classes = `weekday-date date-${weekday}`;
  return (
    <div className={classes}>
      {moment().add(x, 'days').format('DD.MM.')}
    </div>
  );
}

function renderWeekdayShort(weekday, weekIndex) {
  return (
    <div className="weekday-short">
      {weekday.weekday === moment().isoWeekday() && !weekIndex
        ? <div className="current">{weekday.dayShort}</div>
        : weekday.dayShort}
      {isLaundryDay(weekday)
        ? <div className="weekday-data-wrapper">
            <span className="weekday-data-icon laundry" />
          </div>
        : null}
    </div>
  );
}

function renderWeekdayDataContents(data) {
  const laundryDayData = data || {
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
  };

  return (
    <div className="weekday-data">
      {data
        ? null
        : <div className="weekday-data-wrapper">
            <div className="weekday-data-text arriving-garments">
              Arriving garments
            </div>
          </div>}
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon jackets" />
        <div className="weekday-data-text">
          x{laundryDayData.jackets.amount}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon pants" />
        <div className="weekday-data-text">
          x{laundryDayData.pants.amount}
        </div>
      </div>
      <div className="weekday-data-wrapper">
        <div className="weekday-data-icon shirts" />
        <div className="weekday-data-text">
          x{laundryDayData.shirts.amount}
        </div>
      </div>
    </div>
  );
}

function getLaundryDay() {
  const weekdayNow = moment().isoWeekday();
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const laundryDayIndex = weekdayNow >= 5 ? 0 : weekdayNow;
  return weekdays[laundryDayIndex];
}

function isLaundryDay(weekday) {
  const weekdayNow = moment().isoWeekday();
  return (weekdayNow >= 5 && weekday.weekday === 1) ||
    (weekday.weekday === weekdayNow + 1 && weekday.weekday <= 5);
}

function renderWeekdayData(weekday) {
  if (isLaundryDay(weekday)) {
    return renderWeekdayDataContents();
  }
  return <div className="weekday-data" />;
}

const LaundryInfo = () => {
  const weekdayNow = moment().isoWeekday();
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const weekData = [
    {
      weekdayData: [
        {
          weekday: weekdayNow % 7,
          day: weekdays[(weekdayNow - 1) % 7],
          dayShort: weekdaysShort[(weekdayNow - 1) % 7],
        },
        {
          weekday: (weekdayNow + 1) % 7,
          day: weekdays[weekdayNow % 7],
          dayShort: weekdaysShort[weekdayNow % 7],
        },
        {
          weekday: (weekdayNow + 2) % 7,
          day: weekdays[(weekdayNow + 1) % 7],
          dayShort: weekdaysShort[(weekdayNow + 1) % 7],
        },
        {
          weekday: (weekdayNow + 3) % 7,
          day: weekdays[(weekdayNow + 2) % 7],
          dayShort: weekdaysShort[(weekdayNow + 2) % 7],
        },
        {
          weekday: (weekdayNow + 4) % 7,
          day: weekdays[(weekdayNow + 3) % 7],
          dayShort: weekdaysShort[(weekdayNow + 3) % 7],
        },
        {
          weekday: (weekdayNow + 5) % 7,
          day: weekdays[(weekdayNow + 4) % 7],
          dayShort: weekdaysShort[(weekdayNow + 4) % 7],
        },
        {
          weekday: (weekdayNow + 6) % 7,
          day: weekdays[(weekdayNow + 5) % 7],
          dayShort: weekdaysShort[(weekdayNow + 5) % 7],
        },
      ],
    },
    {
      weekdayData: [
        {
          weekday: weekdayNow % 7,
          day: weekdays[(weekdayNow - 1) % 7],
          dayShort: weekdaysShort[(weekdayNow - 1) % 7],
        },
        {
          weekday: (weekdayNow + 1) % 7,
          day: weekdays[weekdayNow % 7],
          dayShort: weekdaysShort[weekdayNow % 7],
        },
        {
          weekday: (weekdayNow + 2) % 7,
          day: weekdays[(weekdayNow + 1) % 7],
          dayShort: weekdaysShort[(weekdayNow + 1) % 7],
        },
        {
          weekday: (weekdayNow + 3) % 7,
          day: weekdays[(weekdayNow + 2) % 7],
          dayShort: weekdaysShort[(weekdayNow + 2) % 7],
        },
        {
          weekday: (weekdayNow + 4) % 7,
          day: weekdays[(weekdayNow + 3) % 7],
          dayShort: weekdaysShort[(weekdayNow + 3) % 7],
        },
        {
          weekday: (weekdayNow + 5) % 7,
          day: weekdays[(weekdayNow + 4) % 7],
          dayShort: weekdaysShort[(weekdayNow + 4) % 7],
        },
        {
          weekday: (weekdayNow + 6) % 7,
          day: weekdays[(weekdayNow + 5) % 7],
          dayShort: weekdaysShort[(weekdayNow + 5) % 7],
        },
      ],
    },
    {
      weekdayData: [
        {
          weekday: weekdayNow % 7,
          day: weekdays[(weekdayNow - 1) % 7],
          dayShort: weekdaysShort[(weekdayNow - 1) % 7],
        },
        {
          weekday: (weekdayNow + 1) % 7,
          day: weekdays[weekdayNow % 7],
          dayShort: weekdaysShort[weekdayNow % 7],
        },
        {
          weekday: (weekdayNow + 2) % 7,
          day: weekdays[(weekdayNow + 1) % 7],
          dayShort: weekdaysShort[(weekdayNow + 1) % 7],
        },
        {
          weekday: (weekdayNow + 3) % 7,
          day: weekdays[(weekdayNow + 2) % 7],
          dayShort: weekdaysShort[(weekdayNow + 2) % 7],
        },
        {
          weekday: (weekdayNow + 4) % 7,
          day: weekdays[(weekdayNow + 3) % 7],
          dayShort: weekdaysShort[(weekdayNow + 3) % 7],
        },
        {
          weekday: (weekdayNow + 5) % 7,
          day: weekdays[(weekdayNow + 4) % 7],
          dayShort: weekdaysShort[(weekdayNow + 4) % 7],
        },
        {
          weekday: (weekdayNow + 6) % 7,
          day: weekdays[(weekdayNow + 5) % 7],
          dayShort: weekdaysShort[(weekdayNow + 5) % 7],
        },
      ],
    },
  ];

  const remainingGarments = {
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
  };

  return (
    <div className="LaundryInfo">
      <div className="LaundryInfo-heading">
        New clean workwear will arrive on
        {' '}
        <b>{getLaundryDay()}</b>
        . Have a nice workday!
      </div>
      <div className="LaundryInfo-date-info">
        Week {moment().format('W')}
      </div>
      <div className="LaundryInfo-week-calendar-wrapper-wrapper">
        <div className="LaundryInfo-week-calendar-wrapper">
          {weekData.map((week, weekIndex) => {
            const weekClasses = `LaundryInfo-week-calendar week-${weekIndex}`;
            return (
              <div className={weekClasses} key={weekIndex}>
                {week.weekdayData.map((weekday, index) => {
                  const classes = `week-calendar-day ${weekday.day} week week-${weekIndex}`;
                  return (
                    <div className={classes} key={weekday.day}>
                      {renderDate(index + weekIndex * 7, weekday.weekday)}
                      {renderWeekdayData(weekday)}
                      {renderWeekdayShort(weekday, weekIndex)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="LaundryInfo-details-wrapper">
        <div className="LaundryInfo-details">
          <div className="LaundryInfo-details-heading">
            Clean clothes remaining:
          </div>
          {renderWeekdayDataContents(remainingGarments)}
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
