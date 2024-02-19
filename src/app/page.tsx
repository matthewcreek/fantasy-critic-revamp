import roster from "../mocks/roster.json"

export default function Home() {
  
  const gameData = roster.games.map((game, index) => (
    <>
      <div className="py-2" key={index}>
        <h1>{game.category}</h1>
        <h1>{game.name}</h1>
        <h1>{game.criticScore}</h1>
        <h1>{game.points}</h1>
      </div>
    </>
  ))

  return (
    <>
      <div>
        <h1>{roster.publisherName}</h1>
        <h1>{roster.userDisplayName}</h1>
        <h1>{`\$${roster.budget}`}</h1>
        <h1 className="py-2">{gameData}</h1>
      </div>
    </>
  );
}
