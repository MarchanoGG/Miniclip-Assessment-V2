// main.ts
import './less/main.less';
import { Team } from './ts/team'; 
import { Match } from './ts/match'; 
import { UI } from './ts/ui';
import { Standings } from './ts/standings'; // Import the Standings class

const teamA = new Team('Team A', 95); 
const teamB = new Team('Team B', 80);
const teamC = new Team('Team C', 75);
const teamD = new Team('Team D', 55);

/*  =====================
	If you want to test the team strength, you can simulate 1000 rounds.
	The team with the highest strength should win the most matches.
	===================== */

// for (let i = 0; i < 1000; i++) {
//     Match.simulateRound(teamA, teamB, teamC, teamD);
//     Match.simulateRound(teamA, teamC, teamB, teamD);
//     Match.simulateRound(teamA, teamD, teamB, teamC);
// }

Match.simulateRound(teamA, teamB, teamC, teamD);
Match.simulateRound(teamA, teamC, teamB, teamD);
Match.simulateRound(teamA, teamD, teamB, teamC);

const standings = Standings.updateStandings([teamA, teamB, teamC, teamD]);
UI.renderScoreboard(standings);