import { StyledComponentsRegistry, ThemeRegistry, ToastProvider } from '@/components/layout'
import StateProvider from '@/components/layout/StateProvider'
import vazir from '@/res/fonts/vazir'

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => (
  <html>
    <body className={vazir.variable}>
      <StateProvider>
        <StyledComponentsRegistry>
          <ToastProvider />
          <ThemeRegistry>{children}</ThemeRegistry>
        </StyledComponentsRegistry>
      </StateProvider>
    </body>
  </html>
)

export default RootLayout
