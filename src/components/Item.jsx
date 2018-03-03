import React, { Component } from 'react';
import styled from 'styled-components';
import icon from '../images/icon.jpg';

const ListItem = styled.li`
    background: white;
    height: 40px;
    border: 1px solid #cecaca;
    margin-bottom: 10px;

    div {
        height: 40px;
        display: flex;
    }
`;

const Icon = styled.div`
    width: 20px;
    margin: 10px;

    img {
        width: 20px;
        height: 20px;
    }
`;

const Description = styled.div`
    margin: 10px;
    color: #4e4e4e;
    font-size: 14px;
    width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block !important;
    text-align: left;
`;

const Manage = styled.div`
    margin: 10px;
    margin-left: auto;

    span {
        margin-left: 5px;
        width: 12px;
        color: gray;
        cursor: pointer;
    }
`;

export class Item extends Component {
	render(){
		const { id, description, onRemove = ()=> false, onMove = ()=> false, index = 0, length }= this.props;
		return (
			<ListItem>
				<div>
					<Icon>
						<img src={icon} alt="icon" />
					</Icon>
					<Description>
						{description}
					</Description>
					<Manage>
						{
							index !== length - 1 &&
                            <span onClick={()=> onMove({ index, move: 'DOWN' })}> 
                                &darr;
                            </span>
						}
						{
							index !== 0 && 
                            <span onClick={()=> onMove({ index, move:'UP' })}> 
                                &uarr;
                            </span>
						}
						<span onClick={()=> onRemove({id})}> 
                            &times;
						</span>
					</Manage>
				</div>
			</ListItem>
		);
	}
}

export default Item;
