import React from 'react'
import {Link} from 'react-router-dom'
import './warning.sass'

const Page404 = () => (
    <div className="warning">
        <h1>УПС, страница не найдена...</h1>
        <p>Страница не найдена, но Вы можете вернуться на 
            <Link to="/"> ГЛАВНУЮ</Link>
        </p>
    </div>
)

export default Page404