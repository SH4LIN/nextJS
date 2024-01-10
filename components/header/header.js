import Link from 'next/link';
import logImage from '@/assets/logo.png';
import styles from './header.module.css';
import Image from 'next/image'
import HeaderBackground from '@/components/header/header-background'
import NavLink from '@/components/header/nav-link'

export default function Header() {

	return (
	  <>
		  <HeaderBackground />
		  <header className = { styles.header }>
			   <Link className = { styles.logo } href = "/">
				   <Image src = { logImage } alt = "A plate with food on it" priority />
				   NextLevel Food
			   </Link>

			  <nav className = { styles.nav }>
				  <ul>
					  <li>
						  <NavLink href = "/meals">Browse Meals</NavLink>
					  </li>

					  <li>
						  <NavLink href = "/community">Foodies Community</NavLink>
					  </li>
				  </ul>
			  </nav>
		  </header>
	  </>
	);
}