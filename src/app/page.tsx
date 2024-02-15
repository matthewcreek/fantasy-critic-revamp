import roster from "../mocks/roster.json"

export default function Home() {
  const gameArr = roster.games
  console.log(roster.games[0].category)
  return (
    <>
      <div>
        <h1>{roster.publisherName}</h1>
        <h1>{roster.userDisplayName}</h1>
        <h1>{roster.games[0].category}</h1>
        <h1>{roster.games[0].name}</h1>
        <h1>{roster.games[0].criticScore}</h1>
        <h1>{roster.games[0].points}</h1>
      </div>
    </>
  );
}
