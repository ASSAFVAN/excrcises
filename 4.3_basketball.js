function johnTeam(game1, game2, game3) {
  return (game1 + game2 + game3) / 3;
}
function mikeTeam(game1, game2, game3) {
  return (game1 + game2 + game3) / 3;
}

const johnTeamAvg = johnTeam(89, 120, 103);
const mikeTeamAvg = mikeTeam(116, 94, 123);

if (johnTeamAvg > mikeTeamAvg) {
  console.log(`The winners are John's team with an avarage of ${johnTeamAvg}!`);
} else if (johnTeamAvg < mikeTeamAvg) {
  console.log(`The winners are Mike's team with an avarage of ${mikeTeamAvg}!`);
} else {
  console.log("There are no winners");
}
