up:
	docker-compose up -d

start:
	docker-compose start

stop:
	docker-compose stop

ps:
	docker-compose ps

restart:
	make stop
	make start

init:
	docker-compose build
	docker-compose run --rm react sh -c "npm install -g create-react-app && create-react-app workplace"