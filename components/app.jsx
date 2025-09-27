// Reactコンポーネントを作成
const App = () => {
    const icon= "📝";
    const appTitle = "ToDoアプリ";
    const version = "v1.0.5";
    return (
        <Container>
            <Title icon={icon} name={appTitle} version={version}/>
            <Weather/>
            <Input/>
        </Container>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);