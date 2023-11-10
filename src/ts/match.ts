// match.ts
import { Team } from './team';
import { UI } from './ui';

export class Match {

	// I assume that a round always consists of 4 teams.
	static simulateRound(homeTeam1: Team, awayTeam1: Team, homeTeam2: Team, awayTeam2: Team): void {
		const matches = [
			this.simulateMatch(homeTeam1, awayTeam1),
			this.simulateMatch(homeTeam2, awayTeam2)
		];
		UI.renderRound(matches);
	}

	static simulateMatch(team1: Team, team2: Team): {homeTeam: string; awayTeam: string; homeGoals: number; awayGoals: number; } {
		/*  =====================
			To make the simulation more realistic, i use a random number 
			between 1 and 6 to determine the number of shots on goal.
		===================== */
		const team1GoalChance = Math.floor(Math.random() * 6) + 1;
		const team2GoalChance = Math.floor(Math.random() * 6) + 1;

		/*  =====================
			The strength of the team is a number between 0 and 100 (declared when creating the team)
			The strength of the team determines how many of the possible goals are scored.
		===================== */
		const team1Goals = Math.floor(team1GoalChance * (team1.strength / 100));
		const team2Goals = Math.floor(team2GoalChance * (team2.strength / 100));

		team1.processMatchResult(team1Goals, team2Goals);
		team2.processMatchResult(team2Goals, team1Goals);

		return {
			homeTeam: team1.name,
			awayTeam: team2.name,
			homeGoals: team1Goals,
			awayGoals: team2Goals
		};
	}

}
