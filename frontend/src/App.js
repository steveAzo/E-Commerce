
import MyButton from "./components/button.js";
import Profile from "./components/profile.js";
import TodoList from "./components/try.js";
import PackingList from "./components/one.js";

const user = {
  name: 'Stephen Kwaku',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function App() {
  
  return (
    <>
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
        <Profile />
        <br/>
        <MyButton  />
        <br/>
        <TodoList/>
        <PackingList/>
        

      </div>
    </>
    
    
  );
}

export default App;
