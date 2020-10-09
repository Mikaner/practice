up:
	docker-compose up -d

stop:
	docker-compose stop

ps:
	docker-compose ps

restart:
	make stop
	make up

init:
	docker-compose build
	docker-compose run --rm react sh -c "npm install -g create-react-app && create-react-app workplace"