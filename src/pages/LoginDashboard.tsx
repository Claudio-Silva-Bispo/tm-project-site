import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginDashboard() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://tmservicescleaning.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        throw new Error('Inválido email ou senha');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      router.push('/Dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 mt-20">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="text-center">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">Access to the Requests Panel</h2>

        </div>

        <form className="space-y-6" onSubmit={handleSubmit} name='formulario-login'>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-[#F3AACB] sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-2">
              <input
                id="senha"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-[#F3AACB] sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-[#F3AACB]">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#F3AACB] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus:outline focus:outline-2 focus:outline-red-600"
              disabled={loading}
            >
              {loading ? 'Acessando...' : 'Acesse'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Registration only
          <span className="block font-semibold text-[#F3AACB]">with the system administrator</span>
        </p>

      </div>
    </div>
  );
}
