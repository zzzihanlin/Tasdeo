import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList() {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-4xl font-bold my-6">Doing-Well List</p>
      <div className="grid grid-cols-3 gap-4">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
}
