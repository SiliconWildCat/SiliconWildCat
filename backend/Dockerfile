FROM ubuntu:18.04



# 기본적으로 필요한 python 패키지 다운로드 
RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev \
    build-essential libssl-dev libffi-dev python3-setuptools 

RUN apt install libespeak1 -y
RUN apt install git -y
RUN apt-get install wget

WORKDIR /usr/bin
RUN apt-get install llvm-10* -y 
RUN ln -s llvm-config-10 llvm-config

WORKDIR /app
# 기본으로 동작할 파일 지정 
ENV FLASK_APP=run.py
# 실행시 호스트 ip
ENV FLASK_RUN_HOST=0.0.0.0

# requirements.txt 복사 
COPY requirements.txt requirements.txt
# 필요한 패키지 설치 
RUN pip3 install markupsafe==1.0.0
RUN pip3 install -r requirements.txt 


RUN git clone --recursive https://github.com/sce-tts/g2pK.git
RUN git clone --recursive https://github.com/thfla1105/TTS.git
#RUN git clone --recursive https://github.com/sce-tts/TTS.git


WORKDIR /app/g2pK
RUN pip3 install -q --no-cache-dir "konlpy" "jamo" "nltk" "python-mecab-ko"
RUN pip3 install -q --no-cache-dir -e .

WORKDIR /app/TTS
#RUN git config --global user.email "syoung622@naver.com"
#RUN git config --global user.name "syoung622"
#RUN git subtree add --prefix=TTS_sub https://github.com/syoung622/TTS.git syoung622-TTS

RUN pip3 install TTS
RUN pip3 install -q --no-cache-dir -e .
WORKDIR /app

# 5000번 포트 노출 
EXPOSE 5000

