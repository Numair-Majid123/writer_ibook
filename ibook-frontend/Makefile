# Makefile for Writer's iBook Frontend

# Variables
ANGULAR_CLI = ng
NPM = npm
SERVE_PORT = 4200

# Default target
all: install build

# Install dependencies
install:
	$(NPM) install

# Build the project
build:
	$(ANGULAR_CLI) build

# Serve the application
serve:
	$(ANGULAR_CLI) serve --port $(SERVE_PORT)

# Run tests
test:
	$(ANGULAR_CLI) test

# Run linter
lint:
	$(ANGULAR_CLI) lint

# Clean build artifacts
clean:
	rm -rf dist
	rm -rf node_modules

# Update dependencies
update:
	$(NPM) update

# Generate documentation
docs:
	$(ANGULAR_CLI) doc

# Help target
help:
	@echo "Available targets:"
	@echo "  install  - Install dependencies"
	@echo "  build    - Build the project"
	@echo "  serve    - Serve the application"
	@echo "  test     - Run tests"
	@echo "  lint     - Run linter"
	@echo "  clean    - Clean build artifacts"
	@echo "  update   - Update dependencies"
	@echo "  docs     - Generate documentation"

.PHONY: all install build serve test lint clean update docs help
