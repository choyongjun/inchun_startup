<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<style>

</style>

<body>

<h3>프로젝트</h3>
<h4>프로젝트 생성</h4>
<pre>
** 프로젝트명 을 projectName으로 변경후 작업 **
** DB비밀번호 란에 DBpassWord로 변경후 작업 **

adduser 프로젝트명

cp /etc/apache2/sites-available/pphanyang.hogi.co.kr.conf /etc/apache2/sites-available/프로젝트명.hogi.co.kr.conf
vim /etc/apache2/sites-available/프로젝트명.hogi.co.kr.conf
ln -s /etc/apache2/sites-available/프로젝트명.hogi.co.kr.conf /etc/apache2/sites-enabled/프로젝트명.hogi.co.kr.conf

mkdir /home/프로젝트명/service
mkdir /home/프로젝트명/service/www
mkdir /home/프로젝트명/service/logs
cp -R /home/pphanyang/service/* /home/프로젝트명/service
chown -R 프로젝트명:프로젝트명 /home/프로젝트명/*
service apache2 restart

mysql -uroot -p

pwd> ha1068

create database 프로젝트명;
grant all privileges on 프로젝트명.* to 프로젝트명@'localhost' identified by 'DB비밀번호';
flush privileges;

phpmyadmin 접속
table 복제 후 user password sha1로 설정후 변경

ftp접속 
config db.php
    dbname => ProjectName으로 변경
    db 비밀번호 입력
</pre>
<h4>비밀번호 변경</h4>
<pre>
** 리눅스에서 **

passwd ProjectName

비밀번호 입력 2회
</pre>


<h3>한양인</h3>
<h4>한양인 로그인 테스트 아이디</h4>
<pre>hytest
script09script09</pre>

<h4>한양대학교 API개발자 센터</h4>
<pre>
https://api.hanyang.ac.kr/myapp/list.page
mrhajh
Ha7242!@#$
</pre>
































	
	
	
	
</body>
</html>