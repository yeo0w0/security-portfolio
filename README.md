# DEV.LOG — 개인 개발 포트폴리오

Next.js App Router + TypeScript + MongoDB(Mongoose) 기반의 반응형 개인 포트폴리오입니다.

## 포함 기능
- 반응형 포트폴리오 메인 페이지
- 소개 / 기술 스택 / 프로젝트 아카이브 / 연락처 섹션
- 프로젝트 분류 필터
- MongoDB Atlas 연동용 Mongoose 모델 및 API
- MongoDB 환경 변수가 없어도 화면을 확인할 수 있는 데모 프로젝트 카드
- 관리자 인증을 추가하기 전까지 프로젝트 생성(POST API)은 비활성화

## 실행하기

Node.js 20 이상을 권장합니다.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 여세요.

## MongoDB 연결 (선택 사항)

프로젝트 루트에 `.env.local` 파일을 만들고 다음 값을 설정합니다.

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

MongoDB Atlas에서 DB 사용자와 네트워크 접근 권한을 설정한 뒤 실제 연결 문자열을 넣으세요. `.env.local`은 GitHub에 올리지 마세요.

API:
- `GET /api/projects` — MongoDB에 저장된 프로젝트 목록 조회
- `POST /api/projects` — 관리자 인증이 구현되기 전까지 403 반환

현재 메인 페이지는 첫 화면을 바로 확인할 수 있도록 시작용 예시 프로젝트 데이터를 사용합니다. 실제 프로젝트로 교체하려면 `src/app/page.tsx` 상단의 `projects` 배열을 수정하세요. 데이터베이스를 메인 화면과 연결하려면 서버 컴포넌트 방식으로 데이터 조회를 옮기거나 별도 클라이언트 API 호출을 추가하면 됩니다.

## 실제 배포 전 수정할 부분
1. `src/app/page.tsx`의 프로젝트 예시를 실제 프로젝트와 링크로 교체
2. `src/app/page.tsx`의 `mailto:hello@example.com`을 본인 이메일로 변경
3. 페이지 제목과 설명을 본인 소개에 맞게 수정 (`src/app/layout.tsx`)
4. Vercel에 배포할 때 `MONGODB_URI` 환경 변수를 설정 (DB 연동을 사용할 경우)

## Vercel 배포
1. GitHub에 저장소 생성 후 프로젝트 파일을 push합니다.
2. Vercel에서 해당 저장소를 Import합니다.
3. MongoDB 연동을 쓸 경우 Project Settings → Environment Variables에 `MONGODB_URI`를 등록합니다.
4. Deploy를 실행합니다.

> 참고: 이 프로젝트는 시작용 포트폴리오 템플릿입니다. 예시 카드와 연락처를 실제 정보로 바꾼 후 공개하세요.
