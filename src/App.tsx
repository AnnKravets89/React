import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>

        <MyComponent text={'Hello Ann!'} />
        <MyComponent text={'Hello Okten!'} />
        <MyComponent text={'Hello World!'} />
        <MyComponent text={'Have a nice day, Ann!'} />
        {/*{MyComponent({text: 'Hello Ann'})}*/}

    </>
  )
}

export default App
