import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Example: fetch from DB or dummy object
  const item = {
    id,
    name: `Item #${id}`,
    description: 'This is a placeholder item.',
  };

  return NextResponse.json(item);
}
