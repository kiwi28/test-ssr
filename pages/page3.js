import axios from "axios";
import { Header } from "../components/Header";

const fetchData = async () =>
  await axios
    .get("https://620a5eb992946600171c59df.mockapi.io/api/v1/users")
    .then((res) => ({
      error: false,
      users: res.data,
    }))
    .catch(() => ({
      error: true,
      users: null,
    }));

const Page2 = ({ users, error }) => {
  console.log("users din componenta (getInitialProps): ", users);

  return (
    <section>
      <Header />

      <header>
        <h1>Page3</h1>
      </header>
      {error && <div>There was an error.</div>}
      {!error && users && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.name}</td>
                <td>{user.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export const getInitialProps = async () => {
  const data = await fetchData();
  console.log("data din getInitialProps: ", data);

  return {
    props: data,
  };
};

export default Page2;
