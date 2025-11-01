import { NextRequest, NextResponse } from 'next/server';
import { getLevelByNumber, getExercisesByLevel } from '@/lib/actions/levels';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const levelNumber = parseInt(id);

    const level = await getLevelByNumber(levelNumber);
    
    if (!level) {
      return NextResponse.json({ error: '关卡不存在' }, { status: 404 });
    }

    const exercises = await getExercisesByLevel(level.id);

    return NextResponse.json({
      level,
      exercises,
    });

  } catch (error) {
    return NextResponse.json(
      { error: '获取关卡失败：' + (error as Error).message },
      { status: 500 }
    );
  }
}

