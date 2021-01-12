import 


function myCalendar() {
    const [value, onChange] = useState(new Date());
   
    return (
      <div>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
  export default myCalendar;