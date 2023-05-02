//swagger 예시 작성내용
//api 내용이 바뀌면 내용도 수정되어야 한다.

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: 게시글 조회
 *     tags: [Boards]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  properties:
 *                      number:
 *                          type: int
 *                          example: 3
 *                      writer:
 *                          type: string
 *                          example: 철수
 *                      title:
 *                          type: string
 *                          example: 제목입니다.
 *                      constents:
 *                          type: string
 *                          example: 내용입니다.
 */

/**
 * @swagger
 * /boards:
 *   post:
 *    summary: 게시글 등록하기
 *    tags: [Boards]
 *    responses:
 *      200:
 *        description: 성공
 */