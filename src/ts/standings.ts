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
			
			// If both points and goal difference are equal, sort by goals scored in descending order
			return teamB.for - teamA.for;
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
