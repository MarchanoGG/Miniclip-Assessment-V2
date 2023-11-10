// ui.ts
import { Team } from './team';

export class UI {
    static RoundCounter: HTMLHeadingElement = <HTMLHeadingElement>document.querySelector('.round__title');
    static MatchesList: HTMLUListElement = <HTMLUListElement>document.querySelector('.rounds__list');

    static renderRound(matches: {homeTeam: string; awayTeam: string; homeGoals: number; awayGoals: number}[]): void {
		// Create a new list item
        const newListItem = document.createElement('li');
        newListItem.classList.add('round');

        const heading = document.createElement('h3');
        // Check if the round counter exists
        if (UI.RoundCounter) {
            const roundNumber = parseInt(UI.RoundCounter.textContent!.split(' ')[1]) + 1;
            heading.textContent = `Round ${roundNumber}`;
        } else {
            heading.textContent = 'Round 1';
        }
        heading.classList.add('round__title'); 
        UI.RoundCounter = heading;
        newListItem.appendChild(heading);

        // Create a table element for the new list item
        const table = document.createElement('table');
        table.classList.add('round__table'); 

        // Create the table header
        const tableHeader = table.createTHead();
        const headerRow = tableHeader.insertRow();
        ['Home', 'Score', 'Away'].forEach((headerText) => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Create the table body with the provided match information
        const tableBody = table.createTBody();
        matches.forEach((match) => {
            const row = tableBody.insertRow();
            [match.homeTeam, `${match.homeGoals} - ${match.awayGoals}`, match.awayTeam].forEach((cellText) => {
                const td = document.createElement('td');
                td.textContent = cellText;
                row.appendChild(td);
            });
        });

        // Append the table to the new list item
        newListItem.appendChild(table);

        // Prepend the new list item to the list
        UI.MatchesList.prepend(newListItem);
    }


    static renderScoreboard(teams: Team[]): void {
        const scoreboard = <HTMLTableElement>document.querySelector('.scoreboard table tbody');
        for (const team of teams) {
          const row: any = scoreboard.insertRow();
            if (team.rank <= 3) {
                const img = document.createElement('img');
                img.src = `./${team.rank}.png`;
                img.alt = `${team.rank}`;
                row.insertCell(0).appendChild(img);
            } else {
                row.insertCell(0).textContent = team.rank;
            }
            row.insertCell(1).textContent = team.name;
            row.insertCell(2).textContent = team.played;
            row.insertCell(3).textContent = team.wins;
            row.insertCell(4).textContent = team.draws;
            row.insertCell(5).textContent = team.losses;
            row.insertCell(6).textContent = team.for;
            row.insertCell(7).textContent = team.against;
            row.insertCell(8).textContent = team.difference;
            row.insertCell(9).textContent = team.points;
        }
    }
}