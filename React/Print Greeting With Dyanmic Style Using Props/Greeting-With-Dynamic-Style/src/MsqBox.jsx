export default function MsgBox({ PersonName, TextColor }) {
  let style = {color: TextColor};
  return (
    <>
      <h1 style={style}>Hello {PersonName}</h1>
    </>
  );
}
