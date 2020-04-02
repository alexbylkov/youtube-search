import React from 'react'
import { Row, Col } from 'antd'
import FavouritesList from '../../../containers/favouritesList'
import Header from '../../header'
import './favouritesPage.sass'

const FavouritesPage = ({history}) => (
    <>
        <Header/>
        <Row>
            <Col span={14} offset={5}>
                <div className="favorites">
                    <h2 className="favorites__title">Избранное</h2>
                    <ul className="favorites__list">
                        <FavouritesList history={history}/>
                    </ul>
                </div>
            </Col>
        </Row>
    </>
)

export default FavouritesPage