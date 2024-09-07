export type Match = {
    matchid: number;
    team1: string;
    team2: string;
    scores: string;
    setscores: string;
    attacks1: number;
    attacks2: number;
    blocks1: number;
    blocks2: number;
    serves1: number;
    serves2: number;
    opponent_errors1: number;
    opponent_errors2: number;
    total1: number;
    total2: number;
    digs1: number;
    digs2: number;
    reception1: number;
    reception2: number;
    sets1: number;
    sets2: number;
}

export type MATCHID = {
    matchid: string;
}