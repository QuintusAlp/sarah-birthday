import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Schedule() {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300">
      <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Pic a date for date</h1>

        <Calendar onChange={handleDateChange} value={date} />

        <p className="mt-4 text-gray-600">
          Selected: {date.toDateString()}
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
            confirm the Date
        </button>
      </div>
    </div>
  );
}

export default Schedule;