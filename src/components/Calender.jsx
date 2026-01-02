import NextIcon from "../components/svg/nextIcon";
import Calendar from 'react-calendar';


const getWeekendClass = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (day === 0) return 'text-light-primary-dark dark:text-dark-primary-dark'; // Sunday
      if (day === 6) return 'text-light-primary-dark dark:text-dark-primary-dark'; // Saturday
    }
    return null;
  };


const Calender = ({setValue , value, onClickDay}) => {
  
  return (
    <Calendar
    prevLabel={<NextIcon/>}
    nextLabel={<NextIcon rotate="rotate-180"/>}
      navigationLabel={({ date, label, locale, view }) => {
        if (view === 'month') {
          const month = date.toLocaleString(locale, { month: 'long' });
          const year = date.getFullYear();
          return (
            <span className="font-medium *:mx-1">
              {month} 
              <span >{year}</span>  
            </span>
          );
        }
        return label;
      }}
      onChange={setValue} 
      onClickDay={()=>{onClickDay}}
      value={value}
      tileClassName={getWeekendClass}
      calendarType="gregory"
      />
  )
}

export default Calender