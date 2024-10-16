.PHONY: setup run test clean

PYTHON := python3

VENV := venv
VENV_ACTIVATE := . $(VENV)/bin/activate

APP := manage.py

setup:
	$(PYTHON) -m venv $(VENV)
	$(VENV_ACTIVATE) && pip install -r requirements.txt

run:
	$(VENV_ACTIVATE) && $(PYTHON) $(APP) runserver

migrations:
	$(VENV_ACTIVATE) && $(PYTHON) $(APP) makemigrations

migrate:
	$(VENV_ACTIVATE) && $(PYTHON) $(APP) migrate

test:
	$(VENV_ACTIVATE) && pytest

clean:
	rm -rf $(VENV)
	find . -type f -name '*.pyc' -delete
	find . -type d -name '__pycache__' -delete

format:
	$(VENV_ACTIVATE) && black .

requirements:
	pip freeze > requirements.txt
