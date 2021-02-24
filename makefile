all: run

container:
	docker build -t hydrotab .

run: container
	docker run --rm -it \
	--name hydrotab \
	-p 3000:3000 \
	-v `pwd`:/app \
	hydrotab $(c)

develop:
	make run c="npm run dev"

develop-browser:
	make run c="npm run dev:browser"

build:
	make run c="npm run build"

build-browser:
	make run c="npm run build:browser"
