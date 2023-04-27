// swagger 예시 작성내용
// api 내용이 바뀌면 내용도 수정되어야 한다.

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 목록 조회
 *     tags: [회원 목록 조회]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   personal:
 *                     type: string
 *                   prefer:
 *                     type: string
 *             example:
 *               - {email: "aaa@gmail.com", name: "철수", phone: "010-1234-5678", personal: "220110-2222222", prefer: "https://naver.com"}
 *               - {email: "bbb@gmail.com", name: "영희", phone: "010-4222-8495", personal: "211111-2222222", prefer: "https://naver.com"}
 *               - {email: "ccc@gmail.com", name: "훈이", phone: "010-9009-9594", personal: "048374-2222222", prefer: "https://naver.com"}
 *               - {email: "ddd@gmail.com", name: "맹구", phone: "010-1234-5678", personal: "849543-2222222", prefer: "https://naver.com"}
 *               - {email: "eee@gmail.com", name: "영자", phone: "010-1234-5678", personal: "220110-2222222", prefer: "https://naver.com"}
 */
