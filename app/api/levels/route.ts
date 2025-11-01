import { NextResponse } from 'next/server';
import { getAllLevels } from '@/lib/actions/levels';

export async function GET() {
  try {
    const levels = await getAllLevels();
    return NextResponse.json(levels);
  } catch (error) {
    return NextResponse.json(
      { error: '获取关卡失败：' + (error as Error).message },
      { status: 500 }
    );
  }
}

