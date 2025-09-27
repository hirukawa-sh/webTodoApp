const Input = () => {
    return (
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded">
            <Card.Body>
                <Stack direction="horizontal" gap={3}>
                <Form.Control placeholder="やることを入力"/>
                <Button as="input" type="button" value="追加" />
                <Button as="input" variant="secondary" type="button" value="XML保存" />
                </Stack>
                <hr />
                <Form.Control type="file" />
            </Card.Body>
        </Card>
    );
}