// standings.ts
import { Team } from './team';

export class Standings {
	static sortTeams(teams: Team[]): Team[] {
		return teams.sort((teamA, teamB) => {
			
			// Sort by points in descending order
			if (teamA.points !== teamB.points) {
				return teamB.points - teamA.points;
			}
	
			// If points are equal, sort by goal difference in descending order
			if (teamA.difference !== teamB.difference) {
				return teamB.difference - teamA.difference;
			}
	
			// If goal difference is equal, sort by goals for in descending order
			if (teamA.for !== teamB.for) {
				return teamB.for - teamA.for;
			}
	
			// If goals for are equal, sort by goals against in ascending order
			if (teamA.against !== teamB.against) {
				return teamA.against - teamB.against;
			}
	
			// If all above are equal, sort by head-to-head results
			if (teamA.points === teamB.points &&
				teamA.difference === teamB.difference &&
				teamA.for === teamB.for) {
			
				// Get the points from head-to-head results
				let teamAPointsFromTeamB = teamA.headToHead.get(teamB.name) || 0;
				let teamBPointsFromTeamA = teamB.headToHead.get(teamA.name) || 0;
	
				return teamBPointsFromTeamA - teamAPointsFromTeamB;
			}
	
			// If all above are equal, sort by goals against in ascending order
			return teamB.against - teamA.against;
		});
	}

	static updateRanks(teams: Team[]): Team[] {
		teams.forEach((team, index) => {
			team.rank = index + 1;
		});
		return teams;
	}

	static updateStandings(teams: Team[]): Team[] {
		teams = Standings.sortTeams(teams);
		teams = Standings.updateRanks(teams);
		return teams;
	}
}
