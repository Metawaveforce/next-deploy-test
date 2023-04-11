
import Login from '../pages/login';
import { useRouter } from 'next/router'
import { useStateContext } from '../componets/Hboprovider'
import { useEffect,} from 'react'
import Mainlayout from '../componets/Mainlayout';



export default function Index() {
    const globalState = useStateContext();
  const router = useRouter();
  
  useEffect( () => {
      const loggedIn = false;
  
      if( loggedIn === false) {
          router.push ('/create')
          loggedIn == true;
        } else{
          router.push ('/')
        }
        }, )  
       return (
<Mainlayout>
<Login/>
</Mainlayout>
)
}




