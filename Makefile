## Based on https://medium.com/better-programming/heres-how-you-can-use-docker-with-create-react-app-3ee3a972b04e
## See also: https://medium.com/better-programming/production-ready-react-with-docker-and-travis-ci-8e2ae559f26c


up:
	docker-compose up

all: create-react-app build-docker

create-react-app:
	docker run \
		-it \
		--rm \
		--volume "$(pwd):/workspaces" \
		--workdir /workspaces \
		node \
		npx create-react-app my-react-docker-app
	
build-docker:
	docker build --file Dockerfile.dev .
