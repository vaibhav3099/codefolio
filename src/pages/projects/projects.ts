import { getRepositoryDetails } from '../../utils';
import SpotdraftColor from '@src/assets/company/SpotDraft-logo-mark-color.svg';
import SpotdraftBlack from '@src/assets/company/SpotDraft-logo-mark-dark.svg';
import SpotdraftWhite from '@src/assets/company/SpotDraft-logo-mark-white.svg';
import UnthinkableColor from '@src/assets/company/unthinkable-color.svg';
import PlivoBlack from '@src/assets/company/plivo-black.svg';
import PlivoWhite from '@src/assets/company/plivo-white.svg';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}
export interface BaseProject {
	name: string;
	description: string;
	tags?: string[];
	postLink?: string;
	demoLink?: string;
	demoLinkRel?: string;
	toFeatureOnHome?: boolean;
}
export interface OpenSourceContribution extends BaseProject {
	repoLink: string;
	prLink: string;
}
export interface WorkProject extends BaseProject {
	associatedCompany: Company;
	techStack?: string[];
}

export interface Company {
	name: string;
	logoWhite?: ImageMetadata;
	logoBlack?: ImageMetadata;
	logoColor?: ImageMetadata;
	website?: string;
}

export const SPOTDRAFT: Company = {
	name: 'SpotDraft',
	logoColor: SpotdraftColor,
	logoBlack: SpotdraftBlack,
	logoWhite: SpotdraftWhite,
	website: 'https://www.spotdraft.com/'
};

export const UNTHINKABLE: Company = {
	name: 'Unthinkable',
	logoColor: UnthinkableColor,
	website: 'https://www.unthinkable.co/'
};

export const PLIVO: Company = {
	name: 'Plivo',
	logoBlack: PlivoBlack,
	logoWhite: PlivoWhite,
	website: 'https://www.plivo.com/'
};

export const openSourceContributions: OpenSourceContribution[] = [
	{
		name: 'Obsidian - Spaced Repetition',
		repoLink: 'https://github.com/st3v3nmw/obsidian-spaced-repetition',
		prLink: 'https://github.com/st3v3nmw/obsidian-spaced-repetition/pull/1585',
		description: 'Improved navigation efficiency and reduced effort required to manage large review trees',
		tags: ['productivity', 'opensource'],
		toFeatureOnHome: true
	}
];

export const workProjects: WorkProject[] = [
	{
		name: 'E signature Module',
		associatedCompany: SPOTDRAFT,
		description:
			'Rearchitectured E-signature modules from scratch with Clean Architecture, enforcing strict dependency rules, and creating Abstract Services for each injectable service, ultimately making the whole module testable',
		techStack: ['Angular', 'Clean Architecture'],
		demoLink: 'https://drive.google.com/file/d/1mk2LK5-s5LVKd_3G_H5tf5gIsxwKz5Bf/view',
		tags: ['Angular'],
		toFeatureOnHome: true
	},
	{
		name: 'Signature Packets',
		associatedCompany: SPOTDRAFT,
		description:
			'Enabled users to generate a unified contract for multiple uploads. For performance used OnPush change detection strategy to avoid re-renders',
		techStack: ['Angular', 'Clean Architecture'],
		tags: ['Angular', 'Clean Architecture']
	},
	{
		name: 'Embeddable PDF Signing SDK',
		associatedCompany: SPOTDRAFT,
		description:
			'Built an embeddable PDF signing platform enabling third-party applications to integrate secure contract signing without requiring users to log in separately',
		techStack: ['Angular', 'Clean Architecture'],
		tags: ['Angular', 'iframe']
	},
	{
		name: 'HR & Payroll Management',
		associatedCompany: UNTHINKABLE,
		description: 'Built an Human Resource Management System to manage the complete employee lifecycle from onboarding to payroll',
		tags: ['Angular', 'NodeJs']
	},
	{
		name: 'Sports League Management Platform',
		associatedCompany: UNTHINKABLE,
		description: 'Built a Sports Management System to manage end-to-end operations of sports leagues across USA and Canada',
		tags: ['Angular', 'NodeJs'],
		demoLink: 'https://www.youtube.com/watch?v=_-I22pmYZRM'
	},

	{
		name: 'MatchRider Blog',
		associatedCompany: UNTHINKABLE,
		description: 'Built a blog website for MatchRider',
		tags: ['Angular', 'NodeJs'],
		demoLink: 'https://www.matchrider.de/en/',
		toFeatureOnHome: true
	},
	{
		name: 'Migrations - Angular',
		associatedCompany: UNTHINKABLE,
		description: 'Migrated a legacy Angular codebase to the latest Angular version',
		tags: ['Angular']
	},
	{
		name: 'Design System & Component Library',
		associatedCompany: PLIVO,
		description: 'Built custom Buttons, Snackbars, Modals, Loaders, Input fields, and Dropdowns by customizing MUI primitives',
		tags: ['React', 'MaterialUI'],
		demoLink: 'https://www.youtube.com/watch?v=CQp_zUx65D8',
		toFeatureOnHome: true
	}
];

