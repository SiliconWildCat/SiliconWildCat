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


def save_text(text, database, session):
    # 데이터베이스에 텍스트 저장하기 (ORM 이용)
    new_input = TEXT(text)
    session.add(new_input)
    session.commit()

