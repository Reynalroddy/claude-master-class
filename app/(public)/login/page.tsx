import AuthForm from '@/components/AuthForm/AuthForm'

export default function LoginPage() {
  return (
    <div className="center-content">
      <div className="page-content">
        <AuthForm mode="login" />
      </div>
    </div>
  )
}
