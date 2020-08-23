import React from 'react';
import User from '../user';

export default class CharacterList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			updatedList: [],
			value: '',
		}
	}

	componentDidMount() {
		fetch('https://rickandmortyapi.com/api/character/')
			.then(res => res.json())
			.then(
				(result) => {
					this.list = result.results;
					this.setState({
						list: result.results,
					});
				},
				err => {
					console.error(err);
				})
	}

	Search = (e) => {
		let serachValue = e.target.value;
		console.log(serachValue);
		let filteredList =  this.list.filter(( item, index) => {
			if(item.name.indexOf(serachValue) > -1) return true;
		} );
		this.setState({list: filteredList});
	}

	render() {
		const { list, value } = this.state;
		return (
			<>
				<div className="search">
					<input type="search" placeholder="Search here" onChange={(e) => this.Search(e)}/>
				</div>
				<div className="list">
					{
						list.map((user, index) => {
							return <User index={index} user={user} />
						})
					}
				</div>

				<style jsx>{`
            .list {
							display: flex;
							flex-wrap: wrap;
							background: #000; 
							border-radius: 5px;
							padding: 0 10px;
							justify-content: center;
						}
						
						.search {
							margin: 0 0 20px 0;
						}
						
						input {
							background: #fff;
							border: 1px solid #aaa;
							padding: 10px;
							border-radius: 5px;
							width: 100%;
							box-sizing: border-box;
						}
        `}
				</style>
			</>
		)
	}
}