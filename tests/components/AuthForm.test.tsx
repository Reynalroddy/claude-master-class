import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import AuthForm from '@/components/AuthForm/AuthForm'

describe('AuthForm — login mode', () => {
  it('renders email input, password input, and Log In button', () => {
    render(<AuthForm mode="login" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('contains a link to /signup', () => {
    render(<AuthForm mode="login" />)
    const link = screen.getByRole('link', { name: /sign up/i })
    expect(link).toHaveAttribute('href', '/signup')
  })

  it('logs email and password on submit', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    render(<AuthForm mode="login" />)
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret123' } })
    fireEvent.click(screen.getByRole('button', { name: /log in/i }))
    expect(spy).toHaveBeenCalledWith({ email: 'test@example.com', password: 'secret123' })
    spy.mockRestore()
  })

  it('does not log and shows error when fields are empty', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<AuthForm mode="login" />)
    fireEvent.click(screen.getByRole('button', { name: /log in/i }))
    expect(spy).not.toHaveBeenCalled()
    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument()
    spy.mockRestore()
  })
})

describe('AuthForm — signup mode', () => {
  it('renders email input, password input, and Sign Up button', () => {
    render(<AuthForm mode="signup" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('contains a link to /login', () => {
    render(<AuthForm mode="signup" />)
    const link = screen.getByRole('link', { name: /log in/i })
    expect(link).toHaveAttribute('href', '/login')
  })

  it('logs email and password on submit', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    render(<AuthForm mode="signup" />)
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'new@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'mypassword' } })
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }))
    expect(spy).toHaveBeenCalledWith({ email: 'new@example.com', password: 'mypassword' })
    spy.mockRestore()
  })
})

describe('AuthForm — password toggle', () => {
  it('toggles password input type between password and text', () => {
    render(<AuthForm mode="login" />)
    const input = screen.getByLabelText('Password')
    const toggle = screen.getByRole('button', { name: /show password/i })

    expect(input).toHaveAttribute('type', 'password')
    fireEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'text')
    fireEvent.click(screen.getByRole('button', { name: /hide password/i }))
    expect(input).toHaveAttribute('type', 'password')
  })
})
