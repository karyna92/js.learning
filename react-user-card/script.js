const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const users = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvcTDdGKA0NpeYDIg06D1StbVBCrBCh_dwA&s",
      name: "Jeck",
      tweets: 1000,
      following: 1000,
      followers: 30,
      gender: "male",
    },
    {
      img: "https://ychef.files.bbci.co.uk/624x351/p07ryyyj.jpg",
      name: "Anna",
      tweets: 1450,
      following: 200,
      followers: 387,
      gender: "female",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9mUxmzRjJFxP_cpU0SrhxMg9eWaT1YTEQw&s",
      name: "Kim",
      tweets: 2700,
      following: 2100,
      followers: 1807,
      gender: "nonbinary",
    },
    {
      img: "https://www.battersea.org.uk/sites/default/files/inline-images/Nervous%20cat%20being%20held%20in%20vets%20arms.png",
      name: "Daniel",
      tweets: 800,
      following: 700,
      followers: 207,
      gender: "",
    },
  ];

  return (
    <main>
      {users.map((user) => (
        <UserCard
          key={user.name}
          img={user.img}
          name={user.name}
          tweets={user.tweets}
          following={user.following}
          followers={user.followers}
          gender={user.gender}
        />
      ))}
    </main>
  );
}
const UserCard = ({ img, name, tweets, following, followers,gender }) => {
  const genderStyle = {
    boxShadow:
      gender === "male"
        ? "4px 4px 6px rgba(21, 42, 113, 0.7)"
        : gender === "female"
        ? "4px 4px 6px rgba(104, 33, 143, 0.7)"
        :"4px 4px 6px rgba(30, 137, 103, 0.7)"
  }

  return (<>
    <div className="card" style={genderStyle} >
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <button>+</button>
      <div className="status">
        <div>
          <p className="word">tweets</p>
          <p className="number">{tweets}</p>
        </div>
        <div>
          <p className="word">following</p>
          <p className="number">{following}</p>
        </div>
        <div>
          <p className="word">followers</p>
          <p className="number">{followers}</p>
        </div>
      </div>
    </div>

    </>);
};
