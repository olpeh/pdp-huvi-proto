import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './LaundryInfo.scss';

class LaundryInfo extends React.Component {
  constructor(props) {
    super(props);
    const weekNumber = parseInt(moment().format('W'), 10);
    this.state = { weekNumber, scrolledWeekNumber: weekNumber, scrollLeft: 0 };
  }

  handleScroll() {
    const week = ReactDOM.findDOMNode(this.refs.week);
    const weekNumber = this.state.weekNumber;
    let scrolledWeekNumber = weekNumber;
    const portion = week.scrollLeft / week.scrollWidth * 100;

    // TODO: modify magic numbers if needed
    if (portion > 12.33 && portion <= 44.66) {
      scrolledWeekNumber = weekNumber + 1;
    } else if (portion > 44.66) {
      scrolledWeekNumber = weekNumber + 2;
    }

    this.setState({ scrollLeft: week.scrollLeft, scrolledWeekNumber });
  }

  componentDidMount() {
    const week = ReactDOM.findDOMNode(this.refs.week);
    week.addEventListener('scroll', this.handleScroll.bind(this));
    this.setState({ scrollLeft: 0 });
  }

  componentWillUnmount() {
    const week = ReactDOM.findDOMNode(this.refs.week);
    week.removeEventListener('scroll', this.handleScroll);
  }

  renderDate(x, weekday) {
    const classes = `weekday-date date-${weekday}`;
    return (
      <div className={classes}>
        {moment().add(x, 'days').format('DD.MM.')}
      </div>
    );
  }

  renderWeekdayShort(weekday, weekIndex) {
    return (
      <div className="weekday-short">
        {weekday.weekday === moment().isoWeekday() && !weekIndex
          ? <div className="current">{weekday.dayShort}</div>
          : weekday.dayShort}
        {this.isLaundryDay(weekday)
          ? <div className="weekday-data-wrapper">
              <span className="weekday-data-icon laundry" />
            </div>
          : null}
      </div>
    );
  }

  renderWeekdayDataContents(data) {
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

  getLaundryDay() {
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

  isLaundryDay(weekday) {
    const weekdayNow = moment().isoWeekday();
    return (weekdayNow >= 5 && weekday.weekday === 1) ||
      (weekday.weekday === weekdayNow + 1 && weekday.weekday <= 5);
  }

  renderWeekdayData(weekday) {
    if (this.isLaundryDay(weekday)) {
      return this.renderWeekdayDataContents();
    }
    return <div className="weekday-data" />;
  }

  render() {
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
          <b>{this.getLaundryDay()}</b>
          . Have a nice workday!
        </div>
        <div className="LaundryInfo-date-info">
          Week {this.state.scrolledWeekNumber}
        </div>
        <div ref="week" className="LaundryInfo-week-calendar-wrapper-wrapper">
          <div className="LaundryInfo-week-calendar-wrapper">
            {weekData.map((week, weekIndex) => {
              const weekClasses = `LaundryInfo-week-calendar week-${weekIndex}`;
              return (
                <div className={weekClasses} key={weekIndex}>
                  {week.weekdayData.map((weekday, index) => {
                    const classes = `week-calendar-day ${weekday.day} week week-${weekIndex}`;
                    return (
                      <div className={classes} key={weekday.day}>
                        {this.renderDate(
                          index + weekIndex * 7,
                          weekday.weekday
                        )}
                        {this.renderWeekdayData(weekday)}
                        {this.renderWeekdayShort(weekday, weekIndex)}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {this.state.scrollLeft
              ? null
              : <div ref="indicator" className="scroll-arrow-indicator">></div>}
          </div>
        </div>
        <div className="LaundryInfo-details-wrapper">
          <div className="LaundryInfo-details">
            <div className="LaundryInfo-details-heading">
              Clean clothes remaining:
            </div>
            {this.renderWeekdayDataContents(remainingGarments)}
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
  }
}
export default LaundryInfo;
