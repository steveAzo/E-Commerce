import MyButton from "./components/button.mjs";

const user = {
  name: 'Stephen Kwaku',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          
        }}
      
      /><br/>
      <MyButton/>
    </div>
    
  );
}

export default App;
