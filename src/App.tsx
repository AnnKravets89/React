import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>

        <MyComponent title={'Hello Ann!'}>
            Lorem ipsum dolor sit amet.
        </MyComponent>
        <MyComponent title={'Hello Okten!'} />
        <MyComponent title={'Hello World!'} />
        <MyComponent title={'Have a nice day, Ann!'} />
    </>
  )
}

export default App
