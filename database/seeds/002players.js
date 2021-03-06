exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .then(function () { 
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "AV-0400",
          playerFirst: "Adam",
          playerLast: "Vinatieri",
          playerFull: "Adam Vinatieri",
          position: "K",
          startYear: 1996,
          currentTeam: "IND",
          height: 72,
          weight: 202,
          dob: "12/28/72",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "South Dakota State",
          dv: "N/A",
          jnum: 4,
          dcp: 3,
        },
        {
          playerID: "GZ-2000",
          playerFirst: "Greg",
          playerLast: "Zuerlein",
          playerFull: "Greg Zuerlein",
          position: "K",
          startYear: 2012,
          currentTeam: "LA",
          height: 72,
          weight: 187,
          dob: "12/27/87",
          forty: 4.86,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 171.0,
          col: "Missouri Western",
          dv: "N/A",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "AD-0100",
          playerFirst: "Andy",
          playerLast: "Dalton",
          playerFull: "Andy Dalton",
          position: "QB",
          startYear: 2011,
          currentTeam: "CIN",
          height: 74,
          weight: 215,
          dob: "10/29/87",
          forty: 4.82,
          bench: 0,
          vertical: 29.5,
          broad: 106,
          shuttle: 4.27,
          cone: 6.93,
          arm: 31.75,
          hand: 9.5,
          dpos: 35.0,
          col: "Texas Christian",
          dv: "Mountain West (MWC)",
          jnum: 14,
          dcp: 1,
        },
        {
          playerID: "AM-1150",
          playerFirst: "A.J.",
          playerLast: "McCarron",
          playerFull: "A.J. McCarron",
          position: "QB",
          startYear: 2014,
          currentTeam: "HOU",
          height: 75,
          weight: 220,
          dob: "9/13/90",
          forty: 4.9,
          bench: 0,
          vertical: 28.0,
          broad: 99,
          shuttle: 4.34,
          cone: 7.18,
          arm: 31.5,
          hand: 10.0,
          dpos: 164.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 2,
          dcp: 2,
        },
        {
          playerID: "AR-1300",
          playerFirst: "Aaron",
          playerLast: "Rodgers",
          playerFull: "Aaron Rodgers",
          position: "QB",
          startYear: 2005,
          currentTeam: "GB",
          height: 74,
          weight: 225,
          dob: "12/2/83",
          forty: 4.71,
          bench: 0,
          vertical: 34.5,
          broad: 110,
          shuttle: 4.32,
          cone: 7.12,
          arm: 32.63,
          hand: 9.38,
          dpos: 24.0,
          col: "California",
          dv: "Pacific 10",
          jnum: 12,
          dcp: 1,
        },
        {
          playerID: "AT-0160",
          playerFirst: "Alex",
          playerLast: "Tanney",
          playerFull: "Alex Tanney",
          position: "QB",
          startYear: 2012,
          currentTeam: "NYG",
          height: 75,
          weight: 223,
          dob: "11/11/87",
          forty: 4.96,
          bench: 0,
          vertical: 29.0,
          broad: 103,
          shuttle: 4.45,
          cone: 7.13,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Monmouth",
          dv: "N/A",
          jnum: 3,
          dcp: 3,
        },
        {
          playerID: "BA-0375",
          playerFirst: "Brandon",
          playerLast: "Allen",
          playerFull: "Brandon Allen",
          position: "QB",
          startYear: 2016,
          currentTeam: "DEN",
          height: 73,
          weight: 217,
          dob: "9/5/92",
          forty: 4.75,
          bench: 0,
          vertical: 28.0,
          broad: 110,
          shuttle: 4.33,
          cone: 7.06,
          arm: 31.25,
          hand: 8.88,
          dpos: 201.0,
          col: "Arkansas",
          dv: "Southeastern (SEC)",
          jnum: 2,
          dcp: 2,
        },
        {
          playerID: "BB-2425",
          playerFirst: "Blake",
          playerLast: "Bortles",
          playerFull: "Blake Bortles",
          position: "QB",
          startYear: 2014,
          currentTeam: "LA",
          height: 77,
          weight: 232,
          dob: "4/28/92",
          forty: 4.88,
          bench: 0,
          vertical: 32.5,
          broad: 115,
          shuttle: 4.21,
          cone: 7.08,
          arm: 32.88,
          hand: 9.38,
          dpos: 3.0,
          col: "Central Florida",
          dv: "American Athletic",
          jnum: 5,
          dcp: 2,
        },
        {
          playerID: "BH-1900",
          playerFirst: "Brian",
          playerLast: "Hoyer",
          playerFull: "Brian Hoyer",
          position: "QB",
          startYear: 2009,
          currentTeam: "IND",
          height: 75,
          weight: 215,
          dob: "10/13/85",
          forty: 5.02,
          bench: 0,
          vertical: 32.0,
          broad: 109,
          shuttle: 4.42,
          cone: 7.1,
          arm: 32.0,
          hand: 9.5,
          dpos: 0.0,
          col: "Michigan State",
          dv: "Big Ten",
          jnum: 2,
          dcp: 2,
        },
        {
          playerID: "BH-2300",
          playerFirst: "Brett",
          playerLast: "Hundley",
          playerFull: "Brett Hundley",
          position: "QB",
          startYear: 2015,
          currentTeam: "ARI",
          height: 75,
          weight: 226,
          dob: "6/15/93",
          forty: 4.6,
          bench: 0,
          vertical: 36.0,
          broad: 120,
          shuttle: 3.98,
          cone: 6.93,
          arm: 32.13,
          hand: 10.5,
          dpos: 147.0,
          col: "UCLA",
          dv: "Pacific 12",
          jnum: 7,
          dcp: 2,
        },
        {
          playerID: "BM-0650",
          playerFirst: "Baker",
          playerLast: "Mayfield",
          playerFull: "Baker Mayfield",
          position: "QB",
          startYear: 2018,
          currentTeam: "CLE",
          height: 73,
          weight: 215,
          dob: "4/14/95",
          forty: 4.84,
          bench: 0,
          vertical: 29.0,
          broad: 111,
          shuttle: 4.28,
          cone: 7.0,
          arm: 30.25,
          hand: 9.25,
          dpos: 1.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 6,
          dcp: 1,
        },
        {
          playerID: "BR-1100",
          playerFirst: "Ben",
          playerLast: "Roethlisberger",
          playerFull: "Ben Roethlisberger",
          position: "QB",
          startYear: 2004,
          currentTeam: "PIT",
          height: 77,
          weight: 241,
          dob: "3/2/82",
          forty: 4.75,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 9.88,
          dpos: 11.0,
          col: "Miami (OH)",
          dv: "Mid-American (MAC)",
          jnum: 7,
          dcp: 3,
        },
        {
          playerID: "CD-0300",
          playerFirst: "Chase",
          playerLast: "Daniel",
          playerFull: "Chase Daniel",
          position: "QB",
          startYear: 2009,
          currentTeam: "CHI",
          height: 72,
          weight: 225,
          dob: "10/7/86",
          forty: 4.79,
          bench: 0,
          vertical: 33.0,
          broad: 108,
          shuttle: 4.31,
          cone: 7.28,
          arm: 28.75,
          hand: 9.25,
          dpos: 0.0,
          col: "Missouri",
          dv: "Big 12",
          jnum: 4,
          dcp: 2,
        },
        {
          playerID: "CK-0250",
          playerFirst: "Case",
          playerLast: "Keenum",
          playerFull: "Case Keenum",
          position: "QB",
          startYear: 2012,
          currentTeam: "WAS",
          height: 73,
          weight: 210,
          dob: "2/17/88",
          forty: 4.72,
          bench: 18,
          vertical: 32.5,
          broad: 103,
          shuttle: 4.28,
          cone: 6.87,
          arm: 30.88,
          hand: 9.13,
          dpos: 0.0,
          col: "Houston",
          dv: "Conference USA (C-USA)",
          jnum: 8,
          dcp: 2,
        },
        {
          playerID: "CM-1500",
          playerFirst: "Colt",
          playerLast: "McCoy",
          playerFull: "Colt McCoy",
          position: "QB",
          startYear: 2010,
          currentTeam: "WAS",
          height: 73,
          weight: 215,
          dob: "9/5/86",
          forty: 4.79,
          bench: 0,
          vertical: 0.0,
          broad: 114,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.0,
          hand: 9.38,
          dpos: 85.0,
          col: "Texas",
          dv: "Big 12",
          jnum: 12,
          dcp: 3,
        },
        {
          playerID: "CN-0500",
          playerFirst: "Cam",
          playerLast: "Newton",
          playerFull: "Cam Newton",
          position: "QB",
          startYear: 2011,
          currentTeam: "CAR",
          height: 77,
          weight: 244,
          dob: "5/11/89",
          forty: 4.56,
          bench: 0,
          vertical: 35.0,
          broad: 126,
          shuttle: 4.18,
          cone: 6.92,
          arm: 33.75,
          hand: 9.88,
          dpos: 1.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 1,
          dcp: 5,
        },
        {
          playerID: "CW-1425",
          playerFirst: "Carson",
          playerLast: "Wentz",
          playerFull: "Carson Wentz",
          position: "QB",
          startYear: 2016,
          currentTeam: "PHI",
          height: 77,
          weight: 237,
          dob: "12/30/92",
          forty: 4.65,
          bench: 0,
          vertical: 30.5,
          broad: 118,
          shuttle: 4.15,
          cone: 6.86,
          arm: 33.25,
          hand: 10.0,
          dpos: 2.0,
          col: "North Dakota State",
          dv: "Missouri Valley",
          jnum: 11,
          dcp: 1,
        },
        {
          playerID: "DB-2750",
          playerFirst: "David",
          playerLast: "Blough",
          playerFull: "David Blough",
          position: "QB",
          startYear: 2019,
          currentTeam: "DET",
          height: 72,
          weight: 205,
          dob: "7/31/95",
          forty: 4.91,
          bench: 0,
          vertical: 31.5,
          broad: 107,
          shuttle: 4.55,
          cone: 7.22,
          arm: 29.63,
          hand: 9.38,
          dpos: 0.0,
          col: "Purdue",
          dv: "Big Ten",
          jnum: 10,
          dcp: 1,
        },
        {
          playerID: "DB-3800",
          playerFirst: "Drew",
          playerLast: "Brees",
          playerFull: "Drew Brees",
          position: "QB",
          startYear: 2001,
          currentTeam: "NO",
          height: 72,
          weight: 209,
          dob: "1/15/79",
          forty: 4.83,
          bench: 0,
          vertical: 32.0,
          broad: 105,
          shuttle: 4.21,
          cone: 7.09,
          arm: 31.25,
          hand: 10.0,
          dpos: 32.0,
          col: "Purdue",
          dv: "Big Ten",
          jnum: 9,
          dcp: 1,
        },
        {
          playerID: "DC-0725",
          playerFirst: "Derek",
          playerLast: "Carr",
          playerFull: "Derek Carr",
          position: "QB",
          startYear: 2014,
          currentTeam: "OAK",
          height: 74,
          weight: 214,
          dob: "3/28/91",
          forty: 4.67,
          bench: 0,
          vertical: 34.5,
          broad: 110,
          shuttle: 4.2,
          cone: 0.0,
          arm: 31.5,
          hand: 9.13,
          dpos: 36.0,
          col: "Fresno State",
          dv: "Mountain West (MWC)",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "DH-1912",
          playerFirst: "Dwayne",
          playerLast: "Haskins",
          playerFull: "Dwayne Haskins",
          position: "QB",
          startYear: 2019,
          currentTeam: "WAS",
          height: 75,
          weight: 231,
          dob: "5/3/97",
          forty: 5.04,
          bench: 0,
          vertical: 28.5,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 33.5,
          hand: 9.63,
          dpos: 15.0,
          col: "Ohio State",
          dv: "Big Ten",
          jnum: 7,
          dcp: 1,
        },
        {
          playerID: "DH-3450",
          playerFirst: "Devlin",
          playerLast: "Hodges",
          playerFull: "Devlin Hodges",
          position: "QB",
          startYear: 2019,
          currentTeam: "PIT",
          height: 73,
          weight: 211,
          dob: "4/12/96",
          forty: 4.79,
          bench: 0,
          vertical: 32.0,
          broad: 103,
          shuttle: 4.53,
          cone: 7.38,
          arm: 30.13,
          hand: 9.25,
          dpos: 0.0,
          col: "Samford",
          dv: "Southern",
          jnum: 6,
          dcp: 1,
        },
        {
          playerID: "DJ-2275",
          playerFirst: "Daniel",
          playerLast: "Jones",
          playerFull: "Daniel Jones",
          position: "QB",
          startYear: 2019,
          currentTeam: "NYG",
          height: 77,
          weight: 221,
          dob: "5/27/97",
          forty: 4.72,
          bench: 0,
          vertical: 33.5,
          broad: 120,
          shuttle: 4.41,
          cone: 7.0,
          arm: 32.5,
          hand: 9.75,
          dpos: 6.0,
          col: "Duke",
          dv: "Atlantic Coast (ACC)",
          jnum: 8,
          dcp: 1,
        },
        {
          playerID: "DL-1787",
          playerFirst: "Drew",
          playerLast: "Lock",
          playerFull: "Drew Lock",
          position: "QB",
          startYear: 2019,
          currentTeam: "DEN",
          height: 76,
          weight: 228,
          dob: "11/10/96",
          forty: 4.69,
          bench: 0,
          vertical: 31.0,
          broad: 112,
          shuttle: 4.12,
          cone: 7.03,
          arm: 32.5,
          hand: 9.0,
          dpos: 42.0,
          col: "Missouri",
          dv: "Southeastern (SEC)",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "DP-2037",
          playerFirst: "Dak",
          playerLast: "Prescott",
          playerFull: "Dak Prescott",
          position: "QB",
          startYear: 2016,
          currentTeam: "DAL",
          height: 74,
          weight: 226,
          dob: "7/29/93",
          forty: 4.74,
          bench: 0,
          vertical: 32.5,
          broad: 116,
          shuttle: 4.32,
          cone: 7.11,
          arm: 32.25,
          hand: 10.88,
          dpos: 135.0,
          col: "Mississippi State",
          dv: "Southeastern (SEC)",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "DW-1725",
          playerFirst: "Deshaun",
          playerLast: "Watson",
          playerFull: "Deshaun Watson",
          position: "QB",
          startYear: 2017,
          currentTeam: "HOU",
          height: 74,
          weight: 221,
          dob: "9/14/95",
          forty: 4.66,
          bench: 0,
          vertical: 32.5,
          broad: 117,
          shuttle: 4.31,
          cone: 6.95,
          arm: 33.0,
          hand: 9.75,
          dpos: 12.0,
          col: "Clemson",
          dv: "Atlantic Coast (ACC)",
          jnum: 4,
          dcp: 1,
        },
        {
          playerID: "EM-0200",
          playerFirst: "Eli",
          playerLast: "Manning",
          playerFull: "Eli Manning",
          position: "QB",
          startYear: 2004,
          currentTeam: "NYG",
          height: 77,
          weight: 218,
          dob: "1/3/81",
          forty: 4.9,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.75,
          hand: 9.75,
          dpos: 1.0,
          col: "Mississippi",
          dv: "Southeastern (SEC)",
          jnum: 10,
          dcp: 2,
        },
        {
          playerID: "GG-0310",
          playerFirst: "Garrett",
          playerLast: "Gilbert",
          playerFull: "Garrett Gilbert",
          position: "QB",
          startYear: 2014,
          currentTeam: "CLE",
          height: 76,
          weight: 221,
          dob: "7/1/91",
          forty: 4.86,
          bench: 0,
          vertical: 29.5,
          broad: 117,
          shuttle: 4.41,
          cone: 7.43,
          arm: 30.63,
          hand: 9.38,
          dpos: 214.0,
          col: "SMU",
          dv: "American Athletic",
          jnum: 3,
          dcp: 2,
        },
        {
          playerID: "GM-1350",
          playerFirst: "Gardner",
          playerLast: "Minshew",
          playerFull: "Gardner Minshew",
          position: "QB",
          startYear: 2019,
          currentTeam: "JAC",
          height: 73,
          weight: 225,
          dob: "5/16/96",
          forty: 4.97,
          bench: 0,
          vertical: 33.5,
          broad: 116,
          shuttle: 4.45,
          cone: 7.14,
          arm: 31.75,
          hand: 10.13,
          dpos: 178.0,
          col: "Washington State",
          dv: "Pacific 12",
          jnum: 15,
          dcp: 1,
        },
        {
          playerID: "JA-1087",
          playerFirst: "Josh",
          playerLast: "Allen",
          playerFull: "Josh Allen",
          position: "QB",
          startYear: 2018,
          currentTeam: "BUF",
          height: 77,
          weight: 237,
          dob: "5/21/96",
          forty: 4.75,
          bench: 0,
          vertical: 33.5,
          broad: 119,
          shuttle: 4.4,
          cone: 6.9,
          arm: 33.25,
          hand: 10.13,
          dpos: 7.0,
          col: "Wyoming",
          dv: "Mountain West (MWC)",
          jnum: 17,
          dcp: 1,
        },
        {
          playerID: "JB-5725",
          playerFirst: "Jacoby",
          playerLast: "Brissett",
          playerFull: "Jacoby Brissett",
          position: "QB",
          startYear: 2016,
          currentTeam: "IND",
          height: 76,
          weight: 231,
          dob: "12/11/92",
          forty: 4.9,
          bench: 0,
          vertical: 31.0,
          broad: 113,
          shuttle: 4.53,
          cone: 7.17,
          arm: 32.25,
          hand: 9.75,
          dpos: 91.0,
          col: "North Carolina State",
          dv: "Atlantic Coast (ACC)",
          jnum: 7,
          dcp: 1,
        },
        {
          playerID: "JD-2850",
          playerFirst: "Jeff",
          playerLast: "Driskel",
          playerFull: "Jeff Driskel",
          position: "QB",
          startYear: 2016,
          currentTeam: "DET",
          height: 76,
          weight: 234,
          dob: "4/23/93",
          forty: 4.46,
          bench: 0,
          vertical: 32.0,
          broad: 122,
          shuttle: 4.25,
          cone: 7.19,
          arm: 33.5,
          hand: 9.75,
          dpos: 207.0,
          col: "Louisiana Tech",
          dv: "Conference USA (C-USA)",
          jnum: 2,
          dcp: 2,
        },
        {
          playerID: "JF-1900",
          playerFirst: "Joe",
          playerLast: "Flacco",
          playerFull: "Joe Flacco",
          position: "QB",
          startYear: 2008,
          currentTeam: "DEN",
          height: 78,
          weight: 245,
          dob: "1/16/85",
          forty: 4.84,
          bench: 0,
          vertical: 28.5,
          broad: 110,
          shuttle: 4.27,
          cone: 6.82,
          arm: 32.88,
          hand: 9.5,
          dpos: 18.0,
          col: "Delaware",
          dv: "Colonial Athletic (CAA)",
          jnum: 5,
          dcp: 2,
        },
        {
          playerID: "JG-0650",
          playerFirst: "Jimmy",
          playerLast: "Garoppolo",
          playerFull: "Jimmy Garoppolo",
          position: "QB",
          startYear: 2014,
          currentTeam: "SF",
          height: 74,
          weight: 226,
          dob: "11/2/91",
          forty: 4.94,
          bench: 0,
          vertical: 30.5,
          broad: 110,
          shuttle: 4.26,
          cone: 7.04,
          arm: 31.0,
          hand: 9.25,
          dpos: 62.0,
          col: "Eastern Illinois",
          dv: "Ohio Valley",
          jnum: 10,
          dcp: 1,
        },
        {
          playerID: "JG-1850",
          playerFirst: "Jared",
          playerLast: "Goff",
          playerFull: "Jared Goff",
          position: "QB",
          startYear: 2016,
          currentTeam: "LA",
          height: 76,
          weight: 215,
          dob: "10/14/94",
          forty: 4.75,
          bench: 0,
          vertical: 27.0,
          broad: 110,
          shuttle: 4.47,
          cone: 7.17,
          arm: 32.75,
          hand: 9.0,
          dpos: 1.0,
          col: "California",
          dv: "Pacific 12",
          jnum: 16,
          dcp: 1,
        },
        {
          playerID: "JM-2900",
          playerFirst: "Josh",
          playerLast: "McCown",
          playerFull: "Josh McCown",
          position: "QB",
          startYear: 2002,
          currentTeam: "PHI",
          height: 76,
          weight: 215,
          dob: "7/4/79",
          forty: 4.59,
          bench: 0,
          vertical: 38.5,
          broad: 120,
          shuttle: 3.9,
          cone: 6.85,
          arm: 0.0,
          hand: 0.0,
          dpos: 81.0,
          col: "Sam Houston State",
          dv: "Southland",
          jnum: 18,
          dcp: 2,
        },
        {
          playerID: "JR-3250",
          playerFirst: "Josh",
          playerLast: "Rosen",
          playerFull: "Josh Rosen",
          position: "QB",
          startYear: 2018,
          currentTeam: "MIA",
          height: 76,
          weight: 226,
          dob: "2/10/97",
          forty: 4.92,
          bench: 0,
          vertical: 31.0,
          broad: 111,
          shuttle: 4.28,
          cone: 7.09,
          arm: 31.75,
          hand: 9.88,
          dpos: 10.0,
          col: "UCLA",
          dv: "Pacific 12",
          jnum: 3,
          dcp: 2,
        },
        {
          playerID: "JS-6787",
          playerFirst: "Jarrett",
          playerLast: "Stidham",
          playerFull: "Jarrett Stidham",
          position: "QB",
          startYear: 2019,
          currentTeam: "NE",
          height: 74,
          weight: 218,
          dob: "8/8/96",
          forty: 4.81,
          bench: 0,
          vertical: 31.0,
          broad: 110,
          shuttle: 4.33,
          cone: 7.28,
          arm: 32.0,
          hand: 9.13,
          dpos: 133.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 4,
          dcp: 2,
        },
        {
          playerID: "JW-5650",
          playerFirst: "Jameis",
          playerLast: "Winston",
          playerFull: "Jameis Winston",
          position: "QB",
          startYear: 2015,
          currentTeam: "TB",
          height: 76,
          weight: 231,
          dob: "1/6/94",
          forty: 4.91,
          bench: 0,
          vertical: 28.5,
          broad: 103,
          shuttle: 4.36,
          cone: 7.16,
          arm: 32.0,
          hand: 9.38,
          dpos: 1.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "KA-0737",
          playerFirst: "Kyle",
          playerLast: "Allen",
          playerFull: "Kyle Allen",
          position: "QB",
          startYear: 2018,
          currentTeam: "CAR",
          height: 75,
          weight: 210,
          dob: "3/8/96",
          forty: 4.78,
          bench: 0,
          vertical: 28.5,
          broad: 113,
          shuttle: 4.26,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Houston",
          dv: "American Athletic",
          jnum: 7,
          dcp: 2,
        },
      ]);
    });
};
