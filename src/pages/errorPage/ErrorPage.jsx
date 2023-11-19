import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import globalCss from 'css/global.module.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <section>
      <div className={globalCss['container']}>
        <h1 style={{ textAlign: 'center' }}>404</h1>
      </div>
    </section>
  );
}
