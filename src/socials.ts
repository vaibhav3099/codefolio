import LinkedinLogo from '@src/assets/img/linkedin.svg';
import GithubLogo from '@src/assets/img/github.svg';
import MediumLogo from '@src/assets/img/medium.svg';

import type { SvgComponent } from 'astro/types';
export interface SocialItem {
	name: string;
	link: string;
	title: string;
	logo: SvgComponent;
}

export const LINKEDIN: SocialItem = {
	name: 'Linkedin',
	link: 'https://www.linkedin.com/in/vaibhav-j-868333113/',
	title: 'Follow Vaibhav Jain on linkedin',
	logo: LinkedinLogo
};

export const GITHUB: SocialItem = {
	name: 'Github',
	link: 'https://github.com/vaibhav3099',
	title: 'Follow Vaibhav Jain on Github',
	logo: GithubLogo
};
export const MEDIUM: SocialItem = {
	name: 'Medium',
	link: 'https://medium.com/@vaibhavjain301999',
	title: 'Read blogs from Vaibhav Jain on Medium',
	logo: MediumLogo
};
export const KOFI = {
	link: 'https://ko-fi.com/jainvaibhav'
};

export const allSocials: SocialItem[] = [GITHUB, LINKEDIN, MEDIUM];
