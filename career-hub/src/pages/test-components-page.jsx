import Button from "../components/atoms/Button/button.atom";
import TextInput from "../components/atoms/TextInput/textinput.atom";

const TestPage = () => {
    return (
        <>
            <h1>Test Components Page</h1>
            <Button variant="outline"> Click Me </Button>
            <TextInput size="small"/>
        </>
    );
}

export default TestPage;