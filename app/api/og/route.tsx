import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get text from the URL parameters
  const title = searchParams.get('title') || 'MCPIndex';
  const description = searchParams.get('description') || 'Discover the best MCP Servers';

  return new ImageResponse(
    (
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* Purple background glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          backgroundColor: '#3B0764',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.5,
        }} />

        {/* Green background glow */}
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          backgroundColor: '#064E3B',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.4,
        }} />

        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px',
          zIndex: 1,
        }}>
          
          {/* Top badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
            padding: '8px 24px',
            borderRadius: '9999px',
            border: '1px solid #581C87',
            backgroundColor: '#1E1033',
          }}>
            <span style={{
              color: '#C084FC',
              fontSize: 20,
              fontWeight: 500,
              fontFamily: 'monospace',
            }}>
              MCPIndex • 2026
            </span>
          </div>

          {/* Title */}
          <div style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.1,
            maxWidth: '900px',
            marginBottom: '24px',
          }}>
            {title}
          </div>

          {/* Colored divider line */}
          <div style={{
            width: '100px',
            height: '4px',
            backgroundImage: 'linear-gradient(90deg, #A855F7, #10B981)',
            marginBottom: '30px',
            borderRadius: '2px',
          }} />

          {/* Description */}
          <div style={{
            fontSize: 28,
            color: '#A1A1AA',
            lineHeight: 1.4,
            maxWidth: '700px',
            marginBottom: '40px',
          }}>
            {description}
          </div>

          {/* Website logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 25px',
            borderRadius: '12px',
            backgroundColor: '#18181B',
            border: '1px solid #27272A',
          }}>
            <span style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700 }}>MCPIndex</span>
            <span style={{ color: '#3F3F46', fontSize: 24, margin: '0 10px' }}>/</span>
            <span style={{ color: '#71717A', fontSize: 24 }}>mcpindex.dev</span>
          </div>

        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
