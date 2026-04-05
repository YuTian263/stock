const mongoose = require('mongoose') as typeof import('mongoose')

function getUriDetails(uri: string): {
  protocol: string
  requestedHost: string
  requestedDatabase: string
} {
  const parsedUri = new URL(uri)

  return {
    protocol: parsedUri.protocol.replace(':', ''),
    requestedHost: parsedUri.host || '(not set)',
    requestedDatabase: parsedUri.pathname.replace(/^\//, '') || '(default)',
  }
}

async function main(): Promise<void> {
  const uri: string | undefined = process.env.MONGODB_URI

  if (!uri) {
    console.error('MONGODB_URI is not set. Add it to .env before testing.')
    process.exit(1)
  }

  try {
    const uriDetails = getUriDetails(uri)

    await mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    })

    const connection = mongoose.connection

    if (!connection.db) {
      throw new Error('Connected, but the database handle is unavailable.')
    }

    await connection.db.admin().ping()

    console.log('MongoDB connection test passed.')
    console.log(`Protocol: ${uriDetails.protocol}`)
    console.log(`Requested host: ${uriDetails.requestedHost}`)
    console.log(`Connected host: ${connection.host}`)
    console.log(`Connected port: ${connection.port}`)
    console.log(`Requested database: ${uriDetails.requestedDatabase}`)
    console.log(`Database name: ${connection.name}`)
    console.log(`Ready state: ${connection.readyState}`)
  } catch (error: unknown) {
    console.error('MongoDB connection test failed.')
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  } finally {
    await mongoose.disconnect()
  }
}

void main()
