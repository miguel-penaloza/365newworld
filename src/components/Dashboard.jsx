import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';


const Container = styled.div`
    height: 100%
    background: gray;

    div {
        overflow: auto;
        overflow-y: hidden;
    }
`;

const Title = styled.h1`
    
`;

const Box = styled.div`
    margin-top: 10px;
    padding: 10px;
    display: flex;

    ul {
        margin-left: auto;
        margin-right: auto;
        width: 300px;
        list-style-type: none;
    }
`;

class Dashboard extends Component {

	constructor(props){
		super(props);
		this.state= {
			items: []
		};
	}

	componentWillMount() {
		// Mock Api call to receive List
		this.setState({
			items: [
				{ id: 1, description: 'Hello World', index: 0},
				{ id: 2, description: 'Hello World2', index: 1},
				{ id: 3, description: 'Hello World3', index: 2},
				{ id: 4, description: 'Hello World4', index: 3},
				{ id: 5, description: 'Hello World5', index: 4},
				{ id: 6, description: 'Hello World6', index: 5},
				{ id: 7, description: 'Hello World7', index: 6},
				{ id: 8, description: 'Hello World with a too long description', index: 7}
			]
		});    
	}
    
	onRemove({ id }){
		const { items } = this.state;
		this.setState({ items: items
			.filter(item => item.id !== id)
			.map((item, index ) => Object.assign({}, item, { index}))
		});
	}
    
	onMove({ index, move  }) {
		const { items } = this.state;
		const sortedIndex = [];
		if(move === 'UP') {
			items.forEach(item => {
				if(item.index === index) {
					sortedIndex.push(Object.assign({}, item, { index: index - 1}));
					return;
				}
				if(item.index === index - 1) {
					sortedIndex.push(Object.assign({}, item, { index: item.index + 1}));
					return;
				}
				sortedIndex.push(item);
			});
		}
		if(move === 'DOWN') {
			items.forEach(item => {
				if(item.index === index) {
					sortedIndex.push(Object.assign({}, item, { index: item.index + 1}));
					return;
				}
				if(item.index === index + 1) {
					sortedIndex.push(Object.assign({}, item, { index: item.index - 1}));
					return;
				}
				sortedIndex.push(item);
			});
		}
		this.setState({ items: sortedIndex });
	}
    
	sort({ items }){
		return items.sort(
			(a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0)
		);
	}

	render() {
		const { items } = this.state;
		return (
			<Container>
				<Title>
                    Todo
				</Title>
				<Box>
					<ul>
						{this.sort({
							items: items
						}).map(item => 
							<Item 
								key={item.id}
								length={items.length}
								onRemove={(filter) => this.onRemove(filter)}
								onMove={(filter) => this.onMove(filter)}
								{...item}
							/>
						)}
					</ul>
				</Box>
			</Container>
		);
	}
}

export default Dashboard;
