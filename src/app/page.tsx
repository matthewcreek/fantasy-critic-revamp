import roster from "../mocks/roster.json"

export default function Home() {
  
  const userData = roster.map((user) => {

    const gameData = user.games.map((game) => (
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
      <h1 className="pt-2">{user.publisherName}</h1>
      <h1>{user.userDisplayName}</h1>
      <h1>{user.budget}</h1>
      <table>
        <tr>
          <th>Game</th>
          <th>Critic</th>
          <th>Points</th>
        </tr>
        {gameData}
      </table>
    </>
  )})

  return (
    <>
      <div>
        {userData}
      </div>
    </>
  );
}
