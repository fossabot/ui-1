import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from 'react-router-component';

import { Button } from '../../src/lib';

import { AvatarDemo } from './components/avatar-demo';
import { ButtonDemo } from './components/button-demo';
import { CardDemo } from './components/card-demo';
import { CheckboxDemo } from './components/checkbox-demo';

import './styles.scss';

const PAGES = [
	{ component: AvatarDemo, name: 'Avatars', route: '/avatar' },
	{ component: ButtonDemo, name: 'Button', route: '/button' },
	{ component: CardDemo, name: 'Card', route: '/card' },
	{ component: CheckboxDemo, name: 'Checkbox', route: '/checkbox' },
];

ReactDOM.render(
	<div className='demo-container layout-row '>
		<aside className='jar-theme-bg--gradient'>
			<div className='layout-row layout-align-start-center'>
				<img className='us' src='/assets/jar.svg' /> <div><h5> @streamjar/ui-react </h5> </div>
			</div>

			<Router.Link href='/avatar'></Router.Link>

			{ PAGES.map(page => <Router.Link key={page.route} href={page.route}><Button >{page.name}</Button></Router.Link>)}
		</aside>

		<div className='content layout-row layout-align-center-start'>
			<div className='demo'>
				<Router.Locations>
					{ PAGES.map(page => <Router.Location key={page.route} path={page.route} handler={page.component} />) }
				</Router.Locations>
			</div>
		</div>

	</div>,
	document.getElementById('app'),
	);
