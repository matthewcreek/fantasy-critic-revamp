import roster from "../mocks/roster.json"

export default function Home() {
  
  const gameData = roster.games.map((game) => (
    <>
      <tr key={game.uniqueId}>
        <td>{`${game.category}${game.name}`}</td>
        <td>{game.criticScore}</td>
        <td>{game.points}</td>
      </tr>
    </>
  ))

  return (
    <>
      <div>
        <h1>{roster.publisherName}</h1>
        <h1>{roster.userDisplayName}</h1>
        <h1>{`\$${roster.budget}`}</h1>
        <table>
          <tr>
            <th className="w-2/3">Game</th>
            <th className="w-1/6">Critic</th>
            <th className="w-1/6">Points</th>
          </tr>
          {gameData}
        </table>
      </div>
    </>
  );
}
