"use client";

import { FaBook } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import LeaderboardPopup from "../popups/LeaderboardPopup";
import { useState } from "react";
import QuestionPopup from "../popups/QuestionPopup";
export default function Sections() {
  const [showLeaderboardPopup, setShowLeaderboardPopup] = useState(false);
  const [showQuestionPopup, setShowQuestionPopup] = useState(false);
  return (
    <div className="bg-white p-4 rounded shadow flex items-center justify-center">
      <ul className="flex gap-4">
        <li className="px-4 py-2 bg-blue-100 rounded cursor-pointer">
          <FaBook />
        </li>
        <li className="px-4 py-2 bg-green-100 rounded cursor-pointer">
          <FaCommentAlt />
        </li>
        <li
          onClick={() => setShowQuestionPopup(true)}
          className="px-4 py-2 bg-yellow-100 rounded cursor-pointer"
        >
          <FaQuestionCircle />
        </li>
        <li
          onClick={() => setShowLeaderboardPopup(true)}
          className="px-4 py-2 bg-purple-100 rounded cursor-pointer"
        >
          <GiTrophyCup />
        </li>
      </ul>
      <QuestionPopup
        show={showQuestionPopup}
        onClose={() => setShowQuestionPopup(false)}
      />
      <LeaderboardPopup
        show={showLeaderboardPopup}
        onClose={() => setShowLeaderboardPopup(false)}
      />
    </div>
  );
}
