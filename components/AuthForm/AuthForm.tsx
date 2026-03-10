'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import styles from './AuthForm.module.css'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const isLogin = mode === 'login'

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    console.log({ email, password })
  }

  return (
    <div className={styles.card}>
      <h2 className="form-title">{isLogin ? 'Log In' : 'Sign Up'}</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete={isLogin ? 'current-password' : 'new-password'}
            />
            <button
              type="button"
              className={styles.toggleBtn}
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={`btn ${styles.submitBtn}`}>
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <p className={styles.switchText}>
        {isLogin ? (
          <>Don&apos;t have an account? <Link href="/signup">Sign Up</Link></>
        ) : (
          <>Already have an account? <Link href="/login">Log In</Link></>
        )}
      </p>
    </div>
  )
}
