import React from 'react';
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";
import Header from "./components/Header/Header";
const App = () => {
    const handleButtonClick = (id) => {
        console.log(`Button ${id} clicked`);
    };

    return (
        <div>
            <Header/>
            <Text />
            <Button onClick={handleButtonClick} id={1}>Click me</Button>
            <Button onClick={handleButtonClick} id={2}>Click me too</Button>
            <Footer />

        </div>

    );
};

export default App;
