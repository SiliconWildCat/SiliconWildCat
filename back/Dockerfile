FROM ubuntu:18.04

WORKDIR /app

# 기본적으로 필요한 python 패키지 다운로드 
RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev \
    build-essential libssl-dev libffi-dev python3-setuptools

# 기본으로 동작할 파일 지정 
ENV FLASK_APP=app.py
# 실행시 호스트 ip
ENV FLASK_RUN_HOST=0.0.0.0

# requirements.txt 복사 
COPY ./back/requirements.txt requirements.txt
# 필요한 패키지 설치 
RUN pip3 install -r requirements.txt 

# 5000번 포트 노출 
EXPOSE 5000

