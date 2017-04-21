import React from 'react';
import Footer from '../components/Footer';
import './StorePage.scss';
import Store from '../components/Store';

const StorePage = () => (

	<div className="StorePage">
		<div className="title">Store</div>
		<Store />
		<Footer />
	</div>


);


export default StorePage;