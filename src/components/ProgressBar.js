import React from 'react'
import styled from 'styled-components';
function ProgressBar({title,width,text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className='progress-bar'>
                <p>{text}</p>
                <div className='progress'>
                    <span style={{width: width}} >

                    </span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`

    .progress-bar{
        display: felx;
        align-items: center;
        
        p{
            padding-right: 1.2rem;
        }
        
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);
            span{
                background-color: #2db9ff;
                position: absolute;
                left:  0;
                bottom: 0;
                height: 100%;
            }
        }
    }
`;

export default ProgressBar
