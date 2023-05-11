import axios from "axios";
import cheerio from "cheerio";

const createMessage = async () => {
  //입력된 메시지: `안녕하세요. https://wwww.naver.com에 방문해 주세요.`
  //1. 입력된 메시지에서 http로 시작하는  문장이 있는지 먼저 찾기().find() 등의 알고리즘 사용)
  const url = "https://www.naver.com";
  //2. axios.get으로 요청해서 html코드 받아오기 => 스크래핑
  const result = await axios(url);
  //console.log(`결과값: `, result);
  //console.log(`data값: `, result.data);
  //3.스크래핑 결과 og(오픈그래프) 코드를 골라내서 변수에 담기(cheerio 모듈 사용)
  const $ = cheerio.load(result.data);
  $("meta").each((index, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property"); //og:title..og:desc...
      const value = $(el).attr("content");
      console.log(`key: `, key, `/`, `value: `, value);
    }
  });
};

createMessage();
