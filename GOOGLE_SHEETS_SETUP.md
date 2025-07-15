# Google Sheets 연동 설정 가이드

## 1. Google Apps Script 설정

### 1-1. Google Apps Script 프로젝트 생성
1. [script.google.com](https://script.google.com) 접속
2. "새 프로젝트" 클릭
3. 프로젝트 이름을 "Core AI Lab Contact Form"으로 변경

### 1-2. 코드 작성
다음 코드를 `Code.gs` 파일에 입력:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  const timestamp = new Date();
  const name = data.name || '';
  const email = data.email || '';
  const message = data.message || '';
  
  sheet.appendRow([timestamp, name, email, message]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 1-3. Google Sheets 생성
1. [sheets.google.com](https://sheets.google.com)에서 새 스프레드시트 생성
2. 첫 번째 시트의 이름을 "문의 데이터"로 변경
3. A1:D1에 다음 헤더 입력:
   - A1: "제출 시간"
   - B1: "이름"
   - C1: "이메일"
   - D1: "문의 내용"

### 1-4. Apps Script에 스프레드시트 연결
1. Apps Script로 돌아가서 "서비스" → "Google Sheets API" 추가
2. 스프레드시트 ID를 복사하여 Apps Script에서 사용

### 1-5. 배포
1. "배포" → "새 배포" 클릭
2. "액세스 권한" → "모든 사용자" 선택
3. "배포" 클릭
4. 생성된 **Web App URL**을 복사

## 2. 웹사이트 설정

### 2-1. 환경 변수 설정
프로젝트 루트에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_GOOGLE_SCRIPT_URL_HERE
```

### 2-2. Vercel 배포 시 환경 변수 설정
1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Environment Variables"
3. `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` 추가
4. Google Apps Script Web App URL 입력

## 3. 테스트

1. 웹사이트의 "수강 문의" 페이지 접속
2. 폼 작성 후 제출
3. Google Sheets에서 데이터 확인

## 4. 데이터 확인 방법

### Google Sheets에서 확인
- 스프레드시트에서 실시간으로 문의 데이터 확인 가능
- 각 행에 제출 시간, 이름, 이메일, 문의 내용이 기록됨

### 알림 설정 (선택사항)
Google Sheets에서 새 행이 추가될 때 이메일 알림을 받으려면:
1. Google Apps Script에 알림 함수 추가
2. Gmail API 연동 설정

## 5. 보안 고려사항

- Google Apps Script URL은 공개되므로 민감한 정보는 포함하지 마세요
- 필요시 추가적인 인증 로직 구현 가능
- CORS 설정 확인 