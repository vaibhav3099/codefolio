// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import DefaultOgBanner from '@src/assets/seo/default-og-banner.png';

export const SITE_TITLE = 'Vaibhav Jain';
export const SITE_TAGLINE = ''; // site tagline
export const SITE_DESCRIPTION =
	'Vaibhav Jain is a Senior Frontend & Full Stack Engineer specializing in Angular, React, TypeScript, Node.js, and scalable SaaS applications. This portfolio showcases production-grade projects, clean architecture practices, open source contributions, technical blogs, and engineering insights focused on building maintainable, high-performance software. Explore real-world case studies, system design decisions, and practical software engineering expertise.'; // site meta description for SEO

export const PROFILE = {
	name: 'Vaibhav Jain',
	github: 'https://github.com/vaibhav3099',
	designation: 'Full stack Engineer',
	resumeLink: 'https://vaibhav3099.github.io/',
	portfolioTitle: 'itsvaibhavjain.com'
};

export const SEO = {
	defaultOgBanner: DefaultOgBanner
};
export const ABOUT = {
	name: PROFILE.name,
	short:
		'I am a Full Stack Engineer specializing in scalable SaaS products, AI-powered applications, and software architecture, also contributing to Open Source.',

	long: [
		'Open source contributor focused on building high-quality, production-ready software with clean architecture and maintainable code. I enjoy solving real engineering problems that create lasting impact.',
		'At SpotDraft, I led key frontend initiatives including e-signature workflows, embeddable signing, and architectural improvements that strengthened both customer experience and engineering quality.',
		'Previously, I delivered end-to-end SaaS products across ERP, HRMS, and sports management platforms, owning everything from system design to deployment as a Full Stack Engineer.'
	],
	seo_description:
		'Learn more about Vaibhav Jain, a Senior Frontend & Full Stack Engineer specializing in Angular, React, TypeScript, Node.js, and scalable SaaS applications. Explore my professional journey, open source contributions, software architecture principles, technical writing, and the engineering approach behind building high-quality, maintainable products.',
	title: `About | ${PROFILE.name}`,
	pingText: 'Open to Opportunities'
};

export const POSTS_PAGE = {
	pageTitle: `Posts | ${PROFILE.name}`,
	seo_description: 'Articles, guides, tutorials about full stack development',
	heading: `The Engineering Journal`,
	subHeading: 'Master concepts by building the right mental model'
};
export const POST_ITEM_PAGE = {
	author_desc: `${PROFILE.name} is a Full Stack Engineer specializing in scalable SaaS products, AI-powered applications, and software architecture. He is actively contributing to Open Source.`
};

export const PROJECTS_PAGE = {
	pageTitle: `All Projects | ${PROFILE.name}`,
	seo_description: 'All my project portfolio from real projects to open source projects.',
	heading: 'The Build Log',
	subHeading: 'Production work, personal projects, and open source'
};
export const TAGS_PAGE = {
	pageTitle: `Explore by Tag | ${PROFILE.name}`,
	seo_description: 'Browse topics to quickly find articles, tutorials, and insights that interest you',
	heading: 'Explore by Tag',
	subHeading: 'Browse topics to quickly find articles, tutorials, and insights that interest you'
};

export const TAGS_ITEM_PAGE = {
	pageTitle: `Tagged Blogs and Articles | ${PROFILE.name}`,
	seo_description:
		'Browse articles and daily developer journals related to "{tag}", including tutorials, experiments, project updates, and learning notes.',
	blogHeading: 'Blogs',
	journalHeading: 'Journal Entries'
};

export const JOURNAL_PAGE = {
	pageTitle: `Journal | ${PROFILE.name}`,
	seo_description: 'Software engineering journal with daily notes, technical learnings, project updates, and experiments',
	heading: `Behind the Builds`,
	subHeading: 'A journal of building, learning, and continuous improvement'
};
