// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// api/~ 하위에 작성된 파일들은 api에 대한 응답으로서 동작한다
// ~/api/hello 로 요청시 전달받을 값을 정의
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
