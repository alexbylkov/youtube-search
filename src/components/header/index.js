import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../../assets/logo.png'
import {logout} from '../../redux/actions/auth'
import {Row, Col, Affix} from 'antd'
import './header.sass'

const Header = ({logout}) => (		
	<Affix>
		<header className="header">
			<Row>
				<Col span={14} offset={5}>
					<div className="header__container">
						<div>
							<Link to="/" >
								<img src={logo} alt="logo"/>
							</Link>
							<NavLink 
							to="/" 
							exact 
							className="header__link" 
							activeClassName="header__link_active"
							>Поиск</NavLink>
							<NavLink 
							to="/liked" 
							className="header__link" 
							activeClassName="header__link_active"
							>Избранное</NavLink>
						</div>
						<button onClick={logout} className="header__button">Выйти</button>
					</div>
				</Col>
			</Row>
		</header>
	</Affix>
)


export default connect(null, {logout})(Header);
