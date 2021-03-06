exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .del() 
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "MB-0020",
          playerFirst: "Michael",
          playerLast: "Badgley",
          playerFull: "Michael Badgley",
          position: "K",
          startYear: 2018,
          currentTeam: "LAC",
          height: 70,
          weight: 186,
          dob: "7/28/95",
          forty: 4.94,
          bench: 0,
          vertical: 0.0,
          broad: 111,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 4,
          dcp: 1,
        }, 
        {
          playerID: "DB-0200",
          playerFirst: "Dan",
          playerLast: "Bailey",
          playerFull: "Dan Bailey",
          position: "K",
          startYear: 2011,
          currentTeam: "MIN",
          height: 72,
          weight: 189,
          dob: "1/26/88",
          forty: 4.92,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Oklahoma State",
          dv: "Big 12",
          jnum: 5,
          dcp: 1,
        },
        {
          playerID: "CB-2275",
          playerFirst: "Chris",
          playerLast: "Boswell",
          playerFull: "Chris Boswell",
          position: "K",
          startYear: 2014,
          currentTeam: "PIT",
          height: 74,
          weight: 185,
          dob: "3/16/91",
          forty: 4.93,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Rice",
          dv: "Conference USA (C-USA)",
          jnum: 9,
          dcp: 1,
        },
        {
          playerID: "MB-4600",
          playerFirst: "Matt",
          playerLast: "Bryant",
          playerFull: "Matt Bryant",
          position: "K",
          startYear: 2002,
          currentTeam: "INA",
          height: 69,
          weight: 200,
          dob: "5/29/75",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Baylor",
          dv: "Big 12",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "RB-4650",
          playerFirst: "Randy",
          playerLast: "Bullock",
          playerFull: "Randy Bullock",
          position: "K",
          startYear: 2012,
          currentTeam: "CIN",
          height: 69,
          weight: 205,
          dob: "12/16/89",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 29.25,
          hand: 8.38,
          dpos: 161.0,
          col: "Texas A&M",
          dv: "Big 12",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "HB-0500",
          playerFirst: "Harrison",
          playerLast: "Butker",
          playerFull: "Harrison Butker",
          position: "K",
          startYear: 2017,
          currentTeam: "KC",
          height: 76,
          weight: 199,
          dob: "7/14/95",
          forty: 4.93,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.75,
          hand: 8.75,
          dpos: 233.0,
          col: "Georgia Tech",
          dv: "Atlantic Coast (ACC)",
          jnum: 7,
          dcp: 1,
        },
        {
          playerID: "DC-0450",
          playerFirst: "Daniel",
          playerLast: "Carlson",
          playerFull: "Daniel Carlson",
          position: "K",
          startYear: 2018,
          currentTeam: "OAK",
          height: 77,
          weight: 213,
          dob: "1/23/95",
          forty: 4.96,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 9.75,
          dpos: 167.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 8,
          dcp: 1,
        },
        {
          playerID: "MC-3000",
          playerFirst: "Mason",
          playerLast: "Crosby",
          playerFull: "Mason Crosby",
          position: "K",
          startYear: 2007,
          currentTeam: "GB",
          height: 73,
          weight: 207,
          dob: "9/3/84",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 193.0,
          col: "Colorado",
          dv: "Big 12",
          jnum: 2,
          dcp: 1,
        },
        {
          playerID: "JE-0250",
          playerFirst: "Jake",
          playerLast: "Elliott",
          playerFull: "Jake Elliott",
          position: "K",
          startYear: 2017,
          currentTeam: "PHI",
          height: 69,
          weight: 167,
          dob: "1/21/95",
          forty: 4.79,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 29.0,
          hand: 9.0,
          dpos: 153.0,
          col: "Memphis",
          dv: "American Athletic",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "KF-0075",
          playerFirst: "Ka'imi",
          playerLast: "Fairbairn",
          playerFull: "Ka'imi Fairbairn",
          position: "K",
          startYear: 2016,
          currentTeam: "HOU",
          height: 71,
          weight: 182,
          dob: "1/29/94",
          forty: 4.96,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 7.75,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "UCLA",
          dv: "Pacific 12",
          jnum: 7,
          dcp: 1,
        },
        {
          playerID: "SF-0050",
          playerFirst: "Sam",
          playerLast: "Ficken",
          playerFull: "Sam Ficken",
          position: "K",
          startYear: 2016,
          currentTeam: "NYJ",
          height: 74,
          weight: 186,
          dob: "12/14/92",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 9,
          dcp: 1,
        },
        {
          playerID: "NF-0300",
          playerFirst: "Nick",
          playerLast: "Folk",
          playerFull: "Nick Folk",
          position: "K",
          startYear: 2007,
          currentTeam: "NE",
          height: 73,
          weight: 222,
          dob: "11/5/84",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 178.0,
          col: "Arizona",
          dv: "Pacific 10",
          jnum: 2,
          dcp: 1,
        },
        {
          playerID: "KF-0250",
          playerFirst: "Kai",
          playerLast: "Forbath",
          playerFull: "Kai Forbath",
          position: "K",
          startYear: 2011,
          currentTeam: "DAL",
          height: 71,
          weight: 191,
          dob: "9/2/87",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "UCLA",
          dv: "Pacific 10",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "MG-0306",
          playerFirst: "Matt",
          playerLast: "Gay",
          playerFull: "Matt Gay",
          position: "K",
          startYear: 2019,
          currentTeam: "TB",
          height: 72,
          weight: 232,
          dob: "3/15/94",
          forty: 5.2,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.5,
          hand: 9.0,
          dpos: 145.0,
          col: "Utah",
          dv: "Pacific 12",
          jnum: 9,
          dcp: 1,
        },
        {
          playerID: "ZG-0050",
          playerFirst: "Zane",
          playerLast: "Gonzalez",
          playerFull: "Zane Gonzalez",
          position: "K",
          startYear: 2017,
          currentTeam: "ARI",
          height: 72,
          weight: 202,
          dob: "5/7/95",
          forty: 4.91,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 29.5,
          hand: 9.0,
          dpos: 224.0,
          col: "Arizona State",
          dv: "Pacific 12",
          jnum: 5,
          dcp: 1,
        },
        {
          playerID: "SG-0800",
          playerFirst: "Stephen",
          playerLast: "Gostkowski",
          playerFull: "Stephen Gostkowski",
          position: "K",
          startYear: 2006,
          currentTeam: "NE",
          height: 73,
          weight: 215,
          dob: "1/28/84",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 118.0,
          col: "Memphis",
          dv: "Conference USA (C-USA)",
          jnum: 3,
          dcp: 2,
        },
        {
          playerID: "RG-1500",
          playerFirst: "Robbie",
          playerLast: "Gould",
          playerFull: "Robbie Gould",
          position: "K",
          startYear: 2005,
          currentTeam: "SF",
          height: 72,
          weight: 185,
          dob: "12/6/81",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 9,
          dcp: 1,
        },
        {
          playerID: "SH-0400",
          playerFirst: "Stephen",
          playerLast: "Hauschka",
          playerFull: "Stephen Hauschka",
          position: "K",
          startYear: 2008,
          currentTeam: "BUF",
          height: 76,
          weight: 210,
          dob: "6/29/85",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "North Carolina State",
          dv: "Atlantic Coast (ACC)",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "DH-3970",
          playerFirst: "Dustin",
          playerLast: "Hopkins",
          playerFull: "Dustin Hopkins",
          position: "K",
          startYear: 2013,
          currentTeam: "WAS",
          height: 74,
          weight: 193,
          dob: "10/1/90",
          forty: 4.71,
          bench: 0,
          vertical: 33.5,
          broad: 116,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.75,
          hand: 8.88,
          dpos: 177.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "GJ-1200",
          playerFirst: "Greg",
          playerLast: "Joseph",
          playerFull: "Greg Joseph",
          position: "K",
          startYear: 2018,
          currentTeam: "TEN",
          height: 73,
          weight: 210,
          dob: "8/4/94",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Florida Atlantic",
          dv: "Conference USA (C-USA)",
          jnum: 7,
          dcp: 2,
        },
        {
          playerID: "YK-0100",
          playerFirst: "Younghoe",
          playerLast: "Koo",
          playerFull: "Younghoe Koo",
          position: "K",
          startYear: 2017,
          currentTeam: "ATL",
          height: 70,
          weight: 190,
          dob: "8/3/94",
          forty: 4.87,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Georgia Southern",
          dv: "Sun Belt",
          jnum: 7,
          dcp: 1,
        },
        {
          playerID: "JL-0207",
          playerFirst: "Josh",
          playerLast: "Lambo",
          playerFull: "Josh Lambo",
          position: "K",
          startYear: 2015,
          currentTeam: "JAC",
          height: 71,
          weight: 220,
          dob: "11/19/90",
          forty: 5.16,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Texas A&M",
          dv: "Southeastern (SEC)",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "TL-1062",
          playerFirst: "Ty",
          playerLast: "Long",
          playerFull: "Ty Long",
          position: "K",
          startYear: 2015,
          currentTeam: "LAC",
          height: 74,
          weight: 205,
          dob: "4/6/93",
          forty: 4.87,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Alabama-Birmingham",
          dv: "Conference USA (C-USA)",
          jnum: 1,
          dcp: 1,
        },
        {
          playerID: "WL-0300",
          playerFirst: "Wil",
          playerLast: "Lutz",
          playerFull: "Wil Lutz",
          position: "K",
          startYear: 2016,
          currentTeam: "NO",
          height: 72,
          weight: 190,
          dob: "7/7/94",
          forty: 5.02,
          bench: 12,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Georgia State",
          dv: "Sun Belt",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "BM-0062",
          playerFirst: "Brett",
          playerLast: "Maher",
          playerFull: "Brett Maher",
          position: "K",
          startYear: 2013,
          currentTeam: "NYJ",
          height: 72,
          weight: 186,
          dob: "11/21/89",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.63,
          hand: 9.13,
          dpos: 0.0,
          col: "Nebraska",
          dv: "Big Ten",
          jnum: 0,
          dcp: 2,
        },
        {
          playerID: "CM-2137",
          playerFirst: "Chase",
          playerLast: "McLaughlin",
          playerFull: "Chase McLaughlin",
          position: "K",
          startYear: 2019,
          currentTeam: "IND",
          height: 73,
          weight: 190,
          dob: "4/9/96",
          forty: 4.97,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 29.63,
          hand: 9.25,
          dpos: 0.0,
          col: "Illinois",
          dv: "Big Ten",
          jnum: 5,
          dcp: 1,
        },
        {
          playerID: "BM-1650",
          playerFirst: "Brandon",
          playerLast: "McManus",
          playerFull: "Brandon McManus",
          position: "K",
          startYear: 2013,
          currentTeam: "DEN",
          height: 75,
          weight: 201,
          dob: "7/25/91",
          forty: 4.9,
          bench: 8,
          vertical: 27.5,
          broad: 0,
          shuttle: 4.63,
          cone: 6.82,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Temple",
          dv: "Big East",
          jnum: 8,
          dcp: 1,
        },
        {
          playerID: "JM-7000",
          playerFirst: "Jason",
          playerLast: "Myers",
          playerFull: "Jason Myers",
          position: "K",
          startYear: 2015,
          currentTeam: "SEA",
          height: 71,
          weight: 190,
          dob: "5/12/91",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Marist",
          dv: "N/A",
          jnum: 5,
          dcp: 1,
        },
        {
          playerID: "MN-0800",
          playerFirst: "Mike",
          playerLast: "Nugent",
          playerFull: "Mike Nugent",
          position: "K",
          startYear: 2005,
          currentTeam: "INA",
          height: 70,
          weight: 190,
          dob: "3/2/82",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 47.0,
          col: "Ohio State",
          dv: "Big Ten",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "CP-0575",
          playerFirst: "Cody",
          playerLast: "Parkey",
          playerFull: "Cody Parkey",
          position: "K",
          startYear: 2014,
          currentTeam: "INA",
          height: 72,
          weight: 189,
          dob: "2/19/92",
          forty: 5.07,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "EP-0512",
          playerFirst: "Eddy",
          playerLast: "Pineiro",
          playerFull: "Eddy Pineiro",
          position: "K",
          startYear: 2018,
          currentTeam: "CHI",
          height: 72,
          weight: 185,
          dob: "9/13/95",
          forty: 4.84,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Florida",
          dv: "Southeastern (SEC)",
          jnum: 15,
          dcp: 1,
        },
        {
          playerID: "MP-2100",
          playerFirst: "Matt",
          playerLast: "Prater",
          playerFull: "Matt Prater",
          position: "K",
          startYear: 2006,
          currentTeam: "DET",
          height: 70,
          weight: 187,
          dob: "8/10/84",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Central Florida",
          dv: "Conference USA (C-USA)",
          jnum: 5,
          dcp: 1,
        },
        {
          playerID: "AR-1450",
          playerFirst: "Aldrick",
          playerLast: "Rosas",
          playerFull: "Aldrick Rosas",
          position: "K",
          startYear: 2016,
          currentTeam: "NYG",
          height: 74,
          weight: 195,
          dob: "12/30/94",
          forty: 5.12,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Southern Oregon",
          dv: "N/A",
          jnum: 2,
          dcp: 1,
        },
        {
          playerID: "JS-0350",
          playerFirst: "Jason",
          playerLast: "Sanders",
          playerFull: "Jason Sanders",
          position: "K",
          startYear: 2018,
          currentTeam: "MIA",
          height: 71,
          weight: 184,
          dob: "11/16/95",
          forty: 4.87,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 229.0,
          col: "New Mexico",
          dv: "Mountain West (MWC)",
          jnum: 7,
          dcp: 1,
        },
        {
          playerID: "CS-0250",
          playerFirst: "Cairo",
          playerLast: "Santos",
          playerFull: "Cairo Santos",
          position: "K",
          startYear: 2014,
          currentTeam: "INA",
          height: 68,
          weight: 164,
          dob: "11/12/91",
          forty: 4.76,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Tulane",
          dv: "Conference USA (C-USA)",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "AS-0575",
          playerFirst: "Austin",
          playerLast: "Seibert",
          playerFull: "Austin Seibert",
          position: "K",
          startYear: 2019,
          currentTeam: "CLE",
          height: 69,
          weight: 209,
          dob: "11/15/96",
          forty: 5.14,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.38,
          hand: 8.88,
          dpos: 170.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "JS-3825",
          playerFirst: "Joey",
          playerLast: "Slye",
          playerFull: "Joey Slye",
          position: "K",
          startYear: 2019,
          currentTeam: "CAR",
          height: 71,
          weight: 210,
          dob: "4/10/96",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Virginia Tech",
          dv: "Atlantic Coast (ACC)",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "RS-3400",
          playerFirst: "Ryan",
          playerLast: "Succop",
          playerFull: "Ryan Succop",
          position: "K",
          startYear: 2009,
          currentTeam: "TEN",
          height: 75,
          weight: 218,
          dob: "9/19/86",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 256.0,
          col: "South Carolina",
          dv: "Southeastern (SEC)",
          jnum: 4,
          dcp: 5,
        },
        {
          playerID: "JT-3950",
          playerFirst: "Justin",
          playerLast: "Tucker",
          playerFull: "Justin Tucker",
          position: "K",
          startYear: 2012,
          currentTeam: "BAL",
          height: 72,
          weight: 180,
          dob: "11/21/89",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Texas",
          dv: "Big 12",
          jnum: 9,
          dcp: 1,
        },
        {
          playerID: "KV-0250",
          playerFirst: "Kaare",
          playerLast: "Vedvik",
          playerFull: "Kaare Vedvik",
          position: "K",
          startYear: 2018,
          currentTeam: "BUF",
          height: 76,
          weight: 209,
          dob: "3/16/94",
          forty: 4.96,
          bench: 0,
          vertical: 34.0,
          broad: 123,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Marshall",
          dv: "Conference USA (C-USA)",
          jnum: 0,
          dcp: 1,
        },
      ]);
    });
};
