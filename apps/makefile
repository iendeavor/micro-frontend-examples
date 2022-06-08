dev:
	pnpm --recursive --parallel run dev

build:
	cd components-vue-3 && pnpm run build
	pnpm --recursive --filter *-react run build
	pnpm --recursive --filter *-vue run build
	cd react-app && pnpm run build
	cd vue-app && pnpm run build
	cd layout-app && pnpm run build
	cd app && pnpm run build

preview:
	cd app && pnpm run preview
