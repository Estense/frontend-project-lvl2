install:
    npm ci

publish:
    npm publish --dry-run

gendiff:
    npm link

lint: 
    npx eslint .

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish