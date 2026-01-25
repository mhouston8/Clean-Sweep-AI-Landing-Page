import './PrivacyPolicy.css'
import appLogo from './assets/app-logo.png'

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <header className="privacy-header">
        <div className="privacy-header-content">
          <a href="/" className="logo">
            <img src={appLogo} alt="Clean Sweep AI Logo" className="logo-icon" />
            Clean Sweep AI
          </a>
          <a href="/" className="back-link">← Back to Home</a>
        </div>
      </header>

      <div className="privacy-content">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: January 25, 2026</p>

          <section>
            <h2>Your Privacy Matters</h2>
            <p>
              Clean Sweep AI is operated by Brevix Ventures LLC. We are committed to protecting your privacy 
              and ensuring your data stays on your device.
            </p>
          </section>

          <section>
            <h2>Local Processing Only</h2>
            <p>
              <strong>All processing happens on your device.</strong> Clean Sweep AI analyzes your photos, 
              contacts, and files locally. We do not upload, transmit, or store your personal data, photos, 
              contacts, or files on our servers. Your data never leaves your iPhone.
            </p>
          </section>

          <section>
            <h2>What We May Collect</h2>
            <p>
              We may collect anonymous usage statistics and crash reports to improve the app. This includes 
              device information (model, iOS version) and app performance data. We do not collect or share 
              your personal content.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>
              You can revoke photo library access at any time through iOS Settings. If you have questions 
              about your data or this policy, contact us at support@cleansweepai.com.
            </p>
          </section>

          <section>
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page 
              with an updated date.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              <strong>Brevix Ventures LLC</strong><br />
              Email: support@cleansweepai.com
            </p>
          </section>

          <div className="privacy-footer">
            <p>© 2026 Brevix Ventures LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
