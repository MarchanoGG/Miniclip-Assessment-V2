// team.ts
export class Team {
	name: string;
	strength: number;
	played: number = 0;
	wins: number = 0;
	draws: number = 0;
	losses: number = 0;
	for: number = 0;
	against: number = 0;
	difference: number = 0;
	points: number = 0;
	rank: number = 0;
	headToHead: Map<string, number> = new Map();
  
	constructor(name: string, strength: number) {
	  this.name = name;
	  this.strength = strength;
	}

	processMatchResult(goalsFor: number, goalsAgainst: number, opponentName: string): void {
		this.played++;
		this.for += goalsFor;
		this.against += goalsAgainst;
		this.difference = this.for - this.against;


		// 3 points for a win, 1 point for a draw, 0 points for a loss
		if (goalsFor > goalsAgainst) {
			this.wins++;
			this.points += 3;
		} else if (goalsFor === goalsAgainst) {
			this.draws++;
			this.points++;
		} else {
			this.losses++;
		}

		// Update the head-to-head record
		if (goalsFor > goalsAgainst) {
			if (this.headToHead.has(opponentName)) {
				const wins: number = +this.headToHead.get(opponentName)!; // it will never be undefined
				this.headToHead.set(opponentName, wins + 1);
			} else {
				this.headToHead.set(opponentName, 1);
			}
		}
	}
}
