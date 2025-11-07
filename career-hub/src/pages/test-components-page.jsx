import Button from "../components/atoms/Button/button.atom";

const TestPage = () => {
    console.log("Rendering Test Components Page")
    return (
        <>
            <h1>Test Components Page</h1>
            <Button variant="outline"> Click Me </Button>
        </>
    )
}

export default TestPage;