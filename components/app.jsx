// Reactコンポーネントを作成
const App = () => {
    return (
        <Container className="text-center" style={{ marginTop: '50px' }}>
            <Title />
            <Button variant="primary" onClick={() => alert('Hello World!')}>
                Click Me
            </Button>
        </Container>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);