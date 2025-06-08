import { PasswordSecurity } from "@/components/banking/profile/security/password-security"
import { TwoFactorAuth } from "@/components/banking/profile/security/two-factor-auth"
import { LoginHistory } from "@/components/banking/profile/security/login-history"
import { DeviceManagement } from "@/components/banking/profile/security/device-management"

export default function SecurityPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Security</h1>
      <div className="grid grid-cols-1 gap-6">
        <PasswordSecurity />
        <TwoFactorAuth />
        <LoginHistory />
        <DeviceManagement />
      </div>
    </div>
  )
}
