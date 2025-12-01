const Title = (props) => {
  return (
    <Stack direction="horizontal" className="item-align-end" gap={3}>
      <h1>{props.icon}{props.name}</h1>
      <h3 className="h3">{props.version}</h3>
    </Stack>
  );
}