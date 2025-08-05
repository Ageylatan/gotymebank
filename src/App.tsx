import './App.css'

function App() {
  console.log('App component is rendering')
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Your Project
        </h1>
        <p className="text-center text-muted-foreground">
          Your project is now running! Start building something amazing.
        </p>
      </div>
    </div>
  )
}

export default App