import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import formidable from 'formidable';
import { promises as fs } from 'fs';
import { IncomingMessage } from 'http';

export async function POST(request: Request) {
  try {
    const form = formidable({
      uploadDir: join(process.cwd(), 'public/uploads'),
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    });

    // Ensure upload directory exists
    await fs.mkdir(join(process.cwd(), 'public/uploads'), { recursive: true });

    // Convert Request to IncomingMessage
    const req = request as unknown as IncomingMessage;

    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Handle measurements data
    const measurementsField = fields.measurements;
    const measurements = JSON.parse(
      Array.isArray(measurementsField) ? measurementsField[0] : measurementsField || '{}'
    );

    // Handle image files
    const frontImage = files.frontImage?.[0];
    const sideImage = files.sideImage?.[0];

    // Log the received data (in a real application, you would store this in a database)
    console.log('Received measurements:', measurements);
    if (frontImage) console.log('Front image saved at:', frontImage.filepath);
    if (sideImage) console.log('Side image saved at:', sideImage.filepath);

    return NextResponse.json({
      success: true,
      message: 'Measurements and images received successfully',
      data: {
        measurements,
        frontImage: frontImage ? frontImage.filepath : null,
        sideImage: sideImage ? sideImage.filepath : null,
      },
    });
  } catch (error) {
    console.error('Error processing measurements:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error processing measurements',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 