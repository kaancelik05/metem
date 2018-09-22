import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Grid, Button, Icon, Image } from 'semantic-ui-react';
// import { mete1 } from '../../images/mete1.jpeg'

import {
	fetchMovies,
	deleteMovie
} from '../../actions/movies';
import MoviesList from '../MoviesList';

class MoviesPage extends Component {
	static propTypes = {
		movies: PropTypes.object.isRequired,
		deleteMovie: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.fetchMovies();
	}

	render() {
		return (
			// <div>
			// 	<h2>Movies</h2>
			// 	<MoviesList
			// 		deleteMovie={this.props.deleteMovie}
			// 		movies={this.props.movies} />
			// </div>

			<Grid stackable columns={3}>
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete1.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>11.Ay</span>
								</Card.Meta>
								<Card.Description>Doğum günü çekimlerinden... :)</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete2.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>11.Ay</span>
								</Card.Meta>
								<Card.Description>Doğayı sev yeşili koru !</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete3.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>11.Ay</span>
								</Card.Meta>
								<Card.Description>Çevreyi temiz tutalım.</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete11.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>4.Ay</span>
								</Card.Meta>
								<Card.Description>#tbt 8 ay olmuş zaman ne çabuk geçiyor</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete4.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>11.Ay</span>
								</Card.Meta>
								<Card.Description>Süt alabilir miyim ?</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete5.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>11.Ay</span>
								</Card.Meta>
								<Card.Description>Lahmacun bi harika dostum!!</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete6.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>11.Ay</span>
								</Card.Meta>
								<Card.Description>Ben sporcunun zeki, çevik ve bonbonunu severim :)</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete7.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>10.Ay</span>
								</Card.Meta>
								<Card.Description>Bizim çocuklarla taqılırqen</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete20.jpg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>7.Ay</span>
								</Card.Meta>
								<Card.Description>Anneanne & Dede</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete8.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>6.Ay</span>
								</Card.Meta>
								<Card.Description>Ne memuru süt bey :P</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete9.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>6.Ay</span>
								</Card.Meta>
								<Card.Description>Ben burada iyiyim..)</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete12.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>4.Ay</span>
								</Card.Meta>
								<Card.Description>Annem & Babam</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete14.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>3.Ay</span>
								</Card.Meta>
								<Card.Description>Küçük Kurbağa</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/metekaan.jpg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>5.Ay</span>
								</Card.Meta>
								<Card.Description>Dayday</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete15.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>3.Ay</span>
								</Card.Meta>
								<Card.Description>Einstein derler bana</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete16.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>2.Ay</span>
								</Card.Meta>
								<Card.Description>Bigün yine çekmişim takımları şekilim ! :)</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete17.jpeg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>1.Ay</span>
								</Card.Meta>
								<Card.Description>Ööööö !</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				},
				{
					<Grid.Column>
						<Card>
							<Image src={require('../../images/mete18.jpg')} />
							<Card.Content>
								<Card.Header>Mete Çağan</Card.Header>
								<Card.Meta>
									<span className='date'>1.Gün</span>
								</Card.Meta>
								<Card.Description>Ben geldiiim :)</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				}
			</Grid>


		);
	}
}

const mapStateToProps = ({ movies }) => {
	return {
		movies
	}
};

const mapDispatchToProps = {
	fetchMovies,
	deleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
