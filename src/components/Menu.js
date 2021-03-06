import React from 'react'
import styled from 'styled-components';


function Menu({menuItem}) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item)=>{
                    return <div className='grid-item' key={item.id}>
                        <div className='portfolio-content'>
                            <div className='portfolio-image'>
                                <img src={item.image} alt='' />
                            </div>
                            <ul>
                                <li>
                                    <a href={'item.link1'}>

                                    </a>
                                </li>
                                <li>
                                    <a href={'item.link2'}></a>
                                </li>
                            </ul>
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                    </div>
                })
            }
            
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`

`;
export default Menu
