.PHONY: test clean

clean:
	rm -rf dist

clean-demo:
	rm -rf example/build

build: clean
	element-toolbox build

dev:
	element-toolbox dev

test:
	element-toolbox test

push:
	element-toolbox push

publish:
	element-toolbox publish

test-single:
	element-toolbox test --single-run

deploy-demo: clean-demo
	element-toolbox deploy-demo