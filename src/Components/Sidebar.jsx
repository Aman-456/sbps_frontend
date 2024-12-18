import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateContestPopUp from "./Widgets/CreateContestPopUp";

const Sidebar = ({ closeSidebar }) => {
  const [expandedItem, setExpandedItem] = useState(null); // Track which nav item is expanded
  const [isOpen, setIsOpen] = useState(false);
  const handleExpandItem = (item) => {
    setExpandedItem(expandedItem === item ? null : item); // Toggle expanded state
  };

  return (
    <div className="fixed inset-0 z-40 flex">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeSidebar}></div>

      {/* Sidebar */}
      <div
        className={`relative bg-gray-900 w-screen md:w-1/2 lg:w-1/3 h-full shadow-lg transition-transform transform translate-x-0.3`}
      >
        <div className="p-4 flex justify-between items-center bg-gray-800">
          <h2 className="text-white text-xl font-bold">Menu</h2>
          <button onClick={closeSidebar} className="text-white">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Context Text */}
        <div className="p-4 text-white">
          <p>Create Context</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[70%] mb-2">
          <ul className="space-y-4 text-center">
            {/* NFL */}
            <li>
              <span
                onClick={() => handleExpandItem("NFL")}
                className="block text-white cursor-pointer hover:bg-gray-700 px-4 py-2 rounded"
              >
                NFL
                <span className="inline-block ml-2">
                  {expandedItem === "NFL" ? (
                    <svg width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0L12 12H0L6 0z" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6h12L6 0v6z" />
                    </svg>
                  )}
                </span>
              </span>
              {expandedItem === "NFL" && (
                <div className="h-[60vh] text-center overflow-auto">
                  <h4 className="text-light text-white px-3 mb-2">Popular Contests</h4>
                  <ul className="list-unstyled text-[yellow] ">
                    <li>
                      <a className="block  px-3 py-1" href="/super-bowl-squares-contest-online">
                        2025 League Square
                      </a>
                    </li>
                    <li>
                      <a className="block  px-3 py-1" href="/thx">
                        Thanksgiving Squares
                      </a>
                    </li>
                    <li>
                      <a className="block  px-3 py-1" href="/christmas-squares-fundraiser-online">
                        Christmas Squares
                      </a>
                    </li>
                    <li>
                      <a className="block  px-3 py-1" href="/mnf">
                        Monday Night Squares
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/89/arizona-cardinals-schedule">
                        Arizona Cardinals
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/85/atlanta-falcons-schedule">
                        Atlanta Falcons
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/65/baltimore-ravens-schedule">
                        Baltimore Ravens
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/61/buffalo-bills-schedule">
                        Buffalo Bills
                      </a>
                    </li>

                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/86/carolina-panthers-schedule">
                        Carolina Panthers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/81/chicago-bears-schedule">
                        Chicago Bears
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/66/cincinnati-bengals-schedule">
                        Cincinnati Bengals
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/67/cleveland-browns-schedule">
                        Cleveland Browns
                      </a>
                    </li>

                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/77/dallas-cowboys-schedule">
                        Dallas Cowboys
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/73/denver-broncos-schedule">
                        Denver Broncos
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/detroit-lions-schedule">
                        Detroit Lions
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/83/green-bay-packers-schedule">
                        Green Bay Packers
                      </a>
                    </li>

                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/69/houston-texans-schedule">
                        Houston Texans
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/70/indianapolis-colts-schedule">
                        Indianapolis Colts
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/71/jacksonville-jaguars-schedule">
                        Jacksonville Jaguars
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/74/kansas-city-chiefs-schedule">
                        Kansas City Chiefs
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/las-vegas-raiders-schedule">
                        Las Vegas Raiders
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/los-angeles-charger-schedule">
                        Los Angeles Charger
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/los-angeles-rams-schedule">
                        Los Angeles Rams
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/miami-dolphins-schedule">
                        Miami Dolphins
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/minnesota-viking-schedule">
                        Minnesota Vikings
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/new-england-patriots-schedule">
                        New England Patriots
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/83/new-orleans-saints-schedule">
                        New Orleans Saints
                      </a>
                    </li>

                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/69/new-york-giants">
                        New York Giants
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/70/new-york-jets-schedule">
                        New York Jets
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/71/philadelphia-eagles-schedule">
                        Philadelphia Eagles
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/74/Pittsburgh-steelers-schedule">
                        Pittsburgh Steelers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/san-franscisco-49ers-schedule">
                        San Franscisco 49ers
                      </a>
                    </li>
                    <li>
                      <a className="block thite hover:bg-gray-700 px-3 py-1" href="/team/82/seattle-seahawks-schedule">
                        Seattle Seahawks
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/tampa-bay-buccane-schedule">
                        Tampa Bay Buccane
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/tennessee-titans-schedule">
                        Tennessee Titans
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/washington-commander-schedule">
                        Washington Commander
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* NBA */}
            <li>
              <span
                onClick={() => handleExpandItem("NBA")}
                className="block text-white cursor-pointer hover:bg-gray-700 px-4 py-2 rounded"
              >
                NBA
                <span className="inline-block ml-2">
                  {expandedItem === "NBA" ? (
                    <svg width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0L12 12H0L6 0z" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6h12L6 0v6z" />
                    </svg>
                  )}
                </span>
              </span>
              {expandedItem === "NBA" && (
                <div className="h-[60vh] text-center overflow-auto">
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Atlanta Hawks
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Boston Celtics
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Brooklyn Nets
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Charlotte Hornets
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Chicago Bulls
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Cleveland Cavaliers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Dallas Mavericks
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Denver Nuggets
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Detroit Pistons
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Golden State Warriors
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Houston Rockets
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Indiana Pacers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        LA Clippers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Los Angeles Lakers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Memphis Grizzlies
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Miami Heat
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Milwaukee Bucks
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Minnesota Timberwolves
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        New Orleans Pelicans
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        New York Knicks
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Oklahoma City Thunder
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Orlando Magic
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Philadelphia 76ers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Phoenix Suns
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Portland Trail Blazers
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Sacramento Kings
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        San Antonio Spurs
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Toronto Raptors
                      </a>
                    </li>
                    <li>
                      <a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Utah Jazz
                      </a>
                    </li>
                    <li>
                      <a className="block  text-white hover:bg-gray-700 px-3 py-1" href="#">
                        Washington Wizards
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Sizes */}
            <li>
              <span
                onClick={() => handleExpandItem("Sizes")}
                className="block text-white cursor-pointer hover:bg-gray-700 px-4 py-2 rounded"
              >
                Sizes
                <span className="inline-block ml-2">
                  {expandedItem === "Sizes" ? (
                    <svg width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0L12 12H0L6 0z" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6h12L6 0v6z" />
                    </svg>
                  )}
                </span>
              </span>
              {expandedItem === "Sizes" && (
                <div className="h-[40vh] text-center overflow-auto">
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">
                        100 Squares
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">
                        50 Squares
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">
                        25 Squares
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">
                        Custom Sizes
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Contest Button */}
        <div className="absolute bottom-0 w-full p-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded text-center" onClick={() => setIsOpen(true)}>
            Create Contest
          </button>
        </div>
      </div>
      <CreateContestPopUp setIsOpen={setIsOpen} isOpen={isOpen} number={"100"} />
    </div>
  );
};

export default Sidebar;
