import { useEffect } from 'react';

export default function Oferta() {
  useEffect(() => {
    window.location.href = '/proxy';
  }, []);

  return <p>Redireccionando…</p>;
}
