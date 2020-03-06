# msa-study

spring cloud 및 netflix OSS를 이용해 MSA를 구축해보기 위한 실습 코드입니다.

## 주제

헬스/영양 관리 애플리케이션

## 기능
- 사용자 관리 (회원가입 / 로그인 / 회원정보 수정 등)
- 헬스한 내용 입력 (운동 종류 / 볼륨)
- 음식별 칼로리 및 탄단지 검색
- 하루 먹은거 입력
- 입력받은 내용으로 헬스/영양 통계 제공 (달력이나 그래프 등?)

## 마이크로서비스

* 외부 기능 : 애플리케이션 외부로 노출시켜 프론트엔드와 직접 소통하는 기능
* 내부 기능 : 애플리케이션 내부에서 마이크로서비스들 간의 통신에만 사용하는 기능

### 1. 계정 마이크로서비스

#### 외부 기능

- 회원가입
- 로그인

#### 내부 기능

- 유저정보 조회

### 2. 헬스 마이크로서비스

#### 외부 기능
 
- 헬스한 내용 기록

#### 내부 기능

- 헬스 기록 조회

### 3. 영양 마이크로서비스

#### 외부 기능

- 음식별 칼로리 및 탄단지 검색
- 하루 먹은 음식의 칼로리 및 탄단지 계산 및 기록

#### 내부 기능

- 영양 기록 조회

### 4. 통계 마이크로서비스

#### 외부 기능

- 헬스 및 영양 통계 제공

## 초기 디자인

일단 대략적인 다자인만. 디테일은 개발해나가면서 확정할 예정

### 로그인 / 회원가입 페이지

![image1](https://github.com/BaekGeunYoung/msa-study/blob/master/images/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.JPG)

### 헬스 / 영양 정보 입력 페이지

![image2](https://github.com/BaekGeunYoung/msa-study/blob/master/images/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.JPG)

![image3](https://github.com/BaekGeunYoung/msa-study/blob/master/images/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C3.JPG)

### 헬스 / 영양 통계 제공 페이지

![image4](https://github.com/BaekGeunYoung/msa-study/blob/master/images/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C4.JPG)
