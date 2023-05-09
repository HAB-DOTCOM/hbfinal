# syntax=docker/dockerfile:1.2
FROM python:3.9
RUN mkdir /hibir
ADD . /hibir
WORKDIR /hibir
RUN pip install -r requirements_unix.txt
RUN echo 'DELETE_ALL' | python new_initiation.py
VOLUME /hibir/configuration /hibir/static/files
EXPOSE 443
ENTRYPOINT python run.py
