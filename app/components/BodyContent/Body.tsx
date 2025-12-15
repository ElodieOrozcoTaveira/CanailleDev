// BodyContent.tsx
'use client'

import { useEffect } from 'react'

export default function BodyContent({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useEffect(() => {
    // Nettoie les attributs d'extensions
    document.body.removeAttribute('cz-shortcut-listen')
  }, [])

  return <body suppressHydrationWarning>{children}</body>
}