export default function Users({ user, show, setShow }) {
  return (
    <div className="">
      <p>{user.name}</p>
      <p>{user.lastName}</p>
      <p>{user.country}</p>
      <img src={user.photo} />
      {show ? (
        <input type="button" value="Hide!" onClick={() => setShow(!show)} />
      ) : (
        <input type="button" value="Update!" onClick={() => setShow(!show)} />
      )}
    </div>
  );
}
