from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String

Base = declarative_base()

class TEXT(Base):
    __tablename__='text'
    input = Column(String(100), primary_key=True)

    def __init__(self, input):
        self.input = input

    def __repr__(self):
        print('TEXT : {%s}',input)


class MUSIC(Base):
    __tablename__='music'
    title = Column(String(45), primary_key=True)
    url = Column(String(100))

    def __init__(self, title, url):
        self.title = title
        self.url = url


def save_text(text, database, session):
    # 데이터베이스에 텍스트 저장하기 (ORM 이용)
    new_input = TEXT(text)
    session.add(new_input)
    session.commit()


def find_path(title, session):
    music =  session.query(MUSIC).filter(MUSIC.title==title).all()
    print(music[0].url)
    return music[0].url