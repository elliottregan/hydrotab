all: run

build:
	docker build -t hydrotab .

run: build
	docker run --rm -it \
	--name hydrotab \
	-p 3000:3000 \
	-v `pwd`:/app \
	hydrotab $(c)

develop:
	make run c="npm run dev"
