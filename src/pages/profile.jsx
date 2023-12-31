import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';

const Profile = (props) => {
  const router = useRouter();
  
  const { user: { email, username } } = props;

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      router.push('/').then();
    } catch (e) {
      console.log(e);
    }
  }
  
  const backtohome = () => {
    try {
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={logout}>Logout</button>
	  <button onClick={backtohome}>BacktoHome</button>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;
  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://127.0.0.1:1337/api/users/me', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return {
    props: {
      user
    }
  }
}

export default Profile;