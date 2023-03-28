import React from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ studentId, name }) {
  return (
    <div className="w-32 h-32 border ">
      <p className="text-bright text-2xl">{name}</p>
      <p>{studentId}</p>
      <Link to={`${studentId}/remarkform`}>leave a remark</Link>
    </div>
  );
}
