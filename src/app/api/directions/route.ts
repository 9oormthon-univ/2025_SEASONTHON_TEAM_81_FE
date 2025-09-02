import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.toString();
  const api_url = `https://maps.apigw.ntruss.com/map-direction/v1/driving?${query}`;

  const header = {
    'x-ncp-apigw-api-key-id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
    'x-ncp-apigw-api-key': process.env.NAVER_CLIENT_SECRET || '',
  };

  try {
    const response = await fetch(api_url, {
      method: 'GET',
      headers: header,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('api router error:', err);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
