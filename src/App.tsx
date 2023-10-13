import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
    return (
        <>
            <Navbar />
            {/* <Home /> */}
            {/* <Login /> */}
            <Cadastro />
            <Footer />
        </>
    );
}

export default App;
