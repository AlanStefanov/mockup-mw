docker build -t mockup-mw:latest .

docker run -it -dp 4000:80 mockup-mw:latest
